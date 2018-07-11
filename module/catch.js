const config = require('./json/config.json')
const queue_url = process.env.QUEUE_URL || process.argv[2]
const bdd = process.env.BDD || process.argv[2]
const got = require('got')

module.exports.run = async (client, message, args) => {

console.log("Catch")
got.get(queue_url, {
	json: true,
}).then(data => {
	var body = data.body;
	if (body[1] != undefined && body[1] != "undefined"){
		console.log(body[1])
		got.get(bdd, {
			json: true,
		}).then(data => {
			var body2 = data.body;

			if (body2[message.author.id] !== undefined){
				var bobCaptured = body[1]
				if (body2[message.author.id] !== undefined){

					if (body2[message.author.id].bob_principale == "Aucun"){
						body2[message.author.id].bob_principale = body[1]
						console.log("Nouveau bob principale")

						var name_to_number = require('./json/name_to_number.json')
						name_to_number = name_to_number[body[1]]
						console.log("name_to_number: " + name_to_number)
						body2[message.author.id].bob[name_to_number].number++

					} else {

						var name_to_number = require('./json/name_to_number.json')
						name_to_number = name_to_number[body[1]]
						console.log("name_to_number: " + name_to_number)
						body2[message.author.id].bob[name_to_number].number++
					}

					body[1] = body[2]
					body[2] = body[3]
					body[3] = "undefined";

					message.channel.send({embed: {
						color: 15922601,
						description: "Vous avez capturer le bob " + bobCaptured + " !"
					}})
				} else {
					message.channel.send({embed: {
						color: 15922601,
						description: "Vous n'avez pas de profil Bober!"
					}})
				}


				// On put tous sa !
				got.put(queue_url, {
					json: true,
					body: body
				})
				got.put(bdd, {
					json: true,
					body: body2
				})
			}
		})

	} else {
		message.channel.send({embed: {
			color: 15922601,
			description: "Il n'y a pas de bob à capturer !"
		}})
	}
}).catch(error => {
		reject({
			statuscode: error.statusCode,
			message: error.statusMessage
	});
})

} // FIN DU MODULE EXPORTS