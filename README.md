# Ejecucion 
1.) primero installe las dependencias en el front con el comando npm install en la consola
2.) Para ejecutar el proyecto debera correr el backend primero con el comando npm start y saber la ruta del api del misma, por defecto se estan haciondo consultas a los endpoints del dominio loclahost:3000 , por lo que si se ejecuta el api del backend en otro puerto u otro dominio, debera modificar todos los campos que hacen referencia a esta direccion en el frontend.
2.) Despues de ejecutar el Backend y cersiorarse de la ejecucion del backend coincida con las direcciones que se usan en el front, ejecute el comando npm start en la consola del front, esto le despelgara la pagina en su navegador de preferencia.
3.) Una vez desplegado, podra realizar el login y navegar por los diferentes libros.



# Decisiones
1.) Se crearon los componentes App, navBar, login,detail,books,book y bookManager
2.) El componente App es el punto de entrada de la aplicación y es responsable de renderizar el formulario de inicio de sesión (LoginForm) o el componente BookManager dependiendo del estado de autenticación (isLoggedIn).
3.) El componente BookManager es responsable de la gestión de la página principal de la aplicación de gestión de libros. Renderiza la barra de navegación (NavBar), la colección de libros (Books) y los detalles de un libro (Detail).
4.) El componente Books es responsable de mostrar la colección de libros en la página principal de la aplicación. Utiliza el componente Book para renderizar cada libro en forma de tarjeta.
5.) El componente Book es responsable de renderizar una tarjeta de libro con su imagen, título y número ISBN.
6.) El componente Detail es responsable de mostrar los detalles de un libro específico en una interfaz de usuario. Este componente se utiliza dentro de la aplicación para visualizar información detallada sobre un libro seleccionado.
7.) Se implementó la gestión del estado local utilizando el hook useState de React para controlar los datos del formulario de inicio de sesión y el estado de autenticación.
8.) Se utilizó el componente BrowserRouter de la librería react-router-dom para habilitar la navegación entre diferentes vistas de la aplicación. Se crearon rutas para el login y la página principal.
9.) Se agregó validación de formulario en el componente Login utilizando el atributo required de los campos de entrada y se mostraron mensajes de error en caso de campos vacíos o incorrectos.
10.) Se utilizó el componente axios para realizar las peticiones HTTP al backend. Se implementaron funciones en el componente Login para enviar la solicitud de inicio de sesión y manejar la respuesta del servidor.
11.) Se implementó la protección de rutas utilizando el componente PrivateRoute, que verifica si el usuario está autenticado antes de permitir el acceso a las vistas protegidas. Si el usuario no está autenticado, se redirige automáticamente al inicio de sesión.
12.) Se utilizó el framework de CSS Bootstrap para aplicar estilos a los componentes y lograr un diseño atractivo y responsivo.
13.) Se implementó la internacionalización con react-intl en la aplicación mediante el uso de archivos de traducción en formato JSON. Se crearon archivos es.json y en.json para proporcionar las traducciones en español e inglés, respectivamente. 

