/** Function: createError
 *  @param {string} message
 *
 *  @return {object} promise
 */
export default (message) => {
    return new kintone.Promise((resolve, reject) => {
        reject({
            status: 'error',
            message: message
        })
    })
}
