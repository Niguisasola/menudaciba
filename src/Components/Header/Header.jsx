import { Link } from "react-router-dom";
import Logo from '../Logo';
import BurgerMenu from "./BurgerMenu";
import Contactpopup from "./Contactpopup";
import usuario from '../../assets/img/icons/usuario.png'

function Header() {
    return (
        <>
            <div className="flex justify-between h-auto justify-between items-center lg:w-full w" >
                <Link to='/'>
                    <Logo />
                </Link>
                <div className="hidden md:flex md:h-10 md:w-4/6 lg:w-3/6 md:justify-between md:items-center  md:p-4">
                    <Link to="/sobrenosotros">
                        <p className="transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 hover:text-verde-ciba duration-300 focus:shadow-outline focus:outline-none text-grey-600 font-alata py-2 px-4">Sobre Nosaltres</p>
                    </Link>
                    <Link to="/equipo">
                        <p className="transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 hover:text-verde-ciba duration-300 focus:shadow-outline focus:outline-none text-grey-600 font-alata py-2 px-4">Equip</p>
                    </Link>
                    <Contactpopup />
                    <Link to="/reservar">
                        <p className="shadow bg-verde-ciba transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 hover:bg-violeta-ciba duration-300 focus:shadow-outline focus:outline-none text-white font-alata py-2 px-4 rounded">Reserves</p>
                    </Link>
                    <Link to="/login">
                        <img className='w-10 mx-4' src={usuario} alt="Log in y Registro de usuario" ></img>
                    </Link>
                </div>
                <BurgerMenu />
            </div>

        </>
    )
}
export default Header;