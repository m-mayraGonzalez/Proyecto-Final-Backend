import Inventario_animal from "../models/inventario_animal.js";
import Subirarchivo from "../db_helpers/subirArchivo.js";
import path from "path";
import url from "url";
import * as fs from "fs";
const INV_ANGet = async (req, res) => {
  const inventario_animal = await Inventario_animal.find()
    .populate("raza", "nombre")
    .populate("venta_compra", "total");
  res.json({
    inventario_animal,
  });
};

const INV_ANById = async (req, res) => {
  const { id } = req.params;
  const inventario_animal = await Inventario_animal.findOne({ _id: id });
  res.json({
    inventario_animal,
  });
};

const INV_ANPost = async (req, res) => {
  const { raza, precio, venta_compra, cantidad, Descripcion, } =
    req.body;
  const inventario_animal = new Inventario_animal({
    raza,
    precio,
    venta_compra,
    cantidad,
    Descripcion,
  });
  await inventario_animal.save();
  res.json({
    inventario_animal,
  });
};

const inventario_animalcargararchivo = async (req, res) => {
  const { id } = req.params;
  try {
    const nombre = await Subirarchivo(req.files, undefined);
    let inventario_animal = await Inventario_animal.findById(id);
    if (inventario_animal.foto) {
      const _dirname = path.dirname(url.fileURLToPath(import.meta.url));
      const pathImage = path.join(_dirname, "../upload/", inventario_animal.foto);
      if (fs.existsSync(pathImage)) {
        fs.unlinkSync(pathImage);
      }
    }
    inventario_animal = await Inventario_animal.findByIdAndUpdate(id, { foto: nombre });
    res.json({ nombre });
  } catch (error) {
    res.status(400).json({ error });
  }
};
const INV_ANPut = async (req, res) => {
  const { id } = req.params;
  const { _id, ...resto } = req.body;
  const inventario_animal = await Inventario_animal.findByIdAndUpdate(
    id,
    resto
  );

  res.json({
    inventario_animal,
  });
};
const INV_ANActivar = async (req, res) => {
  const { id } = req.params;
  const inventario_animal = await Inventario_animal.findOneAndUpdate(id, {
    estado: 1,
  });
  res.json({
    inventario_animal,
  });
};
const INV_ANDesactivar = async (req, res) => {
  const { id } = req.params;
  const inventario_animal = await Inventario_animal.findOneAndUpdate(id, {
    estado: 0,
  });
  res.json({
    inventario_animal,
  });
};
const INV_ANDelete = async (req, res) => {
  const { id } = req.params;
  const inventario_animal = await Inventario_animal.findByIdAndDelete(id);
  res.json({
    inventario_animal,
  });
};

export {
  INV_ANGet,
  INV_ANById,
  INV_ANPost,
  inventario_animalcargararchivo,
  INV_ANPut,
  INV_ANActivar,
  INV_ANDesactivar,
  INV_ANDelete,
};
