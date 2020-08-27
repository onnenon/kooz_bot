import BaseEmbed from './base';
import { ICharacter } from '../types/character';

export default class CharacterInfoEmbed extends BaseEmbed {
  constructor(character: ICharacter) {
    super(`${character.name} Character Info`);

    this.setThumbnail(character.thumbnail);

    this.addFields(
      { name: 'Name', value: character.name, inline: true },
      { name: 'Class', value: character.class, inline: true },
      { name: 'Active Spec', value: character.activeSpec, inline: true },
      { name: 'Realm', value: character.realm, inline: true }
    );

    this.addField('\u200B', '\u200B');
  }
}
