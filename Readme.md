<div align="center">
<br><br>

### Ingenieria en sistemas computacionales

<br>

#### Programación web

#### Tema 2

<br>

#### Actividad 5

# Proyecto de Login


<br><br><br>

**Docente:**<br>
Ing. Adelina Martínez Nieto

<br><br>

**Estudiantes:**<br>
Cuevas Garcia Andrés
<br>
Pascual Coyolt Moises
<br>

<br><br><br><br><br><br>

Oaxaca de Juarez, Oaxaca.
<br><br>
12 de Julio de 2026

</div>


# Proyecto de Login

-----
1.- 


### 1. Pantalla de Acceso (`login.html`)
Se diseñó e implementó la interfaz completa para el inicio de sesión del sistema utilizando Tailwind CSS. Este módulo se encarga de recibir las credenciales del usuario (correo electrónico y contraseña) y procesar la autenticación en el cliente. Cuenta con una intercepción del evento de envío para verificar que los campos no estén vacíos. Una vez validados los datos, el script almacena la identidad del usuario en el navegador y gestiona la redirección automática hacia el panel principal.

---

### 2. Barra de Navegación Superior (`index.html` - Navbar)
Se programó la barra superior fija del panel de control interno. Este componente incluye:
* El botón de activación con patrón hamburguesa que servirá de disparador para el menú lateral.
* Un menú desplegable interactivo para el usuario que inició sesión.
* La maquetación responsiva basada en los estilos oficiales de la plataforma.

---

### 3. Gestión del Estado de la Sesión (`js/index.js`)
Se desarrolló la lógica encargada de comunicar ambas pantallas sin necesidad de tecnologías en el servidor, utilizando la API de `localStorage`:
* **Persistencia:** Al iniciar sesión en `login.html`, se ejecuta `localStorage.setItem` para guardar el correo del usuario de forma síncrona.
* **Lectura:** Al cargar `index.html`, el script realiza un `localStorage.getItem` para extraer el nombre del usuario conectado e inyectarlo dinámicamente en el contenedor de la barra superior.
* **Cierre de sesión:** Al pulsar el botón de salida en el menú desplegable del Navbar, se ejecuta `localStorage.removeItem` para limpiar las credenciales de la memoria del navegador y redirigir inmediatamente el flujo de vuelta a la pantalla de acceso.

---

### 4. Estructura de la Librería de Validaciones (`js/Libreria.js`)
Se crearon las funciones base dentro de la librería compartida del proyecto para que puedan ser consumidas por el módulo de captura escolar:
* **`validarCorreo(correo)`:** Método que evalúa mediante una expresión regular que la cadena ingresada corresponda a la estructura de un correo electrónico válido.
* **`validarPassword(password)`:** Función que comprueba las reglas básicas de seguridad, verificando que la contraseña cumpla con una longitud mínima de 8 caracteres y contenga al menos una letra y un número.