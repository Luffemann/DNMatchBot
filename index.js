const { Client, Intents } = require('discord.js');

console.log('TOKEN er:', process.env.TOKEN ? 'sat' : 'IKKE SAT'); 
console.log('TOKEN længde:', process.env.TOKEN ? process.env.TOKEN.length : 'N/A');
console.log('TOKEN start:', process.env.TOKEN ? process.env.TOKEN.substring(0, 10) : 'N/A');
console.log('TOKEN slut:', process.env.TOKEN ? process.env.TOKEN.substring(process.env.TOKEN.length - 10) : 'N/A');

const client = new Client({
  intents: [Intents.FLAGS.GUILDS, Intents.FLAGS.GUILD_MESSAGES, Intents.FLAGS.MESSAGE_CONTENT]
});

client.once('ready', () => {
  console.log(`✅ Botten er online som ${client.user.tag}`);
});

client.login(process.env.TOKEN);
