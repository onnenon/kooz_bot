# Kooz Bot

A simple, but better architected discord bot for Raider.io

## To add the bot to a Discord server

1. Click this Discord app [link](https://discordapp.com/oauth2/authorize?client_id=447202191909060613&scope=bot)
2. Choose the discord server where you would like to add the bot.
3. Type a command in a text channel.

## Bot Commands

**Replace any spaces in realm names with an underscore** _(ie. shattered hand becomes shattered_hand)_

### All commands require a character name and realm name. If no region is given the Bot will default to US

| Command                                   | Description                 |
| ----------------------------------------- | --------------------------- |
| `#info <character> <realm_name> <region>` | Basic info about character. |
| `#help`                                   | Lists available commands.   |

## Screenshots

#### #info command

![info command](media/info_screen.png)

## To set up your own version of the bot

- clone the project: `git clone https://github.com/onnenon/kooz_bot.git`

- get a bot token by following this [wiki](https://github.com/reactiflux/discord-irc/wiki/Creating-a-discord-bot-&-getting-a-token)

- ensure the bot token is present in your environment

- add the bot to your discord server by going to your unique client ID link: `https://discordapp.com/oauth2/authorize?client_id=<your_client_id>&scope=bot`

_created by Stephen Onnen September 2020_
_updated October 2020_
