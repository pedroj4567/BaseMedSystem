/* eslint-disable react/prop-types */
const DataContainer = ({patient,visible}) => {
  
  return (
        
      <div id="datacontainer" className={`${!visible ? "hidden" : "bg-gray-200  rounded-lg  transition-all ease-in  w-full h-2/3 mt-5 lg:w-[70%] overflow-y-auto "}`}>
        <div className="w-full text-center ">
          <h1 className="text-2xl sm:text-3xl my-4 font-bold text-teal-600 ">Ficha clinica del paciente</h1>
        </div>
        {/* Seccion 1 */}
          <div className="flex h-32 flex-col mx-5 sm:flex-row sm:justify-evenly ">

            <div className="w-full flex justify-center flex-col sm:mx-2">
              <label className="text-teal-600 text-lg font-bold">Nombre</label>
              <input type="text"
                className="h-10  rounded-lg bg-teal-400 pl-2"
                disabled
                value={patient.patient_name}
              />
            </div>

            <div className="w-full flex justify-center flex-col sm:mx-2">
              <label className="text-teal-600 text-lg  font-bold">Apellido</label>
              <input type="text"
                className="h-10  rounded-lg bg-teal-400 pl-2"
                disabled
                value={patient.patient_lastname}
              />
            </div>

            <div className="w-full  flex justify-center flex-col sm:mx-2">
              <label className="text-teal-600 text-lg  font-bold">Cedula</label>
              <input type="text"
                className="h-10  rounded-lg bg-teal-400 pl-2"
                disabled
                value={patient.n_identification}
              />
            </div>
          </div>


          {/* Seccion 2 */}
          <div className="flex h-32 flex-col mx-5 sm:flex-row sm:justify-evenly mt-20 sm:mt-auto">

            <div className="w-full flex justify-center flex-col sm:mx-2">
              <label className="text-teal-600 text-lg  font-bold">Sexo</label>
              <input type="text"
               className="h-10  rounded-lg bg-teal-400 pl-2"
                disabled
                value={patient.gender}
              />
            </div>

            <div className="w-full flex justify-center flex-col sm:mx-2">
              <label className="text-teal-600 text-lg  font-bold">Edad </label>
              <input type="text"
               className="h-10  rounded-lg bg-teal-400 pl-2"
                disabled
                value={patient.age}
              />
            </div>

            <div className="w-full flex justify-center flex-col sm:mx-2">
              <label className="text-teal-600 text-lg  font-bold">Fecha de nacimiento</label>
              <input type="text"
               className="h-10  rounded-lg bg-teal-400 pl-2"
                disabled
                value={patient.date}
              />
            </div>
          </div>
          
          {/* Seccion 3 */}
          <div className="flex h-22 py-2 flex-col mx-5  sm:flex-row sm:justify-between mt-20 sm:mt-auto sm:items-center">

              <div className="w-full flex justify-center flex-col  sm:mx-2">
                <label className="text-teal-600 text-lg font-bold">Dirección</label>
                <input type="text"
                  disabled
                  className="h-10 rounded-lg bg-teal-400 pl-2"
                  value={patient.address}
                />
              </div>

              <div className="w-full flex justify-center flex-col sm:mx-2">
                <label className="text-teal-600 text-lg font-bold">Telefono</label>
                <input type="text"
                 className="h-10 rounded-lg bg-teal-400 pl-2"
                  disabled
                  value={patient.phone}
                />
              </div>
          </div>

          {/* Seccion 4 */}
          <div className="flex h-22 py-2 flex-col mx-5  sm:flex-row sm:justify-evenly mt-20 sm:mt-auto">

            <div className="w-full flex justify-center flex-col sm:justify-start sm:mx-2">
                  <label className="text-teal-600 text-lg font-bold my-2">Sede de atención</label>
                  <input type="text"
                    disabled
                    className="h-10 rounded-lg bg-teal-400 pl-2"
                    value={patient.address}
                  />
            </div>

            <div className="flex h-22 w-3/4  mx-5  px-4  sm:flex-col sm:justify-between mt-20 sm:mt-auto sm:items-center ">
              <h2 className="text-teal-600 text-lg font-bold mt-2 mb-2 w-full">Patologias base</h2>
              <div className=" h-40 w-full rounded-lg bg-white p-3 flex flex-row items-start  justify-evenly flex-wrap overflow-y-auto">
                  <span className="bg-teal-400 py-2 px-3 rounded-xl font-bold mx-1 mt-2">Hipertension Arterial</span>
                  <span className="bg-teal-400 py-2 px-3 rounded-xl font-bold mx-1 mt-2">Cancer</span>
                  <span className="bg-teal-400 py-2 px-3 rounded-xl font-bold mx-1 mt-2">Hipotension Arterial</span>

              </div>
            </div>
           
          </div>



      </div>
            
  )
}

export default DataContainer