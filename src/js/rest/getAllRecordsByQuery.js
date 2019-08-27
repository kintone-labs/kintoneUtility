import createError from './common/createError';
import errors from './resource/errorMessages.json';

/** Function: getAllRecordsByQuery
 *  @param {object} params
 *  @param {number} params.app
 *  @param {string} [params.query]
 *  @param {array} [params.fields]
 *  @param {boolean} [params.isGuest]
 *
 *  @return {object} result
 */
let getAllRecordsByQueryWithCursor = async (params) => {
    if (!(params && params.app)) {
        return createError(errors.required.app);
    }

    try {
        const cursor = await kintoneUtility.rest.postCursor({
            app: params.app,
            size: 500,
            query: params.query || '',
            fields: params.fields || [],
        });

        let {records: allRecords, next} = await kintoneUtility.rest.getCursor({
            id: cursor.id,
            isGuest: params.isGuest,
        });

        while (next) {
            const res = await kintoneUtility.rest.getCursor({
                id: cursor.id,
                isGuest: params.isGuest,
            });
            next = res.next;
            allRecords = allRecords.concat(res.records);
        }

    } finally {
        const result = await kintoneUtility.rest.deleteCursor({
            id: cursor.id,
            isGuest: params.isGuest,
        });
        console.log(`DELETE cursor:`, result);
    }
    return {records: allRecords};
};

export default getAllRecordsByQueryWithCursor;
