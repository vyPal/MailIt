const Discord = require('discord.js');
const client = new Discord.Client();
const fs = require("fs");
const settings = require('discord-server-settings')

client.ws.on('INTERACTION_CREATE', async interaction => {
  const command = interaction.data.name.toLowerCase();
  const args = interaction.data.options;
  console.log(command+"\n"+args[0].options[0].options[0].value)
  client.api.interactions(interaction.id, interaction.token).callback.post({data: {
    type: 4,
    data: {
      content: "It works!"
    }
  }})
})

client.login(process.env.DISCORD_TOKEN);