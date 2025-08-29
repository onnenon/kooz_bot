import { config } from 'dotenv'
import KoozBot from './KoozBot'
import RaiderIOCharacterRepo from './RaiderIO/repos/character'

config()

const characterRepo = new RaiderIOCharacterRepo()
const bot = new KoozBot(characterRepo)

const token = process.env.BOT_TOKEN

bot.client.login(token)
