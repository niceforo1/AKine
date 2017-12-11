# ***AKine***
Aplicación creadad con Node.js + Express Application + Angular 5

----------

## Instalar Dependencias
Para instalar las dependenciar dividiremos el proyecto en 2, una parte para el cliente y otra para el backend
#### Dependencias para cliente
Dentro de la carpeta **_/AKine/cliente_**
```bash
$ cd cliente
$ npm install
```
#### Dependencias para backend
Dentro de la carpeta **_/AKine_**
```bash
$ npm install
```
----------


## Inicio de proyecto
Para iniciar el proyecto se debe tener en cuenta unas consideraciones
####
> **Consideraciones:**
- <i class="icon-file"></i> Es necesario crear el archivo **dev.js** dentro del path **_/AKine/config_** el mismo **NO** debe estar incluido dentro del repositorio
- El archivo anterior mencionado tiene la siguiente estructura:
```javascript
module.exports = {
  mongoURI: 'URL DE INSTANCIA DE MONGODB'
};
```
- Para iniciar primero el backend, el cual se inicia de la siguiente manera sobre el path **_/AKine_**

 ``` bash
 $ npm run server
 ```

- Para iniciar primero el frontend, el cual se inicia de la siguiente manera sobre el path **_/AKine/cliente_**

 ``` bash
 $ ng serve
 ```


> **Aclaración:**
> Para una versión posterior se agregará el comando para iniciar frontend y backend de una vez.
