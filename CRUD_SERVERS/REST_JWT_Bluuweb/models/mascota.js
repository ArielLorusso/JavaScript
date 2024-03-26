const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const mascota = require('../models/mascota');

router.get('/',async(req,res) => {
    try   { const arrayMascotasDB = await mascota.find()
            console.log(arrayMascotasDB);
            
             res.render("mascotas", {
                arrayMascotas: arrayMascotasDB
                // arrayMascotas : [
                //     {id: '111', nombre:"rex" ,descripcion:"desc"},
                //     {id: '222', nombre:"neo" ,descripcion:"desc"}  ]
             })
    }
    catch { console.log(error)}

})



// Creamos ESQUEMA del dacumento
const mascotaSchema = new Schema ({
    nombre: String,
    descripcion:String
})

// Creamos MODELO
const mascota = mongoose.model("mascota", mascotaSchema);

// EXPORT
module.exports = mascota