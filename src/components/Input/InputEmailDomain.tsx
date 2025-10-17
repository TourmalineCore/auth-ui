import clsx from 'clsx'
import { DetailedHTMLProps, InputHTMLAttributes } from 'react'

interface InputEmailDomainProps extends DetailedHTMLProps<InputHTMLAttributes<HTMLInputElement>, HTMLInputElement> {
  id: string,
  label: string,
  description?: string,
  type?: 'text',
  iconSrc?: string,
}

export function InputEmailDomain({
  id,
  label,
  className,
  type = `text`,
  iconSrc,
  ...props
}: InputEmailDomainProps) {
  return (
    <div className={clsx(`input`, className)}>
      <label htmlFor={id}
        className="input__label">{label}</label>
      <div className="input__inner">
        {iconSrc && <img className="input__icon"
          src={iconSrc}
          alt="Input Icon" />}
        <input
          id={id}
          type={type}
          className="input__control input--reset"
          {...props}
        />
        <span className="input__domain">@tourmalinecore.com</span>
      </div>

    </div>
  )
}
