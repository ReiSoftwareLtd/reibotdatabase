const { PermissionsBitField, SlashCommandBuilder, EmbedBuilder } = require("discord.js");
module.exports = {
    data: new SlashCommandBuilder()
        .setName('rol-ver')
        .setDescription('Etiketlenen veya idsi girilen kullanıcıdan belirtilen rolü verir.')
        .addUserOption(option =>
            option
                .setName('user')
                .setDescription('Rol verilecek kullanıcıyı seçin!')
                .setRequired(true)
        )
        .addRoleOption(option =>
            option
                .setName('rol')
                .setDescription('Lütfen bir rol etiketle!')
                .setRequired(true)
        ),
    run: async (client, interaction) => {
        const rol = interaction.options.getRole('rol')
        const user = interaction.options.getMember('user')

        const noPermissionEmbed = new EmbedBuilder()
            .setColor("Red")
            .setDescription('<:rei_x:1218821747751522334> | Rolleri Yönet Yetkin Yok!')
        const successEmbed = new EmbedBuilder()
            .setColor("Red")
            .setDescription(`<:rei_on:1218821744639348776>  | Başarıyla ${user} Kullanıcısına ${rol} Rolü Verildi.`)
        const errorEmbed = new EmbedBuilder()
            .setColor("Red")
            .setDescription('<:rei_x:1218821747751522334> | Kullanıcıya rol verilemedi. Botun yetkisi yetersiz.')

        if (!interaction.member.permissions.has(PermissionsBitField.Flags.ManageRoles)) return interaction.reply({ embeds: [noPermissionEmbed], ephemeral: true })

        try {
            await interaction.guild.members.cache.get(user.id).roles.add(rol)
            interaction.reply({ embeds: [successEmbed]})
        } catch (error) {
            interaction.reply({
                embeds: [errorEmbed],
                ephemeral: true
            });
        }
        


    },
};
