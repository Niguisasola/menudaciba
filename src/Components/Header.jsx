import { Link } from "react-router-dom";
import Logo from '../Components/Logo';
import Buttonpopup from "./Buttonpopup";

function Header() {
    return (
        <div className="flex justify-between h-auto grid grid-cols-2 gap-4 content-start items-center" >
            <Link to='/'>
            <Logo />
            </Link>
            <div className="flex  h-10 w-1.2  content-between items-center justify-between p-4">
                <Link to="/sobrenosotros">
                    <p className="shadow bg-violeta-ciba transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 hover:bg-verde-ciba duration-300 focus:shadow-outline focus:outline-none text-white font-bebas py-2 px-4 rounded">Sobre Nosotr@s</p>
                </Link>
                <Link to="/equipo">
                    <p className="shadow bg-violeta-ciba transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 hover:bg-verde-ciba duration-300 focus:shadow-outline focus:outline-none text-white font-bebas py-2 px-4 rounded">Equipo</p>
                </Link>
                <Link to="/reservar">
                    <p className="shadow bg-violeta-ciba transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 hover:bg-verde-ciba duration-300 focus:shadow-outline focus:outline-none text-white font-bebas py-2 px-4 rounded">Reservas</p>
                </Link>
                <Buttonpopup />
            </div>
        </div>
    )
}
export default Header;