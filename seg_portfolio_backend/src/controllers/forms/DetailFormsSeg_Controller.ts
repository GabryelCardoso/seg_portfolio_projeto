import { Request, Response } from "express";

import { detailformssegservices } from "../../services/forms/DetailFormsSeg_Services";

class detailformssegcontroller{
    async handle(req: Request, res: Response){
       const detailformsseg = new detailformssegservices()

       const formulariosseg = await detailformsseg.execute()

       return res.json(formulariosseg)
    }
}

export {detailformssegcontroller}