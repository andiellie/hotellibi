'use client'

import { cn } from '@/lib/utils'

type CommonProps = {
  children: React.ReactNode
  className?: string
}

type LinkProps = CommonProps &
  React.AnchorHTMLAttributes<HTMLAnchorElement> & { href: string }

type ButtonProps = CommonProps &
  React.ButtonHTMLAttributes<HTMLButtonElement> & { href?: undefined }

const baseClasses =
  'group relative inline-flex items-center justify-center rounded-full px-10 py-4 font-sans text-base font-bold text-white transition hover:scale-105'

function GlowLayers() {
  return (
    <>
      <span className="absolute inset-0 overflow-hidden rounded-full">
        <span
          className="absolute inset-[-150%] animate-[spin_4s_linear_infinite] motion-reduce:animate-none"
          style={{
            background:
              'conic-gradient(from 0deg, transparent 0deg, var(--color-brand-blue) 55deg, #ffffff 90deg, var(--color-brand-blue) 125deg, transparent 190deg, #ff7e15 300deg, transparent 345deg)',
          }}
        />
      </span>
      <span className="absolute inset-[2px] rounded-full bg-near-black" />
    </>
  )
}

export default function LinearButton({ children, className, href, ...props }: LinkProps | ButtonProps) {
  if (href) {
    return (
      <a href={href} className={cn(baseClasses, className)} {...(props as React.AnchorHTMLAttributes<HTMLAnchorElement>)}>
        <GlowLayers />
        <span className="relative z-10">{children}</span>
      </a>
    )
  }

  return (
    <button className={cn(baseClasses, className)} {...(props as React.ButtonHTMLAttributes<HTMLButtonElement>)}>
      <GlowLayers />
      <span className="relative z-10">{children}</span>
    </button>
  )
}
