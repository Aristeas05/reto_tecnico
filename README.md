# Reto Técnico 

El siguiente reto técnico fue desarrollado como parte del un proceso de selección para el puesto de "Analista Técnico - Front Pleno".

La web comprende un flujo de identificación donde al ingresar, se cotizara un seguro de pago mensual.

# Librerias/Frameworks/Herramientas/Metodologías usadas

Se procederá a mencionar las librerias usadas en el proyecto y el porqué se implementaron:

* [Node.JS](https://nodejs.org/es/) - Entorno de ejecución usado para ejecutar JavaScript. Este entorno es necesario para la correcta ejecución de React.
* [React.JS](https://es.reactjs.org) - Librería Javascript para la construcción del UI. Se uso esta librería por que fue uno de los requerimientos base para la construcción de este reto técnico.
* [Bootstrap](https://getbootstrap.com) - Framework para el desarrollo de web-apps y responsive. Se implemento bootstrap en el proyecto por que permite un manejo del gridlayout y responsive muy fluido, aparte del conocimiento que ya se tenia usando esta herramienta.
* [Axios](https://github.com/axios/axios) - Libreria JavaScript para operaciones HTTP como cliente. Se requirió de esta librería por su simplicidad a la hora de consumir servicios y por preferencia personal, en lugar del clásico fetch().
* [Material UI](https://material-ui.com) - Framework que trae componentes para React basados en los principios de Material Design. Este framework se requirió por su gran cantidad de componentes que facilitan la creación de la UI en la web-app, por medio de componentes reciclables.
* [Redux](https://es.redux.js.org) - Contenedor de estados para JavaScript. El uso de esta herramienta se debe a su facilidad para llevar la data a cualquier parte de la SPA, por lo cual facilita la comunicación en gran escala. También fue seleccionada por la experiencia que se tenia manejando la herramienta en contraste de otras opciones.
* [Atomic Desing](https://bradfrost.com/blog/post/atomic-web-design/) - Sistema de trabajo que se basa en la creación de elementos modulares sencillos. Se implemento el uso de esta metodología para la correcta estructuración de los componentes, dependiendo del contenido o que tantos componentes referenciaban dentro de si mismos.
* [Sass](https://sass-lang.com) - Procesador de css. Se uso este procesador para tener un mejor manejo de las clases en las hojas de estilo, ya que el solo usar css base te restringe de muchos beneficios que te brinda sass, como la anidación de clases y estilos dentro de una clase.
* [Heroku](https://www.heroku.com) - PassS(Plataforma como servicio) en la nube para el despliegue de aplicaciones. Se eligió esta herramienta para el despliegue de la web-app por su facilidad de uso y conexión con GitHub.
* [GitHub](https://github.com) - Plataforma de desarrollo colaborativo para el almacenamiento de proyectos y sistema de control de versiones. La elección de esta herramienta se debe al manejo y experiencia ya adquirida con la misma, ya sea con la estructuración de los commits y el uso de las ramas.

# Construcción de la web-app
Se comenzó seccionando la web entre maquetación y lógica, priorizando la maquetación. Se eligió este camino por motivos de facilidad de desarrollo al ya tener toda la plantilla construida y solo tener que aplicar la lógica realizando cambios mínimos a la estructura de la web. Ademas por preferencia personal, el maquetado es más rápido de realizar.

La construcción se hizo siguiendo estos pasos:
* Primera vista (Login o ingreso de datos)
* Tercera vista (Gracias o final)
* Segunda vista (Elección de seguro o tratamiento de datos)
* Lógica de comunicación entre vistas
* Lógica de redireccionamiento

# Pasos para clonar el proyecto

Correr en consola el siguiente comando, estando en la ruta/carpeta donde se descargara:

```
git clone https://github.com/Aristeas05/reto_tecnico.git
```

Luego de descargado el proyecto, correr el siguiente comando para la instalación de todas las dependencias y/o librerias:

```
npm install
```

# Consideraciones del proyecto

* Debido al formato del End-Point proporcionado para el consumo de usuarios, solo se procedió a validar con el campo "phone", ya que es el único que hace match con lo ingresado en el formulario de entrada de la web-app.
* La resolución base en la que se desarrollo la web es de 1360px x 760px, responsive incluido para las medidas respectivas.

---
Implementación hecha por Luis Alberto Arce Llantoy
