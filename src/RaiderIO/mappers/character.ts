import { ICharacter } from '../../common/types/character';
import { CharacterDTO } from '../types';

export default class CharacterMapper {
  public static mapDTOtoICharacter(
  dto: Readonly<CharacterDTO>
  ): ICharacter {
    return {
      name: dto.name,
      race: dto.race,
      class: dto.class,
      activeSpec: dto.active_spec_name,
      gender: dto.gender,
      thumbnail: dto.thumbnail_url,
      region: dto.region,
      faction: dto.faction,
      profileUrl: dto.profile_url,
      realm: dto.realm,
    };
  }
}
