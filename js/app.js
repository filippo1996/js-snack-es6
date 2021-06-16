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





