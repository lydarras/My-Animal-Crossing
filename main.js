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

// La variante nomBeteDispo concerne le nom de la bête entre la photo et les détails

var nomBeteDispo = document.getElementsByClassName("nom-bete");

// La variante classBeteDispo focalise sur la classe "particularite-bete";

var classBeteDispo = document.getElementsByClassName("particularite-bete");
var i,j;


// Le choix par défaut est le menu Insecte
// Change de couleur comme si le menu insecte est cliqué par défaut
document.querySelector("main #bete-dispo .titre #menu-betes-dispo li:nth-child(1) a").style.backgroundColor = "#297E1A";
document.querySelector("main #bete-dispo .titre #menu-betes-dispo li:nth-child(1) a").style.color = "#FED330";	

// Chez les insectes, ils ont aucune particulairté d'où le display none;
// Les boucles permettent d'excuter l'action sur chaque bestiole et en fonction du nombre

for(i = 0; i < classBeteDispo.length ;i++){
	classBeteDispo[i].style.display = "none";			
}

//La fonction menuBeteDispo concerne l'interaction du menu dans la section bête dispo.
// Cela affichera les stats de la bete en fonction des types de bêtes choisis
// 1 = Insecte / 2 = Poissons / 3 = Créatures Marines

function menuBeteDispo(choix){

	//Cette boucle parcours le menu. S'il est choisi, le fond sera vert foncé avec un texte doré
	for(j = 0;j < 3; j++){
		if (j == (choix-1)){
			document.querySelector("main #bete-dispo .titre #menu-betes-dispo li:nth-child("+(j+1)+") a").style.backgroundColor = "#297E1A";
			document.querySelector("main #bete-dispo .titre #menu-betes-dispo li:nth-child("+(j+1)+") a").style.color = "#FED330";				
		}

		else{
			document.querySelector("main #bete-dispo .titre #menu-betes-dispo li:nth-child("+(j+1)+") a").style.backgroundColor = "#9EE791";
			document.querySelector("main #bete-dispo .titre #menu-betes-dispo li:nth-child("+(j+1)+") a").style.color = "#297E1A";					
		}
	}

	//Pas mal d'inscrutions si le choix n'est pas Insecte
	if(choix != 1){

		//Lorsque le choix est Poissons, la boucle sera excecuté en fonction du nombre de poissons disponibles ce mois-ci
		//et affichera sur chaque poissons leurs tailles
		if(choix == 2){
			for(i = 0; i < classBeteDispo.length ;i++){
				nomBeteDispo[i].innerHTML = "Carangue grosse tête";	
				classBeteDispo[i].style.display = "block";
				classBeteDispo[i].getElementsByTagName("p")[0].innerHTML = "Taille :";
				classBeteDispo[i].getElementsByTagName("p")[1].innerHTML = "Gigantestque";					
			}
		}

		//Idem que Poisson pour les créatures marines sauf que c'est sur la vitese
		if(choix == 3){
			for(i = 0; i < classBeteDispo.length ;i++){
				nomBeteDispo[i].innerHTML = "Crabe araignée-géant";	
				classBeteDispo[i].style.display = "block";
				classBeteDispo[i].getElementsByTagName("p")[0].innerHTML = "Vitesse :";
				classBeteDispo[i].getElementsByTagName("p")[1].innerHTML = "Très Rapide";					
			}
		}
	}
	//Sinon, aucune particularité chez les insectes
	else{
	
		for(i = 0; i < classBeteDispo.length ;i++){
				nomBeteDispo[i].innerHTML = "Capricorne des agrumes";	
				classBeteDispo[i].style.display = "none";			
		}
	}

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