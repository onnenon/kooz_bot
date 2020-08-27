import { MessageEmbed } from 'discord.js';

export default class BaseEmbed extends MessageEmbed {
  constructor(title: string) {
    super();
    this.setTitle(title);
    this.setColor('#ff8d4f');
    this.setFooter('Doob Bot');
    this.setTimestamp();
  }
}
