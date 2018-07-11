const got = require('got')
const config = require('./json/config.json')
const queue_url = process.env.QUEUE_URL || process.argv[2]
const bdd = process.env.BDD || process.argv[2]

module.exports.run = async (client, message, args) => {

got.get(bdd, {
	json: true,
}).then(data => {
	var body = data.body;

	if (body[message.author.id] !== undefined){

		function bodyNumber(number) {
			return body[message.author.id].bob[number].number
		}

		if (bodyNumber(0) != "0"){ // 0
			var number0 = 1
			//console.log(number0)
		} else {
			var number0 = 0
			//console.log(number0)
		}
		if (bodyNumber(1) != "0"){ // 1
			var number1 = 1
			//console.log(number1)
		} else {
			var number1 = 0
			//console.log(number1)
		}
		if (bodyNumber(2) != "0"){ // 2
			var number2 = 1
			//console.log(number2)
		} else {
			var number2 = 0
			//console.log(number2)
		}
		if (bodyNumber(3) != "0"){ // 3
			var number3 = 1
			//console.log(number3)
		} else {
			var number3 = 0
			//console.log(number3)
		}
		if (bodyNumber(4) != "0"){ // 4
			var number4 = 1
			//console.log(number4)
		} else {
			var number4 = 0
			//console.log(number4)
		}
		if (bodyNumber(5) != "0"){ // 5
			var number5 = 1
			//console.log(number5)
		} else {
			var number5 = 0
			//console.log(number5)
		}
		if (bodyNumber(6) != "0"){ // 6
			var number6 = 1
			//console.log(number6)
		} else {
			var number6 = 0
			//console.log(number6)
		}
		if (bodyNumber(7) != "0"){ // 7
			var number7 = 1
			//console.log(number7)
		} else {
			var number7 = 0
			//console.log(number7)
		}
		if (bodyNumber(8) != "0"){ // 8
			var number8 = 1
			//console.log(number8)
		} else {
			var number8 = 0
			//console.log(number8)
		}
		if (bodyNumber(9) != "0"){ // 9
			var number9 = 1
			//console.log(number9)
		} else {
			var number9 = 0
			//console.log(number9)
		}
		var result = number0+number1+number2+number3+number4+number5+number6+number7+number8+number9


		message.channel.send({embed: {
			color: 15922601,
			thumbnail: {
				url: message.author.avatarURL
			},
			title: "Profil de " + message.author.username,
			fields: [{
				name: "Votre bob principale:",
				value: body[message.author.id].bob_principale
			},
			{
				name: "Collection:",
				value: result + "/10 bobs capturer"
			}
			]
		}})
	} else {
		return message.channel.send({embed: {
			color: 16406616,
			description: "Vous n'avez pas de compte bober, créer en un !"
		}})
	}

}).catch(error => {
		reject({
			statuscode: error.statusCode,
			message: error.statusMessage
	});
})


} // FIN DU MODULE EXPORTS