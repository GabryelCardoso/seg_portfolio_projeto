// pega os dados fornecidos e passa para o services fazer a lógica


import {Request,Response} from 'express'

import { Cadastrar_FormsConv } from '../../services/forms/form_conv_cadastro'

class FormConvController{
    async handle(req: Request, res: Response){
        //Destrinchando a requisição que vem do body
        const {nome, email, cpf, telefone, localidade,peso, altura, convenio, hospital_pref, nome_hospital, idade, pessoa} = req.body

        //Instanciando objeto
        const cadastrarformconv = new Cadastrar_FormsConv()

        //Chamando método execute do objeto cadastrarformconv
        const formconv = await cadastrarformconv.execute({
            nome,
            email,
            cpf,
            telefone,
            peso,
            altura,
            localidade,
            convenio,
            hospital_pref,
            nome_hospital,
            idade,
            pessoa,
        })

        return res.json(formconv)
    }
}

export {FormConvController}