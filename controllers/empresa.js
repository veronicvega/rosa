// post actualizar { todo excepto cedula }
//  empresa
import Empresa from "../models/empresa.js"
const httpEmpresa = {
    getEmpresa:async (req, res) => {
      res.json({ Empresa })
    },
    getEmpresaNit:async (req, res) => {
      const  {nit}  = req.params
      const empresa =await Empresa.find(item => item.nit == nit)
      await empresa.save()
      res.json({ empresa })
    },
    postEmpresa:async (req, res) => {
      const { nombre,nit, direccion,propietario} = req.body
      const empresa = await Empresa({ nombre,nit, direccion,propietario })
      await empresa.save()
      res.json({
        empresa
      })
    },
    putEmpresa: async (req, res) => {
        const empresa = req.body.nit;
        const buscarEmpresa = await Empresa.find((a) => a.nit === empresa);
        if (buscarEmpresa) {
          console.log(buscarEmpresa);
          (buscarEmpresa.nombre = req.body.nombre),
            (buscarEmpresa.direccion = req.body.direccion),
            (buscarEmpresa.propietario = req.body.propietario),
            await buscarEmpresa.save()
          res.json({ buscarEmpresa });
        } else {
          res.json({
            mensaje: `La empresa con nit: ${empresa} no se encuentra en la base de datos`,
          });
        }
      }
}
  export default httpEmpresa;
