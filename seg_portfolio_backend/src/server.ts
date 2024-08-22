//construção da api
import express,  { Request, Response, NextFunction } from 'express' 
import 'express-async-errors'
import cors from 'cors'


import {router} from './routes'
const app = express();

app.use(express.json())
//permite que qualqueri ip faça a requisição da api
app.use(cors())

app.use(router)

app.use((err: Error, req: Request, res: Response, next: NextFunction)=>{
    if(err instanceof Error){
        //se for uma instancia do tipo error
        return res.status(400).json({
            error: err.message
        })
    }

    return res.status(500).json({
        status: 'error',
        message: 'internal server error.'
    })

})

app.listen(
   //A porta será definida pelo site de hospedagem ou a porta será 3333 
   
    process.env.PORT ? Number(process.env.PORT) : 3333, ()=>{ console.log('Servidor Online!')})

