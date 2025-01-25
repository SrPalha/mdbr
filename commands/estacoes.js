const { SlashCommandBuilder } = require("discord.js");

const estacoes = [
    { nome: "🌸 Primavera", impacto: "Época de plantio inicial" },
    { nome: "☀️ Verão", impacto: "Crescimento das plantações e colheita" },
    { nome: "🍂 Outono", impacto: "Plantio de centeio e aveia" },
    { nome: "❄️ Inverno", impacto: "Frio intenso, necessidade de lenha e comida armazenada" },
];

module.exports = {
    data: new SlashCommandBuilder()
        .setName("estacoes")
        .setDescription("Exibe informações sobre as estações do ano no jogo."),
    async execute(interaction) {
        const resposta = estacoes
            .map(e => `${e.nome} - 🌟 **Impacto:** ${e.impacto}\n`)
            .join("\n");
        await interaction.reply({
            content: `📋 **Estações do Ano no Jogo:**\n${resposta}`,
            ephemeral: true, // Define a mensagem como ephemeral
        });
    },
};