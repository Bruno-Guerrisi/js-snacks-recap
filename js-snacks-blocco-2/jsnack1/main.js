/* Inserisci un numero, se è pari stampa il numero,
se è dispari stampa il numero successivo */

let num = parseInt( prompt('inserire un numero') );

if(num % 2 == 0){

    alert(`il numero inserito è: ${num}`);

}
else{

    num = num + 1;

    alert(`il numero inserito era dispari, dunque il numero visualizzato sarà: ${num}`);

}