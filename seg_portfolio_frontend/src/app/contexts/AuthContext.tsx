'use client'
//esse contexto é criado para verificar se o usuario está logado e mostrar suas informações
import {createContext, ReactNode, useState, useEffect} from 'react'

import { toast } from 'react-toastify'

import { useRouter } from 'next/navigation'

import { api } from '../services/apiClient'

import { destroyCookie, setCookie, parseCookies } from 'nookies'


//instanciando o uso do useRouter


// tipagem referente ao contexto
type AuthContextData = {
    user: UserProps;            // informações do usuario
    isAuthenticated: boolean;   //indica se está autenticado
    signIn: (credentials: SignInProps) => Promise<void>;
    signOut: () => void;
    signUp: (credentials: SignUpProps)=> Promise<void>
}

type UserProps = {
    id: string;
    name: string;
    adm: boolean;
}

type SignInProps = {
    name: string;
    password: string;
}

type SignUpProps = {
    name: string;
    password: string;
    adm: boolean;
}

type AuthProviderProps = {
    children: ReactNode;
}



// essa função vai obedecer essa tipagem
export const AuthContext = createContext({} as AuthContextData) 

export function signOut(){
    try{
    destroyCookie(undefined, '@nextauth.token')  
    console.log("cookie deletado")
    
    }catch{
        console.log("erro ao deslogar")
        toast.error("Erro ao deslogar. Tente novamente!")
    }
}


export function AuthProvider({ children }: AuthProviderProps){
    //istancia o useRouter
    const router = useRouter()
    
    // armazenar as informações do login
    // a tipagem define que o useState obedece a tipagem do UserProps
    const [user, setUser] = useState<UserProps>()
    
    // !! serve para converter a variável para booleano (vazio está falso e com dados verdadeiro)
    const isAuthenticated = !!user;
    useEffect(()=>{
        //tenta pegar algo no cookie
        const {'@nextauth.token': token} = parseCookies();
        if(token){
            api.get('/usuarioinfo').then(response =>{
                const {id, name, adm}= response.data;
                setUser({
                    id,
                    name,
                    adm

                })
            }).catch(()=>{
                //desloga o usuário
                signOut()
                router.push('/login-adm')
            })
        }
    }, [])
    async function signIn({name, password}: SignInProps){
        try{
            
            const response = await api.post('/session', {
                "user": name,
                "senha": password,
            })

            console.log(response.data)

            const {id, user, adm, token} = response.data

            // passo o token de para o cookie que vai transportar ele até a autenticação
            setCookie(undefined, '@nextauth.token', token,{
                maxAge: 60 * 60 * 24 * 30, //Um mês para o cookie expirar
                path: "/" // Quais caminhos terão acesso ao token (alterar depois para a página de usuário)
            })
            
            // passando para o usuário suas informações
            setUser({
                id,
                name,
                adm
            })

            // passar para próxmas requisições o token
            api.defaults.headers['Authorization'] = `Bearer ${token}`
            
            toast.success('Logado com sucesso')
            //redirecionar o usuario para /dashboard
            router.push('/dashboard')
            
            
        
            
        }catch(err){
            toast.error("Erro ao acessar!")
            console.log('Erro ao Acessar', err)
        }
        
    }
    
    async function signUp({ name, password, adm}: SignUpProps) {
    try{
        
        const response = await api.post('/cadastraruser', {
            "user": name,
            "senha": password,
            "adm": adm
        })

        toast.success("Conta criada com sucesso!")

        router.push("/dashboard/contas")
    }catch(err){
        toast.error("Erro ao cadastrar")
        console.log("erro ao cadastrar", err)
    }
    }

    return(
        <AuthContext.Provider value={{user, isAuthenticated, signIn, signOut, signUp}}>
        {children}
        </AuthContext.Provider>
    );
};

 

