import { React ,useState,useCallback, useEffect,useRef} from 'react'
import { Routes,Route,Outlet,useNavigate, Navigate} from 'react-router-dom'
import './App.css'
import {NotFoundPage,Home,LogIn,Dashboard,SignUp} from './routes/index'
import {DashboardHome,Settings,SearchTutor,TutoringSessions} from './routes/Dashboard/index.js'
import {Header,NavBarDashboard} from './components/index.js'
import { Toast } from 'primereact/toast';
import "primereact/resources/themes/lara-light-blue/theme.css";  //theme
import 'primeicons/primeicons.css'; //icons
import 'primeflex/primeflex.css'; // flex
 
        

function App() {
  const toast = useRef(null)
  const [isLogin,setIsLogin]=useState({auth:false,role:null,userid:null})
  const navigate=useNavigate()
  const handleAuth = useCallback((isAuth)=>{
    setIsLogin(isAuth)
  },[])

  
  return (
    <>
        <div className="card flex justify-content-center">
          <Toast ref={toast} />
        </div>
      
        <Routes>
          <Route path="/" element={<><Header auth={isLogin.auth}/><Outlet/></>}>
            <Route path="" element={<Home/>}/>
            <Route path="login" element={isLogin.auth?<Navigate to={"/dashboard"}/>:<LogIn handleLogin={handleAuth} loginToast={toast}/>}/>
            <Route path="sign-up" element={isLogin.auth?<Navigate to={"/dashboard"}/>:<SignUp signUpToast={toast}/>}/>
          </Route>
          <Route path="/dashboard/" element={!isLogin.auth?<Navigate to={"/login"}/>:<Outlet/>}>
            <Route element={<Dashboard handleLogOut={handleAuth}/>}>
                <Route path="" element={<DashboardHome/>}/>
                <Route path="buscar-tutor" searchToast={toast} element={<SearchTutor/>}/>
                <Route path="ajustes" element={<Settings/>}/>
                <Route path="tutorías" element={<TutoringSessions/>}/>
            </Route>
            <Route path="*" element={<NotFoundPage/>}/>
          </Route>
          <Route path="*" element={<NotFoundPage/>}/>
        </Routes>
    </>
  )
}

export default App
