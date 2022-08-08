
// const Discord = require('discord.io');
const discord = require('discord.js');
const discord_client = new discord.Client({intents: ["GUILDS", "GUILD_MESSAGES"]});
const fs = require('fs');

// collection of discord 
discord_client.command = new discord.Collection();

// to make sure only the js files are read
const CommandFiles = fs.readdirSync('./commands/').filter(file => file.endsWith('.js'));
for(const file of CommandFiles){ 
    const Command = require(`./commands/${file}`);

    discord_client.command.set(Command.name, Command);
}

// messages that start with $ will be taken as a command
const command_symbol = '$';

discord_client.once('ready',() => {
    console.log("Bot online : Pixie");
});

discord_client.on('messageCreate',message => {
    if(!message.content.startsWith(command_symbol) || message.author.bot) return;

    const args = message.content.slice(command_symbol.length).split(/ +/);
    const command = args.shift().toLowerCase();

    if(command == 'command')
    {
        discord_client.command.get('Commands').execute(message,args,discord);
    }

    if(command == 'ping')
    {
        discord_client.command.get('ping').execute(message,args);
    }

    else if(command == 'youtube')
    {
        discord_client.command.get('youtube').execute(message,args);   
    }

    else if(command == 'image')
    {
        discord_client.command.get('image').execute(message,args);   
    }

    else if(command == 'clear')
    {
        discord_client.command.get('clear').execute(message,args);
    }

    else if(command == 'kick')
    {
        discord_client.command.get('kick').execute(message,args);
    }

    else if(command == 'ban')
    {
        discord_client.command.get('ban').execute(message,args);
    }
    
});

discord_client.login('Your token goes here');
