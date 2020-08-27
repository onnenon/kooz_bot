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
    region: Regions;
    realm: string;
    profile_url: string;
    profile_banner: string;
  }

  export type Regions = WowTypes.Regions;

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
}
