import { ICharacter } from '../interfaces/character';

export default abstract class CharacterRepo {
  abstract async getCharacter(
    name: string,
    realm: string,
    region: string
  ): Promise<ICharacter | undefined>;
}
