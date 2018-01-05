angular.module("Ngblog")
.controller("BlogCtrl", function($scope) {
		$scope.nbArticles = 0;
		$scope.listeArticle = false;

		$scope.articles = [{
			id: 0,
			title: "Deadpool 2 : Le héros « badass » est de retour dans un teaser déjanté",
			content: "<b>Deadpool</b>, le ninja des temps modernes avec son costume 100% badass revient pour notre plus grand bonheur. A quelques mois de la sortie du nouveau film, nous avons pu voir le teaser et il est complètement dingue. Dans une vidéo de deux minutes, le héros totalement barré nous montre son improbable talent pour la peinture."
		},{
			id: 1,
			title: "Tesla vient de sortir une batterie élégante pour smartphone",
			content: "Tesla, la société créée par le géant Elon Musk vient de sortir une nouvelle batterie portable élégante à destination des propriétaires de smartphones. Fonctionnelle avec les mobiles iPhone et Android, la Tesla Powerbank est équipée de plusieurs choses intéressantes notamment d’une connexion USB, d’une connexion micro USB."
		},{
			id: 2,
			title: "Algorithme : Votre portrait dessiné par un robot",
			content: "INNOVATION – Vous avez envie d’avoir une décoration originale chez vous ? Si c’est le cas, ne bougez pas d’ici car je vais vous parler d’un service assez cool qui s’appelle Jojo le robot. Pourquoi le nom Jojo ? Je n’en sais rien, mais ce robot artiste est plutôt sympa car il est capable de réaliser un portrait de vous unique en son genre. Rendu possible grâce à un algorithme, le robot artiste donne tout ce qu’il a pour vous offrir de l’originalité…"
		},{
			id: 3,
			title: "Les Tuche 3",
			content: "Jeff Tuche, le patriarche le plus déjanté de France se demande pourquoi il n’y a pas le TGV dans sa charmante ville de Bouzolles. Il demande des explications au président, mais celui-ci ne lui répondra pas. Devant cette absence de réponse, Jeff va donc prendre la décision irréversible de se présenter à l’élection et va même la gagner. Il ne s’y attendait pas, mais il est maintenant chef de l’état et des armées. Il devra donc assumer des responsabilités qu’il n’est pas prêt d’oublier."
		},{
			id: 4,
			title: "Nintendo Switch : Il est temps pour toi de l’acheter jeune Padawan",
			content: "Lorsqu’une nouvelle console est lancée, il y a toujours une période immédiatement après le lancement, pendant laquelle de nombreux joueurs attendent de savoir si la console en vaut vraiment la peine."
		}];

		$scope.removeArticle = function(id) {
			let index = $scope.articles.findIndex((item) => item.id === id);
			$scope.articles.splice(index,1);
		};

		$scope.recherche = "";
		$scope.razRecherche = function() {
			$scope.recherche = "";
		}
})
.filter("SurbrillanceRecherche", function() {
	return function(input, recherche) {
		if(recherche) {
			return input.replace(new RegExp("(" + recherche + ")", "gi"),"<span class='surbrillanceRecherche'>$1</span>")
		}
		return input;
	}
});
