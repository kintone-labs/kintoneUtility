import createError from './common/createError';
import errors from '!json!./resource/errorMessages.json';
import sendRequest from './common/sendRequest';

/** Function: postRecord
 *  @param {object} params
 *  @param {number} params.app
 *  @param {object} params.record
 *  @param {boolean} params.isGuest
 *
 *  @return {object} result
 */
export default (params) => {
    if (!(params && params.app)) {
        return createError(errors.required.app);
    }

    let param = {
        app: params.app,
        record: params.record
    };
    let isGuest = Boolean(params.isGuest);

    return sendRequest('/k/v1/record', 'POST', param, isGuest);
};
