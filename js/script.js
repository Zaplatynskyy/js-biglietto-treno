// dichiarazione dati inseriti dall'utente tramite prompt
let chilometri = parseFloat(prompt('Inserisci i chilometri da percorrere'));
let eta = parseInt(prompt('Inserisci la tua età'));

// condizionale di verifica inserimento dati, in caso di dati errati il programma si blocca tramite un console.log di una variabile non dichiarata
if (isNaN(chilometri) || isNaN(eta)) {
    alert('Attenzione, hai inserito dei valori non validi. Ricarica e reinserisci i tuoi dati.');
    console.log(bloccoProgramma);
}

// dichiarazione e calcolo prezzo biglietto in base ai dati inseriti dall'utente
let prezzoBiglietto = chilometri * 0.21;
prezzoBiglietto = parseFloat(prezzoBiglietto.toFixed(2));

// dichiarazione data e giorni della settimana
const data = new Date();
const giorniSettimana = ["Domenica","Lunedi","Martedi","Mercoledi","Giovedi","Venerdi","Sabato"];

// inserimento data ed orario in html
document.getElementById('giorno').innerHTML = giorniSettimana[data.getDay()];
document.getElementById('data').innerHTML = data.getDate() + '/' + (data.getMonth() + 1) + '/' + data.getFullYear();
document.getElementById('orario').innerHTML = data.getHours() + ':' + data.getMinutes();

// inserimento dati fissi in html
document.getElementById('chilometri').innerHTML = chilometri + 'Km';
document.getElementById('prezzo_iniziale').innerHTML = prezzoBiglietto + ' €';
document.getElementById('passeggero').innerHTML = '1 Adulto';
document.getElementById("carrozza").innerHTML =
Math.floor(Math.random() * 8) + 1;
document.getElementById("posto").innerHTML =
Math.floor(Math.random() * 28) + 1;

// condizionale prezzo variabile in base all'età
if (eta < 18){
    // variazione prezzo scontato al 20%
    prezzoBiglietto = prezzoBiglietto - (prezzoBiglietto * 20 / 100);
    prezzoBiglietto = parseFloat(prezzoBiglietto.toFixed(2));

    // inserimento dati in caso di utenti minorenni
    document.getElementById('prezzo_totale').innerHTML = prezzoBiglietto + ' €';
    document.getElementById('nota').innerHTML = 'under 18';
    document.getElementById('passeggero').innerHTML = '1 Ragazzo/a';
    document.getElementById('sconto').innerHTML = 'sconto ' + (prezzoBiglietto * 20 / 100).toFixed(2) + ' €';

} else if (eta > 65) {
    // variazione prezzo scontato al 40%
    prezzoBiglietto = prezzoBiglietto - (prezzoBiglietto * 40 / 100);
    prezzoBiglietto = parseFloat(prezzoBiglietto.toFixed(2));

    // inserimento dati in caso di utenti over 65
    document.getElementById('prezzo_totale').innerHTML = prezzoBiglietto + ' €';
    document.getElementById('nota').innerHTML = 'over 65';
    document.getElementById('passeggero').innerHTML = '1 Anziano';
    document.getElementById('sconto').innerHTML = 'sconto ' + (prezzoBiglietto * 40 / 100).toFixed(2) + ' €';
    
} else {
    // inserimento dati per tutti gli altri utenti non verificati nelle condizioni precedenti(eta compresa tra 18 e 65 anni)
    document.getElementById('prezzo_totale').innerHTML = prezzoBiglietto + ' €';
    document.getElementById('nota').innerHTML = 'Tariffa intera';
    document.getElementById('sconto').innerHTML = 'non scontato';
}
