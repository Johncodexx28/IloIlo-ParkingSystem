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
    <div className="bg-gray-50 min-h-screen p-6">
      {/* Header */}
      <div className="flex justify-between items-center mb-4">
        <h1 className="text-2xl font-bold ">System Monitoring</h1>
        <div className="flex gap-3 items-center">
          <span className="px-3 py-1 bg-green-500 text-white text-sm rounded-full">
            System Healthy
          </span>
          <button className="px-4 py-2 bg-white border border-gray-300 rounded-md flex items-center gap-2">
            🔄 Refresh
          </button>
        </div>
      </div>

      {/* Top Stats Cards */}
      <div className="grid grid-cols-4 gap-6 mb-8">
        <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-100">
          <div className="flex items-center gap-2 text-gray-600 text-sm mb-2">
            <span>⚡</span>
            <span>System Uptime</span>
          </div>
          <div className="text-3xl font-bold text-gray-900 mb-1">
            {systemStats.uptime}
          </div>
          <div className="text-sm text-gray-500">Last 30 days</div>
        </div>

        <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-100">
          <div className="flex items-center gap-2 text-gray-600 text-sm mb-2">
            <span>💻</span>
            <span>Total Devices</span>
          </div>
          <div className="text-3xl font-bold text-gray-900 mb-1">
            {systemStats.totalDevices}
          </div>
          <div className="text-sm text-gray-500">Across all locations</div>
        </div>

        <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-100">
          <div className="flex items-center gap-2 text-gray-600 text-sm mb-2">
            <span>🟢</span>
            <span>Online Devices</span>
          </div>
          <div className="text-3xl font-bold text-green-600 mb-1">
            {systemStats.onlineDevices}
          </div>
          <div className="text-sm text-gray-500">97.4% operational</div>
        </div>

        <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-100">
          <div className="flex items-center gap-2 text-gray-600 text-sm mb-2">
            <span>🔴</span>
            <span>Offline Devices</span>
          </div>
          <div className="text-3xl font-bold text-red-600 mb-1">
            {systemStats.offlineDevices}
          </div>
          <div className="text-sm text-gray-500">Require attention</div>
        </div>
      </div>

      <div className="grid grid-cols-2 gap-8 mb-8">
        {/* Device Status by Type */}
        <div className="bg-white rounded-lg shadow-sm border border-gray-100">
          <div className="p-6 border-b border-gray-100">
            <h2 className="text-xl font-bold text-gray-900 mb-1">
              Device Status by Type
            </h2>
            <p className="text-gray-600 text-sm">
              Health status of different device categories
            </p>
          </div>
          <div className="p-6">
            {deviceTypes.map((device, index) => (
              <div
                key={index}
                className="flex items-center justify-between py-4 border-b border-gray-50 last:border-b-0"
              >
                <div className="flex items-center gap-3">
                  <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                  <div>
                    <div className="font-medium text-gray-900">
                      {device.name}
                    </div>
                    <div className="text-sm text-gray-500">
                      {device.online} online
                    </div>
                  </div>
                </div>
                <div className="text-right">
                  <div className="font-bold text-gray-900">
                    {device.percentage}
                  </div>
                  <div className="text-sm text-gray-500">{device.status}</div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Network Status */}
        <div className="bg-white rounded-lg shadow-sm border border-gray-100">
          <div className="p-6 border-b border-gray-100">
            <h2 className="text-xl font-bold text-gray-900 mb-1">
              Network Status
            </h2>
            <p className="text-gray-600 text-sm">
              Connectivity and performance metrics
            </p>
          </div>
          <div className="p-6">
            {networkStatus.map((network, index) => (
              <div
                key={index}
                className="flex items-center justify-between py-4 border-b border-gray-50 last:border-b-0"
              >
                <div className="flex items-center gap-3">
                  <div
                    className={`w-2 h-2 rounded-full ${getStatusDot(
                      network.status
                    )}`}
                  ></div>
                  <div>
                    <div className="font-medium text-gray-900">
                      {network.name}
                    </div>
                    <div
                      className={`text-sm ${getStatusColor(network.status)}`}
                    >
                      {network.status}
                    </div>
                  </div>
                </div>
                <div className="text-right">
                  <div className="text-sm text-gray-900">
                    Latency: {network.latency}
                  </div>
                  <div className="text-sm text-gray-500">
                    Bandwidth: {network.bandwidth}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* System Alerts */}
      <div className="bg-white rounded-lg shadow-sm border border-gray-100">
        <div className="p-6 border-b border-gray-100">
          <div className="flex justify-between items-center">
            <div>
              <h2 className="text-xl font-bold text-gray-900 mb-1">
                System Alerts
              </h2>
              <p className="text-gray-600 text-sm">
                Recent alerts and system notifications
              </p>
            </div>
            <div className="flex gap-3 items-center">
              <button className="text-blue-600 text-sm">All Alerts</button>
              <button className="px-3 py-1 bg-red-600 text-white text-sm rounded flex items-center gap-1">
                🔔 Mark All Read
              </button>
            </div>
          </div>
        </div>

        <div className="divide-y divide-gray-100">
          {alerts.map((alert, index) => (
            <div key={index} className="p-6 hover:bg-gray-50">
              <div className="flex items-start justify-between">
                <div className="flex items-start gap-4 flex-1">
                  <div className="text-xl">{getAlertIcon(alert.type)}</div>
                  <div className="flex-1">
                    <div className="flex items-center gap-3 mb-2">
                      <h3 className="font-semibold text-gray-900">
                        {alert.type}
                      </h3>
                      <span
                        className={`px-2 py-0.5 rounded-full text-xs font-medium ${getPriorityColor(
                          alert.priority
                        )}`}
                      >
                        {alert.priority}
                      </span>
                    </div>
                    <p className="text-gray-600 text-sm mb-1">
                      {alert.message}
                    </p>
                    <p className="text-gray-500 text-xs">{alert.location}</p>
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <span
                    className={`px-2 py-1 rounded text-xs font-medium ${getStatusBadge(
                      alert.status
                    )}`}
                  >
                    {alert.status}
                  </span>
                  <div className="text-right">
                    <div className="text-xs text-gray-500">{alert.time}</div>
                  </div>
                  <div className="flex gap-1">
                    <button className="p-1 text-gray-400 hover:text-gray-600">
                      👁
                    </button>
                    <button className="p-1 text-gray-400 hover:text-gray-600">
                      🔄
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
