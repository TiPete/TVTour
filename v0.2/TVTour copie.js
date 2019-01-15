var listePierre = [
// ----- Liste  Contenus -----
    "COGIR -Jazz Lebourgneuf", 
    "COGIR -L'Oiseau Bleu",
    "COGIR -Le Renoir",
    "COGIR -Le St-Patrick ",
    "COGIR -Manoir des Générations",
    "COGIR -Manoir Outremont",
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
// ----- Liste Listes -----
	"COGIR -Manoir les Générations",
	"Patrimoine  -Manoir St-Laurent",
	"Patrimoine -Manoir Cousineau",
	"St-Jean-Eudes",
	"Sélection -La Roseraie",
	"Sélection -Lévis",
	"Sélection -Jardin des Sources",
	"Sélection -Île des Soeurs "
];

var liens= document.querySelectorAll('[id^="webfx-tree-object"]');

for (var i = 0; i < liens.length; i++) {
    if (listePierre.includes(liens[i].textContent)){
        liens[i].style.backgroundColor = "lightsteelblue";
    }
}



