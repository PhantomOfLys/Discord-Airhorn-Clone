# Discord-Airhorn-Clone
a way more stable clone of airhorn running on NodeJS

# Requirements
NodeJS : https://nodejs.org/

# Installation
Start `cmd.exe` and browse to the `airhorn.js` directory using the `cd` command. (`cd ..` to go up, `cd foldername` to go in a folder).
Install `discord.js` using `npm install discord.js node-opus --save`
Open `airhorn.js` and replace `mytoken` by your bot token. You can obtain a token and add the bot to your server by following these instructions : https://github.com/reactiflux/discord-irc/wiki/Creating-a-discord-bot-&-getting-a-token

# Optionnal
The default prefix for the commands is `!`. You can replace it in the code of `airhorn.js`.

# Getting Started
Create a new folder next to `airhorn.js` and name it `misc`. Fill it with audio files (usually `.mp3`).
Start the bot using `node airhorn.js`. Join a Voice Channel and type `!misc` in any Text Channel.
The bot will randomly pick a file within the misc folder and play it in the VC.

# Notes
You don't need to restart the bot to add new folders and new files.
