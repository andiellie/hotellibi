import { Suspense } from 'react'
import LegalTabs from './_components/LegalTabs'

export default function LegalPage() {
  return (
    <div className="site-shell min-h-screen">
      <Suspense fallback={null}>
        <LegalTabs />
      </Suspense>
    </div>
  )
}
