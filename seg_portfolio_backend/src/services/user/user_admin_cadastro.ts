// passa os dados para o banco de dados e faz validações

//importando cliente do prisma
import prismaClient from "../../prisma";

import { hash } from "bcryptjs";

//criando interface para os requisitos
interface UserRequest{
    user: string
    senha: string
    adm: boolean
}

class Cadastrar_user{
     //cadastra dados no bd
     async execute({user, senha, adm}: UserRequest){
        //verifica se ele enviou o usuário
        if(!user){
            throw new Error("Usuario incorreto")
        } 

        // verifica se o usuario já existe no sistema
        const useAlreadyExist = await prismaClient.users.findFirst({
            where:{
                user: user
            }
        })

        if(useAlreadyExist){
            throw new Error('Usuário já existe')
        }

        const passwordHash = await hash(senha, 8)

        const user_admin = await prismaClient.users.create({
         data:{
             user: user,
             senha: passwordHash,
             adm: adm
         },
         select:{
            id: true,
            user: true, 
            adm: true
         }
        })
        
        return user_admin
     }
}

export {Cadastrar_user}
