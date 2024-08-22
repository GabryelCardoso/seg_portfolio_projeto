import { Request, Response } from "express";

import { detailformsconsservices } from "../../services/forms/DetailFormsCons_Services";

class detailformsconscontroller{
    async handle(req: Request, res: Response){
       const detailformscons = new detailformsconsservices()

       const formularioscons = await detailformscons.execute()

       return res.json(formularioscons)
    }
}

export {detailformsconscontroller}