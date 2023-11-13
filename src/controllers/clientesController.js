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
export{
    nuevoCliente,
    mostrarClientes
}