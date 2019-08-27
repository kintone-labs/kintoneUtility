import createError from './common/createError';
import errors from './resource/errorMessages.json';
import sendRequest from './common/sendRequest';

/** Function: getFormLayout
 *  @param {object} params
 *  @param {number} params.app
 *  @param {boolean} [params.isGuest]
 *  @param {boolean} [params.isPreview]
 *
 *  @return {object} result
 */
export default (params) => {
    if (!(params && params.app)) {
        return createError(errors.required.app);
    }

    const isPreview = params.hasOwnProperty('isPreview') ? Boolean(params.isPreview) : false;
    const api = isPreview ? '/k/v1/preview/app/form/layout' : '/k/v1/app/form/layout';
    const param = {
        app: params.app
    };
    const isGuest = Boolean(params.isGuest);

    return sendRequest(api, 'GET', param, isGuest);
};
