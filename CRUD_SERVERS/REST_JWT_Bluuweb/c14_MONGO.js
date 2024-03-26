// https://bluuweb.github.io/node/05-db/#cluster
// BOOTSTRAP : https://getbootstrap.com/docs/5.3/content/tables/
// EJS https://expressjs.com/en/resources/template-engines.html   https://ejs.co/ 



// CREA Cluster -> Iniciar sesión: https://cloud.mongodb.com
// CREATE cluster : cluster 0            CREATE Project : project 0
// CREATE database -> Database: veterinaria   Collection: mascotas   (Project Settings)
// All Clusters -> collections : insert documments
//  Security  Database Access -> Add new user   name/pass  Role : Read and write to any database
// All Clusters ->  Connect with MongoDB Driver

// INSTALL Mongoose MongoDB manager fron NPM
// https://mongoosejs.com/docs/index.html
// npm install mongoose --save

// https://mongoosejs.com/
const mongoose = require('mongoose');
console.log('HOLA')

// se ocultaran con variables de entorno
const user = 'youtube_vet';
const password = 'PmgsyHStPNgwRHsS'; // ${}
const dbname = 'veterinaria'
const collectio = 'mascotas'
const uri = `mongodb+srv://${user}:${password}@cluster0.00itpwd.mongodb.net/?retryWrites=true&w=majority`;




//https://mongoosejs.com/
mongoose.connect( uri ,  
  { useNewUrlParser: true, useUnifiedTopology:true }
  ).then(() => console.log('Base de datos conectada'))
   .then(() => console.log(e))
  

//  npm i express
//  npm i ejs
const express = require('express');
const app = express();

const port = 3000; 

// Motor de plantilla
app.set("view engine", "ejs");           // EJS Set Extension
app.set("views", __dirname + "/views");  // EJS Set Directory

// __dirname =  /home/ariel/Documents/MongoDB/REST_JWT_Bluuweb

// RUTAS WEB (routers folder)
app.use(express.static(__dirname + "/public"));   // middle-Ware 
app.use('/', require('./router/web-routs'));
app.use('/mascotas', require('./router/mascotas'));

app.use( (req, res, next) => {        // http://localhost:3000/ERROR
  res.status(404).render("404", {     // views/404.ejs
    titulo : "404",                   // render object  -> titulo
    descripcion : "titulo del sitio"  //                -> description
  })
});

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});

// NO USAR npm i bootstrap
// https://getbootstrap.com/  -> bootstrap-5.3.1-dist.zip  contiene  'css' y 'js'
// guardar las carpetas       'css' y 'js'   en public

// https://getbootstrap.com/docs/5.3/getting-started/download/


// nodemon c8_Template_engine.js 