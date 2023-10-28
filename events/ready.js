// events/ready.js
module.exports = {
  execute: async (client) => {
    console.log(`Logged in as ${client.user.tag}!`);
    
    // Register all the slash commands for each guild
    const guilds = await client.guilds.fetch();
    for (const guild of guilds.values()) {
      await guild.commands.set(client.slashCommands.map(slashCommand => slashCommand.data));
      console.log(`Registered slash commands for ${guild.name}`);
    }
    
    // Register an interaction listener
    client.on('interactionCreate', async interaction => {
      // If the interaction is a slash command
      if (interaction.isCommand()) {
        // Get the slash command from the collection
        const slashCommand = client.slashCommands.get(interaction.commandName);
        // If the slash command exists
        if (slashCommand) {
          try {
            // Execute the slash command
            await slashCommand.execute(interaction);
          } catch (error) {
            console.error(error);
            // Reply with an error message
            await interaction.reply({ content: 'There was an error while executing this command!', ephemeral: true });
          }
        }
      }
    });
  }
};
