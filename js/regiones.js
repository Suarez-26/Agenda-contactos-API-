// URL del recurso de regiones
const URL_REGIONES = "http://localhost:3000/regiones";

// Obtener todas las regiones
export const getRegiones = () => fetch(URL_REGIONES).then(r => r.json());

// Crear una nueva región
export const createRegion = region =>
  fetch(URL_REGIONES, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(region)
  }).then(r => r.json());

// Actualizar una región existente
export const updateRegion = (id, region) =>
  fetch(`${URL_REGIONES}/${id}`, {
    method: "PUT",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(region)
  }).then(r => r.json());

// Eliminar una región
export const deleteRegion = id =>
  fetch(`${URL_REGIONES}/${id}`, { method: "DELETE" });
