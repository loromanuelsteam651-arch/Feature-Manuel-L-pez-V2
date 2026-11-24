const darkmode = () => {
    const darkModeToogle = document.getElementById(`darkModeToogle`)
    const body = document.body

    if (!darkModeToogle) return

    const savedTheme = localStorage.getItem('theme');
    const isDarkMode = savedTheme === 'dark';

    const updateIcon = (isDark) => {
        const sunIcon = darkModeToogle.querySelector(`.sun-icon`)
        const moonIcon = darkModeToogle.querySelector(`.moon-icon`)

        if (sunIcon && moonIcon){
            sunIcon.style.display = isDark ? `none` : `block`
            moonIcon.style.displau = isDark ? `block` : `none`
        }
    }
    if (isdarkMode){
        body.classList.add(`dark-mode`)
        updateIcon(true)
    }

    darkModeToogle.addEventListener("click", () => {
        const isdark = body.classList.toogle(`dark-mode`)
        updateIcon(isDark)
        localStorage.setItem(`theme`, isDark ? `dark` : `light`)
    })
}
export default darkmode