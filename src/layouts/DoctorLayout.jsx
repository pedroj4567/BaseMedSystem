import { Outlet } from "react-router-dom"
import useAuth from "../hooks/useAuth"
import { Navigate } from "react-router-dom"; 
const DoctorLayout = () => {
  const { auth,cargando} = useAuth();
  if (cargando) return;
  
  return (
      <main id="layoutDoctor"
        className=" h-screen flex justify-center items-center  ">
        { auth.id ? <Outlet/> : <Navigate to="/"/>}
      </main>
  )
}

export default DoctorLayout