import React, { useState } from "react";
import {
  Plus,
  Users,
  DollarSign,
  Car,
  TrendingUp,
  Eye,
  Edit,
  Phone,
  Mail,
  Star,
} from "lucide-react";

const PartnersManagement = () => {
  const [activeFilter, setActiveFilter] = useState("Active");

  const partners = [
    {
      id: 1,
      name: "SM City Iloilo",
      type: "Shopping Mall",
      rating: 4.8,
      contact: {
        name: "John Manager",
        phone: "+63 33 338 8888",
        email: "manager@sm-iloilo.com",
      },
      properties: {
        lots: 3,
        spots: 1250,
      },
      revenue: 385000,
      commission: 15,
      contract: "Premium",
      status: "Active",
    },
    {
      id: 2,
      name: "Robinsons Place Iloilo",
      type: "Shopping Mall",
      rating: 4.6,
      contact: {
        name: "Maria Supervisor",
        phone: "+63 33 320 1234",
        email: "info@robinsons-iloilo.com",
      },
      properties: {
        lots: 2,
        spots: 800,
      },
      revenue: 312000,
      commission: 12,
      contract: "Standard",
      status: "Active",
    },
    {
      id: 3,
      name: "Megaworld Center",
      type: "Business District",
      rating: 4.7,
      contact: {
        name: "Carlos Admin",
        phone: "+63 33 336 7890",
        email: "admin@megaworld-iloilo.com",
      },
      properties: {
        lots: 4,
        spots: 950,
      },
      revenue: 287000,
      commission: 18,
      contract: "Premium",
      status: "Active",
    },
    {
      id: 4,
      name: "Ayala Malls",
      type: "Shopping Mall",
      rating: 4.5,
      contact: {
        name: "Ana Director",
        phone: "+63 33 329 5678",
        email: "director@ayala-iloilo.com",
      },
      properties: {
        lots: 2,
        spots: 750,
      },
      revenue: 245000,
      commission: 10,
      contract: "Trial",
      status: "Pending",
    },
  ];

  const filteredPartners = partners.filter((partner) => {
    if (activeFilter === "All") return true;
    return partner.status === activeFilter;
  });

  const totalPartners = partners.length;
  const totalRevenue = partners.reduce(
    (sum, partner) => sum + partner.revenue,
    0
  );
  const totalSpots = partners.reduce(
    (sum, partner) => sum + partner.properties.spots,
    0
  );
  const avgRating =
    partners.reduce((sum, partner) => sum + partner.rating, 0) /
    partners.length;
  const newPartnersThisMonth = 2;

  const getContractBadgeColor = (contract) => {
    switch (contract) {
      case "Premium":
        return "bg-blue-100 text-blue-800";
      case "Standard":
        return "bg-gray-100 text-gray-800";
      case "Trial":
        return "bg-yellow-100 text-yellow-800";
      default:
        return "bg-gray-100 text-gray-800";
    }
  };

  const getStatusBadgeColor = (status) => {
    switch (status) {
      case "Active":
        return "bg-green-100 text-green-800";
      case "Pending":
        return "bg-yellow-100 text-yellow-800";
      case "Inactive":
        return "bg-red-100 text-red-800";
      default:
        return "bg-gray-100 text-gray-800";
    }
  };

  const formatCurrency = (amount) => {
    return `₱${(amount / 1000).toFixed(0)}K`;
  };

  const formatLargeCurrency = (amount) => {
    return `₱${(amount / 1000000).toFixed(2)}M`;
  };

  return (
    <div className="min-h-screen bg-gray-50 ">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="flex items-center justify-between mb-4">
          <h1 className=" text-2xl font-bold">Partners Management</h1>
          <div className="flex items-center space-x-4">
            <div className="flex bg-gray-100 rounded-lg p-1">
              {["All", "Active", "Pending", "Inactive"].map((filter) => (
                <button
                  key={filter}
                  onClick={() => setActiveFilter(filter)}
                  className={`px-4 py-2 text-sm font-medium rounded-md transition-colors ${
                    activeFilter === filter
                      ? "bg-white text-gray-900 shadow-sm"
                      : "text-gray-500 hover:text-gray-700"
                  }`}
                >
                  {filter}
                </button>
              ))}
            </div>
            <button className="flex items-center px-4 py-2 bg-black text-white rounded-lg hover:bg-gray-800 transition-colors">
              <Plus className="w-4 h-4 mr-2" />
              Add Partner
            </button>
          </div>
        </div>

        {/* Stats Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          <div className="bg-white rounded-lg p-6 shadow-sm">
            <div className="flex items-center justify-between mb-4">
              <div className="flex items-center">
                <Users className="w-5 h-5 text-gray-400 mr-2" />
                <h3 className="text-sm font-medium text-gray-500">
                  Total Partners
                </h3>
              </div>
            </div>
            <div className="flex items-end justify-between">
              <div>
                <p className="text-3xl font-bold text-gray-900">
                  {totalPartners}
                </p>
                <p className="text-sm text-green-600">
                  +{newPartnersThisMonth} new this month
                </p>
              </div>
            </div>
          </div>

          <div className="bg-white rounded-lg p-6 shadow-sm">
            <div className="flex items-center justify-between mb-4">
              <div className="flex items-center">
                <DollarSign className="w-5 h-5 text-gray-400 mr-2" />
                <h3 className="text-sm font-medium text-gray-500">
                  Total Revenue
                </h3>
              </div>
            </div>
            <div className="flex items-end justify-between">
              <div>
                <p className="text-3xl font-bold text-gray-900">
                  {formatLargeCurrency(totalRevenue)}
                </p>
                <p className="text-sm text-green-600">+8.2% from last month</p>
              </div>
            </div>
          </div>

          <div className="bg-white rounded-lg p-6 shadow-sm">
            <div className="flex items-center justify-between mb-4">
              <div className="flex items-center">
                <Car className="w-5 h-5 text-gray-400 mr-2" />
                <h3 className="text-sm font-medium text-gray-500">
                  Parking Spots
                </h3>
              </div>
            </div>
            <div className="flex items-end justify-between">
              <div>
                <p className="text-3xl font-bold text-gray-900">
                  {totalSpots.toLocaleString()}
                </p>
                <p className="text-sm text-gray-500">Across all partners</p>
              </div>
            </div>
          </div>

          <div className="bg-white rounded-lg p-6 shadow-sm">
            <div className="flex items-center justify-between mb-4">
              <div className="flex items-center">
                <TrendingUp className="w-5 h-5 text-gray-400 mr-2" />
                <h3 className="text-sm font-medium text-gray-500">
                  Avg Rating
                </h3>
              </div>
            </div>
            <div className="flex items-end justify-between">
              <div>
                <p className="text-3xl font-bold text-gray-900">
                  {avgRating.toFixed(1)}
                </p>
                <p className="text-sm text-gray-500">Customer satisfaction</p>
              </div>
            </div>
          </div>
        </div>

        {/* Partners Table */}
        <div className="bg-white rounded-lg shadow-sm">
          <div className="px-6 py-4 border-b border-gray-200">
            <h2 className="text-lg font-semibold text-gray-900">
              Partner Directory
            </h2>
            <p className="text-sm text-gray-500">
              Manage partner relationships and performance
            </p>
          </div>

          <div className="overflow-x-auto">
            <table className="w-full">
              <thead className="bg-gray-50">
                <tr>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Partner
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Contact
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Properties
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Revenue
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Commission
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Contract
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Status
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Actions
                  </th>
                </tr>
              </thead>
              <tbody className="bg-white divide-y divide-gray-200">
                {filteredPartners.map((partner) => (
                  <tr key={partner.id} className="hover:bg-gray-50">
                    <td className="px-6 py-4 whitespace-nowrap">
                      <div>
                        <div className="text-sm font-medium text-gray-900">
                          {partner.name}
                        </div>
                        <div className="text-sm text-gray-500">
                          {partner.type}
                        </div>
                        <div className="flex items-center mt-1">
                          <span className="text-sm text-gray-500 mr-1">
                            Rating: {partner.rating}
                          </span>
                          <div className="flex text-yellow-400">
                            {[...Array(5)].map((_, i) => (
                              <Star
                                key={i}
                                className={`w-3 h-3 ${
                                  i < Math.floor(partner.rating)
                                    ? "fill-current"
                                    : ""
                                }`}
                              />
                            ))}
                          </div>
                        </div>
                      </div>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <div>
                        <div className="text-sm font-medium text-gray-900">
                          {partner.contact.name}
                        </div>
                        <div className="text-sm text-gray-500">
                          {partner.contact.phone}
                        </div>
                        <div className="text-sm text-gray-500">
                          {partner.contact.email}
                        </div>
                      </div>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <div>
                        <div className="text-sm font-medium text-gray-900">
                          {partner.properties.lots} lots
                        </div>
                        <div className="text-sm text-gray-500">
                          {partner.properties.spots} spots
                        </div>
                      </div>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <div>
                        <div className="text-sm font-medium text-gray-900">
                          {formatCurrency(partner.revenue)}
                        </div>
                        <div className="text-sm text-gray-500">Monthly</div>
                      </div>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <div className="text-sm font-medium text-gray-900">
                        {partner.commission}%
                      </div>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <span
                        className={`inline-flex px-2 py-1 text-xs font-semibold rounded-full ${getContractBadgeColor(
                          partner.contract
                        )}`}
                      >
                        {partner.contract}
                      </span>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <span
                        className={`inline-flex px-2 py-1 text-xs font-semibold rounded-full ${getStatusBadgeColor(
                          partner.status
                        )}`}
                      >
                        {partner.status}
                      </span>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <div className="flex items-center space-x-3">
                        <button className="text-gray-400 hover:text-gray-600 transition-colors">
                          <Eye className="w-4 h-4" />
                        </button>
                        <button className="text-gray-400 hover:text-gray-600 transition-colors">
                          <Edit className="w-4 h-4" />
                        </button>
                        <button className="text-gray-400 hover:text-gray-600 transition-colors">
                          <Phone className="w-4 h-4" />
                        </button>
                        <button className="text-gray-400 hover:text-gray-600 transition-colors">
                          <Mail className="w-4 h-4" />
                        </button>
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PartnersManagement;
