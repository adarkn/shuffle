module.exports = (logger) => {
    process.title(`Shuffle Framework | Reconnecting`);
    logger.connection(`Reconnecting at ${new Date()}`);
}