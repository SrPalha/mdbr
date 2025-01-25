const { Client, GatewayIntentBits, ActivityType, Collection } = require("discord.js");
const dotenv = require("dotenv");
const fs = require("fs");

dotenv.config();

const TOKEN = process.env.DISCORD_TOKEN;

// Inicialização do cliente Discord
const client = new Client({
    intents: [
        GatewayIntentBits.Guilds, // Para interagir com guilds (servidores)
        GatewayIntentBits.GuildMessages, // Para interagir com mensagens nos servidores
        GatewayIntentBits.MessageContent, // Para acessar conteúdo de mensagens
        GatewayIntentBits.GuildMembers, // Para acessar membros do servidor
    ],
});

// Carregar comandos da pasta "commands"
client.commands = new Collection();
const commandFiles = fs.readdirSync("./commands").filter(file => file.endsWith(".js"));

for (const file of commandFiles) {
    const command = require(`./commands/${file}`);
    client.commands.set(command.data.name, command);
    console.log(`Comando carregado: ${command.data.name}`);
}

// Evento: Bot está pronto
client.on("ready", (c) => {
    console.log(`✅ ${c.user.tag} está online.`);

    // Definir presença inicial
    client.user.setPresence({
        activities: [
            {
                name: "Medieval Dynasty",
                type: ActivityType.Playing, // Atividade: Jogando
            },
        ],
        status: "online",
    });

    console.log("Rich Presence configurado.");
});

// Evento: Lidar com interações (slash commands)
client.on("interactionCreate", async (interaction) => {
    if (!interaction.isCommand()) return;

    const command = client.commands.get(interaction.commandName);
    if (!command) return;

    try {
        await command.execute(interaction);
    } catch (error) {
        console.error(error);
        await interaction.reply({ content: "Ocorreu um erro ao executar este comando!", ephemeral: true });
    }
});

// Login do bot
client.login(TOKEN);
