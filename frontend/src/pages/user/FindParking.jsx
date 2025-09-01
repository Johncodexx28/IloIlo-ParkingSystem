import React, { useState } from 'react';
import { Search, MapPin, Star, Heart, Eye, Clock, Shield, Video, DollarSign, Zap, Car } from 'lucide-react';
import { GoogleMap, LoadScript, Marker } from "@react-google-maps/api";

const FindParking = () => {
  const [searchData, setSearchData] = useState({
    location: '',
    date: '',
    time: '',
    duration: '2 hours'
  });
  
  const [filters, setFilters] = useState({
    covered: false,
    cctv: false,
    budgetFriendly: false
  });
  
  const [sortBy, setSortBy] = useState('Distance');
  const [showResults, setShowResults] = useState(false);
  const [favorites, setFavorites] = useState(new Set());

  // Parking spots data
  const parkingSpots = [
    {
      id: 1,
      name: 'SM City Iloilo - Main Parking',
      distance: '0.2 km away',
      rating: 4.8,
      availableSpots: 63,
      hourlyRate: 50,
      totalCost: 100,
      amenities: ['Covered', 'Security', 'CCTV'],
      image: '/api/placeholder/400/200'
    },
    {
      id: 2,
      name: 'Robinsons Place Iloilo',
      distance: '0.6 km away',
      rating: 4.6,
      availableSpots: 42,
      hourlyRate: 45,
      totalCost: 90,
      amenities: ['Covered', '24/7 Access'],
      image: '/api/placeholder/400/200'
    },
    {
      id: 3,
      name: 'Megaworld Center',
      distance: '1.2 km away',
      rating: 4.7,
      availableSpots: 28,
      hourlyRate: 55,
      totalCost: 110,
      amenities: ['Premium', 'Valet Service'],
      image: '/api/placeholder/400/200'
    },
    {
      id: 4,
      name: 'Ayala Malls Iloilo',
      distance: '1.5 km away',
      rating: 4.5,
      availableSpots: 57,
      hourlyRate: 60,
      totalCost: 120,
      amenities: ['Premium', 'Electric Charging'],
      image: '/api/placeholder/400/200'
    }
  ];

  const handleSearch = () => {
    setShowResults(true);
  };

  const toggleFavorite = (spotId) => {
    const newFavorites = new Set(favorites);
    if (newFavorites.has(spotId)) {
      newFavorites.delete(spotId);
    } else {
      newFavorites.add(spotId);
    }
    setFavorites(newFavorites);
  };

  const getAmenityIcon = (amenity) => {
    switch (amenity.toLowerCase()) {
      case 'covered':
        return <Shield className="w-4 h-4" />;
      case 'security':
        return <Eye className="w-4 h-4" />;
      case 'cctv':
        return <Video className="w-4 h-4" />;
      case '24/7 access':
        return <Clock className="w-4 h-4" />;
      case 'premium':
        return <Star className="w-4 h-4" />;
      case 'valet service':
        return <Car className="w-4 h-4" />;
      case 'electric charging':
        return <Zap className="w-4 h-4" />;
      default:
        return <Shield className="w-4 h-4" />;
    }
  };

  // Google Map setup
  const containerStyle = {
    width: "100%",
    height: "100%",
    borderRadius: "0.75rem",
  };

  const phinmaCenter = {
    lat: 10.696290,  // PHINMA UI latitude
    lng: 122.565510, // PHINMA UI longitude
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 py-6">
        {/* Header */}
        <div className="flex justify-between items-center mb-8">
          <h1 className="text-3xl font-bold text-gray-900">Find Parking</h1>
          <button className="flex items-center gap-2 px-4 py-2 text-gray-600 hover:text-gray-900 transition-colors">
            <MapPin className="w-5 h-5" />
            Map View
          </button>
        </div>

        {/* Search Section */}
        <div className="bg-white rounded-xl shadow-sm p-6 mb-8">
          <h2 className="text-xl font-semibold mb-2">Search Parking Spots</h2>
          <p className="text-gray-600 mb-6">Find the perfect parking spot for your needs</p>
          
          <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-6">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Location</label>
              <input
                type="text"
                placeholder="Enter location..."
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                value={searchData.location}
                onChange={(e) => setSearchData({...searchData, location: e.target.value})}
              />
            </div>
            
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Date</label>
              <input
                type="text"
                placeholder="dd/mm/yyyy"
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                value={searchData.date}
                onChange={(e) => setSearchData({...searchData, date: e.target.value})}
              />
            </div>
            
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Time</label>
              <input
                type="text"
                placeholder="--:-- --"
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                value={searchData.time}
                onChange={(e) => setSearchData({...searchData, time: e.target.value})}
              />
            </div>
            
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Duration</label>
              <select
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                value={searchData.duration}
                onChange={(e) => setSearchData({...searchData, duration: e.target.value})}
              >
                <option>1 hour</option>
                <option>2 hours</option>
                <option>3 hours</option>
                <option>4 hours</option>
                <option>All day</option>
              </select>
            </div>
          </div>
          
          <div className="flex items-center gap-6 mb-6">
            <span className="text-sm font-medium text-gray-700">Filters:</span>
            <label className="flex items-center gap-2 cursor-pointer">
              <input
                type="checkbox"
                className="rounded"
                checked={filters.covered}
                onChange={(e) => setFilters({...filters, covered: e.target.checked})}
              />
              <Shield className="w-4 h-4" />
              <span className="text-sm">Covered</span>
            </label>
            <label className="flex items-center gap-2 cursor-pointer">
              <input
                type="checkbox"
                className="rounded"
                checked={filters.cctv}
                onChange={(e) => setFilters({...filters, cctv: e.target.checked})}
              />
              <Video className="w-4 h-4" />
              <span className="text-sm">CCTV</span>
            </label>
            <label className="flex items-center gap-2 cursor-pointer">
              <input
                type="checkbox"
                className="rounded"
                checked={filters.budgetFriendly}
                onChange={(e) => setFilters({...filters, budgetFriendly: e.target.checked})}
              />
              <DollarSign className="w-4 h-4" />
              <span className="text-sm">Budget Friendly</span>
            </label>
          </div>
          
          <button
            onClick={handleSearch}
            className="w-full md:w-auto bg-gray-900 text-white px-8 py-3 rounded-lg hover:bg-gray-800 transition-colors flex items-center justify-center gap-2"
          >
            <Search className="w-5 h-5" />
            Search
          </button>
        </div>

        {/* Interactive Map */}
        <div className="bg-white rounded-xl shadow-sm p-6 mb-8">
          <h2 className="text-xl font-semibold mb-2">Interactive Map</h2>
          <p className="text-gray-600 mb-6">View parking locations on the map</p>
          
          <div className="bg-gray-100 rounded-lg h-96 overflow-hidden">
            <LoadScript googleMapsApiKey="YOUR_API_KEY_HERE">
              <GoogleMap
                mapContainerStyle={containerStyle}
                center={phinmaCenter}
                zoom={17}
              >
                {/* Marker for PHINMA UI */}
                <Marker position={phinmaCenter} title="PHINMA - University of Iloilo" />
              </GoogleMap>
            </LoadScript>
          </div>
        </div>

        {/* Results Section */}
        {showResults && (
          <div>
            <div className="flex justify-between items-center mb-6">
              <h2 className="text-xl font-semibold">Available Parking Spots</h2>
              <div className="flex items-center gap-2">
                <span className="text-sm text-gray-600">Sort by:</span>
                <select
                  value={sortBy}
                  onChange={(e) => setSortBy(e.target.value)}
                  className="px-3 py-1 border border-gray-300 rounded-lg text-sm"
                >
                  <option>Distance</option>
                  <option>Price</option>
                  <option>Rating</option>
                  <option>Available Spots</option>
                </select>
              </div>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {parkingSpots.map((spot) => (
                <div key={spot.id} className="bg-white rounded-xl shadow-sm overflow-hidden">
                  <div className="h-48 bg-gray-200"></div>
                  
                  <div className="p-6">
                    <div className="flex justify-between items-start mb-4">
                      <div>
                        <h3 className="font-semibold text-lg mb-1">{spot.name}</h3>
                        <p className="text-gray-600 text-sm">{spot.distance}</p>
                      </div>
                      <div className="flex items-center gap-1">
                        <Star className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                        <span className="text-sm font-medium">{spot.rating}</span>
                      </div>
                    </div>
                    
                    <div className="grid grid-cols-3 gap-4 mb-4 text-sm">
                      <div>
                        <p className="text-gray-600">Available Spots:</p>
                        <p className="font-semibold text-green-600">{spot.availableSpots}</p>
                      </div>
                      <div>
                        <p className="text-gray-600">Hourly Rate:</p>
                        <p className="font-semibold">₱{spot.hourlyRate}</p>
                      </div>
                      <div>
                        <p className="text-gray-600">Total Cost:</p>
                        <p className="font-semibold">₱{spot.totalCost}</p>
                      </div>
                    </div>
                    
                    <div className="flex gap-2 mb-4">
                      {spot.amenities.map((amenity, index) => (
                        <span
                          key={index}
                          className="flex items-center gap-1 px-2 py-1 bg-gray-100 text-gray-700 text-xs rounded-full"
                        >
                          {getAmenityIcon(amenity)}
                          {amenity}
                        </span>
                      ))}
                    </div>
                    
                    <div className="flex gap-3">
                      <button className="flex-1 bg-gray-900 text-white py-3 rounded-lg hover:bg-gray-800 transition-colors flex items-center justify-center gap-2">
                        <Clock className="w-4 h-4" />
                        Book Now
                      </button>
                      <button
                        onClick={() => toggleFavorite(spot.id)}
                        className={`p-3 rounded-lg border transition-colors ${
                          favorites.has(spot.id)
                            ? 'border-red-200 bg-red-50 text-red-600'
                            : 'border-gray-300 hover:border-gray-400 text-gray-600'
                        }`}
                      >
                        <Heart className={`w-4 h-4 ${favorites.has(spot.id) ? 'fill-current' : ''}`} />
                      </button>
                      <button className="p-3 rounded-lg border border-gray-300 hover:border-gray-400 text-gray-600 transition-colors">
                        <Eye className="w-4 h-4" />
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default FindParking;
