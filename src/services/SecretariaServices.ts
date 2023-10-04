import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient()

class SecretariaServices{
    constructor(){}

    async listarSecretarias(){
        try{
            const listaSecretarias = await prisma.secretaria.findMany()
            return listaSecretarias
        } catch(error){
            console.log(error)
        }
    }

    async criarSecretaria(nome: string, rg: number){
        try{
            const criaSecretaria = await prisma.secretaria.create(
                {
                    data:{
                        nome,
                        rg,
                    }
                }
            )
            return criaSecretaria;
        } catch(error){
            console.log(error)
        }
    }

    async updateSecretaria(id: number, novoNome: string, novoRg: number){
        try{
            const atualizaSecretaria = await prisma.secretaria.update(
                {
                    where:{
                        id,
                    },
                    data:{
                        nome: novoNome,
                        rg: novoRg
                    }
                }
            )
            return atualizaSecretaria;
        } catch(error){
            console.log(error)
        }
    }

    async deleteSecretaria(id: number){
        try{
            const deletaSecretaria = await prisma.secretaria.delete(
                {
                    where:{
                        id,
                    }
                }
            )
            return deletaSecretaria
        } catch(error){
            console.log(error)
        }
    }
}

export default new SecretariaServices()