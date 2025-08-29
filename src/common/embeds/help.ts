import BaseEmbed from './base'
import { BotTypes } from '../../common/types/bot'

export default class HelpEmbed extends BaseEmbed {
  constructor () {
    super('Doob Bot Help')

    BotTypes.commandDescriptions.forEach((command) => {
      this.addField(command.command, command.description)
    })
  }
}
