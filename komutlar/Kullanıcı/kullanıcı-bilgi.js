const { Client, SlashCommandBuilder, EmbedBuilder, PermissionsBitField } = require("discord.js");
module.exports = {
    data: new SlashCommandBuilder()
        .setName('kullanıcı-bilgi')
        .setDescription('Etiketlenen veya idsini kullanıcının genel bilgilerini gösterir.')
        .addUserOption(option =>
            option
                .setName('kullanıcı')
                .setDescription('Bir kullanıcı etiketleyin veya idsini girin.')
                .setRequired(true)
        ),
    run: async (client, interaction) => {

        const member = interaction.options.getMember('kullanıcı')

        const embed = new EmbedBuilder()
            .setDescription(`**<:rei_info:1218822839310876742> Kullanıcı Bilgileri**
            
    • Kullanıcı: (<@${member.user.id}> - İDsi: \`${member.user.id}\`)
    • Hesap Kurulum Tarihi: <t:${parseInt(member.user.createdTimestamp / 1000)}:R>
    • Sunucuya Katılma Tarihi: <t:${parseInt(member.joinedTimestamp / 1000)}:R>
    `)
            .setThumbnail(`${member.user.displayAvatarURL()}`)
            .setColor("#56748d")
        interaction.reply({ embeds: [embed] })

    },

};
