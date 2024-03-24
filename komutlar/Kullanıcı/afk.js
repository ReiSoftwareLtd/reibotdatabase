const { PermissionsBitField, EmbedBuilder, SlashCommandBuilder } = require("discord.js");
const db = require("croxydb")
module.exports = {
    data: new SlashCommandBuilder()
        .setName('afk')
        .setDescription('AFK moduna geçmenizi sağlar.')
        .addStringOption(option =>
            option
                .setName('sebep')
                .setDescription('Bir sebep belirt.')
                .setRequired(true)
        ),
    run: async (client, interaction) => {

        const embed = new EmbedBuilder()
            .setDescription(`<:rei_offline:1218821751249567744> | Başarıyla Afk Oldun!`)
            .setColor("#56748d")

        const sebep = interaction.options.getString('sebep')
        db.set(`afk_${interaction.user.id}`, sebep);
        db.set(`afkDate_${interaction.user.id}`, { date: Date.now() })
        interaction.reply({embeds: [embed]})

    },};
