// Mise en place des en tetes
const discord = require('discord.js')
const client = new discord.Client()
const config = require('./module/json/config.json')
const bob = require('./module/json/bob.json')
const got = require('got')

// On start le bot
client.on('ready', () => {
  client.user.setActivity('I PLAY POKEMOUNE GOOOOO EVERYDAYYYYYY', { type: "LISTENING" })
  console.log('-------------------------------------')
  console.log('     [!] Kouloubout connecté [!]     ')
  console.log('-------------------------------------')
  console.log('le prefix est: ' + config.prefix)
})

client.on('message', message => {
//----------------------------------------------------------------------------------------
    var rand = Math.floor(Math.random() * 11);
    var randBob = Math.floor(Math.random() * bob.number);
    var queue_url = process.env.QUEUE_URL || process.argv[2]

    console.log("server: " + message.guild.name + " | channel: " + message.channel.name + " | rand: " + rand + " | randBob: " + randBob + " | author: " + message.author.username)

    if (rand === 5)//&& message.author.id == "214846601066315776"){

      var msg = message.channel.send({embed: {
        color: 65280,
        /*author: {
          name: 'Nouveaux seigneur !',
          icon_url: bob[randBob].url
        },*/
        thumbnail: {
          url: bob[randBob].url
        },
        description: "Le bob **" + bob[randBob].name + "** vient d'apparaître !\nFaites " + config.prefix + "catch pour le capturer"
      }})

      got.get(queue_url, {
        json: true,
      }).then(data => {
        var body = data.body;
        console.log(body)
        // On les remplaces
        body[3] = body[2]
        body[2] = body[1]
        body[1] = bob[randBob].name

        got.put(queue_url, {
          json: true,
          body: body
        })

      }).catch(error => {
          reject({
            statuscode: error.statusCode,
            message: error.statusMessage
        });
      })

    }

//----------------------------------------------------------------------------------------

  if (message.author.bot) return
  if (message.content.indexOf(config.prefix) !== 0) return

  // This is the best way to define args. Trust me.
  const args = message.content.slice(config.prefix.length).trim().split(/ +/g)
  const command = args.shift().toLowerCase()

  // The list of if/else is replaced with those simple 2 lines:
  try {
    let commandFile = require(`./module/${command}.js`)
    commandFile.run(client, message, args, bob)
  } catch (err) {

  }
//----------------------------------------------------------------------------------------
})

var dt = process.env.TOKEN || process.argv[2]

if (!dt) {
  console.log('')
}

client.login(dt)
