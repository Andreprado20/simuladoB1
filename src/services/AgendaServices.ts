import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient()

class AgendaServices{
    constructor(){}

    async listarAgenda(){
        try{
            const listaAgendas = await prisma.agenda.findMany()
            return listaAgendas
        } catch(error){
            console.log(error)
        }
    }

    async criarAgenda(data: Date, nomePcnt: string){
        try{
            const criaAgenda= await prisma.agenda.create(
                {
                    data:{
                        data,
                        nomePcnt,
                    }
                }
            )
            return criaAgenda;
        } catch(error){
            console.log(error)
        }
    }

    async updateAgenda(id: number, data: Date, nomePcnt: string){
        try{
            const atualizaAgenda = await prisma.agenda.update(
                {
                    where:{
                        id,
                    },
                    data:{
                        nomePcnt: nomePcnt,
                        data: data
                    }
                }
            )
            return atualizaAgenda;
        } catch(error){
            console.log(error)
        }
    }

    async deleteAgenda(){
        try{

        } catch(error){
            console.log(error)
        }
    }
}

export default new AgendaServices()