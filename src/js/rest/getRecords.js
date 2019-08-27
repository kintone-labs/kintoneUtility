import createError from './common/createError';
import errors from './resource/errorMessages.json';
import sendRequest from './common/sendRequest';

/** Function: getRecords
 *  @param {object} params
 *  @param {number} params.app
 *  @param {string} [params.query]
 *  @param {array} [params.fields]
 *  @param {boolean} [params.totalCount]
 *  @param {boolean} [params.isGuest]
 *
 *  @return {object} result
 */
export default (params) => {
    if (!(params && params.app)) {
        return createError(errors.required.app);
    }

    const param = {
        app: params.app,
        query: params.query || '',
        fields: params.fields || [],
        totalCount: params.totalCount || false
    };
    const isGuest = Boolean(params.isGuest);

    return sendRequest('/k/v1/records', 'GET', param, isGuest);
};
