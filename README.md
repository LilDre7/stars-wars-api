# Prueba Técnica para Desarrollador Frontend con React

El objetivo de esta prueba es evaluar tus habilidades como desarrollador Frontend trabajando con React, así como tu capacidad para utilizar una API pública, estructurar un proyecto, manejar estados, crear componentes reutilizables y desplegar una aplicación. Además, evaluaremos cómo implementas funcionalidades comunes como autenticación básica, manejo de datos dinámicos y diseño atractivo.

---

<video loop autoplay muted>
  <source src="gif.mp4" type="video/mp4">
  Your browser does not support the video tag.
</video>

## Requisitos de la Prueba

1. **Elegir una API pública**  
   Puedes seleccionar cualquier API pública gratuita como base de datos para tu proyecto. Algunas sugerencias son:

   - Rick and Morty API
   - Breaking Bad API
   - PokeAPI
   - O cualquier otra API de tu elección.

2. **Crear un proyecto con React**

   - Utiliza Create React App, Vite, o cualquier otra herramienta de inicialización para crear tu proyecto.
   - Debes usar **JavaScript** o **TypeScript** (a tu elección).

3. **Estructura del proyecto**

   - El proyecto debe incluir al menos tres páginas principales:
     1. **Página de Login/Registro**:
        - Implementar un formulario básico de inicio de sesión y registro.
        - Puedes manejar los datos de usuario de forma local (por ejemplo, en el estado o localStorage).
        - Validaciones básicas en el formulario (ejemplo: campos requeridos, formato de email válido).
     2. **Página de Inicio (Home)**:
        - Mostrar datos obtenidos desde la API elegida.
        - Implementar una barra de búsqueda y filtros para los datos (por ejemplo, buscar personajes por nombre).
        - Mostrar imágenes y descripciones de los elementos.
     3. **Página de Creación/Edición**:
        - Crear un formulario que permita agregar un nuevo elemento o editar uno existente (los datos pueden manejarse localmente o en memoria, no es necesario enviar a la API).
        - Mostrar los elementos creados en la página de inicio o en un listado.

4. **Estilización**

   - Utiliza CSS puro, SASS, TailwindCSS, o cualquier librería de estilos como Material-UI o Bootstrap.
   - El diseño no tiene que ser complejo, pero debe ser claro y agradable a la vista.

5. **Opcional: Despliegue**
   - Si es posible, despliega tu aplicación en Vercel, Netlify, o cualquier servicio similar.
   - Comparte el enlace de tu aplicación desplegada.

---

## Tecnologías Requeridas

1. **React**: Librería principal para construir la aplicación.
2. **React Router**: Para la navegación entre las páginas.
3. **Fetch o Axios**: Para realizar solicitudes HTTP a la API.
4. **Manejo de estado**:
   - Puedes usar el estado local (usando `useState` y `useReducer`).
   - Opcional: Usa una librería como Redux o Context API si lo prefieres.

---

## Instrucciones para Realizar la Prueba

1. **Inicio del Proyecto**

   - Inicializa un proyecto de React utilizando la herramienta de tu preferencia:

     ```bash
     # Usando Create React App
     npx create-react-app nombre-del-proyecto

     # o con Vite
     npm create vite@latest nombre-del-proyecto -- --template react
     ```

2. **Estructura de Carpetas Recomendada**  
   Estructura sugerida (puedes modificarla según tu preferencia):

## Directorio `src/`

---

### Componentes Reutilizables

- `components/`
  Carpeta que contiene componentes reutilizables a lo largo del proyecto.

### Páginas Principales

- `pages/`
  Carpeta que contiene las páginas principales del proyecto.
  - `Login.jsx`
    Página de inicio de sesión.
  - `Home.jsx`
    Página principal con datos y funcionalidades.
  - `EditCreate.jsx`
    Página para edición/creación de elementos.

### Lógica de Conexión con la 

- `services/`
  Carpeta que contiene la lógica de conexión con la API.

### Recursos Estáticos

- `assets/`
  Carpeta que contiene imágenes o recursos estáticos.

### Configuración Principal

- `App.jsx`
  Configuración de rutas y layout principal.
- `index.jsx`
  Punto de entrada principal.
- `styles.css`
  Archivo de estilos globales.

3. **Funcionalidades Específicas a Evaluar**

- **Autenticación Básica (Login/Registro)**:
  - Crear un formulario funcional con validaciones.
  - Usar localStorage para almacenar datos del usuario.
- **Consumo de API**:
  - Hacer una solicitud GET para obtener datos desde la API.
  - Renderizar los datos dinámicamente en la página.
- **Barra de Búsqueda y Filtros**:
  - Implementar una búsqueda en tiempo real (por ejemplo, filtrar por nombre).
- **Creación/Edición**:
  - Usar un formulario para agregar o editar datos.
  - Mostrar los datos creados en el listado general.
- **Uso de Componentes Reutilizables**:
  - Crear componentes como tarjetas, botones, modales, etc., que puedan reutilizarse en varias partes del proyecto.

4. **Entrega del Proyecto**

- Sube tu código a un repositorio público en GitHub.
- Comparte el enlace del repositorio y, si lo despliegas, también el enlace al proyecto funcional.

---

## Aspectos a Evaluar

1. **Calidad del Código**:

- Claridad y organización.
- Uso correcto de componentes.
- Evitar código repetitivo (DRY: Don't Repeat Yourself).

2. **Funcionalidades Implementadas**:

- Que todas las funcionalidades solicitadas estén presentes y funcionando.

3. **Estilo y Diseño**:

- Diseño claro y responsivo.
- Uso adecuado de estilos.

4. **Extra (Opcional)**:

- Buenas prácticas adicionales como:
  - Uso de hooks personalizados.
  - Documentación en el código.
  - Despliegue en un servidor público.

---

## Entrega

- Comparte el enlace de tu repositorio en GitHub y, si aplicas, el enlace al despliegue de la aplicación.
- Tienes hasta el día miercoles 20/11 para completar y enviar el proyecto.

---

Si tienes alguna duda durante la realización de la prueba, no dudes en comunicarte. ¡Buena suerte!

