import express from 'express'
import { nuevoCliente, mostrarClientes} from '../controllers/clientesController.js'

const router = express.Router()


router.post('/clientes', nuevoCliente)
router.get('/clientes', mostrarClientes)

export default router