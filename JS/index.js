document.addEventListener("DOMContentLoaded", () => {
    const btnUsuarioDropdown = document.getElementById("btnUsuarioDropdown");
    const usuarioDropdown = document.getElementById("usuarioDropdown");
    const btnSalir = document.getElementById("btnSalir");
    const nombreUsuarioNavbar = document.getElementById("nombreUsuarioNavbar");

    
    const usuarioLogueado = localStorage.getItem("usuarioLogueado");
    if (usuarioLogueado) {
        nombreUsuarioNavbar.textContent = usuarioLogueado;
    } else {
        nombreUsuarioNavbar.textContent = "Usuario Anónimo";
    }


    if (btnUsuarioDropdown && usuarioDropdown) {
        btnUsuarioDropdown.addEventListener("click", (e) => {
            e.stopPropagation();
            usuarioDropdown.classList.toggle("hidden");
        });
    }

    
    document.addEventListener("click", () => {
        if (usuarioDropdown) usuarioDropdown.classList.add("hidden");
    });

    
    if (btnSalir) {
        btnSalir.addEventListener("click", () => {
            localStorage.removeItem("usuarioLogueado"); // Limpia el localStorage
            window.location.href = "login.html"; // Redirige al login
        });
    }

    // Lógica del Sidebar (Fase 1)
    const btnHamburguesa = document.getElementById("btnHamburguesa");
    const sidebar = document.getElementById("sidebar");

    if (btnHamburguesa && sidebar) {
        btnHamburguesa.addEventListener("click", (e) => {
            e.stopPropagation();
            sidebar.classList.toggle("-translate-x-full");
        });
    }
});