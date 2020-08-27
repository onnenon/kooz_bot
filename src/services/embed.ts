import { MessageEmbed } from 'discord.js';
import { ICharacter } from '../common/interfaces/character';
import { IKoozBot } from '../common/interfaces/bot';

export default class EmbedService {
  public static getCharacterInfoEmbed(character: ICharacter): MessageEmbed {
    const embed = new MessageEmbed();

    embed.addField('name', character.name);

    return embed;
  }

  public static getHelpEmbed(): MessageEmbed {
    const embed = new MessageEmbed();

    IKoozBot.commandDescriptions.forEach((command) => {
      embed.addField(command.command, command.description);
    });

    return embed;
  }
}
