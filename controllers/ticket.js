// put ingresar tikete
// get listar todos los tiketes
// get buscar 1 tikete
import Ticket from "../models/ticket.js"

const httpTicket = {
    getTicket:async (req, res) => {
      res.json({ rutas })
    },
    getTicketCodigo:async (req, res) => {
      const  {codigo}  = req.params
      const ruta = await Ticket.find(item => item.codigo == codigo)
      res.json({ ruta })
    },
    postTicket: async(req, res) => {
      const { codigo, fecha_venta,fecha_salida} = req.body
      const ticket = await Ticket({ codigo, fecha_venta,fecha_salida })
      await ticket.save()
      res.json({
        mensaje: "1 registro insertado!!",
        ticket
      })
    },
    putTicket: async (req, res) => {
        const ticket = req.body.codigo;
        const buscarTicket = await Ticket.find((a) => a.codigo === ticket);
        if (buscarTicket) {
          console.log(buscarTicket);
          (buscarTicket.fecha_salida = req.body.fecha_salida),
          buscarTicket.save()
          res.json({ buscarTicket });
        } else {
          res.json({
            mensaje: `El ticket: ${ticket} no se encuentra en la base de datos`,
          });
        }
      }
    }
  export default httpTicket;