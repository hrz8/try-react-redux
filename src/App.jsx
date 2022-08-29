import reactLogo from './assets/react.svg'
import './App.css'
// import Label from './components/Label'
import Child from './components/Child'
import Button from './components/Button'
import { useDispatch } from 'react-redux'
import { init, login, logout } from './redux/sub/user'
import { useEffect } from 'react'

function App() {
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(init())
  }, [])

  return (
    <div className="App">
      <div>
        <a href="https://vitejs.dev" target="_blank">
          <img src="/vite.svg" className="logo" alt="Vite logo" />
        </a>
        <a href="https://reactjs.org" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <button onClick={() => setName(Math.random().toString())}>Nama</button>
      <button onClick={() => setUmur(Math.random())}>Umur</button>
      <h1>Vite + React</h1>
      <button onClick={() => dispatch(login())}>Login</button>
      <button onClick={() => dispatch(logout('loging out...'))}>Logout</button>
      <div className="card">
        {/* <button onClick={() => setCount((count) => count + 1)}> */}
          <Button />
        {/* </button> */}
        <p>
          Edit <code>src/App.jsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        <Child />
      </p>
    </div>
  )
}

export default App
