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
class SecretariaServices {
    constructor() { }
    listarSecretarias() {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const listaSecretarias = yield prisma.secretaria.findMany();
                return listaSecretarias;
            }
            catch (error) {
                console.log(error);
            }
        });
    }
    criarSecretaria(nome, rg) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const criaSecretaria = yield prisma.secretaria.create({
                    data: {
                        nome,
                        rg,
                    }
                });
                return criaSecretaria;
            }
            catch (error) {
                console.log(error);
            }
        });
    }
    updateSecretaria(id, novoNome, novoRg) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const atualizaSecretaria = yield prisma.secretaria.update({
                    where: {
                        id,
                    },
                    data: {
                        nome: novoNome,
                        rg: novoRg
                    }
                });
                return atualizaSecretaria;
            }
            catch (error) {
                console.log(error);
            }
        });
    }
    deleteSecretaria(id) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const deletaSecretaria = yield prisma.secretaria.delete({
                    where: {
                        id,
                    }
                });
                return deletaSecretaria;
            }
            catch (error) {
                console.log(error);
            }
        });
    }
}
exports.default = new SecretariaServices();
