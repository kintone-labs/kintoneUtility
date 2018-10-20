import createError from './common/createError';
import errors from './resource/errorMessages.json';
import sendRequest from './common/sendRequest';

/** Function: putRecord
 *  @param {object} params
 *  @param {number} params.app
 *  @param {number} [params.id]
 *  @param {object} [params.updateKey]
 *  @param {string} params.updateKey.field
 *  @param {string} params.updateKey.value
 *  @param {number} [params.revision]
 *  @param {object} [params.record]
 *  @param {boolean} [params.isGuest]
 *
 *  @return {object} result
 */
export default (params) => {
    if (!(params && params.app)) {
        return createError(errors.required.app);
    } else if (!params.id && !params.updateKey) {
        return createError(errors.required.idOrUpdateKey);
    }

    let param = {
        app: params.app,
        record: params.record
    };
    if (params.revision) {
        param.revision = params.revision;
    }
    if (params.id) {
        param.id = params.id;
    } else if (params.updateKey) {
        param.updateKey = params.updateKey;
    }

    let isGuest = Boolean(params.isGuest);

    return sendRequest('/k/v1/record', 'PUT', param, isGuest);
};
