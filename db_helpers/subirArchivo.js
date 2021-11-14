import { v4 as uuidv4 } from 'uuid';
import path from 'path';
import url from 'url'
 
const subirArchivo = (files, extensionesValidas = ['png', 'jpg', 'gif', 'jpeg']) => {
    return new Promise((resolve, reject) => {
        const { archivo } = files;
        //aqui va el nombre dl archivo logo-brand.png
        const nombreCortado = archivo.name.split(".");
        const extension = nombreCortado[nombreCortado.length - 1];

        if (!extensionesValidas.includes(extension)) {
            return reject(`la extension ${extension} no es permitida, solo [${extensionesValidas}]`);
        }
        //uuid para un indentificador unico
        const nombreTemp = uuidv4() + '.' + extension;
        const _dirname = path.dirname(url.fileURLToPath(import.meta.url));
        const uploadPath = path.join(_dirname, '../upload/', nombreTemp)
        archivo.mv(uploadPath, (err) => {
            if (err) {
                return reject(err)
            }
            return resolve(nombreTemp)
        })
    
    })
}
export default subirArchivo