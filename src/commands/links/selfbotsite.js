// Copyright (C) 2017 Favna
// 
// This file is part of Discord-Self-Bot.
// 
// Discord-Self-Bot is free software: you can redistribute it and/or modify
// it under the terms of the GNU General Public License as published by
// the Free Software Foundation, either version 3 of the License, or
// (at your option) any later version.
// 
// Discord-Self-Bot is distributed in the hope that it will be useful,
// but WITHOUT ANY WARRANTY; without even the implied warranty of
// MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
// GNU General Public License for more details.
// 
// You should have received a copy of the GNU General Public License
// along with Discord-Self-Bot.  If not, see <http://www.gnu.org/licenses/>.
// 

const commando = require('discord.js-commando');

module.exports = class selfbotSiteCommnad extends commando.Command {
    constructor(client) {
        super(client, {
            name: 'selfbotsite',
            aliases: ['bothub', 'linkgit', 'gitlink', 'botsite'],
            group: 'links',
            memberName: 'selfbotsite',
            description: 'Link to Favna\'s discord-self-bot',
            guildOnly: false
        });
    }

    async run(msg) {
        await msg.say("Favna's selfbot can be found here: http://selfbot.favna.xyz.")
    };
};