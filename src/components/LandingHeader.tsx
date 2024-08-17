import { useState } from 'react'

import type { PageInterface } from 'src/interfaces/interfaces'
import DesktopLandingHeader from './header/DesktopLandingHeader'
import MobileLandingHeader from './header/MobileLandingHeader'

const pages: PageInterface[] = [
  { name: 'Cotizar', href: '/price-quote' },
  { name: 'Localizar', href: '/about' },
  { name: 'Acerca de', href: '/about' },
]

const home: PageInterface = { name: 'Acarreos Appa', href: '/' }
const logIn: PageInterface = { name: 'Iniciar Sesión', href: '/log-in' }

const navRoutes: { [id: string]: PageInterface } = {
  'home': { name: 'Acarreos Appa', href: '/' },
  'price': { name: 'Cotizar', href: '/price-quote' },
  'locate': { name: 'Localizar', href: '/' },
  'enterprise': { name: 'Negocio', href: '/enterprise-login' },
  'carrier': { name: 'Transportista', href: '/carrier-login' },
  'about': { name: 'Acerca de', href: '/about' },
  'login': { name: 'Iniciar Sesión', href: '/login' },
  'signup': { name: 'Registrarse', href: '/signup' },
}

export default function LandingHeader() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  return (
    <header className="bg-white">

      <DesktopLandingHeader
        setMobileMenuOpen={setMobileMenuOpen}
        routes={navRoutes}
      />

      <MobileLandingHeader
        setMobileMenuOpen={setMobileMenuOpen}
        mobileMenuOpen={mobileMenuOpen}
        home={home}
        login={logIn}
        pages={pages}
      />

    </header>
  )
}