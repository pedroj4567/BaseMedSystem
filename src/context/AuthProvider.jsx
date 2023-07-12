import { useState,useEffect,createContext } from 'react'

import clienteAxios from '../config/axios';
//el create permite acceder al estate de manera global 

//context
const AuthContext = createContext();
// eslint-disable-next-line react/prop-types
const AuthProvider = ({children}) => {
    
    const [auth,setAuth] = useState({});
    const [cargando,setCargando] = useState(true);

    //autenticacion
    useEffect(()=>{
        //creamos una funcion par autenticar 
        const authUser = async ()=>{
            const token = localStorage.getItem('token');
            //si no tiene token, no deja enviar la peticion
            if(!token) {
                setCargando(false);
                return;
            }
            const config = {
                headers: {
                    'Content-Type' : "application/json",
                    'authorization': `Bearer ${token}`
                }
            }
            //peticion
            try {
                const { data } = await clienteAxios('auth/profile',config);
               
                if(data) setAuth(data);
            } catch (error) {
                console.error(error.response.data.msg)
                setAuth({});
            }

            setCargando(false);
        }
        authUser();
    },[])

    const outSession = () =>{
        localStorage.removeItem('token');
        setAuth({});
    }

    
    
    return(
        // Se usa el provider 
        <AuthContext.Provider
            value={{
                auth,
                setAuth,
                cargando,
                outSession,
            }}
        >
            {children}

        </AuthContext.Provider>
    )
}

//exportamos el provider por individual, debido a que pueden ser diferentes acciones para cada provider 
export{
    AuthProvider
}

//exportamos el estado global a los componenetes
export default AuthContext;