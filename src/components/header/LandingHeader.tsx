import { useState } from 'react'

import DesktopLandingHeader from '@/components/header/DesktopLandingHeader'
import MobileLandingHeader from '@/components/header/MobileLandingHeader'

import { navRoutes } from '@/constants/navRoutes'

/**
 * Componente principal del encabezado que gestiona tanto la vista de escritorio como la vista móvil.
 * 
 * Este componente renderiza los encabezados adecuados dependiendo del tamaño de la pantalla.
 * Utiliza el estado `mobileMenuOpen` para controlar la apertura del menú móvil.
 * 
 * @returns {React.ReactElement} El componente de encabezado principal.
 */
export default function LandingHeader() {
  // Estado que controla la apertura del menú móvil
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  return (
    <header>
      {/* Renderiza el encabezado para la vista de escritorio */}
      <DesktopLandingHeader
        setMobileMenuOpen={setMobileMenuOpen}
        routes={navRoutes}
      />

      {/* Renderiza el encabezado para la vista móvil */}
      <MobileLandingHeader
        setMobileMenuOpen={setMobileMenuOpen}
        mobileMenuOpen={mobileMenuOpen}
        routes={navRoutes}
      />
    </header>
  )
}
