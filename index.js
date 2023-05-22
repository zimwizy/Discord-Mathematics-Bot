
const { Client , IntentsBitField } = require('discord.js');
require("dotenv").config();
const client = new Client({
    intents: [
        IntentsBitField.Flags.Guilds,
        IntentsBitField.Flags.GuildMembers,
        IntentsBitField.Flags.GuildMessages,
        IntentsBitField.Flags.MessageContent,
    ],
});

client.on('ready', (c) => {
    console.log("The bot is connected."+ c.user.tag);
});

client.on('messageCreate', (message) => {
    if(message.author.bot) return;
    if(message.content === 'hello'){
        message.channel.send(`Hello, ${message.author}`);
        message.reply("https://media.tenor.com/ObyK0WXilXUAAAAM/kitty-cat.gif")
    };
});

let num = Math.floor(Math.random()*5)+1;
let num2 = Math.floor(Math.random()*5)+1;
let sum = num+num2;

client.on('messageCreate', (message) =>{
    if(message.content === 'math'){
        message.reply(`Write the sum of ${num} + ${num2}`);
    }
    
})
client.on('messageReactionAdd', async (reaction, user) => {
    if (reaction.emoji.name === '✅') {
        user.send('You have reacted with ✅');
    }
  });
  
client.on('messageCreate', (message) =>{
    if(message.content == sum){
        message.react('✅');
        message.reply(`Correct answer! ${message.author}`);
        num = Math.floor(Math.random()*5)+1;
        num2 = Math.floor(Math.random()*5)+1;
        sum = num+num2;
    }
})


  


client.on('guildMemberAdd', (member)=>{
    member.send('Welcome to the server!')
})

client.login(process.env.TOKEN);
