import {Promise} from 'es6-promise';

/** Function: createError
 *  @param {string} message
 *
 *  @return {object} promise
 */
export default (message) => {
    return new Promise((resolve, reject) => {
        reject({
            status: 'error',
            message: message
        });
    });
};
