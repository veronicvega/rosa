// put ingresar rutas
// get listar todos las rutas
// get buscar 1 ruta
// post actualizar { todo excepto cedula, Licencia }
// delete para eliminar una ruta
import Ruta from "../models/rutas.js"

const httpRutas = {
    getRutas:async (req, res) => {
      res.json({ Ruta })
    },
    getRutasCodigo:async (req, res) => { 
      const  {codigo}  = req.params
      const ruta = Ruta.find(item => item.codigo == codigo)
      res.json({ ruta })
    },
    postRutas:async (req, res) => {
      const { codigo, origen,destino, salida, llegada} = req.body
      const ruta =await Ruta ({ codigo, origen,destino, salida, llegada })
      await ruta.save()
      res.json({
        mensaje: "1 registro insertado!!",
        ruta
      })
    },
    putRutas: async (req, res) => {
        const ruta = req.body.codigo;
        const buscarRuta = await Ruta.find((a) => a.codigo === ruta);
        if (buscarRuta) {
          console.log(buscarRuta);
          (buscarRuta.origen = req.body.origen),
            (buscarRuta.destino = req.body.destino),
            (buscarRuta.salida = req.body.salida),
            (buscarRuta.llegada = req.body.llegada)
            buscarRuta.save()
          res.json({ buscarRuta });
        } else {
          res.json({
            mensaje: `La ruta: ${ruta} no se encuentra en la base de datos`,
          });
        }
      },
      deleteRutas: async(req,res)=>{
        const {codigo}=req.params
        const buscarRuta=await Ruta.indexOf(codigo)
        if(buscarRuta){
            Ruta.splice(buscarRuta,1);
            buscarRuta.save()
            res.json({mensaje: `Se elimino la ruta: ${codigo} de la base de datos`})
        }else{
            res.json({Ruta})
            res.json({mensaje: `La ruta: ${codigo} no se encuentra en la base de datos`})
        }
      }
}
  export default httpRutas;