# Coding Challenge - Fullstack Developer

Este repositorio contiene una solución para el coding challenge, el cual consiste en la construcción de una aplicación dividida en una parte de frontend y otra de backend. A continuación se detallan las funcionalidades de cada parte de la aplicación, las librerías utilizadas, y cómo levantar el proyecto localmente.

## Backend

El backend de la aplicación es una API REST construida con Node.js que permite realizar operaciones CRUD (Crear, Leer, Actualizar, Eliminar) sobre productos. La API expone un endpoint `/products` que maneja las operaciones relacionadas con los productos.
Se implementó autenticación para proteger las operaciones de creación, actualización y eliminación de productos en la API. Solo los requests autenticados tienen acceso a estas funciones, mientras que los métodos de lectura (GET) permanecen públicos para todos los usuarios. Este enfoque asegura que solo usuarios autorizados puedan modificar la base de datos de productos, mejorando así la seguridad y la integridad de los datos.

### Funcionalidades:

#### Products

- Listado de todos los productos.
- Obtener un producto por su ID.
- Crear un nuevo producto.
- Actualizar un producto existente.
- Eliminar un producto.
- Implementación de autenticación para proteger operaciones de creación, actualización y eliminación de productos, garantizando que solo usuarios autorizados puedan realizar cambios en la base de datos.

### Auth

- Registro de usuarios.
- Inicio de sesión de usuarios.
- Cierre de sesión de usuarios.
- Gestión de tokens de autenticación para mantener la sesión activa.
- Implementación de medidas de seguridad, como hashing de contraseñas, para proteger la información de los usuarios.

### Endpoints Disponibles:

- GET `/products`: Obtiene todos los productos.
- GET `/products/:id`: Obtiene un producto por su ID.
- POST `/products`: Crea un nuevo producto.
- PUT `/products/:id`: Actualiza un producto existente por su ID.
- DELETE `/products/:id`: Elimina un producto por su ID.

- POST `/api/auth/signup`: Endpoint para registrar un nuevo usuario.
- POST `/api/auth/login`: Endpoint para que un usuario inicie sesión.
- GET `/api/auth/logout`: Endpoint para verificar un token de autenticación.
- GET `/api/auth/verify`: Endpoint para verificar un token de autenticación.

### Tecnologías Utilizadas:

- Node.js
- Express.js
- Mongoose

### Variables de Entorno:

El archivo `.env.example` contiene las variables de entorno necesarias para configurar la aplicación. Se deben definir estas variables en un archivo `.env` en el directorio raíz del proyecto.

## Frontend

El frontend de la aplicación está construido con React y se encarga de mostrar los productos que expone el backend. Los productos se cargan desde el backend y se muestran en una interfaz de usuario amigable.

### Funcionalidades:

- Listado de productos.
- Vista de detalle de productos.
- Administrar productos desde su propia vista si el usuario tiene cuenta.
- Rutas protegidas.
- Persistencia en la sesion.
- scroll infinito.

### Tecnologías Utilizadas:

- React
- Tailwind
- zustand
- Axios
- Radix UI

### Deploy

La aplicación backend y frontend están deployadas en los siguientes servicios:

- Backend: [URL del backend deployado](https://challenge-4tmy.onrender.com)
- Frontend: [URL del frontend deployado](https://challenge-joaquinmv1.vercel.app)

## Cómo Levantar el Proyecto Localmente

Siga estos pasos para levantar el proyecto localmente:

1. Clone este repositorio en su máquina local:

```sh
git clone https://github.com/villarrealjoaquin/challenge.git
```

2. Navegue al directorio del proyecto:

```sh
cd nombre-del-proyecto
```

3. Instale las dependencias del backend y del frontend utilizando npm o pnpm:

```sh
cd server
npm install
```

```sh
cd client
npm install
```

4. Cree un archivo .env en el directorio raíz del proyecto y configure las variables de entorno necesarias. Las variables de entorno se encuentran en .env.example.

5. Levante el servidor backend y el cliente frontend:

```sh
cd server
npm run dev
```

```sh
cd client
npm run dev
```
### Crendenciales

testchallenge1@gmail.com
123456

## Disclaimer

Dado que el backend está desplegado en Render, es importante tener en cuenta la advertencia que indica: "Su instancia gratuita dejará de funcionar debido a la inactividad, lo que puede retrasar las solicitudes 50 segundos o más". Si experimentas retrasos en la carga de los productos, es posible que solo necesites esperar mientras la instancia se reactiva.

Con estos pasos, la aplicación debería estar corriendo localmente en su máquina.

[Deploy](https://challenge-joaquinmv1.vercel.app)
