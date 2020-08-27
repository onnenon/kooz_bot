import KoozEmbed from '../common/embeds/base';
import { ICharacter } from '../common/types/character';
import { IKoozBot } from '../common/types/bot';

export default class EmbedService {
  public static getCharacterInfoEmbed(character: ICharacter): KoozEmbed {
    const embed = new KoozEmbed(`${character.name} Character Info`);

    embed.addField('Name', character.name, true);

    return embed;
  }

  public static getHelpEmbed(): KoozEmbed {
    const embed = new KoozEmbed('Doob Bot Help');

    IKoozBot.commandDescriptions.forEach((command) => {
      embed.addField(command.command, command.description);
    });

    return embed;
  }
}
