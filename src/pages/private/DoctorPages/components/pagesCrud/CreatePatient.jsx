import { Link , useNavigate} from 'react-router-dom'
import { useEffect, useState } from 'react';
import clienteAxios from '../../../../../config/axios'
import toast, { Toaster } from 'react-hot-toast'

const CreatePatient = ({register}) => {
    const navigate = useNavigate();
    console.log(register)
    const [patient_name,setpatient_name] = useState('');
    const [patient_lastname,setpatient_lastname] = useState('');
    const [n_identification,setn_identification] = useState('');
    const [gender,setgender] = useState('');
    const [age,setage] = useState('');
    const [date,setdate] = useState('');
    const [address,setaddress] = useState('');
    const [Entity,setentity] = useState('');
    const [phone,setphone] = useState('');
    const [patologia,setPatologia] = useState({});

    const [patologias,setPatologias] = useState([]);


    //state selects
    const [diseasesSelect, setDiseasesSlect] = useState([]);
    const [entidades, setEntidades] = useState([]);
    
    const [patient,setPatient] = useState({});

   useEffect(()=>{
    try {
        const handlerGetData = async()=>{
            const url = window.location.pathname;
            if(url === '/doctor/createPatient'){
                const peticiones = [clienteAxios('/entidad'),clienteAxios('/diseases')]
                const data =  await Promise.all(peticiones)
              
                setDiseasesSlect(data[1].data);
                setEntidades(data[0].data.entidades)
               
                
            }
         }
         handlerGetData()
    } catch (error) {
        toast.error(error.message);
    }
 
   },[])

    const handlerSubmit = async(e) => {
        e.preventDefault();
        const messageALert = document.querySelector('#errorMessage');
        
         
        if([patient_name,patient_lastname,n_identification,gender,age,date,address].includes('')){
            messageALert.classList.remove('hidden')
            messageALert.classList.add('flex')
            setTimeout(()=>{
                messageALert.classList.remove('flex')
                messageALert.classList.add('hidden')
            },2700)
            return;
        }

        const newPatient = {
            patient_name,
            patient_lastname,
            n_identification,
            gender,
            date,
            address,
            Entity,
            phone,
            disease_ids: patologias
        }

        console.log(newPatient);

        try {
            const response = await clienteAxios.post('/patients', newPatient)
           if(response.data){
            toast.success("Paciente anexado correctamente")
            navigate('/doctor')
        
           }
        } catch (error) {
            toast.error(error.message)
        }




    }
   
    const handlerPatologia = (e)=>{
        const p = e.target.value.split('-')
        const disease = {
            id : p[0],
            name: p[1]

        }
        if (!patologias.some(item => item.id === disease.id)) {
            setPatologias([...patologias, disease]);
          }
      
      
   
    }


  return (
    
        <section className="bg-slate-100 h-5/6 rounded-md w-3/4 shadow-2xl flex flex-col justify-evenly border">
               <Toaster
            position="top-right"
            reverseOrder={false}
          />
            <div className="  border-b-gray-300 border-b h-20 text-center mx-4  flex items-start">
                <h2 className=" mx-auto  text-teal-700 font-bold text-4xl">Registro de paciente</h2>
            </div>
            
            <form onSubmit={handlerSubmit} className =" overflow-y-scroll  ">

                <div id="errorMessage" className='mx-auto text-center text-white font-bold my-8 h-10 bg-red-600 w-1/2 rounded-xl  justify-center items-center hidden'>
                        <p>Todos los campos deben ser llenados</p>
                </div>
                {/* Seccion 1 */}
                <div className="flex justify-around flex-wrap">
                    <div className="flex flex-col">
                        <label className="mb-3 text-teal-600 font-semibold text-lg flex ">Nombre del paciente <i className="text-red-600 text-2xl">*</i></label>
                        <input type="text"  className="border border-gray-300 h-8 w-60 rounded-md pl-2" placeholder="ej: Manuel" value={patient_name} onChange={e => setpatient_name(e.target.value)}/>
                    </div>
                    <div className="flex flex-col">
                        <label className="mb-3 text-teal-600 font-semibold text-lg">Apellido del paciente <i className="text-red-600 text-2xl">*</i></label>
                        <input type="text"  className="border border-gray-300 h-8 w-60 rounded-md pl-2" placeholder="ej: Guillen" value={patient_lastname} onChange={e => setpatient_lastname(e.target.value)}/>
                    </div>
                    <div className="flex flex-col">
                        <label className="mb-3 text-teal-600 font-semibold text-lg" >Cedula del paciente <i className="text-red-600 text-2xl">*</i></label>
                        <input type="text"  className="border border-gray-300 h-8 w-60 rounded-md pl-2" placeholder="Ej: V-123456789" value={n_identification} onChange={e => setn_identification(e.target.value.toUpperCase())}/>
                    </div>
                </div>

                 {/* Seccion 2 */}
                 <div className="flex justify-around mt-10 flex-wrap">
                    <div className="flex flex-col">
                        <label className="mb-3 text-teal-600 font-semibold text-lg flex ">Sexo del paciente <i className="text-red-600 text-2xl">*</i></label>
                        <select className='w-60 h-8 bg-white rounded-lg border-gray-300 border outline-none' value={gender} onChange={ e=> setgender(e.target.value)}>
                            <option value="">Seleccione</option>
                            <option value="Masculino">Maculino</option>
                            <option value="Femenino">Femenino</option>
                        </select>
                    </div>
                    <div className="flex flex-col">
                        <label className="mb-3 text-teal-600 font-semibold text-lg">Edad del paciente <i className="text-red-600 text-2xl">*</i></label>
                        <input type="text"  className="border border-gray-300 h-8 w-60 rounded-md pl-2" placeholder="ej: 20" value={age} onChange={e=>setage(e.target.value)}/>
                    </div>
                    <div className="flex flex-col">
                        <label className="mb-3 text-teal-600 font-semibold text-lg" >Fecha de nacimiento <i className="text-red-600 text-2xl">*</i></label>
                        <input type="date"  className="border border-gray-300 h-8 w-60 rounded-md pl-2" placeholder="" value={date} onChange={e=>setdate(e.target.value)}/>
                    </div>
                </div>


                 {/* Seccion 3 */}
                 <div className="flex justify-around mt-10 flex-wrap ">
                    <div className="flex flex-col ">
                        <label className="mb-3 text-teal-600 font-semibold text-lg flex ">Direccion del paciente <i className="text-red-600 text-2xl">*</i></label>
                        <input type="text"  className="border border-gray-300 h-8 w-60 rounded-md pl-2" placeholder="ej: Calle arismedi" value={address} onChange={e=>setaddress(e.target.value)} />
                    </div>
                    <div className="flex flex-col ">
                    <label className="mb-3 text-teal-600 font-semibold text-lg flex ">Modulo de atención <i className="text-red-600 text-2xl">*</i></label>
                        <select className='w-60 h-8 bg-white rounded-lg border-gray-300 border outline-none' id="entidades" value={Entity} onChange={e=>setentity(e.target.value)}>
                        {entidades.map(entidad =>(
                                <option key={entidad.id} value={`${entidad.id}-${entidad.name}`}>{entidad.name}</option>
                              ))} 
                        </select>
                    </div>
                    <div className="flex flex-col">
                        <label className="mb-3 text-teal-600 font-semibold text-lg" > Telefono del paciente <i className="text-red-600 text-2xl">*</i></label>
                        <input type="text"  className="border border-gray-300 h-8 w-60 rounded-md pl-2" placeholder="Ej: 04243709647" value={phone} onChange={e=>setphone(e.target.value)}/>
                    </div>
                </div>


                 {/* Seccion 4 */}
                 <div className="flex justify-around mt-10 flex-wrap items-center mb-5" >
                        <div className=' flex flex-col '>
                        <label className="mb-3 text-teal-600 font-semibold text-lg" > Seleccione una patologia<i className="text-red-600 text-2xl">*</i></label>
                            <select name="" id="enfermedades" className='w-96 h-8 bg-white border rounded-lg' onChange={handlerPatologia}>
                              {diseasesSelect.map(diseases =>(
                                <option key={diseases.id} value={`${diseases.id}-${diseases.name}`}>{diseases.name}</option>
                              ))} 
                            </select>
                        </div>

                        <div className=' h-28 relative w-1/3' >
                            <h3 className='mb-3 text-teal-600 font-semibold text-lg'>Patologias</h3>
                            <div id="enfermedades" className='w-full bg-gray-200 border h-full overflow-y-scroll' >
                               <ul>
                               {patologias.map(disease => (
                                <div key={disease.id}>{disease.name}</div>
                                ))}
                               </ul>
                            </div>
                        </div>
                 </div>
                
             
                <div className="flex justify-center mt-14 flex-col items-center">
                    <button className="border px-28 py-2 rounded-lg bg-teal-400 text-white font-bold hover:bg-teal-500 transition-all">
                        Guardar
                    </button>

                    <div className='my-2 mx-10 text-teal-500 font-bold mt-4'>
                        <Link to="/doctor" >Retornar al buscador de pacientes</Link>
                    </div>
                </div>
                
            </form>
        </section>
  )
}

export default CreatePatient