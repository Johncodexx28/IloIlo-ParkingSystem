import React, { useState } from 'react';
import { Plus, Eye, AlertTriangle, Phone, Mail, Globe } from 'lucide-react';

const SupportDashboard = () => {
  // Sample support tickets
  const supportTickets = [
    {
      id: 1,
      title: 'Gate sensor malfunction at entrance A',
      description: 'Customers reporting that the entrance gate is not responding to QR codes',
      created: '2024-01-15 10:30',
      priority: 'high',
      status: 'open'
    },
    {
      id: 2,
      title: 'Payment processing slow',
      description: 'GCash payments taking longer than usual to process',
      created: '2024-01-14 14:20',
      priority: 'medium',
      status: 'in_progress'
    }
  ];

  // Sample system errors
  const systemErrors = [
    {
      id: 1,
      title: 'Parking Sensor PS-A-025',
      description: 'Connection timeout',
      type: 'Hardware Error',
      status: 'active',
      timestamp: '2024-01-15 12:30'
    },
    {
      id: 2,
      title: 'Payment Gateway',
      description: 'API rate limit exceeded',
      type: 'Software Error',
      status: 'resolved',
      timestamp: '2024-01-15 11:15'
    }
  ];

  const getPriorityColor = (priority) => {
    switch (priority) {
      case 'high':
        return 'bg-red-100 text-red-800';
      case 'medium':
        return 'bg-yellow-100 text-yellow-800';
      case 'low':
        return 'bg-green-100 text-green-800';
      default:
        return 'bg-gray-100 text-gray-800';
    }
  };

  const getStatusColor = (status) => {
    switch (status) {
      case 'active':
        return 'bg-red-100 text-red-800';
      case 'resolved':
        return 'bg-black text-white';
      case 'open':
        return 'bg-blue-100 text-blue-800';
      case 'in_progress':
        return 'bg-yellow-100 text-yellow-800';
      default:
        return 'bg-gray-100 text-gray-800';
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 p-6">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="flex justify-between items-center mb-8">
          <h1 className="text-3xl font-bold text-gray-900">Support / System Errors</h1>
          <button className="px-4 py-2 bg-black text-white rounded-lg hover:bg-gray-800 flex items-center gap-2">
            <Plus size={16} />
            Create Support Ticket
          </button>
        </div>

        {/* Summary Cards */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
          <div className="bg-white p-6 rounded-xl shadow-sm">
            <h3 className="text-sm font-medium text-gray-500 mb-2">Open Tickets</h3>
            <div className="text-2xl font-bold text-gray-900">3</div>
            <div className="text-xs text-gray-500 mt-1">Awaiting response</div>
          </div>
          
          <div className="bg-white p-6 rounded-xl shadow-sm">
            <h3 className="text-sm font-medium text-gray-500 mb-2">System Errors</h3>
            <div className="text-2xl font-bold text-red-600">2</div>
            <div className="text-xs text-gray-500 mt-1">Active issues</div>
          </div>
          
          <div className="bg-white p-6 rounded-xl shadow-sm">
            <h3 className="text-sm font-medium text-gray-500 mb-2">Avg Response Time</h3>
            <div className="text-2xl font-bold text-gray-900">2.4h</div>
            <div className="text-xs text-gray-500 mt-1">Support team response</div>
          </div>
          
          <div className="bg-white p-6 rounded-xl shadow-sm">
            <h3 className="text-sm font-medium text-gray-500 mb-2">Resolution Rate</h3>
            <div className="text-2xl font-bold text-gray-900">94%</div>
            <div className="text-xs text-gray-500 mt-1">Issues resolved</div>
          </div>
        </div>

        {/* Support Tickets and System Errors */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-8">
          {/* Support Tickets */}
          <div className="bg-white rounded-xl shadow-sm">
            <div className="p-6 border-b border-gray-200">
              <h2 className="text-lg font-semibold text-gray-900">Support Tickets</h2>
              <p className="text-sm text-gray-500">Your submitted support requests</p>
            </div>
            
            <div className="p-6">
              <div className="space-y-4">
                {supportTickets.map((ticket) => (
                  <div key={ticket.id} className="border border-gray-200 rounded-lg p-4">
                    <div className="flex justify-between items-start mb-2">
                      <h3 className="font-medium text-gray-900">{ticket.title}</h3>
                      <span className={`px-2 py-1 text-xs font-medium rounded ${getPriorityColor(ticket.priority)}`}>
                        {ticket.priority}
                      </span>
                    </div>
                    <p className="text-sm text-gray-600 mb-3">{ticket.description}</p>
                    <div className="flex justify-between items-center text-xs text-gray-500">
                      <span>Created: {ticket.created}</span>
                      <span className={`px-2 py-1 rounded ${getStatusColor(ticket.status)}`}>
                        {ticket.status.replace('_', ' ')}
                      </span>
                    </div>
                  </div>
                ))}
              </div>
              
              <button className="w-full mt-4 py-3 px-4 border border-gray-300 rounded-lg text-gray-700 hover:bg-gray-50 flex items-center justify-center gap-2">
                <Eye size={16} />
                View All Tickets
              </button>
            </div>
          </div>

          {/* System Errors */}
          <div className="bg-white rounded-xl shadow-sm">
            <div className="p-6 border-b border-gray-200">
              <h2 className="text-lg font-semibold text-gray-900">System Errors</h2>
              <p className="text-sm text-gray-500">Flagged system issues for your account</p>
            </div>
            
            <div className="p-6">
              <div className="space-y-4">
                {systemErrors.map((error) => (
                  <div key={error.id} className="border border-gray-200 rounded-lg p-4">
                    <div className="flex justify-between items-start mb-2">
                      <h3 className="font-medium text-gray-900">{error.title}</h3>
                      <span className={`px-2 py-1 text-xs font-medium rounded ${getStatusColor(error.status)}`}>
                        {error.status}
                      </span>
                    </div>
                    <p className="text-sm text-gray-600 mb-1">{error.description}</p>
                    <div className="flex justify-between items-center text-xs text-gray-500">
                      <span className="text-gray-500">{error.type}</span>
                      <span>{error.timestamp}</span>
                    </div>
                  </div>
                ))}
              </div>
              
              <button className="w-full mt-4 py-3 px-4 border border-gray-300 rounded-lg text-gray-700 hover:bg-gray-50 flex items-center justify-center gap-2">
                <AlertTriangle size={16} />
                Report New Issue
              </button>
            </div>
          </div>
        </div>

        {/* Contact Support Section */}
        <div className="bg-white rounded-xl shadow-sm p-6">
          <div className="mb-6">
            <h2 className="text-lg font-semibold text-gray-900">Contact Support</h2>
            <p className="text-sm text-gray-500">Get help from our support team</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {/* Phone Support */}
            <div className="text-center p-6 border border-gray-200 rounded-lg hover:border-gray-300 transition-colors">
              <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Phone className="w-6 h-6 text-blue-600" />
              </div>
              <h3 className="font-semibold text-gray-900 mb-2">Phone Support</h3>
              <p className="text-sm text-gray-500 mb-3">Available 24/7</p>
              <p className="font-semibold text-gray-900">+63 33 123 4567</p>
            </div>

            {/* Email Support */}
            <div className="text-center p-6 border border-gray-200 rounded-lg hover:border-gray-300 transition-colors">
              <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Mail className="w-6 h-6 text-green-600" />
              </div>
              <h3 className="font-semibold text-gray-900 mb-2">Email Support</h3>
              <p className="text-sm text-gray-500 mb-3">Response within 4 hours</p>
              <p className="font-semibold text-gray-900">partner@parklink.ph</p>
            </div>

            {/* Knowledge Base */}
            <div className="text-center p-6 border border-gray-200 rounded-lg hover:border-gray-300 transition-colors cursor-pointer">
              <div className="w-12 h-12 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Globe className="w-6 h-6 text-purple-600" />
              </div>
              <h3 className="font-semibold text-gray-900 mb-2">Knowledge Base</h3>
              <p className="text-sm text-gray-500 mb-3">Self-help articles</p>
              <p className="font-semibold text-gray-900">Visit Help Center</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SupportDashboard;