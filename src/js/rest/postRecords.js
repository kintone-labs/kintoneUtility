import createError from './common/createError';
import errors from './resource/errorMessages.json';
import makeBulkParam from './common/makeBulkParam';
import sendRequest from './common/sendRequest';
import limit from './resource/limit.json';

/** Function: postRecords
 *   Can't register over 2000 records.
 *   If request is failed, no record is registerd.
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
    } else if (params.records && params.records.length > limit.bulk) {
        return createError(errors.overLength.recordsLessThan2000);
    } else if (params.records && params.records.length < 1) {
        return createError(errors.emptyArray.records);
    }

    let isGuest = Boolean(params.isGuest);
    let param = makeBulkParam({
        app: params.app,
        records: params.records,
        method: 'POST',
        isGuest: isGuest
    });

    return sendRequest('/k/v1/bulkRequest', 'POST', param, isGuest);
};
