/* Generatore di “nomi cognomi” casuali: prendendo una lista di nomi e una
lista di cognomi, Gatsby vuole generare una falsa lista di 3 invitati */


const button = document.getElementById('button');
let nome;
let cognome;
let invitato;

const nomeInvitati = ['Paolo',
                    'Rocco',
                    'Bruno',
                    'Mauro',
                    'Gaia',
                    'Noemi',
                    'Raffaele',
                    'Giuseppe',
                    'Fabio',
                    'Luigi'];

const cognomiInvitati = ['Rossi',
                        'Ferrari',
                        'Russo',
                        'Bianchi',
                        'Romano',
                        'Gallo',
                        'Costa',
                        'Fontana',
                        'Marini',
                        'Farina'];

button.addEventListener('click', function(){

    for(i=0; i < 3; i++) {
        
        nome = Math.floor(Math.random() * 10) +1;
        cognome = Math.floor(Math.random() * 10) +1;
        
        
        console.log(`invitato/a: ${nomeInvitati[nome]} ${cognomiInvitati[cognome]}`)
        
    }
});
