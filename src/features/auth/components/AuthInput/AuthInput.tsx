import { ChangeEvent, ReactNode } from 'react';

import './AuthInput.scss';

function AuthInput({
  id, value, type, label, icon, placeholder, onChange,
}:{ id: string, value?: string, type?: string, label?: string, icon?: ReactNode, placeholder?: string, onChange: (event: ChangeEvent<HTMLInputElement>) => void }) {
  return (
    <div className="auth-input">
      <div className="auth-input__label">
        {label}
      </div>
      <div className="auth-input__components">
        {icon
            && (
              <div className="auth-input__components-icon">
                {icon}
              </div>
            )}
        <input
          id={id}
          className="auth-input__components-input"
          value={value}
          type={type}
          placeholder={placeholder}
          onChange={onChange}
        />
      </div>
    </div>
  );
}

export default AuthInput;
