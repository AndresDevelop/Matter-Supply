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
 * @param {String} token Value to search
 */
export const createGists = body => DataRequestMethods.executeDataRequest('/gists', 'POST', body);

export const data = (description, content) => ({
  description,
  public: true,
  files: {
    description: {
      content,
    },
  },
});
