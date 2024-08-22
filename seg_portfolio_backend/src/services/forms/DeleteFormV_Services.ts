
import prismaClient from "../../prisma";

interface FormVRequest{
    form_id: string;
}

class DeleteFormVService{
    async execute({form_id}: FormVRequest){

        const formv = await prismaClient.user_v.delete({
            where:{
                id: form_id,
                
            },
        })

        return formv
    }
}

export { DeleteFormVService }