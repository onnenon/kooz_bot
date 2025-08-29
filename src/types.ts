import { EmbedBuilder } from 'discord.js';

export type MessageResponse = EmbedResponse | StringResponse;

export type EmbedResponse = {
  embed: EmbedBuilder;
  message?: undefined;
};

export type StringResponse = {
  embed?: undefined;
  message: string;
};
