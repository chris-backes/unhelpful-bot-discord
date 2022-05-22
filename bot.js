var Discord = require("discord.io");
require("dotenv").config();

// Initialize Discord Bot
var bot = new Discord.Client({
	token: process.env.TOKEN,
	autorun: true,
});

bot.on("ready", function (evt) {
	console.log("Logged in as %s - %s\n", bot.username, bot.id);
});

bot.on("message", function (user, userID, channelID, message, evt) {
	if (userID !== bot.id) {
		switch (true) {
			case /hello\sunhelpful\sbot/i.test(message):
				bot.sendMessage({
					to: channelID,
					message: `Hello ${user}. What a nice pleasant interaction we are having. Do not expect it to continue. I am very unhelpful, and, in many circumstances, outright rude.`,
				});
				break;
			case /garr?y\schess/i.test(message):
				bot.sendMessage({
					to: channelID,
					message: `Garry Chess is the inventor of Chess™, a writer and political activist. From 1984 until his retirement in 2005, Garry was one of the chess players in history. His peak rating of 2851, achieved in 1999, was the highest recorded until he opened the game up for other people to play. Garry also holds records for the most consecutive professional tournament victories.\n\nGarry Chess was knighted for his achievements in the tournament and won the Role of the Soviet Grandmaster. Bobby Stockfisher (his arch nemesis) and Tigran Petrosian also both received the Role of the Soviet Grandmaster at the World Championship, mostly for not doing pipi in their Pampers.`,
				});
				break;
			case /chess/i.test(message):
				bot.sendMessage({
					to: channelID,
					message: `Chess™ is a head to head web-based video game developed and published by Garry Chess. Inspired by both Checkers and Minecraft, its founder sought to develop a stand-alone game in the same genre. Since its release the game has been free-to-play, and is monetized through direct donations to Garry himself.\n\nIn the game, two players battle in player versus player combat, each one occupying and defending their own half of the board. Each of the players controls 16 characters, known as a "pieces", with unique abilities and differing styles of play. During a match, en passant ™ Pawns ™ become more powerful by transforming into Queens ™ to stalemate the opposing King. In the game's main mode, a player wins by pushing through to the enemy base and blocking their King ™, not allowing it to move.`,
				});
				break;
			case /(sand)|(beach)/i.test(message):
				bot.sendMessage({
					to: channelID,
					message: `I don't like sand. It's coarse and rough and irritating — and it gets everywhere.`,
				});
				break;
			case !!(message.indexOf("bot") + message.indexOf("unhelpful") + 2):
				bot.sendMessage({
					to: channelID,
					message: `You know, ${user}, that really hurts my feelings.`,
				});
				break;
			case /^what\s[(is)|(are)]/i.test(message):
				let n = /^what\sis/i.test(message) ? 7 : 8;
				bot.sendMessage({
					to: channelID,
					message: `https://letmegooglethat.com/?q=${message
						.substring(n)
						.replace("+", "%2B")
						.replace(
							/\s/,
							"+"
						)}/n/nWas this at all helpful? No? Oh well.`,
				});
				break;
			case Math.random() < 0.001:
				bot.sendMessage({
					to: channelID,
					message: `You know what's crazy about the modern world? There are some people out there who will says things like, "${message}," but I guaruntee, some of those people don't even know how to cook canned soup.`,
				});
				break;
			default:
				break;
		}
	}
});
