
const { Client, GatewayIntentBits } = require('discord.js');

const client = new Client({
  intents: [
    GatewayIntentBits.Guilds,
    GatewayIntentBits.GuildMessages,
    GatewayIntentBits.MessageContent,
    GatewayIntentBits.GuildMembers,
    GatewayIntentBits.DirectMessages,
  ],
});

client.once('ready', () => {
  console.log(`✅ Botten er online som ${client.user.tag}`);
  sendDM(process.env.TEST_DISCORD_ID, '✅ DNMatchBot er startet og virker som den skal!');
});

async function sendDM(discordId, besked) {
  try {
    const bruger = await client.users.fetch(discordId);
    if (!bruger) throw new Error('Bruger ikke fundet!');
    await bruger.send(besked);
    console.log(`📬 DM sendt til ${bruger.username}`);
  } catch (err) {
    console.error('❌ Fejl ved DM:', err);
  }
}

client.login(process.env.TOKEN);

