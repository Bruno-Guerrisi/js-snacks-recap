/* Crea un array di numeri interi
e fai la somma di tutti gli elementi che sono in posizione dispari */

const list = [54, 69, 58, 452, 658, 65, 23, 48, 96, 75, 62];

const button = document.getElementById('button');
let somma = 0;

button.addEventListener('click', function(){

    for(i=0; i<list.length; i++){

        console.log(i);

        if(i % 2 == 1){
            
            somma = somma + list[i];
            
        }
    }
    
    alert(somma);
});