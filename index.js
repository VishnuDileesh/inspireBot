const Discord = require('discord.js')
const client = new Discord.Client()

const config = require('dotenv').config()

const quotes = [
  'Chase the vision, not the money; the money will end up following you. — Tony Hsieh',
  'Don’t worry about failure; you only have to be right once. — Drew Houston',
  'Ideas are easy. Implementation is hard. — Guy Kawasaki',
  'Any time is a good time to start a company. — Ron Conway',
  'The secret to successful hiring is this: look for the people who want to change the world. — Marc Benioff',
  'If you’re going through hell, keep going. — Winston Churchill',
  'Ideas are commodity. Execution of them is not. — Michael Dell',
  'If you are not embarrassed by the first version of your product, you’ve launched too late. — Reid Hoffman',
  'I knew that if I failed I wouldn’t regret that, but I knew the one thing I might regret is not trying. — Jeff Bezos',
  'The way to get started is to quit talking and start doing. — Walt Disney',
  'Remember to celebrate milestones as you prepare for the road ahead. — Nelson Mandela',
  'Life is not always a matter of holding good cards, but sometimes playing a poor hand well. — Jack London',
  'A pessimist sees the difficulty in every opportunity; an optimist sees the opportunity in every difficulty. — Winston Churchill',
  'As long as you’re going to be thinking anyway, think big. — Donald Trump',
  'Act enthusiastic and you will be enthusiastic. — Dale Carnegie',
  'Whether you think you can, or think you can’t -- you’re right — Henry Ford',
  'Always deliver more than expected. — Larry Page',
  'You don’t learn to walk by following rules. You learn by doing and falling over. — Richard Branson',
  'High expectations are the key to everything. — Sam Walton',
  'Trust your instincts. — Oprah Winfrey',
  'Your most unhappy customers are your greatest source of learning. — Bill Gates',
  'In between goals is a thing called life, that has to be lived and enjoyed. — Sid Caesar',
  'If you just work on stuff that you like and you’re passionate about, you don’t have to have a master plan with how things will play out. — Mark Zuckerberg',
  'If you’re passionate about something and you work hard, then I think you will be successful. — Pierre Omidyar',
  'When you find an idea that you just can’t stop thinking about, that’s probably a good one to pursue. — Josh James',
  'Waiting for perfect is never as smart as making progress. — Josh James',
  'Every worthwhile accomplishment, big or little, has its stages of drudgery and triumph: a beginning, a struggle and a victory. — Mahatma Gandhi',
  'One can get anything if he is willing to help enough others get what they want. — Zig Ziglar',
  'If everything seems under control, you’re just not going fast enough. — Mario Andretti',
  'I’m convinced that about half of what separates the successful entrepreneurs from the non-successful ones is pure perseverance. — Steve Jobs',
  'Never, never, never give up. — Winston Churchill',
  'Make mistakes faster. — Andrew Grove',
  'Stay hungry. And bootstrap. — Rob Kalin',
  'Learn early. Learn often. — Drew Houston',
  'We are our choices. Build yourself a great story. — Jeff Bezos',
  'The value of an idea lies in the using of it. — Thomas A. Edison',
  'Chase the vision, not the money, the money will end up following you. — Tony Hsieh',
  'It’s hard to do a really good job on anything you don’t think about in the shower. — Paul Graham',
  'An entrepreneur is someone who has a vision for something and a want to create. — David Karp',
  'The best startups generally come from somebody needing to scratch an itch. — Michael Arrington',
  'Every day that we spent not improving our products was a wasted day. — Mario Andretti',
  'Timing, perseverance, and ten years of trying will eventually make you look like an overnight success. — Biz Stone',
  'See things in the present, even if they are in the future. — Larry Ellison',
  'You can’t make anything viral, but you can make something good. — Peter Shankman',
  'It’s more effective to do something valuable than to hope a logo or name will say it for you. — Jason Cohen',
  'You don’t need to have a 100-person company to develop that idea. — Larry Page',
  'All humans are entrepreneurs not because they should start companies but because the will to create is encoded in human DNA. — Reid Hoffman',
  'The fastest way to change yourself is to hang out with people who are already the way you want to be. — Reid Hoffman',
  'In the end, a vision without the ability to execute it is probably a hallucination. — Steve Case',
  'Risk more than others think is safe. Dream more than others think is practical. — Howard Schultz',
  'Don’t limit yourself. Many people limit themselves to what they think they can do. You can go as far as your mind lets you. What you believe, remember, you can achieve. — Mary Kay Ash',
  'Even if you don’t have the perfect idea to begin with, you can likely adapt. — Victoria Ransom',
  'You just have to pay attention to what people need and what has not been done. — Russell Simmons',
  'You jump off a cliff and you assemble an airplane on the way down. — Reid Hoffman',
  'Sustaining a successful business is a hell of a lot of work, and staying hungry is half the battle. — Wendy Tan White',
  'Design is not just what it looks like and feels like. Design is how it works. — Jason Cohen',
  'If you can’t feed a team with two pizzas, it’s too large. — Jeff Bezos',
  'Don’t worry about people stealing your design work. Worry about the day they stop. — Jeffrey Zeldman',
  'Your work is going to fill a large part of your life, and the only way to be truly satisfied is to do what you believe is great work. And the only way to do great work is to love what you do. — Steve Jobs',
  'The most dangerous poison is the feeling of achievement. The antidote is to every evening think what can be done better tomorrow. — Ingvar Kamprad',
  'Have the courage to follow your heart and intuition. They somehow already know what you truly want to become. Everything else is secondary. — Steve Jobs',
  'When something is important enough, you do it even if the odds are not in your favor. — Elon Musk',
  'If you set your goals ridiculously high and it’s a failure, you will fail above everyone else’s success. — James Cameron',
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
