var Discord = require("discord.io");
require("dotenv").config();
fs = require("fs");
path = require('path')

// Initialize Discord Bot
var bot = new Discord.Client({
	token: process.env.TOKEN,
	autorun: true,
});

bot.on("ready", function (evt) {
	console.log("Logged in as %s - %s\n", bot.username, bot.id);
});

bot.on("message", function (user, userID, channelID, message, evt) {
	console.log(user, userID, channelID, message);
	if (userID === bot.id) return;
	switch (true) {
		case /hello\sunhelpful\sbot/i.test(message):
			bot.sendMessage({
				to: channelID,
				message: `Hello ${user}. What a nice pleasant interaction we are having. Do not expect it to continue. I am very unhelpful, and, in many circumstances, outright rude.`,
			});
			break;
		case /chess/i.test(message):
			bot.sendMessage({
				to: channelID,
				message: `Chess™ is a head to head web-based video game developed and published by Garry Chess. Inspired by both Checkers and Minecraft, its founder sought to develop a stand-alone game in the same genre. Since its release the game has been free-to-play, and is monetized through direct donations to Garry himself.\n\nIn the game, two players battle in player versus player combat, each one occupying and defending their own half of the board. Each of the players controls 16 characters, known as a "pieces", with unique abilities and differing styles of play. During a match, en passant ™ Pawns ™ become more powerful by transforming into Queens ™ to stalemate the opposing King. In the game's main mode, a player wins by pushing through to the enemy base and blocking their King ™, not allowing it to move.`,
			});
			break;
		case /^!rps/i.test(message):
			console.log('here')
			const db = JSON.parse(fs.readFileSync("./db.json", {encoding: "utf-8", flag: 'r'}));
			console.log(db)

			const arr = ["rock", "paper", "scissors"];
			const botChoice = arr[Math.floor(Math.random() * 3)];
			const humanChoice = message.split(" ")[1];

			switch (true) {
				case arr.indexOf(humanChoice) === arr.indexOf(botChoice):
					bot.sendMessage({
						to: channelID,
						message: `Looks like this was a draw.`,
					});
					break;
				case arr.indexOf(humanChoice) > arr.indexOf(botChoice) ||
					(arr.indexOf(humanChoice) === 0 &&
						arr.indexOf(botChoice) === 2):
					if (db.hasOwnProperty(userID)) {
						db[userID].wins++;
					} else {
						db[userID] = {
							wins: 1,
							losses: 0,
						};
					}
					bot.sendMessage({
						to: channelID,
						message: `You beat me! Your total win count is ${db[userID].wins}.`,
					});
					break;
				case arr.indexOf(botChoice) > arr.indexOf(humanChoice) ||
					(arr.indexOf(botChoice) === 0 &&
						arr.indexOf(humanChoice) === 2):
					if (db.hasOwnProperty(userID)) {
						db[userID].losses++;
					} else {
						db[userID] = {
							wins: 0,
							losses: 1,
						};
					}
					bot.sendMessage({
						to: channelID,
						message: `You Lost! Your total loss count is ${db[userID].losses}.`,
					});
					break;
				default:
					bot.sendMessage({
						to: channelID,
						message: `I apologize ${user}, but I seem to be malfunctioning. Instead, instructions for what went wrong can be found here: shorturl.at/absDF`,
					});
					break;
			}
			fs.writeFileSync(
				path.join(__dirname, "./db.json"),
				JSON.stringify(db, null, 2)
			);
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
});
