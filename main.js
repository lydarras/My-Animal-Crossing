// La variable acces_membre est un booléen pour déterminer si on accède à la page d'authenfication (par défaut)
// ou à la page d'inscription
// false = page d'authenfication / true = page d'inscription
var acces_membre;
document.getElementById("formulaire-inscription").style.display = "none";

function pageMembre(levier){
	if(levier){
		console.log(levier);
		document.getElementById("titre").innerHTML = "<h2>Inscription</h2>";
		document.getElementById("formulaire-connexion").style.display = "none";
		document.getElementById("formulaire-inscription").style.display = "grid";
		document.getElementById("contenu").style.padding = "2% 5%";
	}

	else{
		console.log(levier);
		document.getElementById("titre").innerHTML = "<h2>Connecte-toi sur My Animal Crossing et pars collectionner les objets, insectes, poissons, créatures marines et fossiles.</h2>";
		document.getElementById("formulaire-connexion").style.display = "grid";
		document.getElementById("formulaire-inscription").style.display = "none";
		document.getElementById("contenu").style.padding = "5%";
	}
}

function seconnecter(){
	console.log("Je me connecte");
}

function sinscrire(){
	console.log("Je m'inscris");
}