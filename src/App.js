import React from 'react'
import { UserAuthContextProvider } from './context/UserAuthContext'
import { Route, Routes } from 'react-router-dom'
import ProtectedRoute from './components/ProtectedRoute'
import Home from './Home'
import Login from './components/Login'
import Signup from './components/Signup'
const App = () => {
  return (
    <UserAuthContextProvider>
      <Routes>
        <Route
          path="/home"
          element={
            <ProtectedRoute>
              <Home />
            </ProtectedRoute>
          }
        />
        <Route path="/" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
      </Routes>
    </UserAuthContextProvider>
  )
}

export default App