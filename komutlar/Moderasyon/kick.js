const { PermissionsBitField, EmbedBuilder, SlashCommandBuilder } = require("discord.js");
module.exports = {
    data: new SlashCommandBuilder()
        .setName('kick')
        .setDescription('Etiketlenen veya idsini girilen kullanıcıyı sunucudan atar.')
        .addUserOption(option =>
            option
                .setName('kullanıcı')
                .setDescription('Bir kullanıcı etiketleyin veya idsini girin.')
                .setRequired(true)
        ),
    run: async (client, interaction) => {

        const yetkinYokEmbed = new EmbedBuilder()
            .setDescription(`<:rei_x:1218821747751522334> | Üyeleri Atma Yetkin Yok!`)
            .setColor("Red")

        const ayniYetkiEmbed = new EmbedBuilder()
            .setDescription(`<:rei_x:1218821747751522334> | Bu Kullanıcının Atma Yetkisi Olduğu İçin Onu Yasaklayamadım.`)
            .setColor("Red")

        const attimEmbed = new EmbedBuilder()
            .setColor("Green")

            .setDescription(`<:rei_on:1218821744639348776> | Başarıyla Üyeyi Attım!`)

        if (!interaction.member.permissions.has(PermissionsBitField.Flags.KickMembers)) return interaction.reply({ embeds: [yetkinYokEmbed], ephemeral: true })
        const user = interaction.options.getMember('kullanıcı')

        try {
            if (user.permissions.has(PermissionsBitField.Flags.KickMembers)) return interaction.reply({ embeds: [ayniYetkiEmbed], ephemeral: true })
            await user.kick();
            interaction.reply({ embeds: [attimEmbed] })
        } catch (error) {
            const errorEmbed = new EmbedBuilder()
                .setColor("Red")
                .setDescription('<:rei_x:1218821747751522334> | Botun yetkisi yetersiz.')

            interaction.reply({ embeds: [errorEmbed], ephemeral: true });
        }
    },
};
