const config = require('../../config.json');
const logger = require('../funcs/logger.js');

module.exports = message => {
    const client = message.client;

    /* We ignore messages coming from other bot accoutns */
    if (message.author.bot) return;

    /* We ignore messages that don't start with our prefix */

    if (!message.content.startsWith(config.prefix)) return;

    /* We define what the command is */

    const command = message.content.split(' ')[0].slice(settings.prefix.length);

    /* We define what paramenters the command has */

    const params = message.content.split(' ').slice(1);

    /* We define our command as cmd */
    let cmd;

    /* We look for our command and it's aliases in the collection created in index.js */

    if (client.commands.has(command)) {
        cmd = client.commands.get(command);
    } else if (client.aliases.has(command)) {
        cmd = client.commands.get(client.aliases.get(command));
    }

    /* If we have a command, we run it */
    if (cmd) {
        cmd.run(client, message, params, logger);
    }
}