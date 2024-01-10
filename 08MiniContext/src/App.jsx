import { useState } from 'react'

import './App.css'
import UserContextProvider from './context/UserContextProvider'
import Login from './component/Login'
import Password from './component/Password'

function App() {
  return (
    <UserContextProvider>
      <Login/>
      <Password/>
    </UserContextProvider>
  )
}

export default App
