const header = `
 <nav>
            <a href="index.html" class="logo"><strong>ML</strong></a>
            <ul class="navList">
                <li><a href="about.html">About</a></li>
                <li><a href="#">Skills</a></li>
                <li><a href="#">Cheatsheets</a></li>
                <li><a href="#">Recursos</a></li>
                <li><a href="contacto.html">Contacto</a></li>
            </ul>
            <button class="hamburguesa" id="btnhamburguesa"  aria-label="Menú de navegación">
                <span></span>
                <span></span>
                <span></span>
            </button>
        </nav>
          <div class="menuNavegacion" id="menudenav">
            <ol class="menulista">
              <li class="elementoListaMenu" id="eleAbout"><a href="about.html">About</a></li>         
              <li class="elementoListaMenu" id="eleSkills"><a href="#skills">Skills</a></li> 
              <li class="elementoListaMenu" id="eleCheatsheet"><a href="#skills">Cheatsheet</a></li> 
              <li class="elementoListaMenu" id="eleRecursos"><a href="#skills">Recursos</a></li> 
              <li class="elementoListaMenu" id="eleContacto"><a href="contacto.html">Contacto</a></li> 
            </ol>
        </div>
`
const footer = `
      <nav class="footer-nav">
        <a href="https://www.youtube.com/watch?v=SbYXkOAoZpI" target="_blank" class="btn btn-primary">GitHud</a>
        <a href="https://www.youtube.com/watch?v=SbYXkOAoZpI" target="_blank" class="btn btn-primary">Linkedin</a>
        <a href="index.html" target="_blank" class="btn btn-primary">Home</a>
        <a href="about.html" class="btn-primary">About</a>
        <a href="contacto.html"class="btn-terciary">Contacto</a>
      </nav>
      <p>Hecho con <span class="heart">❤</span> por Manuel </p>
      <p>&copy; 2026 Manuel López. Todos los derechos reservados.</p>
`
export {header, footer}
