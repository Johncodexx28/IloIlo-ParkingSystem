import React, { useState } from 'react';
import { 
  Wallet, 
  CreditCard, 
  Plus, 
  Download, 
  Calendar,
  Car,
  Edit,
  Eye
} from 'lucide-react';

const PaymentsWallet = () => {
  const [activeTab, setActiveTab] = useState('wallet');
  const [walletBalance] = useState(1250);

  const transactions = [
    {
      id: 1,
      type: 'expense',
      title: 'Parking fee - SM City Iloilo',
      date: '2024-01-15 14:30',
      amount: 200,
      status: 'completed',
      icon: Car
    },
    {
      id: 2,
      type: 'income',
      title: 'Wallet top-up via GCash',
      date: '2024-01-14 09:15',
      amount: 500,
      status: 'completed',
      icon: Plus
    },
    {
      id: 3,
      type: 'expense',
      title: 'Parking fee - Robinsons Place',
      date: '2024-01-13 16:45',
      amount: 150,
      status: 'completed',
      icon: Car
    }
  ];

  const paymentMethods = [
    {
      id: 1,
      type: 'GCash',
      number: '**** 1234',
      isDefault: true
    },
    {
      id: 2,
      type: 'Credit Card',
      number: '**** **** **** 5678',
      isDefault: false
    }
  ];

  return (
    <div className="max-w-5xl mx-auto p-4 bg-gray-50 min-h-screen">
      {/* Header */}
      <div className="mb-6">
        <h1 className="text-2xl font-bold text-gray-900">Payments & Wallet</h1>
      </div>

      {/* Navigation Tabs */}
      <div className="bg-gray-200 rounded-lg p-1 mb-6">
        <div className="grid grid-cols-3 gap-1">
          <button
            onClick={() => setActiveTab('wallet')}
            className={`py-2.5 px-3 rounded-md text-sm font-medium transition-all ${
              activeTab === 'wallet'
                ? 'bg-white shadow-sm text-gray-900'
                : 'text-gray-600 hover:text-gray-900'
            }`}
          >
            Wallet
          </button>
          <button
            onClick={() => setActiveTab('payment-methods')}
            className={`py-2.5 px-3 rounded-md text-sm font-medium transition-all ${
              activeTab === 'payment-methods'
                ? 'bg-white shadow-sm text-gray-900'
                : 'text-gray-600 hover:text-gray-900'
            }`}
          >
            Payment Methods
          </button>
          <button
            onClick={() => setActiveTab('transaction-history')}
            className={`py-2.5 px-3 rounded-md text-sm font-medium transition-all ${
              activeTab === 'transaction-history'
                ? 'bg-white shadow-sm text-gray-900'
                : 'text-gray-600 hover:text-gray-900'
            }`}
          >
            Transaction History
          </button>
        </div>
      </div>

      {/* Wallet Tab */}
      {activeTab === 'wallet' && (
        <div className="bg-white rounded-lg p-4 shadow-sm">
          <div className="text-center">
            <h2 className="text-base font-semibold text-gray-900 mb-1">Wallet Balance</h2>
            <p className="text-gray-500 text-xs mb-4">Your current ParkLink wallet balance</p>

            <div className="mb-6">
              <div className="w-12 h-12 bg-gray-200 rounded-full flex items-center justify-center mx-auto mb-4">
                <Wallet className="w-6 h-6 text-gray-600" />
              </div>
              <div className="text-3xl font-bold text-gray-900 mb-1">
                ₱{walletBalance.toLocaleString()}
              </div>
              <div className="text-gray-500 text-sm">Available Balance</div>
            </div>

            <div className="flex justify-center gap-3 mb-4">
              <button className="bg-black text-white px-3 py-2 rounded-md text-sm flex items-center gap-1 hover:bg-gray-800 transition-colors">
                <Plus className="w-3 h-3" />
                Top Up
              </button>
              <button className="bg-gray-100 text-gray-700 px-3 py-2 rounded-md text-sm flex items-center gap-1 hover:bg-gray-200 transition-colors">
                <Download className="w-3 h-3" />
                Withdraw
              </button>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <div className="text-center p-4 bg-gray-50 rounded-lg">
                <div className="w-10 h-10 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-3">
                  <Plus className="w-5 h-5 text-green-600" />
                </div>
                <h3 className="font-semibold text-sm text-gray-900 mb-1">Quick Top-up</h3>
                <p className="text-gray-500 text-xs mb-3">Add ₱500 instantly</p>
                <button className="w-full bg-gray-200 text-gray-700 py-2 rounded-md text-sm hover:bg-gray-300 transition-colors">
                  Top Up ₱500
                </button>
              </div>

              <div className="text-center p-4 bg-gray-50 rounded-lg">
                <div className="w-10 h-10 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-3">
                  <Calendar className="w-5 h-5 text-blue-600" />
                </div>
                <h3 className="font-semibold text-sm text-gray-900 mb-1">Auto Top-up</h3>
                <p className="text-gray-500 text-xs mb-3">Never run out of balance</p>
                <button className="w-full bg-gray-200 text-gray-700 py-2 rounded-md text-sm hover:bg-gray-300 transition-colors">
                  Set Up
                </button>
              </div>

              <div className="text-center p-4 bg-gray-50 rounded-lg">
                <div className="w-10 h-10 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-3">
                  <Eye className="w-5 h-5 text-purple-600" />
                </div>
                <h3 className="font-semibold text-sm text-gray-900 mb-1">Spending Report</h3>
                <p className="text-gray-500 text-xs mb-3">Track your expenses</p>
                <button className="w-full bg-gray-200 text-gray-700 py-2 rounded-md text-sm hover:bg-gray-300 transition-colors">
                  View Report
                </button>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Payment Methods Tab */}
      {activeTab === 'payment-methods' && (
        <div className="bg-white rounded-lg p-5 shadow-sm">
          <div className="flex justify-between items-center mb-4">
            <h2 className="text-lg font-semibold text-gray-900">Payment Methods</h2>
            <button className="bg-black text-white px-3 py-2 rounded-md text-sm flex items-center gap-2 hover:bg-gray-800 transition-colors">
              <Plus className="w-4 h-4" />
              Add Method
            </button>
          </div>

          <div className="space-y-3">
            {paymentMethods.map((method) => (
              <div key={method.id} className="flex items-center justify-between p-3 border border-gray-200 rounded-lg">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-gray-100 rounded-md flex items-center justify-center">
                    {method.type === 'GCash' ? (
                      <div className="w-5 h-5 bg-blue-500 rounded"></div>
                    ) : (
                      <CreditCard className="w-5 h-5 text-gray-600" />
                    )}
                  </div>
                  <div>
                    <div className="font-semibold text-sm text-gray-900">{method.type}</div>
                    <div className="text-gray-500 text-xs">{method.number}</div>
                  </div>
                </div>
                <div className="flex items-center gap-2">
                  {method.isDefault && (
                    <span className="bg-black text-white px-2 py-0.5 rounded-full text-xs font-medium">
                      Default
                    </span>
                  )}
                  <button className="p-1.5 text-gray-500 hover:text-gray-700 transition-colors">
                    <Edit className="w-4 h-4" />
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* Transaction History Tab */}
      {activeTab === 'transaction-history' && (
        <div className="bg-white rounded-lg p-5 shadow-sm">
          <div className="mb-4">
            <h2 className="text-lg font-semibold text-gray-900">Transaction History</h2>
            <p className="text-gray-500 text-xs">Your payment and wallet activity</p>
          </div>

          <div className="space-y-3 mb-4">
            {transactions.map((transaction) => {
              const IconComponent = transaction.icon;
              return (
                <div key={transaction.id} className="flex items-center justify-between p-3 border-l-4 border-l-gray-200 bg-gray-50 rounded-lg">
                  <div className="flex items-center gap-3">
                    <div className={`w-9 h-9 rounded-full flex items-center justify-center ${
                      transaction.type === 'income' ? 'bg-green-100' : 'bg-red-100'
                    }`}>
                      <IconComponent className={`w-5 h-5 ${
                        transaction.type === 'income' ? 'text-green-600' : 'text-red-600'
                      }`} />
                    </div>
                    <div>
                      <div className="font-semibold text-sm text-gray-900">{transaction.title}</div>
                      <div className="text-gray-500 text-xs">{transaction.date}</div>
                    </div>
                  </div>
                  <div className="flex items-center gap-2">
                    <div className={`font-semibold text-sm ${
                      transaction.type === 'income' ? 'text-green-600' : 'text-red-600'
                    }`}>
                      {transaction.type === 'income' ? '+' : '-'}₱{transaction.amount}
                    </div>
                    <span className="bg-gray-900 text-white px-2 py-0.5 rounded-full text-[10px] font-medium">
                      {transaction.status}
                    </span>
                  </div>
                </div>
              );
            })}
          </div>

          <div className="text-center">
            <button className="inline-flex items-center gap-1 text-gray-600 hover:text-gray-900 text-sm transition-colors">
              <Eye className="w-4 h-4" />
              View All Transactions
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default PaymentsWallet;
