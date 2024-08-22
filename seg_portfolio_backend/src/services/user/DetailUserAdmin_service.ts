import prismaClient from "../../prisma";

class DetailUserAdminService{
    async execute(user_id: string){

        const user = await prismaClient.users.findFirst({
            where:{
                id: user_id
            },
            select:{
                id: true,
                user: true,
                adm: true,
                created_at: true
            }
        })

        return {user}
    }
}

export { DetailUserAdminService }