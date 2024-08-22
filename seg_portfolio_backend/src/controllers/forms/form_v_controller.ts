// pega os dados fornecidos e passa para o services fazer a lógica


import {Request,Response} from 'express'

import { Cadastrar_Forms } from '../../services/forms/form_v_cadastro'

class CadastrarFormsController{
    async handle(req: Request, res: Response){
        //destrinchando a requisição que vem do body
        const {nome, email, cpf, telefone, situacao_v, modelo_v, ano_v, fabricante_v} = req.body
       
        //instanciando o objeto
        const cadastrarforms = new Cadastrar_Forms()

        // chamando o método execute
        const formv = await cadastrarforms.execute({
            nome,
            email,
            cpf,
            telefone,
            situacao_v,
            modelo_v,
            ano_v,
            fabricante_v
        })

        return res.json(formv)
    }


}

export {CadastrarFormsController}