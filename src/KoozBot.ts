import Discord from 'discord.js';
import HandlerService from './services/handler';
import CharacterRepo from './common/repos/character';

export default class KoozBot {
  static prefix = '#';

  public client: Discord.Client;
  public handlerService: HandlerService;
  public characterRepo: CharacterRepo;

  constructor(characterRepo: CharacterRepo) {
    this.client = new Discord.Client();
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
        if (response) message.channel.send(response);
      }
    });
  }
}
