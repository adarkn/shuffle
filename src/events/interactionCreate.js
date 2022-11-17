const { Events } = require('discord.js');
const logger = require('../funcs/logger')

module.exports = {
    name: Events.InteractionCreate,
    async execute(interaction) {
        if (!interaction.isChatInputCommand()) return;

        if(!command) {
            logger.error(`No command matching ${interaction.commandName} found`);
            return;
        }

        try {
            await command.execute(interaction);
        } catch (error) {
            logger.error(error);
            await interaction.reply({content: 'There was an error executing this command!', ephemeral: true});
        }
    }
}