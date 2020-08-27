import { MessageEmbed } from 'discord.js';
import CharacterRepo from '../common/repos/character';
import EmbedService from './embed';
import { IKoozBot } from '../common/interfaces/bot';
import { RaiderIO } from '../RaiderIO/interfaces';

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
  ): Promise<MessageEmbed | string> {
    const name = splitMessage[0];
    const realm = splitMessage[1];
    const region = splitMessage[2] || RaiderIO.Region.US;

    if (splitMessage.length < 2 || splitMessage.length > 3) {
      console.log(splitMessage);
      return "Invalid command"
    }

    const character = await this.characterRepo.getCharacter(
      name, realm, region
    );

    if (!character) {
      return "No character returned with given name. Check your spelling and try again."
    }

    return EmbedService.getCharacterInfoEmbed(character);
  }

  public async handleHelp(): Promise<MessageEmbed> {
    return EmbedService.getHelpEmbed();
  }
}
