import CardQuantity from "../../../layouts/components/CardQuantity"
import BarGraphic from "../../../layouts/components/chartjs/BarGraphic"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faHospitalUser,faUserDoctor,faHospital, faDisease } from "@fortawesome/free-solid-svg-icons"
import useAuth from "../../../hooks/useAuth"
const DashboardAdmin = () => {
  const { auth } = useAuth();
  let fecha = new Date();
  let dia = fecha.getDate().toString().padStart(2, '0');
  let mes = fecha.toLocaleString('default', { month: 'long' }); 
  let year = fecha.getFullYear().toString();
  let fechaFormateada = `${mes}-${dia}-${year}`;
 
  return (
   
    <section id='adminPanel' className="w-full bg-slate-200 overflow-y-auto  grid-rows-4 items-center ">
        {/* Header of de box */}
          <div className=" py-4 flex justify-around w-full h-20 items-center border-gray-300 border-b-2">
              <div className="text-3xl font-semibold text-slate-500">
                <h1>Bienvenido Dr/Dra <span className=" text-teal-500 capitalize">{auth.id ? `${auth.name} ${auth.lastname}` : ""}</span></h1>
              </div>
              <div className="text-teal-600 text-md font-bold">
                <p>San juan de Los Morros, {fechaFormateada}</p>
              </div>
          </div>
          {/* header's end */}

          {/* Quantity */}
          <div className="mt-2">

            <div className="text-3xl pt-2 font-bold pl-6 text-slate-500">
              <h1 className=" tracking-wider ">Cifras</h1>
            </div>

            <div className="flex w-full justify-around py-8">
              <CardQuantity
                quantity={1000}
                title="Pacientes"
                icon={<FontAwesomeIcon icon={faHospitalUser}/>}
              />
               <CardQuantity
                quantity={1000}
                title="Doctores"
                icon={<FontAwesomeIcon icon={faUserDoctor}/>}
                
              />
               <CardQuantity
                quantity={200}
                title="Modulos"
                icon={<FontAwesomeIcon icon={faHospital}/>}
              />
               <CardQuantity
                quantity={7}
                title="Enfermedades"
                icon={<FontAwesomeIcon icon={faDisease}/>}
              />
            
            </div>
          </div>
          {/* Graphics */}
          <div className=" h-[56%] mx-2 mt-4  rounded-2xl ">

          <div className="text-3xl pt-2 font-bold pl-6 text-slate-500">
              <h1 className=" tracking-wider ">Gráficos</h1>
            </div>

            {/* graphics container */}
            <div className=" grid grid-cols-2 gap-2">
              <BarGraphic/>
            
            </div>
          </div>
    </section>
  )
}

export default DashboardAdmin