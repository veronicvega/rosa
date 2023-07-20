import httpVehiculo from "../controllers/vehiculo.js"
import { Router } from "express"

const router= Router()
  
  router.post("/", httpVehiculo.postVehiculo)

  router.get("/", httpVehiculo.getVehiculo)
  
  router.get("/:id", httpVehiculo.getVehiculoMatricula)
  
  router.put("/:id", httpVehiculo.putVehiculo)
  
  export default router