import createError from './common/createError';
import errors from '!json!./resource/errorMessages.json';
import sendRequest from './common/sendRequest';

/** Function: downloadFile
 *  @param {object} params
 *  @param {string} params.fileKey
 *  @param {boolean} params.isGuest
 *
 *  @return {object} result
 */
export default (params) => {
    if (!(params && params.fileKey)) {
        return createError(errors.required.fileKey);
    }

    let param = {
        fileKey: params.fileKey
    };
    let isGuest = Boolean(params.isGuest);

    return sendRequest('/k/v1/file', 'GET', param, isGuest);
};
