const { SlashCommandBuilder, ActionRowBuilder, StringSelectMenuBuilder, ComponentType, EmbedBuilder } = require("discord.js");
const fs = require("fs");
const path = require("path");

// Função para carregar os itens do arquivo JSON
function loadItemsFromJson() {
    const filePath = path.join(__dirname, 'items.json');
    const data = fs.readFileSync(filePath, 'utf8');
    return JSON.parse(data);
}

module.exports = {
    data: new SlashCommandBuilder()
        .setName("mercado")
        .setDescription("Veja os itens à venda organizados por categorias."),
    async execute(interaction) {
        const mercado = loadItemsFromJson();
        const categorias = Object.keys(mercado);

        const options = categorias.map(categoria => ({
            label: categoria,
            value: categoria
        }));

        const menu = new StringSelectMenuBuilder()
            .setCustomId("select_categoria")
            .setPlaceholder("Escolha uma categoria")
            .addOptions(options);

        const rowMenu = new ActionRowBuilder().addComponents(menu);

        await interaction.reply({
            content: "📋 **Escolha uma categoria para ver os itens disponíveis:**",
            components: [rowMenu],
            ephemeral: true
        });

        const collector = interaction.channel.createMessageComponentCollector({
            componentType: ComponentType.StringSelect,
            time: 60000
        });

        collector.on("collect", async i => {
            if (i.customId === "select_categoria" && i.user.id === interaction.user.id) {
                const categoriaSelecionada = i.values[0];
                const itens = mercado[categoriaSelecionada];
                let embeds = [];
                let embed = new EmbedBuilder()
                    .setColor('#0099ff')
                    .setTitle(`Itens disponíveis em ${categoriaSelecionada}`)
                    .setDescription('Aqui estão os itens que você pode comprar:')
                    .setTimestamp()
                    .setFooter({ text: 'Mercado', iconURL: 'https://i.imgur.com/zKXRZdz.png' });

                let count = 0;
                for (const item of itens) {
                    if (count >= 25) { // Limit of fields per embed
                        embeds.push(embed);
                        embed = new EmbedBuilder()
                            .setColor('#0099ff')
                            .setTitle(`Mais itens em ${categoriaSelecionada}`)
                            .setTimestamp()
                            .setFooter({ text: 'Mercado', iconURL: 'https://i.imgur.com/zKXRZdz.png' });
                        count = 0;
                    }
                    embed.addFields({ name: item.Nome, value: `💰 ${item.Valor}`, inline: true });
                    count++;
                }
                embeds.push(embed); // Add the last embed

                // Ensure the interaction is initially replied to or deferred
                if (!i.deferred && !i.replied) {
                    await i.reply({ content: 'Processing your request...', ephemeral: true });
                }

                // Send follow-up messages for each embed
                for (const embed of embeds) {
                    await i.followUp({ embeds: [embed], ephemeral: true });
                }
            } else {
                if (!i.deferred && !i.replied) {
                    await i.reply({ content: "Apenas quem usou o comando pode interagir com ele.", ephemeral: true });
                } else {
                    await i.followUp({ content: "Apenas quem usou o comando pode interagir com ele.", ephemeral: true });
                }
            }
        });


        collector.on("end", () => {
            console.log("Coletor encerrado.");
        });
    },
};
