

document.addEventListener("DOMContentLoaded", () => {
    const btnHamburguesa = document.getElementById("btnHamburguesa");
    const sidebar = document.getElementById("sidebar");
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

    
    if (btnHamburguesa && sidebar) {
        btnHamburguesa.addEventListener("click", (e) => {
            e.stopPropagation();
            sidebar.classList.toggle("-translate-x-full");
        });
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
            localStorage.removeItem("usuarioLogueado"); 
            window.location.href = "login.html"; 
        });
    }

    
    const formAlumnos = document.getElementById("formAlumnos");
    const modalEdad = document.getElementById("modalEdad");
    const btnCerrarModal = document.getElementById("btnCerrarModal");

    if (formAlumnos) {
        formAlumnos.addEventListener("submit", (e) => {
            e.preventDefault(); 

            
            const nombre = document.getElementById("nombreAlumno").value.trim();
            const correo = document.getElementById("correoAlumno").value.trim();
            const password = document.getElementById("passAlumno").value.trim();
            const numControl = document.getElementById("numControlAlumno").value.trim();
            const edad = parseInt(document.getElementById("edadAlumno").value.trim(), 10);

            
            if (!nombre || !correo || !password || !numControl || !edad) {
                alert("Todos los campos son obligatorios.");
                return;
            }

            
            if (typeof validarCorreo === "function" && !validarCorreo(correo)) {
                alert("El formato del correo electrónico no es válido.");
                return;
            }

            
            if (typeof validarPassword === "function" && !validarPassword(password)) {
                alert("La contraseña no cumple con los requisitos de seguridad.");
                return;
            }

            
            if (numControl.length !== 6 || isNaN(numControl)) {
                alert("El Número de Control debe constar de exactamente 6 dígitos numéricos.");
                return;
            }

            const modalIcono = document.getElementById("modalIcono");
            const modalTitulo = document.getElementById("modalTitulo");
            const modalMensaje = document.getElementById("modalMensaje");

            if (edad >= 18) {
                modalIcono.textContent = ":)";
                modalTitulo.textContent = "Registro Exitoso";
                modalMensaje.textContent = `El alumno ${nombre} es MAYOR DE EDAD (${edad} años). Los datos fueron validados correctamente en el sistema.`;
            } else {
                modalIcono.textContent = "X";
                modalTitulo.textContent = "Restricción de Edad";
                modalMensaje.textContent = `El alumno ${nombre} es MENOR DE EDAD (${edad} años). Se registrará bajo supervisión de tutor.`;
            }

            modalEdad.classList.remove("hidden");
        });
    }

    
    if (btnCerrarModal && modalEdad) {
        btnCerrarModal.addEventListener("click", () => {
            modalEdad.classList.add("hidden");
            formAlumnos.reset(); // Limpia los campos del formulario
        });
    }
});