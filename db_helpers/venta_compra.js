import Venta_compra from "../models/venta_compra.js";

const existeVenta_compraById = async (id) => {
  const existe = await Venta_compra.findById(id);

  if (!existe) throw new Error(`No existe una Venta_compra para este ID`);
};
export { existeVenta_compraById };