let chilometri = parseFloat(prompt('Inserisci i chilometri da percorrere'));
let eta = parseInt(prompt('Inserisci la tua età'));

if (isNaN(chilometri) || isNaN(eta)) {
    alert('Attenzione, hai inserito dei valori non validi. Ricarica e reinserisci i tuoi dati.');
    console.log(bloccoProgramma);
}

let prezzoBiglietto = chilometri * 0.21;
prezzoBiglietto = parseFloat(prezzoBiglietto.toFixed(2));

document.getElementById('chilometri').innerHTML = chilometri + 'Km';
document.getElementById('prezzo_iniziale').innerHTML = prezzoBiglietto + ' €';
document.getElementById('passeggero').innerHTML = '1 Adulto';
document.getElementById("carrozza").innerHTML =
Math.floor(Math.random() * 8) + 1;
document.getElementById("posto").innerHTML =
Math.floor(Math.random() * 28) + 1;


if (eta < 18){
    prezzoBiglietto = prezzoBiglietto - (prezzoBiglietto * 20 / 100);
    prezzoBiglietto = parseFloat(prezzoBiglietto.toFixed(2));

    document.getElementById('prezzo_totale').innerHTML = prezzoBiglietto + ' €';
    document.getElementById('nota').innerHTML = 'under 18';
    document.getElementById('passeggero').innerHTML = '1 Ragazzo/a';
    document.getElementById('sconto').innerHTML = 'sconto ' + (prezzoBiglietto * 20 / 100).toFixed(2) + ' €';

} else if (eta > 65) {
    prezzoBiglietto = prezzoBiglietto - (prezzoBiglietto * 40 / 100);
    prezzoBiglietto = parseFloat(prezzoBiglietto.toFixed(2));

    document.getElementById('prezzo_totale').innerHTML = prezzoBiglietto + ' €';
    document.getElementById('nota').innerHTML = 'over 65';
    document.getElementById('passeggero').innerHTML = '1 Anziano';
    document.getElementById('sconto').innerHTML = 'sconto ' + (prezzoBiglietto * 40 / 100).toFixed(2) + ' €';
    
} else {
    document.getElementById('prezzo_totale').innerHTML = prezzoBiglietto + ' €';
    document.getElementById('nota').innerHTML = 'Tariffa intera';
    document.getElementById('sconto').innerHTML = 'non scontato';
}
