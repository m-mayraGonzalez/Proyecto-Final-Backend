import express from "express";
import cors from "cors";
import fileUpload from "express-fileUpload";
import dbConection from "../database/config.js";
import usuario from "../routes/usuario.js";
import venta_compra from "../routes/venta_compra.js";
import raza from "../routes/raza.js";
import inventario_animal from "../routes/inventario_animal.js";

class Server {
  constructor() {
    this.port = process.env.PORT;

    this.app = express();

    this.dbConexion();

    this.middlewares();

    this.routes();
  }

  routes() {
    this.app.use("/api/usuario", usuario);
    this.app.use("/api/venta_compra", venta_compra);
    this.app.use("/api/raza", raza);
    this.app.use("/api/inventario_animal", inventario_animal);
  }

  async dbConexion() {
    await dbConection();
  }

  middlewares() {
    this.app.use(express.json());
    this.app.use(cors());
    this.app.use(express.static("public"));

    this.app.use(
      fileUpload({
        useTempFiles: true,
        useTempFiles: "/tmp/",
        createParentPath: true, //crea la carpeta si no existe
      })
    );
  }

  listen() {
    this.app.listen(this.port, () => {
      console.log(`El Servidor se a corrido en el puerto ${this.port}`);
    });
  }
}

export { Server };
