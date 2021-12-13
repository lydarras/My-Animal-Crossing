// La variable acces_membre est un booléen pour déterminer si on accède à la page d'authenfication (par défaut)
// ou à la page d'inscription
// false = page d'authenfication / true = page d'inscription



function pageMembre(levier){

	if(levier){
		document.getElementsByClassName("titre")[0].innerHTML = "<h2>Inscription</h2>";
		document.getElementById("formulaire-connexion").style.display = "none";
		document.getElementById("bouton-inscription").style.display = "none";
		document.getElementById("formulaire-inscription").style.display = "grid";
		document.getElementById("bouton-retour").style.display = "block";
		document.getElementsByClassName("contenu")[0].style.padding = "2% 5%";
	}

	else{
		document.getElementsByClassName("titre")[0].innerHTML = "<h2>Connecte-toi sur My Animal Crossing et pars collectionner les objets, insectes, poissons, créatures marines et fossiles.</h2>";
		document.getElementById("formulaire-inscription").style.display = "none";
		document.getElementById("bouton-retour").style.display = "none";
		document.getElementById("formulaire-connexion").style.display = "grid";
		document.getElementById("bouton-inscription").style.display = "grid";
		document.getElementsByClassName("contenu")[0].style.padding = "5%";
	}
}

function seconnecter(){
	console.log("Je me connecte");
}

function sinscrire(){
	console.log("Je m'inscris");
}

//La fonction menuBeteDispo concerne l'interaction du menu dans la section bête dispo.
// Cela affichera les stats de la bete en fonction des types de bêtes choisis
// 0 = Insecte / 1 = Poissons / 2 = Créatures Marines
var i = 0;
function menuBeteDispo(choix){
	//document.querySelector("main #bete-dispo #titre #menu-betes-dispo li:nth-child("+choix+") a").style.backgroundColor = "blue";
	for(i = 0;i < 3; i++){
		if (i == (choix-1)){
			document.querySelector("main #bete-dispo .titre #menu-betes-dispo li:nth-child("+(i+1)+") a").style.backgroundColor = "#297E1A";
			document.querySelector("main #bete-dispo .titre #menu-betes-dispo li:nth-child("+(i+1)+") a").style.color = "#FED330";				
		}

		else{
			document.querySelector("main #bete-dispo .titre #menu-betes-dispo li:nth-child("+(i+1)+") a").style.backgroundColor = "#9EE791";
			document.querySelector("main #bete-dispo .titre #menu-betes-dispo li:nth-child("+(i+1)+") a").style.color = "#297E1A";					
		}

		/*if(i == (choix-1)){
			//console.log(document.querySelector("main #bete-dispo #titre #menu-betes-dispo li:nth-child("+choix+") a"));
			document.querySelector("main #bete-dispo #titre #menu-betes-dispo li:nth-child("+choix+") a").style.backgroundColor = "#297E1A";
			document.querySelector("main #bete-dispo #titre #menu-betes-dispo li:nth-child("+choix+") a").style.color = "#FED330";			
		}
		else{
			document.querySelector("main #bete-dispo #titre #menu-betes-dispo li:nth-child("+choix+") a").style.backgroundColor = "#9EE791";
			document.querySelector("main #bete-dispo #titre #menu-betes-dispo li:nth-child("+choix+") a").style.color = "#297E1A";
		}*/
	}

}