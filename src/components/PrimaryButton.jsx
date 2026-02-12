function PrimaryButton({ 
  isLoading, 
  text, 
  type = "submit", 
  disabled = false,
  onClick,
  variant = "primary",
  fullWidth = true,
  icon = null
}) {
  
  const getVariantStyles = () => {
    switch (variant) {
      case "secondary":
        return "bg-gradient-to-r from-teal-500 to-teal-600 hover:shadow-teal-200";
      case "danger":
        return "bg-gradient-to-r from-red-500 to-red-600 hover:shadow-red-200";
      case "warning":
        return "bg-gradient-to-r from-yellow-500 to-orange-500 hover:shadow-yellow-200";
      default:
        return "bg-gradient-to-r from-blue-600 to-blue-800 hover:shadow-blue-200";
    }
  };

  const getIcon = () => {
    if (icon) return icon;
    
    if (variant === "danger") {
      return (
        <svg className="button-icon" viewBox="0 0 20 20" fill="currentColor">
          <path fillRule="evenodd" d="M9 2a1 1 0 00-.894.553L7.382 4H4a1 1 0 000 2v10a2 2 0 002 2h8a2 2 0 002-2V6a1 1 0 100-2h-3.382l-.724-1.447A1 1 0 0011 2H9zM7 8a1 1 0 012 0v6a1 1 0 11-2 0V8zm5-1a1 1 0 00-1 1v6a1 1 0 102 0V8a1 1 0 00-1-1z" clipRule="evenodd" />
        </svg>
      );
    }
    
    if (variant === "secondary") {
      return (
        <svg className="button-icon" viewBox="0 0 20 20" fill="currentColor">
          <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
        </svg>
      );
    }
    
    return (
      <svg className="button-icon" viewBox="0 0 20 20" fill="currentColor">
        <path fillRule="evenodd" d="M3 3a1 1 0 011 1v12a1 1 0 11-2 0V4a1 1 0 011-1zm7.707 3.293a1 1 0 010 1.414L9.414 9H17a1 1 0 110 2H9.414l1.293 1.293a1 1 0 01-1.414 1.414l-3-3a1 1 0 010-1.414l3-3a1 1 0 011.414 0z" clipRule="evenodd" />
      </svg>
    );
  };

  return (
    <button 
      type={type}
      className={`login-button ${getVariantStyles()} ${fullWidth ? 'w-full' : ''}`}
      disabled={disabled || isLoading}
      onClick={onClick}
    >
      {isLoading ? (
        <>
          <span className="spinner"></span>
          {text === "Login" ? "Authenticating..." : "Processing..."}
        </>
      ) : (
        <>
          {getIcon()}
          {text}
        </>
      )}
    </button>
  );
}

export default PrimaryButton;