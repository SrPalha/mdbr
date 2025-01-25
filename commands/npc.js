const { SlashCommandBuilder } = require("discord.js");

const npcList = [
    "👤 **Uniegost** - Castelão de Gostovia: Responsável por administrar e coletar impostos.",
    "👤 **Adelina** - Comerciante de Gostovia: Especializada em sementes e produtos agrícolas.",
    "👤 **Dobroniega** - Taberneira de Gostovia: Gerencia a taberna local e oferece missões.",
    "👤 **Alwin** - Jovem fazendeiro de Gostovia: Envolvido em missões de caça e arco e flecha.",
    "👤 **Dagobert** - Líder de Borowo: Relacionado a missões de construção.",
    "👤 **Jarognewa** - Comerciante de Branica: Vende roupas e tecidos.",
    "👤 **Kestrel** - Ex-membro de gangue: Figura importante na história principal.",
    "👤 **Jordan** - Parente do jogador: Figura central na história do jogo.",
    "👤 **Lenica** - Caçadora de Lesnica: Oferece recursos de caça.",
    "👤 **Nadar** - Comerciante de Baranica: Especializado em ferramentas.",
    "👤 **Sobiemir** - Pastor de Rolnica: Cuida de ovelhas e fornece missões.",
    "👤 **Woolrad** - Ferreiro de Hornica: Produz armas e ferramentas de metal.",
    "👤 **Sambor** - Recluso: Relacionado a missões de sobrevivência.",
    "👤 **Teobald** - Líder de Tutki: Relacionado a missões agrícolas.",
    "👤 **Norbert** - Comerciante de Gostovia: Especializado em itens diversos.",
    "👤 **Matilda** - Comerciante de Branica: Conhecida por vender roupas e acessórios.",
    "👤 **Rogost** - Comerciante de Jezerica: Especializado em recursos gerais.",
    "👤 **Kunegunda** - Herborista de Branica: Especializada em ervas e poções.",
    "👤 **Herman** - Carpinteiro de Hornica: Relacionado a madeira e carpintaria.",
    "👤 **Mirogard** - Pescador de Denica: Fornece missões de pesca.",
    "👤 **Ida** - Comerciante de Lesnica: Focada em produtos agrícolas.",
    "👤 **Zbigniew** - Comerciante de Rolnica: Vende produtos agrícolas.",
    "👤 **Dalibor** - Jovem aprendiz em Gostovia: Presente em missões iniciais.",
    "👤 **Lubomira** - Comerciante de Denica: Especializada em recursos e mercadorias variadas.",
    "👤 **Sambor's Brother** - Relacionado a missões de caça e sobrevivência.",
    "👤 **Teodor** - Apicultor de Tutki: Conhecido por trabalhar com mel e produtos relacionados.",
    "👤 **Olga** - Jovem em Gostovia: Relacionada a missões locais."
];

module.exports = {
    data: new SlashCommandBuilder()
        .setName("npc")
        .setDescription("Exibe uma lista com os NPCs importantes de Medieval Dynasty."),
    async execute(interaction) {
        // Seleciona um NPC aleatório da lista
        const randomNpcIndex = Math.floor(Math.random() * npcList.length);
        const selectedNpc = npcList[randomNpcIndex];

        await interaction.reply({
            content: `📜 **NPC Importante:**\n${selectedNpc}`,
            ephemeral: true,
        });
    },
};
