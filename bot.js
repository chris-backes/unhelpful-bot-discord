var Discord = require("discord.io");
require("dotenv").config();

const copypasta = `Are you kidding ??? What the ****** are you talking about man ? You are a biggest looser i ever seen in my life ! You was doing PIPI in your pampers when i was beating players much more stronger then you! You are not proffesional, because proffesionals knew how to lose and congratulate opponents, you are like a girl crying after i beat you! Be brave, be honest to yourself and stop this trush talkings!!! Everybody know that i am very good blitz player, i can win anyone in the world in single game! And "w"esley "s"o is nobody for me, just a player who are crying every single time when loosing, ( remember what you say about Firouzja ) !!! Stop playing with my name, i deserve to have a good name during whole my chess carrier, I am Officially inviting you to OTB blitz match with the Prize fund! Both of us will invest 5000$ and winner takes it all! \n\nI suggest all other people who's intrested in this situation, just take a look at my results in 2016 and 2017 Blitz World championships, and that should be enough... No need to listen for every crying babe, Tigran Petrosyan is always play Fair ! And if someone will continue Officially talk about me like that, we will meet in Court! God bless with true! True will never die ! Liers will kicked off...`;

const shortPasta = (name) => {
	let arr = [
		`Stop this trush talkings ${name}!!!`,
		`${name}, You was doing PIPI in your pampers when i was beating players much more stronger then you!`,
		`Liers will kicked off... ${name}`,
	];
	let n = Math.floor(Math.random() * arr.length);
	return arr[n];
};

const shortEnPassant = () => {
	let arr = [
		`Amazing. I did not know that. Chess is the game that keeps on giving.`,
		`That is a bunch of crap`,
		`This is Bs`,
		`thats fucked, why??`,
		`What the heck?! No`,
		`Google gay porn 👍`,
		`Isn't that just when a pawn eats another that passes them?`,
		`where is my black`,
		`I don't do google Bruh. Too much effects`,
		`LOOOOOOOOOOL I guess i'm much noobier than i though Wow, i'm really shocked Living and learning`,
		`Will do. Thank you buddy!`,
		`Haha, chess is interesting. Now I'm going to kill myself.`,
		`I know what en passant is dumbass you just blundered mate in one`,
		`Go fuck your self. I'm going to scream.`,
	];
	let n = Math.floor(Math.random() * arr.length);
	return arr[n];
};

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
			case /pipi/i.test(message):
				bot.sendMessage({
					to: channelID,
					message:
						message.length === 1 ? shortPasta(user) : copypasta,
				});
				break;
			case /petrosian/i.test(message):
				bot.sendMessage({
					to: channelID,
					message: `Tigran Petrosyan is always play Fair !`,
				});
				break;
			case /en passant/i.test(message):
				bot.sendMessage({
					to: channelID,
					message: shortEnPassant(),
				});
				break;
			default:
				break;
		}
	}
});
