exports.run = (client, message, logger, params) => {

    /* Declaring the command */

    let command;

    /* Checking if the command exists */

    if (client.commands.has(params[0])) {

        // Set command as the params

        command = params[0];

    } else if (client.aliases.has(params[0])) {

        // Set command as the command name we get from the alias

        command = client.aliases.get(params[0]);

    }


    if(!command){

        /* Log that we can't find the command */

        logger.error(`Can't find command ${parms[0]}`);
        return message.channel.send(`Can't find the command: ${params[0]}`);

    } else {

        /* Command found, we reload it */

        logger.info(`Reloading command: ${command}`);
        message.channel.send(`Reloading: ${command}`).then(m =>{
            client.reload(command).then(() => {
                logger.info(`Command ${command} reloaded`);
                m.edit(`Command ${command} reloaded`);
            }).catch(e => {
                logger.error(`Error while reloading ${command} - Error ${e.stack}`);
                m.edit(`Error reloading: ${command}\n\`\`\`${e.stack}\`\`\``);
            });
        });
    }
};

/* Configuration for the command handler */

exports.conf = {
    enabled: true,
    guildOnly: false,
    aliases: ['r']
};

/* Information for the help command */

exports.help = {
    name: 'reload',
    description: 'Reloads a command if it\'s been updated or modified',
    usage: 'reload <command>'
};