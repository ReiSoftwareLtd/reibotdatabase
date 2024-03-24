const { Events, InteractionType, EmbedBuilder, ActionRowBuilder, SelectMenuBuilder, ButtonBuilder, ButtonStyle, ReactionUserManager } = require("discord.js");
const db = require("croxydb");

module.exports = {
    name: Events.InteractionCreate,
    execute: async (interaction) => {


        let client = interaction.client;

        const bakimmodu = new EmbedBuilder()
            .setTitle(`<:rei_dev:1218822093475549245> Botumuz şuan da bakımdadır.`)
            .setDescription(`Herhangi bir sorunz vs. varsa <@791682296755257354>'e ulaşınız.`);

        if (db.fetch(`bakim`)) {
            if (interaction.user.id !== "1218555052206330028") { return interaction.reply({ embeds: [bakimmodu]}) }
        }

        if (interaction.type == InteractionType.ApplicationCommand) {
            if (interaction.user.bot) return;
            try {
                const command = client.slashcommands.get(interaction.commandName)
                command.run(client, interaction)
            } catch (e) {
                const embed = new EmbedBuilder()
                    .setDescription(`<:rei_x:1218821747751522334> Komut çalıştırılamadı lütfen tekrar deneyin...`)
                interaction.reply({ embeds: [embed], ephemeral: true })
            }
        }
    }
}