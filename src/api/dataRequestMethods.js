/* eslint-disable import/no-cycle */
import axios from 'axios';
import { useLocalStorage } from '../utils/helpers';

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

// Axios interceptor

axios.interceptors.request.use(
  (config) => {
    if (window.location.href.toLowerCase().indexOf('code') > -1) {
      const storeQueryParam = new URLSearchParams(window.location.search).get(
        'code'
      );
      useLocalStorage('code', storeQueryParam);
    } else {
      config.params = {
        access_token: JSON.parse(localStorage.getItem('token')),
      };
    }
    return config;
  },
  error => Promise.reject(error)
);

// Add a response interceptor
axios.interceptors.response.use(
  (response) => {
    if (window.location.href.toLowerCase().indexOf('code') > -1) {
      useLocalStorage('token', response.data.split('=')[1].split('&')[0]);
      response = response.config;
      window.open('http://localhost:3000/', '_self');
    }
    return response;
  },
  error => Promise.reject(error)
);

const clientId = '3423e5cdc6d5b000f48e';
const clientSecret = '2046af365a13a5662f9cb78ef3eecf6189a12957';
const GITHUB_AUTH_ACCESSTOKEN_URL = 'https://cors-anywhere.herokuapp.com/https://github.com/login/oauth/access_token';

export const AuthGit = code => axios({
  method: 'post',
  url: GITHUB_AUTH_ACCESSTOKEN_URL,
  data: {
    scopes: ['gist'],
    note: 'create gits',
    client_id: clientId,
    client_secret: clientSecret,
    code,
  },
});
