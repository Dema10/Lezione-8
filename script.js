/* ESERCIZIO 1
 Scrivi una funzione chiamata "crazySum" che riceve due numeri interi come parametri.
 La funzione deve ritornare la somma di quei due valori, 
 ma se il loro valore è lo stesso allora deve ritornare la loro somma moltiplicata per 3.
*/

/* SCRIVI QUI LA TUA RISPOSTA */

function crazySum (int1, int2) {
    if (int1 === int2) {
        return (int1 + int2) * 3;
    } else {
        return int1 + int2;
    }
}

console.log(crazySum(5,7)); // else
console.log(crazySum(5,5)); // if

//-----------------------------------------

/* ESERCIZIO 2
 Scrivi una funzione chiamata "boundary", che accetta un numero intero come parametro e 
 ritorna true se tale parametro è incluso tra 20 e 100 (incluso) o se è esattamente uguale a 400.
*/

/* SCRIVI QUI LA TUA RISPOSTA */

function boundary (numero) {
    let numInt = parseInt(numero);
    if ( (numInt > 20 && numInt <= 100) || numInt === 400 ) {
        return true;
    } else {
        return false;
    }
}

console.log(boundary(21)); // true
console.log(boundary(21,5)); // true (in questo caso è sempre 21 grazie al parseInt)
console.log(boundary(400)); // true
console.log(boundary(20)); // false
console.log(boundary(20,5)); // false (in questo caso è sempre 20 grazie al parseInt)

//-------------------------------------------

/* ESERCIZIO 3
 Scrivi una funzione chiamata "reverseString", che accetta una stringa come parametro e 
 la ritorna invertita (es.: EPICODE => EDOCIPE).
*/

/* SCRIVI QUI LA TUA RISPOSTA */

function reverseString(stringa) {
    let stringaContrario = [];
    for (let i = stringa.length - 1; i >= 0; i--) {
        stringaContrario += stringa[i];
    }
    return stringaContrario;    
}

console.log(reverseString("EPICODE"));

//----------------------------------------------

/* ESERCIZIO 4
 Scrivi una funzione chiamata "upperFirst", che accetta una stringa come parametro 
 e la ritorna rendendo maiuscola ogni lettera iniziale di ogni parola.
*/

/* SCRIVI QUI LA TUA RISPOSTA */

function upperFirst(stringa) {
   let frase = stringa.split (" ");
   let stringaFinale = [];
   for (let i = 0; i < frase.length; i++) {
        let primoCarattere = frase[i].charAt(0);
        //console.log(primoCarattere);
        let primoUpper = primoCarattere.toUpperCase();
        //console.log(primoUpper);
        let restoFrase = frase[i].slice(1);
        //console.log(restoFrase);
        let fraseMod = primoUpper + restoFrase;
        stringaFinale.push(fraseMod);
        //console.log(stringaFinale);
   }
   console.log(stringaFinale.join(" "));
}

upperFirst("gabriele de matteis");

/* ESERCIZIO 5
 Scrivi una funzione chiamata "giveMeRandom", che accetta come parametro un numero chiamato n 
 e ritorna un array contenente n numeri random contenuti tra 0 e 10.
*/

/* SCRIVI QUI LA TUA RISPOSTA */

function giveMeRandom(n) {
    let nNumbers = [];
    // Ciclo per generare n numeri random
    for (let i = 0; i < n; i++) {
        let nRandom = Math.floor(Math.random() * 11 )
        nNumbers.push(nRandom);
    }
    return nNumbers;
}

console.log(giveMeRandom(30));

//------------------------------------------------

//EXTRA:
/* ESERCIZIO 1
 Scrivi una funzione chiamata "area" che riceve due parametri (l1, l2) e calcola l'area del rettangolo associato.
*/

/* SCRIVI QUI LA TUA RISPOSTA */

function area(l1, l2) {
    let area = l1 * l2;
    return area;
}

console.log(area(10,5));

//----------------------------------------------

/* ESERCIZIO 2
 Scrivi una funzione chiamata "crazyDiff" che calcola la differenza assoluta tra un numero fornito e 19.
 Se il valore calcolato è più grande di 19, la funzione deve tornare tale risultato moltiplicato per 3.
*/

/* SCRIVI QUI LA TUA RISPOSTA */

function crazyDiff (num) {
    let absoluteDiff = Math.abs (num - 19);
    if (absoluteDiff > 19) {
        absoluteDiff *= 3;
        return absoluteDiff;
    } else {
        return absoluteDiff;
    }
}

console.log(crazyDiff(38)); // else
console.log(crazyDiff(39)); // if

//------------------------------------------------

/* ESERCIZIO 3
 Scrivi una funzione chiamata "codify" che accetta una stringa come parametro.
 La funzione deve aggiungere la parola "code" all'inizio della stringa fornita e ritornare il risultato, 
 ma se la stringa fornita comincia proprio con "code" allora deve ritornarla senza modifiche.
*/

/* SCRIVI QUI LA TUA RISPOSTA */

function codify(stringa) {
    let string2 = "code";
    if (stringa === string2) {
        return stringa;
    } else {
        return string2 + " " + stringa;
    }
}

console.log(codify("ciao")); // else
console.log(codify("code")); // if

//-------------------------------------------------

/* ESERCIZIO 4
 Scrivi una funzione chiamata "check3and7" la quale accetta un numero intero positivo come parametro.
 La funzione deve controllare che tale parametro sia un multiplo di 3 o di 7, e in tal caso tornare true; 
 altrimenti deve tornare false.
 SUGGERIMENTO: operatore modulo
*/

/* SCRIVI QUI LA TUA RISPOSTA */

function check3and7(intPositive) {
    if (intPositive > 0 && intPositive != isNaN) {
        if (intPositive % 3 === 0 || intPositive % 7 === 0) {
            return true;
        } else {
            return false;
        }
    } else {
        return console.error("Non è un numero positivo")
    }
}

console.log(check3and7(-9));
console.log(check3and7("ciao"));
console.log(check3and7(14));
console.log(check3and7(9));
console.log(check3and7(10));

//-----------------------------------------------

/* ESERCIZIO 5
 Scrivi una funzione chiamata "cutString", che accetta una stringa come parametro e 
 la ritorna senza il primo e l'ultimo carattere.
*/

/* SCRIVI QUI LA TUA RISPOSTA */

// PROVA 1

/* function cutString(stringa) {
    if (stringa.length >= 1) {
        return stringa.slice(1, -1);
    } else {
        return console.error("La stringa è troppo piccola per poter togliere il primo e l' ultimo carattere");
    }
}

console.log(cutString("esplodo")); */

// PROVA 2

function cutString(stringa) {
    let stringa2 = stringa.split("");
    let stringaMod = [];
    for (let i = 1; i < stringa2.length - 1; i++) {
        stringaMod.push(stringa2[i]);
    }
    return stringaMod.join("");
}

console.log(cutString("ciao"));

/* P.S. MI SONO FATTO ESPLODERE IL CERVELLO CREDENDO CHE SI DOVESSE FARE IN MODO SIMILE ALL' ESERCIZIO 4, INVECE
PERDO 2 ORE DI SANITA MENTALE PROVANDO E RIPROVANDO SENZA SUCCESSO, ALLE 04.00 DEL MATTINO 
DECIDO DI PROVARE UNA SOLUZIONE CHE CREDEVO TROPPO SEMPLICE ED INVECE MAGIA, 
QUINDI ARRIVANDO ALLE CONCLUSIONI MI POSSO DIRE BRAVO IL C......E.
*/