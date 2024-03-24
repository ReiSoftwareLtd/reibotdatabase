const { Client, SlashCommandBuilder, EmbedBuilder, PermissionsBitField } = require("discord.js");
    module.exports = {
        data: new SlashCommandBuilder()
  .setName('ban')
        .setDescription('Etiketlenen veya idsi girilen kullanıcıyı sunucudan banlar.')
        .addUserOption(option =>
            option
                .setName('kullanıcı')
                .setDescription('Bir kullanıcı etiketleyin veya idsini girin.')
                .setRequired(true)
        )
        .addStringOption(option =>
            option
                .setName('sebep')
                .setDescription('Kullanıcı hangi sebep ile banlanıyor?')
        ),
    run: async (client, interaction) => {
        const yetkinYokEmbed = new EmbedBuilder()
            .setDescription(`<:rei_x:1218821747751522334> | Üyeleri Yasakla Yetkin Yok!`)
            .setColor("Red")
        const ayniYetkiEmbed = new EmbedBuilder()
            .setColor("Red")
            .setDescription(`<:rei_x:1218821747751522334> | Bu Kullanıcının Ban Yetkisi Olduğu İçin Onu Yasaklayamadım.`)
        const banladimEmbed = new EmbedBuilder()
            .setColor("Green")
            .setDescription(`<:rei_on:1218821744639348776> | Başarıyla Üyeyi Yasakladım!`)
        if (!interaction.member.permissions.has(PermissionsBitField.Flags.BanMembers)) return interaction.reply({ embeds: [yetkinYokEmbed], ephemeral: true })
        const user = interaction.options.getMember('kullanıcı')
        const sebep = interaction.options.getString('sebep')
        try {
            if (user.permissions.has(PermissionsBitField.Flags.BanMembers)) return interaction.reply({ embeds: [ayniYetkiEmbed], ephemeral: true })
            await user.ban({ reason: sebep });
            interaction.reply({ embeds: [banladimEmbed] })
        } catch (error) {
            const errorEmbed = new EmbedBuilder()
                .setColor("Red")
                .setDescription('<:rei_x:1218821747751522334> | Botun yetkisi yetersiz.')

            interaction.reply({ embeds: [errorEmbed], ephemeral: true });
        }

        },
};
