import { cheatsheets } from "../DATA/cheatsheet.js";

export default function cheatSheetList() {
  const contenedorCheatSheet = document.getElementById("CheatSheetDiv");
  if (contenedorCheatSheet) {
    const cheatsheetsHTML = cheatsheets
      .map((elemento) => {
        return `
          <article class="cheatsheet-card">
            <a href="${elemento.link}" class="cheatsheet-btn">
            <h3>${elemento.name}</h3>
              <img src="${elemento.icon}" alt="${elemento.name}">
              <p>Guía rápida de referencia</p>
            </a>
          </article>
        `;
      })
      .join("");

    contenedorCheatSheet.innerHTML = cheatsheetsHTML;
  }
}