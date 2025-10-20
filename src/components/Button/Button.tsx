import "./Button.scss"

import clsx from 'clsx'
import { DetailedHTMLProps, ButtonHTMLAttributes } from 'react'

interface ButtonProps extends DetailedHTMLProps<ButtonHTMLAttributes<HTMLButtonElement>, HTMLButtonElement> {}

export function Button({
  className,
  children,
  ...props
}: ButtonProps) {
  return (
    <button
      className={clsx(`button`, className)}
      {...props}
    >
      {children}
    </button>
  )
}
