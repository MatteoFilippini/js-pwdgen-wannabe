console.log('JS OK');

/*
    Traccia:
    Chiedi all’utente il suo nome,
    poi chiedi il suo cognome,
    poi chiedi il suo colore preferito
    Infine scrivi sulla pagina nomecognomecolorepreferito21
 */

/*
    1 - chiedo il nome
    2 - salvo il nome
    3 - chiedo il cognome
    4 - salvo il cognome
    5 - chiedo il colore preferito
    6 - salvo il colore
    7 - creo variabile password
    8 - assegno alla variabile password l'unione del nome+cognome+colore
    9 - aggiungo un "21" alla fine della variabile password
    10 - creo e inizializzo un elemento del DOM
    11 - recupero un elemento del DOM
    12 - stampo in quell' elemento la password
*/

// 1/2 - chiedo il nome
const userName = prompt('Nome');
console.log(`Name: ${userName}`);

// 3/4 - chiedo il cognome
const userSurname = prompt('Cognome');
console.log(`Surname: ${userSurname}`);

// 5/6 - chiedo il colore
const userColor = prompt('Colore preferito');
console.log(`Favourite color: ${userColor}`);

// 7 - Creo la password
let password;
// 8/9 - do un valore alla variabile
password = userName + userSurname + userColor + 21;
console.log(`Passowrd: ${password}`);

// 11 - recupero elemento
const generatorElement = document.getElementById('generator');

// 12 - Stampo password
generatorElement.innerText = `${password}`;