import { ICharacter } from '../types/character';

export default abstract class CharacterRepo {
  abstract async getCharacter(
    name: string,
    realm: string,
    region: string
  ): Promise<ICharacter | undefined>;
}
