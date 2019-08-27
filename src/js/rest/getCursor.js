import createError from './common/createError';
import errors from './resource/errorMessages.json';
import sendRequest from './common/sendRequest';

/** Function: getCursor
 *  @param {object} params
 *  @param {number} params.id
 *  @param {boolean} [params.isGuest]
 *
 *  @return {object} result
 */
export default (params) => {
    if (!(params && params.id)) {
        return createError(errors.required.id);
    }

    let param = {
        id: params.id
    };
    let isGuest = Boolean(params.isGuest);

    return sendRequest('/k/v1/records/cursor', 'GET', param, isGuest);
};
