import darkmode from "./utils/darkmode.js";
import menu from "./utils/menu.js";
import { header, footer } from "./templates/templates.js";
import { renderizarSkills } from "./utils/skillsList.js";
import cheatSheetList from "./utils/cheat.js" 

const mainHeader = document.querySelector("#mainHeader");
const mainFooter = document.querySelector("#mainFooter");

if (mainHeader) {
  mainHeader.innerHTML = header;
}
if (mainFooter) {
  mainFooter.innerHTML = footer;
}

renderizarSkills();
darkmode();
menu();
cheatSheetList(); 