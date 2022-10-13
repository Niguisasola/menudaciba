import { Link } from "react-router-dom";
import Logo from '../Logo';
import Contactpopup from "./Contactpopup";

function Header() {
    return (
        <div className="flex justify-between h-auto justify-center items-center lg:w-full w" >
            <Link to='/'>
            <Logo />
            </Link>
            <div className="hidden md:flex md:h-10 md:w-4/6 lg:w-3/6 md:justify-between md:items-center  md:p-4">
                <Link to="/sobrenosotros">
                    <p className="shadow bg-violeta-ciba transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 hover:bg-verde-ciba duration-300 focus:shadow-outline focus:outline-none text-white font-bebas py-2 px-4 rounded">Sobre Nosotr@s</p>
                </Link>
                <Link to="/equipo">
                    <p className="shadow bg-violeta-ciba transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 hover:bg-verde-ciba duration-300 focus:shadow-outline focus:outline-none text-white font-bebas py-2 px-4 rounded">Equipo</p>
                </Link>
                <Link to="/reservar">
                    <p className="shadow bg-violeta-ciba transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 hover:bg-verde-ciba duration-300 focus:shadow-outline focus:outline-none text-white font-bebas py-2 px-4 rounded">Reservas</p>
                </Link>
                <Contactpopup/>
            </div>
        </div>
    )
}
export default Header;