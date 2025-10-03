// URL del recurso de ciudades
const URL_CIUDADES = "http://localhost:3000/ciudades";

// Obtener todas las ciudades
export const getCiudades = () => fetch(URL_CIUDADES).then(r => r.json());

// Crear una ciudad nueva
export const createCiudad = ciudad =>
  fetch(URL_CIUDADES, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(ciudad)
  }).then(r => r.json());

// Actualizar ciudad por ID
export const updateCiudad = (id, ciudad) =>
  fetch(`${URL_CIUDADES}/${id}`, {
    method: "PUT",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(ciudad)
  }).then(r => r.json());

// Eliminar ciudad por ID
export const deleteCiudad = id =>
  fetch(`${URL_CIUDADES}/${id}`, { method: "DELETE" });
