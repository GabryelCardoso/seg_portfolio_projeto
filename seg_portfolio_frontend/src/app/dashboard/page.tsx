'use client'


import { Header } from "../components/Header";

import styles from "./styles.module.scss"
import { FiRefreshCcw } from "react-icons/fi";
import { useEffect, useState } from "react";

import { AuthContext } from "../contexts/AuthContext";

import { setupAPICLient } from "../services/api";

import { useRouter } from "next/navigation";

export type usuarioProps = {
    id: string;
    user: string;
    adm: boolean
    
}
export default function Dashboard(){
    const router = useRouter()
    const [data, setData] = useState<usuarioProps | null>(null);
    const fetchData = async () => {
        const apiClient = setupAPICLient(AuthContext);
        try {
            const response = await apiClient.get('/usuarioinfo');
            console.log(response.data.user);
            setData(response.data.user);
        } catch (error) {
            console.error(error);
        }
    };
    useEffect(() => {
        fetchData();  
    }, []);
    
    return(
        <>
       <title>Seg Portfolio - Dashboard</title>
       <div className={styles.containerGeral}>
       <Header/>
      {data &&(


      
       <main className={styles.container}>
        <div className={styles.containerHeader}>
        <h1>Solicitações de seguros</h1>
        </div>
        <span>Conta logada: {data.user}</span>
        <article className={styles.listOreders}>
                <section className={styles.orderItem}>
                <button onClick={()=> router.push('/dashboard/consorcios')}>
                <div className={styles.tag}></div>
                <span>Consórcio</span>
                </button>  
                </section>
            
                <section className={styles.orderItem}>
                <button onClick={()=> router.push('/dashboard/convenios')}>
                <div className={styles.tag}></div>
                <span>Convênio Médico</span>
                </button>  
                </section>

                <section className={styles.orderItem}>
                <button onClick={()=> router.push('/dashboard/seguros-de-vida')}>
                <div className={styles.tag}></div>
                <span>Seguro de Vida</span>
                </button>  
                </section>

                <section className={styles.orderItem}>
                <button onClick={()=> router.push('/dashboard/seguros-veiculos')}>
                <div className={styles.tag}></div>
                <span>Seguro de Veículos</span>
                </button>  
                </section>

        </article>

        <article className={styles.listOreders}>

        </article>
        
       </main>
        )}
       </div>
      
       
        </>
    )
}


