import { Request, Response } from "express";
import { DeleteFormSegService } from "../../services/forms/DeleteFormSeg_services";

class DeleteFormSegController{
    async handle(req: Request, res: Response){

        const form_id = req.query.form_id as string;

        const deleteFormSeg = new DeleteFormSegService();

        const formseg = await deleteFormSeg.execute({
            form_id
        });

        return res.json(formseg);
    }
}

export { DeleteFormSegController 
    
}