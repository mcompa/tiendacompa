# Tienda Compa

Este proyecto es creado por Matias Compagnone para el curso de React Js de
 [CODERHOUSE](https://www.coderhouse.com/) Comision 16995.

## Entrega

``` Desafio: Entrega Final```

- Agregada seccion mis ordenes.
- Agregadas funciones para storage de comprador, carrito y ordenes.


## Creación y Dependencias

- Creacion de la aplicación usando [create-react-app](https://github.com/facebook/create-react-app)
    ```bash
        npx create-react-app nombre-aplicacion
    ```

Agregadas las siguientes dependencias:

- [react router dom](https://reactrouter.com/docs/en/v6/getting-started/overview)  (actualizada a v6)
    ```bash
        npm install react-router-dom
    ```
- [firebase](https://firebase.google.com/docs/web/setup?hl=es) 
    ```bash
        npm install firebase
    ```
- [bootstrap](https://getbootstrap.com/) 
    > Se agrega para utilizar el sistema de grid y varios estilos. No es que no se pueda hacer a mano, pero es una 
    libreria muy conocida y utilizada que simplifica bastante la UI.

    ```bash
        npm install --save bootstrap
    ```
- [sweetalert2](https://github.com/sweetalert2/sweetalert2-react-content)  
    > Genera unos dialogos muy convenientes y esteticamente agradables para presentar cierta información.
    
    ```bash
        npm install --save sweetalert2 sweetalert2-react-content
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

Para el funcionamiento se necesitan dos colecciones en firebase. 
La primera es `products` que contiene un array de productos con sus caracteristicas, stock, detalles y fotos. \
La estructura es como la que se muestra a continuacion:

    ```json
        [
            {
                "id": "codigo-de-producto",
                "sku": "codigo-de-producto",
                "titulo": "titulo",
                "descripcion": "descripcion",
                "descripcionLarga": "descripcionLarga",
                "stock": 7,
                "precio": 210901.0,
                "precioLista": 200807.0,
                "categoria": "categoria",
                "categoriaId": "categoriaId",
                "financiacion": {
                    "cantidadCuotas": 12,
                    "importeCuota": 1234,
                    "intereses": false
                },
                "caracteristicas": [
                    {
                        "nombre": "nombre de la caracteristica",
                        "valor": "valor de la caracteristica"
                    }
                ],
                "color": "color",
                "talle": "talle",
                "imagen": "url de la imagen principal",
                "galeria": [
                    "url de las fotos para la galeria"
                ]
            }
        ]
    ```

La otra coleccion es `categories` que contendra las opciones de categorias del menu. \
La estructura es como la que se muestra a continuacion:

    ```json
        [
            {
                "id2": "nombre de la categoria pero en formato url-friendly",
                "nombre": "nombre de la categoria que aparece en el menu"
            }
        ]
    ```

Tambien se utiliza otra coleccion `orders`, pero es creada cuando se genera una orden dentro de la aplicacion.

## Screenshots

![App Screenshot](https://via.placeholder.com/468x300?text=App+Screenshot+Here)

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

![version](https://img.shields.io/static/v1?label=Version&message=0.1.14&color=green)

![ultimo commit](https://img.shields.io/github/last-commit/mcompa/tiendacompa)

[![AGPL License](https://img.shields.io/badge/license-AGPL-blue.svg)](http://www.gnu.org/licenses/agpl-3.0)


## Authors

- [@mcompa](https://www.github.com/mcompa)

