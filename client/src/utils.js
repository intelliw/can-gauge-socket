//@ts-check
'use strict';
/**
 * utils.js 
 */
const NONE = global.undefined;



// clones a json object - including arrays to any nesting depth
module.exports.deepClone = (jsonObj) => {                           // e.g. { .. }    

    let clone = JSON.parse(JSON.stringify(jsonObj));

    return clone;
};

// performs a 1 level shallow clone excluding prototype, using spread operator - 
module.exports.shallowClone = (jsonObj) => {                        // e.g. { .. }    

    let clone = { ...jsonObj };

    return clone;
};
