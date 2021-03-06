const express = require("express");
const cors = require("cors");

class Server {
  constructor() {
    this.app = express();
    this.port = process.env.PORT;

    this.usuariosPath = "/api/usuarios";

    this.middlewares();

    this.routes();
  }

  middlewares() {
    // Use palabra clave para middleware
    this.app.use(cors());

    // Lectura y aprseo del body
    this.app.use(express.json());

    this.app.use(express.static("public"));
  }

  routes() {
    this.app.use(this.usuariosPath, require("../routes/usuarios"));
  }

  listen() {
    this.app.listen(process.env.PORT, () => {
      console.log("Servidor corriendo en puerto", this.port);
    });
  }
}

module.exports = Server;
