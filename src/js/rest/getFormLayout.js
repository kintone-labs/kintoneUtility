import createError from './common/createError';
import errors from './resource/errorMessages.json';
import sendRequest from './common/sendRequest';

/** Function: getForm
 *  @param {object} params
 *  @param {number} params.app
 *  @param {boolean} params.isGuest
 *
 *  @return {object} result
 */
export default (params) => {
    if (!(params && params.app)) {
        return createError(errors.required.app);
    }

    let isPreview = params.hasOwnProperty('isPreview') ? Boolean(params.isPreview) : false;
    let api = isPreview ? '/k/v1/preview/app/form/layout' : '/k/v1/app/form/layout';
    let param = {
        app: params.app
    };
    let isGuest = Boolean(params.isGuest);

    return sendRequest(api, 'GET', param, isGuest);
};
