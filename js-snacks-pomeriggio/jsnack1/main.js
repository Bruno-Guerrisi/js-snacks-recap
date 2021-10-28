/* Ogni volta che si clicca un bottone, il nostro programma chiederà un numero di 4 cifre all’utente.
Se l’utente ha inserito un numero corretto, allora il programma calcolerà la somma e le media di tutte le cifre che lo compongono stampandola nel DOM, altrimenti ripeterà la richiesta di inserimento finché non avrà inserito un numero corretto. */

const button = document.getElementById('button');
const sommaDocument = document.querySelector('.somma');
const mediaDocument = document.querySelector('.media');

let num;

let cont = 0;

let arrNum= [];

let somma = 0;

let media;

button.addEventListener('click', function(){

    while (cont < 1){

        num = prompt ('inserire un numero di 4 cifre');

        if( num.length >= 4 ){
            cont=1;
        } else{
            alert('numero non valido inserisci un numero di 4 cifre');
        }

    }

    for( i=0; i<num.length; i++ ){

        arrNum.push(num[i]);
    }

    /* somma */
    for( i=0; i<arrNum.length; i++ ){

        somma = somma + parseInt(arrNum[i]);
    }

    sommaDocument.innerHTML = (`la somma delle cifre del numero inserito è: ${somma}`);

    media = somma / (arrNum.length);

    mediaDocument.innerHTML = (`la media delle cifre del numero inserito è: ${media.toFixed()}`);

});