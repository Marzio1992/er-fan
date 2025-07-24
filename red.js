const loginSection = document.getElementById('login-section');
const muroSection = document.getElementById('muro-section');
const btnLogin = document.getElementById('btn-login');
const inputNombre = document.getElementById('input-nombre');

const formPublicacion = document.getElementById('form-publicacion');
const textoPublicacion = document.getElementById('texto-publicacion');
const publicacionesDiv = document.getElementById('publicaciones');

let usuario = null;

function crearPublicacion(texto, autor) {
  const div = document.createElement('div');
  div.classList.add('publicacion');

  const autorDiv = document.createElement('div');
  autorDiv.classList.add('autor');
  autorDiv.textContent = autor;

  const textoDiv = document.createElement('div');
  textoDiv.textContent = texto;

  div.appendChild(autorDiv);
  div.appendChild(textoDiv);

  publicacionesDiv.prepend(div);
}

btnLogin.addEventListener('click', () => {
  const nombre = inputNombre.value.trim();
  if (!nombre) {
    alert('Por favor, escribí tu nombre.');
    return;
  }
  usuario = nombre;
  loginSection.style.display = 'none';
  muroSection.style.display = 'block';
});

formPublicacion.addEventListener('submit', (e) => {
  e.preventDefault();
  const texto = textoPublicacion.value.trim();
  if (!texto) return;
  crearPublicacion(texto, usuario);
  textoPublicacion.value = '';
});
