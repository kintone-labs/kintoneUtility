import createError from './common/createError';
import errors from './resource/errorMessages.json';
import sendRequest from './common/sendRequest';

/** Function: getFormFields
 *  @param {object} params
 *  @param {number} params.app
 *  @param {string} [params.lang]
 *  @param {boolean} [params.isGuest]
 *  @param {boolean} [params.isPreview]
 *
 *  @return {object} result
 */
export default (params) => {
    if (!(params && params.app)) {
        return createError(errors.required.app);
    }

    let isPreview = params.hasOwnProperty('isPreview') ? Boolean(params.isPreview) : false;
    let api = isPreview ? '/k/v1/preview/app/form/fields' : '/k/v1/app/form/fields';
    let param = {
        app: params.app
    };
    if (params.hasOwnProperty('lang')) {
        param.lang = params.lang;
    }
    let isGuest = Boolean(params.isGuest);

    return sendRequest(api, 'GET', param, isGuest);
};
