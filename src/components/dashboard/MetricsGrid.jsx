function MetricsGrid({ metrics }) {
  return (
    <div className="metrics-grid">
      {metrics.map((metric, index) => (
        <div key={index} className={`metric-card ${metric.risk ? 'metric-risk' : ''}`}>
          <div className="metric-header">
            <span className="metric-icon">{metric.icon}</span>
            <span className="metric-title">{metric.title}</span>
          </div>
          <div className="metric-value">{metric.value}</div>
          <div className={`metric-change ${metric.change.includes('+') ? 'positive' : 'negative'}`}>
            {metric.change}
          </div>
        </div>
      ))}
    </div>
  );
}

export default MetricsGrid;