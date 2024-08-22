'use client'
import { useContext } from 'react'
import styles from './style.module.scss'
import Link from 'next/link'

import { useRouter } from 'next/navigation'

import { FiLogOut } from 'react-icons/fi'

import { AuthContext } from '../../contexts/AuthContext'
import { destroyCookie } from 'nookies'
import { toast } from 'react-toastify'


export function Header(){
    
    
     const {signOut, user} = useContext(AuthContext)
     const router = useRouter()
     
    
    
    const handleClick = (e) =>{
        try{
            router.push('/dashboard')
            signOut()
            //destroyCookie(undefined, '@nextauth.token')
            router.push('/login-adm')
            
            

            
            
            
        }catch(err){
            console.log(err)
        }
       
        
        
    }
   
    return(
        
        <header className={styles.headerContainer}>
            <div className={styles.headerContent}>
            
                <Link href="/"><img src="/logo1.png" /></Link>        
            
            
            

            <nav className={styles.menuNav}>
                {user && user.adm && (<Link href="/dashboard/contas">
                <p>Contas</p>
                </Link>)}

                <Link href="/dashboard">
                <p>
                Dashboard
                </p>
                </Link>

                <button onClick={handleClick}>
                    <FiLogOut color='#fff' size={22}/>
                </button>
                
            </nav>
            </div>
        </header>
    )
}