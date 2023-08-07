import { Client, Events, GatewayIntentBits } from "discord.js";
import { token } from "./config.js";

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

client.login(
  "MTEzODA1OTczMzk1ODM5Mzg5Ng.GosZAv.y61MLLpWaKNuAZF1Sed8VMPMgSf50v-QcG4F28"
);
