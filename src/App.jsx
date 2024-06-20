



import './App.css';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { Provider } from 'react-redux';
import store from './utils/Store'; // Correctly import the store
import Navbar from './Components/Navbar';
import Body from './Components/Body';
import Footer from './Components/Footer';
import Contact from './Components/Contact';
import About from './Components/About';
import Help from './Components/Help';
import Loginsingup from './Components/Loginsingup';
import Cart from './Components/Cart';
import Menu from './Components/Menu';
import AddToCartList from './Components/AddToCartList';
import PaymentComponent from './Components/PaymentComponents';
import LocationComponents from './Components/LocationComponents';

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: (
        <>
          <Navbar />
          <Body />
          <Footer />
        </>
      ),
    },
    {
      path: "/Contact",
      element: (
        <>
          <Navbar />
          <Contact />
          <Footer />
        </>
      ),
    },
    {
      path: "/About",
      element: (
        <>
          <Navbar />
          <About />
          <Footer />
        </>
      ),
    },
    {
      path: "/Help",
      element: (
        <>
          <Navbar />
          <Help />
          <Footer />
        </>
      ),
    },
    {
      path: "/Loginsignup",
      element: (
        <>
          <Navbar />
          <Loginsingup />
          <Footer />
        </>
      ),
    },
    {
      path: "/Cart/:id",
      element: (
        <>
          <Navbar />
          <Cart />
          {/* <Footer /> */}
        </>
      ),
    },
    {
      path: "/Menu",
      element: (
        <>
          <Navbar />
          <Menu />
          <Footer />
        </>
      ),
    },
    {
      path: "/AddToCart",
      element: (
        <>
          <Navbar />
          <AddToCartList />
          <Footer />
        </>
      ),
    },
    {
      path: "/PaymentComponent",
      element: (
        <>
          <Navbar />
          <PaymentComponent />
          <Footer />
        </>
      ),
    },
    {
      path: "/LocationComponents",
      element: (
        <>
          <Navbar />
          <LocationComponents />
          <Footer />
        </>
      ),
    },
  ]);

  return (
    <Provider store={store}>
      <RouterProvider router={router} />
    </Provider>
  );
}

export default App;


