const menu = () => {
  const btnmenu = document.getElementById("btnhamburguesa")
  const menNav = document.querySelector("#menudenav")

  if (!btnmenu || !menNav) return

  const elelistmen = menNav.querySelectorAll(".elementoListaMenu")

  btnmenu.addEventListener("click", () => {
    menNav.classList.toggle("abierto")
  })

  elelistmen.forEach((link) => {
    link.addEventListener("click", () => {
      menNav.classList.remove("abierto")
    })
  })

  document.addEventListener("click", (event) => {
    if (!menNav.contains(event.target) && !btnmenu.contains(event.target)) {
      menNav.classList.remove("abierto")
    }
  })
}

export default menu