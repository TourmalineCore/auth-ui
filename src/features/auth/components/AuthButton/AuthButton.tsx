import './AuthButton.scss';

function AuthButton({ value }:{ value?: string }) {
  return (
    <div className="auth-button">
      <button className="auth-button__submit" type="submit">
        {value}
      </button>
    </div>
  );
}

export default AuthButton;
