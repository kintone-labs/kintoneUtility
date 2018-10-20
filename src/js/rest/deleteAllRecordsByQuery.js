import getAllRecordsByQuery from './getAllRecordsByQuery';
import deleteAllRecords from './deleteAllRecords';

/** Function: deleteAllRecordsByQuery
 *   Can delete over 2000 records, but can't do rollback.
 *  @param {object} params
 *  @param {number} params.app
 *  @param {string} [params.query]
 *  @param {boolean} [params.isGuest]
 *
 *  @return {object} result
 */
export default (params) => {
    params.fields = ['$id'];
    return getAllRecordsByQuery(params).then((resp) => {
        let ids = [];
        let records = resp.records;
        if (!records || !records.length) {
            return {};
        }
        for (let i = 0; i < records.length; i++) {
            ids.push(records[i].$id.value);
        }
        let param = {
            app: params.app,
            ids: ids,
            isGuest: params.isGuest
        };
        return deleteAllRecords(param).then((response) => {
            return response;
        });
    });
};
