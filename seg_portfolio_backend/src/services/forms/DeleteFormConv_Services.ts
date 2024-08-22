
import prismaClient from "../../prisma";

interface FormConvRequest{
    form_id: string;
}

class DeleteFormConvService{
    async execute({form_id}: FormConvRequest){

        const formconv = await prismaClient.user_conv.delete({
            where:{
                id: form_id,
                
            },
        })

        return formconv
    }
}

export { DeleteFormConvService }