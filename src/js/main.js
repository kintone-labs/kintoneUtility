'use strict'

import getRecord from './rest/getRecord'
import getRecords from './rest/getRecords'
import getAllRecordsByQuery from './rest/getAllRecordsByQuery'
import postRecord from './rest/postRecord'
import postRecords from './rest/postRecords'
import postAllRecords from './rest/postAllRecords'
import putRecord from './rest/putRecord'
import putRecords from './rest/putRecords'
import putAllRecords from './rest/putAllRecords'
import deleteRecords from './rest/deleteRecords'
import deleteAllRecords from './rest/deleteAllRecords'
import deleteAllRecordsByQuery from './rest/deleteAllRecordsByQuery'
import upsertRecord from './rest/upsertRecord'
import upsertRecords from './rest/upsertRecords'

let kintoneUtility = {
    rest: {},
    ui: {}
}
kintoneUtility.rest.getRecord = getRecord
kintoneUtility.rest.getRecords = getRecords
kintoneUtility.rest.getAllRecordsByQuery = getAllRecordsByQuery
kintoneUtility.rest.postRecord = postRecord
kintoneUtility.rest.postRecords = postRecords
kintoneUtility.rest.postAllRecords = postAllRecords
kintoneUtility.rest.putRecord = putRecord
kintoneUtility.rest.putRecords = putRecords
kintoneUtility.rest.putAllRecords = putAllRecords
kintoneUtility.rest.deleteRecords = deleteRecords
kintoneUtility.rest.deleteAllRecords = deleteAllRecords
kintoneUtility.rest.deleteAllRecordsByQuery = deleteAllRecordsByQuery
kintoneUtility.rest.upsertRecord = upsertRecord
kintoneUtility.rest.upsertRecords = upsertRecords

window.kintoneUtility = kintoneUtility
