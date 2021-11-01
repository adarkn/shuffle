/*
   _____ _            __  __ _      
  / ____| |          / _|/ _| |     
 | (___ | |__  _   _| |_| |_| | ___ 
  \___ \| '_ \| | | |  _|  _| |/ _ \
  ____) | | | | |_| | | | | | |  __/
 |_____/|_| |_|\__,_|_| |_| |_|\___|
    A modular discord.js framework                    
*/

/* Dependencies */
const Discord = require('discord.js');
const logger = require('./src/funcs/logger.js');
const os = require('os');
const fs = require('fs');

/* Declaring client and configuration file. */
const client = new Discord.Client();
const config = require('./config.json');

/* Declaring misc */
const GB = 1 / (Math.pow(1024, 3));
var totalRam = (os.totalmem() * GB).toFixed(2);
var freeRam = (os.freemem() * GB).toFixed(2);

require('./src/funcs/eventHandler.js')(client);

logger.info('Shuffle process started, connecting to discord...');
process.title = `Shuffle Framework | ${freeRam} GB / ${totalRam} GB | Connecting to discord`


/* -- Command handler -- */

/* Creating the commands and aliases collection */

client.commands = new Discord.Collection();
client.aliases = new Discord.Collection();

/* Using fs to read the cmd directory and looks for commands */

fs.readdir('./src/cmd', (err, files) =>{

    /* If we find an error, log it */
    if (err) logger.error(err);

    /* Logging the number of commands located in ./src/cmd */
    logger.info(`Found a total of ${files.length} commands, loading them...`);

    /* Loading each command on the files array */
    files.forEach(f => {
        const props = require(`./src/cmd/${f}`);
        logger.misc(`Loading command: ${props.help.name}`);
        client.commands.set(props.help.name, props);
        props.conf.aliases.forEach(alias => {
            client.aliases.set(alias, props.help.name);
        });
    });
});


client.login(config.token);