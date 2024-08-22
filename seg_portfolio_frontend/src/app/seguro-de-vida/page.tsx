'use client'
import styles from '../styles/page.module.scss'
import { Metadata } from 'next';

import { Input, Radio, TextArea } from '../components/ui/Input';
import {toast} from 'react-toastify'
import { Button } from '../components/ui/Button';


import logoImg from '../../../public/Logo.png'
import Image from "next/image";
import { useState } from 'react';
import { setupAPICLient } from '../services/api';

import { useRouter } from 'next/navigation';





export default function Segvida() {
    const router = useRouter();

    const [nome, setNome] = useState('');
    const [email, setEmail] = useState('');
    const [cpf, setCpf] = useState('');
    const [telefone, setTelefone] = useState('');
    const [peso, setPeso] = useState(null);
    const [altura, setAltura] = useState(null);
    const [profissao, setProfissao] = useState('');
    const [renda, setRenda] = useState(null);
    const [fumante, setFumante] = useState('');
    
    const [loading, setLoading] = useState(false);
    async function handleFormRegister(event: React.FormEvent) {
      event.preventDefault();
      setLoading(true);
      try{
        
        
        if(nome === '' || email === '' || cpf === '' || telefone === '' || peso === '' || altura === '' || profissao === '' || renda === ''){
          toast.error('Preencha todos os campos');
          return;
        }

        
        
        const apiClient = setupAPICLient();
        
        await apiClient.post('/formseg', {
          nome: nome,
          email: email, 
          cpf: cpf,
          telefone: telefone,
          peso: peso,
          altura: altura,
          profissao: profissao,
          renda: renda,
          fumante: fumante

        });
        
        toast.success('Formulário enviado com sucesso');
        setNome('');
        setEmail('');
        setCpf('');
        setTelefone('');
        setPeso('');
        setAltura('');
        setProfissao('');
        setRenda('');
        setFumante('');
        setLoading(false);
        
        router.push('/');
      }catch(err){
        console.log(err);
        
        setLoading(false);
        toast.error('Erro ao enviar formulário, tente novamente mais tarde');
      }
    }
  return (
        <>
        <title>Seg Portfolio - Seguro de vida</title>
        

        <div className={styles.containerForm}>
        
        <Image src={logoImg} alt="Logo" id={styles.logoA}/>
        
        <div id={styles.texto}>
          <h2>Solicite a cotação do seu seguro</h2>
          <p>Preencha os dados a seguir e receba uma simulação.</p>
        </div>
          
            <form onSubmit={handleFormRegister}>
              <div className={styles.formbase1}>
                <Input 
                type="text" 
                placeholder='Nome'  
                value={nome}
                onChange={(e) => setNome(e.target.value)}
                required/>

                <Input 
                type='email'
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
                type='text' 
                placeholder='DDD + Telefone' 
                value={telefone}
                onChange={(e) => setTelefone(e.target.value)}
                required/>
              </div>
               
              <div className={styles.formbase1}>
                <Input 
                type='number' 
                placeholder='Peso' 
                value={peso}
                onChange={(e) => setPeso(parseFloat(e.target.value))}
                required />
                <Input 
                type='number' 
                placeholder='Altura' 
                value={altura}
                onChange={(e) => setAltura(parseFloat(e.target.value))}
                required/>
              </div>
              <div className={styles.formbase1}>
                <Input 
                type='text' 
                placeholder='Profissão' 
                value={profissao}
                onChange={(e) => setProfissao(e.target.value)}
                required/>

                <Input 
                type='number' 
                placeholder='Renda Mensal (R$)' 
                value={renda}
                onChange={(e) => setRenda(parseFloat(e.target.value))}
                required/>
              </div>
              
              <div className={styles.formbase2}>
              <label id={styles.texto}><h4>Já fumou no período de dois anos ou ainda fuma?</h4></label>
              
              </div>
              
              <div id={styles.radio}>
                <div id={styles.radio}>
                  <Radio name="res_pessoa_fum" id="res_pessoa_fum_s" 
                  value="Sim" 
                  onChange={(e) => setFumante(e.target.value)}
                  required/>
                  <label>Sim</label>
                </div>
                <div id={styles.radio}>
                  <Radio name="res_pessoa_fum" id="res_pessoa_fum_n" value="Não"
                  onChange={(e) => setFumante(e.target.value)}
                  required/>
                  <label>Não</label>
                  
                </div>
              </div>
              

              
              <div className={styles.formbase2}>
                
                <Button
                loading={loading}
                >Enviar</Button>
              </div>              

            </form>
          
          

        </div>
        </>
    );
  }