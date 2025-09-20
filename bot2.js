require("dotenv").config();
const { Client, GatewayIntentBits } = require("discord.js");

const client = new Client({ intents: [GatewayIntentBits.Guilds, GatewayIntentBits.GuildMessages, GatewayIntentBits.MessageContent] });

client.once("ready", () => {
    console.log(`🤖 Bot2 online as ${client.user.tag}`);
});

client.on("messageCreate", msg => {
    if (msg.content.toLowerCase() === "ping") {
        msg.reply("Pong!");
    }
});

client.login(process.env.DISCORD_TOKEN_BOT2);