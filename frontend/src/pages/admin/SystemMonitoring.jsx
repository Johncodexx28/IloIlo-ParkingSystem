import React, { useState } from "react";

function SystemMonitoring() {
  const [selectedFilter, setSelectedFilter] = useState("All Alerts");

  // system stats data
  const systemStats = {
    uptime: "99.8%",
    totalDevices: "156",
    onlineDevices: "152",
    offlineDevices: "4",
  };

  // device status data
  const deviceTypes = [
    {
      name: "Parking Sensors",
      online: "87/89",
      percentage: "97.8%",
      status: "Good",
    },
    {
      name: "Payment Terminals",
      online: "24/24",
      percentage: "100.0%",
      status: "Excellent",
    },
    {
      name: "Entry/Exit Gates",
      online: "17/18",
      percentage: "94.4%",
      status: "Good",
    },
    {
      name: "CCTV Cameras",
      online: "24/25",
      percentage: "96.0%",
      status: "Good",
    },
  ];

  // network status data
  const networkStatus = [
    {
      name: "SM City Iloilo",
      status: "Warning",
      latency: "12ms",
      bandwidth: "95%",
    },
    {
      name: "Robinsons Place",
      status: "Online",
      latency: "15ms",
      bandwidth: "95%",
    },
    {
      name: "Megaworld Center",
      status: "Online",
      latency: "8ms",
      bandwidth: "99%",
    },
    {
      name: "Ayala Malls",
      status: "Warning",
      latency: "45ms",
      bandwidth: "87%",
    },
  ];

  // alerts data
  const alerts = [
    {
      type: "Parking Sensor Malfunction",
      message: "Sensor PS-A-025 at SM City Iloilo not responding",
      location: "SM City Iloilo - Lot A",
      priority: "high",
      status: "Active",
      time: "1/15/2024, 2:30:00 PM",
    },
    {
      type: "High Occupancy Alert",
      message: "Robinsons Place reaching 95% capacity",
      location: "Robinsons Place - Main Lot",
      priority: "medium",
      status: "Acknowledged",
      time: "1/15/2024, 2:15:00 PM",
    },
    {
      type: "Scheduled Maintenance",
      message: "Payment terminal PT-003 scheduled for maintenance",
      location: "Megaworld Center - Level 2",
      priority: "low",
      status: "Resolved",
      time: "1/15/2024, 1:45:00 PM",
    },
    {
      type: "Gate Controller Offline",
      message: "Entry gate GC-B-01 connection lost",
      location: "Ayala Malls - North Entrance",
      priority: "high",
      status: "Active",
      time: "1/15/2024, 12:30:00 PM",
    },
  ];

  function getStatusColor(status) {
    if (status === "Online") return "text-green-600";
    if (status === "Warning") return "text-yellow-600";
    if (status === "Offline") return "text-red-600";
  }

  function getStatusDot(status) {
    if (status === "Online") return "bg-green-500";
    if (status === "Warning") return "bg-yellow-500";
    if (status === "Offline") return "bg-red-500";
  }

  function getPriorityColor(priority) {
    if (priority === "high") return "bg-red-100 text-red-800";
    if (priority === "medium") return "bg-yellow-100 text-yellow-800";
    if (priority === "low") return "bg-blue-100 text-blue-800";
  }

  function getStatusBadge(status) {
    if (status === "Active") return "bg-red-500 text-white";
    if (status === "Acknowledged") return "bg-yellow-500 text-white";
    if (status === "Resolved") return "bg-green-500 text-white";
  }

  function getAlertIcon(type) {
    if (type.includes("Malfunction") || type.includes("Offline")) return "🔴";
    if (type.includes("Occupancy") || type.includes("Warning")) return "🟡";
    if (type.includes("Maintenance")) return "🔵";
    return "⚠️";
  }

  function handleFilterChange(event) {
    setSelectedFilter(event.target.value);
  }

  return (
    <div className="bg-gray-50 min-h-screen p-3 sm:p-4 lg:p-6">
      {/* Header */}
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-4 gap-3">
        <h1 className="text-xl sm:text-2xl font-bold">System Monitoring</h1>
        <div className="flex flex-col sm:flex-row gap-2 sm:gap-3 items-start sm:items-center w-full sm:w-auto">
          <span className="px-3 py-1 bg-green-500 text-white text-sm rounded-full">
            System Healthy
          </span>
          <button className="px-4 py-2 bg-white border border-gray-300 rounded-md flex items-center gap-2 text-sm">
            🔄 Refresh
          </button>
        </div>
      </div>

      {/* Top Stats Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4 lg:gap-6 mb-6 lg:mb-8">
        <div className="bg-white p-4 sm:p-6 rounded-lg shadow-sm border border-gray-100">
          <div className="flex items-center gap-2 text-gray-600 text-sm mb-2">
            <span>⚡</span>
            <span>System Uptime</span>
          </div>
          <div className="text-2xl sm:text-3xl font-bold text-gray-900 mb-1">
            {systemStats.uptime}
          </div>
          <div className="text-sm text-gray-500">Last 30 days</div>
        </div>

        <div className="bg-white p-4 sm:p-6 rounded-lg shadow-sm border border-gray-100">
          <div className="flex items-center gap-2 text-gray-600 text-sm mb-2">
            <span>💻</span>
            <span>Total Devices</span>
          </div>
          <div className="text-2xl sm:text-3xl font-bold text-gray-900 mb-1">
            {systemStats.totalDevices}
          </div>
          <div className="text-sm text-gray-500">Across all locations</div>
        </div>

        <div className="bg-white p-4 sm:p-6 rounded-lg shadow-sm border border-gray-100">
          <div className="flex items-center gap-2 text-gray-600 text-sm mb-2">
            <span>🟢</span>
            <span>Online Devices</span>
          </div>
          <div className="text-2xl sm:text-3xl font-bold text-green-600 mb-1">
            {systemStats.onlineDevices}
          </div>
          <div className="text-sm text-gray-500">97.4% operational</div>
        </div>

        <div className="bg-white p-4 sm:p-6 rounded-lg shadow-sm border border-gray-100">
          <div className="flex items-center gap-2 text-gray-600 text-sm mb-2">
            <span>🔴</span>
            <span>Offline Devices</span>
          </div>
          <div className="text-2xl sm:text-3xl font-bold text-red-600 mb-1">
            {systemStats.offlineDevices}
          </div>
          <div className="text-sm text-gray-500">Require attention</div>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-8 mb-6 lg:mb-8">
        {/* Device Status by Type */}
        <div className="bg-white rounded-lg shadow-sm border border-gray-100">
          <div className="p-4 sm:p-6 border-b border-gray-100">
            <h2 className="text-lg sm:text-xl font-bold text-gray-900 mb-1">
              Device Status by Type
            </h2>
            <p className="text-gray-600 text-sm">
              Health status of different device categories
            </p>
          </div>
          <div className="p-4 sm:p-6">
            {deviceTypes.map((device, index) => (
              <div
                key={index}
                className="flex flex-col sm:flex-row sm:items-center sm:justify-between py-3 sm:py-4 border-b border-gray-50 last:border-b-0 gap-2 sm:gap-0"
              >
                <div className="flex items-center gap-3">
                  <div className="w-2 h-2 bg-green-500 rounded-full flex-shrink-0"></div>
                  <div className="min-w-0">
                    <div className="font-medium text-gray-900 text-sm sm:text-base">
                      {device.name}
                    </div>
                    <div className="text-xs sm:text-sm text-gray-500">
                      {device.online} online
                    </div>
                  </div>
                </div>
                <div className="text-left sm:text-right flex-shrink-0 ml-5 sm:ml-4">
                  <div className="font-bold text-gray-900 text-sm sm:text-base">
                    {device.percentage}
                  </div>
                  <div className="text-xs sm:text-sm text-gray-500">{device.status}</div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Network Status */}
        <div className="bg-white rounded-lg shadow-sm border border-gray-100">
          <div className="p-4 sm:p-6 border-b border-gray-100">
            <h2 className="text-lg sm:text-xl font-bold text-gray-900 mb-1">
              Network Status
            </h2>
            <p className="text-gray-600 text-sm">
              Connectivity and performance metrics
            </p>
          </div>
          <div className="p-4 sm:p-6">
            {networkStatus.map((network, index) => (
              <div
                key={index}
                className="flex flex-col sm:flex-row sm:items-center sm:justify-between py-3 sm:py-4 border-b border-gray-50 last:border-b-0 gap-2 sm:gap-0"
              >
                <div className="flex items-center gap-3">
                  <div
                    className={`w-2 h-2 rounded-full flex-shrink-0 ${getStatusDot(
                      network.status
                    )}`}
                  ></div>
                  <div className="min-w-0">
                    <div className="font-medium text-gray-900 text-sm sm:text-base">
                      {network.name}
                    </div>
                    <div
                      className={`text-xs sm:text-sm ${getStatusColor(network.status)}`}
                    >
                      {network.status}
                    </div>
                  </div>
                </div>
                <div className="text-left sm:text-right flex-shrink-0 ml-5 sm:ml-4">
                  <div className="text-xs sm:text-sm text-gray-900">
                    Latency: {network.latency}
                  </div>
                  <div className="text-xs sm:text-sm text-gray-500">
                    Bandwidth: {network.bandwidth}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* System Alerts */}
      {/* System Alerts */}
      <div className="bg-white rounded-lg shadow-sm border border-gray-100">
        <div className="p-3 sm:p-4 lg:p-6 border-b border-gray-100">
          <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-3 sm:gap-4">
            <div className="flex-1">
              <h2 className="text-base sm:text-lg lg:text-xl font-bold text-gray-900 mb-1">
                System Alerts
              </h2>
              <p className="text-gray-600 text-xs sm:text-sm">
                Recent alerts and system notifications
              </p>
            </div>
            <div className="flex flex-col xs:flex-row sm:flex-row gap-2 sm:gap-3 items-stretch xs:items-center w-full xs:w-auto sm:w-auto">
              <select className="px-2 sm:px-3 py-2 border border-gray-300 rounded-md text-xs sm:text-sm bg-white min-w-0 flex-1 xs:flex-none">
                <option>All Alerts</option>
                <option>Active</option>
                <option>Acknowledged</option>
                <option>Resolved</option>
              </select>
              <button className="px-2 sm:px-3 py-2 bg-blue-600 text-white text-xs sm:text-sm rounded-md flex items-center justify-center gap-1 hover:bg-blue-700 transition-colors whitespace-nowrap">
                <span className="text-xs sm:text-sm">🔔</span>
                <span className="hidden xs:inline">Mark All Read</span>
                <span className="xs:hidden">Mark Read</span>
              </button>
            </div>
          </div>
        </div>

        <div className="divide-y divide-gray-100">
          {alerts.map((alert, index) => (
            <div key={index} className="p-3 sm:p-4 lg:p-6 hover:bg-gray-50 transition-colors">
              {/* Mobile Layout (< sm) */}
              <div className="sm:hidden">
                <div className="flex items-start gap-3 mb-3">
                  <div className="text-base flex-shrink-0 mt-0.5">{getAlertIcon(alert.type)}</div>
                  <div className="flex-1 min-w-0">
                    <h3 className="font-semibold text-gray-900 text-sm mb-1 line-clamp-2">
                      {alert.type}
                    </h3>
                    <p className="text-gray-600 text-xs mb-1 line-clamp-2">
                      {alert.message}
                    </p>
                    <p className="text-gray-500 text-xs mb-2">{alert.location}</p>
                  </div>
                </div>
                
                <div className="flex items-center justify-between gap-2 mb-2">
                  <div className="flex items-center gap-1.5 flex-wrap">
                    <span
                      className={`px-1.5 py-0.5 rounded text-xs font-medium ${getStatusBadge(
                        alert.status
                      )}`}
                    >
                      {alert.status}
                    </span>
                    <span
                      className={`px-1.5 py-0.5 rounded text-xs font-medium ${getPriorityColor(
                        alert.priority
                      )}`}
                    >
                      {alert.priority}
                    </span>
                  </div>
                  <div className="flex items-center gap-1">
                    <button className="p-1.5 text-gray-400 hover:text-gray-600 hover:bg-gray-100 rounded transition-colors" title="View details">
                      <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                      </svg>
                    </button>
                    <button className="p-1.5 text-gray-400 hover:text-gray-600 hover:bg-gray-100 rounded transition-colors" title="Refresh">
                      <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
                      </svg>
                    </button>
                  </div>
                </div>
                
                <div className="text-xs text-gray-500">{alert.time}</div>
              </div>

              {/* Tablet & Desktop Layout (>= sm) */}
              <div className="hidden sm:flex items-start justify-between gap-3 lg:gap-4">
                {/* Left side - Icon and content */}
                <div className="flex items-start gap-3 lg:gap-4 flex-1 min-w-0">
                  <div className="text-lg lg:text-xl flex-shrink-0 mt-1">{getAlertIcon(alert.type)}</div>
                  <div className="flex-1 min-w-0">
                    <h3 className="font-semibold text-gray-900 text-sm lg:text-base mb-2">
                      {alert.type}
                    </h3>
                    <p className="text-gray-600 text-sm mb-2">
                      {alert.message}
                    </p>
                    <p className="text-gray-500 text-sm mb-3">{alert.location}</p>
                    <div className="text-sm text-gray-500">{alert.time}</div>
                  </div>
                </div>

                {/* Right side - Status badges and actions */}
                <div className="flex flex-col items-end gap-3 flex-shrink-0">
                  <div className="flex items-center gap-2">
                    <span
                      className={`px-2 py-1 rounded-md text-xs font-medium ${getStatusBadge(
                        alert.status
                      )}`}
                    >
                      {alert.status}
                    </span>
                    <span
                      className={`px-2 py-1 rounded-md text-xs font-medium ${getPriorityColor(
                        alert.priority
                      )}`}
                    >
                      {alert.priority}
                    </span>
                  </div>
                  <div className="flex items-center gap-1">
                    <button className="p-2 text-gray-400 hover:text-gray-600 hover:bg-gray-100 rounded-md transition-colors" title="View details">
                      <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                      </svg>
                    </button>
                    <button className="p-2 text-gray-400 hover:text-gray-600 hover:bg-gray-100 rounded-md transition-colors" title="Refresh">
                      <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
                      </svg>
                    </button>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default SystemMonitoring;