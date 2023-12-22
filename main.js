let numeroKm = prompt( "Quanti Chilometri dovrai percorrere?  ");
let etaPasseggero = prompt( "Quanti anni hai?  ");

const prezzoKm = 0.21;

console.log(numeroKm, etaPasseggero)



if ( etaPasseggero <18 || etaPasseggero >65 ){
    let sconto = (etaPasseggero <18) ? 0.8 : 0.6;
    let costoScontato = numeroKm * prezzoKm * sconto;
    document.writeln("il prezzo del biglietto è" + costoScontato.toFixed(2) )

}else{
    let costoSenzaSconto = numeroKm * prezzoKm;
    document.writeln("il prezzo del biglietto è" + costoSenzaSconto.toFixed(2))
}

