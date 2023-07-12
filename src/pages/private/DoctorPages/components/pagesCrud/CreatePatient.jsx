import { Link } from 'react-router-dom'
const CreatePatient = () => {

    const handlerSubmit = async(e) => {
        e.preventDefault();
        console.log('funciono');
    }



  return (
        <section className="bg-slate-100 h-5/6 rounded-md w-3/4 shadow-2xl flex flex-col justify-evenly border">
            <div className="  border-b-gray-300 border-b h-20 text-center mx-4  flex items-start">
                <h2 className=" mx-auto  text-teal-700 font-bold text-4xl">Registro de paciente</h2>
            </div>
            <form onSubmit={handlerSubmit} className =" overflow-y-scroll ">
               
                {/* Seccion 1 */}
                <div className="flex justify-around flex-wrap">
                    <div className="flex flex-col">
                        <label className="mb-3 text-teal-600 font-semibold text-lg flex ">Nombre del paciente <i className="text-red-600 text-2xl">*</i></label>
                        <input type="text"  className="border border-gray-300 h-8 w-60 rounded-md pl-2" placeholder="ej: Manuel"/>
                    </div>
                    <div className="flex flex-col">
                        <label className="mb-3 text-teal-600 font-semibold text-lg">Apellido del paciente <i className="text-red-600 text-2xl">*</i></label>
                        <input type="text"  className="border border-gray-300 h-8 w-60 rounded-md pl-2" placeholder="ej: Guillen"/>
                    </div>
                    <div className="flex flex-col">
                        <label className="mb-3 text-teal-600 font-semibold text-lg" >Cedula del paciente <i className="text-red-600 text-2xl">*</i></label>
                        <input type="text"  className="border border-gray-300 h-8 w-60 rounded-md pl-2" placeholder="Ej: V-123456789"/>
                    </div>
                </div>

                 {/* Seccion 2 */}
                 <div className="flex justify-around mt-10 flex-wrap">
                    <div className="flex flex-col">
                        <label className="mb-3 text-teal-600 font-semibold text-lg flex ">Sexo del paciente <i className="text-red-600 text-2xl">*</i></label>
                        <select className='w-60 h-8 bg-white rounded-lg border-gray-300 border outline-none'>
                            <option value="Masculino">Maculino</option>
                            <option value="Femenino">Femenino</option>
                        </select>
                    </div>
                    <div className="flex flex-col">
                        <label className="mb-3 text-teal-600 font-semibold text-lg">Edad del paciente <i className="text-red-600 text-2xl">*</i></label>
                        <input type="text"  className="border border-gray-300 h-8 w-60 rounded-md pl-2" placeholder="ej: Guillen"/>
                    </div>
                    <div className="flex flex-col">
                        <label className="mb-3 text-teal-600 font-semibold text-lg" >Fecha de nacimiento <i className="text-red-600 text-2xl">*</i></label>
                        <input type="date"  className="border border-gray-300 h-8 w-60 rounded-md pl-2" placeholder="Ej: V-123456789"/>
                    </div>
                </div>


                 {/* Seccion 3 */}
                 <div className="flex justify-around mt-10 flex-wrap ">
                    <div className="flex flex-col ">
                        <label className="mb-3 text-teal-600 font-semibold text-lg flex ">Direccion del paciente <i className="text-red-600 text-2xl">*</i></label>
                        <input type="text"  className="border border-gray-300 h-8 w-60 rounded-md pl-2" placeholder="ej: Manuel"/>
                    </div>
                    <div className="flex flex-col ">
                        <label className="mb-3 text-teal-600 font-semibold text-lg">Edad del paciente <i className="text-red-600 text-2xl">*</i></label>
                        <input type="text"  className="border border-gray-300 h-8 w-60 rounded-md pl-2" placeholder="ej: Guillen"/>
                    </div>
                    <div className="flex flex-col">
                        <label className="mb-3 text-teal-600 font-semibold text-lg" > del paciente <i className="text-red-600 text-2xl">*</i></label>
                        <input type="text"  className="border border-gray-300 h-8 w-60 rounded-md pl-2" placeholder="Ej: V-123456789"/>
                    </div>
                </div>


                 {/* Seccion 4 */}
                 <div className="flex justify-around mt-10 flex-wrap" >
                    <div className="flex flex-col">
                        <label className="mb-3 text-teal-600 font-semibold text-lg flex ">Dirección del paciente <i className="text-red-600 text-2xl">*</i></label>
                        <input type="text"  className="border border-gray-300 h-8 w-60 rounded-md pl-2" placeholder="ej: Manuel"/>
                    </div>
                    <div className="flex flex-col">
                        <label className="mb-3 text-teal-600 font-semibold text-lg"> del paciente <i className="text-red-600 text-2xl">*</i></label>
                        <input type="text"  className="border border-gray-300 h-8 w-60 rounded-md pl-2" placeholder="ej: Guillen"/>
                    </div>
                    <div className="flex flex-col">
                        <label className="mb-3 text-teal-600 font-semibold text-lg" >Cedula del paciente <i className="text-red-600 text-2xl">*</i></label>
                        <input type="text"  className="border border-gray-300 h-8 w-60 rounded-md pl-2" placeholder="Ej: V-123456789"/>
                    </div>
                </div>

                <div className="flex justify-center mt-12 flex-col items-center">
                    <button className="border px-28 py-2 rounded-lg bg-teal-400 text-white font-bold hover:bg-teal-500 transition-all cursor-not-allowed" disabled>
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