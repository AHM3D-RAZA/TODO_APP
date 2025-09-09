import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import {BrowserRouter, Routes, Route } from "react-router"
// import { Tasks } from './pages/tasks.jsx'
import Tasks from './pages/tasks.jsx'
import { NavBar } from './layouts/navbar.jsx'

createRoot(document.getElementById('root')).render(
  <BrowserRouter>
  <Routes>
    <Route element={<NavBar/>}>
      <Route path="/" element={<App />} />
      <Route path="/tasks" element={<Tasks />}/>
    </Route>
  </Routes>
  </BrowserRouter>
)
