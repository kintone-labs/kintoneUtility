/* eslint no-underscore-dangle: 0*/
import {Promise} from 'es6-promise';
import errors from '../resource/errorMessages.json';

/** Function: useXMLHttp
 *  @param {string} api
 *  @param {string} method
 *  @param {object} param
 *  @param {boolean} isGuest
 *
 *  @return  {object} result
 */
export default (api, method, param, isGuest) => {
    const _makeRequestURL = () => {
        const _method = encodeURIComponent(method);
        const hostname = (kintoneUtility.rest.domain) ? kintoneUtility.rest.domain : location.hostname;
        if (!hostname) {
            return false;
        }
        if (kintoneUtility.rest.guestSpaceId) {
            const urlParts = api.split('/');
            return `https://${hostname}/k/guest/${kintoneUtility.rest.guestSpaceId}/`
            + `${urlParts[2]}/${urlParts[3]}.json?_method=${_method}`;
        } else if (!isGuest) {
            return `https://${hostname}${api}.json?_method=${_method}`;
        } else if (window && window.kintone && isGuest) {
            return kintone.api.url(api, isGuest);
        }
    };

    const _setOverrideHeader = (xhr) => {
        xhr.setRequestHeader('X-HTTP-Method-Override', method);
    };

    const _setBasicAuthHeader = (xhr) => {
        if (kintoneUtility.rest.basicAuthBase64) {
            xhr.setRequestHeader('Authorization', `Basic ${kintoneUtility.rest.basicAuthBase64}`);
        }
    };

    const _setUserAuthHeader = (xhr) => {
        if (kintoneUtility.rest.userAuthBase64) {
            xhr.setRequestHeader('X-Cybozu-Authorization', kintoneUtility.rest.userAuthBase64);
            return true;
        }
        return false;
    };

    const _setApiTokenAuthHeader = (xhr) => {
        if (kintoneUtility.rest.apiToken) {
            xhr.setRequestHeader('X-Cybozu-API-Token', kintoneUtility.rest.apiToken);
            return true;
        }
        return false;
    };

    const _setRequestToken = () => {
        if (window && window.kintone) {
            param.__REQUEST_TOKEN__ = kintone.getRequestToken();
        }
    };

    const _setHeaders = (xhr) => {
        if (!(api.indexOf('file') > -1) || method !== 'POST') {
            xhr.setRequestHeader('Content-Type', 'application/json');
        }
        xhr.setRequestHeader('X-Requested-With', 'XMLHttpRequest');

        _setOverrideHeader(xhr);
        _setBasicAuthHeader(xhr);
        const isUserAuth = _setUserAuthHeader(xhr);
        const isApiTokenAuth = _setApiTokenAuthHeader(xhr);
        if (!isUserAuth && !isApiTokenAuth) {
            return true;
        }
        return false;
    };

    const _send = (xhr, resolve, reject) => {
        xhr.onload = function(r) {
            if (xhr.status === 200) {
                resolve(JSON.parse(xhr.responseText));
            } else {
                reject(JSON.parse(xhr.responseText));
            }
        };
        xhr.send(JSON.stringify(param));
    };

    const _getFile = (xhr, resolve, reject) => {
        xhr.responseType = 'blob';
        xhr.onload = function(r) {
            if (xhr.status === 200) {
                resolve(xhr.response);
            } else {
                reject(xhr.statusText);
            }
        };
        xhr.send(JSON.stringify(param));
    };

    const _postFile = (xhr, resolve, reject) => {
        const formData = new FormData();
        if (param.__REQUEST_TOKEN__) {
            formData.append('__REQUEST_TOKEN__', param.__REQUEST_TOKEN__);
        }
        formData.append('file', param.blob, param.fileName);
        xhr.onload = function(r) {
            if (xhr.status === 200) {
                resolve(JSON.parse(xhr.responseText));
            } else {
                reject(JSON.parse(xhr.responseText));
            }
        };
        xhr.send(formData);
    };

    return new Promise((resolve, reject) => {
        const xhr = new XMLHttpRequest();
        const url = _makeRequestURL();
        if (!url) {
            reject(errors.useSetDomain);
        } else {
            xhr.open('POST', url, true);
            const isNeededCSRFToken = _setHeaders(xhr);
            if (isNeededCSRFToken) {
                _setRequestToken();
            }
            if (!(api.indexOf('file') > -1)) {
                // record
                _send(xhr, resolve, reject);
            } else if (method === 'GET') {
                // file
                _getFile(xhr, resolve, reject);
            } else {
                _postFile(xhr, resolve, reject);
            }
        }
    });
};
