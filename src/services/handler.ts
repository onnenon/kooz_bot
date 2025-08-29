import CharacterRepo from '../common/repos/character';
import { command as Command } from '../common/types/bot';
import { Regions } from '../common/types/wow';
import { Embeds } from '../common/embeds';
import { EmbedResponse, MessageResponse } from '../types';

export default class HandlerService {
  characterRepo: CharacterRepo;

  constructor(characterRepo: CharacterRepo) {
    this.characterRepo = characterRepo;
  }

  public async handleMessage(
    message: Readonly<string>
  ): Promise<MessageResponse | undefined> {
    const splitMessage = message.split(' ');
    const cmd = splitMessage.shift();

    switch (cmd) {
      case Command.INFO:
        return this.handleCharacterInfo(splitMessage);
      case Command.HELP:
        return this.handleHelp();
      default:
        return {
          message: `Command: **${cmd}** is invalid, for a list of commands type: **#help**`,
        };
    }
  }

  public async handleCharacterInfo(
    splitMessage: Readonly<string[]>
  ): Promise<MessageResponse> {
    const name = splitMessage[0];
    const realm = splitMessage[1];
  const region = splitMessage[2] || Regions.US;

    if (splitMessage.length < 2 || splitMessage.length > 3) {
      console.log(splitMessage);
      return { message: 'Invalid Info command, for correct usage type #help' };
    }

    const character = await this.characterRepo.getCharacter(
      name,
      realm,
      region
    );

    if (!character) {
      return {
        message:
          'No character returned with given name. Check your spelling and try again.',
      };
    }

    return { embed: new Embeds.CharacterInfoEmbed(character) };
  }

  public async handleHelp(): Promise<EmbedResponse> {
    return { embed: new Embeds.HelpEmbed() };
  }
}
