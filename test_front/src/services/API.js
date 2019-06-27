/**
 * @author: Guillaume Nachury 
 */


 /**
 * Fake API call - used a timeout to simulate the an HTTP communication
 * @param {string} login User login
 * @param {string} password User password
 */
export const doLogin = (login, password) => new Promise((res, rej) => {
    setTimeout(() => (login === 'guillaume@test.com' && password === 'azeaze') ? res() : rej("wrong user or password"), 2000)
})