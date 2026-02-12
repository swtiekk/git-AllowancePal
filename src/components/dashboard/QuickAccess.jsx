function QuickAccess({ onAction }) {
  const quickItems = [
    {
      id: "users",
      icon: "👥",
      title: "User Management",
      description: "View, edit, and manage student accounts",
      action: "Manage →"
    },
    {
      id: "reports",
      icon: "📊",
      title: "Analytics Reports",
      description: "Export detailed spending analysis",
      action: "Export →"
    },
    {
      id: "ml",
      icon: "🤖",
      title: "ML Predictions",
      description: "View risk scores and clustering results",
      action: "View →"
    }
  ];

  return (
    <div className="quick-access-row">
      {quickItems.map((item) => (
        <div key={item.id} className="quick-card">
          <span className="quick-icon">{item.icon}</span>
          <div className="quick-info">
            <h4>{item.title}</h4>
            <p>{item.description}</p>
          </div>
          <button 
            className="quick-action"
            onClick={() => onAction(item.id)}
          >
            {item.action}
          </button>
        </div>
      ))}
    </div>
  );
}

export default QuickAccess;