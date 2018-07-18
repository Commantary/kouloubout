const config = require('./json/config.json')
const ban = process.env.BAN || process.argv[2]
const got = require('got')
const modo = require('./json/modo_sis.json')

module.exports.run = async (client, message, args) => {
console.log("bansis")
if (modo[message.author.id] == undefined) return
if (args[0] == undefined){
	return message.channel.send({embed: {
		color: config.bad_color,
		description: 'Vous devez spécifier un argument !'
	}})
}

got.get(ban, {
	json: true,
}).then(data => {
	var body = data.body;
	console.log(body[args[0]])
	if(body[args[0]] == undefined){
		body[args[0]] = {
			"author_ban": message.author.username
		}
		//Le put
		got.put(ban, {
			json: true,
			body: body
		})
	}

	return message.channel.send({embed: {
		title: "Ban sis",
		color: config.good_color,
		description: "<@" + args[0] + "> a bien été ban du sis"
	}})

}).catch(error => {
	console.log(error)
})



} // FIN DU MODULE EXPORTS