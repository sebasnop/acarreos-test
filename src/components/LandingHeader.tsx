import { useState } from 'react'

import DesktopLandingHeader from './header/DesktopLandingHeader'
import MobileLandingHeader from './header/MobileLandingHeader'

import { navRoutes } from 'src/constants/navRoutes'

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
        routes={navRoutes}
      />

    </header>
  )
}