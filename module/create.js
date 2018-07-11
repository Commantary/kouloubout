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
	if (body[message.author.id] == undefined){
		body[message.author.id] = {
			"username": message.author.username,
			"bob_principale": "Aucun",
			"bob": {
				"0": {
					"number": "0",
					"name": "Pravou"
				},
				"1": {
					"number": "0",
					"name": "Zouzou"
				},
				"2": {
					"number": "0",
					"name": "Lanaine"
				},
				"3": {
					"number": "0",
					"name": "Zbeuboux"
				},
				"4": {
					"number": "0",
					"name": "Tirazux"
				},
				"5": {
					"number": "0",
					"name": "Bigassou"
				},
				"6": {
					"number": "0",
					"name": "Zooux"
				},
				"7": {
					"number": "0",
					"name": "Prank"
				},
				"8": {
					"number": "0",
					"name": "Appelle de Trump"
				},
				"9": {
					"number": "0",
					"name": "Clay U.S.B"
				}
			}
		}

		return message.channel.send({embed: {
			color: 15922601,
			description: "Votre compte bober **" + message.author.username + "** a bien été créer"
		}});

	} else {
		return message.channel.send({embed: {
			color: 16406616,
			description: "Vous avez déjà un compte bober"
		}})
	}
	//Le put
	got.put(bdd, {
		json: true,
		body: body
	})
	console.log(body)
}).catch(error => {
		reject({
			statuscode: error.statusCode,
			message: error.statusMessage
	});
})

} // FIN DU MODULE EXPORTS