import express from "express"; // Importando o modulo express
import router from "./routes/apiRoutes.js";
class AppController {
  // Define a criação da classe AppController para organizar a lógica da nossa aplicação
  constructor() {
    // Cria uma nova instância do Express dentro da classe
    this.express = express();
    // Chama o método middlewares para configura-ló
    this.middlewares();
    // Chama o método routes para definir as rotas da aplicação
    this.routes();
  }
  middlewares() {
    // Permite que a aplicação receba dados em JSON nas requisições
    this.express.use(express.json());
  }

  routes() {
    // Método que define as rotas da API
    const users = [];
    this.express.get("/api", (req, res) => {
      res.send({ status: "OK" });
    });
    this.express.use("/SPRINT/",router)
  }
}
export default new AppController().express;
