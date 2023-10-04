"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const PatientServices_1 = __importDefault(require("../services/PatientServices"));
class PatientController {
    constructor() { }
    listarPacientes(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const pacientes = yield PatientServices_1.default.listarPacientes();
            return res.status(200).json({
                status: "ok",
                pacientes: pacientes
            });
        });
    }
    criarPaciente(req, res, nome, senha, usuario) {
        return __awaiter(this, void 0, void 0, function* () {
            const criaPaciente = yield PatientServices_1.default.criarPaciente(nome, senha, usuario);
            return res.status(200).json({
                status: "ok",
                mensagem: `Paciente ${criaPaciente} cadastrado!`
            });
        });
    }
    updatePaciente(req, res, id, novoNome, novaSenha, novoUsuario) {
        return __awaiter(this, void 0, void 0, function* () {
            const atualizaPaciente = yield PatientServices_1.default.updatePaciente(id, novoNome, novaSenha, novoUsuario);
            return res.status(200).json({
                status: "ok",
                mensagem: `Paciente ${atualizaPaciente} alterado!`
            });
        });
    }
    deletePaciente(req, res, id) {
        return __awaiter(this, void 0, void 0, function* () {
            const deletaPaciente = yield PatientServices_1.default.deletePaciente(id);
            return res.status(200).json({
                status: "ok",
                mensagem: `Paciente ${deletaPaciente} deletado!`
            });
        });
    }
    buscaPaciente(req, res, id) {
        return __awaiter(this, void 0, void 0, function* () {
            const buscarPaciente = yield PatientServices_1.default.buscaPaciente(id);
            return res.status(200).json({
                status: "ok",
                paciente: buscarPaciente
            });
        });
    }
}
exports.default = new PatientController();
