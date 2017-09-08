import errors from './resource/errorMessages.json';

/** Function: setDomain
 *  @param {string} domain
 */
export default (domain) => {
    if (!domain) {
        throw errors.emptyDomain;
    }
    kintoneUtility.rest.domain = domain;
};
