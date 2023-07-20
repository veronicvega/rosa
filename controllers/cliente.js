// put ingresar usuarios
// get listar todos los usuarios
// get buscar 1 usuario
// post actualizar usuario

import Cliente from "../models/cliente.js"

const httpCliente = {
    getCliente:async (req, res) => {
      res.json({ Cliente })
    },
    getClienteCedula:async (req, res) => {
      const  {cedula}  = req.params
      const cliente = Cliente.find(item => item.cedula == cedula)
      res.json({ cliente })
    },
    postCliente:async (req, res) => {
      const { cedula,nombre,apellidos,telefono } = req.body
      const cliente = await Cliente({ cedula,nombre,apellidos,telefono })
      await cliente.save()
      res.json({
        cliente
      })
    },
    putCliente: async (req, res) => {
        const cedula = req.body.cedula;
        const buscarCliente = await Cliente.find((a) => a.cedula === cedula);
        if (buscarCliente) {
          console.log(buscarCliente);
          (buscarCliente.telefono = req.body.telefono),
          await buscarCliente.save()
          res.json({ Cliente });
        } else {
          res.json({
            mensaje: `El usuario: ${cedula} no se encuentra en la base de datos`,
          });
        }
      }
    }
  export default httpCliente;