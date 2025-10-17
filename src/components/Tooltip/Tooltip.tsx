import "./Tooltip.scss"

import { ReactNode } from 'react'
import { clsx } from 'clsx'

export function Tooltip({
  className,
  children,
}: {
  className?: string,
  children: ReactNode,
}) {
  return (
    <div className={clsx(`tooltip`, className)}>
      {children}
    </div>
  )
}