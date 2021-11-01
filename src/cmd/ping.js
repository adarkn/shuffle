/* Require RichEmbed to make messages look better */ 

const { RichEmbed } = require('discord.js');

exports.run = (client, message) => {

    /* Variable with a random color for the embed */

    var randomColor = "#000000".replace(/0/g,function(){return (~~(Math.random()*16)).toString(16);});

    /* Creating the first embed */

    const pingEmbed = new RichEmbed().setTitle('Ping').setColor(`${randomColor}`).setDescription('Testing latency.');


    message.channel.send(pingEmbed).then(msg =>{

        /* Creating the second embed */

        const pongEmbed = new RichEmbed().setTitle('Ping').setColor(`${randomColor}`).setDescription(`Latency: ${msg.createdTimestamp - message.createdTimestamp}ms.`);

        /* Editing the original message with our second embed */

        msg.edit(pongEmbed);

    });

};

/* Configuration for the command handler */

exports.conf = {
    enabled: true,
    guildOnly: false,
    aliases: []
};

/* Information for the help command */

exports.help = {
    name: 'ping',
    description: 'Shows latency',
    usage: 'ping'
};