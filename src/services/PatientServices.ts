import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

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
            return pacienteCreate + `Paciente ${pacienteCreate.nome} cadastrado com sucesso!`
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
            return atualizaPaciente + `Paciente ${atualizaPaciente.nome} alterado com sucesso!`
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
            return deletarPaciente + `Paciente ${deletarPaciente.nome} deletado!`
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
            return buscarPaciente
        } catch (error){
            console.log(error)
        }
    }

}

export default new PatientServices();
