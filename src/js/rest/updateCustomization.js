import createError from './common/createError';
import errors from './resource/errorMessages.json';
import sendRequest from './common/sendRequest';

/** Function: updateCustomization
 *  @param {object} params
 *  @param {number} params.app
 *  @param {string} [params.scope]
 *  @param {object} [params.desktop]
 *  @param {object[]} [params.desktop.js]
 *  @param {string} params.desktop.js[].type
 *  @param {string} [params.desktop.js[].url]
 *  @param {object} [params.desktop.js[].file]
 *  @param {string} params.desktop.js[].file.fileKey
 *  @param {object[]} [params.desktop.css]
 *  @param {string} params.desktop.css[].type
 *  @param {string} [params.desktop.css[].url]
 *  @param {object} [params.desktop.css[].file]
 *  @param {string} params.desktop.css[].file.fileKey
 *  @param {object[]} [params.mobile.js]
 *  @param {string} params.mobile.js[].type
 *  @param {string} [params.mobile.js[].url]
 *  @param {object} [params.mobile.js[].file]
 *  @param {string} params.mobile.js[].file.fileKey
 *  @param {number} [params.revision]
 *  @param {boolean} [params.isGuest]
 *
 *  @return {object} result
 */
export default (params) => {
    if (!(params && params.app)) {
        return createError(errors.required.app);
    }

    let param = {
        app: params.app
    };
    if (params.hasOwnProperty('scope')) {
        param.scope = params.scope;
    }
    if (params.hasOwnProperty('desktop')) {
        param.desktop = params.desktop;
    }
    if (params.hasOwnProperty('mobile')) {
        param.mobile = params.mobile;
    }
    if (params.hasOwnProperty('revision')) {
        param.revision = Number(params.revision);
    }

    let isGuest = Boolean(params.isGuest);

    return sendRequest('/k/v1/preview/app/customize', 'PUT', param, isGuest);
};
