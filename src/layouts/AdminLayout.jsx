import { Outlet } from "react-router-dom"
import Navside from "./components/Navside"
import useAuth from "../hooks/useAuth"
import { Navigate} from 'react-router-dom'
const AdminLayout = () => {
  const { auth,cargando} = useAuth();
  if (cargando) return;
  console.log(auth)
  return (<>
      {auth.id ? <main 
        id="admin"
        className="flex h-screen"
      >
        <Navside/>
        
        <Outlet/>

      </main> : <Navigate to="/"/> }
    </>
  )
}

export default AdminLayout