const Discord = require('discord.js');
const { token } = require('../config.json');
const fs = require('fs');

const prefix = 'bd';
const client = new Discord.Client();

client.commands = new Discord.Collection();

const commandFiles = fs.readFileSync('./commands/').filter(file => file.endsWith('.js'));
for(const file of commandFiles){
    const command = require(`./commands/${file}`);

    client.commands.set(command.name, command)
}

client.once('ready', () => {
    console.log('Bread is vibing');
});

client.on('message', message =>{
    if (!message.content.startsWith(prefix) || message.author.bot) return;

    const args = message.content.slice(prefix.length).split(/ +/);
    const command = args.shift().toLocaleLowerCase();

    if (command === 'ping'){
        client.commands.get('ping').execute(message, args);
    } else if (command == '-'){
        client.commands.get('-').execute(message, args);
    } else if (command == 'test'){
        client.commands.get('test').execute(message, args);
    } else if (command == '!'){
        client.commands.get('!').execute(message, args);
    }  else if (command == 're'){
        client.commands.get('re').execute(message, args);
    }  else if (command == 'tea'){
        client.commands.get('tea').execute(message, args);
    }  else if (command == 'pooch'){
        client.commands.get('pooch').execute(message, args);
    }  else if (command == 'bored'){
        client.commands.get('bored').execute(message, args);
    }  else if (command == 'help'){
        client.commands.get('help').execute(message, args);
    }  else if (command == 'hw'){
        client.commands.get('hw').execute(message, args);
    }  else if (command == 'yeet'){
        client.commands.get('yeet').execute(message, args);
    }  else if (command == 'scam'){
        client.commands.get('scam').execute(message, args);
    }  else if (command == 'evelyn'){
        client.commands.get('evelyn').execute(message, args);
    }  else if (command == 'food'){
        client.commands.get('food').execute(message, args);
    }  else if (command == 'joke'){
        client.commands.get('joke').execute(message, args);
    }  else if (command == 'joke_2'){
        client.commands.get('joke_2').execute(message, args);
    }  else if (command == 'pumkin'){
        client.commands.get('pumkin').execute(message, args);
    }  else if (command == 'simp'){
        client.commands.get('simp').execute(message, args);
    }  else if (command == 'stop'){
        client.commands.get('stop').execute(message, args);
    }  else if (command == 'stutee'){
        client.commands.get('stutee').execute(message, args);
    }  else if (command == 'tree'){
        client.commands.get('tree').execute(message, args);
    }  else if (command == 'troll'){
        client.commands.get('troll').execute(message, args);
    }  else if (command == 'clickbait'){
        client.commands.get('clickbait').execute(message, args);
    }
})

client.login(token);
