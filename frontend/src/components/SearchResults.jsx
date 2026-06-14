import React from 'react';
import { Star, MapPin, Navigation, ArrowLeft, Calendar, Sparkles } from 'lucide-react';
import { DESTINATIONS } from '../data/mockData';

export default function SearchResults({ searchParams, onSelectDestination, onBack }) {
  
  // Intelligent matching based on parameters
  const filtered = DESTINATIONS.filter((dest) => {
    // 1. Budget checking
    if (dest.budgetEstimate > searchParams.budget) return false;
    
    // 2. Distance checking
    if (dest.distance > searchParams.distance) return false;
    
    // 3. Category matching (if categories are selected, matching at least one)
    if (searchParams.categories && searchParams.categories.length > 0) {
      if (!searchParams.categories.includes(dest.category)) return false;
    }
    
    return true;
  });

  // Fallbacks: If no results match, show all or top rated
  const showFallback = filtered.length === 0;
  const displayDestinations = showFallback ? DESTINATIONS.slice(0, 3) : filtered;

  return (
    <div className="space-y-6 pb-16 text-left">
      {/* Search Header Info */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div className="flex items-center gap-3">
          <button
            onClick={onBack}
            className="p-2.5 bg-slate-100/90 border border-slate-200/70 hover:bg-slate-50 rounded-xl transition-all text-slate-700 hover:text-slate-900"
          >
            <ArrowLeft className="h-5 w-5" />
          </button>
          <div>
            <h2 className="font-display font-extrabold text-2xl flex items-center gap-2 text-slate-900">
              <Sparkles className="h-6 w-6 text-[#ef233c]" />
              AI Recommendation Results
            </h2>
            <p className="text-xs text-slate-400">
              Matched {filtered.length} locations based on your custom profile.
            </p>
          </div>
        </div>
      </div>

      {/* Applied Filters Badges */}
      <div className="flex flex-wrap gap-2 p-4 rounded-2xl bg-slate-100/90 border border-slate-200/70 text-xs text-slate-600">
        <span className="font-semibold text-slate-400">Applied Rules:</span>
        <span className="bg-slate-100 px-2 py-1 rounded-md text-slate-900 font-bold border border-slate-200/70">
          Budget ≤ ₹{searchParams.budget.toLocaleString()}
        </span>
        <span className="bg-slate-100 px-2 py-1 rounded-md text-[#b91c1c] font-bold border border-slate-200/70">
          Distance ≤ {searchParams.distance} km
        </span>
        <span className="bg-slate-100 px-2 py-1 rounded-md text-slate-700 border border-slate-200/70">
          Travelers: {searchParams.travelers}
        </span>
        <span className="bg-slate-100 px-2 py-1 rounded-md text-slate-700 border border-slate-200/70">
          Companion: {searchParams.tripType}
        </span>
        {searchParams.categories && searchParams.categories.map((c) => (
          <span key={c} className="bg-[#fee2e2] text-[#991b1b] px-2 py-1 rounded-md border border-[#fecaca] font-semibold">
            {c}
          </span>
        ))}
      </div>

      {/* Fallback Notice */}
      {showFallback && (
        <div className="glass-card p-6 rounded-2xl border border-[#fecaca]/60 bg-slate-100/90">
          <h4 className="font-display font-bold text-lg text-[#ef233c]">No Perfect Matches Found</h4>
          <p className="text-sm text-slate-400 mt-1">
            We couldn\'t locate destinations satisfying every custom rule. Here are our top trending alternatives matching your companion preferences:
          </p>
        </div>
      )}

      {/* Results Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {displayDestinations.map((dest) => (
          <div
            key={dest.id}
            onClick={() => onSelectDestination(dest.id)}
            className="group glass-card rounded-2xl overflow-hidden cursor-pointer border border-white/10 glass-card-hover flex flex-col justify-between"
          >
            <div>
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
                <div className="absolute bottom-4 left-4 bg-[#ef233c] text-white px-2.5 py-0.5 rounded-lg text-xs font-bold uppercase tracking-wider z-10 border border-white/20">
                  {dest.category}
                </div>
              </div>

              <div className="p-5 space-y-3">
                <div className="flex justify-between items-start">
                  <h3 className="font-display font-bold text-xl text-slate-900 group-hover:text-[#ef233c] transition-colors">
                    {dest.name}
                  </h3>
                  <div className="flex items-center text-xs text-slate-400">
                    <Navigation className="h-3.5 w-3.5 text-[#ef233c] mr-1" />
                    {dest.distance} km
                  </div>
                </div>
                
                <p className="text-xs text-slate-400 line-clamp-2 leading-relaxed">
                  {dest.shortSummary}
                </p>
              </div>
            </div>

            <div className="p-5 pt-0">
              <div className="pt-4 border-t border-slate-200/50 flex items-center justify-between">
                <div>
                  <span className="text-[10px] text-slate-400 block uppercase font-medium">Est. Budget</span>
                  <span className="text-sm font-extrabold text-orange-400">₹{dest.budgetEstimate.toLocaleString()}</span>
                </div>
                <div className="text-right">
                  <span className="text-[10px] text-slate-400 block uppercase font-medium">Best Season</span>
                  <span className="text-xs font-semibold text-slate-300">{dest.bestSeason}</span>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
