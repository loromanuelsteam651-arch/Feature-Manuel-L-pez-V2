import {cheatsheets}  from "../DATA/cheatsheet"

export default  function cheatSheetList(){
 const contenedorCheatSheet = document.getElementById("CheatSheetDiv")
 const cheatsheetsHTML = cheatsheets.map((elemento) => {
    return `
     <article class="cheatsheet-card">
        <a href="${elemento.link}"></a>
        <img src="${elemento.icon}" alt="${elemento.name}">
        <h3>${elemento.name}</h3>
     </article>
    `

 })
 .join("")
 contenedorCheatSheet.innerHTML = cheatsheetsHTML
}
