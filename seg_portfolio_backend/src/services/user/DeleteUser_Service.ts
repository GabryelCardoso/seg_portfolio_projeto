import prismaClient from "../../prisma";

interface UserRequest{
    user_id: string;
}


class DeleteUserService{
    async execute({user_id}: UserRequest){

        const user = await prismaClient.users.delete({
            where:{
                id: user_id,
                
            },
        })

        return user
    }
}

export { DeleteUserService }