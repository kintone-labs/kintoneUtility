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
circle-ci-test!!!!!!!!!!!
const getAllRecordsByQueryWithCursor = async params => {
    if (!(params && params.app)) {
        return createError(errors.required.app);
    }

    const cursor = await kintoneUtility.rest.postCursor({
        app: params.app,
        size: 500,
        query: params.query || '',
        fields: params.fields || []
    });

    let allRecords;
    try {
        let {records, next} = await kintoneUtility.rest.getCursor({
            id: cursor.id,
            isGuest: params.isGuest
        });
        allRecords = records;

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
        if (allRecords.length !== Number.parseInt(cursor.totalCount, 10)) {
            await kintoneUtility.rest.deleteCursor({
                id: cursor.id,
                isGuest: params.isGuest
            });
        }
    }
};

export default getAllRecordsByQueryWithCursor;
