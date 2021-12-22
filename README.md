# Tienda Compa

Este proyecto es creado por Matias Compagnone para el curso de React Js de
 [CODERHOUSE](https://www.coderhouse.com/) Comision 16995.

## Entrega

``` Desafio 12```

- Agregada api firebase.
- Agregado archivo .env y .env.example para sacar las configuraciones a un archivo para tal fin.


## Dependencias

Agregadas las siguientes dependencias:

- bootstrap 
    ```bash
        npm install --save bootstrap
    ```
- react router dom (actualizada a v6)
    ```bash
        npm install react-router-dom
    ```
- sweetalert2
    ```bash
        npm install --save sweetalert2 sweetalert2-react-content
    ```
- firebase.
    ```bash
        npm install firebase
    ```

## Variables de Entorno

Para correr esta aplicacion, se deberan agregar las siguientes variables al archivo .env \
Existe el archivo .env.example que contiene un ejemplo de como agregar los valores correctamente

`apiKey`

`authDomain`

`projectId`

`storageBucket`

`messagingSenderId`

`appId`


## Estructura de los datos

Dentro de la carpeta `services/local` hay un archivo llamado local.js que simula el 
llamado a una api para obtener los productos y categorias.

Tambien hay un archivo, en la misma carpeta llamado `products.json` y `categories.json` que
tienen como ejemplo la estructura esperada, tanto para local como para firebase.


## Scripts 

### `npm install`

Es lo primero que se debe ejecutar al clonar el repo, para que instale todas 
las dependencias.


### `npm start`

Ejecuta la aplicacion en modo desarrollo. Abrir en el navegador 
[http://localhost:3000](http://localhost:3000).

La pagina será actualizada mientras se edita. Cualquier error se vera en la consola.


### `npm run build`

Compila la aplicación para producción en la carpeta `build`.
Crea los bundles de React para producción y optimiza la compilación 
para obtener el mejor rendimiento.

La compilación se minimiza y los nombres de archivo incluyen los hash.
¡La aplicación está lista para implementarse!

Documentacion: [deployment](https://facebook.github.io/create-react-app/docs/deployment).


## Documentacion oficial de React

Click en [React documentation](https://reactjs.org/) para ir a la documentacion oficial.


## Badges

![version](https://img.shields.io/static/v1?label=Version&message=0.1.12&color=green)

![ultimo commit](https://img.shields.io/github/last-commit/mcompa/tiendacompa)

[![AGPL License](https://img.shields.io/badge/license-AGPL-blue.svg)](http://www.gnu.org/licenses/agpl-3.0)


## Authors

- [@mcompa](https://www.github.com/mcompa)

