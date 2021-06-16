/**
 * Snack 1 
 * Creare un array di oggetti: 
 * Ogni oggetto descriverà una bici da corsa con le seguenti proprietà: 
 * nome e peso. 
 * Stampare a schermo la bici con peso minore utilizzando destructuring e template literal
 */

// Array di oggetti
const bici = [
    {
        nome: 'Mont',
        peso: 12
    },
    {
        nome: 'Scoot',
        peso: 5
    },
    {
        nome: 'Speed',
        peso: 8
    }
];

/**
 * Metodo 1
 */
let minPeso = bici[0];

for(let i = 1; i < bici.length; i++){
    if(bici[i].peso < minPeso.peso){
        minPeso = bici[i];
    }
}

//Utilizziamo il destructuring dell'oggetto minPeso
const {nome, peso} = minPeso;

console.log(nome, peso);

//Mostriamo i valori delle costanti tramite template literal backticks ``
const ul = 
`<ul>
    <li>Nome della bici è ${nome}</li>
    <li>Il suo peso è di ${peso} Kg</li>
</ul>`; 

document.getElementById('bici').innerHTML += ul;





/**
 * Snack2
 * Creare un array di oggetti di squadre di calcio. 
 * Ogni squadra avrà diverse proprietà: nome, punti fatti, falli subiti. 
 * Nome sarà l’unica proprietà da compilare, le altre saranno tutte settate a 0. 
 * Generare numeri random al posto degli 0 nelle proprietà: Punti fatti e falli subiti. 
 * (Utilizzate le arrow function). Infine usando la destrutturazione creiamo un nuovo array di oggetti i cui elementi sono sempre degli oggetti che contengono solo nomi e falli subiti. 
 * Stampiamo tutto in console.
 */

const squadre = [
    {
        nome: 'Juve',
        puntiFatti: 0,
        falliSubiti: 0
    },
    {
        nome: 'Italia',
        puntiFatti: 0,
        falliSubiti: 0
    },
    {
        nome: 'Roma',
        puntiFatti: 0,
        falliSubiti: 0
    }
];

const newSquadre = [];

//Arrow function generazione di numeri random interi
const numRnd = (min,max) => Math.floor(Math.random() * max - min + 1) + min;

//Arrow function creazione di oggetto
const setGenerateObj = (obj, ...property) => {
    const newObj = {};
    for(let i = 0; i < property.length; i++){
        newObj[property[i]] = obj[property[i]];
    }
    return newObj;
};



for(let i = 0; i < squadre.length; i++){
    squadre[i].puntiFatti = numRnd(1,20);
    squadre[i].falliSubiti = numRnd(1,20);
    //Invochiamo la funzione che crea l'oggetto dinamicamente
    newSquadre.push(setGenerateObj(squadre[i], 'nome','falliSubiti'));
}

console.log(newSquadre);
