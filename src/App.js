import { useEffect, useState } from 'react'
import './App.css'
import Home from './views/home'
import Login from './views/login'

function App() {
  const [form, setForm] = useState({ user: '' })
  const [active, setActive] = useState(false)

  useEffect(() => {
    if (active || window.localStorage.getItem('uidPrueba')) {
      setActive(true)
    } else {
      setActive(false)
    }
  }, [active])

  return (
    <div className='app'>
      {active ? (
        <Home form={form} />
      ) : (
        <Login form={form} setForm={setForm} setActive={setActive} />
      )}
    </div>
  )
}

export default App
