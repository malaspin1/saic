import express from "express";
const router = express.Router();
import especialidadesController from "../controller/especialidadesController.js";
import userController  from "../controller/userController.js";

// Rotas Especialidades

router.post("/user", userController.createUser)
router.get("/user", userController.getAllUser)
router.put("/user", userController.updateUser)
router.delete("/user/:cpf", userController.deleteUser)
router.post("/especialidade", especialidadesController.createEspecialidade);
router.get("/especialidade", especialidadesController.getAllEspecialidades);
router.put("/especialidade/", especialidadesController.updateEspecialidade);
router.delete("/especialidade/:id", especialidadesController.deleteEspecialidade);

export default router;
