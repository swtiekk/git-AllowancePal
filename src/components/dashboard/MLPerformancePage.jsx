import AdminBadge from "../AdminBadge";
import "../../styles/dashboard.css";

const RANGE_LABELS = {
  day: "Day",
  week: "Week",
  month: "Month",
  year: "Year",
};

function MLPerformancePage({ models = [], timeRange = "week", onBackToOverview }) {
  const getBarColor = (value) => {
    if (value >= 70) return "#22C55E"; // Success Green
    if (value >= 40) return "#14B8A6"; // Secondary Teal
    return "#F59E0B"; // Warning Orange
  };

  const getPrimaryValue = (model) => {
    if (!model || !timeRange) return 0;
    return model[timeRange] ?? 0;
  };

  if (!models || models.length === 0) {
    return (
      <section className="ml-performance-page">
        <div className="ml-performance-header">
          <div>
            <h2>Upcoming Spending Tracker</h2>
            <p className="ml-performance-subtitle">No data available</p>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section className="ml-performance-page">
      <div className="ml-performance-header">
        <div>
          <h2>Upcoming Spending Tracker</h2>
          <p className="ml-performance-subtitle">
            See which things students are most likely to spend their allowance
            on next for the selected period (
            {RANGE_LABELS[timeRange] || "Selected"}
            ).
          </p>
        </div>
        <div className="ml-header-actions">
          <AdminBadge role="Tracks future spends" variant="success" />
          {onBackToOverview && (
            <button
              type="button"
              className="ml-back-button"
              onClick={onBackToOverview}
            >
              ← Back to Overview
            </button>
          )}
        </div>
      </div>

      <div className="insights-card ml-performance-card">
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
      </div>
    </section>
  );
}

export default MLPerformancePage;

