import { useContext } from 'react'
import AuthContext from '../context/AuthProvider'

//con el useContext -> llamamos el state global o el context creado 
// con el authCONtext creamos un state unico

const useAuth = () =>{
    return useContext(AuthContext);
}

export  default useAuth;