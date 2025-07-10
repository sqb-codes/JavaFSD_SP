import './App.css'
import { Login } from './components/auth/Login'
import { Register } from './components/auth/Register'
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import { Dashboard } from './components/pages/Dashboard';
import Navbar from './components/sections/Navbar';

function App() {
  return (
    <>  
      <div className='px-10 py-4 justify-center min-h-screen bg-gray-100'>
        <h1 className='text-3xl mb-4 font-bold text-center'>JIRA Application</h1>
        
        <Router>
          <Navbar/>
          <Routes>
            <Route path='/register' element={<Register/>}/>
            <Route path='/login' element={<Login/>}/>
            <Route path='/dashboard' element={<Dashboard/>} />
          </Routes>
        </Router>

        {/* <div className='flex flex-col md:flex-row gap-10 mt-10'>
          <div className='w-full md:w-1/2 bg-white p-6 rounded-lg shadow-md'>
            <Register />
          </div>
          <div className='w-full md:w-1/2 bg-white p-6 rounded-lg shadow-md'>
            <Login />
          </div> */}
      {/* </div> */}
      </div>
    </>
  )
}

export default App
