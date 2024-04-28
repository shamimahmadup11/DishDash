import { useState } from 'react'
import '../Navbar.css'
import { Link } from 'react-router-dom'
import DishDashLogo from './DishDahlogo.jpeg';
export default function Navbar() {

    const [isloged, setIsloged] = useState(false);

    function toggle() {
        setIsloged(!isloged);
        
    }
    return (
        <div className='parentNavbar'>
            <div className='nav'>
                <ul>

                    <Link to="/"><li>
                        <img src={DishDashLogo} alt="" />
                    </li></Link>

                    <li>
                        <svg width="24" height="24" viewBox="0 0 24 24">
                            <path fill="currentColor" d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 2a5 5 0 1 1 0 10 5 5 0 0 1 0-10z" />
                        </svg>
                    </li>
                </ul>
                <ul>
                    <Link to="/About"> <li>About</li></Link>
                    <Link to="/Contact"> <li>Contact</li></Link>
                    <Link to="/Help"> <li>Helps</li></Link>
                    <Link to="/Loginsignup" ><li className='signIn' onClick={toggle}>
                        {isloged ? 'Log Out' : 'Log In'}
                    </li></Link>
                    <Link to="/AddToCart"> <li>
                        <svg width="24" height="24" viewBox="0 0 24 24">
                            <path
                                fill="currentColor"
                                d="M17 11H5a2 2 0 0 0-2-2v-4a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v4a2 2 0 0 0-2 2zM8 5a1 1 0 0 1 1-1h6a1 1 0 0 1 1 1v2H8zm10 8a2 2 0 1 1 0-4 2 2 0 0 1 0 4z"
                            />
                        </svg>
                    </li></Link>
                </ul>
            </div>
            {/* <Loginsingup googleValue={toggle} /> */}
        </div>
    )
}

