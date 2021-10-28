/* Crea un array vuoto.
Chiedi per 6 volte all’utente di inserire un numero,
se è dispari inseriscilo nell’array */

const arrDispari = [];

let cont = 0; 

while(cont < 6){
    let number = parseInt( prompt('inserire un numero') );

    if(number % 2 == 1){
        arrDispari.push(number);
        
    }

    cont++
}

alert(arrDispari);