import { Link } from "react-router-dom"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faUser } from "@fortawesome/free-solid-svg-icons"
import useAuth from "../../hooks/useAuth"
const ForgotPassword = () => {
  const {auth} = useAuth();
  console.log(auth)
  return (
        <>
          <div className="rounded-2xl max-w-2xl h-2/8 p-4 pb-8 md:w-screen md:mx-20  bg-white border shadow-xl relative">
              <div className=" w-32 rounded-full h-32 bg-teal-500 absolute right-0 left-0 mx-auto -top-12  flex justify-center items-center">
              <FontAwesomeIcon icon={faUser} 
              style={{
                color: "#ffffff",
                fontSize:"75px",
                }}/>
              </div>
            {/* header */}
              <div className="text-center mt-24">
                  <h1 className="text-3xl font-semibold">Recuperar  <span className="font-bold text-teal-500 text-4">contraseña</span></h1>
              </div>
              {/* body */}
              <div className=" mx-12 text-lg mt-5 ">
                  <p className="indent-1.5">Se enviará un email a su <span className="text-teal-500 font-bold">correo</span>, indicando los pasos a seguir para recuperar su contraseña.</p>
              </div>
              <form className="flex flex-col mx-10 h-2/3 mt-4 p-2">
                  <div className="flex flex-col text-center">
                      <label className='font-bold text-slate-600 text-lg'>Ingrese el correo asociado a su cuenta</label>
                      <input 
                        type="email"
                        placeholder="ej: ejemplo@correo.com"
                        className='mt-5 py-3.5 pl-2 font-thin rounded-lg outline-none border border-teal-500 focus:border-2 focus:border-teal-600'
                      />
                  </div>

                   <div className="mt-5">
                      <Link to='/' className='text-teal-500 font-semibold  hover:text-teal-400 transition-all '>¿Recordó su contraseña? Iniciar Sesión</Link>
                      <input type="submit" value="Ingresar" className="cursor-pointer mt-5 bg-teal-500 w-full  text-white capitalize p-2.5 rounded-xl hover:bg-teal-600 text-lg font-bold  transition-all " />
                   </div>
              </form>
          </div>
        </>
  )
}

export default ForgotPassword