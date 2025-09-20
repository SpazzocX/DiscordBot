require("dotenv").config();
const { Client, GatewayIntentBits } = require("discord.js");

const client = new Client({ intents: [GatewayIntentBits.Guilds] });

client.once("clientReady", () => {
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
client.on("messageCreate", msg => {
    if (msg.content.toLowerCase() === "ping") {
        msg.reply("Pong!");
    }
});


client.login(process.env.DISCORD_TOKEN_BOT2);
