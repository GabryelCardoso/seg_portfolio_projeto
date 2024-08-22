import prismaClient from "../../prisma";

class detailformsconsservices{
    async execute(){
        

        const formcons = await prismaClient.user_cons.findMany()

       

        

        const formulariocons = { formcons }

        return formulariocons
    }
    
}

export {detailformsconsservices}