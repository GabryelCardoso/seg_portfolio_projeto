import { Request, Response } from "express";
import { DeleteFormConsService } from "../../services/forms/DeleteFormCons_Services";

class DeleteFormConsController{
    async handle(req: Request, res: Response){

        const form_id = req.query.form_id as string;

        const deleteFormCons = new DeleteFormConsService();

        const formcons = await deleteFormCons.execute({
            form_id
        });

        return res.json(formcons);
    }
}

export { DeleteFormConsController 
    
}