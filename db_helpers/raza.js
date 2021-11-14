import Raza from "../models/raza.js"

const existeRazaById = async(id) => {
    const existe = await Raza.findById(id)
    
    if(! existe) throw new Error (`No existe Raza para este ID ${id}`)

}


export {existeRazaById};