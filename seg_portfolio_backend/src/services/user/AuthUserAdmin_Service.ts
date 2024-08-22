import prismaClient from "../../prisma";
import { compare } from 'bcryptjs'
import { sign } from 'jsonwebtoken'

interface AuthRequest{
    user: string,
    senha: string;
}

class AuthUserAdminService{
    async execute({user, senha}: AuthRequest){
        //verificar se o usuario existe

        const usuario = await prismaClient.users.findFirst({
            where:{
                user: user
            }
        })

        if(!usuario){
            throw new Error("Usuário ou senha não encontrado")
        }
        //verificar se a senha está correta
        const passwordMatch = await compare(senha, usuario.senha)

        if(!passwordMatch){
            throw new Error("Usuário ou senha não encontrado")
        } 

        //se der tudo certo vamos gerar o token pro usuario
        // npm add dotenv 
        const token = sign(
            {
                user: usuario.user,
                permissao: usuario.adm
            },
            process.env.JWT_SECRET,
            {
                subject: usuario.id,
                expiresIn: '30d'          
            }
        )

        return {
            id: usuario.id,
            nome_usuario: usuario.user,
            adm: usuario.adm,
            token: token    
        }
    }
}

export { AuthUserAdminService }


