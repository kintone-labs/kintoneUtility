import createError from './common/createError'
import errors from '!json!./resource/errorMessages.json'
import sendRequest from './common/sendRequest'

/** Function: getRecords
 *  @param {object} params
 *  @param {number} params.app
 *  @param {string} params.query
 *  @param {array} params.fields
 *  @param {boolean} params.totalCount
 *  @param {boolean} params.isGuest
 *
 *  @return {object} result
 */
export default (params) => {
    'use strict'
    if (!(params && params.app)) {
        return createError(errors.required.app)
    }

    let param = {
        app: params.app,
        query: params.query || '',
        fields: params.fields || [],
        totalCount: params.totalCount || false
    }
    let isGuest = (params.isGuest) ? true : false

    return sendRequest('/k/v1/records', 'GET', param, isGuest)
}
