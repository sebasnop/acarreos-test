import { useState } from 'react'

import DesktopLandingHeader from '@/components/header/DesktopLandingHeader'
import MobileLandingHeader from '@/components/header/MobileLandingHeader'

import { navRoutes } from '@/constants/navRoutes'

export default function LandingHeader() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  return (
    <header>

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