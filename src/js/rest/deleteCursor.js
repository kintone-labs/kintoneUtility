import createError from './common/createError';
import errors from './resource/errorMessages.json';
import sendRequest from './common/sendRequest';

/** Function: deleteCursor
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

    const param = {
        id: params.id
    };
    const isGuest = Boolean(params.isGuest);

    return sendRequest('/k/v1/records/cursor', 'DELETE', param, isGuest);
};
