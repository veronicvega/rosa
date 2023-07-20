import mongoose from "mongoose"

const usuarioSchema=new mongoose.Schema({
    nombre:{type:String,require:true},
    email : {type:String,require:true,unique: true},
    contraseña  : {type:String,require:true},
    tarjeta_propiedad : {type:String, require:true},
    createdAt :{ type : Date , default : Date.now},
})

export default mongoose.model("Usuario", usuarioSchema)







