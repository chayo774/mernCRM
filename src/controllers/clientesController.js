import Clientes from '../models/Clientes.js'



const nuevoCliente = async (req,res, next) => {
    const cliente = new Clientes(req.body);
    try{
        //store the register
        await cliente.save();
        res.json({mensaje:'A new client was added'})
    } catch(error){
        console.log(error);
        next()
    }
}
const mostrarClientes = async (req, res, next) =>{
    try{
        const clientes = await Clientes.find({});
        res.json(clientes)
    }catch(error){
        console.log(error);
        next()
    }
}
const mostrarCliente = async (req, res, next)=>{
    try{
        const cliente = await Clientes.findById(req.params.idCliente);
        if(!cliente){
            return res.status(404).json({mensaje: 'Client does not exit'});
            
        }else{
            //Show the client
            res.json(cliente);
        }

    }catch(error){
        console.error(error);
        res.status(500).json({mensaje:'Internal Server Error'})
    }
}
export{
    nuevoCliente,
    mostrarClientes,
    mostrarCliente
}