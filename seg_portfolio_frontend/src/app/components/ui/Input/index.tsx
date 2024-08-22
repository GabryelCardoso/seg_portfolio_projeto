import { InputHTMLAttributes, TextareaHTMLAttributes} from 'react'
import styles from "./styles.module.scss"

//Cria a interface para tipar as propriedades passadas para o input
interface InputProps extends InputHTMLAttributes<HTMLInputElement>{}

//Cria a interface para tipar as propriedades passadas para o textarea
interface TextAreaProps extends TextareaHTMLAttributes<HTMLTextAreaElement>{}

export function Input({...rest}: InputProps){
    //permite passar parâmetros para o input
return(
    <input className={styles.input} {...rest}/>
)
}

export function Radio({...rest}: InputProps){
    //permite passar parâmetros para o input
return(
    <input className={styles.radio} type='radio'{...rest}/>
)
}

export function TextArea({...rest}: TextAreaProps){
    return(
        <textarea className={styles.textarea} {...rest}></textarea>
    )
}