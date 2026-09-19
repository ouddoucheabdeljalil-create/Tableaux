const prompt = require('prompt-sync')();
let elementNum = parseInt(prompt("combien de numéros souhaitez-vous saisir ?  "));
const tableau = [];

for (let i = 1 ; i <= elementNum ; i ++){
    let element = Number(prompt(`enter les elements ${i}  : `)); 
    tableau.push(element);
}
console.log(tableau);