import PatientControllers from "../controllers/PatientControllers";
import { Router } from "express";

const PatientRouter = Router();

PatientRouter.get("/pacientes", PatientControllers.listarPacientes);

PatientRouter.get("/paciente/:id", PatientControllers.listarPacientes);

PatientRouter.post('/', PatientControllers.criarPaciente);

PatientRouter.patch('/paciente/:id', PatientControllers.updatePaciente)

PatientRouter.delete('/paciente', PatientControllers.deletePaciente);

export default PatientRouter
