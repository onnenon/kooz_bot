import { MessageEmbed } from 'discord.js';
import CharacterRepo from '../common/repos/character';
import EmbedService from './embed';
import { IKoozBot } from '../common/interfaces/bot';

export default class HandlerService {
  characterRepo: CharacterRepo;

  constructor(characterRepo: CharacterRepo) {
    this.characterRepo = characterRepo;
  }

  public async handleMessage(
    message: Readonly<string>
  ): Promise<MessageEmbed | string | undefined> {
    const splitMessage = message.split(' ');
    const command = splitMessage.shift();

    switch (command) {
      case IKoozBot.command.INFO:
        return this.handleInfo(splitMessage);
      case IKoozBot.command.HELP:
        return this.handleHelp();
      default:
        return `Command: **${command}** is invalid, for a list of commands type: **#help**`;
    }
  }

  public async handleInfo(
    splitMessage: Readonly<string[]>
  ): Promise<MessageEmbed | undefined> {
    const character = await this.characterRepo.getCharacter(
      splitMessage[0],
      splitMessage[1],
      splitMessage[2]
    );

    return character && EmbedService.getCharacterInfoEmbed(character);
  }

  public async handleHelp(): Promise<MessageEmbed> {
    return EmbedService.getHelpEmbed();
  }
}
