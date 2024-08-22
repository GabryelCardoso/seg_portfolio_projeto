import { Request, Response } from "express";

import { detailformsconvservices } from "../../services/forms/DetailFormsConv_Services";

class detailformsconvcontroller{
    async handle(req: Request, res: Response){
       const detailformsconv = new detailformsconvservices()

       const formulariosconv = await detailformsconv.execute()

       return res.json(formulariosconv)
    }
}

export {detailformsconvcontroller}