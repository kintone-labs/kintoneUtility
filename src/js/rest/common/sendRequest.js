import useXMLHttp from './useXMLHttp';

/** Function: sendRequest
 *  @param {string} api
 *  @param {string} method
 *  @param {object} param
 *  @param {boolean} isGuest
 *
 *  @return  {object} result
 */
export default (api, method, param, isGuest) => {
    const isUserAuth = Boolean(kintoneUtility.rest.userAuthBase64);
    const isApiTokenAuth = Boolean(kintoneUtility.rest.apiToken);
    const isSpecifiedGuestSpaceId = Boolean(kintoneUtility.rest.guestSpaceId);
    const isFileApi = (api.indexOf('file') > -1);

    if (window && window.kintone && !isUserAuth && !isApiTokenAuth && !isSpecifiedGuestSpaceId && !isFileApi) {
    // use kintone.api
        return kintone.api(kintone.api.url(api, isGuest), method, param).then((response) => {
            return response;
        });
    } else if (window && window.XMLHttpRequest) {
    // use xmlhttp (include file api)
        return useXMLHttp(api, method, param, isGuest);
    }
};
