/* Crea due array che hanno un numero di elementi diversi.
Aggiungi elementi casuali all’array che ha meno elementi,
fino a quando ne avrà tanti quanti l’altro. */

const arrayUno = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const arrayDue = [1, 2, 3, 4, 5, 6];


while(arrayUno.length !== arrayDue.length){

    if(arrayUno.length < arrayDue.length){

        arrayUno.push(1);

    }else{

        arrayDue.push(1);

    }

}
console.log(arrayUno);
console.log(arrayDue);

