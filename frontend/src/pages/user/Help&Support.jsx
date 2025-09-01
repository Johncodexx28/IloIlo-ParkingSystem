import React, { useState } from 'react';
import { MessageCircle, Phone, Mail, Search, Clock, ChevronDown, ChevronUp } from 'lucide-react';

const HelpSupport = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [expandedFaq, setExpandedFaq] = useState(null);

  const faqItems = [
    {
      id: 1,
      question: 'How do I book a parking spot?',
      answer: 'You can book a parking spot by using the "Find Parking" feature. Search for your desired location, select a spot, choose your duration, and complete the payment.',
      category: 'Booking'
    },
    {
      id: 2,
      question: 'What payment methods are accepted?',
      answer: 'We accept GCash, PayMaya, credit/debit cards, and wallet payments. You can also use your RFID card for quick payments.',
      category: 'Payment'
    },
    {
      id: 3,
      question: 'Can I extend my parking time?',
      answer: 'Yes, you can extend your parking time through the app if spots are available. Additional charges will apply based on the hourly rate.',
      category: 'Booking'
    },
    {
      id: 4,
      question: 'How do I get an RFID card?',
      answer: 'You can request an RFID card through the app. Choose your card type, pickup location, and submit the request. You\'ll be notified when it\'s ready.',
      category: 'RFID'
    }
  ];

  const supportOptions = [
    {
      title: 'Live Chat',
      description: 'Get instant help from our support team',
      icon: MessageCircle,
      buttonText: 'Start Chat',
      buttonStyle: 'bg-black text-white hover:bg-gray-800',
      iconColor: 'text-blue-500',
      bgColor: 'bg-blue-50'
    },
    {
      title: 'Call Support',
      description: 'Available 24/7 for urgent issues',
      icon: Phone,
      buttonText: 'Call Now',
      buttonStyle: 'bg-white text-gray-700 border border-gray-200 hover:bg-gray-50',
      iconColor: 'text-green-500',
      bgColor: 'bg-green-50'
    },
    {
      title: 'Email Support',
      description: 'Send us a detailed message',
      icon: Mail,
      buttonText: 'Send Email',
      buttonStyle: 'bg-white text-gray-700 border border-gray-200 hover:bg-gray-50',
      iconColor: 'text-purple-500',
      bgColor: 'bg-purple-50'
    }
  ];

  const contactInfo = [
    {
      title: 'Phone Support',
      value: '+63 33 123 4567',
      icon: Phone
    },
    {
      title: 'Email',
      value: 'support@parklink.ph',
      icon: Mail
    },
    {
      title: 'Support Hours',
      value: '24/7 Available',
      icon: Clock
    }
  ];

  const emergencyContacts = [
    {
      title: 'Parking Emergencies:',
      number: '+63 33 911 PARK'
    },
    {
      title: 'Payment Issues:',
      number: '+63 33 123 PAY'
    },
    {
      title: 'Technical Support:',
      number: '+63 33 123 TECH'
    }
  ];

  const filteredFaq = faqItems.filter(item =>
    item.question.toLowerCase().includes(searchQuery.toLowerCase()) ||
    item.answer.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const toggleFaq = (id) => {
    setExpandedFaq(expandedFaq === id ? null : id);
  };

  return (
    <div className="min-h-screen bg-gray-50 p-6">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-gray-900">Help & Support</h1>
        </div>

        {/* Support Options */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
          {supportOptions.map((option, index) => {
            const IconComponent = option.icon;
            return (
              <div key={index} className="bg-white rounded-xl p-6 shadow-sm border border-gray-200">
                <div className={`w-12 h-12 ${option.bgColor} rounded-lg flex items-center justify-center mb-4`}>
                  <IconComponent size={24} className={option.iconColor} />
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">{option.title}</h3>
                <p className="text-gray-600 mb-4">{option.description}</p>
                <button className={`w-full py-2 px-4 rounded-lg font-medium transition-colors ${option.buttonStyle}`}>
                  {option.buttonText}
                </button>
              </div>
            );
          })}
        </div>

        {/* FAQ Section */}
        <div className="bg-white rounded-xl shadow-sm border border-gray-200 mb-8">
          <div className="p-6 border-b border-gray-200">
            <h2 className="text-xl font-semibold text-gray-900 mb-2">Frequently Asked Questions</h2>
            <p className="text-gray-600 mb-4">Find quick answers to common questions</p>
            
            {/* Search Bar */}
            <div className="relative">
              <Search size={20} className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
              <input
                type="text"
                placeholder="Search for help..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-10 pr-4 py-3 bg-gray-50 border-0 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>
          </div>

          <div className="divide-y divide-gray-200">
            {filteredFaq.map((faq) => (
              <div key={faq.id} className="p-6">
                <button
                  onClick={() => toggleFaq(faq.id)}
                  className="w-full flex justify-between items-center text-left"
                >
                  <div className="flex-1">
                    <h3 className="text-lg font-medium text-gray-900 mb-1">{faq.question}</h3>
                    <span className="inline-block px-2 py-1 bg-gray-100 text-gray-600 text-xs rounded-full">
                      {faq.category}
                    </span>
                  </div>
                  {expandedFaq === faq.id ? (
                    <ChevronUp size={20} className="text-gray-500 ml-4" />
                  ) : (
                    <ChevronDown size={20} className="text-gray-500 ml-4" />
                  )}
                </button>
                
                {expandedFaq === faq.id && (
                  <div className="mt-4 pl-0">
                    <p className="text-gray-700 leading-relaxed">{faq.answer}</p>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>

        {/* Contact Information */}
        <div className="bg-white rounded-xl shadow-sm border border-gray-200">
          <div className="p-6 border-b border-gray-200">
            <h2 className="text-xl font-semibold text-gray-900 mb-2">Contact Information</h2>
            <p className="text-gray-600">Get in touch with our support team</p>
          </div>

          <div className="p-6">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              {/* Contact Details */}
              <div>
                <div className="space-y-6">
                  {contactInfo.map((contact, index) => {
                    const IconComponent = contact.icon;
                    return (
                      <div key={index} className="flex items-center gap-3">
                        <div className="w-10 h-10 bg-gray-100 rounded-lg flex items-center justify-center">
                          <IconComponent size={20} className="text-gray-600" />
                        </div>
                        <div>
                          <h3 className="font-medium text-gray-900">{contact.title}</h3>
                          <p className="text-gray-600">{contact.value}</p>
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>

              {/* Emergency Contacts */}
              <div>
                <h3 className="text-lg font-semibold text-gray-900 mb-4">Emergency Contacts</h3>
                <div className="space-y-3">
                  {emergencyContacts.map((emergency, index) => (
                    <div key={index} className="flex justify-between items-center">
                      <span className="text-gray-700">{emergency.title}</span>
                      <span className="font-semibold text-gray-900">{emergency.number}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HelpSupport;