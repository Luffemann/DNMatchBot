const { Client, GatewayIntentBits } = require('discord.js');

console.log('TOKEN er:', process.env.TOKEN ? 'sat' : 'IKKE SAT'); 
console.log('TOKEN længde:', process.env.TOKEN ? process.env.TOKEN.length : 'N/A');

const client = new Client({
  intents: [GatewayIntentBits.Guilds, GatewayIntentBits.GuildMessages, GatewayIntentBits.MessageContent]
});

client.once('ready', () => {
  console.log(`✅ Botten er online som ${client.user.tag}`);
});

client.login(process.env.TOKEN);
