
import './App.css'
import Navbar from './Components/Navbar'
import Body from './Components/Body'
import Footer from './Components/Footer'
import { createBrowserRouter, RouterProvider  } from 'react-router-dom'
import Contact from './Components/Contact'
import About from './Components/About'
import Help from './Components/Help'
import Loginsingup from './Components/Loginsingup'
import Cart from './Components/Cart'
import Menu from './Components/Menu'
function App() {
  const router= createBrowserRouter([
    {
    path:"/",
    element:<><Navbar/> <Body/> <Footer/></>
    },
    {
      path: "/Contact",
      element:<> <Navbar/> <Contact/><Footer/> </>

    },
    {
      path: "/About",
      element:<><Navbar/> <About/> <Footer/></>
    },
    {
        path:"/Help",
        element: <><Navbar/> <Help/><Footer/></>
    },
    {
      path:"/Loginsignup",
      element: <><Navbar/> <Loginsingup/><Footer/></>
    },
    {
      path:"/Cart",
      element: <><Navbar/> <Cart/><Footer/></>
    },
    {
      path:"/Menu",
      element: <><Navbar/> <Menu/><Footer/></>
    },
  ])

  return (
    <div className='app'>
      <RouterProvider router={router}/>
    </div>
  )
}

export default App;


