import Discord from 'discord.js';
import { config } from 'dotenv';

config();

const client = new Discord.Client();
const TOKEN = process.env.BOT_TOKEN;

console.log(TOKEN);

client.on('ready', () => {
  console.log('Ready');
});

client.login(TOKEN);
