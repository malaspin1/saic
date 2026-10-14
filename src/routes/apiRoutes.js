import express from "express";

import especialidadesController from "../controller/especialidadesController.js";
import pacienteController from "../controller/pacienteController.js";
import medicoController from "../controller/medicoController.js";
import unidadesController from "../controller/unidadesController.js";

const router = express.Router();

// Rotas Unidade
router.post("/unidade", unidadesController.createUnidades);
router.get("/unidade", unidadesController.getAllUnidades);
router.get("/unidade/:id", unidadesController.getUnidadesById);
router.put("/unidade/:id", unidadesController.updateUnidades);
router.delete("/unidade/:id", unidadesController.deleteUnidade);

// Rotas Especialidade
router.post("/especialidade", especialidadesController.createEspecialidade);
router.get("/especialidade", especialidadesController.getAllEspecialidades);
router.get("/especialidade/:id", especialidadesController.getEspecialidadeById);
router.put("/especialidade/:id", especialidadesController.updateEspecialidade);
router.delete("/especialidade/:id", especialidadesController.deleteEspecialidade);

// Rotas Paciente
router.post("/paciente", pacienteController.createPaciente);
router.get("/paciente", pacienteController.getAllPacientes);
router.get("/paciente/:id", pacienteController.getPacienteById);
router.put("/paciente/:id", pacienteController.updatePaciente);
router.delete("/paciente/:id", pacienteController.deletePaciente);

// Rotas Médico
router.post("/medico", medicoController.createMedico);
router.get("/medico", medicoController.getAllMedicos);
router.get("/medico/:id", medicoController.getMedicoById);
router.put("/medico/:id", medicoController.updateMedico);
router.delete("/medico/:id", medicoController.deleteMedico);

export default router;