import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div className='min-h-screen bg-red-950 flex flex-col items-center justify-center text-center'>
        <div className='flex items-center justify-center space-x-8 mb-12'>
        <a href="https://vite.dev" target="_blank">
          <img src={viteLogo} className="logo w-24 h-24 animate-bounce" alt="Vite logo" style={{animationDuration: '2s'}} />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react w-24 h-24 animate-spin" alt="React logo" style={{animationDuration: '10s'}} />
        </a>
      </div>
      <h1 className='text-white text-6xl font-bold mb-5'>Vite + React</h1>
      <h1 className='text-white text-3xl font-medium mb-10'>Dhilla Mazaya Nasucha</h1>
      <div className="card text-sm space-y-6 mb-2">
        <button onClick={() => setCount((count) => count + 1)} className='bg-orange-100 text-red-950 hover:bg-orange-200 py-2 px-6 rounded-lg text-lg'>
          count is {count}
        </button>
        <p className='text-stone-500'>
          Edit <code>src/App.jsx</code> and save to test HMR
        </p>
      </div>
      <p className="text-stone-500 read-the-docs">
        Click on the Vite ands React logos to learn more
      </p>
      </div>
    </>
  )
}

export default App
