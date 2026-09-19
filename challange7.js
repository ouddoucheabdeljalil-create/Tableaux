const prompt = require('prompt-sync')();
let elementNum = parseInt(prompt("combien de numéros souhaitez-vous saisir ?"));
const tableau = [] ;
for(let i = 0 ; i < elementNum ; i++){
    let element = Number(prompt(`enter les elements ${i +1}  :`));
    tableau.push(element);
}
for ( let i = 0 ; i < elementNum  ; i++ ){
    for( let j = 0 ; j < elementNum - i ; j++ ){
        if (tableau[j] > tableau[j+1]){
            let x = tableau[j+1];
            tableau[j+1] = tableau[j] ;
            tableau[j] = x ;
        }
    }
}
console.log(tableau);


