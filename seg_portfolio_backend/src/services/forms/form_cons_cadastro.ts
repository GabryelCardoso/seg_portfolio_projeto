// passa os dados para o banco de dados e faz validações

//importando cliente do prisma
import prismaClient from "../../prisma";

//criando interface para os requisitos
interface FormConsRequest{
    nome: string
    email: string
    cpf: string
    telefone: string
    valor_credito: number
    valor_parcela: number
}

class Cadastrar_FormsCons{
    //cadastra dados no bd
    async execute({nome, email, cpf, telefone, valor_credito, valor_parcela}: FormConsRequest){
       const form_cons = await prismaClient.user_cons.create({
        data:{
            nome: nome,
            email: email,
            cpf: cpf,
            telefone: telefone,
            valor_credito: valor_credito,
            valor_parcela: valor_parcela
        }
       })
       return form_cons
    }
}

export {Cadastrar_FormsCons}