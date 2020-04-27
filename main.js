// Il computer deve generare 16 numeri casuali tra 1 e 100, che saranno le "mine".
// In seguito deve chiedere all'utente di inserire un numero alla volta, sempre compreso tra 1 e 100, che sarà la sua giocata.
// Se il numero è presente nella lista delle mine, la partita termina, altrimenti il gioco continua chiedendo all'utente un altro numero (continua a giocare).
// La partita termina quando il giocatore becca una mina, ossia inserisce un numero "vietato", oppure se raggiunge il numero massimo possibile di numeri consentiti, ossia ha inserito tutti i numeri possibili che non sono mine!
// Al termine della partita il software deve comunicare il punteggio, cioè il numero di volte che l'utente ha inserito un numero consentito; in altre parole, deve comunicare all'utente quante giocate ha fatto prima di perdere.
// BONUS: all'inizio della partita, il software richiede anche un livello di difficoltà all'utente che cambia il range di numeri totali (le mine saranno sempre 16):
// con difficoltà 0=> si gioca con numeri che vanno da 1 a 100
// con difficoltà 1 => si gioca con numeri che vanno da 1 a 80
// con difficoltà 2=> si gioca con numeri che vanno da 1 a 50

//creo una funzione che generi i numeri causali da 1 a 100
function genera_random(min, max) {
  return Math.floor(Math.random() * (max - min + 1) ) + min;
}

// attraverso un ciclo for, genero 16 numeri casuali, sfruttando la funzione genera_random
for (var i = 0; i < 16; i++) {
    var mine = genera_random(1, 100);
    console.log('Numeri mina: ' + mine);
}

// ok ho ottenuto le mie mine.
// adesso devo fare in modo che l'utente scelga i suoi numeri con questi criteri
// tra 1 e 100
// massimo 84 giocate
// deve inserirli uno alla volta
// per fare questo ho bisogno di un ciclo do while perchè sono sicura che almeno una volta il numero glielo devo chiedere.

do {
    var numero = parseInt(prompt('inserisci un numero tra 1 e 100'));
    console.log(numero);
    if (numero != mine) {
        alert('sei salvo! gioca di nuovo');
    } else {
        alert('boom!')
    }
} while();
