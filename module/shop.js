const config = require('./json/config.json')
const queue_url = config.queue_url;
const bdd = config.bdd;
const money = config.money
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