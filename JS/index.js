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

    // Lógica del Formulario y Validaciones (Fase 2)
    const formAlumnos = document.getElementById("formAlumnos");

    if (formAlumnos) {
        formAlumnos.addEventListener("submit", (e) => {
            e.preventDefault();

            const nombre = document.getElementById("nombreAlumno").value.trim();
            const correo = document.getElementById("correoAlumno").value.trim();
            const password = document.getElementById("passAlumno").value.trim();
            const numControl = document.getElementById("numControlAlumno").value.trim();
            const edad = document.getElementById("edadAlumno").value.trim();

            if (!nombre || !correo || !password || !numControl || !edad) {
                alert("Todos los campos son obligatorios.");
                return;
            }

            // Uso de la librería de validación (CDN)
            if (typeof validarCorreo === "function" && !validarCorreo(correo)) {
                alert("El formato del correo electrónico no es válido.");
                return;
            }

            if (typeof soloNumeros === "function" && !soloNumeros(numControl)) {
                alert("El Número de Control debe contener solo números.");
                return;
            }

            if (numControl.length !== 6) {
                alert("El Número de Control debe tener exactamente 6 dígitos.");
                return;
            }

            console.log("Validaciones pasadas correctamente para el alumno:", nombre);
            // La lógica del modal (Fase 3) se conectará aquí en el siguiente paso.
        });
    }
});