const config = require('./json/config.json')
const queue_url = process.env.QUEUE_URL || process.argv[2]
const bdd = process.env.BDD || process.argv[2]
const bob = require('./json/bob.json')
const got = require('got')

module.exports.run = async (client, message, args) => {

got.get(queue_url, {
	json: true,
}).then(data => {
	var body = data.body;
	var bodyGuild = body[message.guild.id]

	var bob1 = bodyGuild[1]
	var bob2 = bodyGuild[2]
	var bob3 = bodyGuild[3]
	var bob4 = bodyGuild[4]
	var bob5 = bodyGuild[5]

	if (bob1 == "undefined"){
		bob1 = "Aucun"
	}
	if (bob2 == "undefined"){
		bob2 = "Aucun"
	}
	if (bob3 == "undefined"){
		bob3 = "Aucun"
	}
	if (bob4 == "undefined"){
		bob4 = "Aucun"
	}
	if (bob5 == "undefined"){
		bob5 = "Aucun"
	}

	message.channel.send({embed: {
		color: config.good_color,
		title: "Liste des bobs a capturé:",
		fields: [{
			name: "[1]",
			value: bob1
		},
		{
			name: "[2]",
			value: bob2
		},
		{
			name: "[3]",
			value: bob3
		},
		{
			name: "[4]",
			value: bob4
		},
		{
			name: "[5]",
			value: bob5
		}
		]
	}})

}).catch(error => {
		reject({
			statuscode: error.statusCode,
			message: error.statusMessage
	});
})

}