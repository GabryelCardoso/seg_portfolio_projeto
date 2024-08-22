import prismaClient from "../../prisma";

class detailformssegservices{
    async execute(){
        
        const formseg = await prismaClient.user_seguro.findMany()

        const formulariosseg = {formseg}

        return formulariosseg
    }
    
}

export {detailformssegservices}