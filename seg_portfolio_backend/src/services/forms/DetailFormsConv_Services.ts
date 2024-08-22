import prismaClient from "../../prisma";

class detailformsconvservices{
    async execute(){
        

        const formconv = await prismaClient.user_conv.findMany()

       

        const formularioconv = { formconv }

        return formularioconv
    }
    
}

export {detailformsconvservices}