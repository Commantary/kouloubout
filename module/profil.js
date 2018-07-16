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
		} else {
			var number0 = 0
		}
		if (bodyNumber(1) != "0"){ // 1
			var number1 = 1
		} else {
			var number1 = 0
		}
		if (bodyNumber(2) != "0"){ // 2
			var number2 = 1
		} else {
			var number2 = 0
		}
		if (bodyNumber(3) != "0"){ // 3
			var number3 = 1
		} else {
			var number3 = 0
		}
		if (bodyNumber(4) != "0"){ // 4
			var number4 = 1
		} else {
			var number4 = 0
		}
		if (bodyNumber(5) != "0"){ // 5
			var number5 = 1
		} else {
			var number5 = 0
		}
		if (bodyNumber(6) != "0"){ // 6
			var number6 = 1
		} else {
			var number6 = 0
		}
		if (bodyNumber(7) != "0"){ // 7
			var number7 = 1
		} else {
			var number7 = 0
		}
		if (bodyNumber(8) != "0"){ // 8
			var number8 = 1
		} else {
			var number8 = 0
		}
		if (bodyNumber(9) != "0"){ // 9
			var number9 = 1
		} else {
			var number9 = 0
		}
		if (bodyNumber(10) != "0"){ // 10
			var number10 = 1
		} else {
			var number10 = 0
		}
		if (bodyNumber(11) != "0"){ // 10
			var number11 = 1
		} else {
			var number11 = 0
		}
		if (bodyNumber(12) != "0"){ // 10
			var number12 = 1
		} else {
			var number12 = 0
		}
		if (bodyNumber(13) != "0"){ // 10
			var number13 = 1
		} else {
			var number13 = 0
		}
		var result = number0+number1+number2+number3+number4+number5+number6+number7+number8+number9+number10+number11+number12+number13


		message.channel.send({embed: {
			color: 15922601,
			thumbnail: {
				url: message.author.avatarURL
			},
			title: "Profil bober de " + message.author.username,
			fields: [{
				name: "Pseudo:",
				value: body[message.author.id].username
			},
			{
				name: "Votre bob principale:",
				value: body[message.author.id].bob_principale
			},
			{
				name: "Collection:",
				value: result + "/14 bobs capturer"
			},
			{
				name: "Argent:",
				value: body[message.author.id].argent + " $"
			},
			{
				name: "Ballz:",
				value: body[message.author.id].ballz + " ballz restantes"
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