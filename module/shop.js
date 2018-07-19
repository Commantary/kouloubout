const config = require('./json/config.json')
const queue_url = process.env.QUEUE_URL || process.argv[2]
const bdd = process.env.BDD || process.argv[2]
const money = process.env.MONEY || process.argv[2]
const bob = require('./json/bob.json')
const got = require('got')

module.exports.run = (client, message, args) => {
console.log("shop 1")

message.channel.send({embed: {
	color: config.good_color,
	title: "Magasin",
	fields: [{
		name: "Ballz",
		value: "Prix: 5$"
	}
	]
}})

}