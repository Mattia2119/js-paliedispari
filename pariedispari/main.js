/*L’utente sceglie pari o dispari e inserisce un numero da 1 a 5. 
Generiamo un numero random (sempre da 1 a 5) per il computer (usando una funzione). 
Sommiamo i due numeri 
Stabiliamo se la somma dei due numeri è pari o dispari (usando una funzione) 
Dichiariamo chi ha vinto. */

//let sceltaUtente = prompt("Pari o dispari?");
//let numeroUtente = parseInt(prompt("Inserisci un numero da 1 a 5"));

function getRandomNumber (min,max) {
    return Math.floor(Math.random()* (max - min + 1) + min);
}

function Calc(numero) {

    let ritorna;

    if (numero % 2 == 0) {
        ritorna= "PARI";
    } else {
        ritorna = "DISPARI"
    }
    
return ritorna;

}

let pariDispari = prompt ("Scegli tra pari o dispari").toUpperCase();

if (pariDispari == "PARI" || pariDispari == "DISPARI") {

    let numeroUtente = parseInt(prompt("Inserisci un numero compreso tra 1 e 5"));

        if ((numeroUtente >= 1 && numeroUtente <=5) || isNaN(numeroUtente)) {

            let numeroCpu = getRandomNumber(1,5);
            let somma = numeroCpu + numeroUtente;
            let verificaSomma = Calc(somma);

                if (verificaSomma == pariDispari) {
                    alert("Hai vinto");
                }else {
                    alert("Ha vinto il computer");
                }

        }else {
            alert("Hai inserito un valore non valido");
        }

}else {
    alert("Hai inserito un valore non valido");
}



