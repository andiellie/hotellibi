import { Suspense } from 'react'
import LegalTabs from '@/components/LegalTabs'

export default function LegalPage() {
  return (
    <div className="site-shell min-h-screen">
      <Suspense fallback={null}>
        <LegalTabs />
      </Suspense>
    </div>
  )
}
