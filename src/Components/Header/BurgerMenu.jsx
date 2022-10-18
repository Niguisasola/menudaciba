import { useState } from "react"; // import state
import BurgerContact from "./BurgerContact";

export default function BurgerMenu() {
  const [isNavOpen, setIsNavOpen] = useState(false); // initiate isNavOpen state with false

  return (
    <div className="md:hidden flex items-center justify-between py-8">
      <section className="MOBILE-MENU flex ">
        <div
          className="HAMBURGER-ICON space-y-2 p-4"
          onClick={() => setIsNavOpen((prev) => !prev)} // toggle isNavOpen state on click
        >
          <span className="block h-0.5 w-8 animate-pulse bg-violeta-ciba"></span>
          <span className="block h-0.5 w-8 animate-pulse bg-violeta-ciba"></span>
          <span className="block h-0.5 w-8 animate-pulse bg-violeta-ciba"></span>
        </div>

        <div className={isNavOpen ? "showMenuNav" : "hideMenuNav"}>
          <div
            className="CROSS-ICON absolute top-0 right-0 px-8 py-8"
            onClick={() => setIsNavOpen(false)} // change isNavOpen state to false to close the menu
          >
            <svg
              className="h-8 w-8 text-violeta-ciba"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <line x1="18" y1="6" x2="6" y2="18" />
              <line x1="6" y1="6" x2="18" y2="18" />
            </svg>
          </div>
          <ul className="MENU-LINK-MOBILE-OPEN flex flex-col items-center justify-between min-h-[250px]">
            <li className="text-2xl border-b border-verde-ciba text-violeta-ciba my-8 uppercase">
              <a href="/sobrenosotros">Sobre nosotros</a>
            </li>
            <li className="text-2xl border-b border-verde-ciba text-violeta-ciba my-8 uppercase">
              <a href="/equipo">Equipo</a>
            </li>
            <li className="text-2xl border-b border-verde-ciba text-violeta-ciba my-8 uppercase">
              <a href="/reservar">Reservar</a>
            </li>
            <li>
              <BurgerContact />
            </li>
          </ul>
        </div>
      </section>


      <style>{`
      .hideMenuNav {
        display: none;
      }
      .showMenuNav {
        display: block;
        position: absolute;
        width: 100%;
        height: 100vh;
        top: 0;
        left: 0;
        background: white;
        z-index: 10;
        display: flex;
        flex-direction: column;
        justify-content: space-evenly;
        align-items: center;
      }
    `}</style>
    </div>
  );
}