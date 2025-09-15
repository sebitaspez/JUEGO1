document.addEventListener('DOMContentLoaded', function () {
  const btnEnviar = document.getElementById('btn-enviar');
  const btnIntentar = document.getElementById('btn-intentar');
  const btnAvanzar = document.getElementById('btn-avanzar');

  btnEnviar.addEventListener('click', verificarRespuesta);
  btnIntentar.addEventListener('click', cerrarMensaje);
  btnAvanzar.addEventListener('click', avanzar);

  cerrarMensaje(); 
});

function verificarRespuesta() {
  const raw = document.getElementById('respuesta').value || '';
  const respuesta = raw.toLowerCase().trim();
  
  const respuestaNorm = (respuesta.normalize)
    ? respuesta.normalize('NFD').replace(/[\u0300-\u036f]/g, '')
    : respuesta;

  const mensajeEl = document.getElementById('mensaje');
  const texto = document.getElementById('texto-mensaje');
  const btnAvanzar = document.getElementById('btn-avanzar');
  const btnIntentar = document.getElementById('btn-intentar');

  if (respuestaNorm === 'papa') {
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
  document.getElementById('respuesta').value = ""; 
}

function avanzar() {
  cerrarMensaje();
  // Aquí rediriges a la siguiente página si quieres:
  // location.href = 'siguiente.html';
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