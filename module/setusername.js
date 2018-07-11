const config = require('./json/config.json')
const queue_url = process.env.QUEUE_URL || process.argv[2]
const bdd = process.env.BDD || process.argv[2]
const bob = require('./json/bob.json')
const got = require('got')

module.exports.run = async (client, message, args) => {
console.log("create")
got.get(bdd, {
	json: true,
}).then(data => {
	var body = data.body;

	if (args[0] !== undefined){
		if (body[message.author.id] !== undefined){

			username = message.content.substr(13)
			body[message.author.id].username = username

			message.channel.send({embed: {
				color: 15922601,
				description: "Votre nouveau pseudo bober est: **" + username + "**"
			}})

		} else {
			return message.channel.send({embed: {
				color: 16406616,
				description: "Vous n'avez pas de compte bober"
			}})
		}
	} else {
		return message.channel.send({embed: {
			color: 16406616,
			description: "Vous devez mettre un pseudo à définir"
		}})
	}

	//Le put
	got.put(bdd, {
		json: true,
		body: body
	})
}).catch(error => {
		reject({
			statuscode: error.statusCode,
			message: error.statusMessage
	});
})

} // FIN DU MODULE EXPORTS