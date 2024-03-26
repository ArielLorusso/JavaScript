# UBUNTU INSTALL MongoDB
    MongoD : Demon Server (Wont work until OS-RESET !)
    MongoSH : Shell
    MongoDB-Compass : GUI Grafical User Interfave


Guía de Instalación de la base de datos mongodb y compass
    https://github.com/DigitalEducas/tutoriales/blob/main/mongodb-compass.md


### IMPORTAMOS LA CLAVE PUBLICA PARA MONGODB
>    wget -qO - https://www.mongodb.org/static/pgp/server-6.0.asc | sudo apt-key add -

### CREAMOS EL ARCHIVO PARA MONGODB
>    sudo gedit /etc/apt/sources.list.d/mongodb-org-6.0.list

### PEGAMOS DENTRO DEL ARCHIVO
>    deb [ arch=amd64,arm64 ] https://repo.mongodb.org/apt/ubuntu jammy/mongodb-org/6.0 multiverse | sudo tee /etc/apt/sources.list.d/mongodb-org-6.0.list

### ACTUALIZAMOS
>   sudo apt-get update

### INSTALAMOS MONGODB Y SUS PAQUETES
>    sudo apt-get install -y mongodb-org

### INICIAMOS MONGODB  (RESETEA PRIMERO)
>    sudo systemctl start mongod
    sudo systemctl status mongod

### PROBAMOS LA CONSOLA DE MONGODB
>    mongosh

### IMPORTAMOS LA CLAVE PUBLICA DE COMPASS
>    wget https://downloads.mongodb.com/compass/mongodb-compass_1.35.0_amd64.deb

### INSTALAMOS MONGODB COMPASS
>    sudo dpkg -i mongodb-compass_1.35.0_amd64.deb

### INICIAMOS MONGODB COMPASS
>    mongodb-compass




# ALTERNATIVAS DESCARGAR .DEV DESDE PAGINA OFICIAL
https://www.youtube.com/watch?v=HSIh8UswVVY&
https://www.mongodb.com/try/download/community


https://www.loggly.com/use-cases/how-to-analyze-mongodb-logs-for-troubleshooting/#:~:text=MongoDB%20logs%20can%20be%20found,%2Flog%2Fmongodb%2Fmongodb.

https://www.mongodb.com/docs/compass/current/query/filter/