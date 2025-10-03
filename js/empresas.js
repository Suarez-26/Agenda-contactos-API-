// URL del recurso de empresas
const URL_EMPRESAS = "http://localhost:3000/empresas";

// Obtener todas las empresas
export const getEmpresas = () => fetch(URL_EMPRESAS).then(r => r.json());

// Crear una empresa
export const createEmpresa = empresa =>
  fetch(URL_EMPRESAS, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(empresa)
  }).then(r => r.json());

// Actualizar una empresa
export const updateEmpresa = (id, empresa) =>
  fetch(`${URL_EMPRESAS}/${id}`, {
    method: "PUT",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(empresa)
  }).then(r => r.json());

// Eliminar empresa
export const deleteEmpresa = id =>
  fetch(`${URL_EMPRESAS}/${id}`, { method: "DELETE" });
