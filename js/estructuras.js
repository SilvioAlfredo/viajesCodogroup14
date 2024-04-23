const contenedorLugares = document.querySelector('.destinos');
const rutaDestinosJSON = 'destinos.json';

fetch(rutaDestinosJSON)
  .then(response => response.json())
  .then(data => {
    for (const dato of data) {
      const titulo = dato.title;
      const src = dato.src;
      const nuevoLi = document.createElement('li');
      nuevoLi.innerHTML = `<img class="imagenDestinos" src="${src}" alt="${titulo}"><h4>${titulo}</h4>`;
      nuevoLi.classList.add('styleDestino');
      contenedorLugares.appendChild(nuevoLi);
    }
  })
  .catch(err => console.error('Error al leer el archivo JSON:', err));


const contenedorAclamadas = document.querySelector('.seccionAclamadas');
const rutaVisitadosJSON = 'visitados.json';

fetch(rutaVisitadosJSON)
  .then(response => response.json())
  .then(data => {
    for (const dato of data) {
      const titulo = dato.title;
      const src = dato.src;
      const nuevoLi = document.createElement('li');
      nuevoLi.innerHTML = `<img class="imagenDestinos" src="${src}" alt="${titulo}"><h4>${titulo}</h4>`;
      nuevoLi.classList.add('styleAclamadas');
      contenedorAclamadas.appendChild(nuevoLi);
    }
  })
  .catch(err => console.error('Error al leer el archivo JSON:', err));