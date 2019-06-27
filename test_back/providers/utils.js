/**
 * Transform an object to an array of key:value
 *      o = {a:1,b:2}
 * is transformed into 
 *     o' = [{a:1}, {b:2}]
 * 
 * @param {Object} srcObj The object to transform
 */
const objectToArray = srcObj => Object.entries(srcObj).map(entry =>{ return {[entry[0]] : entry[1]}} );

/**
 * worst parser ever
 */
const csvParser = csv => csv.split("\r\n").map(line => line.split('\t'));

module.exports = {
    objectToArray,
    csvParser
}