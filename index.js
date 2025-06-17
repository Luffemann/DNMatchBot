const { Client, GatewayIntentBits } = require('discord.js');

console.log('TOKEN er:', process.env.TOKEN ? 'sat' : 'IKKE SAT'); 
console.log('TOKEN længde:', process.env.TOKEN ? process.env.TOKEN.length : 'N/A');
console.log('TOKEN start:', process.env.TOKEN ? process.env.TOKEN.substring(0, 10) : 'N/A');
console.log('TOKEN slut:', process.env.TOKEN ? process.env.TOKEN.substring(process.env.TOKEN.length - 10) : 'N/A');

const client = new Client({
  intents: [GatewayIntentBits.Guilds, GatewayIntentBits.GuildMessages, GatewayIntentBits.MessageContent]
});

client.once('ready', () => {
  console.log(`✅ Botten er online som ${client.user.tag}`);
});

client.login(process.env.TOKEN);
