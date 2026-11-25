import productos from "../DATA/skills.js";

const contenedorProductos = document.getElementById("contenedorSkills");

function crearCard(item) {
  const tagsFormateados = Array.isArray(item.tags)
    ? item.tags.join(", ")
    : item.tags;

  return `
    <div class="producto-card">
      <h3>${item.nombre}</h3>
      <span class="nivel">${item.nivel}</span>
      
      <p class="descripcion">${item.descripcion}</p>
      <span class="tags">${tagsFormateados}</span>
      <span class="icono"><strong>${item.icono}</strong></span>
    </div>
  `;
}

export function renderizarSkills() {
  if (!contenedorProductos) return;

  const htmlProducto = productos.map(crearCard).join("");
  contenedorProductos.innerHTML = htmlProducto;
}

