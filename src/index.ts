import { config } from 'dotenv';
import KoozBot from './KoozBot';
import RaiderIOCharacterRepo from './RaiderIO/repos/character';

config();

const characterRepo = new RaiderIOCharacterRepo();
const bot = new KoozBot(characterRepo);

const token = process.env.BOT_TOKEN;

const prefix = '#';

bot.client.on('ready', () => {
  console.log('Ready');
});

bot.client.on('message', async (message) => {
  if (message.content.startsWith(prefix)) {
    const embed = await bot.handlerService.handleMessage(message.content);
    message.channel.send(embed);
  }
});

bot.client.login(token);
