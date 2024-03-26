const express = require('express');
const router = express.Router();

router.get("/", (req, res) => {                     // http://localhost:3000
    res.render("index", { titulo: "index EJS" });  // index.ejs
});
  
router.get("/servicios", (req, res) => {       // http://localhost:3000/servicios
    res.render("pepe",                        // render  views/pepe.ejs
    { titulo: "servicios EJS" });             // update  titulo
});

module.exports = router;
  