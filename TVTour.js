var listePierre = [
// ----- Liste  Contenus -----
    "COGIR -Jazz Lebourgneuf", 
    "COGIR -L'Oiseau Bleu",
    "COGIR -Manoir des Générations",
    "Groupe Magistral - Manoir Louis Jolliet",
    "Groupe Magistral - Marie-Clothilde",
    "Groupe Magistral - Seigneurie Salaberry",
    "PATRIMOINE -Manoir Cousineau",
    "PATRIMOINE -Manoir St-Laurent",
    "Place St-Moritz",
    "St-Jean Eudes",
	"SÉLECTION -IDS",
	"SÉLECTION -Jardin des Sources",
	"SÉLECTION -La Roseraie",
	"SÉLECTION -Lévis",
	"Groupe Résidences LRM - Château Royal",
	"Groupe Édifio",
	"Groupe Édifio - Alizéa",
	"Groupe Édifio - Domaine Lanaudière",
	"Groupe Édifio - Domaine Le Roussillon",
	"Groupe Édifio - Jardins du Château",
	"Groupe Édifio - L'Orée du Faubourg",
	"Groupe Édifio - Manoir Fontainebleau",
	"Groupe Édifio - Manoir Le Buckingham",
	"SÉLECTION -Sélection Laval",
	"SÉLECTION -West Island",
	"Cardinal Roy",
// ----- Liste Listes -----
	"COGIR -Manoir les Générations",
	"Patrimoine  -Manoir St-Laurent",
	"Patrimoine -Manoir Cousineau",
	"St-Jean-Eudes",
	"Sélection -La Roseraie ",
	"Sélection -Lévis",
	"Sélection -Jardin des Sources",
	"Sélection -Île des Soeurs ",
	"Groupe Résidences LRM - Le Château Royal"
];

var idWildCard;
if (window.location.href == "https://ru8.mpact.tv/tds/index.html") 
	idWildCard = '[id^="webfx-tree-object"]';
if (window.location.href == "https://ru8.mpact.tv/tds/index_library.html")
	idWildCard = '[id^="dijit"]';

var liens= document.querySelectorAll(idWildCard);

for (var i = 0; i < liens.length; i++) {
    if (listePierre.includes(liens[i].textContent)){
        liens[i].style.backgroundColor = "lightsteelblue";
    }
}


// Ajouté les listes de diffusions
// Ajouté la détection du mode d'affichage et l'ajustement
// Retour au dossier ouvert
