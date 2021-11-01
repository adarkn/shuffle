const colors = require('colors');
const moment = require('moment');

//INFO Log
const info = function(message){
    console.log(colors.cyan(`[INFORMATION - ${moment().format('MMM Do YYYY, H:mm:ss a')}]`), message);
}
//MISC Log
const misc = function(message){
    console.log(colors.blue(`[MISCELLANEOUS - ${moment().format('MMM Do YYYY, H:mm:ss a')}]`), message);
}
//ERROR Log
const error = function(message){
    console.log(colors.red(`[ERROR - ${moment().format('MMM Do YYYY, H:mm:ss a')}]`), message);
}
//SUCCESS Log
const success = function(message){
    console.log(colors.green(`[SUCCESS - ${moment().format('MMM Do YYYY, H:mm:ss a')}]`), message);
}
//CONNECTION Log
const connection = function(message){
    console.log(colors.magenta(`[CONNECTION - ${moment().format('MMM Do YYYY, H:mm:ss a')}]`), message);
}
//AUTHENTICATION Log
const auth = function(message){
    console.log(colors.yellow(`[AUTHENTICATION - ${moment().format('MMM Do YYYY, H:mm:ss a')}]`), message);
}



/* Module exports */
module.exports.info = info;
module.exports.misc = misc;
module.exports.error = error;
module.exports.success = success;
module.exports.connection = connection;
module.exports.auth = auth;
