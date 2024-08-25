import Home from "./pages/Home"
import About from './pages/About'
import Contact from './pages/Contact'
import { createBrowserRouter, RouterProvider } from "react-router-dom"
import Navbar from "./components/Navbar"
import Signup from "./pages/Signup"
import Login from "./pages/login"

const App = () => {
  const router = createBrowserRouter([
    {
      path:'/',
      element:<><Navbar/><Home/></>
    },
    {
      path:'/about',
      element:<><Navbar/><About/></>
    },
    {
      path:'/contact',
      element:<><Navbar/><Contact/></>
    },
    {
      path:'/signup',
      element:<><Signup/></>
    },
    {
      path:'/login',
      element:<><Login/></>
    }
  ])
  return (
    <>
    <RouterProvider router={router}/>
    </>
  )
}

export default App
