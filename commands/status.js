const { SlashCommandBuilder, EmbedBuilder } = require("discord.js");

module.exports = {
    data: new SlashCommandBuilder()
        .setName("status")
        .setDescription("Mostra o status atual do bot."),
    async execute(interaction) {
        const guild = interaction.guild;

        // Tempo de atividade do bot
        const uptime = process.uptime();
        const hours = Math.floor(uptime / 3600);
        const minutes = Math.floor((uptime % 3600) / 60);
        const seconds = Math.floor(uptime % 60);

        // Número total de membros no servidor
        const totalMembers = guild.memberCount;

        // Número de moderadores (assumindo que moderadores têm um cargo chamado "Mod" ou similar)
        const mods = guild.roles.cache.find(role => role.name.toLowerCase().includes("mod"));
        const modCount = mods ? mods.members.size : 0;

        // Idade do servidor
        const serverCreationDate = guild.createdAt;
        const serverAge = Math.floor((Date.now() - serverCreationDate) / (1000 * 60 * 60 * 24)); // Idade em dias

        // Nome do bot e número de comandos
        const botName = interaction.client.user.username;
        const commandCount = interaction.client.commands.size;

        // Criando o embed
        const embed = new EmbedBuilder()
            .setColor("#0099ff")
            .setTitle("🤖 Status do Bot")
            .setThumbnail(interaction.client.user.displayAvatarURL()) // Ícone do bot
            .setTimestamp()
            .setFooter({ text: `Solicitado por ${interaction.user.tag}`, iconURL: interaction.user.displayAvatarURL() })
            .addFields(
                { name: "🤖 Bot", value: botName, inline: true },
                { name: "🕒 Tempo de Atividade", value: `${hours}h ${minutes}m ${seconds}s`, inline: true },
                { name: "⚙️ Comandos Disponíveis", value: `${commandCount}`, inline: true },
                { name: "👥 Membros no Servidor", value: `${totalMembers}`, inline: true },
                { name: "🔨 Moderadores", value: `${modCount}`, inline: true },
                { name: "🏰 Idade do Servidor", value: `${serverAge} dias`, inline: true },
                { name: "📅 Servidor Criado em", value: serverCreationDate.toDateString(), inline: false },
                { name: "🛠️ Criador do Bot", value: `<@386364477001695232>`, inline: false }
            );

        // Enviar o embed como resposta efêmera
        await interaction.reply({ embeds: [embed], ephemeral: true });
    },
};
