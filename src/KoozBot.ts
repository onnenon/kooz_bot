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
  }
}
