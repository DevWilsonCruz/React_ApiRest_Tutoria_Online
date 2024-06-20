import { React } from 'react'
import { Routes,Route,Outlet} from 'react-router-dom'
import './App.css'
import NotFoundPage from './routes/NotFoundPage'

function App() {

  return (
    <main>
      <Routes>
        <Route path="/" element={<h1>Home</h1>}/>
        <Route path="/dashboard/*" element={<Outlet/>}>
          <Route path="home" element={<h1>Dashboard home</h1>}/>
        </Route>
        <Route path="*" element={<NotFoundPage/>}/>
      </Routes>
    </main>
  )
}

export default App
