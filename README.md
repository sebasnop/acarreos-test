# Acarreos Appa

Acarreos Appa es una aplicación web desarrollada para la materia de Desarrollo Web de la Universidad Nacional de Colombia, sede Medellín. Esta aplicación tiene como objetivo simular el proceso de transporte de mercancías entre las cuatro naciones, utilizando bisontes voladores.

## Autores

- Alejandra Uribe Sierra - [aluribes@unal.edu.co](mailto:aluribes@unal.edu.co)
- Sebastián Valencia Zapata - [sevalenciaz@unal.edu.co](mailto:sevalenciaz@unal.edu.co)

## Tabla de Contenidos

- [Acarreos Appa](#acarreos-appa)
  - [Autores](#autores)
  - [Tabla de Contenidos](#tabla-de-contenidos)
  - [Descripción del Proyecto](#descripción-del-proyecto)
    - [Características Principales](#características-principales)
  - [Tecnologías Utilizadas](#tecnologías-utilizadas)
  - [Instalación y Configuración](#instalación-y-configuración)
  - [Uso](#uso)

## Descripción del Proyecto

Acarreos Appa es una plataforma de transporte que permite a los usuarios registrarse, crear pedidos de mudanza o transporte de mercancías, y realizar cotizaciones automáticas. Además, la aplicación gestiona un inventario de bisontes, asegurando su bienestar y optimizando su asignación para el transporte.

### Características Principales

- Registro y autenticación de usuarios.
- Creación y seguimiento de pedidos.
- Cotización automática de servicios de mudanza y transporte.
- Gestión de inventario de bisontes.
- Asignación automática de bisontes y transportistas.

## Tecnologías Utilizadas

- React con TypeScript para el desarrollo del frontend.
- Vite como empaquetador de la aplicación.
- SWC en lugar de Babel para la transpilación.
- Tailwind CSS para los estilos.
- pnpm como manejador de paquetes.

## Instalación y Configuración

Para instalar y configurar este proyecto, sigue los siguientes pasos:

1. Clona este repositorio:

   ```bash
   git clone https://github.com/sebasnop/acarreos-test
   cd acarreos-test
   ```

2. Instala las dependencias usando pnpm:

   ```bash
   pnpm install
   ```

3. Inicia el servidor de desarrollo:

   ```bash
   pnpm run dev
   ```

4. Abre tu navegador en la dirección que aparezca en tu consola al ejecutar el comando anterior para ver la aplicación en acción. Por ejemplo, `http://localhost:3000` o `http://localhost:5173`.

## Uso

Una vez que la aplicación esté en funcionamiento, los usuarios podrán:

- Registrarse e iniciar sesión para acceder a su perfil y gestionar pedidos.
- Crear un nuevo pedido seleccionando el tipo de servicio (mudanza o transporte de mercancía) y proporcionando la información necesaria.
- Consultar la cotización de su pedido antes de confirmar.
- Rastrear el estado de sus pedidos utilizando un código guía único.
- Administradores y transportistas pueden gestionar el inventario de bisontes y actualizar el estado de las entregas, respectivamente.
