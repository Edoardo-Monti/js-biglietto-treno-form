/*
- Il programma dovrà chiedere all'utente il numero di chilometri che vuole percorrere e l'età del passeggero.
    -input/prompt richiesta km ed eta
- Sulla base di queste informazioni dovrà calcolare il prezzo totale del viaggio, secondo queste regole:
- il prezzo del biglietto è definito in base ai km (0.21 € al km)
    - esempio 20 * 20 =
- va applicato uno sconto del 20% per i minorenni
    -condizione if su eta, poi
    - prezzo * 0.2
- va applicato uno sconto del 40% per gli over 65.
    -condizione if su eta, poi
    - prezzo * 0.4
- L'output del prezzo finale va messo fuori in forma umana (con massimo due decimali, per indicare centesimi sul prezzo). Questo richiederà un minimo di ricerca.

MILESTONE 1: ( obbiettivo di ieri )
Iniziamo implementando il programma senza alcuna estetica: usando esclusivamente due input e un bottone (non stilizzati), realizziamo le specifiche scritte sopra. La risposta finale (o output) sarà anch’essa da scrivere in console.
MILESTONE 2:
Solo una volta che il milestone 1 sarà completo e funzionante allora realizzeremo un form in pagina in cui l’utente potrà inserire i dati e visualizzare il calcolo finale con il prezzo.
Il recap dei dati e l'output del prezzo finale, andranno quindi stampati in pagina (il prezzo dovrà essere formattato con massimo due decimali, per indicare i centesimi sul prezzo). Questo richiederà un minimo di ricerca.
*/



// METODO 1


function prezzo(){

    let chilometri = parseFloat(document.getElementById("chilometri").value)

    let eta = parseInt(document.getElementById("eta").value)
    console.log(eta)

    const prezzoAlChilometro = 0.21
    let prezzoBigliettoIntero = prezzoAlChilometro * chilometri
    let sconto20percento = prezzoBigliettoIntero * 0.20
    let sconto40percento = prezzoBigliettoIntero * 0.40
    let childPrice = prezzoBigliettoIntero - sconto20percento

    console.log(`${prezzoBigliettoIntero}`)

    if(eta <= 17){
        document.getElementById(`prezzoformaumana`).innerHTML = `prezzo ticket:<h1>${childPrice.toFixed(2)}</h1>`
    }else if(eta >= 65){
        document.getElementById(`prezzoformaumana`).innerHTML = `prezzo ticket:<h1>${prezzoBigliettoIntero - sconto40percento.toFixed(2)}</h1>`
    }else{
        document.getElementById(`prezzoformaumana`).innerHTML = `prezzo ticket:<h1>${prezzoBigliettoIntero.toFixed(2)}</h1>`
    }
    
}