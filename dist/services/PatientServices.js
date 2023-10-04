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
Object.defineProperty(exports, "__esModule", { value: true });
const client_1 = require("@prisma/client");
const prisma = new client_1.PrismaClient();
class PatientServices {
    constructor() { }
    listarPacientes() {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const patientsList = yield prisma.paciente.findMany();
                return patientsList;
            }
            catch (error) {
                console.log(error);
            }
        });
    }
    criarPaciente(nome, senha, usuario) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const pacienteCreate = yield prisma.paciente.create({
                    data: {
                        nome,
                        senha,
                        usuario
                    },
                });
                return pacienteCreate + `Paciente ${pacienteCreate.nome} cadastrado com sucesso!`;
            }
            catch (error) {
                console.log('Não foi possível cadastrar este paciente devido a um erro');
                console.log(error);
            }
        });
    }
    updatePaciente(id, novoNome, novaSenha, novoUsuario) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const atualizaPaciente = yield prisma.paciente.update({
                    where: {
                        id,
                    },
                    data: {
                        nome: novoNome,
                        senha: novaSenha,
                        usuario: novoUsuario
                    }
                });
                return atualizaPaciente + `Paciente ${atualizaPaciente.nome} alterado com sucesso!`;
            }
            catch (error) {
                console.log(error);
            }
        });
    }
    deletePaciente(id) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const deletarPaciente = yield prisma.paciente.delete({
                    where: {
                        id,
                    }
                });
                return deletarPaciente + `Paciente ${deletarPaciente.nome} deletado!`;
            }
            catch (error) {
                console.log(error);
            }
        });
    }
    buscaPaciente(id) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const buscarPaciente = yield prisma.paciente.findUnique({
                    where: {
                        id,
                    }
                });
                return buscarPaciente;
            }
            catch (error) {
                console.log(error);
            }
        });
    }
}
exports.default = new PatientServices();
