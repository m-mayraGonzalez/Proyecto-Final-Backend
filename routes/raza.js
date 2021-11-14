import Router from "express";
import {
  razaById,
  razaPost,
  razaPut,
  razaActivar,
  razaDesactivar,
  razaDelete,
  razasearch,
} from "../Controllers/raza.js";
import { validarJWT } from "../middlewares/validar-jwt.js";
import { existeRazaById } from "../db_helpers/raza.js";
import { validarCampos } from "../middlewares/validar-campos.js";
import validator from "express-validator";
const { check } = validator;
const router = Router();


router.get("/", razasearch);

router.get(
  "/:id",
  [
    validarJWT,
    check("id", "No es un ID válido").isMongoId(),
    check("id").custom(existeRazaById),
    validarCampos,
  ],
  razaById
);

router.post("/", [validarJWT, validarCampos], razaPost);

router.put(
  "/:id",
  [
    validarJWT,
    check("id", "No es un ID válido").isMongoId(),
    check("id").custom(existeRazaById),
    validarCampos,
  ],
  razaPut
);

router.put(
  "/activar/:id",
  [
    validarJWT,
    check("id", "No es un ID válido").isMongoId(),
    check("id").custom(existeRazaById),
    validarCampos,
  ],
  razaActivar
);

router.put(
  "/desactivar/:id",
  [
    validarJWT,
    check("id", "No es un ID válido").isMongoId(),
    check("id").custom(existeRazaById),
    validarCampos,
  ],
  razaDesactivar
);

router.delete("/:id",[validarJWT],razaDelete);

export default router;
