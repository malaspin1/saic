import express from "express";
const router = express.Router();
import especialidadesController from "../controller/especialidadesController.js";

// Rotas Especialidades

router.post("/especialidade", especialidadesController.createEspecialidade);
router.get("/especialidade", especialidadesController.getAllEspecialidades);
router.put("/especialidade/", especialidadesController.updateEspecialidade);
router.delete("/especialidade/:id", especialidadesController.deleteEspecialidade);

export default router;
