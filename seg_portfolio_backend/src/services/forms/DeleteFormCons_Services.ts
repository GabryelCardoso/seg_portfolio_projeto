
import prismaClient from "../../prisma";

interface FormConsRequest{
    form_id: string;
}

class DeleteFormConsService{
    async execute({form_id}: FormConsRequest){

        const formconv = await prismaClient.user_cons.delete({
            where:{
                id: form_id,
                
            },
        })

        return formconv
    }
}

export { DeleteFormConsService }