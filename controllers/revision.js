// put ingresar estado vehiculo
// get buscar la matricula y acceder al estado 
// post actualizar { todo }
import Revision from '../models/revision.js'

const httpRevisiones = {
    getRevisiones:async (req, res) => {
      res.json({ Revision })
    },
    getRevisionesMatricula:async (req, res) => {
      const  {matricula}  = req.params
      const revision = await Revision.find(item => item.matricula == matricula)
      revision.save()
      res.json({ revision })
    },
    postRevisiones:async (req, res) => {
      const { tecnomecanica,fecha_revision,fecha_proxima_revision,descripcion} = req.body
      const revision =await Revision({ tecnomecanica,fecha_revision,fecha_proxima_revision,descripcion })
      await revision.save()
      res.json({
        revision
      })
    },
    putReviciones: async (req, res) => {
        const revision = req.body.matricula;
        const buscarRevision = await Revision.find((a) => a.matricula === revision);
        if (buscarRevision) {
          console.log(buscarRevision);
          (buscarRevision.tecnicomecanica = req.body.tecnicomecanica),
            (buscarRevision.fecha_proxima_revision = req.body.fecha_proxima_revision)
            buscarRevision.save()
          res.json({ buscarRevision });
        } else {
          res.json({
            mensaje: `La matricula: ${revision} no se encuentra en la base de datos`,
          });
        }
      }
}
  export default httpRevisiones;