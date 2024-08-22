'use client'
import styles from '../styles/page.module.scss'
import { Metadata } from 'next';

import { Input } from '../components/ui/Input';
import { TextArea } from '../components/ui/Input';
import { Button } from '../components/ui/Button';


import logoImg from '../../../public/Logo.png'
import Image from "next/image";
import { setupAPICLient } from '../services/api';
import { toast } from 'react-toastify';
import { useState } from 'react';

import { useRouter } from 'next/navigation';




export default function Consorcio() {
  const router = useRouter();

  const [nome, setNome] = useState('');
  const [email, setEmail] = useState('');
  const [cpf, setCpf] = useState('');
  const [telefone, setTelefone] = useState('');
  const [credito, setCredito] = useState(null);
  const [parcela, setParcela] = useState(null);
  async function handleFormConsRegister(event: React.FormEvent) {
    event.preventDefault();
    try{
      
      const apiClient = setupAPICLient();
      
      await apiClient.post('/formcons', {
        nome: nome,
        email: email, 
        cpf: cpf,
        telefone: telefone,
        valor_credito: credito,
        valor_parcela: parcela,
      });
      
      toast.success('Formulário enviado com sucesso');
      setNome('');
      setEmail('');
      setCpf('');
      setTelefone('');
      setCredito('');
      setParcela('');
      
      router.push('/');

    }catch(err){
      console.log(err);
      
      toast.error('Erro ao enviar formulário, tente novamente mais tarde');
    }
  }
  
  return (
        <>
        <title>Seg Portfolio - Consórcio</title>
        

        <div className={styles.containerForm}>
        
        <Image src={logoImg} alt="Logo" id={styles.logoA}/>
        
        <div id={styles.texto}>
          <h2>Solicite a cotação do seu consórcio</h2>
          <p>Preencha os dados a seguir e receba uma simulação.</p>
        </div>
          
            <form onSubmit={handleFormConsRegister}>
              <div className={styles.formbase1}>
                <Input type='texts' 
                placeholder='Nome' 
                value={nome}
                onChange={(e) => setNome(e.target.value)}
                required/>
                <Input 
                type="email" 
                placeholder='Email' 
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required/>
              </div>
              <div className={styles.formbase1}>
                <Input 
                type='text' 
                placeholder='CPF/CNPJ' 
                value={cpf}
                onChange={(e) => setCpf(e.target.value)}
                required/>
                <Input 
                type='tel' 
                placeholder='DDD + Telefone' 
                value={telefone}
                onChange={(e) => setTelefone(e.target.value)}
                required/>
              </div>
              <div className={styles.formbase2}>
                <Input 
                type='number' 
                placeholder='Valor de crédito desejado' 
                value={credito}
                onChange={(e) => setCredito(parseFloat(e.target.value))}
                required/>
                <Input 
                type="number" 
                placeholder='Valor aproximado da parcela' 
                value={parcela}
                onChange={(e) => setParcela(parseFloat(e.target.value))}
                required/>
              </div>
              
             
              <div className={styles.formbase2}>
                
                <Button>Enviar</Button>
              </div>              

            </form>
          
          

        </div>
        </>
    );
  }