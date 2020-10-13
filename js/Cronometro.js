
function tiempoCrono(estado) {

    var tiempo = {
        hora: 0,
        minuto: 0,
        segundo: 0,
        centesima: 0,
        corriendo: 0
    };


    tiempo.corriendo = setInterval(function () {
        // centesimas
        tiempo.centesima++;
        if (tiempo.centesima >= 100) {
            tiempo.centesima = 0;
            tiempo.segundo++;
        }
        // Segundos
        if (tiempo.segundo >= 60) {
            tiempo.segundo = 0;
            tiempo.minuto++;
        }
        // Minutos
        if (tiempo.minuto >= 60) {
            tiempo.minuto = 0;
            tiempo.hora++;
        }
        $("#hora").text(tiempo.hora < 10 ? '0' + tiempo.hora : tiempo.hora);
        $("#minuto").text(tiempo.minuto < 10 ? '0' + tiempo.minuto : tiempo.minuto);
        $("#segundo").text(tiempo.segundo < 10 ? '0' + tiempo.segundo : tiempo.segundo);
        $("#centesima").text(tiempo.centesima < 10 ? '0' + tiempo.centesima : tiempo.centesima);
    }, 10);

    if (estado === 'reseteo') {
        clearInterval(tiempo.corriendo);
        alert('Perdiste :(');
    }



}

