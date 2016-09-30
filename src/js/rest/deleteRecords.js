import createError from './common/createError'
import errors from '!json!./resource/errorMessages.json'
import makeBulkParam from './common/makeBulkParam'
import sendRequest from './common/sendRequest'
import limit from '!json!./resource/limit.json'

/** Function: deleteRecords
 *   Can't delete over 2000 records.
 *   If request is failed, no record is deleted.
 *  @param {object} params
 *  @param {number} params.app
 *  @param {array} params.ids
 *  @param {array} params.revisions
 *  @param {boolean} params.isGuest
 *
 *  @return {object} result
 */
export default (params) => {
    'use strict'
    if (!(params && params.app)) {
        return createError(errors.required.app)
    } else if (!Array.isArray(params.ids)) {
        return createError(errors.shouldBeArray.ids)
    } else if (params.ids && params.ids.length > limit.bulk) {
        return createError(errors.overLength.ids)
    } else if (params.ids && params.ids.length < 1) {
        return createError(errors.emptyArray.ids)
    }

    let param = makeBulkParam({
        app: params.app,
        ids: params.ids,
        method: 'DELETE'
    })
    if (params.revisions) {
        param.revisions = params.revisions
    }
    let isGuest = (params.isGuest) ? true : false

    return sendRequest('/k/v1/bulkRequest', 'POST', param, isGuest)
}
