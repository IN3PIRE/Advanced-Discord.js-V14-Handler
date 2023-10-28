// slashCommands/ping.js
module.exports = {
  data: {
    name: 'ping',
    description: 'Replies with Pong!'
  },
  execute: async (interaction) => {
    // Reply with Pong!
    await interaction.reply('Pong!');
  }
};
