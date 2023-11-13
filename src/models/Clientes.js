import mongoose
 from "mongoose";

 const clientesSchema = mongoose.Schema({
    nombre:{
        type:String,
        required: true,
        trim:true
    },
    apellido:{
        type:String,
        required: true,
        trim:true
    },
    empresa:{
        type:String,
        trim:true
    },
    email:{
        type:String,
        unique:true,
        lowercase:true,
        required: true,
        trim:true
    },
    telefono:{
        type:String,
        trim:true
    }
 })
export default mongoose.model('Clientes', clientesSchema)
