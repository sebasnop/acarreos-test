import { Link } from "react-router-dom";

export function HeaderCustom() {

    return (
      <header className="flex flex-row py-2 px-4 justify-between">
        <span>
          <Link to="/">
            Acarreos Appa
          </Link>
        </span>
        <nav>
          <span className="md:hidden">
            Menú
          </span>
          <ul className="hidden md:flex flex-row space-x-4">
            <li>
              <Link to="/about">
                About us
              </Link>
            </li>
            <li>
              Administración
            </li>
            <li>
              Cotizar
            </li>
            <li>
              Transportista
            </li>
            <li>
              Iniciar sesión
            </li>
          </ul>
        </nav>
      </header>
    )
  }
  