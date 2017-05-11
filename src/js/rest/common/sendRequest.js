import useXMLHttp from './useXMLHttp'

/** Function: sendRequest
 *  @param {string} api
 *  @param {string} method
 *  @param {object} param
 *  @param {boolean} isGuest
 * 
 *  @return  {object} result
 */
export default (api, method, param, isGuest) => {
    let isUserAuth = (kintoneUtility.rest.userAuthBase64) ? true : false
    let isApiTokenAuth = (kintoneUtility.rest.apiToken) ? true : false
    let isSpecifiedGuestSpaceId = (kintoneUtility.rest.guestSpaceId) ? true : false
    let isFileApi = (api.indexOf('file') > -1) ? true : false

    if (window && window.kintone && !isUserAuth && !isApiTokenAuth && !isSpecifiedGuestSpaceId && !isFileApi) {
        //use kintone.api
        return kintone.api(kintone.api.url(api, isGuest), method, param).then((response) => {
            return response
        })
    } else if (window && window.XMLHttpRequest) {
        //use xmlhttp (include file api)
        return useXMLHttp(api, method, param, isGuest)
    } else {
        //use node (future)
    }
}
