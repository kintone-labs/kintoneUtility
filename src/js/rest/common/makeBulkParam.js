import limit from '!json!../resource/limit.json'

/** Function: upsertRecords
 *  @param {object} params
 *  @param {number} params.app
 *  @param {array} params.records
 *  @param {array} params.ids
 *  @param {string} params.method
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
    for (let i = 0; i < loopTimes; i++) {
        let request = {
            method: params.method,
            api: '/k/v1/records.json',
            payload: {
                app: params.app
            }
        }
        if (params.records) request.payload.records = params.records.slice(begin, begin + LIMIT)
        if (params.ids) request.payload.ids = params.ids.slice(begin, begin + LIMIT)
        bulkParam.requests.push(request)
        begin += LIMIT
    }

    return bulkParam
}
