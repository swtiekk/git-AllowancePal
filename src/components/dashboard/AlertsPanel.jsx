function AlertsPanel({ alerts }) {
  const getSeverityClass = (severity) => {
    switch(severity) {
      case "risk": return "alert-risk";
      case "warning": return "alert-warning";
      case "success": return "alert-success";
      default: return "alert-info";
    }
  };

  return (
    <div className="insights-card alerts-card">
      <div className="card-header">
        <h3>System Insights & Alerts</h3>
        <span className="alert-count">{alerts.length} new</span>
      </div>
      <div className="alert-list">
        {alerts.map((alert, index) => (
          <div key={index} className={`alert-item ${getSeverityClass(alert.severity)}`}>
            <div className="alert-content">
              <span className="alert-message">{alert.message}</span>
              <span className="alert-time">{alert.time}</span>
            </div>
          </div>
        ))}
      </div>
      <button className="view-all-btn">View All Alerts →</button>
    </div>
  );
}

export default AlertsPanel;