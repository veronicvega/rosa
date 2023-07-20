import { check } from "express-validator"
import httpRevision from "../controllers/revision.js"
import { Router } from "express"

const router= Router()
  
  router.post("/", [
    check("tecnomecanica","campo obligatorio").notEmpty(),
    check("fecha_revision","campo requerido").notEmpty().isDate(),
    check("fecha_proxima_revision","Campo requerido").notEmpty().isDate(),
    check("descripcion").default()
  ],httpRevision.postRevisiones)

  router.get("/",[
    check("tecnomecanica","campo obligatorio").notEmpty()
], httpRevision.getRevisiones)
  
  router.get("/:id",[
    check("tecnomecanica","campo obligatorio").notEmpty()
  ], httpRevision.getRevisionesMatricula)
  
  router.put("/:id",[
    check("tecnomecanica","campo obligatorio").notEmpty()
  ], httpRevision.putReviciones)
  
  export default router