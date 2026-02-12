function AdminBadge({ role, variant = "default" }) {
  const getVariantStyles = () => {
    switch (variant) {
      case "success":
        return "bg-gradient-to-r from-green-500 to-green-600";
      case "warning":
        return "bg-gradient-to-r from-yellow-500 to-orange-500";
      case "error":
        return "bg-gradient-to-r from-red-500 to-red-600";
      default:
        return "bg-gradient-to-r from-blue-600 to-blue-800";
    }
  };

  return (
    <div className={`admin-badge ${getVariantStyles()}`}>
      <svg className="badge-icon" viewBox="0 0 20 20" fill="currentColor">
        {variant === "default" && (
          <path fillRule="evenodd" d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z" clipRule="evenodd" />
        )}
        {variant === "success" && (
          <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
        )}
        {variant === "warning" && (
          <path fillRule="evenodd" d="M8.257 3.099c.765-1.36 2.722-1.36 3.486 0l5.58 9.92c.75 1.334-.213 2.98-1.742 2.98H4.42c-1.53 0-2.493-1.646-1.743-2.98l5.58-9.92zM11 13a1 1 0 11-2 0 1 1 0 012 0zm-1-8a1 1 0 00-1 1v3a1 1 0 002 0V6a1 1 0 00-1-1z" clipRule="evenodd" />
        )}
      </svg>
      <span className="badge-text">{role}</span>
    </div>
  );
}

export default AdminBadge;