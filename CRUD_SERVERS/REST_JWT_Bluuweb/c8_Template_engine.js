// https://bluuweb.github.io/node/03-vistas/#motores-de-plantilla

// funciones Express para web dinamicas
// https://expressjs.com/en/resources/template-engines.html

// EJS : Embedded JavaScript template engine.
// https://ejs.co/
// PUG : 

//  npm i express
//  npm i ejs
const express = require('express');
const app = express();

const port = 3000;

// Motor de plantilla
app.set("view engine", "ejs");           // EJS Set Extension
app.set("views", __dirname + "/views");  // EJS Set Directory

// __dirname =  /home/ariel/Documents/MongoDB/REST_JWT_Bluuweb


app.use(express.static(__dirname + "/public"));   // middle-Ware 

app.get("/", (req, res) => {                     // http://localhost:3000
  res.render("index", { titulo: "index EJS" });  // index.ejs
});

app.get("/servicios", (req, res) => {       // http://localhost:3000/servicios
  res.render("pepe",                        // render  views/pepe.ejs
  { titulo: "servicios EJS" });             // update  titulo
});


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