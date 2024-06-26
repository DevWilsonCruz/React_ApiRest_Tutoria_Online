import { React } from 'react'
import { Routes,Route,Outlet} from 'react-router-dom'
import './App.css'
import {NotFoundPage,Home,LogIn} from './routes/index'
import Header from './components/Header'
function App() {

  return (
    <main>
      <Header/>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/login" element={<LogIn/>}/>
        <Route path="/dashboard/*" element={<Outlet/>}>
          <Route path="home" element={<h1>Dashboard home</h1>}/>
        </Route>
        <Route path="*" element={<NotFoundPage/>}/>
      </Routes>
      
    </main>
  )
}

export default App
