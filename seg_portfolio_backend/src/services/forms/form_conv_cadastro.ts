// passa os dados para o banco de dados e faz validações

//importando cliente do prisma
import prismaClient from "../../prisma";

//criando interface para os requisitos
interface FormConvRequest{
    nome: string
    email: string
    cpf: string
    telefone: string
    peso: number
    altura: number
    localidade: string
    convenio: string
    hospital_pref: string
    nome_hospital: string
    idade: number
    pessoa: string
}

class Cadastrar_FormsConv{
    //cadastra dados no bd
    async execute({nome, email, cpf, telefone,peso , altura, localidade, convenio, hospital_pref, nome_hospital, idade, pessoa}: FormConvRequest){
        const formconv  = await prismaClient.user_conv.create({
            data:{
                nome: nome,
                email: email,
                cpf: cpf,
                telefone:telefone,
                peso: peso,
                altura: altura,
                localidade: localidade,
                convenio: convenio,
                hospital_pref: hospital_pref,
                nome_hospital: nome_hospital,
                idade: idade,
                pessoa: pessoa,
            }
        })
        return formconv
    }
}

export {Cadastrar_FormsConv}
