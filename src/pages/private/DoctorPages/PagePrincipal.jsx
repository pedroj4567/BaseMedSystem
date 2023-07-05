import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {formarter} from '../../../helpers/helpers.js'
import { faArrowRightFromBracket, faMagnifyingGlass,faHospitalUser} from "@fortawesome/free-solid-svg-icons";
import DataContainer from "./components/DataContainer.jsx";
import { useState } from "react";
import clienteAxios from "../../../config/axios.jsx";
import useAuth from "../../../hooks/useAuth.jsx";
import toast, { Toaster } from 'react-hot-toast'
import ALertMessage from "./components/ALertMessage.jsx";


const PagePrincipal = () => {
    const { auth, outSession} = useAuth();
    //Nombre estatico
   
    const regex = /[^0-9]/g;
    //states 
    const [numero,setNumero] = useState('');
    const [prefijo, setPrefijo] = useState('V-');
    const [patient,setPatient] = useState({});
    const [visible,setVisible] = useState(false);
    const [error,setError] = useState({});
    //validaciones a los campos 
    const handlerSubmit = async (e)=>{
        e.preventDefault();
        
        //validamos espacios vacios
        if(numero == ""  || !numero.trim()){
           setError({
            error: true,
            msg : "Debe ingresar un cedula"
           })
            return;
        }

        //validamos que solo pasen numeros y que estos tengan la longitud de la cedula venezolana
        if(regex.test(numero) || numero.length > 8){
            setError({
                error: true,
                msg : "Debe ingresar un cedula valida"
               })
            return;
        }

        
        //cedula
        const cedula = `${prefijo}${numero}`;
       
        try {
            const {data} = await clienteAxios(`patients/${cedula}`);
            console.log(data)
            //establecemos la data
            if(data.id){
                setPatient(data);
                setVisible(true);
                return;
            }

        
           
            
        } catch (error) {
            toast.error(error)
        }
    }

  return (
        <>
         <Toaster
            position="top-right"
            reverseOrder={false}
          />
            <section className="flex justify-center items-center flex-col h-full w-full mx-5  ">
                {/* Header */}
                <div className="px-8  right-20 absolute top-5 ">
                    <div className="">
                        <button 
                        className=""
                        onClick={outSession}
                        >
                            <FontAwesomeIcon icon={faArrowRightFromBracket} size="2xl" className="text-4xl text-teal-500 shadow-lg  transition-all bg-white p-3 rounded-full"/>
                            
                        </button>
                    </div>
                </div>
                {/* Body */}
                <div className=" flex flex-col justify-center items-center w-full h-full ">
                    <div className="mb-5 w-full min-w-[209px] lg:w-[70%] md:text-3xl ">
                        <p className=" 
                             font-bold text-2xl
                             text-center sm:text-left">
                            Bienvenido Dr/Dra. <span className="text-white font-bold text-2xl capitalize">{auth.id ? `${auth.name} ${auth.lastname}` : ""}</span> 
                            <FontAwesomeIcon icon={faHospitalUser} color="#FFFFFF" className="text-[30px] hover:bg-teal-500 hover:text-white  sm:mx-2 transition-all ease-out rounded-xl" />
                        </p> 
                        
                    </div>
                    <div className=" text-white font-extrabold text-lg text-center sm:text-left sm:text-2xl mb-3 lg:w-[70%] w-full ">
                        <p>Ingrese la cedula del paciente</p>
                    </div>
                        <form 
                            className="w-full lg:w-[70%] min-w-[209px]"
                            onSubmit={handlerSubmit}
                        >
                            <div className="flex relative">
                                <select name="" id="" 
                                    selected 
                                    onChange={e =>setPrefijo(e.target.value)}
                                    className="h-16 w-20 cursor-pointer transition-all hover:bg-teal-300 text-center font-bold rounded-l-xl '
                                     outline-none"
                                    >
                                    <option value="V-" className="text-teal-500 font-bold my-2">V-</option>
                                    <option value="E-" className="">E-</option>
                                </select>
                                <input type="text" 
                                    placeholder="Ej:12345678"
                                    value={numero}
                                    onChange={e => setNumero(formarter(e.target.value))}
                                    className="w-full min-w-[200px]  rounded-r-xl px-3 h-16 outline-none font-semibold text-teal-500 text-[14px] md:text-xl"
                                />
                                <button 
                                    type="submit"
                                    className=" bg-teal-500 rounded-full p-0  absolute top-2 right-4 h-12 w-12 hover:bg-teal-700 transition-all  "
                                 >
                                    <FontAwesomeIcon icon={faMagnifyingGlass} className=" text-white rounded-full text-3xl text-center" />
                                </button>
                            </div>

                            <ALertMessage
                                error={error}
                            />
                        </form>

                            <DataContainer
                            patient={patient}
                            visible={visible}/>
                        
                        
                        
                </div>
            </section>
        </>
  )
}

export default PagePrincipal