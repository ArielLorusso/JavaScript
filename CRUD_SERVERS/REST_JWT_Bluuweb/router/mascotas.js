const express = require('express');
const router = express.Router();

router.get('/', (req,res) => {
    res.render("mascotas", {
        arrayMascotas: [
            {id: '111', nombre:"rex" ,descripcion:"desc"},
            {id: '222', nombre:"neo" ,descripcion:"desc"}
        ]
    })
})

module.exports = router;