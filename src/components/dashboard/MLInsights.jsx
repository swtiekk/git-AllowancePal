import AdminBadge from "../AdminBadge";

function MLInsights({ models }) {
  const getStatusClass = (status) => {
    return `status-${status.toLowerCase()}`;
  };

  const getAccuracyColor = (accuracy) => {
    if (accuracy >= 90) return '#22C55E'; // Success Green
    if (accuracy >= 85) return '#14B8A6'; // Secondary Teal
    return '#F59E0B'; // Warning Orange
  };

  return (
    <div className="insights-card ml-card">
      <div className="card-header">
        <h3>ML Model Performance</h3>
        <AdminBadge role="Active Models" variant="success" size="small" />
      </div>
      <div className="model-list">
        {models.map((model, index) => (
          <div key={index} className="model-item">
            <div className="model-info">
              <span className="model-name">{model.model}</span>
              <span className={`model-status ${getStatusClass(model.status)}`}>
                {model.status}
              </span>
            </div>
            <div className="model-accuracy">
              <div className="accuracy-bar">
                <div 
                  className="accuracy-fill"
                  style={{ 
                    width: `${model.accuracy}%`,
                    backgroundColor: getAccuracyColor(model.accuracy)
                  }}
                ></div>
              </div>
              <span className="accuracy-value">{model.accuracy}%</span>
            </div>
          </div>
        ))}
      </div>
      <button className="view-details-btn">View Model Details →</button>
    </div>
  );
}

export default MLInsights;