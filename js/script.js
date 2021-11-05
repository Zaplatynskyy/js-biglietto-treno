let chilometri = parseFloat(prompt('Inserisci i chilometri da percorrere'));
let eta = parseInt(prompt('Inserisci la tua età'));

if (isNaN(chilometri) || isNaN(eta)) {
    alert('Attenzione, hai inserito dei valori non validi. Ricarica e reinserisci i tuoi dati.');
    console.log(bloccoProgramma);
}

let prezzoBiglietto = chilometri * 0.21;
prezzoBiglietto = parseFloat(prezzoBiglietto.toFixed(2));

console.log(prezzoBiglietto, 'euro Intero costo del biglietto');


if (eta < 18){
    prezzoBiglietto = prezzoBiglietto - (prezzoBiglietto * 20 / 100);
    prezzoBiglietto = parseFloat(prezzoBiglietto.toFixed(2));

    console.log(prezzoBiglietto, 'euro Scontato al 20% per i minorenni');
} else if (eta > 65) {
    prezzoBiglietto = prezzoBiglietto - (prezzoBiglietto * 40 / 100);
    prezzoBiglietto = parseFloat(prezzoBiglietto.toFixed(2));

    console.log(prezzoBiglietto, 'euro Scontato al 40% per gli over 65');
} 
