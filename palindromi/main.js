function palindroma (parolaInserita) {

let ritorno;

let parolaDaConfrontare = parolaInserita.split('').reverse().join('');

if (parolaInserita == parolaDaConfrontare) {

   ritorno="La parola inserita è palindroma";

} else {

   ritorno="La parola inserita non è palindroma";
}

return ritorno;

}

let parolaInserita = prompt("Inserisci una parola");
let verifica = palindroma(parolaInserita);

alert(verifica);