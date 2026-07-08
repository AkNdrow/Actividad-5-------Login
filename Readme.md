# Proyecto de Login y Sistema Académico
**Integrantes:** * Moisés Pascual Coyolt
* Cuevgas Garcia Andres 

-----
1.- 
## 📘 Documentación del Sistema Académico (`index.html`)

### 1. Arquitectura y Framework Visual Usado
Para el desarrollo de la interfaz interna del sistema se utilizó **Tailwind CSS (Versión 4)** como librería visual, integrada de manera eficiente mediante su CDN oficial. Esto permitió:
* Un diseño limpio, moderno y responsivo sin saturar el proyecto con archivos CSS externos masivos.
* Uso de componentes modulares como el **Sidebar** y el **Navbar** basados en arquitecturas reales de paneles de control corporativos.

---

### 2. Flujo de Datos entre Pantallas (Manejo de Sesión sin Backend)
Dado que el proyecto consta de dos pantallas independientes (`login.html` e `index.html`), se implementó la API nativa del navegador **`localStorage`** para comunicar los datos de forma síncrona:

1. **Persistencia:** Al pasar exitosamente las validaciones en el acceso, el archivo `login.js` guarda la identidad del usuario en el navegador utilizando `localStorage.setItem('usuarioLogueado', valor)`.
2. **Recepción en el Panel:** Inmediatamente al cargar `index.html`, nuestro archivo `js/index.js` ejecuta `localStorage.getItem('usuarioLogueado')`. Si el dato existe, se inyecta dinámicamente en el Navbar; de lo contrario, se le trata como usuario anónimo o se restringe el acceso.
3. **Cierre de Sesión:** Al pulsar la opción "Salir del sistema" en el dropdown del Navbar, se ejecuta `localStorage.removeItem('usuarioLogueado')`, limpiando la memoria del navegador y redirigiendo de inmediato al usuario de vuelta a `login.html`.

---

### 3. Proceso de Creación Paso a Paso

#### Paso A: Barra Superior Dinámica (Navbar)
Se estructuró un contenedor fijo (`fixed top-0`) con una altura de 16 unidades (`h-16`). En el extremo izquierdo se posicionó el **botón hamburguesa**, el cual mediante un evento de clic en JavaScript conmuta la clase `-translate-x-full` en el Sidebar para ocultarlo o mostrarlo dinámicamente. En el extremo derecho se programó un menú desplegable (*Dropdown*) interactivo empleando la clase `hidden` de Tailwind, la cual se activa o desactiva con un interruptor lógico de JS (`classList.toggle('hidden')`).

#### Paso B: Menú Lateral de Navegación (Sidebar)
Se diseñó un menú fijo a la izquierda (`fixed left-0`) que ocupa todo el alto disponible de la pantalla restando el Navbar. Se incluyó la sección principal **"Usuarios"**, la cual despliega de manera identada el submenú obligatorio **"Captura"**. Este submenú funciona mediante un enlace de anclaje directo hacia el formulario principal.

#### Paso C: Formulario de Alumnos e Integración de Librería
El módulo de captura contiene un formulario estructurado de manera semántica (`<form id="formAlumnos">`). Los campos de texto y contraseñas consumen las funciones modulares de validación asíncronas de la librería compartida del proyecto (`Libreria.js`). 
* **Validación Especial de Rúbrica:** Se inyectó una regla estricta sobre el campo "Número de Control", evaluando mediante JavaScript que la longitud de la cadena (`.length`) sea exactamente igual a **6 dígitos numéricos** y bloqueando cualquier intento de envío de datos corruptos mediante el método `e.preventDefault()`.

#### Paso D: Despliegue Lógico del Modal de Edad
Se maquetó una caja modal flotante oculta por defecto en el flujo del DOM. Al dar clic en "Registrar" y pasar todas las validaciones previas, JavaScript evalúa la condicional de la edad del alumno:
* **Si `edad >= 18`:** Modifica el DOM pintando un icono de éxito (:) y un mensaje confirmando que el alumno es Mayor de Edad.
* **Si `edad < 18`:** Modifica el modal pintando un icono de advertencia (X) detallando la restricción de edad.
Posteriormente, remueve la clase `hidden` para mostrar el modal de forma emergente con un efecto de desenfoque de fondo (`backdrop-blur-sm`).

---

###  Métodos y Funciones Principales Implementadas
* **`localStorage.getItem()` / `removeItem()`**: Gestión del estado de la sesión del usuario entre pantallas.
* **`classList.toggle()`**: Control de visibilidad del menú lateral (Sidebar) y el dropdown de usuario sin necesidad de mutar estilos en línea.
* **`e.preventDefault()`**: Intercepción del envío del formulario para procesar las validaciones del lado del cliente antes de otorgar una respuesta.