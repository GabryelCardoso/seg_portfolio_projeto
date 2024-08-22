import prismaClient from "../../prisma";

class detailformsVservices{
    async execute(){
        const formv = await prismaClient.user_v.findMany()

        
        
        

        const formulariosV = {formv}
        return formulariosV
    }
    
}

export {detailformsVservices}