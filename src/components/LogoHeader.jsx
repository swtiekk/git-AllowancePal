function LogoHeader({ subtitle = "Financial Analytics Dashboard", size = "medium" }) {
  const getSizeStyles = () => {
    switch (size) {
      case "small":
        return {
          container: "gap-12 mb-4",
          icon: "w-8 h-8",
          svg: "w-5 h-5",
          title: "text-xl",
          subtitle: "text-xs"
        };
      case "large":
        return {
          container: "gap-20 mb-12",
          icon: "w-16 h-16",
          svg: "w-10 h-10",
          title: "text-3xl",
          subtitle: "text-sm"
        };
      default:
        return {
          container: "gap-16 mb-8",
          icon: "w-12 h-12",
          svg: "w-6 h-6",
          title: "text-2xl",
          subtitle: "text-xs"
        };
    }
  };

  const styles = getSizeStyles();

  return (
    <div className="login-header">
      <div className={`logo-container ${styles.container}`}>
        <div className={`logo-icon ${styles.icon}`}>
          <svg 
            viewBox="0 0 24 24" 
            fill="none" 
            xmlns="http://www.w3.org/2000/svg"
            className={styles.svg}
          >
            <path 
              d="M12 2L2 7L12 12L22 7L12 2Z" 
              stroke="currentColor" 
              strokeWidth="2"
              strokeLinecap="round" 
              strokeLinejoin="round"
            />
            <path 
              d="M2 17L12 22L22 17" 
              stroke="currentColor" 
              strokeWidth="2"
              strokeLinecap="round" 
              strokeLinejoin="round"
            />
            <path 
              d="M2 12L12 17L22 12" 
              stroke="currentColor" 
              strokeWidth="2"
              strokeLinecap="round" 
              strokeLinejoin="round"
            />
          </svg>
        </div>
        <div className="logo-text">
          <h1 className={`font-bold text-blue-900 ${styles.title}`}>
            AllowancePal
          </h1>
          <p className={`logo-subtitle ${styles.subtitle}`}>
            {subtitle}
          </p>
        </div>
      </div>
    </div>
  );
}

export default LogoHeader;