# kintoneUtility.rest Specification

## Record
* [kintoneUtility.rest.getRecord](#getRecord)
* [kintoneUtility.rest.getRecords](#getRecords)
* [kintoneUtility.rest.getAllRecordsByQuery](#getAllRecordsByQuery)
* [kintoneUtility.rest.postRecord](#postRecord)
* [kintoneUtility.rest.postRecords](#postRecords)
* [kintoneUtility.rest.postAllRecords](#postAllRecords)
* [kintoneUtility.rest.putRecord](#putRecord)
* [kintoneUtility.rest.putRecords](#putRecords)
* [kintoneUtility.rest.putAllRecords](#putAllRecords)
* [kintoneUtility.rest.deleteRecords](#deleteRecords)
* [kintoneUtility.rest.deleteAllRecords](#deleteAllRecords)
* [kintoneUtility.rest.deleteAllRecordsByQuery](#deleteAllRecordsByQuery)
* [kintoneUtility.rest.upsertRecord](#upsertRecord)
* [kintoneUtility.rest.upsertRecords](#upsertRecords)
* [kintoneUtility.rest.downloadFile](#downloadFile)
* [kintoneUtility.rest.uploadFile](#uploadFile)

## Authentication
* [kintoneUtility.rest.setUserAuth](#setUserAuth)
* [kintoneUtility.rest.setApiTokenAuth](#setApiTokenAuth)
* [kintoneUtility.rest.setDomain](#setDomain)
* [kintoneUtility.rest.setBasicAuth](#setBasicAuth)
* [kintoneUtility.rest.setGuestSpaceId](#setGuestSpaceId)
* [kintoneUtility.rest.clearUserAuth](#clearUserAuth)
* [kintoneUtility.rest.clearApiTokenAuth](#clearApiTokenAuth)
* [kintoneUtility.rest.clearDomain](#clearDomain)
* [kintoneUtility.rest.clearBasicAuth](#clearBasicAuth)
* [kintoneUtility.rest.clearGuestSpaceId](#clearGuestSpaceId)  

## <a name="getRecord"> kintoneUtility.rest.getRecord(param)
* Get a single record.

#### Parameter 

| Name | Data type | Required | Description
|:-----------|:------------:|:------------:|:------------
| param | Object | Yes |  |
| param.app | Number | Yes | The app ID.
| param.id | Number | Yes | The Record ID.
| param.isGuest | Boolean | No | The default is false, to be true if the app is belonged to a guest space. 

#### Response
```
Promise Object
```
#### Sample
```js
kintoneUtility.rest.getRecord({
  app: 542,
  id: 18616,
  isGuest: false
}).then(function(response) {
  console.log(response);
}).catch(function(error) {
  console.log(error);
});
```

## <a name="getRecords"> kintoneUtility.rest.getRecords(param)
* Get multiple records.
* Limited under 500 records. 

#### Parameter 

| Name | Data type | Required | Description
|:-----------|:------------:|:------------:|:------------
| param | Object | Yes |  |
| param.app | Number | Yes | The App ID.
| param.query | String | No | The query string that will specify what records will be responded. If nothing is specified, fields will be returned from all accessible records.<br>[The query detail](https://developer.kintone.io/hc/en-us/articles/213149287/)
| param.fields | Array | No | The field codes that you want in the response. If nothing is specified, all accessible fields in the app will be returned.
| param.totalCount | Boolean | No | If set to "true", the request will retrieve the total count of records that were retrieved that match the query conditions. If ignored, null is returned for the totalCount value.
| param.isGuest | Boolean | No | The default is false, to be true if the app is belonged to a guest space. 

#### Response
```
Promise Object
```
#### Sample
```js
kintoneUtility.rest.getRecords({
  app: 542,
  query: 'Number > 0 limit 500 offset 100',
  fields: ['String', 'Number'],
  totalCount: true,
  isGuest: false
}).then(function(response) {
  console.log(response);
}).catch(function(error) {
  console.log(error);
});
```

## <a name="getAllRecordsByQuery"> kintoneUtility.rest.getAllRecordsByQuery(param)
* Get all records indicated by query.
* Can't indicate limit and offset of query.

#### Parameter 

| Name | Data type | Required | Description
|:-----------|:------------:|:------------:|:------------
| param | Object | Yes |  |
| param.app | Number | Yes | The App ID.
| param.query | String | No | The query string that will specify what records will be responded. If nothing is specified, fields will be returned from all accessible records.<br>[The query detail](https://developer.kintone.io/hc/en-us/articles/213149287/)<br>Can't indicate **limit** and **offset**.
| param.fields | Array | No | The field codes that you want in the response. If nothing is specified, all accessible fields in the app will be returned.
| param.isGuest | Boolean | No | The default is false, to be true if the app is belonged to a guest space. 

#### Response
```
Promise Object
```
#### Sample
```js
kintoneUtility.rest.getAllRecordsByQuery({
  app: 542,
  query: 'Number > 0',
  fields: ['String', 'Number'],
  isGuest: false
}).then(function(response) {
  console.log(response);
}).catch(function(error) {
  console.log(error);
});
```

## <a name="postRecord"> kintoneUtility.rest.postRecord(param)
* Insert a record to kintone app.

#### Parameter 

| Name | Data type | Required | Description
|:-----------|:------------:|:------------:|:------------
| param | Object | Yes |  |
| param.app | Number | Yes | The app ID.
| param.record | Object | No | Field codes and values are specified in this object. If ignored, the record will be added with default field values. If field codes that don't exist are specified, these will be ignored.
| param.isGuest | Boolean | No | The default is false, to be true if the app is belonged to a guest space. 

#### Response
```
Promise Object
```
#### Sample
```js
var record = {
  Number: {
    value: 1234
  },
  String: {
    value: 'string'
  },
};
kintoneUtility.rest.postRecord({
  app: 542,
  record: record,
  isGuest: false
}).then(function(response) {
  console.log(response);
}).catch(function(error) {
  console.log(error);
});
```

## <a name="postRecords"> kintoneUtility.rest.postRecords(param)
* **Insert under 2000 records to kintone app.**
* **If the records are over 2000, It is thrown Error.**
* **If request is failed, no record is inserted.**

#### Parameter 

| Name | Data type | Required | Description
|:-----------|:------------:|:------------:|:------------
| param | Object | Yes |  |
| param.app | Number | Yes | The app ID.
| param.records | Array | Yes | Holds an array of record objects.
| param.isGuest | Boolean | No | The default is false, to be true if the app is belonged to a guest space. 

#### Response
```
Promise Object
```
#### Sample
```js
var records = [
  {
    Number: {
      value: 1234
    },
    String: {
      value: 'string1'
    },
  },
  {
    Number: {
      value: 5678
    },
    String: {
      value: 'string2'
    },
  }
];
kintoneUtility.rest.postRecords({
  app: 542,
  records: records,
  isGuest: false
}).then(function(response) {
  console.log(response);
}).catch(function(error) {
  console.log(error);
});
```

## <a name="postAllRecords"> kintoneUtility.rest.postAllRecords(param)
* **Can insert over 2000 records to kintone app, but can't do rollback.**

#### Parameter 

| Name | Data type | Required | Description
|:-----------|:------------:|:------------:|:------------
| param | Object | Yes |  |
| param.app | Number | Yes | The app ID.
| param.records | Array | Yes | Holds an array of record objects.
| param.isGuest | Boolean | No | The default is false, to be true if the app is belonged to a guest space. 

#### Response
```
Promise Object
```
#### Sample
```js
var records = [
  {
    Number: {
      value: 1234
    },
    String: {
      value: 'string1'
    },
  },
  {
    Number: {
      value: 5678
    },
    String: {
      value: 'string2'
    },
  }
];
kintoneUtility.rest.postAllRecords({
  app: 542,
  records: records,
  isGuest: false
}).then(function(response) {
  console.log(response);
}).catch(function(error) {
  console.log(error);
});
```

## <a name="putRecord"> kintoneUtility.rest.putRecord(param)
* Update a record to kintone app.

#### Parameter 

| Name | Data type | Required | Description
|:-----------|:------------:|:------------:|:------------
| param | Object | Yes |  |
| param.app | Number | Yes | The app ID.
| param.id | Number | No (Required, if updateKey will not be specified) | The record ID.
| param.updateKey | Object | No (Required, if id will not be specified) | To specify this field, the field must have the "Prohibit duplicate values" option turned on.
| param.updateKey.field | String | No (Required, if updateKey will be specified) | The field code of unique key.
| param.updateKey.value | String | No (Required, if updateKey will be specified)| The value of unique key.
| param.revision | Number | No | The expected revision number. If the value does not match, an error will occur and the record will not be updated. If the value is not specified or is -1, the revision number will not be checked.
| param.record | Object | No | Field codes and values are specified in this object. If ignored, the record will not be updated.
| param.isGuest | Boolean | No | The default is false, to be true if the app is belonged to a guest space.

#### Response
```
Promise Object
```
#### Sample
```js
var record = {
  Number: {
    value: 1234
  },
  String: {
    value: 'string'
  },
};
//update by id
kintoneUtility.rest.putRecord({
  app: 542,
  id: 18616,
  record: record,
  isGuest: false
}).then(function(response) {
  console.log(response);
}).catch(function(error) {
  console.log(error);
});
//update by unique key
kintoneUtility.rest.putRecord({
  app: 542,
  updateKey: {
    field: 'unique_field_code',
    value: 'unique_field_value'
  },
  record: record,
  isGuest: false
}).then(function(response) {
  console.log(response);
}).catch(function(error) {
  console.log(error);
});
```

## <a name="putRecords"> kintoneUtility.rest.putRecords(param)
* **Update under 2000 records to kintone app.**
* **If the records are over 2000, It is thrown Error.**
* **If request is failed, no record is Updated.**

#### Parameter 

| Name | Data type | Required | Description
|:-----------|:------------:|:------------:|:------------
| param | Object | Yes |  |
| param.app | Number | Yes | The app ID.
| param.records | Array | Yes | [Array of record objects that include id/updateKey, revision and record objects.](https://developer.kintone.io/hc/en-us/articles/213149027/)
| param.isGuest | Boolean | No | The default is false, to be true if the app is belonged to a guest space.

#### Response
```
Promise Object
```
#### Sample
```js
var records = [
  {
    id: 18616,
    Number: {
      value: 1234
    },
    String: {
      value: 'string1'
    },
  },
  {
    id: 18617,
    Number: {
      value: 5678
    },
    String: {
      value: 'string2'
    },
  }
];
kintoneUtility.rest.putRecords({
  app: 542,
  records: records,
  isGuest: false
}).then(function(response) {
  console.log(response);
}).catch(function(error) {
  console.log(error);
});
```

## <a name="putAllRecords"> kintoneUtility.rest.putAllRecords(param)
* **Can update over 2000 records to kintone app, but can't do rollback.**

#### Parameter 

| Name | Data type | Required | Description
|:-----------|:------------:|:------------:|:------------
| param | Object | Yes |  |
| param.app | Number | Yes | kintone app ID.
| param.records | Array | Yes | [Array of record objects that include id/updateKey, revision and record objects.](https://developer.kintone.io/hc/en-us/articles/213149027/)
| param.isGuest | Boolean | No | The default is false, to be true if the app is belonged to a guest space. 

#### Response
```
Promise Object
```
#### Sample
```js
var records = [
  {
    updateKey: {
      field: 'unique_field_code',
      value: 'unique_field_value1'
    },
    Number: {
      value: 1234
    },
    String: {
      value: 'string1'
    },
  },
  {
    updateKey: {
      field: 'unique_field_code',
      value: 'unique_field_value2'
    },
    Number: {
      value: 5678
    },
    String: {
      value: 'string2'
    },
  }
];
kintoneUtility.rest.putAllRecords({
  app: 542,
  records: records,
  isGuest: false
}).then(function(response) {
  console.log(response);
}).catch(function(error) {
  console.log(error);
});
```

## <a name="deleteRecords"> kintoneUtility.rest.deleteRecords(param)
* **Can't delete over 2000 records.**
* **If the records are over 2000, It is thrown Error.**
* **If request is failed, no record is deleted.**

#### Parameter 

| Name | Data type | Required | Description
|:-----------|:------------:|:------------:|:------------
| param | Object | Yes |  |
| param.app | Number | Yes | The app ID.
| param.ids | Array | Yes | Array of record IDs that will be deleted.
| param.revisions | Array | No | The expected revision number.
The first id number will correspond to the first revision number in the array, the second id to the second revision number, and so on.<br>If the revision number does not match, an error will occur and no records will be deleted.<br>If the revision number is left blank or is -1, the revision number will not be checked for the corresponding record ID.
| param.isGuest | Boolean | No | The default is false, to be true if the app is belonged to a guest space.

#### Response
```
Promise Object
```
#### Sample
```js
var ids = [
  18619,
  18618
];
kintoneUtility.rest.deleteRecords({
  app: 542,
  ids: ids,
  isGuest: false
}).then(function(response) {
  console.log(response);
}).catch(function(error) {
  console.log(error);
});
```

## <a name="deleteAllRecords"> kintoneUtility.rest.deleteAllRecords(param)
* Delete all records by indicating query.
* **Can delete over 2000 records, but can't do rollback.**

#### Parameter 

| Name | Data type | Required | Description
|:-----------|:------------:|:------------:|:------------
| param | Object | Yes |  |
| param.app | Number | Yes | kintone app ID.
| param.ids | Array | Yes | Array of record IDs that will be deleted.
| param.isGuest | Boolean | No | The default is false, to be true if the app is belonged to a guest space. 

#### Response
```
Promise Object
```
#### Sample
```js
var ids = [
  18619,
  18618
];
kintoneUtility.rest.deleteAllRecords({
  app: 542,
  ids: ids,
  isGuest: false
}).then(function(response) {
  console.log(response);
}).catch(function(error) {
  console.log(error);
});
```

## <a name="deleteAllRecordsByQuery"> kintoneUtility.rest.deleteAllRecordsByQuery(param)
* Can delete over 2000 records, but can't do rollback.

#### Parameter 

| Name | Data type | Required | Description
|:-----------|:------------:|:------------:|:------------
| param | Object | Yes |  |
| param.app | Number | Yes | The App ID.
| param.query | String | No | The query string that will specify what records will be responded. If nothing is specified, fields will be returned from all accessible records.<br>[The query detail](https://developer.kintone.io/hc/en-us/articles/213149287/)<br>Can't indicate **limit** and **offset**.
| param.isGuest | Boolean | No | The default is false, to be true if the app is belonged to a guest space. 

#### Response
```
Promise Object
```
#### Sample
```js
kintoneUtility.rest.deleteAllRecordsByQuery({
  app: 542,
  query: 'Number > 0',
  isGuest: false
}).then(function(response) {
  console.log(response);
}).catch(function(error) {
  console.log(error);
});
```

## <a name="upsertRecord"> kintoneUtility.rest.upsertRecord(param)
* Insert or update a record to kintone app.
* Insert the record if the updateKey doesn't exists.
* Update the record if the updateKey exists.

#### Parameter 

| Name | Data type | Required | Description
|:-----------|:------------:|:------------:|:------------
| param | Object | Yes |  |
| param.app | Number | Yes | The app ID.
| param.updateKey | Object | Yes | To specify this field, the field must have the "Prohibit duplicate values" option turned on.
| param.updateKey.field | String | Yes | The field code of unique key.
| param.updateKey.value | String | Yes | The value of unique key.
| param.revision | Number | No | The expected revision number. If the value does not match, an error will occur and the record will not be updated. If the value is not specified or is -1, the revision number will not be checked.
| param.record | Object | No | Field codes and values are specified in this object. If ignored, the record will not be updated.
| param.isGuest | Boolean | No | The default is false, to be true if the app is belonged to a guest space.

#### Response
```
Promise Object
```
#### Sample
```js
var record = {
  Number: {
    value: 1234
  }
};
kintoneUtility.rest.upsertRecord({
  app: 542,
  updateKey: {
    field: 'String',
    value: 'string2'
  },
  record: record
}).then(function(response) {
  console.log(response);
}).catch(function(error) {
  console.log(error);
});;
```

## <a name="upsertRecords"> kintoneUtility.rest.upsertRecords(param)
* Insert or update records to kintone app.
* Insert the records if the updateKey doesn't exists.
* Update the records if the updateKey exists.

#### Parameter 

| Name | Data type | Required | Description
|:-----------|:------------:|:------------:|:------------
| param | Object | Yes |  |
| param.app | Number | Yes | The app ID.
| param.records | Array | Yes | Holds an array of objects that include updateKey, revision and record objects.
| param.isGuest | Boolean | No | The default is false, to be true if the app is belonged to a guest space.

#### Response
```
Promise Object
```
#### Sample
```js
var records = [
  {
    updateKey: {
      field: 'String',
      value: 'string1'
    },
    record: {
      Number: {
        value: 12345
      }
    }
  },
  {
    updateKey: {
      field: 'String',
      value: 'string2'
    },
    record: {
      Number: {
        value: 123456
      }
    }
  }
];
kintoneUtility.rest.upsertRecords({
  app: 542,
  records: records,
  isGuest: false
}).then(function(response) {
  console.log(response);
}).catch(function(error) {
  console.log(error);
});
```

## <a name="downloadFile"> kintoneUtility.rest.downloadFile(param)
* Download a file attached to record.
* You can get file key by "kintoneUtility.rest.getRecord" or "kintoneUtility.rest.getRecords".

#### Parameter 

| Name | Data type | Required | Description
|:-----------|:------------:|:------------:|:------------
| param | Object | Yes |  |
| param.fileKey | String | Yes | The file key that you want to download.
| param.isGuest | Boolean | No | The default is false, to be true if the app is belonged to a guest space.

#### Response
```
Promise Object
```
#### Sample
```js
kintoneUtility.rest.downloadFile({
  fileKey: '20170403061310F33E961E5B7C43079759269996409F50150',
  isGuest: false
}).then(function(response) {
  console.log(response); //Blob
}).catch(function(error) {
  console.log(error);
});
```

## <a name="uploadFile"> kintoneUtility.rest.uploadFile(param)
* Upload a file to kintone.
* Should specify Blob format data.

#### Parameter 

| Name | Data type | Required | Description
|:-----------|:------------:|:------------:|:------------
| param | Object | Yes |  |
| param.fileName | String | Yes | The file name you will upload.
| param.blob | Object | Yes | The blob format data.
| param.isGuest | Boolean | No | The default is false, to be true if the app is belonged to a guest space.

#### Response
```
Promise Object
```
#### Sample
```js
kintoneUtility.rest.uploadFile({
  fileName: 'sample.txt',
  blob: new Blob(['Sample Text File'], {type:'text\/plain'}),
  isGuest: false
}).then(function(response) {
  console.log(response); //fileKey
}).catch(function(error) {
  console.log(error);
});
```

## <a name="setUserAuth"> kintoneUtility.rest.setUserAuth(loginName, password)
* Specify login name and password when execute API except for user logged in to kintone.

#### Parameter 

| Name | Data type | Required | Description
|:-----------|:------------:|:------------:|:------------
| loginName | String | Yes | The login name for user authentication. |
| password | String | Yes | The password for user authentication.

#### Response
```
None
```

#### Sample
```js
kintoneUtility.rest.setUserAuth('loginName', 'password');
```

## <a name="setApiTokenAuth"> kintoneUtility.rest.setApiTokenAuth(apiToken)
* Specify API token when you need to execute API by token.

#### Parameter 

| Name | Data type | Required | Description
|:-----------|:------------:|:------------:|:------------
| apiToken | String | Yes | The API Token that will be created by app. 

#### Response
```
None
```

#### Sample
```js
kintoneUtility.rest.setApiTokenAuth('vZCkStSK3SD7zyHh17auyRrBJajjFrVaffit738');
```

## <a name="setDomain"> kintoneUtility.rest.setDomain(domain)
* Specify the domain when you need.
* In many cases it is not necessary.

#### Parameter 

| Name | Data type | Required | Description
|:-----------|:------------:|:------------:|:------------
| domain | String | Yes | Your kintone's domain. (e.g. 'sample.cybozu.com')

#### Response
```
None
```

#### Sample
```js
kintoneUtility.rest.setDomain('sample.cybozu.com');
```

## <a name="setBasicAuth"> kintoneUtility.rest.setBasicAuth(userName, password)
* Specify user name and password for basic authentication when you need.
* In many cases it is not necessary.

#### Parameter 

| Name | Data type | Required | Description
|:-----------|:------------:|:------------:|:------------
| userName | String | Yes | The user name for basic authentication. |
| password | String | Yes | The password for basic authentication.

#### Response
```
None
```

#### Sample
```js
kintoneUtility.rest.setBasicAuth('userName', 'password');
```

## <a name="setGuestSpaceId"> kintoneUtility.rest.setGuestSpaceId(guestSpaceId)
* Can specify guest space ID.
* isGuest parameter is not necessary when you use "kintoneUtility.rest.setGuestSpaceId".

#### Parameter 

| Name | Data type | Required | Description
|:-----------|:------------:|:------------:|:------------
| guestSpaceId | Number | Yes | The guest space ID to which the application belongs.

#### Response
```
None
```

#### Sample
```js
kintoneUtility.rest.setGuestSpaceId('12');
```

## <a name="clearUserAuth"> kintoneUtility.rest.clearUserAuth()
* Clear the info that you set by "kintoneUtility.rest.setUserAuth".

#### Parameter 
```
None
```

#### Response
```
None
```

#### Sample
```js
kintoneUtility.rest.clearUserAuth();
```

## <a name="clearApiTokenAuth"> kintoneUtility.rest.clearApiTokenAuth()
* Clear the info that you set by "kintoneUtility.rest.setApiTokenAuth".

#### Parameter 
```
None
```

#### Response
```
None
```

#### Sample
```js
kintoneUtility.rest.clearApiTokenAuth();
```

## <a name="clearDomain"> kintoneUtility.rest.clearDomain()
* Clear the info that you set by "kintoneUtility.rest.setDomain".

#### Parameter 
```
None
```

#### Response
```
None
```

#### Sample
```js
kintoneUtility.rest.clearDomain();
```

## <a name="clearBasicAuth"> kintoneUtility.rest.clearBasicAuth()
* Clear the info that you set by "kintoneUtility.rest.setBasicAuth".

#### Parameter 
```
None
```

#### Response
```
None
```

#### Sample
```js
kintoneUtility.rest.clearBasicAuth();
```

## <a name="clearGuestSpaceId"> kintoneUtility.rest.clearGuestSpaceId()
* Clear the info that you set by "kintoneUtility.rest.setGuestSpaceId".

#### Parameter 
```
None
```

#### Response
```
None
```

#### Sample
```js
kintoneUtility.rest.clearGuestSpaceId();
```
