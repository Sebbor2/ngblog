angular.module("Ngblog")
.controller("BlogCtrl", function() {
		this.listeArticle = false;
		this.editArticle = false;
		this.showContact = false;

		this.newArticle = {};

		this.articles = [{
			id: 0,
			title: "Deadpool 2 : Le héros « badass » est de retour dans un teaser déjanté",
			content: "<b>Deadpool</b>, le ninja des temps modernes avec son costume 100% badass revient pour notre plus grand bonheur. A quelques mois de la sortie du nouveau film, nous avons pu voir le teaser et il est complètement dingue. Dans une vidéo de deux minutes, le héros totalement barré nous montre son improbable talent pour la peinture."
		},{
			id: 1,
			title: "Tesla vient de sortir une batterie élégante pour smartphone",
			content: "Tesla, la société créée par le géant Elon Musk vient de sortir une nouvelle batterie portable élégante à destination des propriétaires de smartphones. Fonctionnelle avec les mobiles iPhone et Android, la Tesla Powerbank est équipée de plusieurs choses intéressantes notamment d’une connexion USB, d’une connexion micro USB."
		},{
			id: 4,
			title: "Agneau sauté à la thaï : la recette aux riches parfums du SIam",
			content: "<b>Agneau sauté à la thaï : voilà une bonne recette simple et rapide pour partir en Thaïlande dans votre assiette ! Découvrez la recette de l’agneau sauté thaï.</b> C’est certainement pas un scoop pour ceux qui suivent ce blog depuis quelques temps, mais ici on est super fans des saveurs thaïlandaises. La citronnelle, la coriandre, les piments et tout ça : on adore. Et on est aussi fans de l’agneau, avec sa viande moelleuse et bien parfumée (allez donc voir notre agneau de 7 heures). Donc en toute logique, ça n’était qu’une question de temps avant que je vous propose ici une recette de wok d’agneau aux saveurs thaïlandaises. D’autant plus que sans surprise, l’agneau fonctionne à merveille avec les saveurs épicées et la fraîcheur délicate et subtile des ingrédients thaïlandais. <div><img src=\"http://couteaux-et-tirebouchons.com/wp-content/uploads/2017/11/agneau-saute-thai-550x366.jpg\"></img></div>L’idée de cette recette est toute simple mais elle est différente des recettes thaï les plus courantes avec l’agneau. Bah oui, souvent en Thaïlande l’agneau est servi mijoté, sous forme de curry notamment. Un peu comme dans l’agneau au curry vert ou le curry massaman d’agneau. Là au contraire, il s’agit de faire sauter au wok (ou à la poêle, selon ce que vous avez) de petits morceaux d’agneau (épaule ou gigot par exemple). On rajoute quelques petits légumes et on parfume le tout avec des condiments thaï, plein de parfums délicieux. Ensuite, on sert le tout avec du riz et des herbes et une petite tranche de citron vert, et vous avez la recette parfaite pour un plat fait en 20 minutes et qui mettra tout le monde d’accord."
		},{
			id: 5,
			title: "Les Tuche 3",
			content: "Jeff Tuche, le patriarche le plus déjanté de France se demande pourquoi il n’y a pas le TGV dans sa charmante ville de Bouzolles. Il demande des explications au président, mais celui-ci ne lui répondra pas. Devant cette absence de réponse, Jeff va donc prendre la décision irréversible de se présenter à l’élection et va même la gagner. Il ne s’y attendait pas, mais il est maintenant chef de l’état et des armées. Il devra donc assumer des responsabilités qu’il n’est pas prêt d’oublier."
		},{
			id: 8,
			title: "Algorithme : Votre portrait dessiné par un robot",
			content: "INNOVATION – Vous avez envie d’avoir une décoration originale chez vous ? Si c’est le cas, ne bougez pas d’ici car je vais vous parler d’un service assez cool qui s’appelle Jojo le robot. Pourquoi le nom Jojo ? Je n’en sais rien, mais ce robot artiste est plutôt sympa car il est capable de réaliser un portrait de vous unique en son genre. Rendu possible grâce à un algorithme, le robot artiste donne tout ce qu’il a pour vous offrir de l’originalité."
		},{
			id: 9,
			title: "Nintendo Switch : Il est temps pour toi de l’acheter jeune Padawan",
			content: "Lorsqu’une nouvelle console est lancée, il y a toujours une période immédiatement après le lancement, pendant laquelle de nombreux joueurs attendent de savoir si la console en vaut vraiment la peine."
		}];

		this.removeArticle = function(id) {
			//let index = this.articles.findIndex((item) => item.id === id);
			this.articles.splice(this.getIndex(id),1);
			this.artBis.splice(this.getIndex(id),1);
		};

		this.recherche = "";
		this.razRecherche = function() {
			console.log(this.recherche);
			this.recherche = "";
		};

		this.getIndex = function (id) {
			return this.articles.findIndex((item) => item.id === id);
		}

		// retourne l'Id du dernier article du tableau et si aucun article retourne -1
		this.getLastId = function () {
			if (this.articles.length !=0 ) {
				return this.articles[this.articles.length-1].id;
			} else {
				return -1;
			}
		};

		this.showListeArticle = function() {
			this.listeArticle = true;
			this.editArticle = false;
			this.showContact = false;
		};
		var CONST_CHAR_MAX = 200;
		var CONST_END_ART = ' <b>... Lire la suite ...</b>'

		this.artBis = [{id:0, charMax : CONST_CHAR_MAX, endArt: CONST_END_ART},
						{id:1, charMax : CONST_CHAR_MAX, endArt: CONST_END_ART},
						{id:4, charMax : CONST_CHAR_MAX, endArt: CONST_END_ART},
						{id:5, charMax : CONST_CHAR_MAX, endArt: CONST_END_ART},
						{id:8, charMax : CONST_CHAR_MAX, endArt: CONST_END_ART},
						{id:9, charMax : CONST_CHAR_MAX, endArt: CONST_END_ART}]

		this.afficherArticleComplet = function (id) {
			let index = this.getIndex(id);
			if (this.articles[index].content.length > CONST_CHAR_MAX) {
				if (this.artBis[index].charMax) {
					this.artBis[index].charMax = undefined;
					this.artBis[index].endArt = '';	
				} else {
					this.artBis[index].charMax = CONST_CHAR_MAX;
					this.artBis[index].endArt = CONST_END_ART;
				}
			}
		};

		this.editerArticle = function(article) {
			this.listeArticle = false;
			this.showContact = false;
			this.editArticle = true;
			if (article) {
				console.log(article);
				this.newArticle = article;
			} else {
				this.newArticle.id = this.getLastId() +1 | 0;
			}
		};

		this.validateArticle = function() {
			if (this.articles[this.getIndex(this.newArticle.id)].id === this.newArticle.id) {
				// ecraser le précédent article
				console.log("Article déjà existant, mise a jour OK");
				if (this.newArticle.content.length > CONST_CHAR_MAX ) {
					this.artBis[this.getIndex(this.newArticle.id)] = ({id: this.newArticle.id, charMax : CONST_CHAR_MAX, endArt: CONST_END_ART});	
				} else {
					this.artBis[this.getIndex(this.newArticle.id)] = ({id: this.newArticle.id, charMax : undefined, endArt: ''});
				}
			} else {
				this.articles.push(this.newArticle);
				if (this.newArticle.content.length > CONST_CHAR_MAX ) {
					this.artBis.push({id: this.newArticle.id, charMax : CONST_CHAR_MAX, endArt: CONST_END_ART});	
				} else {
					this.artBis.push({id: this.newArticle.id, charMax : undefined, endArt: ''});
				}
			}
			
			this.newArticle = {};
			this.listeArticle = false;
			this.editArticle = false;
			this.showContact = false;
		};

		this.razForm = function() {
			this.newArticle.title ="";
			this.newArticle.content ="";
		};

		this.contact = function () {
			this.listeArticle = false;
			this.editArticle = false;
			this.showContact = true;
		};

		this.log = function() {
			console.log ("listeArticle = " + this.listeArticle);
			console.log ("showContact = " + this.showContact);
			console.log ("editArticle = " + this.editArticle);
			console.log ("articles = " + this.articles);
			console.log ("newArticle.id = " + this.newArticle.id);
		};

		this.optionsTinyMce = {
			language: "fr_FR",
			plugins: 'image',
			statusbar: false,
			menubar: false,
			toolbar: 'undo redo | styleselect | bold italic | emoticons | image',
			height: 200
		};

})
.filter("SurbrillanceRecherche", function() {
	return function(input, recherche) {
		if(recherche) {
			return input.replace(new RegExp("(" + recherche + ")", "gi"),"<span class='surbrillanceRecherche'>$1</span>");
		}
		return input;
	}
});
