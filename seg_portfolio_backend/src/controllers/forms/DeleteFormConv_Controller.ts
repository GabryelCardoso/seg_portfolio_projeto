import { Request, Response } from "express";
import { DeleteFormConvService } from "../../services/forms/DeleteFormConv_Services";

class DeleteFormConvController{
    async handle(req: Request, res: Response){

        const form_id = req.query.form_id as string;

        const deleteFormConv = new DeleteFormConvService();

        const formconv = await deleteFormConv.execute({
            form_id
        });

        return res.json(formconv);
    }
}

export { DeleteFormConvController }