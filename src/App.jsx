import { useState } from "react";
import axios from 'axios';




export const App = () => {

    //PETICION 
    




    // HOOK 

    const [emailpassword, setEmailAndPassword]=useState({
        email:"",
        password:"",
    });
    
    // FUNCIONES DE ACTUALIZACION

    const sendemail= (event)=>{

        setEmailAndPassword({...emailpassword,email:event.target.value});
        
    };

    const sendpassword=(event)=>{
        setEmailAndPassword({...emailpassword, password: event.target.value})
    };

   const submit=async(sendemail,sendpassword)=>{
    
        const resp= await axios.post('https://opembpo.emeal.nttdata.com/pre/validar_usuario',{
      
        usuario: sendpassword,
        password:sendemail})};
        




        




  return (
    <>
        <input 
            
            type="email"
            placeholder="correo electronico"
            value={emailpassword.email}
            onChange={sendemail}
        />

        <input
            type="password"
            placeholder="contraseña"
            value={emailpassword.password}
            onChange={sendpassword}
        />

        <button placeholder="enviar" onClick={submit}> enviar </button>

        
    </>
    )
}
