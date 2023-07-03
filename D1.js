/*
REGOLE
- Tutte le risposte devono essere scritte in JavaScript
- Puoi usare Google / StackOverflow ma solo quanto ritieni di aver bisogno di qualcosa che non è stato spiegato a lezione
- Puoi testare il tuo codice in un file separato, o de-commentando un esercizio alla volta
- Per visualizzare l'output collega questo file al tuo HTML e apri la console del browser. 
- Dovrai creare una direttiva di output per testare le variabili od i risultati delle espressioni che crei
*/

/* ESERCIZIO 1
 Elenca e descrivi i principali datatype in JavaScript. Prova a spiegarli come se 
 volessi farli comprendere a un bambino. 
 /* SCRIVI QUI LA TUA RISPOSTA */
/* I principali datatype in JavaScript sono: Stringa, Numerico, Booleano, Nun e Undefined. 
 La Stringa ci indichera o un singolo o piu caratteri ed è detto anche alfanumerico. 
 Il datatype Numerico rappresentera invece un dato a punto numerico sia intero sia 
 che decimale. 
 Il datatype Booleano ci permetterà di assegnare un valore vero o falso 
 Il datatype Nun è un dato che incontriamo quando creiamo una variabile e non gli
 assegnamo un valore intenzioanlmente 
 Il datatype Undefined si rileva quando  qualcosa non è stato ben definito in una variabile a cui ho assegnato un valore.

/* ESERCIZIO 2
 Crea una variable chiamata "name" e assegna ad essa il tuo nome, sotto forma di stringa.
*/

let name = "Riccardo";
console.log(name);

/* ESERCIZIO 3
 Scrivi il codice necessario ad effettuare un addizione (una somma) dei numeri 12 e 20.
*/

let firstnumber = 12;
let secondnumber = 20;
console.log("Final Number", firstnumber + secondnumber);

/* ESERCIZIO 4
 Crea una variable di nome "x" e assegna ad essa il numero 12.
*/

let x = 12;
console.log(x);

/*ESERCIZIO 5
  Riassegna un nuovo valore alla variabile "name" già esistente: il tuo cognome.
  Dimostra l'impossibilità di riassegnare un valore ad una variabile dichiarata con il costrutto const.*/
/*Impossibile perche è gia stato assegnato la variabile name*/

const lastname = "Ronca";
console.log();

/* ESERCIZIO 6
 Esegui una sottrazione tra i numeri 4 e la variable "x" appena dichiarata (che contiene il numero 12).*/
let four = 4;
console.log("N", x - four);

/* ESERCIZIO 7
 Crea due variabili: "name1" e "name2". Assegna a name1 la stringa "john",
  e assegna a name2 la stringa "John" (con la J maiuscola!).
 Verifica che name1 sia diversa da name2 (suggerimento: è la 
  stessa cosa di verificare che la loro uguaglianza sia falsa).
 EXTRA: verifica che la loro uguaglianza diventi true se entrambe 
 vengono trasformate in lowercase (senza cambiare il valore di name2!).
*/

console.log("----------------------------------------------");

let name1 = "john";
let name2 = "John";
var IsDifferent = name1 !== name2;
console.log(IsDifferent);

console.log("----------------------------------------------");

let name3 = "john";
let name4 = "John";
let comparee = name1 === name2.toLowerCase();
console.log("primo nome", name3);
console.log("secondo nome", name4);
console.log("i nomi sono uguali?:", comparee);

console.log("----------------------------------------------");
