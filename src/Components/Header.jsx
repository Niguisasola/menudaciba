import { Link } from "react-router-dom";
import Logo from '../Components/Logo'
function Header(){
    return(
        <div className="flex justify-between h-auto items-center" >
            
             <Logo/>
            
                    <div className="w-6/12 flex justify-around text-violeta-ciba font-koulen">
                        <Link to="/sobrenosotres">
                             <p className="text-xl">Sobre Nosotr@s</p>
                        </Link>
                            <Link to="/equipo">
                                <p className="text-xl">Equipo</p>
                            </Link>
                                <Link to="/reservarPorEdad">
                                    <p className="text-xl">Calendario</p>
                                </Link>
                                    <Link to="/contacto">
                                        <p className="text-xl">Contacto</p>
                                    </Link>
                    </div>
        </div>
    )
}
export default Header;