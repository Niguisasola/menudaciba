import { Link } from "react-router-dom";
import Logo from '../Components/Logo'
function Header(){
    return(
        <div className="flex justify-between h-56 grid grid-cols-2 gap-4 content-start items-center" >
            
             <Logo/>
            
                    <div className="flex  h-10 w-1.2  content-between items-center justify-between p-4">
                        <Link to="/AboutUs">
                             <p className="basis-1/4 text-2xl 01">Sobre Nosotr@s</p>
                        </Link>
                            <Link to="/Team">
                                <p className="basis-1/2 text-2xl 02">Equipo</p>
                            </Link>
                                <Link to="/Calendar">
                                    <p className="basis-1/4 text-2xl 03">Calendario</p>
                                </Link>
                                    <Link to="/Contact">
                                        <p className="basis-1/2 text-2xl 04">Contacto</p>
                                    </Link>
                    </div>
        </div>
    )
}
export default Header;