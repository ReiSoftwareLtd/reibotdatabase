const { EmbedBuilder, ActionRowBuilder, ButtonBuilder, ButtonStyle } = require("discord.js");
const { SlashCommandBuilder } = require("@discordjs/builders");

module.exports = {
    data: new SlashCommandBuilder()
        .setName("davet")
        .setDescription("Botun bağlantılarını gösterir."),

    run: async (client, interaction) => {

        const embed = new EmbedBuilder()
            .setTitle("<:rei_invite:1218822094545223693> Rei - Davet")
            .setDescription(`> **Merhaba bütün linklerimizi alttaki butonlara basarak görebilirsiniz.**`)
            .setColor("#56748d")
            .setImage("https://media.discordapp.net/attachments/1218880979603558441/1218960836668821605/REI.png?ex=660990be&is=65f71bbe&hm=4d6cebf7ce6323a8e8bab5d4162ce442448577986c45bc192d2cb36910858605&=&format=webp&quality=lossless&width=526&height=67")
        const row = new ActionRowBuilder()
            .addComponents(
                new ButtonBuilder()
                    .setLabel("Davet Et")
                    .setStyle(ButtonStyle.Link)
                    .setURL("https://invite.reibot.rf.gd"),
                new ButtonBuilder()
                    .setLabel("Destek Sunucusu")
                    .setStyle(ButtonStyle.Link)
                    .setURL("https://discord.reibot.rf.gd"),
                new ButtonBuilder()
                    .setLabel("Oy Ver")
                    .setStyle(ButtonStyle.Link)
                    .setURL("https://topgg.reibot.rf.gd")

            )
        interaction.reply({ embeds: [embed], components: [row] })

    },
};
