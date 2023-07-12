import {BrowserRouter,Route,Routes} from 'react-router-dom'
import AuthLayout from './layouts/AuthLayout'
import Login from './pages/public/Login'
import ForgotPassword from './pages/public/ForgotPassword'
import RecoverPassword from './pages/public/RecoverPassword'
import DoctorLayout from './layouts/DoctorLayout'
import AdminLayout from './layouts/AdminLayout'
import PagePrincipal from './pages/private/DoctorPages/PagePrincipal'
import DashboardAdmin from './pages/private/AdminPages/DashboardAdmin'
import DoctorManage from './pages/private/AdminPages/DoctorManage'
import PatientsManage from './pages/private/AdminPages/PatientsManage'
import UsersManage from './pages/private/AdminPages/UsersManage'
import CreatePatient from './pages/private/DoctorPages/components/pagesCrud/CreatePatient'
import { AuthProvider } from './context/AuthProvider' //Ya con envolver todos los componenetes con el provider, estos pueden usar el estate o funciones de manera global
function App() {
  
  return (
        <AuthProvider>
          <BrowserRouter>
            {/* Rutas publicas */}
            <Routes>
                <Route path="/" element={<AuthLayout/>}>
                    <Route index element={<Login/>}/>
                    <Route path='/olvidePassword' element={<ForgotPassword/>}/>
                    <Route path='/recuperarPassword/:id' element={<RecoverPassword/>}/>
                </Route>

                {/* Rutas protegidas  */}
                <Route path='/doctor' element={<DoctorLayout/>}>
                    <Route path='doctor/createPatient' element={<CreatePatient/>}/>
                    <Route index element={<PagePrincipal/>}/>
                </Route>

                <Route path='/admin' element={<AdminLayout/>}>
                    <Route index element={<DashboardAdmin/>}/>
                    <Route path='doctors' element={<DoctorManage/>}/>
                    <Route path='patients' element={<PatientsManage/>}/>
                    <Route path='users' element={<UsersManage/>}/>
                </Route>
                
            </Routes>
          </BrowserRouter>
        </AuthProvider>
  )
}

export default App
