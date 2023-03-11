import { Link } from 'react-router-dom'
import './Navbar.css'
import RotomTV from '../../assets/rotom.png'
import {LANDING_URL, LOGIN_URL, REGISTER_URL} from '../../constants/url'
import { useUserContext } from '../../contexts/UserContext'
import { logout } from '../../firebase/auth-service'

const Navbar = () => {
    const {user} = useUserContext()
    const handleMenu = () => {
        const div = document.getElementById('burgerMenu');
        const sideBar = document.getElementById('sidebar')
        const body = document.getElementById("sidebar").parentElement.childNodes[1]
        body.classList.toggle("change")
        div.classList.toggle("change")
        sideBar.classList.toggle("change")
    }
    const handleLogout = async () => {
        //console.log("Saliendo...")
        await logout()
    }
    const profileRoute = (!!user) ? "/profile/"+user.id : LANDING_URL
    return(
        <ul>
            <div className='navgen'>
            <div className='Nav'>
                <Link to={LANDING_URL}>
                    <img src={RotomTV} className="imgNav"></img>
                </Link>
            </div>



            <div className='navder'>
            {!!user && (
                    <div className='Navtxt'>
                    <Link to={LOGIN_URL}>{user.displayName}</Link>
                    </div>
                )}
                {!user && (
                   <div className='Navtxt'>
                   <Link to={LOGIN_URL}>Login</Link>
                </div>
                )}

                
                <div className='Navtxt'>
                   <Link to={REGISTER_URL}>Register</Link>
                </div>
                <div className='Navtxt'>
                    <Link to={LANDING_URL}  onClick={() => {
                        handleLogout();
                        if (window.innerWidth <= 640) {
                            handleMenu();
                        }
                    
                    }}>Salir</Link>
                </div>
            </div>
            </div>
        </ul>
    )
}

export default Navbar