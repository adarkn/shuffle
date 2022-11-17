// Declaring important stuff
const { Client, Events, GatewayIntentBits, Collection } = require('discord.js');
const path = require('path');
const fs = require('fs');
const logger = require('./src/funcs/logger')
require('dotenv').config();

const client = new Client({ 
    intents: [
        GatewayIntentBits.Guilds
    ] 
});

client.commands = new Collection();

// Event Handler

const eventsPath = path.join(__dirname, '/src/events');
const eventFiles = fs.readdirSync(eventsPath).filter(file => file.endsWith('.js'));

for (const file of eventFiles) {
    const filePath = path.join(eventsPath, file);
    const event = require(filePath);
    if (event.once) {
        client.once(event.name, (...args) => event.execute(...args));
    } else {
        client.on(event.name, (...args) => event.execute(...args));
    }
}

// Command handler

const commandsPath = path.join(__dirname, 'src/commands');
const commandFiles = fs.readdirSync(commandsPath).filter(file => file.endsWith('.js'));

for (const file of commandFiles) {
    const filePath = path.join(commandsPath, file);
    const command = require(filePath);

    if ('data' in command && 'execute' in command) {
        client.commands.set(command.data.name, command);
    } else {
        logger.error(`The command at ${filePath} is missing a required 'data' or 'execute' property.`)
    }
}

client.login(process.env.TOKEN);