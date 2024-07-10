let stringa = prompt(`Inserischi una frase (scrivere tutto maiuscolo o tutto minuscolo)`);

let palindromo;

verificaPalindromo(stringa);

console.log(`Questa frase è un palindromo? ${palindromo}`);

function verificaPalindromo(stringa) {

  stringa = stringa.toLowerCase().replace(/[^a-z]/g, "");

  if (stringa === stringa.split("").reverse().join("")) {
    palindromo = true;
  } else {
    palindromo = false;
  }
}