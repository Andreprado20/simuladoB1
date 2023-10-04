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
class AgendaServices {
    constructor() { }
    listarAgenda() {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const listaAgendas = yield prisma.agenda.findMany();
                return listaAgendas;
            }
            catch (error) {
                console.log(error);
            }
        });
    }
    criarAgenda(data, nomePcnt) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const criaAgenda = yield prisma.agenda.create({
                    data: {
                        data,
                        nomePcnt,
                    }
                });
                return criaAgenda;
            }
            catch (error) {
                console.log(error);
            }
        });
    }
    updateAgenda(id, data, nomePcnt) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const atualizaAgenda = yield prisma.agenda.update({
                    where: {
                        id,
                    },
                    data: {
                        nomePcnt: nomePcnt,
                        data: data
                    }
                });
                return atualizaAgenda;
            }
            catch (error) {
                console.log(error);
            }
        });
    }
    deleteAgenda() {
        return __awaiter(this, void 0, void 0, function* () {
            try {
            }
            catch (error) {
                console.log(error);
            }
        });
    }
}
exports.default = new AgendaServices();
