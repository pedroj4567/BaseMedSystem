function ModalPatient({isOpen}) {
  return (
    <div className={`${isOpen ? "flex slide-in-center " : "hidden"}  transform transition-all ease-in-out delay-75 w-screen absolute h-screen  justify-center items-center z-20 `}>
                <div className="w-full h-full absolute bg-teal-300 bg-opacity-10 rounded-lg shadow-lg  backdrop-blur backdrop-filter z-10">

                </div>
                <div className=" z-40">
                    {/* header */}
                    <div>
                        <div>
                            <h1>Registro de pacientes</h1>
                        </div>
                        <div>
                            <button>X</button>
                        </div>
                    </div>

                    {/* body modal */}

                    <div>
                        <form>
                                {/* Seccion 1 */}
                                <div>
                                    <div>
                                        <label>Nombre del paciente</label>
                                        <input type="text" />
                                    </div>
                                    <div>
                                        <label>Apellido del paciente</label>
                                        <input type="text" />
                                    </div>
                                    <div>
                                        <label>Nombre del paciente</label>
                                        <input type="text" />
                                    </div>
                                </div>
                        </form>
                    </div>
                </div>
     
    </div>
  )
}

export default ModalPatient