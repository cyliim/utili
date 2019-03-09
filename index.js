const Discord = require("discord.js");
const client = new Discord.Client();
const token = process.env.token;
const prefix = "$";
//joke list
var rand = ["What is a sheep's favourite movie? ||Baaaaaa-ck to the future!||", "I hit my friend with a huge crystal of sodium chloride. ||I got arrested for a salt!||", "How do you add two numbers at the top of Mount Everest? ||Just summit.||", "Why did the dog say 'meow'? ||He was bilingual||", "There’s only one thing I don’t like about Halloween ||Which is...||", "Did you hear about the all-janitor baseball team? ||They swept the finals||", "A 300 page novel with a 50 page introductory essay written by the author walks into a bar. ||The bartender asks, 'Why the long preface?'||", "Why do gorillas have big nostrils? ||Because they have big fingers!||, What did the buffalo say to his son when he left for college? ||Bison||", "What is the best place to train your legs? ||Squatland Yard||"];
//pun list
var pun =["The first computer dates back to Adam and Eve. It was an Apple with limited memory, just one byte. And then everything crashed.", "About a month before he died, my uncle had his back covered in lard. After that, he went down hill fast.", "Doctor, there`s a patient on line 1 who says hes invisible. Doctor: Well I cant see him right now.", "Thanks for explaining the word many to me, it means a lot.", "I got a new pair of gloves today, but they're both lefts which, on the one hand, is great, but on the other, its just not right."];
//8ball list
var ball =["It is certain..", "It is decidedly so.", "Without a doubt.", "Yes - definitely.", "You may rely on it.", "As I see it, yes.", "Most likely.", "Outlook good.", "Yes.", "Signs point to yes.", "Reply hazy, try again.", "Ask again later.", "Better not tell you now.", "Cannot predict now.", "Concentrate and ask again.", " Don't count on it.", "My reply is no.", "My sources say no.", "Outlook not so good.", "Very doubtful."]
//fact list
var fact =["Sharks can’t breathe if they aren’t moving", "Saudi Arabia Imports Camels From Australia", "A human can theoretically survive up to 6 months without sleeping", "Killer whales are the largest member of the dolphin family.", "Coffee beans come from berries that grow on plants", "Giraffes can clean their ears with their 21 inch long tongue", "America has been in war 93% of its existence."]

client.on('ready', () => {
client.user.setActivity("$help"); 
});


//Brickman says hi!


//commands

//help

client.on("message", async (message) => {
    if (message.content.startsWith(`${prefix}help`)) {
        var embed = new Discord.RichEmbed()
            .setColor(0x252629)
            .setAuthor(client.user.username, client.user.avatarURL)
            .setTitle("Help Menu")
            .setDescription("The Help Menu for [Utili](https://brickman.glitch.me/utili.html)")
            .addField("**Help**", "This command shows the help menu.")
            .addField("**Flip**", "Flips a coin.")
            .addField("**Roll**", "Rolls a die.")
            .addField("**Ping**", "Gets the ping of the bot.")
            .addField("**Joke**", "Tells a random joke, courtesy of reddit")
            .addField("**Poll**", "Starts a poll")
            .addField("**Pun**", "Tells a pun.")
            .addField("**8ball**", "Acts like a magic 8ball.")
            .addField("**Avatar**", "Shows either your avatar or the avatar of the person you pinged.")
            .addField("**Fact**", "Says a fun fact.")
            .addField("**Markup**", "Posts a discord markup tutorial")
            .addField("**Support**", "Join the support server [here](https://discord.gg/QHqJxMm).")
            .setTimestamp()
            .setFooter("Created by Brickman#4669", client.user.avatarURL);
        message.channel.send(embed);
        
        //flip
        
    } else if (message.content.startsWith(`${prefix}flip`)) {
        message.channel.send(Math.floor(Math.random() * 2) === 0 ? "Heads" : "Tails");
        
        //roll
        
    } else if (message.content.startsWith(`${prefix}roll`)) {
        message.channel.send(`You rolled the number :game_die: ${Math.floor(Math.random() * 6) + 1}`);
        
        //ping
        
    } else if (message.content.startsWith(`${prefix}ping`)) {
        const m = await message.channel.send("Ping?");
        m.edit(`Pong! Latency is ${m.createdTimestamp - message.createdTimestamp}ms. API Latency is ${Math.round(client.ping)}ms`);
        
        //joke
        
    } else if (message.content.startsWith(`${prefix}joke`)) {
        var repl = rand[Math.floor(Math.random()*rand.length)];
        message.channel.send(repl)
        
        //fact
        
            } else if (message.content.startsWith(`${prefix}fact`)) {
        var repl4 = fact[Math.floor(Math.random()*fact.length)];
        message.channel.send(repl4)
                
        //pun
                
 } else if (message.content.startsWith(`${prefix}pun`)) {
        var repl2 = pun[Math.floor(Math.random()*pun.length)];
  message.channel.send(repl2)
     
  //8ball
     
     } else if (message.content.startsWith(`${prefix}8ball`)) {
        var repl3 = ball[Math.floor(Math.random()*ball.length)];
  message.channel.send(repl3)
 
        //markup
        
    } else if (message.content.startsWith(`${prefix}markup`)) {
      message.channel.send("https://imgur.com/gallery/y2P3O0w")
                //poll
        
    } else if (message.content.startsWith(`${prefix}poll`)) {
        message.react("👍");
        message.react("👎");
        message.react("🤷"); 
        
        //avatar
        
    } else if (message.content.startsWith(`${prefix}avatar`)) {
        if (!message.mentions.users.size) {
            return message.channel.send(`Your avatar: ${message.author.displayAvatarURL}`);
            }
            
            
        }});
        client.login(token).catch(err => console.log(err));
