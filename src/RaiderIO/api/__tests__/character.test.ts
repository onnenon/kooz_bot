
import CharacterAPI from '../character';
import axios from 'axios';
import { Regions } from '../../../common/types/wow';
import { CharacterFields } from '../../types';
import { describe, it, expect, vi } from 'vitest';

describe('CharacterAPI', () => {
  describe('getCharacter', () => {
    it('should get character data from Raider.io api', async () => {
      const response = { data: Symbol() };
  axios.get = vi.fn().mockResolvedValueOnce(response);
      const name = 'koozie';
  const region = Regions.US;
      const realm = 'shattered-hand';
  const fields = ['gear', 'guild'] as CharacterFields[];
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
