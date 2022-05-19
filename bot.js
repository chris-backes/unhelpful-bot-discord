var Discord = require("discord.io");
var logger = require("winston");
var auth = require("./auth.json");

const copypasta = `Are you kidding ??? What the **** are you talking about man ? You are a biggest looser i ever seen in my life ! You was doing PIPI in your pampers when i was beating players much more stronger then you! You are not proffesional, because proffesionals knew how to lose and congratulate opponents, you are like a girl crying after i beat you! Be brave, be honest to yourself and stop this trush talkings!!! Everybody know that i am very good blitz player, i can win anyone in the world in single game! And "w"esley "s"o is nobody for me, just a player who are crying every single time when loosing, ( remember what you say about Firouzja ) !!! Stop playing with my name, i deserve to have a good name during whole my chess carrier, I am Officially inviting you to OTB blitz match with the Prize fund! Both of us will invest 5000$ and winner takes it all! \n\nI suggest all other people who's intrested in this situation, just take a look at my results in 2016 and 2017 Blitz World championships, and that should be enough... No need to listen for every crying babe, Tigran Petrosyan is always play Fair ! And if someone will continue Officially talk about me like that, we will meet in Court! God bless with true! True will never die ! Liers will kicked off...`

// Configure logger settings
logger.remove(logger.transports.Console);
logger.add(new logger.transports.Console(), {
	colorize: true,
});
logger.level = "debug";

// Initialize Discord Bot
var bot = new Discord.Client({
	token: auth.token,
	autorun: true,
});

bot.on("ready", function (evt) {
	logger.info("Connected");
	logger.info("Logged in as: ");
	logger.info(bot.username + " - (" + bot.id + ")");
});

bot.on("message", function (user, userID, channelID, message, evt) {
	const args = message.toLowerCase().split(" ");
	const bol = args.includes("pipi");
	console.log(bot.id)
	if (bol && userID !== bot.id) {
		bot.sendMessage({
			to: channelID,
			message: copypasta,
		});
	}
	return;
});
