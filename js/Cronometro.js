let tiempo = {
    minuto: 0,
    segundo: 0,
    centesima: 0,
    corriendo: 0
};

function comenzar() {


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
        }
        $("#minuto").text(tiempo.minuto < 10 ? '0' + tiempo.minuto : tiempo.minuto);
        $("#segundo").text(tiempo.segundo < 10 ? '0' + tiempo.segundo : tiempo.segundo);
        $("#centesima").text(tiempo.centesima < 10 ? '0' + tiempo.centesima : tiempo.centesima);
    }, 10);

}

function reiniciar() {
    clearInterval(tiempo.corriendo);
    console.log(tiempo);
    console.log('al borrar' + tiempo);
    tiempo.centesima = 0;
    tiempo.corriendo = 0;
    tiempo.segundo = 0;
    $("#minuto").text('00');
    $("#segundo").text('00');
    $("#centesima").text('00');
    alert('Perdiste :(, intentalo de nuevo');
    $("#capa").css("left", 40 + "px");
    $("#capa").css("top", 47 + "px");


}





