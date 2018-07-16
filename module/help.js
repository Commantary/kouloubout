const config = require('./json/config.json')
const queue_url = process.env.QUEUE_URL || process.argv[2]
const bdd = process.env.BDD || process.argv[2]
const bob = require('./json/bob.json')
const got = require('got')

module.exports.run = async (client, message, args) => {

message.author.send({embed: {
	color: 16406658,
	fields: [{
		name: "Help",
		value: "Ce bot a été créé par Commountary l'outari#3103 \n\n :`create` Pour créer un compte Bober \n :`catch` Capture un bob \n :`profil` Affiche votre profil bober \n :`queuelist` Affiche les bobs qui peuvent être capturé \n :`setbob` **[NOM DE BOB]** Pour changer votre bob principale\n :`setusername` **[NOUVEAU PSEUDO]** Change votre pseudo bober\n :`sis` Pour parler avec d'autre serveurs \n :`translate` **[NOM DE POKEMON FR]** Traduit un nom de pokémon FR en EN\n :`collections` Permet de voir la liste des bobs\n\nA bientôt ! N'hésitez pas à me parler des bugs ou si vous avez des idées à m'en parler."
	}]
}})

}