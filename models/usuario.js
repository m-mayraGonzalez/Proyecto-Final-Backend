import mongoose from "mongoose";

const usuarioSchema = mongoose.Schema({
  nombre: { type: String, require: true, maxlength: 35},
  email: { type: String, require: true, maxlength: 200, unique: true },
  password: { type: String, require: true, minlength:7, maxlength: 13000, unique: true },
  estado: { type: Number, default: 1 },
  createdAt: { type: Date, default: Date.now },
});

export default mongoose.model("usuario", usuarioSchema);