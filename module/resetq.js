const request = require('request');
const got = require('got')
const queue = require("./json/queue.json");
const config = require('./json/config.json');
const queue_url = process.env.QUEUE_URL || process.argv[2]
const bdd = process.env.BDD || process.argv[2]

module.exports.run = async (client, message, args) => {
	console.log("ResetQueue")

	if (message.author.id == "214846601066315776"){
		console.log("effectuer")
		got.get(queue_url, {
			json: true,
		}).then(data => {
			var body = data.body;

			console.log(body)
			// Variables
			body = {
				body[1] = undefined;
				body[2] = undefined;
				body[3] = undefined;
			}

			//Le put
			got.put(queue_url, {
				json: true,
				body: body
			})
		}).catch(error => {
				reject({
					statuscode: error.statusCode,
					message: error.statusMessage
			});
		})
	} else {
		console.log("echouer")
	}

} // FIN DU MODULE EXPORTS