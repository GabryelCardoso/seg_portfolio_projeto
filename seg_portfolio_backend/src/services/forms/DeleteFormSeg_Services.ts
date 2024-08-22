
import prismaClient from "../../prisma";

interface FormSegRequest{
    form_id: string;
}

class DeleteFormSegService{
    async execute({form_id}: FormSegRequest){

        const formseg = await prismaClient.user_seguro.delete({
            where:{
                id: form_id,
                
            },
        })

        return formseg
    }
}

export { DeleteFormSegService }