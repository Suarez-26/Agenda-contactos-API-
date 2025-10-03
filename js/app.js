// URL del recurso de países en JSON Server
const URL_PAISES = "http://localhost:3000/paises";

// Obtener todos los países
export const getPaises = () => fetch(URL_PAISES).then(r => r.json());

// Crear un país nuevo
export const createPais = pais =>
  fetch(URL_PAISES, {
    method: "POST", // Se usa POST para crear
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(pais) // Se envía el objeto convertido a JSON
  }).then(r => r.json());

// Actualizar un país por ID
export const updatePais = (id, pais) =>
  fetch(`${URL_PAISES}/${id}`, {
    method: "PUT", // Se usa PUT para actualizar
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(pais)
  }).then(r => r.json());

// Eliminar un país por ID
export const deletePais = id =>
  fetch(`${URL_PAISES}/${id}`, { method: "DELETE" });
