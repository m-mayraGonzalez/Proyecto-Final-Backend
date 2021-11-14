import Router from "express";
import {
  venta_compraGet,
  venta_compraPost,
  venta_compraById,
  venta_compraPut,
  venta_compraActivar,
  venta_compraDesactivar,
  venta_compraDelete,
} from "../Controllers/venta_compra.js";
import { validarJWT } from "../middlewares/validar-jwt.js";
import { existeVenta_compraById } from "../db_helpers/venta_compra.js";
import { validarCampos } from "../middlewares/validar-campos.js";
import validator from "express-validator";
const { check } = validator;
const router = Router();

router.get("/", [validarJWT, validarCampos], venta_compraGet);

router.get(
  "/:id",
  [
    validarJWT,
    check("id", "No es un ID válido").isMongoId(),
    check("id").custom(existeVenta_compraById),
    validarCampos,
  ],
  venta_compraById
);

router.post("/", [validarJWT, validarCampos], venta_compraPost);


router.put(
  "/:id",
  [
    validarJWT,
    check("id", "No es un ID válido").isMongoId(),
    check("id").custom(existeVenta_compraById),
    validarCampos,
  ],
  venta_compraPut
);

router.put(
  "/activar/:id",
  [
    validarJWT,
    check("id", "No es un ID válido").isMongoId(),
    check("id").custom(existeVenta_compraById),
    validarCampos,
  ],
  venta_compraActivar
);

router.put(
  "/desactivar/:id",
  [
    validarJWT,
    check("id", "No es un ID válido").isMongoId(),
    check("id").custom(existeVenta_compraById),
    validarCampos,
  ],
  venta_compraDesactivar
);

router.delete("/:id",[validarJWT],venta_compraDelete);

export default router;
