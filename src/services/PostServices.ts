import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

// async function main(){

// }

class PostServices{
    constructor() {}
    async listarConsultas(){
        try {
            const consultas = await prisma.consulta.findMany();
            return consultas;
        } catch (error){    
            console.log(error)
        }
    }

    async criarConsulta(){
        try{
            
        } catch (error){
            console.log(error)
        }
    }

    async atualizarPost(){

    }

    async deletarPost(id: number){

    }

}

export default new PostServices();

// main().then(async()=> {
//     await prisma.$disconnect()
// }).catch(async (e)=> {
//     console.error(e)
//     await prisma.$disconnect()
//     process.exit(1)
// })