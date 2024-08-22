import { NextResponse, NextRequest } from "next/server"
import jwt from 'jsonwebtoken';


export async function middleware(request: NextRequest){
    
    console.log("--Middleware--")
    
    //busca se existe algum token nos cookies e recupera ele 
    const token = request.cookies.get("@nextauth.token")
    
    let permissaoUsuario = false

    
    if(token){ // Verifica se existe algum valor no token 
            try{
                //Busca a informação de adm no token
                
                const admUsuario = jwt.decode(token.value).permissao
                
                //const teste = jwt.decode(token.value)
                //console.log(teste)
                
                // Verifica se  existe o valor do admUsuario no token recebido 
                if(admUsuario!=null){
                    // Se existir valor, verifica se ele é igual a verdadeiro
                    if(admUsuario===true){
                        //Se for verdadeiro, seta a variável permissaoUsuario para true
                        permissaoUsuario = true
                    }
                }else{
                    //Caso não exista valor em admUsuario retorna um erro
                    return NextResponse.error()
                }
                

            }catch(err){
               // Caso ocorra algum erro no bloco de cima retorna um erro 404
                console.error("Erro ao decodificar o token: ", err); 
                
                return NextResponse.error()
            }
            
    
    }
    
    
    
    //obtem a rota atual
    const rotaAtual = request.nextUrl.pathname
    
    //tratativas
    switch(true){
        
        case rotaAtual.startsWith("/dashboard/contas"):
            if(!token || !permissaoUsuario){
                console.log("Sua conta não tem permissão suficiente para acessar essa página.")
                return NextResponse.redirect(new URL("/dashboard", request.url));
                
            } 
            break;
        
        case rotaAtual.startsWith("/dashboard"):
            if(!token){
                console.log("Permissão negada, realize a autenticação")
                return NextResponse.redirect(new URL("/login-adm", request.url));
            } 
            break;
        


        case rotaAtual.startsWith("/login-adm"):
                if(token){
                    
                    console.log("login-adm")
                    return NextResponse.redirect(new URL("/dashboard", request.url))
                } 
                
                break;
        case rotaAtual.startsWith("/registro-usuario"):
                if(!token || !permissaoUsuario){
                    console.log("Usuário não possui permissão necessária")
                    
                    return NextResponse.redirect(new URL("/login-adm", request.url))
                } 
                break;
    }
    console.log("Permissão aceita.")
    return NextResponse.next()
}



export const config = {
    matcher: ["/dashboard/:path*", "/registro-usuario/:path*", "/login-adm/:path*"]
}