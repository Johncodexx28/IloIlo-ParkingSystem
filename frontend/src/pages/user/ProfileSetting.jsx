import { useState } from 'react';
import { User, Car, Settings, Shield, Upload, Edit } from 'lucide-react';

export default function ProfileSettings() {
  const [activeTab, setActiveTab] = useState('Profile');
  const [formData, setFormData] = useState({
    firstName: 'Juan',
    lastName: 'Dela Cruz',
    email: 'juan@email.com',
    phone: '+63 912 345 6789',
    address: '123 Main Street, Iloilo City',
    currentPassword: '',
    newPassword: '',
    confirmPassword: ''
  });

  const [preferences, setPreferences] = useState({
    pushNotifications: true,
    locationServices: true,
    autoExtendParking: false,
    enable2FA: false
  });

  const tabs = [
    { name: 'Profile', icon: User },
    { name: 'Vehicles', icon: Car },
    { name: 'Preferences', icon: Settings },
    { name: 'Security', icon: Shield }
  ];

  const handleInputChange = (field, value) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  const handlePreferenceToggle = (preference) => {
    setPreferences(prev => ({ ...prev, [preference]: !prev[preference] }));
  };

  const renderProfile = () => (
    <div className="bg-white rounded-lg p-6">
      <div className="mb-6">
        <h2 className="text-xl font-semibold text-gray-900 mb-2">Personal Information</h2>
        <p className="text-gray-600 text-sm">Update your personal details</p>
      </div>

      <div className="mb-8">
        <div className="flex items-center gap-4">
          <div className="w-20 h-20 bg-gray-200 rounded-full flex items-center justify-center">
            <span className="text-2xl font-semibold text-gray-600">JD</span>
          </div>
          <div>
            <h3 className="font-medium text-gray-900">Profile Picture</h3>
            <p className="text-sm text-gray-500 mb-3">Upload your photo</p>
            <button className="flex items-center gap-2 px-4 py-2 border border-gray-300 rounded-md text-sm font-medium text-gray-700 hover:bg-gray-50">
              <Upload size={16} />
              Change Photo
            </button>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">First Name</label>
          <input
            type="text"
            value={formData.firstName}
            onChange={(e) => handleInputChange('firstName', e.target.value)}
            className="w-full px-3 py-2 border border-gray-300 rounded-md bg-gray-50 text-gray-900"
          />
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">Last Name</label>
          <input
            type="text"
            value={formData.lastName}
            onChange={(e) => handleInputChange('lastName', e.target.value)}
            className="w-full px-3 py-2 border border-gray-300 rounded-md bg-gray-50 text-gray-900"
          />
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">Email Address</label>
          <input
            type="email"
            value={formData.email}
            onChange={(e) => handleInputChange('email', e.target.value)}
            className="w-full px-3 py-2 border border-gray-300 rounded-md bg-gray-50 text-gray-900"
          />
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">Phone Number</label>
          <input
            type="tel"
            value={formData.phone}
            onChange={(e) => handleInputChange('phone', e.target.value)}
            className="w-full px-3 py-2 border border-gray-300 rounded-md bg-gray-50 text-gray-900"
          />
        </div>
        <div className="md:col-span-2">
          <label className="block text-sm font-medium text-gray-700 mb-2">Address</label>
          <input
            type="text"
            value={formData.address}
            onChange={(e) => handleInputChange('address', e.target.value)}
            className="w-full px-3 py-2 border border-gray-300 rounded-md bg-gray-50 text-gray-900"
          />
        </div>
      </div>
    </div>
  );

  const renderVehicles = () => (
    <div className="bg-white rounded-lg p-6">
      <div className="mb-6">
        <h2 className="text-xl font-semibold text-gray-900 mb-2">My Vehicles</h2>
        <p className="text-gray-600 text-sm">Manage your registered vehicles</p>
      </div>

      <div className="mb-6">
        <div className="flex items-center justify-between p-4 bg-gray-50 rounded-lg">
          <div className="flex items-center gap-4">
            <div className="w-12 h-12 bg-gray-200 rounded-lg flex items-center justify-center">
              <Car className="w-6 h-6 text-gray-600" />
            </div>
            <div>
              <h3 className="font-medium text-gray-900">Toyota Vios</h3>
              <p className="text-sm text-gray-500">ABC-123 • White</p>
            </div>
          </div>
          <div className="flex items-center gap-2">
            <span className="px-3 py-1 bg-gray-800 text-white text-xs rounded-full">Primary</span>
            <button className="p-2 text-gray-500 hover:text-gray-700">
              <Edit size={16} />
            </button>
          </div>
        </div>
      </div>

      <button className="w-full py-3 bg-gray-900 text-white rounded-lg font-medium hover:bg-gray-800 flex items-center justify-center gap-2">
        <span className="text-lg">+</span>
        Add Vehicle
      </button>
    </div>
  );

  const renderPreferences = () => (
    <div className="bg-white rounded-lg p-6">
      <div className="mb-6">
        <h2 className="text-xl font-semibold text-gray-900 mb-2">App Preferences</h2>
        <p className="text-gray-600 text-sm">Customize your app experience</p>
      </div>

      <div className="space-y-6">
        <div className="flex items-center justify-between">
          <div>
            <h3 className="font-medium text-gray-900">Push Notifications</h3>
            <p className="text-sm text-gray-500">Receive mobile notifications</p>
          </div>
          <button
            onClick={() => handlePreferenceToggle('pushNotifications')}
            className={`w-12 h-6 rounded-full transition-colors duration-200 ${
              preferences.pushNotifications ? 'bg-gray-900' : 'bg-gray-300'
            }`}
          >
            <div
              className={`w-5 h-5 bg-white rounded-full transition-transform duration-200 ${
                preferences.pushNotifications ? 'translate-x-6' : 'translate-x-0.5'
              }`}
            />
          </button>
        </div>

        <div className="flex items-center justify-between">
          <div>
            <h3 className="font-medium text-gray-900">Location Services</h3>
            <p className="text-sm text-gray-500">Find nearby parking automatically</p>
          </div>
          <button
            onClick={() => handlePreferenceToggle('locationServices')}
            className={`w-12 h-6 rounded-full transition-colors duration-200 ${
              preferences.locationServices ? 'bg-gray-900' : 'bg-gray-300'
            }`}
          >
            <div
              className={`w-5 h-5 bg-white rounded-full transition-transform duration-200 ${
                preferences.locationServices ? 'translate-x-6' : 'translate-x-0.5'
              }`}
            />
          </button>
        </div>

        <div className="flex items-center justify-between">
          <div>
            <h3 className="font-medium text-gray-900">Auto-Extend Parking</h3>
            <p className="text-sm text-gray-500">Automatically extend when time is running low</p>
          </div>
          <button
            onClick={() => handlePreferenceToggle('autoExtendParking')}
            className={`w-12 h-6 rounded-full transition-colors duration-200 ${
              preferences.autoExtendParking ? 'bg-gray-900' : 'bg-gray-300'
            }`}
          >
            <div
              className={`w-5 h-5 bg-white rounded-full transition-transform duration-200 ${
                preferences.autoExtendParking ? 'translate-x-6' : 'translate-x-0.5'
              }`}
            />
          </button>
        </div>
      </div>
    </div>
  );

  const renderSecurity = () => (
    <div className="bg-white rounded-lg p-6">
      <div className="mb-6">
        <h2 className="text-xl font-semibold text-gray-900 mb-2">Security Settings</h2>
        <p className="text-gray-600 text-sm">Manage your account security</p>
      </div>

      <div className="space-y-6">
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">Current Password</label>
          <input
            type="password"
            value={formData.currentPassword}
            onChange={(e) => handleInputChange('currentPassword', e.target.value)}
            className="w-full px-3 py-2 border border-gray-300 rounded-md bg-gray-50"
            placeholder="Enter current password"
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">New Password</label>
          <input
            type="password"
            value={formData.newPassword}
            onChange={(e) => handleInputChange('newPassword', e.target.value)}
            className="w-full px-3 py-2 border border-gray-300 rounded-md bg-gray-50"
            placeholder="Enter new password"
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">Confirm New Password</label>
          <input
            type="password"
            value={formData.confirmPassword}
            onChange={(e) => handleInputChange('confirmPassword', e.target.value)}
            className="w-full px-3 py-2 border border-gray-300 rounded-md bg-gray-50"
            placeholder="Confirm new password"
          />
        </div>

        <div className="border-t pt-6 mt-8">
          <h3 className="font-medium text-gray-900 mb-4">Two-Factor Authentication</h3>
          <div className="flex items-center justify-between">
            <div>
              <h4 className="font-medium text-gray-900">Enable 2FA</h4>
              <p className="text-sm text-gray-500">Add an extra layer of security</p>
            </div>
            <button
              onClick={() => handlePreferenceToggle('enable2FA')}
              className={`w-12 h-6 rounded-full transition-colors duration-200 ${
                preferences.enable2FA ? 'bg-gray-900' : 'bg-gray-300'
              }`}
            >
              <div
                className={`w-5 h-5 bg-white rounded-full transition-transform duration-200 ${
                  preferences.enable2FA ? 'translate-x-6' : 'translate-x-0.5'
                }`}
              />
            </button>
          </div>
        </div>
      </div>
    </div>
  );

  const renderContent = () => {
    switch (activeTab) {
      case 'Profile':
        return renderProfile();
      case 'Vehicles':
        return renderVehicles();
      case 'Preferences':
        return renderPreferences();
      case 'Security':
        return renderSecurity();
      default:
        return renderProfile();
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 p-4">
      <div className="max-w-6xl mx-auto">
        <h1 className="text-3xl font-bold text-gray-900 mb-8">Profile Settings</h1>
        
        <div className="flex flex-col lg:flex-row gap-6">
          {/* Tab Navigation */}
          <div className="lg:w-64">
            <div className="bg-white rounded-lg p-2">
              {tabs.map((tab) => {
                const IconComponent = tab.icon;
                return (
                  <button
                    key={tab.name}
                    onClick={() => setActiveTab(tab.name)}
                    className={`w-full flex items-center gap-3 px-4 py-3 rounded-md text-left transition-colors ${
                      activeTab === tab.name
                        ? 'bg-gray-100 text-gray-900'
                        : 'text-gray-600 hover:bg-gray-50'
                    }`}
                  >
                    <IconComponent size={20} />
                    <span className="font-medium">{tab.name}</span>
                  </button>
                );
              })}
            </div>
          </div>

          {/* Content Area */}
          <div className="flex-1">
            {renderContent()}
          </div>
        </div>
      </div>
    </div>
  );
}