'use client'
import styles from '../styles/page.module.scss'

import { Input, Radio, TextArea } from '../components/ui/Input';

import { Button } from '../components/ui/Button';


import logoImg from '../../../public/Logo.png'
import Image from "next/image";
import { useState } from 'react';
import { setupAPICLient } from '../services/api';
import { toast } from 'react-toastify';

import { useRouter } from 'next/navigation';




export default function Convenio() {
  const router = useRouter();

  const [nome, setNome] = useState('');
  const [email, setEmail] = useState('');
  const [cpf, setCpf] = useState('');
  const [telefone, setTelefone] = useState('');
  const [peso, setPeso] = useState(null);
  const [altura, setAltura] = useState(null);
  const [localidade, setLocalidade] = useState('');
  const [conv, setConv] = useState('');
  const [hosp, setHosp] = useState('');
  const [nomeHosp, setNomeHosp] = useState('');
  const [idade, setIdade] = useState(null);
  const [pessoa, setPessoa] = useState('');
  
  const [loading, setLoading] = useState(false);

  async function handleFormConvRegister(event: React.FormEvent) {
    event.preventDefault();
    setLoading(true);
    try{
      
      const apiClient = setupAPICLient();
      
      await apiClient.post('/formconv', {
        nome: nome,
        email: email, 
        cpf: cpf,
        telefone: telefone,
        peso: peso,
        altura: altura,
        localidade: localidade,
        convenio: conv,
        hospital_pref: hosp,
        nome_hospital: nomeHosp,
        idade: idade,
        pessoa: pessoa,
        
      });
      
      toast.success('Formulário enviado com sucesso');
      setNome('');
      setEmail('');
      setCpf('');
      setTelefone('');
      setPeso('');
      setAltura('');
      setLocalidade('');
      setConv(null);
      setHosp(null);
      setNomeHosp('');
      setIdade('');
      setPessoa(null);

      setLoading(false);
      router.push('/');
      
    }catch(err){
      setLoading(false);
      console.log(err);
      
      toast.error('Erro ao enviar formulário, tente novamente mais tarde');
      
    }
  }
  
  return (
        <>
        <title>Seg Portfolio - Convênio Médico</title>
        

        <div className={styles.containerForm}>
        
        <Image src={logoImg} alt="Logo" id={styles.logoA}/>
        
        <div id={styles.texto}>
          <h2>Solicite a cotação do seu convênio</h2>
          <p>Preencha os dados a seguir e receba uma simulação.</p>
        </div>
          
            <form onSubmit={handleFormConvRegister}>
              <div className={styles.formbase1}>
                <Input 
                type='text' 
                placeholder='Nome'
                value={nome}
                onChange={(event) => setNome(event.target.value)}
                required
                />
                <Input 
                type='email' 
                placeholder='Email'
                value={email}
                onChange={(event) => setEmail(event.target.value)}
                required
                />
              </div>
              <div className={styles.formbase1}>
                <Input 
                type='text' 
                placeholder='CPF/CNPJ'
                value={cpf}
                onChange={(event) => setCpf(event.target.value)}
                required
                />
                <Input 
                type='tel' 
                placeholder='DDD + Telefone'
                value={telefone}
                onChange={(event) => setTelefone(event.target.value)}
                required
                />
              </div>
               
              <div className={styles.formbase1}>
                <Input 
                type='number' 
                placeholder='Peso'
                value={peso}
                onChange={(event) => setPeso(Number(event.target.value))}
                required
                />
                <Input 
                type='number' 
                placeholder='Altura'
                value={altura}
                onChange={(event) => setAltura(Number(event.target.value))}
                required
                />
              </div>
              
              
              <div className={styles.formbase2}>
                <Input 
                type='text' 
                placeholder='Localidade'
                value={localidade}
                onChange={(event) => setLocalidade(event.target.value)}
                required
                />
                <label id={styles.texto}><h4>Possui Convênio?</h4></label>
              </div>
              
              
              <div id={styles.radio}>
                <div id={styles.radio}>
                  <Radio 
                  name="res_pessoa_conv" id="res_pessoa_conv_s" 
                  value="Sim" 
                  onChange={(event) => setConv(event.target.value)}
                  checked={conv === 'Sim'}
                  required/>
                  <label>Sim</label>
                </div>
                <div id={styles.radio}>
                  <Radio 
                  name="res_pessoa_conv" id="res_pessoa_conv_n" 
                  value="Não" 
                  onChange={(event) => setConv(event.target.value)}
                  checked={conv === 'Não'}
                  required/>
                  <label>Não</label>
                </div>
              </div>

              <div className={styles.formbase2}>
                
                <label id={styles.texto}><h4>Possui Hospital de Preferência?</h4></label>
              </div>

              <div id={styles.radio}>
                <div id={styles.radio}>
                  <Radio 
                  name="res_pessoa_hosp" id="res_pessoa_hosp_s" 
                  value="Sim" 
                  onChange={(event) => setHosp(event.target.value)}
                  checked={hosp === 'Sim'}
                  required/>
                  <label>Sim</label>
                </div>
                <div id={styles.radio}>
                  <Radio 
                  name="res_pessoa_hosp" id="res_pessoa_hosp_n" 
                  value="Não" 
                  onChange={(event) => setHosp(event.target.value)}
                  checked={hosp === 'Não'}
                  required/>
                  <label>Não</label>
                </div>
              </div>

              <div className={styles.formbase2}>
                <Input 
                type= "text" 
                placeholder='Nome do hospital'
                value={nomeHosp}
                onChange={(event) => setNomeHosp(event.target.value)}
                
                />
              </div>

              <Input 
              type='number' 
              placeholder='Sua idade'
              value={idade}
              onChange={(event) => setIdade(Number(event.target.value))}
              required
              />
              <label id={styles.texto}><h4>Cotação para pessoa:</h4></label>

              <div id={styles.radio}>
                <div id={styles.radio}>
                  <Radio 
                  name="res_pessoa" id="res_pessoa_fisica" 
                  value="Física" 
                  onChange={(event) => setPessoa(event.target.value)}
                  checked={pessoa === 'Física'}
                  required/>
                  <label>Física</label>
                </div>
                <div id={styles.radio}>
                  <Radio 
                  name="res_pessoa" id="res_pessoa_juridica" value="Jurídica" 
                  onChange={(event) => setPessoa(event.target.value)}
                  checked={pessoa === 'Jurídica'}
                  required/>
                  <label>Jurídica</label>
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