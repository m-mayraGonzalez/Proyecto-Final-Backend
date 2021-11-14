import mongoose from "mongoose";

const venta_compraSchema = mongoose.Schema({
  usuario: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "usuario",
    required: true,
  },
  impuesto: { type: Number },
  total: { type: Number, required: true },
  detalles: [
    {
      _id: { type: String, required: true },
      inventario_animal: { type: String, required: true, unique: true },
      cantidad: { type: Number, maxlength: 20000, required: true },
      precio: { type: Number, required: true },
      descuento: { type: Number },
      subtotal: { type: Number, required: true },
    },
  ],
  estado: { type: Number, default: 1 },
  createdAt: { type: Date, default: Date.now },
});

export default mongoose.model("venta_compra", venta_compraSchema);









