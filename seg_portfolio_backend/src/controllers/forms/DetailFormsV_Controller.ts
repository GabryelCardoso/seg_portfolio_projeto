import { Request, Response } from "express";

import { detailformsVservices } from "../../services/forms/DetailFormsV_Services";

class detailformsvcontroller{
    async handle(req: Request, res: Response){
       const detailformsV = new detailformsVservices()

       const formulariosV = await detailformsV.execute()

       return res.json(formulariosV)
    }
}

export {detailformsvcontroller}