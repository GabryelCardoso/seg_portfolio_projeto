'use client'
import styles from '../styles/page.module.scss'


import { Input } from '../components/ui/Input';
import { TextArea } from '../components/ui/Input';
import { Button } from '../components/ui/Button';


import logoImg from '../../../public/Logo.png'
import Image from "next/image";
import { setupAPICLient } from '../services/api';
import { toast } from 'react-toastify';
import { useState } from 'react';
import { useRouter } from 'next/navigation';


export default function Segv() {
    const router = useRouter();


    const [nome, setNome] = useState('');
    const [email, setEmail] = useState('');
    const [cpf, setCpf] = useState('');
    const [telefone, setTelefone] = useState('');
    const [modelo, setModelo] = useState('');
    const [ano, setAno] = useState(null);
    const [fabricante, setFabricante] = useState('');
    const [descricao, setDescricao] = useState('');

    const [loading, setLoading] = useState(false);

  async function handleFormVeicRegister(event: React.FormEvent) {
    event.preventDefault();
    setLoading(true);
    try{
      
      const apiClient = setupAPICLient();
      
      await apiClient.post('/formv', {
        nome: nome,
        email: email, 
        cpf: cpf,
        telefone: telefone,
        situacao_v: descricao,
        modelo_v: modelo,
        ano_v: ano,
        fabricante_v: fabricante,
        
        
      });
      
      toast.success('Formulário enviado com sucesso');
      setNome('');
      setEmail('');
      setCpf('');
      setTelefone('');
      setModelo('');
      setAno('');
      setFabricante('');
      setDescricao('');

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
        <title>Seg Portfolio - Seguro de veículos</title>
        <div className={styles.containerForm}>
        
        <Image src={logoImg} alt="Logo" id={styles.logoA}/>
        
        <div id={styles.texto}>
          <h2>Solicite a cotação do seu seguro</h2>
          <p>Preencha os dados a seguir e receba uma simulação.</p>
        </div>
          
            <form onSubmit={handleFormVeicRegister}>
              <div className={styles.formbase1}>
                <Input 
                type='text'
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
                type='tel'
                placeholder='DDD + Telefone' 
                value={telefone}
                onChange={(e) => setTelefone(e.target.value)}
                required/>
              </div>
              <div className={styles.formbase2}>
                <Input 
                type='text'
                placeholder='Modelo do veículo' 
                value={modelo}
                onChange={(e) => setModelo(e.target.value)}
                required/></div>
              <div className={styles.formbase1}>
                <Input 
                type='number'
                placeholder='Ano do veículo' 
                value={ano}
                onChange={(e) => setAno(Number(e.target.value))}
                required/>
                <Input 
                type='text'
                placeholder='Fabricante do veículo' 
                value={fabricante}
                onChange={(e) => setFabricante(e.target.value)}
                required/>
              </div>
             
              <div className={styles.formbase2}>
                <TextArea 
                placeholder='Descreva a situação do seu veículo. Ex: veículo novo mas sem seguro.' 
                value={descricao}
                onChange={(e) => setDescricao(e.target.value)}
                required/>
                <Button
                loading={loading}
                >Enviar</Button>
              </div>              

            </form>
          
          

        </div>
        </>
    );
  }