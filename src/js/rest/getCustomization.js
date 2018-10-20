import createError from './common/createError';
import errors from './resource/errorMessages.json';
import sendRequest from './common/sendRequest';

/** Function: getCustomization
 *  @param {object} params
 *  @param {number} params.app
 *  @param {boolean} [params.isPreview]
 *  @param {boolean} [params.isGuest]
 *
 *  @return {object} result
 */
export default (params) => {
    if (!(params && params.app)) {
        return createError(errors.required.app);
    }

    let isPreview = params.hasOwnProperty('isPreview') ? Boolean(params.isPreview) : false;
    let url = isPreview ? '/k/v1/preview/app/customize' : '/k/v1/app/customize';
    let param = {
        app: params.app
    };
    let isGuest = Boolean(params.isGuest);

    return sendRequest(url, 'GET', param, isGuest);
};
