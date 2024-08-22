import {Request, Response} from "express";

import { Cadastrar_FormsCons } from "../../services/forms/form_cons_cadastro";

class FormConsController{
    async handle(req: Request, res: Response){
        //Destrinchando a requisição que vem do body
        const {nome, email, cpf, telefone, valor_credito, valor_parcela} = req.body

        //Instanciando objeto
        const cadastrarformcons = new Cadastrar_FormsCons()

        //Chamando método execute do objeto cadastrarformcons
        const formcons = await cadastrarformcons.execute({
            nome,
            email,
            cpf,
            telefone,
            valor_credito,
            valor_parcela
        })

        return res.json(formcons)
    }
}

export {FormConsController}