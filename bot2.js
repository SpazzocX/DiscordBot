require("dotenv").config();
const { Client, GatewayIntentBits } = require("discord.js");

const client = new Client({ intents: [GatewayIntentBits.Guilds] });

client.once("ready", () => {
    console.log(`🤖 Bot2 online as ${client.user.tag}`);
});

// jednostavna random komanda
client.on("interactionCreate", async interaction => {
    if (!interaction.isChatInputCommand()) return;

    if (interaction.commandName === "dice") {
        const roll = Math.floor(Math.random() * 6) + 1;
        await interaction.reply(`🎲 You rolled a ${roll}!`);
    }
});

client.login(process.env.DISCORD_TOKEN_BOT2);
