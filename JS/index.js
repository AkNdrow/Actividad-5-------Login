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

    // Lógica del submenú desplegable "Captura"
    const btnMenuUsuarios = document.getElementById("btnMenuUsuarios");
    const subminiCaptura = document.getElementById("subminiCaptura");
    
    if (btnMenuUsuarios && subminiCaptura) {
        subminiCaptura.classList.add("hidden"); // Oculto por defecto
        btnMenuUsuarios.addEventListener("click", () => {
            subminiCaptura.classList.toggle("hidden");
        });
    }

    // Lógica del Formulario y Validaciones (Fase 2 y 3)
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

            // Integración de la nueva indicación: validarPassword
            if (typeof validarPassword === "function" && !validarPassword(password)) {
                alert("La contraseña no cumple con los requisitos mínimos de seguridad.");
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

            // Fase 3: Evaluar la edad y mostrar el modal
            const modalEdad = document.getElementById("modalEdad");
            const modalIcono = document.getElementById("modalIcono");
            const modalTitulo = document.getElementById("modalTitulo");
            const modalMensaje = document.getElementById("modalMensaje");
            const edadNum = parseInt(edad, 10);

            if (edadNum >= 18) {
                modalIcono.textContent = "✅";
                modalTitulo.textContent = "Mayor de Edad";
                modalMensaje.textContent = `El alumno ${nombre} es mayor de edad (${edadNum} años). Los datos fueron verificados.`;
            } else {
                modalIcono.textContent = "⚠️";
                modalTitulo.textContent = "Menor de Edad";
                modalMensaje.textContent = `El alumno ${nombre} es menor de edad (${edadNum} años). Requiere una carta responsiva del tutor.`;
            }

            if (modalEdad) {
                modalEdad.classList.remove("hidden");
            }
        });
    }

    // Lógica para cerrar el Modal (Fase 3)
    const btnCerrarModal = document.getElementById("btnCerrarModal");
    const modalEdad = document.getElementById("modalEdad");
    
    if (btnCerrarModal && modalEdad) {
        btnCerrarModal.addEventListener("click", () => {
            modalEdad.classList.add("hidden");
            if (formAlumnos) formAlumnos.reset(); // Limpia los campos
        });
    }
});