import { Request, Response } from "express";

import { detailformsservices } from "../../services/forms/DetailForms_Services";

class detailformscontroller{
    async handle(req: Request, res: Response){
       const detailforms = new detailformsservices()

       const formularios = await detailforms.execute()

       return res.json(formularios)
    }
}

export {detailformscontroller}