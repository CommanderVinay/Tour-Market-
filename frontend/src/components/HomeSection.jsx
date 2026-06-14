import React, { useState } from 'react';
import { Sparkles, MapPin, Navigation, Star, Flame, Play, Eye, ThumbsUp, CloudSun } from 'lucide-react';
import { DESTINATIONS, TRAVEL_REELS } from '../data/mockData';

export default function HomeSection({ onPlanTripClick, onSelectDestination }) {
  const [activeReel, setActiveReel] = useState(null);

  // Filter local destinations (arbitrarily choose within 1000km for demo)
  const nearbyDestinations = DESTINATIONS.filter(dest => dest.distance <= 1000);
  const trendingDestinations = DESTINATIONS.filter(dest => dest.rating >= 4.8);

  return (
    <div className="space-y-12 pb-16">
      {/* 1. Hero Banner */}
      <div className="relative rounded-3xl overflow-hidden glass-card border border-slate-200/70 shadow-2xl">
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1469854523086-cc02fe5d8800?w=1600&auto=format&fit=crop&q=80')] bg-cover bg-center opacity-40 mix-blend-overlay"></div>
        <div className="absolute inset-0 bg-gradient-to-t from-slate-50/0 via-slate-50/70 to-transparent"></div>
        
        <div className="relative max-w-4xl mx-auto text-center px-6 py-20 md:py-28 space-y-6">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#fee2e2] border border-[#fecaca] text-slate-900 text-xs font-semibold uppercase tracking-wider animate-pulse-slow">
            <Sparkles className="h-3.5 w-3.5 text-[#ef233c]" />
            Empowered by AI Recommendation System
          </div>
          
          <h1 className="font-display font-black text-4xl sm:text-6xl tracking-tight leading-tight text-slate-900">
            Discover Your Next
            <span className="block mt-2 bg-gradient-to-r from-slate-900 via-red-200 to-[#ef233c] bg-clip-text text-transparent">
              Perfect Adventure
            </span>
          </h1>
          
          <p className="text-slate-600 text-base sm:text-lg max-w-2xl mx-auto leading-relaxed">
            The premium social platform linking travelers, custom AI route planners, verified hotel bookings, and immediate transport tickets.
          </p>

          <div className="pt-4">
            <button
              onClick={onPlanTripClick}
              className="group relative inline-flex items-center justify-center gap-3 bg-gradient-to-r from-[#ef233c] to-[#d90429] p-[2px] rounded-2xl focus:outline-none transition-all duration-300 hover:scale-105 shadow-xl shadow-red-500/10 hover:shadow-red-500/30 cursor-pointer"
            >
              <span className="block px-8 py-4 rounded-[14px] bg-white text-slate-900 font-display font-extrabold text-lg sm:text-xl transition-colors group-hover:bg-slate-100 flex items-center gap-2.5 shadow-sm shadow-slate-200">
                <Sparkles className="h-5 w-5 fill-current text-[#ef233c]" />
                Plan My Trip
              </span>
            </button>
          </div>
        </div>
      </div>

      {/* 2. Weather & Location Recommendations */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <div className="lg:col-span-2 glass-card p-6 rounded-2xl flex flex-col md:flex-row items-center justify-between gap-6 relative overflow-hidden">
          <div className="absolute top-0 right-0 w-64 h-64 bg-red-500/5 rounded-full blur-3xl"></div>
          <div className="space-y-3 relative z-10 text-center md:text-left">
            <div className="inline-flex items-center gap-1.5 text-xs font-semibold text-red-400 uppercase tracking-wider">
              <Navigation className="h-3.5 w-3.5" />
              Detected Location: Mumbai, India
            </div>
            <h3 className="font-display font-bold text-2xl">Tailored Recommendations</h3>
            <p className="text-sm text-slate-400 max-w-md">
              It's warm and sunny in coastal regions today. We recommend exploring South Goa or the tranquil backwaters of Kerala for weekend escapes!
            </p>
          </div>
          <div className="flex items-center gap-4 bg-slate-100/90 border border-slate-200/70 rounded-2xl p-4 w-full md:w-auto justify-center">
            <CloudSun className="h-10 w-10 text-[#ef233c]" />
            <div>
              <div className="text-xl font-bold font-display text-slate-900">29°C</div>
              <div className="text-xs text-slate-600">Perfect Beach Weather</div>
            </div>
          </div>
        </div>
        
        {/* Quick Search Tooltip / AI Advice */}
        <div className="glass-card p-6 rounded-2xl flex items-center gap-4 border border-slate-200/70 bg-slate-100/85">
          <div className="p-3 bg-[#ef233c]/10 rounded-xl">
            <Flame className="h-6 w-6 text-[#ef233c]" />
          </div>
          <div>
            <h4 className="font-bold text-slate-900">Hot Trend This Week</h4>
            <p className="text-xs text-slate-400 mt-1">
              Search queries for <strong className="text-red-300">Rishikesh Rafting</strong> increased by 42% in the last 48 hours. Ready for some rapids?
            </p>
          </div>
        </div>
      </div>

      {/* 3. Travel Reels Section */}
      <div className="space-y-4">
        <div className="flex items-center justify-between">
          <h2 className="font-display font-extrabold text-2xl flex items-center gap-2 text-slate-900">
            <Play className="h-5 w-5 text-[#ef233c] fill-[#ef233c]/20" />
            Travel Reels
          </h2>
          <span className="text-xs text-slate-400 cursor-pointer hover:text-red-400">View All</span>
        </div>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-3 lg:grid-cols-3 gap-4">
          {TRAVEL_REELS.map((reel) => (
            <div 
              key={reel.id} 
              onClick={() => setActiveReel(reel)}
              className="relative aspect-[9/16] rounded-2xl overflow-hidden group cursor-pointer border border-slate-200/60 bg-slate-100"
            >
              {/* Cover Image fallback / Styling */}
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950/60 via-slate-950/20 to-transparent z-10"></div>
              {/* Play symbol */}
              <div className="absolute inset-0 flex items-center justify-center z-10 opacity-0 group-hover:opacity-100 transition-opacity">
                <div className="p-3 rounded-full bg-white/70 backdrop-blur-md border border-slate-200/40 text-slate-900">
                  <Play className="h-6 w-6 text-slate-900" />
                </div>
              </div>

              {/* Reel Info */}
              <div className="absolute bottom-4 left-4 right-4 z-20 space-y-2 text-left">
                <div className="flex items-center gap-2">
                  <img src={reel.user.avatar} alt={reel.user.name} className="w-6 h-6 rounded-full object-cover border border-slate-200/60" />
                  <span className="text-xs font-semibold text-slate-900 drop-shadow-md">{reel.user.handle}</span>
                </div>
                <p className="text-xs text-slate-700 line-clamp-2 font-medium drop-shadow-md">{reel.title}</p>
                <div className="flex items-center gap-3 text-[10px] text-slate-300">
                  <span className="flex items-center gap-1"><ThumbsUp className="h-3 w-3" /> {reel.likes}</span>
                </div>
              </div>
              
              <video 
                src={reel.videoUrl} 
                className="w-full h-full object-cover scale-105 group-hover:scale-100 transition-transform duration-500" 
                muted 
                loop 
                playsInline
                autoPlay
              />
            </div>
          ))}
        </div>
      </div>

      {/* 4. Trending Tourist Places */}
      <div className="space-y-4">
        <h2 className="font-display font-extrabold text-2xl flex items-center gap-2 text-slate-900">
          <Star className="h-5 w-5 text-[#ef233c] fill-[#ef233c]/20" />
          Trending Tourist Destinations
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {trendingDestinations.map((dest) => (
            <div
              key={dest.id}
              onClick={() => onSelectDestination(dest.id)}
              className="group glass-card rounded-2xl overflow-hidden cursor-pointer border border-slate-200/70 glass-card-hover text-left flex flex-col"
            >
              <div className="relative aspect-[4/3] overflow-hidden">
                <img
                  src={dest.image}
                  alt={dest.name}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute top-4 right-4 bg-white/80 backdrop-blur-md px-3 py-1 rounded-xl border border-slate-200/70 flex items-center gap-1 z-10">
                  <Star className="h-3.5 w-3.5 text-orange-400 fill-orange-400" />
                  <span className="text-xs font-bold text-slate-900">{dest.rating}</span>
                </div>
                <div className="absolute bottom-4 left-4 bg-[#ef233c] text-white px-2.5 py-0.5 rounded-lg text-xs font-bold uppercase tracking-wider z-10 border border-[#fecaca]">
                  {dest.category}
                </div>
              </div>
              
              <div className="p-5 flex-1 flex flex-col justify-between space-y-4">
                <div>
                  <div className="flex justify-between items-start">
                    <h3 className="font-display font-bold text-xl text-slate-900 group-hover:text-[#ef233c] transition-colors">
                      {dest.name}
                    </h3>
                    <div className="flex items-center text-xs text-slate-400">
                      <MapPin className="h-3.5 w-3.5 text-[#ef233c] mr-1" />
                      {dest.distance} km away
                    </div>
                  </div>
                  <p className="text-xs text-slate-400 mt-2 line-clamp-2 leading-relaxed">
                    {dest.shortSummary}
                  </p>
                </div>

                <div className="pt-4 border-t border-slate-200/40 flex items-center justify-between">
                  <div>
                    <span className="text-[10px] text-slate-500 block uppercase font-medium">Est. Budget</span>
                    <span className="text-sm font-extrabold text-[#b91c1c]">₹{dest.budgetEstimate.toLocaleString()}</span>
                  </div>
                  <div className="text-right">
                    <span className="text-[10px] text-slate-500 block uppercase font-medium">Best Time</span>
                    <span className="text-xs font-semibold text-slate-600">{dest.bestSeason.split(' & ')[0]}</span>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* 5. Nearby Escapes */}
      <div className="space-y-4">
        <h2 className="font-display font-extrabold text-2xl flex items-center gap-2 text-slate-900">
          <MapPin className="h-5 w-5 text-[#ef233c]" />
          Nearby Escapes (from Mumbai)
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {nearbyDestinations.map((dest) => (
            <div
              key={dest.id}
              onClick={() => onSelectDestination(dest.id)}
              className="group glass-card rounded-2xl overflow-hidden cursor-pointer border border-slate-200/70 glass-card-hover text-left flex flex-col"
            >
              <div className="relative aspect-[4/3] overflow-hidden">
                <img
                  src={dest.image}
                  alt={dest.name}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute top-4 right-4 bg-white/80 backdrop-blur-md px-3 py-1 rounded-xl border border-slate-200/70 flex items-center gap-1 z-10">
                  <Star className="h-3.5 w-3.5 text-orange-400 fill-orange-400" />
                  <span className="text-xs font-bold text-slate-900">{dest.rating}</span>
                </div>
              </div>
              
              <div className="p-5 flex-1 flex flex-col justify-between space-y-4">
                <div>
                  <div className="flex justify-between items-start">
                    <h3 className="font-display font-bold text-xl text-slate-900 group-hover:text-[#ef233c] transition-colors">
                      {dest.name}
                    </h3>
                    <div className="flex items-center text-xs text-slate-700 font-semibold">
                      <Navigation className="h-3.5 w-3.5 mr-1 text-[#ef233c]" />
                      {dest.distance} km
                    </div>
                  </div>
                  <p className="text-xs text-slate-400 mt-2 line-clamp-2 leading-relaxed">
                    {dest.shortSummary}
                  </p>
                </div>

                <div className="pt-4 border-t border-slate-200/40 flex items-center justify-between">
                  <div>
                    <span className="text-[10px] text-slate-500 block uppercase font-medium">Est. Budget</span>
                    <span className="text-sm font-extrabold text-[#b91c1c]">₹{dest.budgetEstimate.toLocaleString()}</span>
                  </div>
                  <div className="text-right">
                    <span className="text-[10px] text-slate-400 block uppercase font-medium">Weather</span>
                    <span className="text-xs font-semibold text-slate-300">{dest.weather.temp} - {dest.weather.condition}</span>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Reel Modal Viewer */}
      {activeReel && (
        <div className="fixed inset-0 z-50 bg-slate-900/40 flex items-center justify-center p-4">
          <button 
            onClick={() => setActiveReel(null)}
            className="absolute top-4 right-4 z-50 text-slate-900 bg-white/90 p-2.5 rounded-full hover:bg-slate-100 transition-all border border-slate-200/70"
          >
            ✕ Close
          </button>
          <div className="relative aspect-[9/16] h-[90vh] bg-slate-100 rounded-3xl overflow-hidden border border-slate-200/70 shadow-2xl">
            <video 
              src={activeReel.videoUrl} 
              className="w-full h-full object-cover" 
              controls 
              autoPlay 
              loop
            />
            {/* Overlay */}
            <div className="absolute bottom-0 left-0 right-0 p-6 bg-gradient-to-t from-slate-950/80 via-slate-950/30 to-transparent space-y-4">
              <div className="flex items-center gap-3">
                <img src={activeReel.user.avatar} className="w-8 h-8 rounded-full border border-white/20" alt="avatar" />
                <div>
                  <h4 className="text-sm font-bold text-slate-900">{activeReel.user.name}</h4>
                  <p className="text-xs text-red-400">{activeReel.user.handle}</p>
                </div>
              </div>
              <p className="text-sm text-slate-900">{activeReel.title}</p>
              <div className="flex gap-4 text-xs text-slate-400 border-t border-white/10 pt-3">
                <span>Likes: {activeReel.likes}</span>
                <span>Comments: {activeReel.comments}</span>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
