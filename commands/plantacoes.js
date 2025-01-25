const { SlashCommandBuilder, EmbedBuilder } = require("discord.js");

const plantacoes = [
    { nome: "🌾 Trigo", plantar: "Primavera ou Outono", colher: "Verão ou Primavera" },
    { nome: "🍺 Cevada", plantar: "Primavera", colher: "Outono" },
    { nome: "🌾 Centeio", plantar: "Outono", colher: "Primavera" },
    { nome: "🌾 Aveia", plantar: "Primavera", colher: "Outono" },
    { nome: "🥕 Cenoura", plantar: "Primavera ou Outono", colher: "Outono ou Verão" },
    { nome: "🍠 Beterraba", plantar: "Primavera", colher: "Outono" },
    { nome: "🌿 Linho", plantar: "Primavera", colher: "Verão" },
    { nome: "🌺 Papoula", plantar: "Primavera", colher: "Verão" },
];

module.exports = {
    data: new SlashCommandBuilder()
        .setName("plantacoes")
        .setDescription("Exibe uma lista de plantações disponíveis e seus ciclos."),
    async execute(interaction) {
        const embed = new EmbedBuilder()
            .setColor('#0099ff')
            .setTitle('🌱 Ciclo de Plantações')
            .setDescription('Veja os melhores momentos para plantar e colher:')
            .setThumbnail('https://example.com/plant_icon.png')
            .setTimestamp()
            .setFooter({ text: 'Plantações', iconURL: 'https://i.imgur.com/zKXRZdz.png' });

        plantacoes.forEach(p => {
            embed.addFields({ name: p.nome, value: `Plantar em: **${p.plantar}**\nColher em: **${p.colher}**`, inline: false });
        });

        await interaction.reply({ embeds: [embed] });
    },
};
