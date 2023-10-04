import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

// async function main(){

// }

class PatientServices{
    constructor() {}
    async listarPacientes(){
        try {
            const patientsList = await prisma.paciente.findMany();
            return patientsList;
        } catch (error){    
            console.log(error)
        }
    }

    async criarPaciente(nome: string, senha: number, usuario: string){
        try{
            const pacienteCreate = await prisma.paciente.create({
                    data: {
                        nome,
                        senha,
                        usuario
                    },
                }
            )
            return `Paciente ${pacienteCreate.nome} cadastrado com sucesso!`
        } catch (error){
            console.log('Não foi possível cadastrar este paciente devido a um erro')
            console.log(error)
        }
    }

    async updatePaciente(id: number, novoNome: string, novaSenha: number, novoUsuario: string){
        try{
            const atualizaPaciente = await prisma.paciente.update(
                {
                    where:{
                        id,
                    },
                    data:{
                        nome: novoNome,
                        senha: novaSenha,
                        usuario: novoUsuario
                    }
                }
            )
            return `Paciente ${atualizaPaciente.nome} alterado com sucesso!`
        } catch (error){
            console.log(error)
        }
    }

    async deletePaciente(id: number){
        try{
            const deletarPaciente = await prisma.paciente.delete(
                {
                    where:{
                        id,
                    }
                }
            )
        } catch (error){
            console.log(error)
        }
    }

    async buscaPaciente(id: number){
        try {
            const buscarPaciente = await prisma.paciente.findUnique(
                {
                   where:{
                    id,
                   } 
                }
            )
        } catch (error){
            console.log(error)
        }
    }

}

export default new PatientServices();

// main().then(async()=> {
//     await prisma.$disconnect()
// }).catch(async (e)=> {
//     console.error(e)
//     await prisma.$disconnect()
//     process.exit(1)
// })