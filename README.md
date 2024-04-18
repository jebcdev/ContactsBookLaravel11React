# Agenda de Contactos de Correo Electrónico

¡Bienvenido/a a la Agenda de Contactos de Correo Electrónico!

Esta es una pequeña y simple aplicación desarrollada con Laravel 11 y Inertia.js, utilizando React en el frontend.

## Descripción

La Agenda de Contactos de Correo Electrónico es una aplicación diseñada para ayudarte a gestionar tus contactos de manera eficiente. Puedes agregar nuevos contactos, ver la lista de contactos existentes y eliminar aquellos que ya no necesitas.

## Características

- **Gestión de Contactos:** Agrega, visualiza y elimina contactos fácilmente.
- **Interfaz Reactiva:** Utiliza Inertia.js para crear una experiencia de usuario fluida y reactiva.
- **Diseño Simple:** La interfaz de usuario está diseñada para ser fácil de usar y comprender.

## Instalación

1. **Clona el Repositorio:**
   ```bash
   git clone <URL-del-repositorio>
   ```

2. **Instala las Dependencias de PHP:**
   ```bash
   composer install
   ```

3. **Instala las Dependencias de Node.js:**
   ```bash
   npm install
   ```

4. **Configura el Archivo de Entorno:**
   - Copia el archivo `.env.example` y renómbralo como `.env`.
   - Configura la conexión a tu base de datos en el archivo `.env`.

5. **Genera la Clave de la Aplicación:**
   ```bash
   php artisan key:generate
   ```

6. **Ejecuta las Migraciones de la Base de Datos:**
   ```bash
   php artisan migrate
   ```

7. **Inicia el Servidor de Desarrollo:**
   ```bash
   php artisan serve
   ```

8. **Compila los Assets de Frontend:**
   ```bash
   npm run dev
   ```

## Uso

Una vez que el servidor esté en funcionamiento, puedes acceder a la aplicación en tu navegador web ingresando la URL proporcionada por el comando `php artisan serve`.

## Contribución

¡Las contribuciones son bienvenidas! Si encuentras algún problema o tienes alguna sugerencia de mejora, no dudes en abrir un problema o enviar un pull request.

## Licencia

Esta aplicación está bajo la Licencia [MIT](LICENSE).
