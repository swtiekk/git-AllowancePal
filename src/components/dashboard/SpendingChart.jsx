function SpendingChart({ data }) {
  const maxAmount = Math.max(...data.map(d => d.amount));

  const getBarColor = (amount) => {
    if (amount > 180) return '#EF4444'; // Risk Red
    if (amount > 160) return '#F59E0B'; // Warning Orange
    return '#14B8A6'; // Secondary Teal
  };

  return (
    <div className="chart-card">
      <div className="chart-header">
        <h3>Weekly Spending Trends</h3>
        <span className="chart-subtitle">Average daily spend (₱)</span>
      </div>
      <div className="bar-chart">
        {data.map((day, index) => (
          <div key={index} className="chart-bar-container">
            <div 
              className="chart-bar"
              style={{ 
                height: `${(day.amount / maxAmount) * 120}px`,
                backgroundColor: getBarColor(day.amount)
              }}
            >
              <span className="bar-value">{day.amount}</span>
            </div>
            <span className="bar-label">{day.day}</span>
          </div>
        ))}
      </div>
    </div>
  );
}

export default SpendingChart;