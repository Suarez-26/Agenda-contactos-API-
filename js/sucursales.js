// URL del recurso de sucursales
const URL_SUCURSALES = "http://localhost:3000/sucursales";

// Obtener todas las sucursales
export const getSucursales = () => fetch(URL_SUCURSALES).then(r => r.json());

// Crear una sucursal nueva
export const createSucursal = sucursal =>
  fetch(URL_SUCURSALES, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(sucursal)
  }).then(r => r.json());

// Actualizar sucursal por ID
export const updateSucursal = (id, sucursal) =>
  fetch(`${URL_SUCURSALES}/${id}`, {
    method: "PUT",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(sucursal)
  }).then(r => r.json());

// Eliminar sucursal
export const deleteSucursal = id =>
  fetch(`${URL_SUCURSALES}/${id}`, { method: "DELETE" });
