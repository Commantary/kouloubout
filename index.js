// Mise en place des en tetes
const discord = require('discord.js')
const client = new discord.Client()
const config = require('./module/json/config.json')
const bob = require('./module/json/bob.json')
const got = require('got')
const money = process.env.MONEY || process.argv[2]
const bdd = process.env.BDD || process.argv[2]

// On start le bot
client.on('ready', () => {

  client.setInterval(() => {
      got.get(money, {
          json: true,
      }).then(data => {
          var body = data.body;

          for(let i in body) {
              let time = body[i].time;
              console.log(i)
              if(Date.now() > time) {
                  console.log(`${body[i].username} peut recuperer son argent`)

                  got.get(bdd, {
                      json: true,
                  }).then(data => {
                      var bodyBdd = data.body;
                      bodyBdd[i].canTakeArgent = "true"

                      //put here
                      got.put(bdd, {
                          json: true,
                          body: bodyBdd
                      })
                  }).catch(error => {
                      console.log(error)
                  })
                  //Le put
                  got.put(money, {
                      json: true,
                      body: body
                  })
              }
          }
      }).catch(error => {
          console.log(error)
      })
  }, 5000)

  client.user.setActivity('I PLAY POKEMOUNE GOOOOO EVERYDAYYYYYY', { type: "LISTENING" })
  console.log('-------------------------------------')
  console.log('     [!] Kouloubout connecté [!]     ')
  console.log('-------------------------------------')
  console.log('le prefix est: ' + config.prefix)
})

client.on('message', message => {
//----------------------------------------------------------------------------------------
    var rand = Math.floor(Math.random() * 21);
    var randBob = Math.floor(Math.random() * bob.number);
    var queue_url = process.env.QUEUE_URL || process.argv[2]

    console.log("server: " + message.guild.name + " | channel: " + message.channel.name + " | rand: " + rand + " | randBob: " + randBob + " | author: " + message.author.username)
    if (rand === 10 && message.author.bot == false){//&& message.author.id == "214846601066315776"){

      var msg = message.channel.send({embed: {
        color: 65280,
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

        if (body[message.guild.id] !== undefined){

          var bodyGuild = body[message.guild.id]
          // On les remplaces
          bodyGuild[5] = bodyGuild[4]
          bodyGuild[4] = bodyGuild[3]
          bodyGuild[3] = bodyGuild[2]
          bodyGuild[2] = bodyGuild[1]
          bodyGuild[1] = bob[randBob].name

        } else {

          body[message.guild.id] = {
            "1": bob[randBob].name,
            "2": "undefined",
            "3": "undefined",
            "4": "undefined",
            "5": "undefined",
          }
        }
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
