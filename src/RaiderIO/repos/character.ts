import CharacterRepo from '../../common/repos/character';
import { ICharacter } from '../../common/interfaces/character';
import CharacterAPI from '../api/character';
import { RaiderIO } from '../interfaces';
import CharacterMapper from '../mappers/character';

export default class RaiderIOCharacterRepo implements CharacterRepo {
  async getCharacter(
    name: string,
    realm: string,
    region: RaiderIO.Region
  ): Promise<ICharacter> {
    const charDTO = await CharacterAPI.getCharacter(name, realm, region);

    return CharacterMapper.mapDTOtoICharacter(charDTO);
  }
}
