const Discord = require("discord.js");
const client = new Discord.Client();
const TOKEN = process.env.token;
const prefix = "$";
var rand = ["What is a sheep's favourite movie? ||Baaaaaa-ck to the future!||", "I hit my friend with a huge crystal of sodium chloride. ||I got arrested for a salt!||", "How do you add two numbers at the top of Mount Everest? ||Just summit.||", "Why did the dog say 'meow'? ||He was bilingual||", "There’s only one thing I don’t like about Halloween ||Which is...||", "Did you hear about the all-janitor baseball team? ||They swept the finals||", "A 300 page novel with a 50 page introductory essay written by the author walks into a bar. ||The bartender asks, 'Why the long preface?'||", "Why do gorillas have big nostrils? ||Because they have big fingers!||, What did the buffalo say to his son when he left for college? ||Bison||", "What is the best place to train your legs? ||Squatland Yard||"];

client.on('ready', () => {
client.user.setActivity("$help | utili.glitch.me"); 
});
client.on("message", async (message) => {
    if (message.content.startsWith(`${prefix}help`)) {
        var embed = new Discord.RichEmbed()
            .setColor(0x252629)
            .setAuthor(client.user.username, client.user.avatarURL)
            .setTitle("Help Menu")
            .setDescription("The Help Menu for Utili")
            .addField("**Help**", "This command shows the help menu.")
            .addField("**Flip**", "Flips a coin.")
            .addField("**Roll**", "Rolls a die.")
            .addField("**Ping**", "Gets the ping of the bot.")
            .addField("**Joke**", "Tells a random joke, courtesy of reddit")
            .addField("**Poll**", "Starts a poll")
            .addField("**Respects**", "Pays respects.")
            .addField("**Avatar**", "Shows either your avatar or the avatar of the person you pinged.")
            .setTimestamp()
            .setFooter("Created by brickman#4669", client.user.avatarURL);
        message.channel.send(embed);
    } else if (message.content.startsWith(`${prefix}flip`)) {
        message.channel.send(Math.floor(Math.random() * 2) === 0 ? "Heads" : "Tails");
    } else if (message.content.startsWith(`${prefix}roll`)) {
        message.channel.send(`You rolled the number :game_die: ${Math.floor(Math.random() * 6) + 1}`);
    } else if (message.content.startsWith(`${prefix}ping`)) {
        const m = await message.channel.send("Ping?");
        m.edit(`Pong! Latency is ${m.createdTimestamp - message.createdTimestamp}ms. API Latency is ${Math.round(client.ping)}ms`);
    } else if (message.content.startsWith(`${prefix}joke`)) {
        var repl = rand[Math.floor(Math.random()*rand.length)];
        message.channel.send(repl)
    } else if (message.content.startsWith(`${prefix}respects`)) {
        message.channel.send("Can we get an :regional_indicator_f: in chat")
        message.channel.send("https://imgur.com/a/VH0QOkc") 

        } if (message.content.startsWith(`${prefix}poll` + arguments)) {
        message.react("👍");
        message.react("👎");
        message.react("🤷"); 

    } if (message.content.startsWith(`${prefix}avatar`)) {
        if (!message.mentions.users.size) {
            return message.channel.send(`Your avatar: ${message.author.displayAvatarURL}`);
            }
            const avatarList = message.mentions.users.map(user => {
            return `${user.username}\'s avatar: ${user.displayAvatarURL}`;
            });
            message.channel.send(avatarList);
            }
        }});
        client.on('guildMemberAdd', member =>{
         member.addRole(autorole)
        });
        client.on("guildCreate", (guild) => {
            client.channels.get("548601138182881281").send("Utili has joined a new guild: " + guild.name)
        });

        client.login(token).catch(err => console.log(err));
