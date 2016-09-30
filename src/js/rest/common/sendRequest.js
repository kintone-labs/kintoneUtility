/** Function: sendBulkRequest
 *  @param {string} api
 *  @param {string} method
 *  @param {object} param
 *  @param {boolean} isGuest
 * 
 *  @return  {object} result
 */
export default (api, method, param, isGuest) => {
    return kintone.api(kintone.api.url(api, isGuest), method, param).then((response) => {
        return response
    })
}
