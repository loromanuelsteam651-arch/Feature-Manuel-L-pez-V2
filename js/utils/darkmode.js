
const darkmode = () => {
  const darkModeToggle = document.getElementById("modoOscuroToogle")
  const body = document.body

  if (!darkModeToggle) return

  const savedTheme = localStorage.getItem("theme")
  const isDarkMode = savedTheme === "dark"

  const updateIcon = (isDark) => {
    const sunIcon = darkModeToggle.querySelector(".sun-icon")
    const moonIcon = darkModeToggle.querySelector(".moon-icon")

    if (sunIcon && moonIcon) {
      sunIcon.style.display = isDark ? "none" : "block"
      moonIcon.style.display = isDark ? "block" : "none"
    }
  }

  body.classList.toggle("dark-mode", isDarkMode)
  updateIcon(isDarkMode)

  darkModeToggle.addEventListener("click", () => {
    const isDark = body.classList.toggle("dark-mode")
    updateIcon(isDark)
    localStorage.setItem("theme", isDark ? "dark" : "light")
  })
}

export default darkmode