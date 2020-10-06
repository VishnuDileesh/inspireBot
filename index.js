const Discord = require('discord.js')
const client = new Discord.Client()

const config = require('dotenv').config()

client.on('ready', () => {
  console.log('Inspire Bot running')
})


client.on('message', (msg) => {
  if(msg.content === 'vi'){
    msg.reply('nice')
  }
})

client.login(process.env.BOT_TOKEN)

