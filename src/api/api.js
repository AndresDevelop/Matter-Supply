/* eslint-disable import/no-cycle */
import * as DataRequestMethods from './dataRequestMethods';

/**
 * @description Request to get all the gist of a user
 * @param {String} user Value to search
 */
export const getGitsUser = user => DataRequestMethods.executeDataRequest(`/users/${user}/gists`);

/**
 * @description Request to get a specific gist of a user
 * @param {string} id Value to search
 */
export const getGitDetail = id => DataRequestMethods.executeDataRequest(`/gists/${id}`);

/**
 * @description Request to get info the user
 * @param {String} user Value to search
 */

export const getUserInfo = user => DataRequestMethods.executeDataRequest(`/users/${user}`);

/**
 * @description Request to be able to create gists
 * @param {String} body Value to Post
 */
export const createGists = body => DataRequestMethods.executeDataRequest('/gists', 'POST', body);

/**
 * @description Get Auth from GitHUB
 * @param {String} body Value to POst
 */

const clientId = '3423e5cdc6d5b000f48e';
const clientSecret = '2046af365a13a5662f9cb78ef3eecf6189a12957';
const body = {
  scopes: ['gist'],
  note: 'create gits',
  client_id: clientId,
  client_secret: clientSecret,
  fingerprint:'matter-supply'
};

export const Auth = bodyData => DataRequestMethods.executeDataRequest('/authorizations', 'POST', bodyData);
Auth(body).then( e=> console.log(e));

export const data = (description, content) => ({
  description,
  public: true,
  files: {
    description: {
      content,
    },
  },
});
