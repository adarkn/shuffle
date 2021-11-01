const reqEvent = (event) => require(`../events/${event}`);
const logger = require('./logger.js');

module.exports = (client) => {
    client.on('ready', () => reqEvent('ready')(client, logger));
    client.on('reconnecting', () => reqEvent('reconnecting')(client, logger));
    client.on('disconnect', () => reqEvent('ready')(client, logger));
    client.on('message', () => reqEvent('ready')(logger));
    
}