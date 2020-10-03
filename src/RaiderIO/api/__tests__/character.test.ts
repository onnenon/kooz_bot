import CharacterAPI from '../character';
import axios from 'axios';
import { WowTypes } from '../../../common/types/wow';
import { RaiderIoTypes } from '../../types';

describe('CharacterAPI', () => {
  describe('getCharacter', () => {
    it('should get character data from Raider.io api', async () => {
      const response = { data: Symbol() };
      axios.get = jest.fn().mockResolvedValueOnce(response);
      const name = 'koozie';
      const region = WowTypes.Regions.US;
      const realm = 'shattered-hand';
      const fields = ['gear', 'guild'] as RaiderIoTypes.CharacterFields[];
      const expectedURL =
        'https://raider.io/api/v1/characters/profile/?region=us&realm=shattered-hand&name=koozie&fields=gear,guild';

      const result = await CharacterAPI.getCharacter(
        name,
        realm,
        region,
        fields
      );

      expect(axios.get).toBeCalledWith(expectedURL);
      expect(result).toEqual(response.data);
    });
  });
});
