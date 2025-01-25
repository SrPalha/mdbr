const { SlashCommandBuilder, EmbedBuilder } = require("discord.js");

const animais = [
    // Animais Selvagens - Mamíferos
    { categoria: "Mamíferos", nome: "🐇 Coelho", local: "Campos e Florestas", recursos: "2 Carne, 2 Pele" },
    { categoria: "Mamíferos", nome: "🐗 Javali", local: "Florestas e Áreas Arborizadas", recursos: "25 Carne, 5 Couro" },
    { categoria: "Mamíferos", nome: "🦌 Veado", local: "Florestas", recursos: "12 Carne, 5 Couro" },
    { categoria: "Mamíferos", nome: "🦌 Veado Macho", local: "Florestas", recursos: "15 Carne, 6 Couro" },
    { categoria: "Mamíferos", nome: "🦊 Raposa", local: "Florestas e Campos", recursos: "6 Carne, 2 Pele" },
    { categoria: "Mamíferos", nome: "🐺 Lobo", local: "Montanhas e Florestas", recursos: "10 Carne, 4 Pele" },
    { categoria: "Mamíferos", nome: "🐂 Bisão", local: "Pradarias", recursos: "80 Carne, 30 Couro" },
    { categoria: "Mamíferos", nome: "🐻 Urso", local: "Montanhas e Cavernas", recursos: "80 Carne, 30 Pele" },
    { categoria: "Mamíferos", nome: "🐆 Lince", local: "Florestas Frias", recursos: "8 Carne, 2 Pele" },
    { categoria: "Mamíferos", nome: "🦌 Alce Macho", local: "Florestas Frias", recursos: "40 Carne, 20 Couro" },
    { categoria: "Mamíferos", nome: "🦌 Alce Fêmea", local: "Florestas Frias", recursos: "30 Carne, 15 Couro" },
    { categoria: "Mamíferos", nome: "🦡 Texugo", local: "Florestas e Campos", recursos: "3 Carne, 3 Pele" },

    // Animais Selvagens - Aves
    { categoria: "Aves", nome: "🪶 Corvo", local: "Campos", recursos: "2 Carne, 8 Penas" },
    { categoria: "Aves", nome: "🦆 Pato", local: "Lagos e Áreas Húmidas", recursos: "4 Carne, 10 Penas" },
    { categoria: "Aves", nome: "🦅 Falcão", local: "Montanhas", recursos: "5 Carne, 20 Penas" },
    { categoria: "Aves", nome: "🕊️ Pombo", local: "Aldeias e Campos", recursos: "2 Carne, 10 Penas" },
    { categoria: "Aves", nome: "🦅 Águia de Cauda Branca", local: "Montanhas", recursos: "6 Carne, 30 Penas" },

    // Peixes
    { categoria: "Peixes", nome: "🐟 Rutilo", local: "Rios e Lagos", recursos: "1 Peixe" },
    { categoria: "Peixes", nome: "🐠 Perca", local: "Rios e Lagos", recursos: "4 Peixes" },
    { categoria: "Peixes", nome: "🐡 Lúcio", local: "Rios e Lagos", recursos: "7 Peixes" },

    // Animais de Fazenda
    { categoria: "Fazenda", nome: "🐔 Galinha", local: "Comprado em Borowo e Rolnica", recursos: "Ovos, Penas" },
    { categoria: "Fazenda", nome: "🐖 Porco", local: "Comprado em Rolnica", recursos: "Esterco" },
    { categoria: "Fazenda", nome: "🦄 Burro", local: "Comprado em Tutki", recursos: "Transporte" },
    { categoria: "Fazenda", nome: "🦢 Ganso", local: "Comprado em Gostovia", recursos: "Ovos, Penas" },
    { categoria: "Fazenda", nome: "🐑 Ovelha", local: "Comprado em Baranica", recursos: "Lã" },
    { categoria: "Fazenda", nome: "🐐 Cabra", local: "Comprado em Denica", recursos: "Leite" },
    { categoria: "Fazenda", nome: "🐄 Vaca", local: "Comprado em Gostovia", recursos: "Leite" },
    { categoria: "Fazenda", nome: "🐎 Cavalo", local: "Comprado em Hornica", recursos: "Transporte" },
];

module.exports = {
    data: new SlashCommandBuilder()
        .setName("animais")
        .setDescription("Exibe informações sobre os animais disponíveis no jogo.")
        .addStringOption(option =>
            option
                .setName("categoria")
                .setDescription("Escolha a categoria de animais.")
                .setRequired(true)
                .addChoices(
                    { name: "Mamíferos", value: "Mamíferos" },
                    { name: "Aves", value: "Aves" },
                    { name: "Peixes", value: "Peixes" },
                    { name: "Fazenda", value: "Fazenda" }
                )
        ),
    async execute(interaction) {
        const categoriaEscolhida = interaction.options.getString("categoria");

        // Filtrar os animais pela categoria selecionada
        const animaisFiltrados = animais.filter(animal => animal.categoria === categoriaEscolhida);

        // Criar embed para exibir os animais da categoria
        const embed = new EmbedBuilder()
            .setTitle(`📋 Animais - ${categoriaEscolhida}`)
            .setColor(0x57f287);

        animaisFiltrados.forEach(animal => {
            embed.addFields({
                name: animal.nome,
                value: `🗺️ **Local:** ${animal.local}\n📦 **Recursos:** ${animal.recursos}`,
                inline: false,
            });
        });

        // Responder ao usuário com o embed
        await interaction.reply({ embeds: [embed], ephemeral: true });
    },
};
