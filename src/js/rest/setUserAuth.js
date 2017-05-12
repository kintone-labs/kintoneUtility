import errors from '!json!./resource/errorMessages.json'

/** Function: setUserAuth
 *  @param {string} loginName
 *  @param {string} password
 */
export default (loginName, password) => {
    if (!loginName || !password) {
        throw errors.emptyLoginNameOrPass
    }
    kintoneUtility.rest.userAuthBase64 = (typeof(Buffer) !== 'undefined') ? (new Buffer(`${loginName}:${password}`)).toString('base64'): btoa(`${loginName}:${password}`)
}
