import { Request, Response } from "express";
import { DeleteFormVService } from "../../services/forms/DeleteFormV_Services";

class DeleteFormVController{
    async handle(req: Request, res: Response){

        const form_id = req.query.form_id as string;

        const deleteFormV = new DeleteFormVService();

        const formv = await deleteFormV.execute({
            form_id
        });

        return res.json(formv);
    }
}

export { DeleteFormVController }