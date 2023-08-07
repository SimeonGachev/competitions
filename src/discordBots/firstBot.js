import { Client, Events, GatewayIntentBits } from "discord.js";
import dotenv from "dotenv";

dotenv.config();
const { token } = process.env;
const client = new Client({
  intents: [GatewayIntentBits.Guilds],
});

client.once(Events.ClientReady, (client) => {
  console.log(`Ready! Logged in as ${client.user.tag}`);
});

client.on("message", (message) => {
  if (message.content === "ping") {
    message.reply("Pong!");
  }
});

client.login(token);
