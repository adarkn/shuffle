exports.run = (client, message, params) => {
    let messagecount = parseInt(params[0], 10) ? parseInt(params[0], 10) : 1;
    var i = 0;
    do {
        message.channel.send(`⠀`);
        i++
    } while (i < messagecount);
    message.channel.fetchMessages({limit: 100}).then(messages =>{
        let msg_array = messages.array();
        msg_array = msg_array.filter(m => m.author.id === client.user.id);
        msg_array.array.length = messagecount;
        msg_array.map (m => m.delete().catch(console.error));
    });
};

/* Configuration for the command handler */

exports.conf = {
    enabled: true,
    guildOnly: false,
    aliases: ['b']
};

/* Information for the help command */

exports.help = {
    name: 'bomb',
    description: 'Bombs a channel / user (mentioning the user) with messages, then deletes them.',
    usage: 'bomb <number of messages>'
};