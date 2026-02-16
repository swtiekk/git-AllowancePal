import AdminBadge from "../AdminBadge";

const RANGE_LABELS = {
  day: "Day",
  week: "Week",
  month: "Month",
  year: "Year",
};

function MLInsights({ models, timeRange, onViewDetails }) {
  const getBarColor = (value) => {
    if (value >= 70) return "#22C55E"; // Success Green
    if (value >= 40) return "#14B8A6"; // Secondary Teal
    return "#F59E0B"; // Warning Orange
  };

  const getPrimaryValue = (model) => model[timeRange] ?? 0;

  return (
    <div className="insights-card ml-card">
      <div className="card-header">
        <div>
          <h3>Upcoming Spending Tracker</h3>
          <p className="card-subtitle">
            Showing {RANGE_LABELS[timeRange] || "Selected"} spending prediction.
          </p>
        </div>
        <AdminBadge role="Tracks future spends" variant="success" size="small" />
      </div>
      <div className="model-list">
        {models.map((model, index) => (
          <div key={index} className="model-item">
            <div className="model-info">
              <span className="model-name">{model.model}</span>
              <span
                className={`tracking-label ${
                  model.trackingSpending ? "tracking-yes" : "tracking-no"
                }`}
                title={model.trackingSpending ? "Recommended to buy within budget" : "Not recommended - exceeds budget"}
              >
                {model.trackingSpending ? "Yes" : "No"}
              </span>
            </div>
            <div className="model-accuracy">
              <div className="accuracy-bar">
                <div
                  className="accuracy-fill"
                  style={{
                    width: `${getPrimaryValue(model)}%`,
                    backgroundColor: getBarColor(getPrimaryValue(model)),
                  }}
                ></div>
              </div>
              <span className="accuracy-value">
                {getPrimaryValue(model)}%
              </span>
            </div>
          </div>
        ))}
      </div>
      <button
        type="button"
        className="view-details-btn"
        onClick={onViewDetails}
      >
        View Model Details →
      </button>
    </div>
  );
}

export default MLInsights;