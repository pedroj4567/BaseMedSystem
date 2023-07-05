import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faMagnifyingGlass} from "@fortawesome/free-solid-svg-icons";
function PatientsManage() {
  return (
    <section className="w-full bg-slate-200 ">
      {/* titulo */}
      <div className=" h-24 px-20 py-6">
        <h2 className="text-3xl font-bold text-teal-500">
          Gestor de pacientes
        </h2>
      </div>
      {/* Contenido */}
      <div className="grid grid-cols-2 gap-5 mx-5">
        <div className="border border-black p-5">
          <form className="w-full lg:w-[70%] min-w-[209px]">
            <div className="flex relative">
              <select
                name=""
                id=""
                selected
                className="h-16 w-20 cursor-pointer transition-all hover:bg-teal-300 text-center font-bold rounded-l-xl '
                                     outline-none"
              >
                <option value="V-" className="text-teal-500 font-bold my-2">
                  V-
                </option>
                <option value="E-" className="">
                  E-
                </option>
              </select>
              <input
                type="text"
                placeholder="Ej:12345678"
                className="w-full min-w-[200px]  rounded-r-xl px-3 h-16 outline-none font-semibold text-teal-500 text-[14px] md:text-xl"
              />
              <button
                type="submit"
                className=" bg-teal-500 rounded-full p-0  absolute top-2 right-4 h-12 w-12 hover:bg-teal-700 transition-all  "
              >
                <FontAwesomeIcon
                  icon={faMagnifyingGlass}
                  className=" text-white rounded-full text-3xl text-center"
                />
              </button>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
}

export default PatientsManage