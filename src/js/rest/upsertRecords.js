import createError from './common/createError';
import errors from './resource/errorMessages.json';
import makeBulkParam from './common/makeBulkParam';
import getAllRecordsByQuery from './getAllRecordsByQuery';
import sendRequest from './common/sendRequest';
import limit from './resource/limit.json';

/** Function: upsertRecords
 *  Can't upsert over 1500 records.
 *   If request is failed, no record is inserted and updated.
 *  @param {object} params
 *  @param {number} params.app
 *  @param {array} params.records
 *  @param {boolean} [params.isGuest]
 *
 *  @return {object} result
 */
export default (params) => {
    if (!(params && params.app)) {
        return createError(errors.required.app);
    } else if (!Array.isArray(params.records)) {
        return createError(errors.shouldBeArray.records);
    } else if (params.records && params.records.length > limit.upsertRecords) {
        return createError(errors.overLength.recordsLessThan1500);
    } else if (params.records && params.records.length < 1) {
        return createError(errors.emptyArray.records);
    }

    const doesExistSameFieldValue = (allRecords, comparedRecord) => {
        if (comparedRecord.updateKey.value === '') {
            // updateKey.value is '' => post
            return false;
        }
        for (let i = 0; i < allRecords.length; i++) {
            if (allRecords[i][comparedRecord.updateKey.field].value === comparedRecord.updateKey.value) {
                // exist => put
                return true;
            }
        }
        // doesn't exist => post
        return false;
    };

    const sendUpsertBulkRequest = (postRecords, putRecords) => {
        const isGuest = Boolean(params.isGuest);
        const postBulkParam = makeBulkParam({
            app: params.app,
            records: postRecords,
            method: 'POST',
            isGuest: isGuest
        });
        const putBulkParam = makeBulkParam({
            app: params.app,
            records: putRecords,
            method: 'PUT',
            isGuest: isGuest
        });
        const param = {
            requests: postBulkParam.requests.concat(putBulkParam.requests)
        };

        return sendRequest('/k/v1/bulkRequest', 'POST', param, isGuest);
    };

    return getAllRecordsByQuery(params).then((resp) => {
        const allRecords = resp.records;
        const records = params.records;
        const putRecords = [];
        const postRecords = [];
        for (let i = 0; i < records.length; i++) {
            if (doesExistSameFieldValue(allRecords, records[i])) {
                putRecords.push(records[i]);
            } else {
                const record = records[i].record;
                record[records[i].updateKey.field] = {
                    value: records[i].updateKey.value
                };
                postRecords.push(record);
            }
        }

        return sendUpsertBulkRequest(postRecords, putRecords);
    });
};
