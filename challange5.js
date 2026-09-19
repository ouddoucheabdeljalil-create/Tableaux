const prompt = require('prompt-sync')();
let elementNum = parseInt(prompt("combien de numéros souhaitez-vous saisir ? "));
const tableau = [];

 for( let i = 0 ; i < elementNum ; i++){
     let element = Number(prompt(`enter les elements ${i +1}  :`));
    tableau.push(element);
    var min = tableau[0];
    if ( tableau[i] < min){
        min = tableau[i];
    }
 }
 console.log("le plus petit nomber : ", min);
