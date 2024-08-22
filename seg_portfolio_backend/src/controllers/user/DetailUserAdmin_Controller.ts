import { Request, Response } from "express";
import { DetailUserAdminService } from "../../services/user/DetailUserAdmin_service";

class DetailUserAdminController{
    async handle(req: Request, res: Response){

        const user_id = req.user_id

        

        const detailuseradminservice = new DetailUserAdminService()

        const usuario = await detailuseradminservice.execute(user_id)

        return res.json(usuario)

    }
}

export { DetailUserAdminController }