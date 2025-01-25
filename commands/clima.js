const { SlashCommandBuilder } = require("discord.js");

const climas = [
    "🌞 Ensolarado: Perfeito para trabalhar nos campos.",
    "⛅ Parcialmente nublado: Ideal para explorar.",
    "🌧️ Chuvoso: Cuide para que os moradores fiquem secos.",
    "❄️ Nevando: Agasalhe seus aldeões e prepare-se para um frio intenso!",
    "🌪️ Tempestade: Evite sair de casa e proteja suas construções.",
];

module.exports = {
    data: new SlashCommandBuilder()
        .setName("clima")
        .setDescription("Receba uma dica de clima aleatória."),
    async execute(interaction) {
        const clima = climas[Math.floor(Math.random() * climas.length)];
        await interaction.reply({ content: `🌤️ **Dica de Clima: ** ${clima}`, ephemeral: true });
    },
};
