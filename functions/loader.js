// functions/logger.js
module.exports = {
execute: (message) =>
{
// Log the message to the console with a timestamp and color code
const date = new Date();
const time =   `${date.getHours()}:${date.getMinutes()}:${date.getSeconds()}`;
const colorCode = message.startsWith('ERROR') ? '\x1b[31m' : '\x1b[32m';
console.log(colorCode + [${time}] ${message});
}
};
