const prompt = require('prompt-sync')();
const elementNum = parseInt(prompt("combien de numéros souhaitez-vous saisir ?"));
const tableau1 = [] ;
const tableau2 = [] ;
for ( let i = 0 ; i < elementNum ; i++){
    let element = Number(prompt(`enter les elements ${i +1} : ` ));
    tableau1.push(element);
    tableau2.push(tableau1);
}
console.log(`tableau 1 : ${tableau1}`);
console.log(`tableau 2 : ${tableau1}`);