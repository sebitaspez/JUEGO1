document.addEventListener('DOMContentLoaded', function () {
  const btnSi = document.getElementById('btn-si');
  const btnNo = document.getElementById('btn-no');
  const btnIntentar = document.getElementById('btn-intentar');
  const btnAvanzar = document.getElementById('btn-avanzar');

  btnSi.addEventListener('click', () => verificarRespuesta(true));
  btnNo.addEventListener('click', () => verificarRespuesta(false));
  btnIntentar.addEventListener('click', cerrarMensaje);
  btnAvanzar.addEventListener('click', avanzar);

  cerrarMensaje(); 
});

function verificarRespuesta(correcto) {
  const mensajeEl = document.getElementById('mensaje');
  const texto = document.getElementById('texto-mensaje');
  const btnAvanzar = document.getElementById('btn-avanzar');
  const btnIntentar = document.getElementById('btn-intentar');

  if (correcto) {
    texto.textContent = '✅ ¡Correcto! Puedes seguir avanzando.';
    btnAvanzar.style.display = 'inline-block';
    btnIntentar.style.display = 'none';
  } else {
    texto.textContent = '❌ Incorrecto, intenta de nuevo.';
    btnAvanzar.style.display = 'none';
    btnIntentar.style.display = 'inline-block';
  }

  mensajeEl.style.display = 'flex';
}

function cerrarMensaje() {
  document.getElementById('mensaje').style.display = 'none';
}

function avanzar() {
  cerrarMensaje();
  console.log('Avanzando...');
}

const btnPlay = document.getElementById("btn-play");
const audio = document.getElementById("audio");

let isPlaying = false;

btnPlay.addEventListener("click", () => {
  if (!isPlaying) {
    audio.play();
    btnPlay.textContent = "⏸️";
    isPlaying = true;
  } else {
    audio.pause();
    btnPlay.textContent = "▶️";
    isPlaying = false;
  }
});