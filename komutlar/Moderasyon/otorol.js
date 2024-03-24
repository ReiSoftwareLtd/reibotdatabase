const { PermissionFlagsBits } = require("discord.js");
const { SlashCommandBuilder } = require("@discordjs/builders");
const db = require("croxydb")
module.exports = {
    data: new SlashCommandBuilder()
        .setName("oto-rol")
        .setDescription("Yeni gelenlere otomatik rol verir.")
        .addRoleOption((option) =>
            option
                .setName("rol")
                .setDescription("Lütfen bir rol etiketle.")
                .setRequired(true)

        ),

    run: async (client, interaction) => {

        if (!interaction.member.permissions.has(PermissionFlagsBits.ManageRoles)) return interaction.reply({ content: "Rolleri Yönet Yetkin Yok!", ephemeral: true })
        const rol = interaction.options.getRole('rol')
        db.set(`otorol_${interaction.guild.id}`, rol.id)
        interaction.reply({ content: "<:rei_on:1218821744639348776> Otorol Başarıyla <@&" + rol + "> Olarak Ayarlandı." })
    }

};