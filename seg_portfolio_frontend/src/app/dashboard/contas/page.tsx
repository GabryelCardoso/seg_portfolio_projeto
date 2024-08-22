'use client'
import styles from "./styles.module.scss"
import { Header } from "../../components/Header"
import { useEffect, useState } from "react";
import { setupAPICLient } from "../../services/api";
import { AuthContext } from "../../contexts/AuthContext";
import { FaTrash } from "react-icons/fa";
import { FiRefreshCcw } from "react-icons/fi";
import { useRouter } from "next/navigation";
import { api } from "@/app/services/apiClient";
import { toast } from "react-toastify";
import { usuarioProps } from "../page";

interface propsConta {
        nome: string;
        adm: boolean;
        data: Date;
}


export default function Contas(){
        const router = useRouter()
        
        const [data, setData] = useState(null)
        const [usuario, setUsuario] = useState<usuarioProps | null>(null);
        
        const fetchData = async () => {
            const apiClient = setupAPICLient(AuthContext);
            try {
                const response = await apiClient.get('/mostrarusuarios');
                console.log(response.data);
                setData(response.data);
            } catch (error) {
                console.log(error);
            }
            try{
              const response = await apiClient.get('/usuarioinfo');
              console.log(response.data.user);
              setUsuario(response.data.user);
              
              }catch (error) {
                  console.error(error);
              }
        };
            
        useEffect(()=>{
            fetchData()
        }, [])
            
        
        const deleteUser = async (user_id: string) => {
          const apiClient = setupAPICLient(AuthContext);
          
          const confirmDelete = window.confirm('Tem certeza que deseja deletar este usuário?');
          
          if(confirmDelete) {
            try{
              await apiClient.delete('/deletarusuario',
                {
                  params: {
                    user_id: user_id
                  }
                }
              )
              toast.success('Usuário deletado com sucesso!')
              console.log('Usuário deletado com sucesso!')
              fetchData()
            }catch(error){
              toast.error('Erro ao deletar usuário!')
              console.log(error)
            }
          
          }
          }
          

return(
    <>
    <title>Seg Portfolio - Contas</title>
    <div>
    <Header/>
    {usuario &&(
    <main className={styles.containerConta}>
     <div className={styles.containerHeaderConta}>
     
         <div id={styles.cabecalho}>
             <h1>Contas</h1>
             <button onClick={fetchData}><FiRefreshCcw size={25} color="#F65E5D"/></button>
         </div>
         <span>Conta logada: {usuario.user}</span>
         <div id={styles.addbotao}>
            <button onClick={() => {router.push('/registro-usuario')}}>Adicionar Conta</button>
         </div>
         
     </div>
     
     {data && [...data].sort((a,b) => new Date(b.created_at).getTime() - new Date(a.created_at).getTime()).map((user) => (
    <article key={user.id} className={styles.contas}>
      <section className={styles.conta}>
        <div className={styles.tag}></div>
        
          <div className={styles.infos}>
              <span>Nome: {user.user}</span>
              <span>Administrador: {user.adm ? 'Sim' : 'Não'}</span>
              <span>Criada em: {user.created_at.slice(0, -5)}</span>
              <button onClick={() => {deleteUser(user.id)}}
              disabled={user.id === usuario.id || usuario.adm === false}>
              <FaTrash />
              </button>
              
          </div>
        
      </section>
    </article>
  ))}
    </main>
    )}
    </div>

   
    
     </>
)

}