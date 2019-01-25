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



switch(window.location.href){
	case "https://ru8.mpact.tv/tds/index.html": index('[id^="webfx-tree-object"]'); break;
	case "https://ru8.mpact.tv/tds/index_library.html": index('[id^="dijit"]'); break;
	}

function index(idWildCard){
	
	
	chrome.storage.local.get(['position'], function(result) {window.scroll(0,result.position); console.log('Retrieved: ' + result.position); } );
	
	var liens= document.querySelectorAll(idWildCard);
	if (liens.length == 0) { location.reload(true); }

	for (var i = 0; i < liens.length; i++) {
		if (listePierre.includes(liens[i].textContent)){
			liens[i].style.backgroundColor = "lightsteelblue";
			}
		}
	
	window.onbeforeunload = function() { 
		chrome.storage.local.set({'position': window.scrollY}, function(){console.log('Saved: ' + window.scrollY);} ); 
		}

	}



