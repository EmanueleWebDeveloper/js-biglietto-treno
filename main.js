let numeroKm = prompt( "Quanti Chilometri dovrai percorrere? : ");
let etaPasseggero = prompt( "Quanti anni hai? : ");

console.log(numeroKm, etaPasseggero)

const prezzoKm = '0.21';

if ( etaPasseggero <18 || etaPasseggero >65 ){
    document.writeln('numeroKm * prezzoKm')
    if ( etaPasseggero <18){
        document.writeln('numeroKm * prezzoKm * 0.8')
    }else{
        document.writeln('numeroKm * prezzoKm * 0.6')
    }
    
}else{
    document.writeln('numeroKm * prezzoKm')
}

