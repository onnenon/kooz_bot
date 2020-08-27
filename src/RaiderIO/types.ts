import { WowTypes } from '../common/types/wow';

export namespace RaiderIoTypes {
  export interface CharacterDTO {
    name: string;
    race: string;
    class: string;
    active_spec_name: string;
    active_spec_role: string;
    gender: string;
    faction: string;
    achievement_points: number;
    honorable_kills: number;
    thumbnail_url: string;
    region: WowTypes.Regions;
    realm: string;
    profile_url: string;
    profile_banner: string;
    guild?: GuildDTO;
    gear?: GearDTO;
    mythtic_plus_scores_by_season?: any[];
  }

  export enum CharacterFields {
    gear = 'gear',
    guild = 'guild',
    raid_progression = 'raid_progression',
    mythic_plus_scores_by_season = 'mythic_plus_scores_by_season',
    mythic_plus_ranks = 'mythic_plus_ranks',
    mythic_plus_recent_runs = 'mythic_plus_recent_runs',
    mythic_plus_best_runs = 'mythic_plus_best_runs',
    mythic_plus_highest_level_runs = 'mythic_plus_highest_level_runs',
    mythic_plus_weekly_highest_level_runs = 'mythic_plus_weekly_highest_level_runs',
    mythic_plus_previous_weekly_highest_level_runs = 'mythic_plus_previous_weekly_highest_level_runs',
    previous_mythic_plus_ranks = 'previous_mythic_plus_ranks',
    raid_achievement_meta = 'raid_achievement_meta',
    raid_achievement_curve = 'raid_achievement_curve',
  }
  interface GuildDTO {
    name: string;
    realm: string;
  }

  interface GearDTO {
    item_level_equipped: number;
    item_level_total: number;
    corruption: {
      added: number;
      resisted: number;
      total: number;
      cloakRank: number;
      spells: [];
    };
    items: {
      head: any;
      neck: any;
      shoulder: any;
      back: any;
      chest: any;
      waist: any;
      shirt: any;
      wrist: any;
      hands: any;
      legs: any;
      feet: any;
      finger1: any;
      finger2: any;
      trinket1: any;
      trinket2: any;
      mainhand: any;
      offhand: any;
    };
  }
}
