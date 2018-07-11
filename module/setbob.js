const got = require('got')
const config = require('./json/config.json')
const queue_url = process.env.QUEUE_URL || process.argv[2]
const bdd = process.env.BDD || process.argv[2]
const name_to_number = require('./json/name_to_number_lower.json')

module.exports.run = async (client, message, args) => {

got.get(bdd, {
	json: true,
}).then(data => {
	var body = data.body;

	if (args[0] !== undefined){
		console.log(1)
		if (body[message.author.id] !== undefined){
			var lowerCaseBob = message.content.substr(8).toLowerCase()

			console.log(message.content.substr(8).toLowerCase())
			if (name_to_number[lowerCaseBob] !== undefined){
				console.log(3)

				body[message.author.id].bob_principale = message.content.substr(8)
			}
		}
	}


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