import express from 'express'
import clientesRoutes from './routes/usuarioRoutes.js'
import mongoose from 'mongoose'
// import bodyParser from 'body-parser'
//conectar mongo
const connectDB = async()=>{
    try{
        await mongoose.connect('mongodb://127.0.0.1:27017/mern');
        console.log("DB is connect");
    }catch(error){
        console.log(error);
        console.log("DB is not connected");

    }
}
connectDB()

//Creating app
const app = express()
//habilitar bodyparser:formaP/LeerValoresEnPostman
app.use(express.json());
app.use(express.urlencoded({extends:true}));
//Routing
app.use('/auth', clientesRoutes)

const port = 3900
app.listen(port,()=>{
    console.log("Working");
})