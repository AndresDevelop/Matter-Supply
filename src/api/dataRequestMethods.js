/* eslint-disable import/no-cycle */
import axios from 'axios';

const API_PATH_BASE = process.env.REACT_APP_BASE_URL || 'https://api.github.com';

/**
 * Method used to execute a data request
 * @param {String} path [Fully qualified URL for a data request]
 * @param {String} method [Request method, defaults to 'GET']
 * @param {Function} callback [Callback to which a response will be passed]
 * @param {Object} params [URL parameters as key value pairs]
 */
export const executeDataRequest = (
  path,
  method,
  postData,
  tokenGit,
  responseType,
  params
) => {
  const urlApi = API_PATH_BASE;
  let urlWithParams = urlApi + path;

  if (params && Object.keys(params).length) {
    const urlParamsStartChar = path.indexOf('?') > -1 ? '&' : '?';
    urlWithParams += urlParamsStartChar;

    // Iterate over params and add to URL
    Object.keys(params).forEach((key) => {
      urlWithParams += `${key}=${params[key]}&`;
    });

    // Remove unnecessary '&' from end of URL
    urlWithParams = urlWithParams.replace(/&$/, '');
  }

  const token = tokenGit ? `token ${tokenGit}` : '';
  const config = {
    data: postData,
    method: method || 'GET',
    url: urlWithParams,
    headers: {
      'Content-Type': 'application/json',
      Authorization: token,
    },
  };
  if (responseType) config.responseType = responseType;

  return axios(config)
    .then((response) => {
      const containsData = response && response.data && response.data.data;

      return Promise.resolve(containsData ? response.data.data : response);
    })
    .catch(error => Promise.reject(error));
};
