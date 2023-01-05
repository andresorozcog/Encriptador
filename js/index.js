document.getElementById("resultado").style.display = "none";

function encriptar(){
    mensaje = document.getElementById('textarea').value;

    mensaje = mensaje.replace(/e/g, "enter");
    mensaje = mensaje.replace(/i/g, "imes");
    mensaje = mensaje.replace(/a/g, "ai");
    mensaje = mensaje.replace(/o/g, "ober");
    mensaje = mensaje.replace(/u/g, "ufat");

    document.getElementById('mensaje').innerHTML = mensaje;
    document.getElementById('vacio').style.display = "none";
    document.getElementById('resultado').style.display = "block";
}

function desencriptar(){
    mensaje = document.getElementById('textarea').value;

    mensaje = mensaje.replace(/enter/g, "e");
    mensaje = mensaje.replace(/imes/g, "i");
    mensaje = mensaje.replace(/ai/g, "a");
    mensaje = mensaje.replace(/ober/g, "o");
    mensaje = mensaje.replace(/ufat/g, "u");

    document.getElementById('mensaje').innerHTML = mensaje;
    document.getElementById('vacio').style.display = "none";
    document.getElementById('resultado').style.display = "block";
}

function copiar() {
    // Selecciona el elemento p
    var text = document.getElementById('mensaje');
  
    // Crea un elemento de selección temporal
    var selection = document.createRange();
    selection.selectNodeContents(text);
  
    // Copia el texto seleccionado al portapapeles
    var success = navigator.clipboard.writeText(selection.toString());
  
    if (success) {
      console.log('Texto copiado al portapapeles');
    } else {
      console.error('Error al copiar el texto');
    }
  }