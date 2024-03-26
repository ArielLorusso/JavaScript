//  EXPRESS:
//  https://bluuweb.github.io/node/02-servidor/#express
// 
//  npm i express

const express = require("express");
const app = express();
const port = 3000;
// app.use(express.static(__dirname + "/public/404")); // middle-Ware 



app.get("/", (req, res) => {
    //console.log(__dirname)        /home/ariel/Documents/MongoDB/REST_JWT_Bluuweb
    res.send("Hello Express 9.8.0 !");    // http://localhost:3000
});
app.get("/sercivios", (req, res) => {     // http://localhost:3000/sercivios
    res.send("pagina de servivios !");    //  public/index.html
});

app.use((req, res, next) => {
    res.status(404).send("Sorry cant find that!");  
    //  defaullt al status 404 no encontrar pagina
    res.status(404).sendFile(__dirname + "/public/404.html");
    //  "/public/404.html"
  });


app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});

// nodemon c7_Express.js 