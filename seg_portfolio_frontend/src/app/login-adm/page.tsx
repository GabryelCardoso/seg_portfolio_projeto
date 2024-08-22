'use client'


import { useContext,useState,FormEvent } from "react";

import { toast } from "react-toastify";

import { useRouter } from "next/navigation";


import styles from "../styles/page.module.scss"
import Image from "next/image";
import logoImg from "../../../public/Logo.png"

import { AuthContext } from "../contexts/AuthContext";

//Componentes
import {Input} from "../components/ui/Input"
import {Button} from "../components/ui/Button"





export default function LoginAdm(){
  const { signIn, isAuthenticated } = useContext(AuthContext)
  const router = useRouter()
  
  
  // states para enviar dados de login
  const [name, setName] = useState('');
  const [password, setPassword] = useState('');
  const [loading, setLoading] = useState(false);
  
  async function handleLogin(event:FormEvent ){
    event.preventDefault();
    if (name === '' || password === ''){
      toast.error("Preencha todos os campos")
      return; 
    }

    setLoading(true);
    let data = {
      name,
      password
    }

    await signIn(data)
    
    setLoading(false)

  }

  return(
        <>
        <title>Seg Potfolio - Login</title>
        
        <div className={styles.containerCenter}>
        <Image src={logoImg} alt="Logo" id={styles.logoA} />
        
        <div className={styles.login}>
          <span>Faça seu login</span>
         <form onSubmit={handleLogin}>
           <Input
           placeholder="Usuário"
           type="text"
           //valor do campo
           value = {name}
           onChange={(e)=> setName(e.target.value)}
           />
           <Input
           placeholder="Senha"
           type="password"
           //valor do campo
           value = {password}
           onChange={(e)=> setPassword(e.target.value)}
           />
          <Button
          type="submit"
          loading = {loading}
          >
          Acessar
          </Button>
         </form>
        </div>
      </div>
      </>
    )
}