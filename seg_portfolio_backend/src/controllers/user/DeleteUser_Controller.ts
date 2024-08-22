import { Request, Response } from "express";
import { DeleteUserService } from "../../services/user/DeleteUser_Service";

class DeleteUserController{
    async handle(req: Request, res: Response){

        const user_id = req.query.user_id as string;

        

        const deleteuser = new DeleteUserService()

        const user = await deleteuser.execute({
            user_id
        });

        return res.json(user)

    }
}

export { DeleteUserController }