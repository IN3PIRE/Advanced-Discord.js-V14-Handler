const { Client, Collection, Intents } = require('discord.js');
const fs = require('fs');
const path = require('path');

// Create a new client instance
const client = new Client({ intents: [Intents.FLAGS.GUILDS] });

// Load the config file
const config = require('./config.json');

// Create collections for events, functions, and slash commands
client.events = new Collection();
client.functions = new Collection();
client.
slashCommands = new Collection();

// Load all the events from the events folder
const eventFiles = fs.readdirSync(path.join(dirname, 'events')).filter(file => file.endsWith('.js'));
for (const file of eventFiles) {
const event = require(path.join(dirname, 'events', file));
// Set the event name as the file name without the extension
const eventName = file.split('.')[0];
// Add the event to the collection
client.events.set(eventName, event);
// Register the event listener
client.on(eventName, (...args) => event.execute(client, ...args));
}
// Load all the functions from the functions folder
const functionFiles = fs.readdirSync(path.join(dirname, 'functions')).filter(file => file.endsWith('.js'));
for (const file of functionFiles) {
const func = require(path.join(dirname, 'functions', file));
// Set the function name as the file name without the extension
const funcName = file.split('.')[0];
// Add the function to the collection
client.functions.set(func
Name, func);
}

// Load all the slash commands from the slashCommands folder
const slashCommandFolders = fs.readdirSync(path.join(dirname, 'slashCommands'));
for (const folder of slashCommandFolders) {
const slashCommandFiles = fs.readdirSync(path.join(dirname, 'slashCommands', folder)).filter(file => file.endsWith('.js'));
for (const file of slashCommandFiles) {
const slashCommand = require(path.join(__dirname, 'slashCommands', folder, file));
// Add the slash command to the collection
client.slashCommands.set(slashCommand.data.name, slashCommand);
}
}

// Login to Discord with your client's token
client.login(config.token);
