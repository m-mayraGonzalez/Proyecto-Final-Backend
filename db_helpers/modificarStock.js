import Inventario_animal from "../models/inventario_animal.js";

const stock = {
  disminuirStock: async (_id, cantidad) => {
    let { stock } = await Inventario_animal.findById(_id);
    stock = parseInt(stock) - parseInt(cantidad);
    await Inventario_animal.findByIdAndUpdate({ _id }, { stock });
  },
  aumentarStock: async (_id, cantidad) => {
    let { stock } = await Inventario_animal.findById(_id);
    stock = parseInt(stock) + parseInt(cantidad);
    await Inventario_animal.findByIdAndUpdate({ _id }, { stock });
  },
};
export default stock;
