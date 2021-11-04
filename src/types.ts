import { MessageEmbed } from 'discord.js';

export type MessageResponse = EmbedResponse | StringResponse;

export type EmbedResponse = {
  embed: MessageEmbed;
  message?: undefined;
};

export type StringResponse = {
  embed?: undefined;
  message: string;
};
