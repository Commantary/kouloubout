const config = require('./json/config.json')
const queue_url = process.env.QUEUE_URL || process.argv[2]
const bdd = process.env.BDD || process.argv[2]
const money = process.env.MONEY || process.argv[2]
const bob = require('./json/bob.json')
const got = require('got')

module.exports.run = (client, message, args) => {
console.log("Reward 1")

got.get(bdd, {
	json: true,
}).then(data => {
	var bodyBdd = data.body;
	console.log(bodyBdd[message.author.id].canTakeArgent)

	got.get(money, {
		json: true,
	}).then(data => {
		var bodyMoney = data.body;

		if (bodyBdd[message.author.id].canTakeArgent !== "false" && Date.now() > bodyMoney[message.author.id].time){

			bodyBdd[message.author.id].argent += 60
			bodyBdd[message.author.id].canTakeArgent = "false"

			if (bodyMoney[message.author.id] == undefined){
				bodyMoney[message.author.id] = {
					"time": "",
					"username": message.author.username,
					"heure": Date.getHours()
				}
			}

			bodyMoney[message.author.id].time = Date.now() + 36000 * 1000 // 36000
			//Le put
			got.put(bdd, {
				json: true,
				body: bodyBdd
			})
			//Le put
			got.put(money, {
				json: true,
				body: bodyMoney
			})
			message.channel.send({embed: {
				color: config.good_color,
				description: "Vous venez de récupérer 60$, vous devez attendre 10 heures"
			}})

		} else {

			message.channel.send({embed: {
				color: config.bad_color,
				description: "Vous avez déjà récuperer votre argent vous devez attendre quelques heures et quelques minutes"
			}})
		}

	})

}).catch(error => {
		reject({
			statuscode: error.statusCode,
			message: error.statusMessage
	});
})

}