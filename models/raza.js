import mongoose from "mongoose";

const razaSchema = mongoose.Schema({
  nombre: { type: String, maxlength: 40, require: true },
  descripcion: { type: String, maxlength: 100, require: true },
  estado: { type: Number, default: 1 },
  createdAt: { type: Date, default: Date.now },
});

export default mongoose.model("raza", razaSchema);