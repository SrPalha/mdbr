const { SlashCommandBuilder, ActionRowBuilder, StringSelectMenuBuilder, ComponentType, EmbedBuilder } = require("discord.js");

const categorias = {
    "🏠 Casas": [
        { 
            nome: "Casa Pequena Simples", 
            funcao: "Abriga moradores", 
            tecnologia: "0 Tecnologia de Construção",
            capacidade: "50 kg",
            materiais: "25 Toras, 66 Gravetos, 32 Palhas, 10 Pedras ou 8 Toras"
        },
        { 
            nome: "Casa Simples", 
            funcao: "Abriga moradores", 
            tecnologia: "250 Tecnologia de Construção",
            capacidade: "50 kg",
            materiais: "32 Toras, 80 Gravetos, 48 Palhas, 12 Pedras ou 10 Toras"
        },
        { 
            nome: "Casa", 
            funcao: "Abriga mais moradores", 
            tecnologia: "1.500 Tecnologia de Construção",
            capacidade: "50 kg",
            materiais: "34 Toras, 106 Gravetos, 60 Palhas, 14 Pedras"
        },
    ],
    "🌾 Edifícios de Agricultura": [
        { 
            nome: "Campo", 
            funcao: "Área para cultivo", 
            tecnologia: "-",
            capacidade: "-",
            materiais: "-"
        },
        { 
            nome: "Celeiro I", 
            funcao: "Armazena e processa recursos agrícolas", 
            tecnologia: "10 Tecnologia de Agricultura",
            capacidade: "N/A",
            materiais: "35 Toras, 64 Gravetos, 48 Palhas"
        },
        { 
            nome: "Celeiro II", 
            funcao: "Melhor versão do Celeiro I", 
            tecnologia: "1.500 Tecnologia de Agricultura",
            capacidade: "N/A",
            materiais: "51 Toras, 48 Palhas, 12 Pedras"
        },
        { 
            nome: "Celeiro III", 
            funcao: "Versão avançada do celeiro", 
            tecnologia: "8.000 Tecnologia de Agricultura",
            capacidade: "N/A",
            materiais: "27 Toras, 36 Tábuas, 76 Pedras"
        },
        { 
            nome: "Galpão de Fazenda", 
            funcao: "Local para ferramentas agrícolas", 
            tecnologia: "15 Tecnologia de Agricultura",
            capacidade: "N/A",
            materiais: "10 Toras, 16 Gravetos, 16 Palhas, 8 Pedras"
        },
        { 
            nome: "Moinho de Vento", 
            funcao: "Produção de farinha", 
            tecnologia: "10.000 Tecnologia de Agricultura",
            capacidade: "N/A",
            materiais: "77 Toras, 58 Tábuas"
        },
    ],
    "🐴 Edifícios de Pecuária": [
        { 
            nome: "Galinheiro", 
            funcao: "Abriga galinhas", 
            tecnologia: "50 Tecnologia de Agricultura",
            capacidade: "N/A",
            materiais: "6 Pedras, 12 Toras, 30 Gravetos, 24 Palhas"
        },
        { 
            nome: "Chiqueiro", 
            funcao: "Abriga porcos", 
            tecnologia: "100 Tecnologia de Agricultura",
            capacidade: "N/A",
            materiais: "8 Pedras, 18 Toras, 54 Gravetos, 12 Palhas"
        },
        { 
            nome: "Estábulo", 
            funcao: "Abriga cavalos", 
            tecnologia: "2.000 Tecnologia de Agricultura",
            capacidade: "N/A",
            materiais: "12 Pedras, 48 Toras, 48 Palhas, 8 Tábuas"
        },
        { 
            nome: "Casa de Gansos", 
            funcao: "Abriga gansos", 
            tecnologia: "500 Tecnologia de Agricultura",
            capacidade: "N/A",
            materiais: "6 Pedras, 13 Toras, 42 Gravetos, 16 Palhas"
        },
        { 
            nome: "Aprisco", 
            funcao: "Abriga ovelhas", 
            tecnologia: "2.500 Tecnologia de Agricultura",
            capacidade: "N/A",
            materiais: "10 Pedras, 19 Toras, 62 Gravetos, 32 Palhas"
        },
        { 
            nome: "Estábulo de Vacas", 
            funcao: "Abriga vacas", 
            tecnologia: "3.500 Tecnologia de Agricultura",
            capacidade: "N/A",
            materiais: "10 Pedras, 26 Toras, 104 Gravetos, 32 Palhas"
        },
        { 
            nome: "Apiário", 
            funcao: "Produção de mel", 
            tecnologia: "5.000 Tecnologia de Agricultura",
            capacidade: "N/A",
            materiais: "6 Pedras, 6 Toras, 16 Palhas"
        },
    ],
    "⚒️ Edifícios de Produção": [
        { 
            nome: "Oficina I", 
            funcao: "Produção básica de ferramentas", 
            tecnologia: "10 Tecnologia de Produção",
            capacidade: "N/A",
            materiais: "12 Toras, 32 Palhas +base"
        },
        { 
            nome: "Oficina II", 
            funcao: "Produção intermediária de ferramentas", 
            tecnologia: "250 Tecnologia de Produção",
            capacidade: "N/A",
            materiais: "40 Toras, 24 Tábuas +base"
        },
        { 
            nome: "Ferraria I", 
            funcao: "Forja básica", 
            tecnologia: "50 Tecnologia de Produção",
            capacidade: "N/A",
            materiais: "15 Toras, 8 Pedras, 22 Gravetos, 32 Palhas"
        },
    ],
    "📦 Edifícios de Armazenamento": [
        { 
            nome: "Armazém de Recursos I", 
            funcao: "Armazena recursos", 
            tecnologia: "50 Tecnologia de Construção",
            capacidade: "1.000 kg",
            materiais: "34 Toras, 110 Gravetos, 40 Palhas +base"
        },
        { 
            nome: "Armazém de Alimentos I", 
            funcao: "Armazena alimentos", 
            tecnologia: "5 Tecnologia de Agricultura",
            capacidade: "500 kg",
            materiais: "42 Toras, 62 Gravetos, 32 Palhas +base"
        },
    ],
    "🍺 Edifícios de Serviço": [
        { 
            nome: "Barraca de Mercado", 
            funcao: "Troca e venda de mercadorias", 
            tecnologia: "2.500 Tecnologia de Produção",
            capacidade: "N/A",
            materiais: "8 Toras, 8 Tábuas, 8 Tecido de Linho"
        },
        { 
            nome: "Cabana do Construtor", 
            funcao: "Construção e reparo", 
            tecnologia: "7.500 Tecnologia de Construção",
            capacidade: "N/A",
            materiais: "18 Toras, 64 Gravetos, 32 Palhas"
        },
    ],
};

module.exports = {
    data: new SlashCommandBuilder()
        .setName("construcoes")
        .setDescription("Mostra categorias de construções e suas funções no jogo."),
    async execute(interaction) {
        const options = Object.keys(categorias).map(categoria => ({
            label: categoria,
            value: categoria,
        }));

        const menu = new StringSelectMenuBuilder()
            .setCustomId("select_categoria")
            .setPlaceholder("Escolha uma categoria de construção")
            .addOptions(options);

        const row = new ActionRowBuilder().addComponents(menu);

        await interaction.reply({
            content: "Selecione uma categoria para ver as construções disponíveis:",
            components: [row],
            ephemeral: true,
        });

        const collector = interaction.channel.createMessageComponentCollector({
            componentType: ComponentType.StringSelect,
            time: 60000, // 60 segundos
        });

        collector.on("collect", async i => {
            if (i.customId === "select_categoria" && i.user.id === interaction.user.id) {
                const categoriaSelecionada = i.values[0];
                const construcoes = categorias[categoriaSelecionada];

                const embed = new EmbedBuilder()
                    .setColor("#0099ff")
                    .setTitle(`Construções: ${categoriaSelecionada}`)
                    .setDescription("Veja abaixo as informações das construções disponíveis nessa categoria:");

                construcoes.forEach(item => {
                    embed.addFields({
                        name: `• ${item.nome}`,
                        value: `**Função:** ${item.funcao}\n🔹 **Tecnologia:** ${item.tecnologia}\n🔹 **Capacidade:** ${item.capacidade}\n🔹 **Materiais:** ${item.materiais}`,
                        inline: false,
                    });
                });

                await i.reply({
                    embeds: [embed],
                    ephemeral: true,
                });
            } else {
                await i.reply({ content: "Apenas quem usou o comando pode interagir com ele.", ephemeral: true });
            }
        });

        collector.on("end", () => {
            console.log("Coletor encerrado.");
        });
    },
};