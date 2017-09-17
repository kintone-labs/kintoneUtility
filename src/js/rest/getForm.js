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

    let param = {
        app: params.app,
        id: params.id
    };
    let isGuest = Boolean(params.isGuest);

    return sendRequest('/k/v1/form', 'GET', param, isGuest);
};
