// passa os dados para o banco de dados e faz validações

//importando cliente do prisma
import prismaClient from "../../prisma";

//criando interface para os requisitos
interface FormSegRequest{
    nome: string
    email: string
    cpf: string
    telefone: string
    peso: number
    altura: number
    profissao: string
    renda: number
    fumante: string
}

class Cadastrar_FormsSeg{
     //cadastra dados no bd
     async execute({nome, email, cpf, telefone, peso, altura, profissao, renda, fumante}: FormSegRequest){
        const form_seg = await prismaClient.user_seguro.create({
         data:{
             nome: nome,
             email: email,
             cpf: cpf,
             telefone: telefone,
             peso: peso,
             altura: altura,
             profissao: profissao,
             renda: renda,
             fumante: fumante,
         }
        })
        return form_seg
     }
}

export {Cadastrar_FormsSeg}
