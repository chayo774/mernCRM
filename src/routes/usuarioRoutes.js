import express from 'express'
import { nuevoCliente, mostrarClientes, mostrarCliente} from '../controllers/clientesController.js'

const router = express.Router()


router.post('/clientes', nuevoCliente)
router.get('/clientes', mostrarClientes)
router.get('/cliente/:idCliente', mostrarCliente)

export default router