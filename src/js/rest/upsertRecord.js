import createError from './common/createError'
import errors from '!json!./resource/errorMessages.json'
import getRecords from './getRecords'
import postRecord from './postRecord'
import putRecord from './putRecord'

/** Function: upsertRecord
 *  @param {object} params
 *  @param {number} params.app
 *  @param {object} params.updateKey
 *  @param {string} params.updateKey.field
 *  @param {string} params.updateKey.value
 *  @param {object} params.record
 *  @param {boolean} params.isGuest
 *
 *  @return {object} result
 */
export default (params) => {
    'use stiirict'
    if (!(params && params.app)) {
        return createError(errors.required.app)
    } else if (!params.updateKey || !params.updateKey.field || (!params.updateKey.value && params.updateKey.value !== '')) {
        return createError(errors.required.updateKey)
    }

    params.query = `${params.updateKey.field} = "${params.updateKey.value}"`
    return getRecords(params).then((resp) => {
        if (params.updateKey.value === '' || resp.records.length < 1) {
            //post
            params.record[params.updateKey.field] = {
                value: params.updateKey.value
            }
            return postRecord(params)
        } else if (resp.records.length === 1) {
            //put
            return putRecord(params)
        } else {
            //not unique
            return createError(errors.notUniqueField)
        }
    })
}
