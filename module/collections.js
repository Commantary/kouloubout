const config = require('./json/config.json')
const queue_url = process.env.QUEUE_URL || process.argv[2]
const bdd = process.env.BDD || process.argv[2]
const bob = require('./json/bob.json')
const got = require('got')
const emojis = require('./json/emojis.json')

module.exports.run = (client, message, args) => {

	var array = []
	a = 0
	c = 1
	for(let i in bob){
		array[a] = /*"**[" + c + "]** " + */bob[i].name + " " + emojis[i]
		a++
		c++
	}

	array.pop()

	message.channel.send({embed: {
		color: config.good_color,
		author: {
            name: 'Liste des bobs'
          },
		description: array.join(', ')
	}})

}