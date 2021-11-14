import mongoose from "mongoose";

const inventario_animalSchema = mongoose.Schema({
  raza: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "raza",
    required: true,
  },
  venta_compra: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "venta_compra",
    required: true,
  },
  precio: { type: Number, required: true },
  cantidad: { type: Number, required: true },
  foto: { type: String },
  Descripcion: [
    {
      peso_KL: { type: Number, required: true },
      color: { type: String, required: true },
      sexo: { type: String, require: true },
      litros_leche: { type: Number, required: true },
      edad: { type: Number, required: true },
      N_partos: { type: Number, required: true },
    },
  ],
  estado: { type: Number, default: 1 },
  createdAt: { type: Date, default: Date.now },
});
export default mongoose.model("inventario_animal", inventario_animalSchema);
