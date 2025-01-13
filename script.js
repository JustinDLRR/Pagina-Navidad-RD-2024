
window.onload = function() {
    setTimeout(function() {
        document.getElementById("mensaje").style.display = "block";
    }, 1000); //
};

function cerrarmensaje() {
    document.getElementById("mensaje").style.display = "none"; 
    var audio = document.getElementById("musicafondo");
    audio.play();
}


function alternarsilencio() {
    var audio = document.getElementById("musicafondo");
    var botonsilenciar = document.getElementById("imagenaudioactivado");
    
    if (audio.muted) {
        audio.muted = false; 
        botonsilenciar.src = "resources/image/audio activado.png"; 
    } else {
        audio.muted = true; 
        botonsilenciar.src = "resources/image/audio desactivado.png";
    }
}
