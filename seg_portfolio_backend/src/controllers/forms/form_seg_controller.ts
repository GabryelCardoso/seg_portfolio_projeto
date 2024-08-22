// pega os dados fornecidos e passa para o services fazer a lógica

import {Request,Response} from 'express'

import { Cadastrar_FormsSeg } from '../../services/forms/form_seg_cadastro'

class FormSegController{
    async handle(req: Request, res:Response){
        //Destrinchando a requisição que vem do body
        const {nome, email, cpf, telefone, peso, altura, profissao, renda, fumante} = req.body
        
        //instanciando objeto
        const cadastrarformseg = new Cadastrar_FormsSeg()

        //Chamando método execute do objeto cadastrarformseg
        const formseg = await cadastrarformseg.execute({
            nome,
            email,
            cpf,
            telefone,
            peso,
            altura,
            profissao,
            renda,
            fumante
        })
       
        console.log(formseg)
        return res.json(formseg)
        
    }
}
export{ FormSegController }