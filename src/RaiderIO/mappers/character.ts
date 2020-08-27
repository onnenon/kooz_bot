import { ICharacter } from '../../common/interfaces/character';
import { RaiderIO } from '../interfaces';

export default class CharacterMapper {
  public static mapDTOtoICharacter(
    dto: Readonly<RaiderIO.CharacterDTO>
  ): ICharacter {
    return { name: dto.name };
  }
}
