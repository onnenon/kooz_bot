import { config } from 'dotenv';
import KoozBot from './KoozBot';
import RaiderIOCharacterRepo from './RaiderIO/repos/character';

config();

const characterRepo = new RaiderIOCharacterRepo();
const bot = new KoozBot(characterRepo);

const token = process.env.BOT_TOKEN;

bot.client.on('ready', () => {
  console.log('Ready');
});

bot.client.on('message', async (message) => {
  if (message.content.startsWith(KoozBot.prefix)) {
    const response = await bot.handlerService.handleMessage(message.content);
    if (response) message.channel.send(response);
  }
});

bot.client.login(token);
