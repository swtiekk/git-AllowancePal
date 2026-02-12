import { useState } from "react";
import "../styles/main.css";
import "../styles/dashboard.css";

// Import dashboard components
import Sidebar from "../components/dashboard/Sidebar";
import Header from "../components/dashboard/Header";
import MetricsGrid from "../components/dashboard/MetricsGrid";
import SpendingChart from "../components/dashboard/SpendingChart";
import DonutChart from "../components/dashboard/DonutChart";
import MLInsights from "../components/dashboard/MLInsights";
import AlertsPanel from "../components/dashboard/AlertsPanel";
import QuickAccess from "../components/dashboard/QuickAccess";

function Dashboard({ setPage }) {
  const [activeTab, setActiveTab] = useState("overview");
  const [timeRange, setTimeRange] = useState("week");

  // Mock data from system description
  const metrics = [
    { title: "Total Students", value: 324, change: "+12 this month", icon: "👥" },
    { title: "High-Risk Users", value: 47, change: "14.5% of total", icon: "⚠️", risk: true },
    { title: "Avg Daily Spend", value: "₱182", change: "-3.2% vs last week", icon: "💰" },
    { title: "Allowance Sustainability", value: "68%", change: "+2.1% improvement", icon: "📊" },
  ];

  const spenderCategories = [
    { category: "Balanced Spender", percentage: 52, count: 168, color: "#22C55E" },
    { category: "Frugal Spender", percentage: 23, count: 75, color: "#14B8A6" },
    { category: "Impulsive Spender", percentage: 18, count: 58, color: "#F59E0B" },
    { category: "High-Risk Spender", percentage: 7, count: 23, color: "#EF4444" },
  ];

  const weeklyTrends = [
    { day: "Mon", amount: 145 },
    { day: "Tue", amount: 162 },
    { day: "Wed", amount: 158 },
    { day: "Thu", amount: 178 },
    { day: "Fri", amount: 195 },
    { day: "Sat", amount: 210 },
    { day: "Sun", amount: 125 },
  ];

  const mlPredictions = [
    { model: "Spending Pattern", accuracy: 94, status: "Optimal" },
    { model: "Risk Classification", accuracy: 87, status: "Good" },
    { model: "Allowance Sustainability", accuracy: 91, status: "Optimal" },
    { model: "Cluster Accuracy", accuracy: 82, status: "Retraining" },
  ];

  const recentAlerts = [
    { 
      message: "15% of students may run out of allowance early this week", 
      severity: "warning",
      time: "2h ago"
    },
    { 
      message: "High-risk spending increased by 8% this week", 
      severity: "risk",
      time: "5h ago"
    },
    { 
      message: "ML model retraining completed with 91% accuracy", 
      severity: "success",
      time: "1d ago"
    },
    {
      message: "3 new clusters detected in spending behavior",
      severity: "info",
      time: "2d ago"
    }
  ];

  // Handlers
  const handleLogout = () => {
    setPage("login");
  };

  const handleTabChange = (tabId) => {
    setActiveTab(tabId);
  };

  const handleTimeRangeChange = (range) => {
    setTimeRange(range);
  };

  const handleExport = () => {
    alert("Exporting report...");
  };

  const handleQuickAction = (actionId) => {
    setActiveTab(actionId);
  };

  return (
    <div className="dashboard-wrapper">
      {/* Sidebar Component */}
      <Sidebar 
        activeTab={activeTab}
        onTabChange={handleTabChange}
        onLogout={handleLogout}
      />

      {/* Main Content Area */}
      <div className="dashboard-main">
        {/* Header Component */}
        <Header
          timeRange={timeRange}
          onTimeRangeChange={handleTimeRangeChange}
          onExport={handleExport}
        />

        {/* Key Metrics Grid */}
        <MetricsGrid metrics={metrics} />

        {/* Charts Row */}
        <div className="charts-row">
          <SpendingChart data={weeklyTrends} />
          <DonutChart data={spenderCategories} />
        </div>

        {/* Second Row - ML Insights & Alerts */}
        <div className="insights-row">
          <MLInsights models={mlPredictions} />
          <AlertsPanel alerts={recentAlerts} />
        </div>

        {/* Quick Access Component */}
        <QuickAccess onAction={handleQuickAction} />

        {/* Footer */}
        <footer className="dashboard-footer">
          <p>© 2026 AllowancePal Admin Panel • Data updated in real-time</p>
          <div className="footer-stats">
            <span>Last ML training: 2 hours ago</span>
            <span className="dot">•</span>
            <span>System status: Optimal</span>
            <span className="dot">•</span>
            <span>Active sessions: 1</span>
          </div>
        </footer>
      </div>
    </div>
  );
}

export default Dashboard;