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
  'glow-button inline-flex items-center justify-center rounded-full px-10 py-4 font-sans text-base font-bold text-white transition hover:scale-105'

export default function LinearButton({ children, className, href, ...props }: LinkProps | ButtonProps) {
  if (href) {
    return (
      <a href={href} className={cn(baseClasses, className)} {...(props as React.AnchorHTMLAttributes<HTMLAnchorElement>)}>
        {children}
      </a>
    )
  }

  return (
    <button className={cn(baseClasses, className)} {...(props as React.ButtonHTMLAttributes<HTMLButtonElement>)}>
      {children}
    </button>
  )
}
