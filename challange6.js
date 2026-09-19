const prompt = require('prompt-sync')();
let elementNum = parseInt(prompt("combien de numéros souhaitez-vous saisir ? "));
const tableau = [];
let mult = parseInt(prompt(" écrivez la facture de multiplication : ")) ;
for( let i = 0 ; i < elementNum ; i++){
    let element = Number(prompt(`enter les elements ${i +1} : ` ));
    tableau.push(element);
    var result = tableau[i] * mult ;
    console.log(`${tableau[i]} x ${mult} = ${result}`);
}
