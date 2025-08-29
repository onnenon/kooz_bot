import { Client } from 'discord.js';
import HandlerService from './services/handler';
import CharacterRepo from './common/repos/character';

export default class KoozBot {
  static prefix = '#';

  public client: Client;
  public handlerService: HandlerService;
  public characterRepo: CharacterRepo;

  constructor(characterRepo: CharacterRepo) {
  this.client = new Client({ intents: ['GuildMessages'] });
    this.characterRepo = characterRepo;
    this.handlerService = new HandlerService(this.characterRepo);

    this.client.on('ready', () => {
      console.log('Ready');
    });

    this.client.on('message', async (message) => {
      if (message.content.startsWith(KoozBot.prefix)) {
        const response = await this.handlerService.handleMessage(
          message.content
        );
        if (response?.message) message.channel.send(response.message);
        if (response?.embed) message.channel.send({ embeds: [response.embed] });
      }
    });
  }
}
