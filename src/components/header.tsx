export function HeaderCustom() {

    return (
      <header className="flex flex-row py-2 px-4 justify-between">
        <span>
          Acarreos Appa
        </span>
        <nav>
          <span className="md:hidden">
            Menú
          </span>
          <ul className="hidden md:flex flex-row space-x-4">
            <li>
              About us
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
  