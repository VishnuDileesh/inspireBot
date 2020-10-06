const Discord = require('discord.js')
const client = new Discord.Client()

const config = require('dotenv').config()

client.on('ready', () => {
  console.log('Inspire Bot running')
})


const prefix = "!"

client.on('message', (msg) => {

  if(msg.author.bot) return
  if(!msg.content.startsWith(prefix)) return

  const commandBody = msg.content.slice(prefix.length)

  const command = commandBody.toLowerCase()

  if(command === 'inspire'){
    msg.reply('good')
  }

})

client.login(process.env.BOT_TOKEN)

