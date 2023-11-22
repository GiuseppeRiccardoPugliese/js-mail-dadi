/*
Gioco dei dadi
Generare un numero random da 1 a 6, sia per il giocatore sia per il computer. Stabilire il vincitore, in base a chi fa il punteggio più alto.
*/

//Generare un numero random da 1 a 6, per il pc ed user
let btnGioca = document.getElementById("play");

btnGioca.addEventListener("click",
    function () {

        //Definisco le mie due variabili per far poi generare un numero random da 1 a 6
        let sceltaUser = Math.floor(Math.random() * 6 + 1);
        console.log("Scelta user", sceltaUser);
        let sceltaPc = Math.floor(Math.random() * 6 + 1);
        console.log("Scelta pc", sceltaPc);

        let risultato;

        //Condizione
        if (sceltaUser > sceltaPc) {
            alert("Hai vinto! :D");
            risultato = "Hai vinto!";
        } else if (sceltaUser === sceltaPc) {
            alert("Pareggio >.>");
            risultato = "Pareggio!";
        } else {
            alert("Hai perso :(");
            risultato = "Hai perso!";
        }
        document.getElementById("risultato").innerHTML = risultato;
    }
)