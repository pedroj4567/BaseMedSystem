import {Link, useNavigate, Navigate} from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUser } from '@fortawesome/free-solid-svg-icons'
import toast, { Toaster } from 'react-hot-toast'
import {  useState } from 'react'
import useAuth from '../../hooks/useAuth'
import clienteAxios from "../../config/axios"

const Login = () => {
  const navigate = useNavigate();
  const {auth, setAuth} = useAuth();
  
  //Estado de los campos
  const [email,setEmail] = useState('');
  const [password,setPassword] = useState('');
  //validation function 
  const handlerSubmit = async (e)=>{
    e.preventDefault();

    const inputs = document.querySelectorAll('#formulario input');
    const alerts = document.querySelectorAll('#formulario span');
    // const formulario = document.querySelectorAll('#formulario'); 
  
    if(email == "" || password ==""){
      //add style to the input
      inputs.forEach(input =>{
        input.style.border = "1px solid red";
      })
      //show the alert 
      alerts.forEach( alert => {
        alert.classList.remove("hidden")
      })
    
      return;
    }

    inputs.forEach(input =>{
      input.style.border = "";
    })
    alerts.forEach( alert => {
      alert.classList.add("hidden")
    })

    try {
      const body = {
        email,
        password
      }
      const { data } = await clienteAxios.post('auth/login', body);

      if(!data.token) return;
      localStorage.setItem('token',data.token);
      setAuth(data);
       
      if(!data.isAdmin){
        navigate('/doctor');
        return;
      }

      navigate('/admin');
     

    } catch (error) {
      toast.error(error.response.data.msg);
    }

  }




  return (
    <>

      
          <Toaster
            position="top-right"
            reverseOrder={false}
          />
          <div className="rounded-xl  h-[600px] bg-white sm:h-[600px] border relative shadow-xl w-10/12 mx-2 md:w-2/3 lg:w-[500px]">
              <div className=" w-32 rounded-full h-32 bg-[#27A09E] absolute right-0 left-0 mx-auto -top-12  flex justify-center items-center">
              <FontAwesomeIcon icon={faUser} 
              style={{
                color: "#ffffff",
                fontSize:"75px",
                }}/>
              </div>
            {/* header */}
              <div className="text-center mt-24">
                  <h1 className=" text-2xl text-center sm:text-3xl font-semibold">Bienvenido a <span className="font-bold text-teal-500 text-4">BaseMed</span></h1>
              </div>
              {/* body */}
              <form 
              id="formulario"
              className="flex flex-col sm:mx-10 h-4/6  mt-6 justify-evenly px-3"
              onSubmit={handlerSubmit}
              >
                  <div className="flex flex-col">
                      <label className='font-bold text-slate-600 text-lg'>Ingrese su correo</label>
                      <input 
                        autoComplete='true'
                        type="email"
                        placeholder="ej: ejemplo@correo.com"
                        className='mt-3 p-2 pl-2 font-thin rounded-lg outline-none border border-teal-500 focus:border-2 focus:border-teal-600'
                        value={email}
                        onChange={e => setEmail(e.target.value)}
                      />
                      <span className='text-sm text-red-500 mt-1 hidden transition-all'>Debe ingresar un correo</span>
                  </div>

                  <div className="flex flex-col">
                    <label className='font-bold text-slate-600 text-lg '>Ingrese su contraseña</label>
                    <input 
                      type="password"
                      placeholder="ej: mipassword123"
                      className=' mt-3 py-2 pl-2 font-thin rounded-lg outline-none border border-teal-500 focus:border-2 focus:border-teal-600'
                      value={password}
                      onChange={e => setPassword(e.target.value)}
                     />
                     <span className='text-sm text-red-500 mt-1 hidden transition-all'>Debe ingresar una contraseña</span>
                  </div>
                    <Link to='/olvidePassword' className='text-teal-500 font-semibold hover:text-teal-400 transition-all'>¿Olvido su contraseña?</Link>
                    <button type="submit" value="Ingresar" className="cursor-pointer flex justify-center bg-[#27A09E] w-full mx-auto text-white capitalize p-2 rounded-xl hover:bg-teal-600 text-lg font-bold  transition-all ">
                        Ingresar
                    </button>
                    
              </form>
              
             
          </div>


    </>
  )
}

export default Login
