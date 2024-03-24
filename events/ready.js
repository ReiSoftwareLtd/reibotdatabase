const { ActivityType, Events } = require("discord.js")
module.exports = {
    name: Events.ClientReady,
    once: true,
    execute(client) {
        let activities = [`/yardım & /help`], i = 0;
        setInterval(() => client.user.setActivity({ name: `${activities[i++ % activities.length]}`, type: ActivityType.Watching }), 22000);
    }
};