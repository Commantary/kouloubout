const config = require('./json/config.json')
const queue_url = process.env.QUEUE_URL || process.argv[2]
const bdd = process.env.BDD || process.argv[2]
const got = require('got')

module.exports.run = async (client, message, args) => {

console.log("Catch de: " + message.author.username)
got.get(queue_url, {
	json: true,
}).then(data => {
	var body = data.body;
	if (body[message.guild.id][1] != "undefined"){
		console.log(body[message.guild.id][1])
		got.get(bdd, {
			json: true,
		}).then(data => {
			var body2 = data.body;

			if (body2[message.author.id] !== undefined){

				var bobCaptured = body[message.guild.id][1]

				if (body2[message.author.id] !== undefined){

					if (body[message.guild.id] !== undefined){

							if (body2[message.author.id].ballz > 0){

								if (body2[message.author.id].bob_principale == "Aucun"){

									body2[message.author.id].bob_principale = body[1]
									console.log("Nouveau bob principale")

									var name_to_number = require('./json/name_to_number.json')
									name_to_number = name_to_number[bodyGuild[1]]
									console.log("name_to_number: " + name_to_number)
									body2[message.author.id].bob[name_to_number].number++

								} else {

									var bodyGuild = body[message.guild.id]
									var name_to_number = require('./json/name_to_number.json')
									name_to_number = name_to_number[bodyGuild[1]]
									console.log("name_to_number: " + name_to_number)
									body2[message.author.id].bob[name_to_number].number++
								}

								var bodyGuild = body[message.guild.id]
								bodyGuild[1] = bodyGuild[2]
								bodyGuild[2] = bodyGuild[3]
								bodyGuild[3] = bodyGuild[4]
								bodyGuild[4] = bodyGuild[5]
								bodyGuild[5] = "undefined";

								bodyBdd[message.author.id].ballz--

								message.channel.send({embed: {
									color: 15922601,
									description: "Vous avez capturer le bob " + bobCaptured + " !"
								}})

								// On put tous sa !
								got.put(queue_url, {
									json: true,
									body: body
								})
								got.put(bdd, {
									json: true,
									body: body2
								})

							} else {
								return message.channel.send({embed: {
									color: config.bad_color,
									description: "Vous n'avez pas asser de ballz"
								}})
							}

					}

				} else {
					message.channel.send({embed: {
						color: 15922601,
						description: "Vous n'avez pas de profil Bober!"
					}})
				}

			} else {
				message.channel.send({embed: {
					color: 15922601,
					description: "Vous n'avez pas de profil Bober!"
				}})
			}
		})

	} else {
		message.channel.send({embed: {
			color: 15922601,
			description: "Il n'y a pas de bob à capturer !"
		}})
	}
}).catch(error => {
	console.log(error)
})

} // FIN DU MODULE EXPORTS