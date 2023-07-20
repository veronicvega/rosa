import httpTicket from "../controllers/ticket.js"
import { Router } from "express"

const router = Router()
  
  router.post("/", httpTicket.postTicket)

  router.get("/", httpTicket.getTicket)
  
  router.get("/:id", httpTicket.getTicketCodigo)
  
  router.put("/:id", httpTicket.putTicket)
  
  export default router