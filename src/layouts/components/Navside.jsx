import { Link } from "react-router-dom"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faHouse,faHospitalUser,faUserDoctor,faUsers,faArrowRightFromBracket } from "@fortawesome/free-solid-svg-icons"
import useAuth from "../../hooks/useAuth"

const Navside = () => {
  const { outSession } = useAuth();
 

  return (
      <nav className=" w-[80px]   flex flex-col justify-evenly items-center shadow-xl">
         <div>
            
         </div>

        <ul id='links' className="my-10 w-full h-[300px] flex items-center flex-col justify-between">
            <Link to='/admin' className=" w-full text-center h-15">
              <FontAwesomeIcon icon={faHouse} color="#FFFFFF" className="text-[19px]  hover:bg-white hover:text-teal-600  p-3 transition-all ease-out rounded-xl"/>
            </Link>
            <Link to='patients' className="w-full text-center h-14">
            <FontAwesomeIcon icon={faHospitalUser} color="#FFFFFF" className="text-[19px] hover:bg-white hover:text-teal-600 p-3 transition-all ease-out rounded-xl" />
            </Link>
            <Link to='doctors' className=" w-full text-center h-14">
            <FontAwesomeIcon icon={faUserDoctor} color="#FFFFFF" className="text-[19px] hover:bg-white hover:text-teal-600  p-3 transition-all ease-out rounded-xl"/>
            </Link>
            <Link to='users' className=" w-full text-center h-14">
            <FontAwesomeIcon icon={faUsers} color="#FFFFFF" className="text-[19px] hover:bg-white hover:text-teal-600 p-3 transition-all ease-out rounded-xl"/>
            </Link>
        </ul>

        <div className="w-full h-40 mb-5 flex justify-between py-4 items-center flex-col cursor-pointer"
         onClick={outSession}
        >
              <FontAwesomeIcon icon={faArrowRightFromBracket} size="xl" color="#FFFFFF" className=" p-2 rounded-lg hover:bg-white hover:text-teal-600  transition-all"/>
        </div>
      </nav>
  )
}

export default Navside