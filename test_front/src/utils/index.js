/**
 * @author: Guillaume Nachury 
 */

/**
 * Simple email validator
 * @param {string} entry value to test against the pattern
 */
// eslint-disable-next-line
export const emailValidator = entry => /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(entry);