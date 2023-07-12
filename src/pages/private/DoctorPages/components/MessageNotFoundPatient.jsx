import { Link } from 'react-router-dom'
const MessageNotFoundPatient = ({notFound}) => {
  return (
   <>
    <div className={` ${notFound ? "block": "hidden"} mt-4 flex flex-col w-1/2 items-center h-44 justify-center rounded-lg bg-gray-200 transition-all shadow-xl  `}>
        <h2 className=' text-teal-700 text-2xl font-extrabold'>Paciente no registrado en el sistema.</h2>
        <Link to='doctor/createPatient' className="px-12 py-1 mt-4 rounded-lg bg-teal-500 font-bold text-white text-md shadow-md hover:bg-teal-600 transition-all ">Registrar paciente </Link>
    </div>
   </>
  )
}

export default MessageNotFoundPatient