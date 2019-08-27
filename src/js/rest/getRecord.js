import createError from './common/createError';
import errors from './resource/errorMessages.json';
import sendRequest from './common/sendRequest';

/** Function: getRecord
 *  @param {object} params
 *  @param {number} params.app
 *  @param {number} params.id
 *  @param {boolean} [params.isGuest]
 *
 *  @return {object} result
 */
export default (params) => {
    if (!(params && params.app)) {
        return createError(errors.required.app);
    } else if (!(params && params.id)) {
        return createError(errors.required.id);
    }

    const param = {
        app: params.app,
        id: params.id
    };
    const isGuest = Boolean(params.isGuest);

    return sendRequest('/k/v1/record', 'GET', param, isGuest);
};
