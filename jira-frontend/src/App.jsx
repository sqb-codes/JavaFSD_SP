import './App.css'
import { Register } from './components/auth/Register'

function App() {
  return (
    <div className='p-10 justify-center min-h-screen bg-gray-100'>
      <h1 className='text-3xl font-bold underline'>JIRA Application</h1>
      <Register />
    </div>
  )
}

export default App
