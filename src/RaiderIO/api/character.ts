import axios from 'axios';
import { CharacterDTO, CharacterFields } from '../types';
import { Regions } from '../../common/types/wow';

export default class CharacterAPI {
  static baseURL = `https://raider.io/api/v1/characters/profile/`;

  static async getCharacter(
    name: string,
    realm: string,
  region = Regions.US,
  fields?: CharacterFields[]
  ): Promise<CharacterDTO> {
    let url = `${CharacterAPI.baseURL}?region=${region}&realm=${realm}&name=${name}`;

    if (fields) {
      url = url + `&fields=${fields.join()}`;
    }

    const response = await axios.get(url);

    return response.data;
  }
}
