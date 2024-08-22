import { Request, Response } from "express";    

import { DetailUsersService } from "../../services/user/DetailUsers_Service";

class DetailUsersController {
    async handle(req: Request, res: Response){
        const detailusers = new DetailUsersService()

        const todosusuarios = await detailusers.execute()

        return res.json(todosusuarios)
    }
}

export {DetailUsersController}