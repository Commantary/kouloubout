// Mise en place des en tetes
const discord = require('discord.js')
const client = new discord.Client()
const setting = require('./module/config.json')
const fs = require('fs')
const config = JSON.parse(fs.readFileSync('./module/config.json', 'utf8'))

// On start le bot
client.on('ready', () => {
  client.user.setActivity('I PLAY POKEMOUNE GOOOOO EVERYDAYYYYYY', { type: "LISTENING" })
  console.log('-------------------------------------')
  console.log('    [!] Kouloubout connecté [!]      ')
  console.log('-------------------------------------')
  console.log('le prefix est: ' + setting.prefix)
})

/*ARRIVER DEPARTS
 * const arv = require('./module/arriverdeparts.js')
 * arv(client)
 */

client.on('message', message => {
  if (message.author.bot) return
  if (message.content.indexOf(config.prefix) !== 0) return

  // This is the best way to define args. Trust me.
  const args = message.content.slice(config.prefix.length).trim().split(/ +/g)
  const command = args.shift().toLowerCase()

  // The list of if/else is replaced with those simple 2 lines:
  try {
    let commandFile = require(`./module/${command}.js`)
    commandFile.run(client, message, args)
  } catch (err) {

  }
})

var dt = process.env.TOKEN || process.argv[2]

if (!dt) {
  console.log('')
}

client.login(dt)
