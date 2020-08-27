import { WowTypes } from './wow'

export interface ICharacter {
  name: string;
  race: string;
  class: string;
  activeSpec: string;
  gender: string;
  thumbnail: string;
  region: WowTypes.Regions;
  realm: string;
  faction: string;
  profileUrl: string;
}
