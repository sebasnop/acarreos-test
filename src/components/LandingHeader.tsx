import { useState } from 'react'

import type { PageInterface } from 'src/interfaces/interfaces'
import DesktopLandingHeader from './DesktopLandingHeader'
import MobileLandingHeader from './MobileLandingHeader'

const pages: PageInterface[] = [
  { name: 'Cotizar servicio', href: '/price-quote' },
  { name: 'Negocio', href: '/enterprise' },
  { name: 'Transportista', href: '/carrier' },
  { name: 'Acerca de', href: '/about' },
]

const home: PageInterface = { name: 'Acarreos Appa', href: '/' }
const logIn: PageInterface = { name: 'Iniciar Sesión', href: '/log-in' }

export default function LandingHeader() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  return (
    <header className="bg-white">

      <DesktopLandingHeader
        setMobileMenuOpen={setMobileMenuOpen}
        home={home}
        login={logIn}
        pages={pages}
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