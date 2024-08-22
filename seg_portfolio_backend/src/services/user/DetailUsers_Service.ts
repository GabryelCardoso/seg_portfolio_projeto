import prismaClient from "../../prisma";

class DetailUsersService{
    async execute(){
        const usuarios = prismaClient.users.findMany();
        return usuarios;
    }
}

export {DetailUsersService}