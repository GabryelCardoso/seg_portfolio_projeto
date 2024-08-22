import { Request, Response } from "express";
import { AuthUserAdminService } from "../../services/user/AuthUserAdmin_Service";

class AuthUserAdminController{
    async handle(req: Request, res:Response){
        const {user, senha} = req.body

        const authUserService = new AuthUserAdminService()

        const auth = await authUserService.execute({
            user,
            senha
        })
        return res.json(auth)
    }
}

export {AuthUserAdminController}