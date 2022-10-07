# **Desarrollo web**

> HTML : Estructura (.html)

> CSS : Hojas de estilo (.css)

> Funcionalidades : javascript (.js)

## **HTML**

Siempre el archivo comienza con `<!DOCTYPE html>` que informa al navegador de la version de html que se usará.

* Elementos: Componentes básico de la estructura.
* Etiquetas: Especifican el tipo de elemento que se va a crear. `<tipo_de_elemento>` 

La mayoria de elementos necesitan elementos de apertura y de cierre aunque hay algunas etiquetas que pueden cerrarse sola de la siguiente forma:

* Forma tradicional: `<html> </html>`
* Etiqueta que se cierra sola: `<img />`

```html
<!DOCTYPE html>
<html lang="es">
  <head>
      Elementos que actuan detras de escena, no forman la estructura principal de la página.
  </head>
  <body>
      Definimos la estructura de la página
  </body>
</html>
```

Para especificar el idioma de la página usaremos un atributo en la etiqueta `<html lang="es">`

### **Etiquetas**

* Encabezados: `<h1> </h1>`, h2, h3 ....
* Párrafos: `<p> </p>`
* Comentarios: `<!-- Comentario -->`
* Uso de main: `<main> </main>` Se usa para los temas centrales de la aplicación -> buscar en la documentacion.
* Imágenes: `<img src="https://..."> alt="Esta es una imagen"`
* Hipervinculos: `<a href="https://.."> Enlace </a> ` para que se abra en otra pagina se usa: `target="_blank"` y por seguridad se suele añadir: `rel="noopener noreferrer"`.
* Enlaces muertos: `<a href=#""> </a>`
* Lista no ordenada:
    ```html
    <ul>
      <li> Unordened list </li>
      <li> Second element </li>
    </ul>
  ```
* Lista ordenada:
    ```html
      <ol>
        <li> First </li>
        <li> Second </li>
        <li> Third </li>
      </ol>
    ```
* Aplicar negritas: `<strong> </strong>`
* Aplicar cursivas: `<em> </em>`
* Aplicar tachado: `<s> </s>`
* Linea horizontal: `<hr>`
* Pie de página: ```<footer> </footer>```
* Contenedor div: Se usa para agrupar contenido de la página y aplicar los estilos correspondientes a dicho contenido..
* Hacer contenido mas pequeño: `<small> </small>`
* Head: `<head> </head>` Dentro de esta etiqueta incluiremos los archivos css, js, añadir el titulo de la página `<tittle> </tittle>`
### **Formularios:**

  ```html 
  <form action="/enviar-respuesta"> 
    <input type="text" placeholder="Pon algo">
    <button type="submit"> Enviar </button>
  </form>
  ```

El action representa el archivo en el servidor que gestionaria el formulario.

Crear un campo obligatorio: `<input type="text" placeholder="Pon algo"> required`
* Botones de radio:
  ```html 
  <form action="/enviar-respuesta"> 
    <label><input type="radio"> First </label>
    <label><input type="radio"> Second option </label>
    <input type="text" placeholder="Pon algo">
    <button type="submit"> Enviar </button>
  </form>
  ```
Y si queremos que solo queremos que se marque una opcion por cada boton de radio se hace con el atributo name añadiendo los botones al mismo grupo de botones de radio:
  ```html 
  <form action="/enviar-respuesta"> 
    <label><input type="radio" name="grupo"> First </label>
    <label><input type="radio" name="grupo"> Second option </label>
    <input type="text" placeholder="Pon algo">
    <button type="submit"> Enviar </button>
  </form>
  ```
* Salto de linea: `<br>`
* Casillas de verificacion: `<label><input type="checkbox" name="grupo"> First </label>` El name no cambia el comportamiento en estos elementos.
* Marcar opciones por defecto: Atributo checked. `<label><input type="radio" name="grupo" checked> First </label>`
* Atributo value que se envia al servidor en las casillas de verificacion y botones radiales:
```html
    <label><input type="radio" name="grupo" value="First"> First </label>
    <label><input type="checkbox" name="grupo" value="Check"> Check </label>
```
### **Enlaces internos**

```html
<a href="#encabezado1"> ir a Hola </a>
<h1 id="encabezado1"> Hola </h1>
```

### **Imagenes con enlaces**

```html
<a href="https://..."> <img src="../imagen.jpg"> </a>
```

 <center> <h1> <a href="https://developer.mozilla.org/es/" target="_blank" rel="noopener noreferrer"> <strong> Documentacion </strong> </a> </h1> </center> 

## **CSS**

Hay tres formas de añadir estilos:

1. Estilos en línea: Se añade directamente a la etiquetas de apertura del elemento: `<h2 style="color: blue"> Color azul </h2>`
2. Etiqueta style: Se añaden los estilos en el head de la siguiente forma:
```html
<head>
  <style>
    h2 {
      color: blue;
    }
  </style>
</head>
```
3. Archivo .css: Se crean archivos a parte para crear el contenido de la pagina, esta es la opción recomendada.

### **Archivo .css**

Lo primero que haremos es añadir nuestro archivo al head con la siguiente linea: `<link href="../ruta.css" rel="stylesheet">`

### **Selectores css**

* Selector universal: `* { }
* Selectores de clase: `h1 { }`,  si creamos una clase será con un "." un ejemplo: `.myclass { }`
* Seleccionar por id:
`#imagen-1 { }`
* Selectores de atributo:
```css
img[alt] {
  Se incluye este estilo a las imagenes con el atributo alt.
}
[type="radio"]{
  Se incluye este estilo a los que tengan este atributo con este valor.
}
```
### **Fuentes y tamaños**

`font-family` es usado para indicar una familia de fuentes que se usan en orden de prioridad, para mas información ir a la documetación.

[Google fonts](fonts.google.com) : Es una herramienta útil, primero elegimos la fuente que queremos, luego añadimos los link en el head, por último usamos la `font-family` en el .css

Para usar fuentes de faimlia de respado las añadimos por comas en font-family, un ejemplo es el siguiente:

```css
h2 {
  font-family: 'Ephesis', sans-serif;
}
```
Unidades absolutas vs realtivas:
* Pixeles: px.
* Unidad dependiente del tamaño de letra: em.
* Unidad dependiente de la ventana: vw.

### **Bordes**
```css
.imagen {
  width: 200px;
  border-width: 10px;
  border-color: blue;
  border-style: solid; 
  (se aplica a todo pero podría hacerse tal que: "solid dashed dotted double")
  Ahora si quisieramos redondear el borde:
  border-radius: 50%; 
}
```
* Border: Borde del elemento.
* Padding: Espacio entre el contenido del elemento y su borde
* Margin: Margen entre el elemento y el siguiente o los bordes de la página.

### **Variables**

Declararla global para heredarla entre elementos:
```css
:root {
  --variable: blue;
}
```

Si la queremos cambiar la redeclaramos en el elemento que queramos.

Además, al usar variables podemos declarar valores de respaldo:

```css
body {
  background-color: var(--variable, blue)
}
```
<center> <h1> <a  href="https://developer.mozilla.org/es/" target="_blank" rel="noopener noreferrer"> <strong> Documentacion </strong> </a> </h1> </center> 