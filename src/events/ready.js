const os = require('os');
const GB = 1 / (Math.pow(1024, 3));
var totalRam = (os.totalmem() * GB).toFixed(2);
var freeRam = (os.freemem() * GB).toFixed(2);

module.exports = (client, logger) => {
    process.title = `Shuffle Framework | ${client.user.username} | Guilds: ${client.guilds.size} | Users: ${client.users.size}`
    logger.auth(`Shuffle authed to user: ${client.user.discriminator}`);
    logger.misc(`Current ram in the system: ${totalRam} GB`);
    logger.misc(`Current free ram in the system: ${freeRam} GB`);
}