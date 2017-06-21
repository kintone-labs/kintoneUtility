import getRecord from './rest/getRecord';
import getRecords from './rest/getRecords';
import getAllRecordsByQuery from './rest/getAllRecordsByQuery';
import postRecord from './rest/postRecord';
import postRecords from './rest/postRecords';
import postAllRecords from './rest/postAllRecords';
import putRecord from './rest/putRecord';
import putRecords from './rest/putRecords';
import putAllRecords from './rest/putAllRecords';
import deleteRecords from './rest/deleteRecords';
import deleteAllRecords from './rest/deleteAllRecords';
import deleteAllRecordsByQuery from './rest/deleteAllRecordsByQuery';
import upsertRecord from './rest/upsertRecord';
import upsertRecords from './rest/upsertRecords';
import setBasicAuth from './rest/setBasicAuth';
import setUserAuth from './rest/setUserAuth';
import setApiTokenAuth from './rest/setApiTokenAuth';
import setDomain from './rest/setDomain';
import setGuestSpaceId from './rest/setGuestSpaceId';
import clearBasicAuth from './rest/clearBasicAuth';
import clearUserAuth from './rest/clearUserAuth';
import clearApiTokenAuth from './rest/clearApiTokenAuth';
import clearDomain from './rest/clearDomain';
import clearGuestSpaceId from './rest/clearGuestSpaceId';
import downloadFile from './rest/downloadFile';
import uploadFile from './rest/uploadFile';

let kintoneUtility = {
    rest: {},
    ui: {}
};
kintoneUtility.rest.getRecord = getRecord;
kintoneUtility.rest.getRecords = getRecords;
kintoneUtility.rest.getAllRecordsByQuery = getAllRecordsByQuery;
kintoneUtility.rest.postRecord = postRecord;
kintoneUtility.rest.postRecords = postRecords;
kintoneUtility.rest.postAllRecords = postAllRecords;
kintoneUtility.rest.putRecord = putRecord;
kintoneUtility.rest.putRecords = putRecords;
kintoneUtility.rest.putAllRecords = putAllRecords;
kintoneUtility.rest.deleteRecords = deleteRecords;
kintoneUtility.rest.deleteAllRecords = deleteAllRecords;
kintoneUtility.rest.deleteAllRecordsByQuery = deleteAllRecordsByQuery;
kintoneUtility.rest.upsertRecord = upsertRecord;
kintoneUtility.rest.upsertRecords = upsertRecords;
kintoneUtility.rest.downloadFile = downloadFile;
kintoneUtility.rest.uploadFile = uploadFile;

kintoneUtility.rest.setBasicAuth = setBasicAuth;
kintoneUtility.rest.setUserAuth = setUserAuth;
kintoneUtility.rest.setApiTokenAuth = setApiTokenAuth;
kintoneUtility.rest.setDomain = setDomain;
kintoneUtility.rest.setGuestSpaceId = setGuestSpaceId;
kintoneUtility.rest.clearBasicAuth = clearBasicAuth;
kintoneUtility.rest.clearUserAuth = clearUserAuth;
kintoneUtility.rest.clearApiTokenAuth = clearApiTokenAuth;
kintoneUtility.rest.clearDomain = clearDomain;
kintoneUtility.rest.clearGuestSpaceId = clearGuestSpaceId;

window.kintoneUtility = kintoneUtility;
