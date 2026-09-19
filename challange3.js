const prompt = require('prompt-sync')();
let elementNum = parseInt(prompt("combien de numéros souhaitez-vous saisir ? "));
const tableau = [];
let result = 0 ;
for( let i = 0 ; i < elementNum ; i++){
    let element = Number(prompt(`enter les elements ${i + 1}  :`));
    tableau.push(element);
    result = result + tableau[i];
    }
console.log(tableau);
console.log(result);