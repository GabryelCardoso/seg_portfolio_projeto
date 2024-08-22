'use client'
import { Header } from "@/app/components/Header"
import styles from "../styles.module.scss"
import { FiRefreshCcw } from "react-icons/fi";
import { useEffect, useState } from "react";

import { AuthContext } from "../../contexts/AuthContext";

import { setupAPICLient } from "../../services/api";

import { useRouter } from "next/navigation";

import BasicModalSegVida from "@/app/components/Modals/ModalSegVida";
import { usuarioProps } from "../page";
import { FaTrash } from "react-icons/fa";
import { toast } from "react-toastify";

export type FormSegVidaProps = {
    id: string;
    nome: string;
    email: string
    cpf: string;
    telefone: string;
    profissao: string;
    fumante: string; 
    peso: number;
    altura: number;
    renda: number
}



export default function Seg_de_Vida(){
        const router = useRouter()
        
        const [usuario, setUsuario] = useState<usuarioProps | null>(null);
        
        const [data, setData] = useState(null)
        
        const [buttonVisible, setButtonVisible] = useState(false)
        
        const fetchData = async () => {
            const apiClient = setupAPICLient(AuthContext);
            try {
                const response = await apiClient.get('/formsseg');
                console.log(response.data.formseg);
                setData(response.data.formseg);
            } catch (error) {
                console.log(error);
            }
            try{
                const response = await apiClient.get('/usuarioinfo');
                console.log(response.data.user);
                setUsuario(response.data.user);
                if(response.data.user.adm){
                    setButtonVisible(true)}
                }catch (error) {
                    console.error(error);
                }

        }

        useEffect(()=>{
            fetchData()
        }, [])

        const [modalItem, setModalItem] = useState<FormSegVidaProps>()
        const [modalVisible, setModalVisible] = useState(false)


        function handleCloseModal(){
            setModalVisible(false)
        }

       async function handleOpenModalView(id:string){
        
        let dadosform = data.find(item => item.id === id)
        setModalItem(dadosform)
        setModalVisible(true)
        
        
        console.log(modalItem)
        
       }
       
       const deleteform = async (id: string) => {
        const apiClient = setupAPICLient(AuthContext);
        
        const confirmDelete = window.confirm('Tem certeza que deseja deletar este formulario?');
        
        if(confirmDelete) {
          try{
            await apiClient.delete('/deleteformseg',
              {
                params: {
                  form_id: id
                }
              }
            )
            toast.success('Formulário deletado com sucesso!')
            console.log('Formulário deletado com sucesso!')
            fetchData()
          }catch(error){
            toast.error('Erro ao deletar Formulário!')
            console.log(error)
          }
        
        }
        }

        return(
            <>
            <title>Seg Portfolio - Dashboard</title>
           <div className={styles.containerGeral}>
           <Header/>
           {usuario &&(
           <main className={styles.container}>
            <div className={styles.containerHeader}>
            <h1>Seguros de vida</h1>
            <button onClick={fetchData}><FiRefreshCcw size={25} color="#F65E5D"/></button>
            </div>
            <span>Conta logada: {usuario.user}</span>
            {data && data.length == 0 && (
            <span>Nenhum formulário desta categoria foi encontrado...</span>
           )}
            {data &&(

            <article className={styles.listOreders}>
            {[...data].sort((a, b) => new Date(b.created_at).getTime() - new Date(a.created_at).getTime()).map((item) => (
                
                    <section key={item.id}className={styles.orderItem}>
                    <button
                    onClick={ () => handleOpenModalView(item.id)}>
                        <div className={styles.tag}></div>
                        <div className={styles.orderSpans}>
                            <span>{item.nome}</span>
                            <span id={styles.rightSpan}>{item.created_at.slice(0, -5)}</span>
                        </div>
                    </button>
                    { buttonVisible && (<div id={styles.deletebutton}>
                        <button onClick={()=>{
                            deleteform(item.id)
                        }}>
                            <FaTrash size={15}/>
                        </button>
                    </div>)}
                    </section>
                
            ))}
            

            </article>
            )}
           
            
           </main>
                )}
           {modalVisible &&(
            <BasicModalSegVida
            isOpen={modalVisible}
            onRequestClose={handleCloseModal}
            form={modalItem}
            />
           )}
           </div>
          
           </>
)
}