const Discord = require('discord.js')
const client = new Discord.Client()

const config = require('dotenv').config()

const quotes = [
  'Chase the vision, not the money; the money will end up following you.',
  'Don’t worry about failure; you only have to be right once.',
  'Ideas are easy. Implementation is hard.',
  'Any time is a good time to start a company.',
  'The secret to successful hiring is this: look for the people who want to change the world.',
  'If you’re going through hell, keep going.',
  'Ideas are commodity. Execution of them is not.',
  'If you are not embarrassed by the first version of your product, you’ve launched too late.',
  'I knew that if I failed I wouldn’t regret that, but I knew the one thing I might regret is not trying.',
  'The way to get started is to quit talking and start doing.',
  'Remember to celebrate milestones as you prepare for the road ahead.',
  'Life is not always a matter of holding good cards, but sometimes playing a poor hand well.',
  'A pessimist sees the difficulty in every opportunity; an optimist sees the opportunity in every difficulty.',
  'As long as you’re going to be thinking anyway, think big.',
  'Act enthusiastic and you will be enthusiastic.',
  'Whether you think you can, or think you can’t -- you’re right',
  'Always deliver more than expected.',
  'You don’t learn to walk by following rules. You learn by doing and falling over',
  'High expectations are the key to everything.',
  'Trust your instincts.',
  'Your most unhappy customers are your greatest source of learning.'
]


const randomQuote = () => quotes[Math.floor(Math.random() * quotes.length)]


client.on('ready', () => {
  console.log('Inspire Bot running')
  console.log(randomQuote())
})


const prefix = "!"

client.on('message', (msg) => {

  if(msg.author.bot) return
  if(!msg.content.startsWith(prefix)) return

  const commandBody = msg.content.slice(prefix.length)

  const command = commandBody.toLowerCase()

  if(command === 'inspire'){
    msg.reply(randomQuote())
  }

})

client.login(process.env.BOT_TOKEN)

