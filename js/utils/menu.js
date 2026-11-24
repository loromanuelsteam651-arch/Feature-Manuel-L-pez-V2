const btnmenu = document.getElementById("btnhamburguesa")
const menNav = document.querySelector("#menudenav")
const elelistmen = document.querySelectorAll(".elementoListaMenu")
console.log(btnmenu)
console.log(elelistmen)

btnmenu.addEventListener("click", () => 
  menNav.classList.toggle("abierto")
)

elelistmen.forEach((link) => {
  link.addEventListener("click", () => {
    menNav.classList.remove("abierto")
  })
})
document.addEventListener("click", (e) => {
  if (!menNav.contains(e.target) && !btnmenu.contains(e.target))
    menNav.classList.remove("abierto")
})

export default menu; 