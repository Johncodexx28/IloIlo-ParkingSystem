import React, { useState } from 'react';
import { Settings, CreditCard, Bell, Shield, Server, Car} from 'lucide-react';

const AdminSettings = () => {
  const [activeTab, setActiveTab] = useState('General');
  const [settings, setSettings] = useState({
    // General Settings
    systemName: 'Iloilo ParkLink',
    timezone: 'Asia/Manila',
    currency: 'Philippine Peso (₱)',
    defaultLanguage: 'English',
    companyName: 'ParkLink Technologies Inc.',
    contactEmail: 'admin@parklink.ph',
    supportPhone: '+63 33 123 4567',
    website: 'https://parklink.ph',
    
    // Parking Configuration
    defaultHourlyRate: 50,
    maxReservationHours: 24,
    gracePeriod: 15,
    maxDwellTime: 12,
    allowAdvancedReservations: true,
    autoCancelExpiredReservations: true,
    requirePaymentOnReservation: false,
    
    // Payment Configuration
    creditDebitCards: true,
    payMaya: true,
    gCash: true,
    cashPayments: false,
    processingFee: 2.5,
    paymentTimeout: 5,
    refundPolicyDays: 7,
    minimumPaymentAmount: 20,
    
    // Notifications
    systemAlerts: true,
    highOccupancyAlerts: true,
    paymentFailures: true,
    dailyReports: false,
    reservationConfirmations: true,
    paymentReceipts: true,
    parkingReminders: true,
    
    // Security
    twoFactorAuth: true,
    sessionTimeout: true,
    loginAuditLogs: true,
    sessionTimeoutMinutes: 30,
    minPasswordLength: 8,
    maxFailedLoginAttempts: 5,
    accountLockoutDuration: 15,
    
    // System
    backupFrequency: 'Daily',
    backupRetention: 30,
    automaticUpdates: true,
    healthMonitoring: true,
    performanceAnalytics: true
  });

const PesoIcon = (props) => (
  <span {...props} className="text-lg font-bold">₱</span>
);

const tabs = [
  { id: 'General', label: 'General', icon: Settings },
  { id: 'Parking', label: 'Parking', icon: Car },
  { id: 'Payments', label: 'Payments', icon: PesoIcon },
  { id: 'Notifications', label: 'Notifications', icon: Bell },
  { id: 'Security', label: 'Security', icon: Shield },
  { id: 'System', label: 'System', icon: Server }
];


  const handleInputChange = (field, value) => {
    setSettings(prev => ({ ...prev, [field]: value }));
  };

  const handleToggle = (field) => {
    setSettings(prev => ({ ...prev, [field]: !prev[field] }));
  };

  const Toggle = ({ enabled, onToggle }) => (
    <button
      onClick={onToggle}
      className={`relative inline-flex h-6 w-11 items-center rounded-full transition-colors ${
        enabled ? 'bg-black' : 'bg-gray-300'
      }`}
    >
      <span
        className={`inline-block h-4 w-4 transform rounded-full bg-white transition-transform ${
          enabled ? 'translate-x-6' : 'translate-x-1'
        }`}
      />
    </button>
  );

  const renderGeneralTab = () => (
    <div className="space-y-8">
      <div>
        <h3 className="text-lg font-medium text-gray-900 mb-1">General Settings</h3>
        <p className="text-sm text-gray-500 mb-6">Basic system configuration</p>
        
        <div className="grid grid-cols-2 gap-6">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">System Name</label>
            <input
              type="text"
              value={settings.systemName}
              onChange={(e) => handleInputChange('systemName', e.target.value)}
              className="w-full px-3 py-2 border border-gray-300 rounded-md bg-gray-50"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">Timezone</label>
            <select
              value={settings.timezone}
              onChange={(e) => handleInputChange('timezone', e.target.value)}
              className="w-full px-3 py-2 border border-gray-300 rounded-md bg-gray-50"
            >
              <option>Asia/Manila</option>
            </select>
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">Currency</label>
            <select
              value={settings.currency}
              onChange={(e) => handleInputChange('currency', e.target.value)}
              className="w-full px-3 py-2 border border-gray-300 rounded-md bg-gray-50"
            >
              <option>Philippine Peso (₱)</option>
            </select>
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">Default Language</label>
            <select
              value={settings.defaultLanguage}
              onChange={(e) => handleInputChange('defaultLanguage', e.target.value)}
              className="w-full px-3 py-2 border border-gray-300 rounded-md bg-gray-50"
            >
              <option>English</option>
            </select>
          </div>
        </div>
      </div>

      <div>
        <h3 className="text-lg font-medium text-gray-900 mb-6">Business Information</h3>
        <div className="grid grid-cols-2 gap-6">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">Company Name</label>
            <input
              type="text"
              value={settings.companyName}
              onChange={(e) => handleInputChange('companyName', e.target.value)}
              className="w-full px-3 py-2 border border-gray-300 rounded-md bg-gray-50"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">Contact Email</label>
            <input
              type="email"
              value={settings.contactEmail}
              onChange={(e) => handleInputChange('contactEmail', e.target.value)}
              className="w-full px-3 py-2 border border-gray-300 rounded-md bg-gray-50"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">Support Phone</label>
            <input
              type="text"
              value={settings.supportPhone}
              onChange={(e) => handleInputChange('supportPhone', e.target.value)}
              className="w-full px-3 py-2 border border-gray-300 rounded-md bg-gray-50"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">Website</label>
            <input
              type="url"
              value={settings.website}
              onChange={(e) => handleInputChange('website', e.target.value)}
              className="w-full px-3 py-2 border border-gray-300 rounded-md bg-gray-50"
            />
          </div>
        </div>
      </div>
    </div>
  );

  const renderParkingTab = () => (
    <div className="space-y-8">
      <div>
        <h3 className="text-lg font-medium text-gray-900 mb-1">Parking Configuration</h3>
        <p className="text-sm text-gray-500 mb-6">Parking lot and pricing settings</p>
        
        <div className="grid grid-cols-2 gap-6">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">Default Hourly Rate</label>
            <input
              type="number"
              value={settings.defaultHourlyRate}
              onChange={(e) => handleInputChange('defaultHourlyRate', parseInt(e.target.value))}
              className="w-full px-3 py-2 border border-gray-300 rounded-md bg-gray-50"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">Max Reservation Hours</label>
            <input
              type="number"
              value={settings.maxReservationHours}
              onChange={(e) => handleInputChange('maxReservationHours', parseInt(e.target.value))}
              className="w-full px-3 py-2 border border-gray-300 rounded-md bg-gray-50"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">Grace Period (minutes)</label>
            <input
              type="number"
              value={settings.gracePeriod}
              onChange={(e) => handleInputChange('gracePeriod', parseInt(e.target.value))}
              className="w-full px-3 py-2 border border-gray-300 rounded-md bg-gray-50"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">Max Dwell Time (hours)</label>
            <input
              type="number"
              value={settings.maxDwellTime}
              onChange={(e) => handleInputChange('maxDwellTime', parseInt(e.target.value))}
              className="w-full px-3 py-2 border border-gray-300 rounded-md bg-gray-50"
            />
          </div>
        </div>
      </div>

      <div>
        <h3 className="text-lg font-medium text-gray-900 mb-6">Reservation Settings</h3>
        <div className="space-y-4">
          <div className="flex items-center justify-between">
            <div>
              <div className="font-medium text-gray-900">Allow Advanced Reservations</div>
              <div className="text-sm text-gray-500">Enable users to reserve spots in advance</div>
            </div>
            <Toggle 
              enabled={settings.allowAdvancedReservations} 
              onToggle={() => handleToggle('allowAdvancedReservations')} 
            />
          </div>
          <div className="flex items-center justify-between">
            <div>
              <div className="font-medium text-gray-900">Auto-Cancel Expired Reservations</div>
              <div className="text-sm text-gray-500">Automatically cancel reservations after grace period</div>
            </div>
            <Toggle 
              enabled={settings.autoCancelExpiredReservations} 
              onToggle={() => handleToggle('autoCancelExpiredReservations')} 
            />
          </div>
          <div className="flex items-center justify-between">
            <div>
              <div className="font-medium text-gray-900">Require Payment on Reservation</div>
              <div className="text-sm text-gray-500">Charge users when they make a reservation</div>
            </div>
            <Toggle 
              enabled={settings.requirePaymentOnReservation} 
              onToggle={() => handleToggle('requirePaymentOnReservation')} 
            />
          </div>
        </div>
      </div>
    </div>
  );

  const renderPaymentsTab = () => (
    <div className="space-y-8">
      <div>
        <h3 className="text-lg font-medium text-gray-900 mb-1">Payment Configuration</h3>
        <p className="text-sm text-gray-500 mb-6">Payment methods and processing settings</p>
        
        <h4 className="font-medium text-gray-900 mb-4">Accepted Payment Methods</h4>
        <div className="space-y-4 mb-8">
          <div className="grid grid-cols-2 gap-4">
            <div className="flex items-center justify-between">
              <div className="flex items-center">
                <CreditCard className="w-5 h-5 mr-2 text-gray-500" />
                <span className="font-medium">Credit/Debit Cards</span>
              </div>
              <Toggle 
                enabled={settings.creditDebitCards} 
                onToggle={() => handleToggle('creditDebitCards')} 
              />
            </div>
            <div className="flex items-center justify-between">
              <div className="flex items-center">
                <div className="w-5 h-5 mr-2 text-gray-500 flex items-center justify-center bg-blue-100 rounded text-xs font-bold">G</div>
                <span className="font-medium">GCash</span>
              </div>
              <Toggle 
                enabled={settings.gCash} 
                onToggle={() => handleToggle('gCash')} 
              />
            </div>
            <div className="flex items-center justify-between">
              <div className="flex items-center">
                <div className="w-5 h-5 mr-2 text-gray-500 flex items-center justify-center bg-green-100 rounded text-xs font-bold">P</div>
                <span className="font-medium">PayMaya</span>
              </div>
              <Toggle 
                enabled={settings.payMaya} 
                onToggle={() => handleToggle('payMaya')} 
              />
            </div>
          <div className="flex items-center justify-between">
          <div className="flex items-center">
            <span className="w-5 h-5 mr-2 text-gray-500 font-bold text-lg">₱</span>
            <span className="font-medium">Cash Payments</span>
          </div>
          <Toggle 
            enabled={settings.cashPayments} 
            onToggle={() => handleToggle('cashPayments')} 
          />
        </div>

          </div>
        </div>

        <div className="grid grid-cols-2 gap-6">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">Processing Fee (%)</label>
            <input
              type="number"
              step="0.1"
              value={settings.processingFee}
              onChange={(e) => handleInputChange('processingFee', parseFloat(e.target.value))}
              className="w-full px-3 py-2 border border-gray-300 rounded-md bg-gray-50"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">Payment Timeout (minutes)</label>
            <input
              type="number"
              value={settings.paymentTimeout}
              onChange={(e) => handleInputChange('paymentTimeout', parseInt(e.target.value))}
              className="w-full px-3 py-2 border border-gray-300 rounded-md bg-gray-50"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">Refund Policy Days</label>
            <input
              type="number"
              value={settings.refundPolicyDays}
              onChange={(e) => handleInputChange('refundPolicyDays', parseInt(e.target.value))}
              className="w-full px-3 py-2 border border-gray-300 rounded-md bg-gray-50"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">Minimum Payment Amount</label>
            <input
              type="number"
              value={settings.minimumPaymentAmount}
              onChange={(e) => handleInputChange('minimumPaymentAmount', parseInt(e.target.value))}
              className="w-full px-3 py-2 border border-gray-300 rounded-md bg-gray-50"
            />
          </div>
        </div>
      </div>
    </div>
  );

  const renderNotificationsTab = () => (
    <div className="space-y-8">
      <div>
        <h3 className="text-lg font-medium text-gray-900 mb-1">Notification Settings</h3>
        <p className="text-sm text-gray-500 mb-6">Configure alerts and notification preferences</p>
        
        <h4 className="font-medium text-gray-900 mb-4">Admin Notifications</h4>
        <div className="space-y-4 mb-8">
          <div className="flex items-center justify-between">
            <div>
              <div className="font-medium text-gray-900">System Alerts</div>
              <div className="text-sm text-gray-500">Device failures and system issues</div>
            </div>
            <Toggle 
              enabled={settings.systemAlerts} 
              onToggle={() => handleToggle('systemAlerts')} 
            />
          </div>
          <div className="flex items-center justify-between">
            <div>
              <div className="font-medium text-gray-900">High Occupancy Alerts</div>
              <div className="text-sm text-gray-500">When parking lots reach 90% capacity</div>
            </div>
            <Toggle 
              enabled={settings.highOccupancyAlerts} 
              onToggle={() => handleToggle('highOccupancyAlerts')} 
            />
          </div>
          <div className="flex items-center justify-between">
            <div>
              <div className="font-medium text-gray-900">Payment Failures</div>
              <div className="text-sm text-gray-500">Failed payment transactions</div>
            </div>
            <Toggle 
              enabled={settings.paymentFailures} 
              onToggle={() => handleToggle('paymentFailures')} 
            />
          </div>
          <div className="flex items-center justify-between">
            <div>
              <div className="font-medium text-gray-900">Daily Reports</div>
              <div className="text-sm text-gray-500">Automated daily summary reports</div>
            </div>
            <Toggle 
              enabled={settings.dailyReports} 
              onToggle={() => handleToggle('dailyReports')} 
            />
          </div>
        </div>

        <h4 className="font-medium text-gray-900 mb-4">Customer Notifications</h4>
        <div className="space-y-4">
          <div className="flex items-center justify-between">
            <div>
              <div className="font-medium text-gray-900">Reservation Confirmations</div>
              <div className="text-sm text-gray-500">SMS/Email when reservation is confirmed</div>
            </div>
            <Toggle 
              enabled={settings.reservationConfirmations} 
              onToggle={() => handleToggle('reservationConfirmations')} 
            />
          </div>
          <div className="flex items-center justify-between">
            <div>
              <div className="font-medium text-gray-900">Payment Receipts</div>
              <div className="text-sm text-gray-500">Digital receipts for all payments</div>
            </div>
            <Toggle 
              enabled={settings.paymentReceipts} 
              onToggle={() => handleToggle('paymentReceipts')} 
            />
          </div>
          <div className="flex items-center justify-between">
            <div>
              <div className="font-medium text-gray-900">Parking Reminders</div>
              <div className="text-sm text-gray-500">Reminders before parking expires</div>
            </div>
            <Toggle 
              enabled={settings.parkingReminders} 
              onToggle={() => handleToggle('parkingReminders')} 
            />
          </div>
        </div>
      </div>
    </div>
  );

  const renderSecurityTab = () => (
    <div className="space-y-8">
      <div>
        <h3 className="text-lg font-medium text-gray-900 mb-1">Security Settings</h3>
        <p className="text-sm text-gray-500 mb-6">Authentication and access control</p>
        
        <h4 className="font-medium text-gray-900 mb-4">Admin Account Security</h4>
        <div className="space-y-4 mb-8">
          <div className="flex items-center justify-between">
            <div>
              <div className="font-medium text-gray-900">Two-Factor Authentication</div>
              <div className="text-sm text-gray-500">Require 2FA for admin accounts</div>
            </div>
            <Toggle 
              enabled={settings.twoFactorAuth} 
              onToggle={() => handleToggle('twoFactorAuth')} 
            />
          </div>
          <div className="flex items-center justify-between">
            <div>
              <div className="font-medium text-gray-900">Session Timeout</div>
              <div className="text-sm text-gray-500">Auto-logout after inactivity</div>
            </div>
            <Toggle 
              enabled={settings.sessionTimeout} 
              onToggle={() => handleToggle('sessionTimeout')} 
            />
          </div>
          <div className="flex items-center justify-between">
            <div>
              <div className="font-medium text-gray-900">Login Audit Logs</div>
              <div className="text-sm text-gray-500">Track all login attempts</div>
            </div>
            <Toggle 
              enabled={settings.loginAuditLogs} 
              onToggle={() => handleToggle('loginAuditLogs')} 
            />
          </div>
        </div>

        <div className="grid grid-cols-2 gap-6">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">Session Timeout (minutes)</label>
            <input
              type="number"
              value={settings.sessionTimeoutMinutes}
              onChange={(e) => handleInputChange('sessionTimeoutMinutes', parseInt(e.target.value))}
              className="w-full px-3 py-2 border border-gray-300 rounded-md bg-gray-50"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">Min Password Length</label>
            <input
              type="number"
              value={settings.minPasswordLength}
              onChange={(e) => handleInputChange('minPasswordLength', parseInt(e.target.value))}
              className="w-full px-3 py-2 border border-gray-300 rounded-md bg-gray-50"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">Max Failed Login Attempts</label>
            <input
              type="number"
              value={settings.maxFailedLoginAttempts}
              onChange={(e) => handleInputChange('maxFailedLoginAttempts', parseInt(e.target.value))}
              className="w-full px-3 py-2 border border-gray-300 rounded-md bg-gray-50"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">Account Lockout Duration (minutes)</label>
            <input
              type="number"
              value={settings.accountLockoutDuration}
              onChange={(e) => handleInputChange('accountLockoutDuration', parseInt(e.target.value))}
              className="w-full px-3 py-2 border border-gray-300 rounded-md bg-gray-50"
            />
          </div>
        </div>
      </div>
    </div>
  );

  const renderSystemTab = () => (
    <div className="space-y-8">
      <div>
        <h3 className="text-lg font-medium text-gray-900 mb-1">System Maintenance</h3>
        <p className="text-sm text-gray-500 mb-6">Backup, updates, and system health</p>
        
        <h4 className="font-medium text-gray-900 mb-4">Backup & Recovery</h4>
        <div className="grid grid-cols-2 gap-6 mb-8">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">Backup Frequency</label>
            <select
              value={settings.backupFrequency}
              onChange={(e) => handleInputChange('backupFrequency', e.target.value)}
              className="w-full px-3 py-2 border border-gray-300 rounded-md bg-gray-50"
            >
              <option>Daily</option>
              <option>Weekly</option>
              <option>Monthly</option>
            </select>
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">Backup Retention (days)</label>
            <input
              type="number"
              value={settings.backupRetention}
              onChange={(e) => handleInputChange('backupRetention', parseInt(e.target.value))}
              className="w-full px-3 py-2 border border-gray-300 rounded-md bg-gray-50"
            />
          </div>
        </div>

        <h4 className="font-medium text-gray-900 mb-4">System Health</h4>
        <div className="space-y-4 mb-8">
          <div className="flex items-center justify-between">
            <div>
              <div className="font-medium text-gray-900">Automatic Updates</div>
              <div className="text-sm text-gray-500">Install security updates automatically</div>
            </div>
            <Toggle 
              enabled={settings.automaticUpdates} 
              onToggle={() => handleToggle('automaticUpdates')} 
            />
          </div>
          <div className="flex items-center justify-between">
            <div>
              <div className="font-medium text-gray-900">Health Monitoring</div>
              <div className="text-sm text-gray-500">Continuous system health checks</div>
            </div>
            <Toggle 
              enabled={settings.healthMonitoring} 
              onToggle={() => handleToggle('healthMonitoring')} 
            />
          </div>
          <div className="flex items-center justify-between">
            <div>
              <div className="font-medium text-gray-900">Performance Analytics</div>
              <div className="text-sm text-gray-500">Collect system performance data</div>
            </div>
            <Toggle 
              enabled={settings.performanceAnalytics} 
              onToggle={() => handleToggle('performanceAnalytics')} 
            />
          </div>
        </div>

        <h4 className="font-medium text-gray-900 mb-4">Maintenance Actions</h4>
        <div className="grid grid-cols-2 gap-4">
          <button className="flex items-center justify-center px-4 py-3 bg-gray-100 text-gray-700 rounded-md hover:bg-gray-200 transition-colors">
            <Settings className="w-4 h-4 mr-2" />
            Backup Database
          </button>
          <button className="flex items-center justify-center px-4 py-3 bg-gray-100 text-gray-700 rounded-md hover:bg-gray-200 transition-colors">
            <Settings className="w-4 h-4 mr-2" />
            Clear Cache
          </button>
          <button className="flex items-center justify-center px-4 py-3 bg-gray-100 text-gray-700 rounded-md hover:bg-gray-200 transition-colors">
            <Settings className="w-4 h-4 mr-2" />
            Export Logs
          </button>
          <button className="flex items-center justify-center px-4 py-3 bg-gray-100 text-gray-700 rounded-md hover:bg-gray-200 transition-colors">
            <Settings className="w-4 h-4 mr-2" />
            Security Scan
          </button>
        </div>
      </div>
    </div>
  );

  const renderTabContent = () => {
    switch (activeTab) {
      case 'General':
        return renderGeneralTab();
      case 'Parking':
        return renderParkingTab();
      case 'Payments':
        return renderPaymentsTab();
      case 'Notifications':
        return renderNotificationsTab();
      case 'Security':
        return renderSecurityTab();
      case 'System':
        return renderSystemTab();
      default:
        return renderGeneralTab();
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 p-6">
      <div className="max-w-7xl mx-auto">
        <div className="flex items-center justify-between mb-8">
          <h1 className="text-3xl font-bold text-gray-900">Admin Settings</h1>
          <button className="flex items-center px-4 py-2 bg-black text-white rounded-lg hover:bg-gray-800 transition-colors">
            <Settings className="w-4 h-4 mr-2" />
            Save Changes
          </button>
        </div>

        <div className="bg-white rounded-lg shadow-sm">
          {/* Tab Navigation */}
          <div className="border-b border-gray-200">
            <nav className="flex space-x-8 px-6">
              {tabs.map((tab) => {
                const Icon = tab.icon;
                return (
                  <button
                    key={tab.id}
                    onClick={() => setActiveTab(tab.id)}
                    className={`flex items-center py-4 px-1 border-b-2 font-medium text-sm transition-colors ${
                      activeTab === tab.id
                        ? 'border-black text-black'
                        : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
                    }`}
                  >
                    <Icon className="w-4 h-4 mr-2" />
                    {tab.label}
                  </button>
                );
              })}
            </nav>
          </div>

          {/* Tab Content */}
          <div className="p-6">
            {renderTabContent()}
          </div>
        </div>
      </div>
    </div>
  );
};

export default AdminSettings;