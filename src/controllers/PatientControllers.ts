import PatientServices from '../services/PatientServices'
import { Request , Response } from 'express'

class PatientController{
    constructor(){}

    async listarPacientes(req: Request, res: Response){
        const pacientes = await PatientServices.listarPacientes();
        return res.status(200).json({
            status: "ok",
            pacientes: pacientes
        })
    }

    async criarPaciente(req: Request, res: Response, nome: string, senha: number, usuario: string){
        const criaPaciente = await PatientServices.criarPaciente(nome, senha, usuario);
        return res.status(200).json(
            {
                status: "ok",
                mensagem: `Paciente ${criaPaciente} cadastrado!`
            }
        )
    }

    async updatePaciente(req: Request, res: Response, id: number, novoNome: string, novaSenha: number, novoUsuario: string){
        const atualizaPaciente = await PatientServices.updatePaciente(id, novoNome, novaSenha, novoUsuario);
        return res.status(200).json(
            {
                status: "ok",
                mensagem: `Paciente ${atualizaPaciente} alterado!`
            }
        )
    }

    async deletePaciente(req: Request, res: Response, id: number){
        const deletaPaciente = await PatientServices.deletePaciente(id);
        return res.status(200).json(
            {
                status: "ok",
                mensagem: `Paciente ${deletaPaciente} deletado!`
            }
        )
    }

    async buscaPaciente(req: Request, res: Response, id: number){
        const buscarPaciente = await PatientServices.buscaPaciente(id);
        return res.status(200).json(
            {
                status: "ok",
                paciente: buscarPaciente
            }
        )
    }
}

export default new PatientController()


