import { EmbedBuilder } from 'discord.js';

export default class BaseEmbed extends EmbedBuilder {
  constructor(title: string) {
  super();
    this.setTitle(title);
    this.setColor('#ff8d4f');
  this.setFooter({ text: 'Doob Bot' });
    this.setTimestamp();
  }
}
