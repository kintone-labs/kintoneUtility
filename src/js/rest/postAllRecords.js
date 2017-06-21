import createError from './common/createError';
import errors from '!json!./resource/errorMessages.json';
import postRecords from './postRecords';
import sliceArray from './common/sliceArray';
import limit from '!json!./resource/limit.json';

/** Function: postAllRecords
 *   Can register over 2000 records, but can't do rollback.
 *  @param {object} params
 *  @param {number} params.app
 *  @param {array} params.records
 *  @param {boolean} params.isGuest
 *
 *  @return {object} result
 */
export default (params) => {
    if (!(params && params.app)) {
        return createError(errors.required.app);
    } else if (!Array.isArray(params.records)) {
        return createError(errors.shouldBeArray.records);
    } else if (params.records && params.records.length < 1) {
        return createError(errors.emptyArray.records);
    }

    let results = [];

    let postAll = (beginNum) => {
        let begin = beginNum || 0;
        let isGuest = Boolean(params.isGuest);
        let param = {
            app: params.app,
            records: sliceArray(params.records, begin),
            isGuest: isGuest
        };

        return postRecords(param).then((response) => {
            results = results.concat(response.results);
            begin += limit.bulk;
            if (params.records.length <= begin) {
                return {
                    results: results
                };
            }
            return postAll(begin);
        });
    };

    return postAll();
};
