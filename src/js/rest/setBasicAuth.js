import errors from '!json!./resource/errorMessages.json';

/** Function: setBasicAuth
 *  @param {string} userName
 *  @param {string} password
 */
export default (userName, password) => {
    if (!userName || !password) {
        throw errors.emptyUserNameOrPass;
    }
    kintoneUtility.rest.basicAuthBase64 = (typeof (Buffer) !== 'undefined') ?
        (new Buffer(`${userName}:${password}`)).toString('base64') : btoa(`${userName}:${password}`);
};
