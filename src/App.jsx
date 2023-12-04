import { RouterProvider, createBrowserRouter } from "react-router-dom"
import SignIn from "./Authentication/SignIn"
import SignUp from "./Authentication/SignUp"
import ProductDetail from "./Components/ProductDetail"
import Home from "./Components/Home"

 
function App() {
   
  const router = createBrowserRouter([
    {
      path: '/',
      element: <Home/>
    },
    {
      path: '/details',
      element:<ProductDetail/>
    },
    {
      path: '/signin',
      element:<SignIn/>
    },
    {
      path: '/signup',
      element:<SignUp/>
    }
  ])

  return (
    <RouterProvider router={router}/>
  )
}

export default App
