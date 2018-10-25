import createError from './common/createError';
import errors from './resource/errorMessages.json';
import sendRequest from './common/sendRequest';

/** Function: uploadFile
 *  @param {object} params
 *  @param {string} params.fileName
 *  @param {object} params.blob
 *  @param {boolean} [params.isGuest]
 *
 *  @return {object} result
 */
export default (params) => {
    if (!(params && params.blob && params.fileName)) {
        return createError(errors.required.fileNameOrBlob);
    }

    let param = {
        fileName: params.fileName,
        blob: params.blob
    };
    let isGuest = Boolean(params.isGuest);

    return sendRequest('/k/v1/file', 'POST', param, isGuest);
};
