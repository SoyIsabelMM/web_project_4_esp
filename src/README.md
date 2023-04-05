# Proyecto 4: Alrededor de los Estados Unidos

### Descripción general

* Introducción
* Herramientas
* Imágenes

**Figma**

## Introducción: 

Realizamos una página web en formato de red social, donde el usuario podrá agregar fotos y colocar un pie de foto a cada paisaje que agregue, es un formato sencillo que le permitira al usuario editar su información a través de una ventana modal que por defecto se mantiene oculta hasta que se presione el botón "editar".

Podemos encontrar que nuestra página es responsiva, el usuario podrá utilizarlo tanto en su pc como en su celular móvil. 

## Herramientas

* HTML5
* CSS
* JavaScript
* Flexbox by CSS
* Figma 
* Metodología BEM by Yandex
* Medias Queries

Para darle la estructura a nuestro proyecto hemos utilizado **HTML5** y agregamos clases a todas las etiquetas que utilizamos. 

Todos los estilos lo hemos realizado con  la ayuda de **CSS** utilizamos las clases puestas previamente en las etiquetas de nuestro código.

Para las acciones de abrir y cerrar nuestro popup hemos utilizado **JavaScript** con funciones que nos permitieron hacer que nuestro *popup* abra, cierre y edite la información del usuario al presionar el botón guardar. 

Con **Flexbox** pudimos crear el overlay de nuestro popup, adicional de ubicar correctamente los textos de profile y las fotos de elements.

Con **Figma** pudimos guiarnos con el maquetado de la página, como se debia ver al momento de estructurar nuestro código y estilos, lo que definio como se veria el resultado final en el navegador de los usuarios.

Todo nuestro proyecto esta organizado con la metodología **BEM**, la creación de las clases y carpetas se hizo según el orden Bloque, Elemento, Modificador se creo carpeta y archivos para cada selector de estilos, todos se guardaron y ordenaron en su carpeta de blocks y se *@import al archivo index.css* la cual es la que esta enlazada a nuestro HTML5, adicional se creo el archivo vacío .nojekyll.

**Media query** nos ayudo a que nuestro proyecto se pueda ajustar a las diferentes resoluciones de pantalla, dandole estilos especifico para que el maquetado del proyecto no se desborde y cree una barra horizontal

## Imágenes

Para darle un menor peso a las imágenes, hemos utilizado **Tiny** [aquí](https://tinypng.com/), esto nos ayuda a que la página cargue más rápido, también hemos descargado imágenes de [**unsplash**](https://unsplash.com/es) fotos completamente gratuitas y sin derecho de autor.

## Actualización de proyecto: 

Hemos actualizado nuestro proyecto, agregando funcionalidades a los botones de agregar imágenes nuevas a la galeria de fotos, like y delete: 

**Agregar imágenes** Ahora podemos agregar imágenes con el botón *add Picture* utilizamos **JavaScript** para poder clonar una tarjeta con todos sus elementos pero a la hora de agregar imagenes podemos pasarle una URL y agregar un nombre nuevo, para poder copiar el nombre y que aparezca en la imágen nueva, le indicamos a nuestro JS que utilizara la propiedad *ALT* de imagenes para tomar ese dato y agregarlo. 

**Like** Ahora al hacer click en el botón *like* este se activa y se pone negro, el efecto hover desaparece cuando esta activo el like, pero cuando volvemos al dislike nos volvemos a encontrar con nuestro hover. 

**Delete** agregamos con *CSS* un nuevo botón a las tarjetas de imágenes con el icono de papelera, a este botón le dimos vida con **JavaScript** haciendo que cuando el usuario pueda eliminar las tarjeras. 

<<<<<<< HEAD:README.md
**Validación** Se realizo código de validación para comprobar la información ingresada en los formularios, aquí refactorizamos y utilizamos clases para envolver el código y sea independiente.
=======
## Ajustes

Hemos refactorizado el código, ahora toda la logica la hemos encapsulado en clases, tambien minimizamos el código utilizando webpack.
>>>>>>> Develop:src/README.md

**Enlace para GitHub:**  https://github.com/SoyIsabelMM/web_project_4_esp