import express from "express";
const router = express.Router();
import especialidadesController from "../controller/especialidadesController.js";
import userController  from "../controller/userController.js";

// Rotas Especialidades

router.post("/especialidade", especialidadesController.createEspecialidade);
router.get("/especialidade", especialidadesController.getAllEspecialidades);
router.put("/especialidade/", especialidadesController.updateEspecialidade);
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

export default router;
