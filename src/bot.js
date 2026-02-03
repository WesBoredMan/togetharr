import { Client, GatewayIntentBits } from "discord.js";

const token = process.env.DISCORD_TOKEN;
if (!token) {
  console.error("Missing DISCORD_TOKEN env var");
  process.exit(1);
}

const client = new Client({
  intents: [GatewayIntentBits.Guilds]
});

client.once("clientReady", () => {
  console.log(`Togetharr connected as ${client.user.tag}`);
});

client.login(token);
