import limit from '!json!../resource/limit.json'

/** Function: makeBulkParam
 *  @param {object} params
 *  @param {number} params.app
 *  @param {array} params.records
 *  @param {array} params.ids
 *  @param {array} params.revisions
 *  @param {string} params.method
 *  @param {boolean} params.isGuest
 *
 *  @return {object} bulkParam
 */
export default (params) => {
    const LIMIT = limit.records
    let bulkParam = {
        requests: []
    }
    let length = (params.records) ? params.records.length : params.ids.length 
    let loopTimes = Math.ceil(length / LIMIT)
    let begin = 0
    let api;
    if (kintoneUtility.rest.guestSpaceId) {
        api = `/k/guest/${kintoneUtility.rest.guestSpaceId}/v1/records.json`
    } else if (params.isGuest) {
        api = kintone.api.url('/k/v1/records', true).replace(location.origin, '')
    } else {
        api = '/k/v1/records.json'
    }
    for (let i = 0; i < loopTimes; i++) {
        let request = {
            method: params.method,
            api: api,
            payload: {
                app: params.app
            }
        }
        if (params.records) request.payload.records = params.records.slice(begin, begin + LIMIT)
        if (params.ids) request.payload.ids = params.ids.slice(begin, begin + LIMIT)
        if (params.revisions) request.payload.revisions = params.revisions.slice(begin, begin + LIMIT)
        bulkParam.requests.push(request)
        begin += LIMIT
    }

    return bulkParam
}
