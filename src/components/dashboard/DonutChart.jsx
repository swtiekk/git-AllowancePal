function DonutChart({ data }) {
  return (
    <div className="chart-card">
      <div className="chart-header">
        <h3>Spender Categories</h3>
        <span className="chart-subtitle">Risk distribution</span>
      </div>
      <div className="donut-chart-container">
        <div className="donut-chart">
          <svg viewBox="0 0 100 100">
            <circle cx="50" cy="50" r="40" fill="none" stroke="#E5E7EB" strokeWidth="12" />
            {data.reduce((acc, item, index) => {
              let startAngle = acc;
              let endAngle = startAngle + (item.percentage * 3.6);
              acc = endAngle;
              
              const startRad = (startAngle - 90) * Math.PI / 180;
              const endRad = (endAngle - 90) * Math.PI / 180;
              
              const x1 = 50 + 40 * Math.cos(startRad);
              const y1 = 50 + 40 * Math.sin(startRad);
              const x2 = 50 + 40 * Math.cos(endRad);
              const y2 = 50 + 40 * Math.sin(endRad);
              
              const largeArcFlag = item.percentage > 50 ? 1 : 0;
              
              return (
                <path
                  key={index}
                  d={`M 50 50 L ${x1} ${y1} A 40 40 0 ${largeArcFlag} 1 ${x2} ${y2} Z`}
                  fill={item.color}
                  opacity="0.9"
                />
              );
            }, 0)}
            <circle cx="50" cy="50" r="25" fill="white" />
          </svg>
        </div>
        <div className="category-legend">
          {data.map((item, index) => (
            <div key={index} className="legend-item">
              <span className="legend-color" style={{ backgroundColor: item.color }}></span>
              <span className="legend-label">{item.category}</span>
              <span className="legend-value">{item.percentage}%</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default DonutChart;