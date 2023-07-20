import { check } from "express-validator"
import httpRutas from "../controllers/rutas.js"
import { Router } from "express"

const router= Router()
  
  router.post("/",[
    check("codigo","Campo requerido").notEmpty(),
    check("origen","Campo requerido").notEmpty(),
    check("destino","Campo requerido").notEmpty(),
    check("salida","Campo requerido").notEmpty().isDate(),
    check("llegada","Campo requerido").notEmpty().isDate()
  ], httpRutas.postRutas)

  router.get("/",[
    check("codigo","Campo requerido").notEmpty()
  ], httpRutas.getRutas)
  
  router.get("/:id",[
    check("codigo","Campo requerido").notEmpty()
  ], httpRutas.getRutasCodigo)
  
  router.put("/:id",[
    check("codigo","Campo requerido").notEmpty()
  ], httpRutas.putRutas)

  router.delete("/:id",[
    check("codigo","Campo requerido").notEmpty()
  ], httpRutas.deleteRutas)
  
  export default router