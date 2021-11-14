import Raza from "../models/raza.js";

const razasearch = async (req, res) => {
  const { value } = req.query;
  const raza = await Raza.find({
    $or: [{ nombre: new RegExp(value, "i") }],
  }).sort({createdAt: -1})
 
  res.json({
    raza,
  });
};

const razaById = async (req, res) => {
  const { id } = req.params;
  const raza = await Raza.findOne({ _id: id });

  res.json({
    raza,
  });
};

const razaPost = async (req, res) => {
  const { nombre, descripcion } = req.body;
  const raza = new Raza({ nombre, descripcion });
  await raza.save();
  res.json({
    raza,
  });
};
const razaPut = async (req, res) => {
  const { id } = req.params;
  const { _id, ...resto } = req.body;
  const raza = await Raza.findByIdAndUpdate(id, resto);
  res.json({
    raza,
  });
};

const razaActivar = async (req,res ) => {
  const {id} = req.params;
  const raza = await Raza.findByIdAndUpdate(id, { estado: 1 });

  res.json({
    raza,
  });
};
const razaDesactivar = async (req,res) => {
  const {id} = req.params;
  const raza = await Raza.findByIdAndUpdate(id, { estado: 0 });
  res.json({
    raza,
  });
};
const razaDelete = async (req, res) => {
  const { id } = req.params;
  const raza = await Raza.findByIdAndDelete(id);
  res.json({
    raza,
  });
};
export {
  razaById,
  razaPost,
  razaPut,
  razaActivar,
  razaDesactivar,
  razaDelete,
  razasearch,
};
