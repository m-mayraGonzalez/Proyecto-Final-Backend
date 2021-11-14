import Inventario_animal from "../models/inventario_animal.js"

const existeInventario_animalById = async(id) => {
    const existe = await Inventario_animal.findById(id)
    
    if(! existe) throw new Error (`No existe Inventario_animal para este ID ${id}`)

}

export {existeInventario_animalById};