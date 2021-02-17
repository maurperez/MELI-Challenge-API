# MELI-Challenge-API

API desarrollada en base al challenge de Front-End propuesto por Mercado Libre. Posee el objetivo de suplir las consultas de datos de la aplicación web.



## Instalación

1. Clonar el proyecto
2. Instalar las dependencias ejecutando `npm install` dentro del directorio donde se haya clonado
3. Crear un archivo `.env` con la configuración de la aplicación, guiándose con el archivo `.env.example` , o por otro lado, también puede renombrar este mismo a `.env` y debería de funcionar con las configuraciones por defecto
4. Inicializar la API ejecutando `npm run start` dentro del directorio donde se haya clonado



## Construido con

* [Express](https://expressjs.com/es/)
* [rsdi](https://github.com/radzserg/rsdi)



## Patrón de diseño

Para el desarrollo de esta aplicación se utilizo el patrón [Dependency injection](https://en.wikipedia.org/wiki/Dependency_injection), se utilizo la dependencia `rsdi` para la implementación del mismo, esta sirve como Dependency Injection Container.

La configuración del mismo puede encontrarse en el archivo ubicado en el siguiente directorio `/src/config/di.js`.



## Autor

Mauro Alejandro Pérez - <mauro.alejandro.perez@outlook.es>



## Licencia

Este proyecto está bajo la Licencia MIT