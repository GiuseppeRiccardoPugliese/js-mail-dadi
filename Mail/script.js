/*
Mail :
Chiedi all’utente la sua email, controlla che sia nella lista di chi può accedere, stampa un messaggio appropriato sull’esito del controllo.
*/
//Form fix
const myForm = document.getElementById("my_form");
//dichiaro le mie variabili per l'input dell'utente
const userMail = document.getElementById("user_email");
const checkBtn = document.querySelector(".user_input");

// creo la mia lista
const emailList = ["giuseppe.riccardo@gmail.com", "giuseppe.riccardo@virgilio.it", "giuseppe.riccardo@libero.it"];
console.log(emailList);

//Form fix
myForm.addEventListener("submit", (e) => {
    e.preventDefault();

    //aggiungo la funzione del click al mio button
    checkBtn.addEventListener("click",
        function () {

            let checkEmail = userMail.value;

            // controllo che sia nella lista di chi puo' accedere (ovvero condizione)
            for (let i = 0; i < emailList.length; i++) {

                //imposto la mia variabile che sia uguale all'email insierita dall'utente
                let numIesimo = emailList[i];

                if (numIesimo === checkEmail) {
                    //Se sono nel primo caso per l'email, sono idoneo
                    document.getElementById("able").innerHTML = "Sei idoneo";

                } else {
                    //Se sono nel primo caso per l'email, non sono idoneo
                    document.getElementById("able").innerHTML = "Non sei idoneo";
                }

            }

        }
    )
}
)







