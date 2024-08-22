'use client'
import { Header } from "@/app/components/Header"
import styles from "../styles.module.scss"
import { FiRefreshCcw } from "react-icons/fi";
import { useEffect, useState } from "react";

import { AuthContext } from "../../contexts/AuthContext";

import { setupAPICLient } from "../../services/api";

import { useRouter } from "next/navigation";

import BasicModalConv from "@/app/components/Modals/ModalConv";
import { usuarioProps } from "../page";
import { FaTrash } from "react-icons/fa";
import { toast } from "react-toastify";


export type FormConvProps = {
    id: string;
    nome: string;
    email: string
    cpf: string;
    telefone: string;
    peso: number;
    altura: number;
    localidade: string;
    convenio: string;
    hospital_pref: string;
    nome_hospital: string;
    idade: number;
    pessoa: string;
}
export default function Conv(){
        const router = useRouter()
    
        
        const [data, setData] = useState(null)
        const [usuario, setUsuario] = useState<usuarioProps | null>(null);
        const [buttonVisible, setButtonVisible] = useState(false)


        const fetchData = async () => {
            const apiClient = setupAPICLient(AuthContext);
            try {
                const response = await apiClient.get('/formsconv');
                console.log(response.data.formconv);
                setData(response.data.formconv);
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
        };


        useEffect(()=>{
            fetchData()
        }, [])

        const [modalItem, setModalItem] = useState<FormConvProps>()
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
                await apiClient.delete('/deleteformconv',
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
                toast.error('Erro ao deletar formulário!')
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
            <h1>Convenios</h1>
            <button onClick={fetchData}><FiRefreshCcw size={25} color="#F65E5D"/></button>
            </div>
            <span>Conta logada: {usuario.user}</span>
            {data && data.length == 0 && (
            <span>Nenhum formulário desta categoria foi encontrado...</span>
           )}
            {data &&(
            
            <article className={styles.listOreders}>
            {[...data].sort((a, b) => new Date(b.created_at).getTime() - new Date(a.created_at).getTime()).map((item)=> (
                
                    <section key={item.id} className={styles.orderItem}>
                    <button onClick={ () => handleOpenModalView(item.id)}>
                        <div className={styles.tag}></div>
                        <div className={styles.orderSpans}>
                            <span>{item.nome}</span>
                            <span id={styles.rightSpan}>{item.created_at.slice(0, -5)}</span>
                        </div>
                    </button>
                    {buttonVisible && (
                    <div id={styles.deletebutton}>
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
            <BasicModalConv
            isOpen={modalVisible}
            onRequestClose={handleCloseModal}
            form={modalItem}
            />
           )}
           </div>
          
           </>
)
}