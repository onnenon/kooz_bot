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
  ): Promise<ICharacter | undefined> {
    try {
      const charDTO = await CharacterAPI.getCharacter(name, realm, region);

      if (charDTO) return CharacterMapper.mapDTOtoICharacter(charDTO);
    } catch (err) {
      console.log('Failed to fetch character');
      return undefined;
    }
  }
}
