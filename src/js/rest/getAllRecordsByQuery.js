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
const getAllRecordsByQueryWithCursor = async(params) => {
    if (!(params && params.app)) {
        return createError(errors.required.app);
    }

    const cursor = await kintoneUtility.rest.postCursor({
        app: params.app,
        size: 500,
        query: params.query || '',
        fields: params.fields || []
    });

    try {
        let {records: allRecords, next} = await kintoneUtility.rest.getCursor({
            id: cursor.id,
            isGuest: params.isGuest
        });

        while (next) {
            const res = await kintoneUtility.rest.getCursor({
                id: cursor.id,
                isGuest: params.isGuest
            });
            next = res.next;
            allRecords = allRecords.concat(res.records);
        }

        return {records: allRecords};
    } finally {
        await kintoneUtility.rest.deleteCursor({
            id: cursor.id,
            isGuest: params.isGuest
        });
    }
};

export default getAllRecordsByQueryWithCursor;
