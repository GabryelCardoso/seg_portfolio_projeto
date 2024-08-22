// passa os dados para o banco de dados e faz validações

//importando o client
import prismaClient from '../../prisma'

interface FormRequest{
  nome: string
  email: string
  cpf: string
  telefone: string
  situacao_v: string
  modelo_v: string
  ano_v: number
  fabricante_v: string
}



class Cadastrar_Forms{
  // cadastrando forms no bd 
  async execute({nome, email, cpf, telefone, situacao_v, modelo_v, ano_v, fabricante_v}: FormRequest ){
        const form_v = await prismaClient.user_v.create({
          data:{
            nome: nome,
            email: email,
            cpf: cpf,
            telefone: telefone,
            situacao_v: situacao_v,
            modelo_v: modelo_v,
            ano_v: ano_v,
            fabricante_v: fabricante_v,

          }
        })
        return form_v
    }
}

export { Cadastrar_Forms }