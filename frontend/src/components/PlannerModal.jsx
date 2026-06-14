import React, { useState } from 'react';
import { X, Sparkles, MapPin, DollarSign, Calendar, Users, Train, Hotel, Plane } from 'lucide-react';

export default function PlannerModal({ isOpen, onClose, onSearch }) {
  const [budget, setBudget] = useState(25000);
  const [distance, setDistance] = useState(1000);
  const [travelers, setTravelers] = useState(2);
  const [duration, setDuration] = useState(5);
  const [tripType, setTripType] = useState('Couple'); // Solo, Couple, Family, Friends
  const [categories, setCategories] = useState(['Adventure', 'Beach']); // Beach, Hill Station, Adventure, Religious, Luxury, Nature
  const [transport, setTransport] = useState('Flight'); // Flight, Train, Bus, Cab, Self Drive
  const [hotelType, setHotelType] = useState('3-Star'); // Hostel, 3-Star, 5-Star, Resort

  if (!isOpen) return null;

  const handleCategoryToggle = (cat) => {
    if (categories.includes(cat)) {
      setCategories(categories.filter(c => c !== cat));
    } else {
      setCategories([...categories, cat]);
    }
  };

  const handleSearchSubmit = () => {
    onSearch({
      budget,
      distance,
      travelers,
      duration,
      tripType,
      categories,
      transport,
      hotelType
    });
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto bg-slate-50/95 backdrop-blur-sm flex items-center justify-center p-4">
      <div className="relative w-full max-w-2xl rounded-3xl overflow-hidden shadow-2xl border border-slate-200/70 flex flex-col max-h-[90vh] bg-slate-50">
        {/* Header */}
        <div className="p-6 border-b border-slate-200/80 flex justify-between items-center bg-slate-100">
          <div className="flex items-center gap-2">
            <div className="p-2 bg-[#fee2e2] rounded-xl text-[#b91c1c]">
              <Sparkles className="h-5 w-5 fill-current" />
            </div>
            <div>
              <h3 className="font-display font-extrabold text-xl text-slate-900">AI Trip Planner</h3>
              <p className="text-xs text-slate-500">Match filters tailored for your style</p>
            </div>
          </div>
          <button 
            onClick={onClose}
            className="p-2 text-slate-700 hover:text-slate-900 hover:bg-slate-200 rounded-xl transition-all"
          >
            <X className="h-5 w-5" />
          </button>
        </div>

        {/* Scrollable Form */}
        <div className="p-6 overflow-y-auto space-y-6 flex-1 text-left">
          
          {/* Row 1: Budget Range & Distance */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="space-y-2">
              <label className="text-xs font-semibold text-slate-500 uppercase tracking-wider flex items-center gap-1.5">
                <DollarSign className="h-3.5 w-3.5 text-orange-500" />
                Max Budget: <span className="text-orange-500 font-bold">₹{budget.toLocaleString()}</span>
              </label>
              <input
                type="range"
                min="5000"
                max="100000"
                step="5000"
                value={budget}
                onChange={(e) => setBudget(Number(e.target.value))}
                className="w-full h-1.5 bg-slate-200 rounded-lg appearance-none cursor-pointer accent-red-500"
              />
              <div className="flex justify-between text-[10px] text-slate-500 font-medium">
                <span>₹5,000</span>
                <span>₹100,000+</span>
              </div>
            </div>

            <div className="space-y-2">
              <label className="text-xs font-semibold text-slate-500 uppercase tracking-wider flex items-center gap-1.5">
                <MapPin className="h-3.5 w-3.5 text-red-500" />
                Distance from Mumbai: <span className="text-red-500 font-bold">{distance} km</span>
              </label>
              <input
                type="range"
                min="100"
                max="3000"
                step="100"
                value={distance}
                onChange={(e) => setDistance(Number(e.target.value))}
                className="w-full h-1.5 bg-slate-200 rounded-lg appearance-none cursor-pointer accent-red-500"
              />
              <div className="flex justify-between text-[10px] text-slate-500 font-medium">
                <span>100 km</span>
                <span>3,000 km</span>
              </div>
            </div>
          </div>

          {/* Row 2: Travelers Counter & Duration */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="space-y-2">
              <label className="text-xs font-semibold text-slate-500 uppercase tracking-wider flex items-center gap-1.5">
                <Users className="h-3.5 w-3.5 text-red-500" />
                Number of Travelers
              </label>
              <div className="flex items-center gap-4 bg-slate-100 p-2.5 rounded-xl border border-slate-200 w-fit">
                <button
                  type="button"
                  onClick={() => setTravelers(Math.max(1, travelers - 1))}
                  className="w-8 h-8 rounded-lg bg-white border border-slate-200 hover:bg-slate-100 font-bold flex items-center justify-center text-slate-900 transition-colors"
                >
                  -
                </button>
                <span className="font-bold text-slate-900 text-lg w-6 text-center">{travelers}</span>
                <button
                  type="button"
                  onClick={() => setTravelers(travelers + 1)}
                  className="w-8 h-8 rounded-lg bg-white border border-slate-200 hover:bg-slate-100 font-bold flex items-center justify-center text-slate-900 transition-colors"
                >
                  +
                </button>
              </div>
            </div>

            <div className="space-y-2">
              <label className="text-xs font-semibold text-slate-500 uppercase tracking-wider flex items-center gap-1.5">
                <Calendar className="h-3.5 w-3.5 text-red-500" />
                Trip Duration (Days): <span className="text-red-500 font-bold">{duration} Days</span>
              </label>
              <input
                type="range"
                min="1"
                max="14"
                value={duration}
                onChange={(e) => setDuration(Number(e.target.value))}
                className="w-full h-1.5 bg-slate-200 rounded-lg appearance-none cursor-pointer accent-red-500"
              />
              <div className="flex justify-between text-[10px] text-slate-500 font-medium">
                <span>1 Day</span>
                <span>14 Days</span>
              </div>
            </div>
          </div>

          {/* Row 3: Companion Type (Family, Couple, Solo, Friends) */}
          <div className="space-y-3">
            <label className="text-xs font-semibold text-slate-500 uppercase tracking-wider block">
              Trip Companion Type
            </label>
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
              {['Solo', 'Couple', 'Family', 'Friends'].map((t) => (
                <button
                  key={t}
                  type="button"
                  onClick={() => setTripType(t)}
                  className={`py-3 px-4 rounded-xl text-sm font-semibold border transition-all text-center ${
                    tripType === t
                      ? 'bg-gradient-to-r from-red-500/10 to-rose-500/10 text-red-600 border-red-200 shadow-sm'
                      : 'bg-white text-slate-700 border-slate-200 hover:bg-slate-50'
                  }`}
                >
                  {t}
                </button>
              ))}
            </div>
          </div>

          {/* Row 4: Travel Categories */}
          <div className="space-y-3">
            <label className="text-xs font-semibold text-slate-500 uppercase tracking-wider block">
              Preferred Categories (Select Multiple)
            </label>
            <div className="flex flex-wrap gap-2">
              {['Beach', 'Hill Station', 'Adventure', 'Religious', 'Luxury', 'Nature'].map((cat) => {
                const isSelected = categories.includes(cat);
                return (
                  <button
                    key={cat}
                    type="button"
                    onClick={() => handleCategoryToggle(cat)}
                    className={`py-2 px-3 rounded-xl text-xs font-bold border transition-all ${
                      isSelected
                        ? 'bg-red-100 text-red-700 border-red-200'
                        : 'bg-white text-slate-700 border-slate-200 hover:bg-slate-50'
                    }`}
                  >
                    {cat}
                  </button>
                );
              })}
            </div>
          </div>

          {/* Row 5: Transport & Hotel Preference */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="space-y-3">
              <label className="text-xs font-semibold text-slate-300 uppercase tracking-wider flex items-center gap-1.5">
                <Train className="h-3.5 w-3.5 text-[#ef233c]" />
                Transport Preference
              </label>
              <select
                value={transport}
                onChange={(e) => setTransport(e.target.value)}
                className="w-full p-3 rounded-xl bg-white border border-slate-200 text-sm font-semibold text-slate-900 focus:outline-none focus:border-red-300 cursor-pointer"
              >
                {['Flight', 'Train', 'Bus', 'Cab', 'Self Drive'].map((opt) => (
                  <option key={opt} value={opt} className="bg-white text-slate-900">{opt}</option>
                ))}
              </select>
            </div>

            <div className="space-y-3">
              <label className="text-xs font-semibold text-slate-300 uppercase tracking-wider flex items-center gap-1.5">
                <Hotel className="h-3.5 w-3.5 text-[#ef233c]" />
                Hotel Type
              </label>
              <select
                value={hotelType}
                onChange={(e) => setHotelType(e.target.value)}
                className="w-full p-3 rounded-xl bg-white border border-slate-200 text-sm font-semibold text-slate-900 focus:outline-none focus:border-red-300 cursor-pointer"
              >
                {['Hostel', '3-Star', '5-Star', 'Resort'].map((opt) => (
                  <option key={opt} value={opt} className="bg-white text-slate-900">{opt}</option>
                ))}
              </select>
            </div>
          </div>

        </div>

        {/* Footer */}
        <div className="p-6 border-t border-slate-200/80 bg-slate-100 flex items-center justify-between">
          <button
            type="button"
            onClick={onClose}
            className="px-5 py-2.5 rounded-xl border border-slate-200 hover:bg-slate-50 text-slate-700 hover:text-slate-900 font-semibold text-sm transition-all"
          >
            Cancel
          </button>
          <button
            type="button"
            onClick={handleSearchSubmit}
            className="flex items-center gap-2 bg-gradient-to-r from-[#ef233c] to-[#d90429] hover:from-[#d90429] hover:to-[#ef233c] text-white px-6 py-2.5 rounded-xl font-bold text-sm shadow-lg shadow-red-500/10 transition-all hover:scale-105"
          >
            <Sparkles className="h-4 w-4 fill-white" />
            Apply AI Filters
          </button>
        </div>
      </div>
    </div>
  );
}
