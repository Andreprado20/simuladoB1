"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const PatientControllers_1 = __importDefault(require("../controllers/PatientControllers"));
const express_1 = require("express");
const PatientRouter = (0, express_1.Router)();
PatientRouter.get("/pacientes", PatientControllers_1.default.listarPacientes);
PatientRouter.get("/paciente/:id", PatientControllers_1.default.listarPacientes);
PatientRouter.post('/', PatientControllers_1.default.criarPaciente);
PatientRouter.patch('/paciente/:id', PatientControllers_1.default.updatePaciente);
PatientRouter.delete('/paciente', PatientControllers_1.default.deletePaciente);
exports.default = PatientRouter;
