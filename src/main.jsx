import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'

import { Route, RouterProvider, createBrowserRouter, createRoutesFromElements } from 'react-router-dom'
import Layout from './Layout.jsx'

import Home from "./components/Home/Home.jsx"
import About from './components/About/About.jsx'
import Github, { gitInfoLoader } from './components/Github/Github.jsx'
import User from './components/User/User.jsx'
import Contact from './components/Contact/Contact.jsx'

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path='/' element={<Layout/>}>

      <Route path='' element={<Home/>}/>
      <Route path='about' element={<About/>}/>
      
      <Route path='user/' element={<User/>}>
      <Route path=':id' element={<User/>}/>
      </Route>
      
      <Route path='github' loader={gitInfoLoader} element={<Github/>}/>
      <Route path='contact' element={<Contact/>}/>
      <Route path='*' element={<div>404 Page Not Found</div>}/>

    </Route>
  )
)

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router}/>
  </React.StrictMode>,
)
