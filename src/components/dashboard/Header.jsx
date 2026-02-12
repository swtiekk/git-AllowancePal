function Header({ timeRange, onTimeRangeChange, onExport }) {
  const formatDate = () => {
    return new Date().toLocaleDateString('en-US', { 
      weekday: 'long', 
      year: 'numeric', 
      month: 'long', 
      day: 'numeric' 
    });
  };

  const timeRanges = [
    { id: "day", label: "Day" },
    { id: "week", label: "Week" },
    { id: "month", label: "Month" },
    { id: "year", label: "Year" }
  ];

  return (
    <div className="dashboard-header">
      <div className="header-left">
        <h1>Welcome back, Admin</h1>
        <p className="header-date">{formatDate()}</p>
      </div>
      <div className="header-right">
        <div className="time-range-selector">
          {timeRanges.map((range) => (
            <button
              key={range.id}
              className={`time-btn ${timeRange === range.id ? "active" : ""}`}
              onClick={() => onTimeRangeChange(range.id)}
            >
              {range.label}
            </button>
          ))}
        </div>
        <button className="export-btn" onClick={onExport}>
          <span className="nav-icon">📥</span>
          Export Report
        </button>
      </div>
    </div>
  );
}

export default Header;