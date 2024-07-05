import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import { Route, RouterProvider, createBrowserRouter, createRoutesFromElements } from 'react-router-dom'
import Layout from './Layout.jsx'
import Home from './Component/Home.jsx'
import AboutUs from './Component/AboutUs.jsx'
import ContactUs from './Component/ContactUs.jsx'
import Github, { githubInfoLoader } from './Component/Github.jsx'
import User from './Component/User.jsx'

// // const router = createBrowserRouter([
// {
//   path:"/",
//   element:<Layout />,
//   children:[
//     {
//       path:"",
//       element:<Home />

//   },
//   {
//     path:"AboutUs",
//     element:<AboutUs />

//   },{
//     path:"/ContactUS",
//     element:<ContactUs/>
//   },
// {
//   path:"/Github",
//   element:<Github/>
// }]
// }

// ]
// // )

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route 

    path='/'
     element={<Layout/>}
     >
       <Route path='' element={<Home/>}/>
     <Route path='AboutUs' element={<AboutUs/>}/>
     <Route path='/ContactUs' element={<ContactUs/>}/>
     <Route 
     loader={githubInfoLoader} path='Github' element={<Github/>}/>
     <Route path='User/:userId' element={<User/>}/>
     

    </Route>
  )
)
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
  <RouterProvider router={router}/>
  </React.StrictMode>,
)
