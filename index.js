const Discord = require("discord.js");
const client = new Discord.Client();
const token = process.env.token;
const prefix = ">";
//joke list
var rand = ["What is a sheep's favourite movie? ||Baaaaaa-ck to the future!||", "I hit my friend with a huge crystal of sodium chloride. ||I got arrested for a salt!||", "How do you add two numbers at the top of Mount Everest? ||Just summit.||", "Why did the dog say 'meow'? ||He was bilingual||", "There’s only one thing I don’t like about Halloween ||Which is...||", "Did you hear about the all-janitor baseball team? ||They swept the finals||", "A 300 page novel with a 50 page introductory essay written by the author walks into a bar. ||The bartender asks, 'Why the long preface?'||", "Why do gorillas have big nostrils? ||Because they have big fingers!||, What did the buffalo say to his son when he left for college? ||Bison||", "What is the best place to train your legs? ||Squatland Yard||"];
//pun list
var pun =["The first computer dates back to Adam and Eve. It was an Apple with limited memory, just one byte. And then everything crashed.", "About a month before he died, my uncle had his back covered in lard. After that, he went down hill fast.", "Doctor, there`s a patient on line 1 who says hes invisible. Doctor: Well I cant see him right now.", "Thanks for explaining the word many to me, it means a lot.", "I got a new pair of gloves today, but they're both lefts which, on the one hand, is great, but on the other, its just not right."];
//8ball list
var ball =["It is certain.", "It is decidedly so.", "Without a doubt.", "Yes - definitely.", "You may rely on it.", "As I see it, yes.", "Most likely.", "Outlook good.", "Yes.", "Signs point to yes.", "Reply hazy, try again.", "Ask again later.", "Better not tell you now.", "Cannot predict now.", "Concentrate and ask again.", " Don't count on it.", "My reply is no.", "My sources say no.", "Outlook not so good.", "Very doubtful."];
//fact list
var fact =["Sharks can’t breathe if they aren’t moving", "Saudi Arabia Imports Camels From Australia", "A human can theoretically survive up to 6 months without sleeping", "Killer whales are the largest member of the dolphin family.", "Coffee beans come from berries that grow on plants", "Giraffes can clean their ears with their 21 inch long tongue", "America has been in war 93% of its existence."]
//truth list
var truth =["What was the last thing you searched for on your phone?", "If you had to choose between going naked or having your thoughts appear in thought bubbles above your head for everyone to read, which would you choose?", "After you've dropped a piece of food, what's the longest time you've left it on the ground and then ate it?", "Have you ever tasted a booger?", "What's the first thing you would do if you woke up one day as the opposite gender?", "Have you ever peed in the pool?", "Have you ever farted in an elevator?", "What are some things you think about when sitting on the toilet?", "Did you have an imaginary friend growing up?", "Do you cover your eyes during a scary part in a movie?", "Have you ever practiced kissing in a mirror?"];
//dare list
var dare =["Go into your most recent DM and spam 'POOP' 10 times", "Go into voice and yell something of your choice", "Call a random person on Discord and sing Happy Birthday to them", "Go into a group dm and start a call, then sing Rick Astley", "Ask someone of your choice how to get Discord", "Change your pfp to the darer's choice"]

const activities_list = [ 
    "with the >help command.", 
    "with the developers console", 
    "with some code", 
    "with JavaScript", 
    "version 1.2.9", 
    "Visual Studio Code", 
    "with discord.js libraries", 
    "with node.js", 
    "brickman.glitch.me", 
    "with Brickman", 
    "with github", 
    ">help", 
    "with you!", 
    "a game",
    "with " + client.guilds.size + " users!",

    ]; // creates an arraylist containing phrases you want your bot to switch through.

client.on('ready', () => {
    setInterval(() => {
        const index = Math.floor(Math.random() * (activities_list.length - 1) + 1); 
        client.user.setActivity(activities_list[index]); 
    }, 10000); 
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
            .addField("The prefix for this server is ", prefix)
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
            .addField("**Truth**", "Says a truth for a game of truth or dare")
            .addField("**Dare**", "Says a dare for a game of truth or dare")
            .addField("**Version**", "DM's you with bot version")
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
        m.edit(`<:utilicheck:556723061467119637> Latency is ${m.createdTimestamp - message.createdTimestamp}ms. API Latency is ${Math.round(client.ping)}ms`);
        
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

  //truth
     
 } else if (message.content.startsWith(`${prefix}truth`)) {
    var repl5 = truth[Math.floor(Math.random()*truth.length)];
    message.channel.send(repl5)

    //dare

} else if (message.content.startsWith(`${prefix}dare`)) {
    var repl6 = dare[Math.floor(Math.random()*dare.length)];
    message.channel.send(repl6)

  //8ball
     
     } else if (message.content.startsWith(`${prefix}8ball`)) {
        var repl3 = ball[Math.floor(Math.random()*ball.length)];
  message.channel.send(repl3)

        //markup
        
    } else if (message.content.startsWith(`${prefix}markup`)) {
     message.channel.send("https://imgur.com/a/y2P3O0w")

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
            const avatarList = message.mentions.users.map(user => {
            return `${user.username}\'s avatar: ${user.displayAvatarURL}`;
            });
            message.channel.send(avatarList);
        
        //version
            
    } else if (message.content.startsWith(`${prefix}version`)) {
        message.author.sendMessage("Utili is currently on version 1.1.8.");
        message.reply("sent you a dm! <:utilicheck:556723061467119637>")

        //serverinfo
        
    } else if (message.content.startsWith(`${prefix}serverinfo)) {
    let members = guild.memberCount;
    let users = guild.members.filter(member => !member.user.bot).size;
    let bots = guild.members.filter(member => member.user.bot).size;
    const embed3 = new Discord.RichEmbed()
    .setTitle("Server Info")
    .setAuthor(
        `${guild.name} | (${guild.id})`, guild.iconURL)
    .setColor(`0x252629`)
    .addField('Server Owner', guild.owner, true)
    .addField('Server Region', guild.region, true)
    .addField('Channel Count', guild.channel.size, true)
    .addField("Members", members, true)
    .addField("Humans", users, true)
    .addField("Bots", bots, true)
    .addBlankField(true)
    .addField("Percent", Math.floor(bots / member * 10000)/ 100, true)
    .addBlankField(true)
    message.channel.send(embed3)
        //dev commands

        //dev help

    } else if (message.content.startsWith(`${prefix}devhelp`)) {
        if (message.author.id !== '443992049746968586') {
            message.channel.send("<:utilicross:556723032400461824> You are not the developer!"); 
                } else if (message.author.id === '443992049746968586') {
                (message.channel.send("Restart, ")) 
                } else if (message.content.startsWith(`${prefix}restart`))
                    function resetBot(channel) {
    // send channel a message that you're resetting bot [optional]
    message.channel.send('Resetting...')
    .then(msg => client.destroy())
    .then(() => client.login(token));
}

            }
        }

        });
        client.login(token).catch(err => console.log(err));
