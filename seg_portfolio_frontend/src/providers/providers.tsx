'use client';

import { AuthProvider } from "@/app/contexts/AuthContext"

export const Providers = ({children}: {children: React.ReactNode}) =>{
    
    return(<><AuthProvider>{children}</AuthProvider></>) 
    
};