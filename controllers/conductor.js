// put ingresar conductore
// get listar todos los conductores
// get buscar 1 conductor
// post actualizar { todo excepto cedula, Licencia }
import Conductor from "../models/conductor.js"

const httpConductor = {
    getConductor:async (req, res) => {
      res.json({ Conductor })
    },
    getConductorCedula:async (req, res) => {
      const  {cedula}  = req.params
      const persona = await Conductor.find(item => item.cedula == cedula)
      await persona.save()
      res.json({ persona })
    },
    postConductor: async (req, res) => {
      const { cedula,nombre, apellidos, telefono, licencia, 
        fecha_nacimiento, direccion, estado_civil, seguro:{tipo_seguro, aseguradora, valor, descripcion}} = req.body
      const conductor = await Conductor({ cedula,nombre, apellidos, telefono, licencia, 
        fecha_nacimiento, direccion, estado_civil, seguro:{tipo_seguro, aseguradora, valor, descripcion}})
      await conductor.save()
      res.json({
        mensaje: "1 registro insertado!!",
        conductor
      })
    },
    putConductor: async (req, res) => {
        const conductor = req.body.cedula;
        const buscarConductor = await Conductor.find((a) => a.cedula === conductor);
        if (buscarConductor) {
          console.log(buscarConductor);
          (buscarConductor.nombre = req.body.nombre),
            (buscarConductor.apellidos = req.body.apellidos),
            (buscarConductor.telefono = req.body.telefono),
            (buscarConductor.licencia = req.body.licencia),
            (buscarConductor.fecha_nacimiento = req.body.fecha_nacimiento),
            (buscarConductor.direccion = req.body.direccion),
            (buscarConductor.estado_civil = req.body.estado_civil),
            (buscarConductor.tipo_seguro = req.body.tipo_seguro),
            (buscarConductor.aseguradora = req.body.aseguradora),
            (buscarConductor.valor = req.body.valor),
            (buscarConductor.descripcion = req.body.descripcion);
            await buscarConductor.save()
          res.json({ buscarConductor });
        } else {
          res.json({
            mensaje: `El conductor con cedula: ${conductor} no se encuentra en la base de datos`,
          });
        }
      }
}
  export default httpConductor;