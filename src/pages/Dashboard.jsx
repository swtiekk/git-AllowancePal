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
import MLPerformancePage from "../components/dashboard/MLPerformancePage";

function Dashboard({ setPage }) {
  const [activeTab, setActiveTab] = useState("overview");
  const [timeRange, setTimeRange] = useState("week");

  // Mock data from system description
  const metrics = [
    { title: "Active Users", value: 324, change: "+12 this week", icon: "👥" },
    { title: "High-Risk Predictions", value: 47, change: "Flagged today", icon: "⚠️", risk: true },
    { title: "Recommendation Accuracy", value: "89%", change: "+3% improvement", icon: "🎯" },
    { title: "AI Confidence Score", value: "92%", change: "Model stable", icon: "🤖" },
  ];

  const spenderCategories = [
    { category: "Balanced Spender", percentage: 52, count: 168, color: "#22C55E" },
    { category: "Frugal Spender", percentage: 23, count: 75, color: "#14B8A6" },
    { category: "Impulsive Spender", percentage: 18, count: 58, color: "#F59E0B" },
    { category: "High-Risk Spender", percentage: 7, count: 23, color: "#EF4444" },
  ];

  const weeklyTrends = [
    { day: "Mon", actual: 145, predicted: 150 },
    { day: "Tue", actual: 162, predicted: 160 },
    { day: "Wed", actual: 158, predicted: 165 },
    { day: "Thu", actual: 178, predicted: 170 },
    { day: "Fri", actual: 195, predicted: 190 },
    { day: "Sat", actual: 210, predicted: 205 },
    { day: "Sun", actual: 125, predicted: 130 },
  ];


  // What students are most likely to spend their money on next,
  // broken down by day / week / month / year predictions (percent chance)
  const mlPredictions = [
    {
      model: "Food & Meals",
      day: 68,
      week: 78,
      month: 84,
      year: 80,
      trackingSpending: true,
    },
    {
      model: "Transport & Commute",
      day: 32,
      week: 54,
      month: 61,
      year: 58,
      trackingSpending: true,
    },
    {
      model: "School Supplies",
      day: 18,
      week: 36,
      month: 49,
      year: 52,
      trackingSpending: true,
    },
    {
      model: "Non-essential / Impulse Buys",
      day: 22,
      week: 39,
      month: 47,
      year: 55,
      trackingSpending: false,
    },
  ];

  const recentAlerts = [
    { message: "12 users predicted to overspend today", severity: "warning", time: "1h ago" },
    { message: "Impulse spending detected in 8 users", severity: "risk", time: "3h ago" },
    { message: "ML retraining completed (91% accuracy)", severity: "success", time: "1d ago" },
    { message: "Weekend overspending risk increased by 18%", severity: "info", time: "2d ago" },
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

  const renderMainContent = () => {
    if (activeTab === "ml") {
      return (
        <MLPerformancePage
          models={mlPredictions}
          timeRange={timeRange}
          onBackToOverview={() => setActiveTab("overview")}
        />
      );
    }

    // Default overview content
    return (
      <>
        {/* Key Metrics Grid */}
        <MetricsGrid metrics={metrics} />

        {/* Charts Row */}
        <div className="charts-row">
          <SpendingChart data={weeklyTrends} />
          <DonutChart data={spenderCategories} />
        </div>

        {/* Second Row - ML Insights & Alerts */}
        <div className="insights-row">
          <MLInsights
            models={mlPredictions}
            timeRange={timeRange}
            onViewDetails={() => setActiveTab("ml")}
          />
          <AlertsPanel alerts={recentAlerts} />
        </div>
      </>
    );
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

        {renderMainContent()}

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