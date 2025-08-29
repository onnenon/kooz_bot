import CharacterRepo from '../../common/repos/character';
import { ICharacter } from '../../common/types/character';
import CharacterAPI from '../api/character';
import CharacterMapper from '../mappers/character';
import { Regions } from '../../common/types/wow';
import { CharacterFields } from '../types';

export default class RaiderIOCharacterRepo implements CharacterRepo {
  async getCharacter(
    name: string,
    realm: string,
  region: Regions
  ): Promise<ICharacter | undefined> {
    try {
      const charDTO = await CharacterAPI.getCharacter(name, realm, region, [
  CharacterFields.gear,
  CharacterFields.guild,
  CharacterFields.mythic_plus_scores_by_season,
      ]);
      console.log(charDTO);

      if (charDTO) {
        return CharacterMapper.mapDTOtoICharacter(charDTO);
      }
    } catch (err) {
      console.log(err)
      return undefined;
    }
  }
}
