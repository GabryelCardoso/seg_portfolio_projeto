// pega os dados fornecidos e passa para o services fazer a lógica

import {Request,Response} from 'express'

import { Cadastrar_user } from '../../services/user/user_admin_cadastro'

class CadastrarAdminController{
    async handle(req: Request, res:Response){
        //Destrinchando a requisição que vem do body
        const {user, senha, adm} = req.body
        
        //instanciando objeto
        const cadastraradmin = new Cadastrar_user()

        //Chamando método execute do objeto cadastraradmin
        const useradmin = await cadastraradmin.execute({
            user,
            senha,
            adm
        })
       
        console.log(useradmin)
        return res.json(useradmin)
        
    }
}
export{ CadastrarAdminController }