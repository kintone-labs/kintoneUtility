import createError from './common/createError';
import errors from './resource/errorMessages.json';
import sendRequest from './common/sendRequest';

/** Function: postDeploy
 *  @param {object} params
 *  @param {object[]} params.apps
 *  @param {number} params.apps[].app
 *  @param {boolean?} params.isGuest
 *
 *  @return {object} result
 */
export default (params) => {
    if (!(params && params.apps)) {
        return createError(errors.required.apps);
    }

    let param = {
        apps: params.apps
    };
    let isGuest = Boolean(params.isGuest);

    return sendRequest('/k/v1/preview/app/deploy', 'GET', param, isGuest);
};
