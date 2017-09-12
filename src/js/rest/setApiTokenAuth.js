import errors from './resource/errorMessages.json';

/** Function: setApiTokenAuth
 *  @param {string} apiToken
 */
export default (apiToken) => {
    if (!apiToken) {
        throw errors.emptyApiToken;
    }
    kintoneUtility.rest.apiToken = apiToken;
};
