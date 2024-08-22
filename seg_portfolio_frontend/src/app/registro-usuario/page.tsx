'use client'
import styles from "../styles/page.module.scss"
import Image from "next/image";
import logoImg from "../../../public/Logo.png"

//Componentes
import {Input, Radio} from "../components/ui/Input"
import {Button} from "../components/ui/Button"
import { toast } from "react-toastify";

//react/next
import { useState, FormEvent, useContext } from "react";
import { GetServerSideProps } from "next";
//contexto
import { AuthContext } from "../contexts/AuthContext";


export default function RegistroUsuario(){
  const {signUp} = useContext(AuthContext);
  
  const [name, setName] = useState('')
  const [adm, setAdm] = useState(null)
  const [password, setPassword] = useState('')
  const [loading, setLoading] = useState(false);
  
  const handleRadioChange = (event) => {
    if(event.target.value === 'sim'){
      setAdm(true)
    }
    if(event.target.value === 'não'){
      setAdm(false)
    }
  }

  async function handleSignUp(event: FormEvent){
    event.preventDefault();
    if(name ==='' || password ==='' || adm ===null){
      toast.error('Preencha todos os campos')
      return
    }
    
    const confirmaCadastro = window.confirm("Confirmar cadastro de usuário?")
    
    if(confirmaCadastro){
    setLoading(true)
    let data = {
      name,
      adm,
      password
    }
    await signUp(data)

    //faz o spinner parar de girar
    setLoading(false)
    }
    else{
      return
      
    }
    
  }

  return(
        <>
        <title>Seg Portfolio - Cadastro</title>
        
        <div className={styles.containerCenter}>
        <Image src={logoImg} alt="Logo"  id={styles.logoA}/>

        <div className={styles.login}>
         <form onSubmit={handleSignUp}>
           <Input
           placeholder="Usuário"
           type="text"
           //valor do campo
           value={name}
           onChange={(e)=> setName(e.target.value)}
           />
           <Input
           placeholder="Senha"
           type="password"
           //valor do campo
           value={password}
           onChange={ (e)=> setPassword(e.target.value)}
           />
           <label id={styles.texto}><h4>Conta de administrador?</h4></label>
           <div id={styles.radio}>
            <div id={styles.radio}>
              <Radio 
              name="res_user_adm" id="res_user_adm_sim" 
              value="sim"
              onChange={handleRadioChange}
              />
              <label>Sim</label>
            </div>
            <div id={styles.radio}>
              <Radio 
              name="res_user_adm" id="res_user_adm_nao" 
              value="não" 
              onChange={handleRadioChange}
              />
              <label>Não</label>
            </div>
           </div>
           

          <Button
          type="submit"
          loading={loading}
          >
          Cadastrar
          </Button>
         </form>
        </div>
      </div>
      </>
    )
}

