'use client'

import { ReactNode } from 'react'

interface FadeInProps {
  children: ReactNode
  delay?: number
}

export function FadeIn({ children, delay = 0 }: FadeInProps) {
  return (
    <div
      style={{
        animation: `fadeIn 0.6s ease-out ${delay}ms both`,
      }}
    >
      {children}
    </div>
  )
}

interface SlideUpProps {
  children: ReactNode
  delay?: number
}

export function SlideUp({ children, delay = 0 }: SlideUpProps) {
  return (
    <div
      style={{
        animation: `slideUp 0.6s ease-out ${delay}ms both`,
      }}
    >
      {children}
    </div>
  )
}

interface ScaleInProps {
  children: ReactNode
  delay?: number
}

export function ScaleIn({ children, delay = 0 }: ScaleInProps) {
  return (
    <div
      style={{
        animation: `scaleIn 0.6s ease-out ${delay}ms both`,
      }}
    >
      {children}
    </div>
  )
}

export function AnimatedText({ children, delay = 0 }: { children: ReactNode; delay?: number }) {
  return (
    <span
      style={{
        animation: `slideUp 0.6s ease-out ${delay}ms both`,
        display: 'inline-block',
      }}
    >
      {children}
    </span>
  )
}
