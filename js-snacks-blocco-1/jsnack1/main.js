/* Il software deve chiedere per 5 volte all’utente di inserire un numero.
Il programma stampa la somma di tutti i numeri inseriti con for
e opzionalmente con while (modificato)  */

/* let somma = 0;
let num;

for(i=1; i<6; i++){
    num = parseInt( prompt('inserire il numero'));

    somma = somma + num;

}

console.log(somma); */


let somma = 0;
let num;
let count= 0;

while(count < 5){
    num = parseInt( prompt('inserire il numero'));

    somma = somma + num;

    count++

}

alert(somma);