import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { Route, RouterProvider, createBrowserRouter, createRoutesFromElements } from 'react-router-dom'
import Layout from './Layout'
import Home from './component/header/Home/Home.jsx'
import About from './component/header/About/About.jsx'
import Contact from './component/header/Contect/Contact.jsx'
import User from './component/header/User/User.jsx'
import Github, { gitInfo } from './component/header/Github/Github.jsx'
// const route=createBrowserRouter([{
//   path:'/',
//   element:<Layout/>,
//   children:[{
//     path:"",
//     element:<Home/>
//   },{
//     path:"about",
//     element:<About/>
//   },
// {
//   path:"contact",
//   element:<Contact/>
// },
// {
//   path:"user/:id",
//   element:<User/>
// },
// ]
// }])
const route = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<Layout/>}>
      <Route path="" element={<Home/>}/>
      <Route path="about" element={<About/>}/>
      <Route path="contact" element={<Contact/>}/>
      <Route path="user/:userid" element={<User/>}/>
      <Route 
      loader={gitInfo}
      path="github" 
      element={<Github/>}/>
    </Route>
  )
);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={route}/>
  </React.StrictMode>,
)
