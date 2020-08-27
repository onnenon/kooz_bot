import { ICharacter } from '../../common/interfaces/character';
import { RaiderIoTypes } from '../types';

export default class CharacterMapper {
  public static mapDTOtoICharacter(
    dto: Readonly<RaiderIoTypes.CharacterDTO>
  ): ICharacter {
    return { name: dto.name };
  }
}
