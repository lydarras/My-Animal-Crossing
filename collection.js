// La variable acces_membre est un booléen pour déterminer si on accède à la page d'authenfication (par défaut)
// ou à la page d'inscription
// 1 = page d'inscription / 2 = page d'oubli de MDP / 3 = page d'authenfication / 4 = page de modification

function pageMembre(page){

	if(page == 1){
		document.getElementsByClassName("titre")[1].innerHTML = "<h2>Inscription</h2>";
		document.getElementById("formulaire-connexion").style.display = "none";
		document.getElementById("bouton-inscription").style.display = "none";
		document.getElementById("formulaire-inscription").style.display = "grid";
		document.getElementById("bouton-retour").style.display = "block";
	}

	if(page == 2){
		document.getElementsByClassName("titre")[1].innerHTML = "<h2>Modifier le mot de passe</h2>";
		document.getElementById("formulaire-connexion").style.display = "none";
		document.getElementById("bouton-inscription").style.display = "none";
		document.getElementById("mdp-oublie").style.display = "grid";
		document.getElementById("bouton-retour").style.display = "block";
	}

	if(page == 3){
		document.getElementsByClassName("titre")[1].innerHTML = "<h2>Connecte-toi sur My Animal Crossing et pars collectionner les objets, insectes, poissons, créatures marines et fossiles.</h2>";
		document.getElementById("formulaire-inscription").style.display = "none";
		document.getElementById("mdp-oublie").style.display = "none";
		document.getElementById("bouton-retour").style.display = "none";
		document.getElementById("formulaire-connexion").style.display = "grid";
		document.getElementById("bouton-inscription").style.display = "grid";
	}
	if(page == 4){
		document.getElementsByClassName("titre")[1].innerHTML = "<h2>Modification de profil</h2>";
		document.getElementById("identite-membre").style.display = "none";
		document.getElementById("formulaire-modification").style.display = "grid";
		document.getElementById("bouton-retour").style.display = "block";

	}
	if(page == 5){
		document.getElementsByClassName("titre")[1].innerHTML = "<h2>Mon passeport</h2>";
		document.getElementById("formulaire-modification").style.display = "none";
		document.getElementById("bouton-retour").style.display = "none";
		document.getElementById("identite-membre").style.display = "grid";
	}
}

function seconnecter(){
	console.log("Je me connecte");
}

function sinscrire(){
	console.log("Je m'inscris");
}

function affichePopUp(texte){
	if((texte == "A propos") || (texte == "Mentions légales")){
		document.getElementById("popup").style.display = "block";
		document.getElementsByTagName("h2")[0].innerHTML = texte;
		document.getElementById("formulaire-contact").style.display = "none";
		document.getElementsByClassName("propos-mentions")[0].style.display = "block";
	}
	else{
		document.getElementById("popup").style.display = "block";
		document.getElementsByTagName("h2")[0].innerHTML = texte;
		document.getElementsByClassName("propos-mentions")[0].style.display = "none";
		document.getElementById("formulaire-contact").style.display = "flex";
	}
}

function fermerFenetre(){
	document.getElementById("popup").style.display = "none";
}