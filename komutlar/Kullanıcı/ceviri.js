const { SlashCommandBuilder } = require('@discordjs/builders');
const { EmbedBuilder } = require('discord.js');
const translate = require('@iamtraction/google-translate');

module.exports = {
    data: new SlashCommandBuilder()
        .setName('çeviri')
        .setDescription('Çeviri yapmanızı sağlar. "With Google Translate" ')
        .addStringOption(option => option
            .setName('dil')
            .setDescription('Çevireceğiniz dili girin (kısaltma "TR") olarak')
            .setRequired(true)
        )
        .addStringOption(option => option
            .setName('metin')
            .setDescription('Çevireceğiniz yazı girin.')
            .setRequired(true)
        ),
    run: async (client, interaction) => {   
        const lang = interaction.options.getString('dil');
        const txt = interaction.options.getString('metin');

        try {
            const res = await translate(txt, { to: lang });
            const embed = new EmbedBuilder()
                .setDescription(res.text)
                .setColor("#56748d");
            interaction.reply({ embeds: [embed] });
        } catch (err) {
            interaction.reply({ content: '<:rei_x:1218821747751522334> Lütfen doğru bir dil girin (örn: TR, EN)', ephemeral: true });
        }
    },
};
