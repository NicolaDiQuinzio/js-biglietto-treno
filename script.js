/*Il programma dovrà chiedere all'utente il numero di chilometri che vuole percorrere e l'età del passeggero.
Sulla base di queste informazioni dovrà calcolare il prezzo totale del viaggio, secondo queste regole:
il prezzo del biglietto è definito in base ai km (0.21 € al km)
va applicato uno sconto del 20% per i minorenni
va applicato uno sconto del 40% per gli over 65.
L'output dell prezzo finale va messo fuori in forma umana (con massimo due decimali, per indicare centesimi sul prezzo). Questo richiederà un minimo di ricerca. */

/*Creo tutte le variabili di cui ho bisogno*/
let kmpercorsi = prompt("Quanti kilometri devi fare?");
let età = prompt("Quanti anni hai?");
let prezzokm = 0.21;
let scontominorenni = 0.2;
let scontoOver65 = 0.4;

/*Calcolo il prezzo totale*/
let prezzototale = kmpercorsi * prezzokm;

/*Creo la prima condizione che si avvera solo quando il cliente è minorenne*/
if (età < 18) {
  prezzototale = prezzototale - prezzototale * scontominorenni;
}

/*Creo la seconda condizione che si avvera solo quando il cliente è Over 65*/
if (età > 65) {
  prezzototale = prezzototale - prezzototale * scontoOver65;
}

/*Trasformo il prezzototale in forma umana*/
prezzototale = prezzototale.toFixed(2);

/*Stampo il risultato*/
document.write(
  "Il prezzo del tuo biglietto sarà di" + " " + prezzototale + "€"
);
