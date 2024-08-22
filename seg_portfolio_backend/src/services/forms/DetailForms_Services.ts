import prismaClient from "../../prisma";

class detailformsservices{
    async execute(){
        const formv = await prismaClient.user_v.findMany()

        const formcons = await prismaClient.user_cons.findMany()

        const formconv = await prismaClient.user_conv.findMany()

        const formseg = await prismaClient.user_seguro.findMany()

        const formularios = {formv, formcons, formconv, formseg}

        return formularios
    }
    
}

export {detailformsservices}