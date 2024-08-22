import { hash } from "bcryptjs";
import prismaClient from "../src/prisma";

async function main() {
    const password = await hash("123", 8);
    
    const user = {
        user: "adm",
        senha: password,
        adm: true,
    }

    await prismaClient.users.create({
        data:{
            user: user.user,
            senha: password,
            adm: user.adm,
        }
    })
}

main()

