function InputField({ 
  label, 
  hint, 
  icon, 
  type = "text", 
  value, 
  onChange, 
  placeholder, 
  required = false,
  error = "",
  showPasswordToggle = false,
  onTogglePassword = null,
  name = "",
  minLength
}) {
  
  return (
    <div className="form-group">
      <label htmlFor={name}>
        <span className="label-text">{label}</span>
        {hint && <span className="label-hint">{hint}</span>}
      </label>

      <div className="input-with-icon">
        {icon && (
          <span className="input-icon">
            {icon}
          </span>
        )}
        <input
          id={name}
          name={name}
          type={type}
          value={value}
          onChange={onChange}
          placeholder={placeholder}
          className={`form-input ${error ? 'input-error' : ''}`}
          required={required}
          minLength={minLength}
        />
        
        {showPasswordToggle && (
          <button
            type="button"
            className="password-toggle"
            onClick={onTogglePassword}
            aria-label={type === "password" ? "Show password" : "Hide password"}
          >
            {type === "password" ? (
              <svg viewBox="0 0 20 20" fill="currentColor" width="16" height="16">
                <path d="M10 12a2 2 0 100-4 2 2 0 000 4z" />
                <path fillRule="evenodd" d="M.458 10C1.732 5.943 5.522 3 10 3s8.268 2.943 9.542 7c-1.274 4.057-5.064 7-9.542 7S1.732 14.057.458 10zM14 10a4 4 0 11-8 0 4 4 0 018 0z" clipRule="evenodd" />
              </svg>
            ) : (
              <svg viewBox="0 0 20 20" fill="currentColor" width="16" height="16">
                <path fillRule="evenodd" d="M3.707 2.293a1 1 0 00-1.414 1.414l14 14a1 1 0 001.414-1.414l-1.473-1.473A10.014 10.014 0 0019.542 10C18.268 5.943 14.478 3 10 3a9.958 9.958 0 00-4.512 1.074l-1.78-1.781zm4.261 4.26l1.514 1.515a2.003 2.003 0 012.45 2.45l1.514 1.514a4 4 0 00-5.478-5.478z" clipRule="evenodd" />
              </svg>
            )}
          </button>
        )}
      </div>
      
      {error && <span className="error-message">{error}</span>}
    </div>
  );
}

export default InputField;