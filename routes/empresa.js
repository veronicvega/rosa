import { check } from "express-validator"
import httpEmpresa from "../controllers/empresa.js"
import { Router } from "express"

const router= Router()

  router.post("/",[
    check("nombre","campo requerido").notEmpty(),
    check("nit","campo requerido").notEmpty(),
    check("direccion").notEmpty(),
    check("propietario","campo requerido").default()
  ] ,httpEmpresa.postEmpresa)

  router.get("/:id", [
    check("nit","campo requerido").notEmpty()
  ] ,httpEmpresa.getEmpresaNit)

  router.get("/", [
    check("nit","campo requerido").notEmpty()
  ] ,httpEmpresa.getEmpresa)
  
  router.put("/:id", [
    check("nit","campo requerido").notEmpty()
  ],httpEmpresa.putEmpresa)
  
  export default router