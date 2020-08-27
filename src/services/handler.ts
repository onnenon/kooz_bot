import { MessageEmbed } from 'discord.js';
import CharacterRepo from '../common/repos/character';

export default class HandlerService {
  characterRepo: CharacterRepo;

  constructor(characterRepo: CharacterRepo) {
    this.characterRepo = characterRepo;
  }

  public async handleMessage(message: string): Promise<MessageEmbed | string> {
    const embed = new MessageEmbed();

    embed.addField('message', message);

    const character = await this.characterRepo.getCharacter(
      'koozie',
      'shattered-hand',
      'us'
    );

    embed.addField('name', character.name);

    return embed;
  }
}
