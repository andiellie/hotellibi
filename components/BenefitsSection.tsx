import BenefitsHover from '@/components/BenefitsHover/BenefitsHover'

export default function BenefitsSection() {
  return (
    <section className="px-5 py-24 sm:py-32">
      <div className="mx-auto max-w-[1080px]">
        <h2 className="mb-10 text-center font-display text-3xl font-medium tracking-tight text-on-dark-primary sm:text-4xl">
          Todo lo que HotelliBI mejora en tu hotel.
        </h2>
        <div className="rounded-pillar-card bg-navy-deepest p-4 sm:p-6">
          <BenefitsHover />
        </div>
      </div>
    </section>
  )
}
