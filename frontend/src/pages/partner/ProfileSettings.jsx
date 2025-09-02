import { useState } from 'react';
import { Upload, Settings, Menu, X } from 'lucide-react';

export default function ProfileSettings() {
  const [activeTab, setActiveTab] = useState('Company Details');
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [formData, setFormData] = useState({
    companyName: 'SM City Iloilo',
    businessType: 'Shopping Mall',
    contactPerson: 'John Manager',
    contactEmail: 'manager@sm-iloilo.com',
    contactPhone: '+63 33 338 8888',
    website: 'https://sm-iloilo.com',
    businessAddress: 'Benigno S. Aquino Jr. Ave, Mandurriao, Iloilo City',
    currentPassword: '',
    newPassword: '',
    confirmPassword: '',
    enable2FA: false,
    bankName: 'BPI',
    accountNumber: '****-****-****-1234',
    accountName: 'SM City Iloilo Corp',
    swiftCode: 'BOPIPHMM',
    enableGCash: false,
    gcashNumber: '',
    notifications: {
      newBookingAlerts: true,
      bookingCancellations: true,
      noShowNotifications: false,
      payoutConfirmations: true,
      dailyRevenueSummaries: false,
      monthlyReports: true,
      systemMaintenanceAlerts: true,
      equipmentErrorNotifications: true,
      marketingUpdates: false
    }
  });

  const tabs = ['Company Details', 'Account', 'Banking', 'Notifications'];

  const handleInputChange = (field, value) => {
    setFormData(prev => ({
      ...prev,
      [field]: value
    }));
  };

  const handleNotificationChange = (notification, value) => {
    setFormData(prev => ({
      ...prev,
      notifications: {
        ...prev.notifications,
        [notification]: value
      }
    }));
  };

  const handleSave = () => {
    alert('Changes saved successfully!');
  };

  const handleTabChange = (tab) => {
    setActiveTab(tab);
    setIsMobileMenuOpen(false);
  };

  return (
    <div className="min-h-screen bg-gray-50 p-3 sm:p-4 md:p-6">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center gap-4 mb-6 md:mb-8">
          <h1 className="text-2xl sm:text-3xl font-bold text-gray-900">Profile Settings</h1>
          <button
            onClick={handleSave}
            className="flex items-center justify-center gap-2 bg-black text-white px-4 py-2 rounded-lg hover:bg-gray-800 transition-colors w-full sm:w-auto"
          >
            <Settings size={16} />
            Save Changes
          </button>
        </div>

        {/* Mobile Tab Menu Toggle */}
        <div className="lg:hidden mb-4">
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="flex items-center justify-between w-full bg-white rounded-lg p-3 shadow-sm border"
          >
            <span className="font-medium text-gray-900">{activeTab}</span>
            {isMobileMenuOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>

        {/* Mobile Tab Menu Dropdown */}
        {isMobileMenuOpen && (
          <div className="lg:hidden mb-4 bg-white rounded-lg shadow-sm border overflow-hidden">
            {tabs.map((tab) => (
              <button
                key={tab}
                onClick={() => handleTabChange(tab)}
                className={`w-full text-left p-4 border-b border-gray-100 last:border-b-0 transition-colors ${
                  activeTab === tab
                    ? 'bg-gray-50 text-gray-900 font-medium'
                    : 'text-gray-600 hover:bg-gray-50'
                }`}
              >
                {tab}
              </button>
            ))}
          </div>
        )}

        {/* Desktop Tab Navigation */}
        <div className="hidden lg:flex bg-white rounded-lg p-1 mb-6 shadow-sm">
          {tabs.map((tab) => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab)}
              className={`flex-1 py-3 px-4 rounded-md text-center font-medium transition-colors ${
                activeTab === tab
                  ? 'bg-gray-100 text-gray-900'
                  : 'text-gray-600 hover:text-gray-900'
              }`}
            >
              {tab}
            </button>
          ))}
        </div>

        {/* Tab Content */}
        <div className="bg-white rounded-lg shadow-sm p-4 sm:p-6">
          {activeTab === 'Company Details' && (
            <div>
              <div className="mb-6">
                <h2 className="text-xl font-semibold text-gray-900 mb-2">Company Information</h2>
                <p className="text-gray-600">Update your business details</p>
              </div>

              <div className="space-y-6">
                {/* Company Logo */}
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Company Logo</label>
                  <p className="text-sm text-gray-500 mb-3">Upload your company logo</p>
                  <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4">
                    <div className="w-16 h-16 bg-gray-100 rounded-lg flex items-center justify-center flex-shrink-0">
                      <div className="w-8 h-8 bg-gray-300 rounded grid grid-cols-2 gap-0.5">
                        <div className="bg-gray-400 rounded-sm"></div>
                        <div className="bg-gray-400 rounded-sm"></div>
                        <div className="bg-gray-400 rounded-sm"></div>
                        <div className="bg-gray-400 rounded-sm"></div>
                      </div>
                    </div>
                    <button className="flex items-center justify-center gap-2 px-4 py-2 border border-gray-300 rounded-lg hover:bg-gray-50 transition-colors w-full sm:w-auto">
                      <Upload size={16} />
                      Upload Logo
                    </button>
                  </div>
                </div>

                {/* Form Grid */}
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 sm:gap-6">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Company Name</label>
                    <input
                      type="text"
                      value={formData.companyName}
                      onChange={(e) => handleInputChange('companyName', e.target.value)}
                      className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Business Type</label>
                    <input
                      type="text"
                      value={formData.businessType}
                      onChange={(e) => handleInputChange('businessType', e.target.value)}
                      className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Contact Person</label>
                    <input
                      type="text"
                      value={formData.contactPerson}
                      onChange={(e) => handleInputChange('contactPerson', e.target.value)}
                      className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Contact Email</label>
                    <input
                      type="email"
                      value={formData.contactEmail}
                      onChange={(e) => handleInputChange('contactEmail', e.target.value)}
                      className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Contact Phone</label>
                    <input
                      type="tel"
                      value={formData.contactPhone}
                      onChange={(e) => handleInputChange('contactPhone', e.target.value)}
                      className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Website</label>
                    <input
                      type="url"
                      value={formData.website}
                      onChange={(e) => handleInputChange('website', e.target.value)}
                      className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Business Address</label>
                  <textarea
                    value={formData.businessAddress}
                    onChange={(e) => handleInputChange('businessAddress', e.target.value)}
                    rows={3}
                    className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  />
                </div>
              </div>
            </div>
          )}

          {activeTab === 'Account' && (
            <div>
              <div className="mb-6">
                <h2 className="text-xl font-semibold text-gray-900 mb-2">Account Security</h2>
                <p className="text-gray-600">Manage your login credentials</p>
              </div>

              <div className="space-y-6">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Current Password</label>
                  <input
                    type="password"
                    value={formData.currentPassword}
                    onChange={(e) => handleInputChange('currentPassword', e.target.value)}
                    className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    placeholder="Enter current password"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">New Password</label>
                  <input
                    type="password"
                    value={formData.newPassword}
                    onChange={(e) => handleInputChange('newPassword', e.target.value)}
                    className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    placeholder="Enter new password"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Confirm New Password</label>
                  <input
                    type="password"
                    value={formData.confirmPassword}
                    onChange={(e) => handleInputChange('confirmPassword', e.target.value)}
                    className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    placeholder="Confirm new password"
                  />
                </div>

                <div className="pt-4">
                  <button
                    type="button"
                    onClick={() => alert('Password updated successfully!')}
                    className="bg-black text-white px-6 py-2 rounded-lg hover:bg-gray-700 transition-colors font-medium w-full sm:w-auto"
                  >
                    Update Password
                  </button>
                </div>

                <div className="border-t pt-6 mt-8">
                  <h3 className="text-lg font-medium text-gray-900 mb-4">Two-Factor Authentication</h3>
                  <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3">
                    <div>
                      <p className="font-medium text-gray-700">Enable 2FA</p>
                      <p className="text-sm text-gray-500">Add an extra layer of security</p>
                    </div>
                    <label className="relative inline-flex items-center cursor-pointer">
                      <input
                        type="checkbox"
                        checked={formData.enable2FA}
                        onChange={(e) => handleInputChange('enable2FA', e.target.checked)}
                        className="sr-only peer"
                      />
                      <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-gray-300 rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-black"></div>
                    </label>
                  </div>
                </div>
              </div>
            </div>
          )}

          {activeTab === 'Banking' && (
            <div>
              <div className="mb-6">
                <h2 className="text-xl font-semibold text-gray-900 mb-2">Banking Information</h2>
                <p className="text-gray-600">Payout and payment details</p>
              </div>

              <div className="space-y-6">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 sm:gap-6">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Bank Name</label>
                    <input
                      type="text"
                      value={formData.bankName}
                      onChange={(e) => handleInputChange('bankName', e.target.value)}
                      className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Account Name</label>
                    <input
                      type="text"
                      value={formData.accountName}
                      onChange={(e) => handleInputChange('accountName', e.target.value)}
                      className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Account Number</label>
                    <input
                      type="text"
                      value={formData.accountNumber}
                      onChange={(e) => handleInputChange('accountNumber', e.target.value)}
                      className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">SWIFT Code</label>
                    <input
                      type="text"
                      value={formData.swiftCode}
                      onChange={(e) => handleInputChange('swiftCode', e.target.value)}
                      className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    />
                  </div>
                </div>

                <div className="border-t pt-6 mt-8">
                  <h3 className="text-lg font-medium text-gray-900 mb-4">Alternative Payout Methods</h3>
                  
                  <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3 mb-4">
                    <div>
                      <p className="font-medium text-gray-700">GCash Wallet</p>
                    </div>
                    <label className="relative inline-flex items-center cursor-pointer">
                      <input
                        type="checkbox"
                        checked={formData.enableGCash}
                        onChange={(e) => handleInputChange('enableGCash', e.target.checked)}
                        className="sr-only peer"  
                      />
                      <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-gray-300 rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-black"></div>
                    </label>
                  </div>

                  {formData.enableGCash && (
                    <div>
                      <input
                        type="tel"
                        value={formData.gcashNumber}
                        onChange={(e) => handleInputChange('gcashNumber', e.target.value)}
                        placeholder="GCash mobile number"
                        className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                      />
                    </div>
                  )}
                </div>
              </div>
            </div>
          )}

          {activeTab === 'Notifications' && (
            <div>
              <div className="mb-6">
                <h2 className="text-xl font-semibold text-gray-900 mb-2">Notification Preferences</h2>
                <p className="text-gray-600">Choose what notifications you want to receive</p>
              </div>

              <div className="space-y-8">
                {/* Booking Notifications */}
                <div>
                  <h3 className="text-lg font-medium text-gray-900 mb-4">Booking Notifications</h3>
                  <div className="space-y-4">
                    {[
                      { key: 'newBookingAlerts', label: 'New booking alerts' },
                      { key: 'bookingCancellations', label: 'Booking cancellations' },
                      { key: 'noShowNotifications', label: 'No-show notifications' }
                    ].map(({ key, label }) => (
                      <div key={key} className="flex items-center justify-between">
                        <span className="text-gray-700 text-sm sm:text-base">{label}</span>
                        <label className="relative inline-flex items-center cursor-pointer">
                          <input
                            type="checkbox"
                            checked={formData.notifications[key]}
                            onChange={(e) => handleNotificationChange(key, e.target.checked)}
                            className="sr-only peer"
                          />
                          <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-gray-300 rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-black"></div>
                        </label>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Financial Notifications */}
                <div>
                  <h3 className="text-lg font-medium text-gray-900 mb-4">Financial Notifications</h3>
                  <div className="space-y-4">
                    {[
                      { key: 'payoutConfirmations', label: 'Payout confirmations' },
                      { key: 'dailyRevenueSummaries', label: 'Daily revenue summaries' },
                      { key: 'monthlyReports', label: 'Monthly reports' }
                    ].map(({ key, label }) => (
                      <div key={key} className="flex items-center justify-between">
                        <span className="text-gray-700 text-sm sm:text-base">{label}</span>
                        <label className="relative inline-flex items-center cursor-pointer">
                          <input
                            type="checkbox"
                            checked={formData.notifications[key]}
                            onChange={(e) => handleNotificationChange(key, e.target.checked)}
                            className="sr-only peer"
                          />
                          <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-gray-300 rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-black"></div>
                        </label>
                      </div>
                    ))}
                  </div>
                </div>

                {/* System Notifications */}
                <div>
                  <h3 className="text-lg font-medium text-gray-900 mb-4">System Notifications</h3>
                  <div className="space-y-4">
                    {[
                      { key: 'systemMaintenanceAlerts', label: 'System maintenance alerts' },
                      { key: 'equipmentErrorNotifications', label: 'Equipment error notifications' },
                      { key: 'marketingUpdates', label: 'Marketing updates' }
                    ].map(({ key, label }) => (
                      <div key={key} className="flex items-center justify-between">
                        <span className="text-gray-700 text-sm sm:text-base">{label}</span>
                        <label className="relative inline-flex items-center cursor-pointer">
                          <input
                            type="checkbox"
                            checked={formData.notifications[key]}
                            onChange={(e) => handleNotificationChange(key, e.target.checked)}
                            className="sr-only peer"
                          />
                          <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-gray-300 rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-black"></div>
                        </label>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}