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

client.login(config.token);