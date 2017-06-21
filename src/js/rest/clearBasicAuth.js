/** Function: clearBasicAuth
 */
export default () => {
    kintoneUtility.rest.basicAuthBase64 = undefined;
};
