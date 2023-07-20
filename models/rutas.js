import mongoose from "mongoose"

const rutaSchema=new mongoose.Schema({
    codigo :{type:String,require:true, unique: true},
    origen :{type:String, require: true},
    destino :{type:String, require: true},
    salida : { type :Date , require : true },
    llegada : { type :Date , require : true },
    createdAt :{ type : Date , default : Date.now}
})

export default mongoose.model("Ruta",rutaSchema)