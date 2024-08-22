
import styles from './styles.module.scss'

import { FiX } from 'react-icons/fi'


import { FormSegVProps } from '@/app/dashboard/seguros-veiculos/page';

import * as React from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import Divider from '@mui/material/Divider';


interface ModalFormProps{
 isOpen: boolean;
 onRequestClose: () => void;
 form: FormSegVProps;
}

const style = {
    position: 'absolute' as 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: '80%',
    maxWidth: '500px',
    bgcolor: '#f9bcb6',
    border: '0',
    boxShadow: 5,
    p: 2,
    borderRadius: '8px',
    textAlign:'center',
    
  };


  

  export default function BasicModalSeguroV({ isOpen, onRequestClose ,form}: ModalFormProps) {
  const [open, setOpen] = React.useState(null);
  
  

  return (
    <div>
      
      <Modal
        open={isOpen}
        onClose={onRequestClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <Typography id="modal-modal-title" variant="h5" component="h2" sx={{textAlign: 'center', fontWeight: 'bold', pb:1,'@media (max-width: 425px)': {
              fontSize: '18px',
            }, }}>
            Informações do formulário
          </Typography>
          <Typography id="modal-modal-description" sx={{
            backgroundColor: '#D8C2BA',
            '@media (max-width: 425px)': {
              fontSize: '14px',
            },
          }}>
            Nome: {form.nome}
          </Typography>
         
          
          <Typography id="modal-modal-description"sx={{
            
            '@media (max-width: 425px)': {
              fontSize: '14px',
            },
          }}>
            Email: {form.email}
          </Typography>

          
          
          <Typography id="modal-modal-description"sx={{
            backgroundColor: '#D8C2BA',
            '@media (max-width: 425px)': {
              fontSize: '14px',
            },
          }}>
            CPF: {form.cpf}
          </Typography>   
          
         

          <Typography id="modal-modal-description"sx={{
            
            '@media (max-width: 425px)': {
              fontSize: '14px',
            },
          }}>
            Telefone: {form.telefone}
          </Typography>

         

          <Typography id="modal-modal-description"sx={{
            backgroundColor: '#D8C2BA',
            '@media (max-width: 425px)': {
              fontSize: '14px',
            },
          }}>
            Modelo: {form.modelo_v}
          </Typography>

          

          <Typography id="modal-modal-description"sx={{
            
            '@media (max-width: 425px)': {
              fontSize: '14px',
            },
          }}>
            Ano: {form.ano_v}
          </Typography>

         

          <Typography id="modal-modal-description"sx={{
            backgroundColor: '#D8C2BA',
            '@media (max-width: 425px)': {
              fontSize: '14px',
            },
          }}>
            Fabricante: {form.fabricante_v}
          </Typography>

          

          <Typography id="modal-modal-description"sx={{
            
            '@media (max-width: 425px)': {
              fontSize: '14px',
            },
          }}>
            Situação: {form.situacao_v}
          </Typography>
  
        </Box>
      </Modal>
    </div>
  );
}

