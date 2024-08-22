//faz a validação dotoken do usuario
import { NextFunction, Request, Response } from "express";
import { verify } from "jsonwebtoken";

interface PayLoad{
    sub: string
}
export function isAuthenticated(
    req: Request,
    res: Response,
    next: NextFunction
){
   //receber o token
   const authTOken = req.headers.authorization

   if(!authTOken){
    //status 401 (não autorizado)
    return res.status(401).end()
   }
   const [, token] = authTOken.split(" ")

   try{
    //validar o token
    const { sub } = verify(
        token,
        process.env.JWT_SECRET
    ) as PayLoad
    
    // Recuperar o id do token e colocar dentro de uma variável user_id dentro do req
    req.user_id = sub
    
    return next();

   }catch(err){
    return res.status(401).end()
   }
}