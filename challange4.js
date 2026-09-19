const prompt = require('prompt-sync')();
let elementNum = parseInt(prompt("combien de numéros souhaitez-vous saisir ? "));
const tableau = [];

 for( let i = 0 ; i < elementNum ; i++){
     let element = Number(prompt(`enter les elements ${i +1}  :`));
    tableau.push(element);
    var max = tableau[0];
    if ( tableau[i] > max){
        max = tableau[i];
    }
 }
 console.log("le plus grand nomber : ", max);
