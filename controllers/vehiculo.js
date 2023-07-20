// put ingresar vehiculo
// get listar todos los vehiculo
// get buscar 1 vehiculo
// post actualizar { todo excepto matricula }
import Vehiculo from "../models/vehiculo.js"

const httpVehiculo = {
    getVehiculo:async (req, res) => {
      res.json({ usuarios })
    },
    getVehiculoMatricula:async (req, res) => {
      const  {matricula}  = req.params
      const vehiculo = await Vehiculo.find(item => item.matricula == matricula)
      res.json({ vehiculo })
    },
    postVehiculo:async (req, res) => {
      const { matricula,num_vehiculo,propietario,tarjeta_propiedad } = req.body
      const vehiculo = await Vehiculo({ matricula,num_vehiculo,propietario,tarjeta_propiedad })
      await vehiculo.save()
      res.json({
        mensaje: "1 registro insertado!!",
        vehiculo
      })
    },
    putVehiculo: async (req, res) => {
        const matricula = req.body.matricula;
        const buscarVehiculo = await Vehiculo.find((a) => a.matricula === matricula);
        if (buscarVehiculo) {
          console.log(buscarVehiculo);
          (buscarVehiculo.propietario = req.body.propietario),
          (buscarVehiculo.num_vehiculo = req.body.num_vehiculo)
          buscarVehiculo.save()
          res.json({ buscarVehiculo });
        } else {
          res.json({
            mensaje: `El vehiculo: ${matricula} no se encuentra en la base de datos`,
          });
        }
      }
    }
  export default httpVehiculo;