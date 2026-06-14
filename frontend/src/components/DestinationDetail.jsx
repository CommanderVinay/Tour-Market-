import React, { useState } from 'react';
import { Star, MapPin, Calendar, Shield, Utensils, CloudSun, Train, Plane, Bus, Car, Key, Sparkles, Navigation, ArrowLeft, Heart, CheckCircle, Languages, Check, Users, X, Info } from 'lucide-react';
import { getTransportData, getHotelsData, getTourGuidesData } from '../data/mockData';

export default function DestinationDetail({ destination, onBack, onBookTicket }) {
  const [activeTab, setActiveTab] = useState('overview'); // overview, transport, hotels
  const [activeTransportMode, setActiveTransportMode] = useState('flight'); // flight, train, bus, cab, selfDrive
  const [bookingConfirmed, setBookingConfirmed] = useState(null); // { type, name, price }
  const [liked, setLiked] = useState(false);

  // Tour Guide states
  const [selectedGuide, setSelectedGuide] = useState(null);
  const [guideLanguage, setGuideLanguage] = useState('');

  // Checkout Modal states
  const [bookingItem, setBookingItem] = useState(null); // { type, name, price }
  const [travelDate, setTravelDate] = useState('2026-06-20');
  const [guestsCount, setGuestsCount] = useState(1);
  const [durationDays, setDurationDays] = useState(1);

  const transportData = getTransportData(destination.id);
  const hotelsData = getHotelsData(destination.id);
  const localGuides = getTourGuidesData(destination.id);

  const handleToggleGuide = (guide) => {
    if (selectedGuide?.id === guide.id) {
      setSelectedGuide(null);
      setGuideLanguage('');
    } else {
      setSelectedGuide(guide);
      setGuideLanguage(guide.languages[0]);
    }
  };

  const handleBookClick = (type, name, price) => {
    setBookingItem({ type, name, price });
  };

  const handleConfirmBooking = () => {
    if (!bookingItem) return;

    // Calculate dynamic pricing
    const baseTotal = bookingItem.price * guestsCount * (bookingItem.type === 'Hotel Room' ? durationDays : 1);
    const guideTotal = selectedGuide ? selectedGuide.price * durationDays : 0;
    const finalPrice = baseTotal + guideTotal;

    // Build voucher description
    let finalVoucherName = `${bookingItem.name} (${guestsCount} ${guestsCount > 1 ? 'Guests' : 'Guest'})`;
    if (selectedGuide) {
      finalVoucherName += ` + Guide ${selectedGuide.name} (${guideLanguage})`;
    }

    setBookingConfirmed({ 
      type: bookingItem.type, 
      name: finalVoucherName, 
      price: finalPrice 
    });

    if (onBookTicket) {
      onBookTicket(bookingItem.type, finalVoucherName, finalPrice);
    }

    // Reset modal and guide states
    setBookingItem(null);
    setSelectedGuide(null);
    setGuideLanguage('');
    setGuestsCount(1);
    setDurationDays(1);

    setTimeout(() => {
      setBookingConfirmed(null);
    }, 4500);
  };

  const renderTourGuidesSection = () => {
    if (!localGuides || localGuides.length === 0) return null;

    return (
      <div className="glass-card p-6 rounded-3xl border border-slate-200/70 mt-6 bg-slate-50 space-y-4">
        <div className="flex items-center gap-2">
          <Languages className="h-5 w-5 text-[#ef233c]" />
          <h3 className="font-display font-bold text-lg text-slate-900">Available Professional Tour Guides in {destination.name}</h3>
        </div>
        <p className="text-xs text-slate-400">
          Enhance your experience. Hire a local, verified expert guide to navigate historical sites, trekking trails, and regional foods.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 pt-2">
          {localGuides.map((guide) => {
            const isSelected = selectedGuide?.id === guide.id;
            return (
              <div 
                key={guide.id} 
                className={`p-4 rounded-2xl border transition-all flex flex-col justify-between space-y-4 ${
                  isSelected 
                    ? 'bg-[#ef233c]/5 border-[#ef233c] shadow-lg shadow-[#ef233c]/5'
                    : 'bg-slate-50 border border-slate-200/70 hover:border-slate-300'
                }`}
              >
                <div className="flex gap-3">
                  <img 
                    src={guide.image} 
                    alt={guide.name} 
                    className="w-12 h-12 rounded-xl object-cover border border-slate-200/70 flex-shrink-0" 
                  />
                  <div className="text-left flex-1 min-w-0">
                    <div className="flex items-center justify-between gap-2">
                      <h4 className="text-sm font-bold text-slate-900 truncate">{guide.name}</h4>
                      <div className="flex items-center text-xs text-orange-400 font-bold flex-shrink-0">
                        <Star className="h-3 w-3 fill-orange-400 mr-0.5" />
                        {guide.rating}
                      </div>
                    </div>
                    <p className="text-[10px] text-[#ef233c] font-semibold mt-0.5">
                      Daily Rate: ₹{guide.price.toLocaleString()}/day
                    </p>
                    <p className="text-[11px] text-slate-400 line-clamp-2 mt-1 leading-normal">
                      {guide.description}
                    </p>
                  </div>
                </div>

                {/* Bottom selector and language controls */}
                <div className="pt-3 border-t border-slate-200/50 flex items-center justify-between gap-3 flex-wrap">
                  <button
                    onClick={() => handleToggleGuide(guide)}
                    className={`px-3 py-1.5 rounded-xl text-xs font-bold transition-all flex items-center gap-1.5 ${
                      isSelected
                        ? 'bg-[#ef233c] text-white'
                        : 'bg-slate-100 text-slate-700 hover:bg-slate-50 border border-slate-200/70'
                    }`}
                  >
                    {isSelected ? (
                      <>
                        <Check className="h-3.5 w-3.5 stroke-[3]" />
                        Selected Guide
                      </>
                    ) : (
                      'Select Guide'
                    )}
                  </button>

                  {/* Languages Selector */}
                  {isSelected && (
                    <div className="flex items-center gap-1.5">
                      <span className="text-[10px] text-slate-400 font-semibold">Language:</span>
                      <select
                        value={guideLanguage}
                        onChange={(e) => setGuideLanguage(e.target.value)}
                        className="bg-slate-100 border border-slate-200/70 rounded-lg px-2.5 py-1 text-[11px] font-semibold text-slate-900 focus:outline-none focus:border-[#ef233c]/50 cursor-pointer"
                      >
                        {guide.languages.map((lang) => (
                          <option key={lang} value={lang}>{lang}</option>
                        ))}
                      </select>
                    </div>
                  )}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    );
  };

  return (
    <div className="space-y-8 pb-20 text-left relative">
      
      {/* Booking Confirmation Alert Toast */}
      {bookingConfirmed && (
        <div className="fixed bottom-8 right-8 z-50 glass-card border-[#ef233c]/50 bg-white p-5 rounded-2xl shadow-2xl flex items-center gap-4 max-w-sm animate-bounce">
          <div className="p-3 bg-[#ef233c]/20 rounded-full text-[#ef233c]">
            <CheckCircle className="h-6 w-6" />
          </div>
          <div>
            <h4 className="font-bold text-slate-900">Booking Success!</h4>
            <p className="text-xs text-slate-400 mt-1">
              Your booking for <strong className="text-slate-900">{bookingConfirmed.name}</strong> was successful. Reference ticket generated in Dashboard.
            </p>
          </div>
        </div>
      )}

      {/* Header Back Button */}
      <div className="flex items-center justify-between">
        <button
          onClick={onBack}
          className="flex items-center gap-2 text-slate-600 hover:text-slate-900 transition-colors font-semibold"
        >
          <ArrowLeft className="h-5 w-5" />
          Back to Destinations
        </button>
        <button
          onClick={() => setLiked(!liked)}
          className="p-2.5 rounded-full glass-card hover:bg-slate-100 transition-all border border-slate-200/70"
        >
          <Heart className={`h-5 w-5 ${liked ? 'text-[#ef233c] fill-[#ef233c]' : 'text-slate-400'}`} />
        </button>
      </div>

      {/* Banner & Images Grid */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        {/* Main large image */}
        <div className="md:col-span-2 relative aspect-[16/9] rounded-3xl overflow-hidden border border-slate-200/70 shadow-lg">
          <img
            src={destination.images[0] || destination.image}
            alt={destination.name}
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-slate-950/70 via-slate-950/20 to-transparent"></div>
          <div className="absolute bottom-6 left-6 right-6 space-y-2">
            <span className="bg-[#ef233c] text-white px-2.5 py-0.5 rounded-lg text-xs font-bold uppercase tracking-wider border border-[#fecaca]">
              {destination.category}
            </span>
            <h1 className="font-display font-black text-3xl sm:text-5xl text-white">
              {destination.name}
            </h1>
            <div className="flex items-center gap-4 text-xs sm:text-sm text-slate-200">
              <span className="flex items-center gap-1 font-semibold text-orange-400">
                <Star className="h-4 w-4 fill-orange-400 stroke-orange-400" />
                {destination.rating} ({destination.reviewCount} reviews)
              </span>
              <span className="text-slate-400">|</span>
              <span className="flex items-center gap-1">
                <MapPin className="h-4 w-4 text-[#ef233c]" />
                {destination.location}
              </span>
            </div>
          </div>
        </div>

        {/* Smaller helper image & map widget */}
        <div className="grid grid-rows-2 gap-4">
          <div className="relative rounded-3xl overflow-hidden border border-slate-200/70 shadow-lg">
            <img
              src={destination.images[1] || destination.image}
              alt={destination.name}
              className="w-full h-full object-cover"
            />
          </div>
          
          {/* Custom high fidelity Map widget */}
          <div className="glass-card p-4 rounded-3xl border border-slate-200/70 flex flex-col justify-between relative overflow-hidden bg-[radial-gradient(at_0%_0%,_rgba(239,35,60,0.08),_transparent_70%)]">
            <div className="space-y-1 relative z-10">
              <span className="text-[10px] text-[#ef233c] uppercase tracking-widest font-semibold block">Map coordinates</span>
              <h4 className="font-bold font-display text-slate-900">{destination.name} Area</h4>
              <p className="text-[11px] text-slate-400">Lat: {destination.coordinates.lat}, Lng: {destination.coordinates.lng}</p>
            </div>
            
            {/* Visual simulation of a GPS map path */}
            <div className="h-20 w-full rounded-2xl bg-slate-100/80 border border-slate-200/70 relative overflow-hidden mt-2 flex items-center justify-center">
              <div className="absolute inset-0 opacity-15 bg-[radial-gradient(#fff_1px,transparent_1px)] [background-size:16px_16px]"></div>
              {/* Dynamic simulated route */}
              <svg className="absolute inset-0 w-full h-full" viewBox="0 0 100 40">
                <path d="M10,30 Q30,10 60,30 T90,10" fill="none" stroke="#ef233c" strokeWidth="2" strokeDasharray="4 2" />
                <circle cx="10" cy="30" r="3" fill="#ffffff" />
                <circle cx="90" cy="10" r="3" fill="#ef233c" />
              </svg>
              <div className="absolute top-2 left-2 bg-white/90 px-2 py-0.5 rounded text-[9px] text-slate-700 font-semibold border border-slate-200/70">
                Route Preview
              </div>
              <span className="text-[10px] font-bold text-[#ef233c] z-10 flex items-center gap-1">
                <Navigation className="h-3 w-3" />
                GPS Sync Active
              </span>
            </div>
          </div>
        </div>
      </div>

      {/* Tab Selectors */}
      <div className="flex border-b border-slate-200/70 gap-6">
        {[
          { id: 'overview', label: 'Overview & Attractions' },
          { id: 'transport', label: 'Book Transport' },
          { id: 'hotels', label: 'Book Hotels' }
        ].map((tab) => (
          <button
            key={tab.id}
            onClick={() => setActiveTab(tab.id)}
            className={`pb-3 text-sm font-semibold border-b-2 transition-all ${
              activeTab === tab.id
                ? 'border-[#ef233c] text-[#991b1b] font-bold'
                : 'border-transparent text-slate-600 hover:text-slate-900'
            }`}
          >
            {tab.id === 'transport' || tab.id === 'hotels' ? (
              <span className="flex items-center gap-1.5">
                <Sparkles className="h-3.5 w-3.5 text-[#ef233c] fill-[#ef233c]/20" />
                {tab.label}
              </span>
            ) : (
              tab.label
            )}
          </button>
        ))}
      </div>

      {/* TAB CONTENTS */}
      
      {/* 1. OVERVIEW & ATTRACTIONS */}
      {activeTab === 'overview' && (
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Main info left column */}
          <div className="lg:col-span-2 space-y-6">
            <div className="glass-card p-6 rounded-2xl space-y-3">
              <h3 className="font-display font-bold text-xl text-slate-900">Travel Guide Summary</h3>
              <p className="text-sm text-slate-600 leading-relaxed">
                {destination.fullSummary}
              </p>
            </div>

            <div className="glass-card p-6 rounded-2xl space-y-4">
              <h3 className="font-display font-bold text-xl text-slate-900">Top Tourist Attractions</h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {destination.attractions.map((attraction, idx) => (
                  <div key={idx} className="flex items-center gap-2 p-3 rounded-xl bg-slate-50 border border-slate-200/70">
                    <div className="w-6 h-6 rounded-lg bg-[#ef233c]/10 text-[#ef233c] flex items-center justify-center text-xs font-bold font-display border border-[#ef233c]/20">
                      {idx + 1}
                    </div>
                    <span className="text-xs font-semibold text-slate-700">{attraction}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Food Recommendations */}
            <div className="glass-card p-6 rounded-2xl space-y-4">
              <h3 className="font-display font-bold text-xl flex items-center gap-2 text-slate-900">
                <Utensils className="h-5 w-5 text-[#ef233c]" />
                Food & Culinary Recommendations
              </h3>
              <div className="space-y-3">
                {destination.foodRecommendations.map((food, idx) => (
                  <div key={idx} className="p-4 rounded-xl bg-slate-50 border border-slate-200/70 flex justify-between items-start gap-4">
                    <div className="text-left">
                      <h4 className="text-sm font-bold text-slate-900">{food.name}</h4>
                      <span className="text-[10px] bg-[#fee2e2] text-[#9f1239] border border-[#fecaca] px-2 py-0.5 rounded-md font-semibold mt-1 inline-block">
                        {food.type}
                      </span>
                      <p className="text-xs text-slate-400 mt-2">{food.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* User Reviews */}
            <div className="glass-card p-6 rounded-2xl space-y-6">
              <h3 className="font-display font-bold text-xl text-slate-900">Recent Reviews</h3>
              <div className="space-y-4">
                {destination.reviews.map((rev) => (
                  <div key={rev.id} className="p-4 rounded-xl bg-slate-50 border border-slate-200/70 space-y-3">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-3">
                        <img src={rev.avatar} alt={rev.user} className="w-8 h-8 rounded-full object-cover" />
                        <div>
                          <h4 className="text-xs font-bold text-slate-900">{rev.user}</h4>
                          <span className="text-[10px] text-slate-500">{rev.date}</span>
                        </div>
                      </div>
                      <div className="flex items-center gap-1">
                        {[...Array(5)].map((_, i) => (
                          <Star 
                            key={i} 
                            className={`h-3 w-3 ${i < rev.rating ? 'text-orange-400 fill-orange-400' : 'text-slate-600'}`} 
                          />
                        ))}
                      </div>
                    </div>
                    <p className="text-xs text-slate-600 leading-relaxed">"{rev.text}"</p>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Sidebar right column */}
          <div className="space-y-6">
            {/* Weather widget */}
            <div className="glass-card p-6 rounded-2xl space-y-4 relative overflow-hidden bg-gradient-to-br from-red-100 to-slate-100">
              <div className="absolute top-0 right-0 w-32 h-32 bg-[#fee2e2] rounded-full blur-2xl"></div>
              <h3 className="font-display font-bold text-lg flex items-center gap-2 text-slate-900">
                <CloudSun className="h-5 w-5 text-[#ef233c]" />
                Live Weather Info
              </h3>
              <div className="flex items-center justify-between">
                <div>
                  <div className="text-3xl font-black font-display text-slate-900">{destination.weather.temp}</div>
                  <div className="text-xs font-semibold text-[#ef233c] mt-1">{destination.weather.condition}</div>
                </div>
                <CloudSun className="w-12 h-12 text-[#ef233c] stroke-[1.5]" />
              </div>
              <div className="pt-3 border-t border-slate-200/70 grid grid-cols-2 gap-2 text-center text-xs">
                <div className="bg-slate-50 rounded-lg p-2">
                  <span className="text-[10px] text-slate-500 block">Humidity</span>
                  <span className="font-bold text-slate-900">{destination.weather.humidity || '55%'}</span>
                </div>
                <div className="bg-slate-50 rounded-lg p-2">
                  <span className="text-[10px] text-slate-500 block">Best Season</span>
                  <span className="font-bold text-slate-900 text-[10px]">{destination.bestSeason.split(' & ')[0]}</span>
                </div>
              </div>
            </div>

            {/* Safety & Security */}
            <div className="glass-card p-6 rounded-2xl space-y-4 border border-[#ef233c]/20 bg-slate-50">
              <h3 className="font-display font-bold text-lg flex items-center gap-2 text-slate-900">
                <Shield className="h-5 w-5 text-[#ef233c]" />
                Safety Information
              </h3>
              <div className="flex items-center justify-between">
                <span className="text-xs text-slate-500">Safety Index Score</span>
                <span className="bg-[#fee2e2] text-[#991b1b] border border-[#fecaca] font-bold px-3 py-1 rounded-xl text-sm">
                  {destination.safetyScore} / 10
                </span>
              </div>
              <ul className="text-xs text-slate-400 space-y-2 list-disc list-inside">
                <li>24/7 tourist helpline active in district</li>
                <li>Highly rated for solo travelers</li>
                <li>Fully functional government medical posts nearby</li>
                <li>Check local weather advisories before trekking</li>
              </ul>
            </div>
            
            {/* Quick Trip Booking CTA card */}
            <div className="glass-card p-6 rounded-2xl bg-gradient-to-r from-red-100 to-slate-100 border border-slate-200/70 space-y-4 text-center">
              <Sparkles className="h-8 w-8 text-[#ef233c] mx-auto fill-[#ef233c]/10" />
              <h4 className="font-display font-bold text-slate-900">Ready to lock down tickets?</h4>
              <p className="text-xs text-slate-400">
                Instantly secure flights, trains, or verified partner hotels on our smart bookings tabs.
              </p>
              <button
                onClick={() => setActiveTab('transport')}
                className="w-full bg-gradient-to-r from-[#ef233c] to-[#d90429] hover:from-[#d90429] hover:to-[#ef233c] text-white font-bold text-xs py-2.5 rounded-xl transition-all"
              >
                Go to Booking Panel
              </button>
            </div>
          </div>
        </div>
      )}

      {/* 2. BOOK TRANSPORT */}
      {activeTab === 'transport' && (
        <div className="space-y-6">
          <div className="glass-card p-6 rounded-2xl space-y-6">
            <div className="flex justify-between items-center">
              <div>
                <h3 className="font-display font-bold text-xl text-slate-900">Travel Modes & Booking</h3>
                <p className="text-xs text-slate-400">Instantly generate tickets and verify reservation statuses.</p>
              </div>
            </div>

            {/* Travel Mode Sub-Tabs */}
            <div className="flex flex-wrap gap-2">
              {[
                { id: 'flight', label: 'Flight', icon: Plane },
                { id: 'train', label: 'Train', icon: Train },
                { id: 'bus', label: 'Bus', icon: Bus },
                { id: 'cab', label: 'Outstation Cab', icon: Car },
                { id: 'selfDrive', label: 'Self Drive', icon: Key }
              ].map((mode) => {
                const Icon = mode.icon;
                return (
                  <button
                    key={mode.id}
                    onClick={() => setActiveTransportMode(mode.id)}
                    className={`flex items-center gap-2 px-4 py-2.5 rounded-xl text-xs font-bold border transition-all ${
                      activeTransportMode === mode.id
                        ? 'bg-[#ef233c]/10 text-[#991b1b] border-[#ef233c]/30 shadow-lg shadow-[#ef233c]/5'
                        : 'bg-slate-100 text-slate-700 border border-slate-200/70 hover:border-slate-300'
                    }`}
                  >
                    <Icon className="h-4 w-4" />
                    {mode.label}
                  </button>
                );
              })}
            </div>

            {/* Ticket Cards */}
            <div className="space-y-3">
              {activeTransportMode === 'flight' && (
                transportData.flight ? transportData.flight.map((t, idx) => (
                  <div key={idx} className="p-5 rounded-2xl bg-slate-50 border border-slate-200/70 flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
                    <div className="text-left space-y-1">
                      <div className="flex items-center gap-2">
                        <span className="text-sm font-bold text-slate-900">{t.carrier}</span>
                        <span className="text-[10px] bg-[#fee2e2] text-[#9f1239] px-2 py-0.5 rounded-md border border-[#fecaca] font-semibold">{t.code}</span>
                      </div>
                      <p className="text-xs text-slate-600">{t.time} ({t.duration})</p>
                    </div>
                    <div className="text-left md:text-right space-y-1">
                      <span className="text-xs font-medium text-orange-400 bg-orange-500/10 px-2 py-0.5 rounded-md border border-orange-500/20">
                        {t.confirmationChance}
                      </span>
                      <p className="text-[10px] text-slate-500 mt-1">{t.availability}</p>
                    </div>
                    <div className="flex items-center gap-4 w-full md:w-auto justify-between md:justify-end border-t md:border-t-0 border-slate-200/70 pt-3 md:pt-0">
                      <div>
                        <span className="text-[9px] text-slate-500 block uppercase font-medium">Ticket Price</span>
                        <span className="text-base font-extrabold text-[#ef233c]">₹{t.price.toLocaleString()}</span>
                      </div>
                      <button
                        onClick={() => handleBookClick('Flight', `${t.carrier} (${t.code})`, t.price)}
                        className="bg-[#ef233c] hover:bg-[#d90429] text-white font-bold text-xs px-4 py-2 rounded-xl transition-all"
                      >
                        Book Ticket
                      </button>
                    </div>
                  </div>
                )) : <p className="text-xs text-slate-400">No flight schedules available. Try bus or trains.</p>
              )}

              {activeTransportMode === 'train' && (
                transportData.train ? transportData.train.map((t, idx) => (
                  <div key={idx} className="p-5 rounded-2xl bg-slate-50 border border-slate-200/70 flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
                    <div className="text-left space-y-1">
                      <div className="flex items-center gap-2">
                        <span className="text-sm font-bold text-slate-900">{t.name}</span>
                        <span className="text-[10px] bg-[#fee2e2] text-[#9f1239] px-2 py-0.5 rounded-md border border-[#fecaca] font-semibold">{t.code}</span>
                      </div>
                      <p className="text-xs text-slate-600">{t.time} ({t.duration})</p>
                    </div>
                    <div className="text-left md:text-right space-y-1">
                      <span className="text-xs font-semibold text-slate-700 bg-slate-100 px-2 py-0.5 rounded-md border border-slate-200/70">
                        {t.confirmationChance}
                      </span>
                      <p className="text-[10px] text-slate-500 mt-1">{t.availability}</p>
                    </div>
                    <div className="flex items-center gap-4 w-full md:w-auto justify-between md:justify-end border-t md:border-t-0 border-slate-200/70 pt-3 md:pt-0">
                      <div>
                        <span className="text-[9px] text-slate-500 block uppercase font-medium">Fare</span>
                        <span className="text-base font-extrabold text-[#ef233c]">₹{t.price.toLocaleString()}</span>
                      </div>
                      <button
                        onClick={() => handleBookClick('Train', `${t.name} (${t.code})`, t.price)}
                        className="bg-[#ef233c] hover:bg-[#d90429] text-white font-bold text-xs px-4 py-2 rounded-xl transition-all"
                      >
                        Book Ticket
                      </button>
                    </div>
                  </div>
                )) : <p className="text-xs text-slate-400">No train routes available.</p>
              )}

              {activeTransportMode === 'bus' && (
                transportData.bus ? transportData.bus.map((t, idx) => (
                  <div key={idx} className="p-5 rounded-2xl bg-slate-50 border border-slate-200/70 flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
                    <div className="text-left space-y-1">
                      <span className="text-sm font-bold text-slate-900 block">{t.operator}</span>
                      <span className="text-[10px] text-slate-600">{t.type}</span>
                    </div>
                    <div className="text-left md:text-right space-y-1">
                      <p className="text-xs text-slate-600">{t.time}</p>
                      <p className="text-[10px] text-slate-600">{t.availability}</p>
                    </div>
                    <div className="flex items-center gap-4 w-full md:w-auto justify-between md:justify-end border-t md:border-t-0 border-slate-200/70 pt-3 md:pt-0">
                      <div>
                        <span className="text-[9px] text-slate-500 block uppercase font-medium">Ticket Price</span>
                        <span className="text-base font-extrabold text-[#ef233c]">₹{t.price.toLocaleString()}</span>
                      </div>
                      <button
                        onClick={() => handleBookClick('Bus', t.operator, t.price)}
                        className="bg-[#ef233c] hover:bg-[#d90429] text-white font-bold text-xs px-4 py-2 rounded-xl transition-all"
                      >
                        Book Seat
                      </button>
                    </div>
                  </div>
                )) : <p className="text-xs text-slate-400">No bus bookings available.</p>
              )}

              {activeTransportMode === 'cab' && (
                transportData.cab ? transportData.cab.map((t, idx) => (
                  <div key={idx} className="p-5 rounded-2xl bg-slate-50 border border-slate-200/70 flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
                    <div className="text-left space-y-1">
                      <span className="text-sm font-bold text-slate-900 block">{t.operator}</span>
                      <span className="text-[10px] text-slate-600">{t.type}</span>
                    </div>
                    <div className="text-left md:text-right space-y-1">
                      <p className="text-xs text-slate-600">Travel time: {t.duration}</p>
                      <p className="text-[10px] text-slate-600 font-semibold">{t.availability}</p>
                    </div>
                    <div className="flex items-center gap-4 w-full md:w-auto justify-between md:justify-end border-t md:border-t-0 border-slate-200/70 pt-3 md:pt-0">
                      <div>
                        <span className="text-[9px] text-slate-500 block uppercase font-medium">Total Fare</span>
                        <span className="text-base font-extrabold text-[#ef233c]">₹{t.price.toLocaleString()}</span>
                      </div>
                      <button
                        onClick={() => handleBookClick('Outstation Cab', t.operator, t.price)}
                        className="bg-[#ef233c] hover:bg-[#d90429] text-white font-bold text-xs px-4 py-2 rounded-xl transition-all"
                      >
                        Confirm Cab
                      </button>
                    </div>
                  </div>
                )) : <p className="text-xs text-slate-400">No taxi schedules listed.</p>
              )}

              {activeTransportMode === 'selfDrive' && (
                transportData.selfDrive ? transportData.selfDrive.map((t, idx) => (
                  <div key={idx} className="p-5 rounded-2xl bg-slate-50 border border-slate-200/70 flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
                    <div className="text-left space-y-1">
                      <span className="text-sm font-bold text-slate-900 block">{t.operator}</span>
                      <span className="text-xs font-semibold text-[#ef233c]">{t.type}</span>
                    </div>
                    <div className="text-left md:text-right space-y-1">
                      <p className="text-xs text-slate-600">{t.availability}</p>
                      <p className="text-[10px] text-slate-500">Security Deposit: {t.securityDeposit}</p>
                    </div>
                    <div className="flex items-center gap-4 w-full md:w-auto justify-between md:justify-end border-t md:border-t-0 border-slate-200/70 pt-3 md:pt-0">
                      <div>
                        <span className="text-[9px] text-slate-500 block uppercase font-medium">Rate / Day</span>
                        <span className="text-base font-extrabold text-[#ef233c]">₹{t.pricePerDay.toLocaleString()}</span>
                      </div>
                      <button
                        onClick={() => handleBookClick('Self Drive Vehicle', `${t.operator} - ${t.type}`, t.pricePerDay)}
                        className="bg-[#ef233c] hover:bg-[#d90429] text-white font-bold text-xs px-4 py-2 rounded-xl transition-all"
                      >
                        Reserve Vehicle
                      </button>
                    </div>
                  </div>
                )) : <p className="text-xs text-slate-400">No rental vehicles available at this destination.</p>
              )}
            </div>
          </div>

          {/* Inline Tour Guides Section */}
          {renderTourGuidesSection()}
        </div>
      )}

      {/* 3. BOOK HOTELS */}
      {activeTab === 'hotels' && (
        <div className="space-y-6">
          <div className="glass-card p-6 rounded-2xl space-y-6">
            <div>
              <h3 className="font-display font-bold text-xl text-slate-900">Verified Partner Accommodations</h3>
              <p className="text-xs text-slate-400">Exclusive discounts, clean verified badges, and flexible cancellations.</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {hotelsData.map((h) => (
                <div key={h.id} className="p-4 rounded-2xl bg-slate-50 border border-slate-200/70 flex flex-col justify-between space-y-4">
                  <div className="space-y-3">
                    <div className="relative aspect-[16/10] rounded-xl overflow-hidden border border-slate-200/70">
                      <img src={h.image} alt={h.name} className="w-full h-full object-cover" />
                      <div className="absolute top-3 right-3 bg-white/90 backdrop-blur-md px-2 py-0.5 rounded-lg border border-slate-200/70 flex items-center gap-1 text-[11px] z-10 font-bold text-slate-900">
                        <Star className="h-3 w-3 text-orange-400 fill-orange-400" />
                        {h.rating}
                      </div>
                    </div>

                    <div className="text-left space-y-1">
                      <h4 className="text-base font-bold text-slate-900">{h.name}</h4>
                      <p className="text-[11px] text-slate-400">{h.nearbyAttractions}</p>
                    </div>

                    {/* Badges */}
                    <div className="flex flex-wrap gap-1">
                      {h.badges.map((b, i) => (
                        <span key={i} className="text-[9px] font-bold bg-[#fee2e2] text-[#9f1239] border border-[#fecaca] px-2 py-0.5 rounded">
                          {b}
                        </span>
                      ))}
                    </div>
                  </div>

                  <div className="pt-3 border-t border-slate-200/70 flex items-center justify-between">
                    <div>
                      <span className="text-[9px] text-slate-500 block uppercase font-medium">Price / Night</span>
                      <span className="text-base font-extrabold text-slate-900">₹{h.price.toLocaleString()}</span>
                    </div>
                    <button
                      onClick={() => handleBookClick('Hotel Room', h.name, h.price)}
                      className="bg-[#ef233c] hover:bg-[#d90429] text-white font-bold text-xs px-4 py-2 rounded-xl transition-all"
                    >
                      Book Room
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Inline Tour Guides Section */}
          {renderTourGuidesSection()}
        </div>
      )}

      {/* CHECKOUT MODAL OVERLAY */}
      {bookingItem && (
        <div className="fixed inset-0 z-50 overflow-y-auto bg-slate-900/50 backdrop-blur-md flex items-center justify-center p-4">
<div className="relative w-full max-w-md glass-card rounded-3xl overflow-hidden shadow-2xl border border-slate-200/70 flex flex-col bg-slate-50">
            
            {/* Modal Header */}
            <div className="p-6 border-b border-slate-200/70 flex justify-between items-center bg-slate-100">
              <div className="flex items-center gap-2">
                <div className="p-2 bg-[#ef233c]/10 rounded-xl text-[#ef233c]">
                  <Sparkles className="h-5 w-5 fill-current" />
                </div>
                <div>
                  <h3 className="font-display font-extrabold text-lg text-slate-900">Complete Booking</h3>
                  <p className="text-[10px] text-slate-400">Review selection & customize preferences</p>
                </div>
              </div>
              <button 
                onClick={() => setBookingItem(null)}
                className="p-2 text-slate-700 hover:text-slate-900 hover:bg-slate-100 rounded-xl transition-all"
              >
                <X className="h-5 w-5" />
              </button>
            </div>

            {/* Modal Body */}
            <div className="p-6 space-y-6 text-left">
              
              {/* Product summary card */}
              <div className="p-4 rounded-2xl bg-slate-50 border border-slate-200/70 space-y-1">
                <span className="text-[9px] uppercase font-bold text-[#ef233c] tracking-widest">{bookingItem.type} Details</span>
                <h4 className="font-bold text-slate-900 text-sm">{bookingItem.name}</h4>
                <p className="text-xs text-slate-400">Base Fare: ₹{bookingItem.price.toLocaleString()}{bookingItem.type === 'Hotel Room' ? ' / night' : ' / passenger'}</p>
              </div>

              {/* Date Selector */}
              <div className="space-y-2">
                <label className="text-[10px] font-bold text-slate-400 uppercase tracking-wider flex items-center gap-1">
                  <Calendar className="h-3.5 w-3.5 text-[#ef233c]" />
                  Select Travel Date
                </label>
                <input
                  type="date"
                  value={travelDate}
                  onChange={(e) => setTravelDate(e.target.value)}
                  className="w-full p-3 rounded-xl bg-white border border-slate-200/70 text-xs font-semibold text-slate-900 focus:outline-none focus:border-[#ef233c]/50 cursor-pointer"
                />
              </div>

              {/* Guests Count Selector */}
              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-2">
                  <label className="text-[10px] font-bold text-slate-400 uppercase tracking-wider flex items-center gap-1">
                    <Users className="h-3.5 w-3.5 text-[#ef233c]" />
                    {bookingItem.type === 'Hotel Room' ? 'No. of Guests' : 'Passengers'}
                  </label>
                  <div className="flex items-center gap-3 bg-slate-100 p-1.5 rounded-xl border border-slate-200/70 w-fit">
                    <button
                      type="button"
                      onClick={() => setGuestsCount(Math.max(1, guestsCount - 1))}
                      className="w-7 h-7 rounded-lg bg-white border border-slate-200 hover:bg-slate-50 font-bold flex items-center justify-center text-slate-900 text-xs"
                    >
                      -
                    </button>
                    <span className="font-bold text-slate-900 text-sm w-4 text-center">{guestsCount}</span>
                    <button
                      type="button"
                      onClick={() => setGuestsCount(guestsCount + 1)}
                      className="w-7 h-7 rounded-lg bg-white border border-slate-200 hover:bg-slate-50 font-bold flex items-center justify-center text-slate-900 text-xs"
                    >
                      +
                    </button>
                  </div>
                </div>

                {/* Duration Picker (Only for hotels) */}
                {bookingItem.type === 'Hotel Room' && (
                  <div className="space-y-2">
                    <label className="text-[10px] font-bold text-slate-400 uppercase tracking-wider flex items-center gap-1">
                      <Calendar className="h-3.5 w-3.5 text-[#ef233c]" />
                      Nights Stay
                    </label>
                    <div className="flex items-center gap-3 bg-slate-100 p-1.5 rounded-xl border border-slate-200/70 w-fit">
                      <button
                        type="button"
                        onClick={() => setDurationDays(Math.max(1, durationDays - 1))}
                        className="w-7 h-7 rounded-lg bg-white border border-slate-200 hover:bg-slate-50 font-bold flex items-center justify-center text-slate-900 text-xs"
                      >
                        -
                      </button>
                      <span className="font-bold text-slate-900 text-sm w-4 text-center">{durationDays}</span>
                      <button
                        type="button"
                        onClick={() => setDurationDays(durationDays + 1)}
                        className="w-7 h-7 rounded-lg bg-white border border-slate-200 hover:bg-slate-50 font-bold flex items-center justify-center text-slate-900 text-xs"
                      >
                        +
                      </button>
                    </div>
                  </div>
                )}
              </div>

              {/* Selected Tour Guide summary panel */}
              <div className="p-4 rounded-2xl bg-slate-50 border border-slate-200/70 space-y-3">
                <div className="flex items-center justify-between">
                  <span className="text-[10px] font-bold text-slate-400 uppercase tracking-wider flex items-center gap-1">
                    <Languages className="h-3.5 w-3.5 text-[#ef233c]" />
                    Selected Tour Guide
                  </span>
                  {selectedGuide ? (
                    <span className="text-[9px] bg-[#fee2e2] text-[#9f1239] font-bold border border-[#fecaca] px-2 py-0.5 rounded">Active</span>
                  ) : (
                    <span className="text-[9px] bg-slate-100 text-slate-500 font-bold px-2 py-0.5 rounded">None</span>
                  )}
                </div>

                {selectedGuide ? (
                  <div className="flex items-center justify-between gap-3 text-xs">
                    <div className="flex items-center gap-2">
                      <img src={selectedGuide.image} className="w-8 h-8 rounded-lg object-cover" alt="guide" />
                      <div>
                        <span className="font-bold text-slate-900 block">{selectedGuide.name}</span>
                        <span className="text-[10px] text-slate-400">Language: {guideLanguage}</span>
                      </div>
                    </div>
                    <div className="text-right">
                      <span className="text-slate-500 block text-[10px]">Fee / Day</span>
                      <span className="font-bold text-slate-900 text-[11px]">₹{selectedGuide.price.toLocaleString()}</span>
                    </div>
                  </div>
                ) : (
                  <div className="flex items-start gap-1.5 text-[11px] text-slate-400 leading-normal">
                    <Info className="h-3.5 w-3.5 text-slate-500 flex-shrink-0 mt-0.5" />
                    <span>No tour guide selected. You can close this modal and hire a guide below the ticket booking lists if desired.</span>
                  </div>
                )}
              </div>

              {/* Price Summary Breakdown */}
              <div className="border-t border-slate-200/50 pt-4 space-y-2.5">
                <h5 className="text-[10px] font-bold text-slate-500 uppercase tracking-widest">Pricing Summary</h5>
                <div className="space-y-1.5 text-xs">
                  <div className="flex justify-between text-slate-600">
                    <span>Base Booking ({guestsCount} {guestsCount > 1 ? 'people' : 'person'}{bookingItem.type === 'Hotel Room' ? ` x ${durationDays} nights` : ''})</span>
                    <span>₹{(bookingItem.price * guestsCount * (bookingItem.type === 'Hotel Room' ? durationDays : 1)).toLocaleString()}</span>
                  </div>
                  {selectedGuide && (
                    <div className="flex justify-between text-slate-300">
                      <span>Professional Tour Guide (₹{selectedGuide.price.toLocaleString()} x {durationDays} {durationDays > 1 ? 'days' : 'day'})</span>
                      <span className="text-[#ef233c] font-semibold">+ ₹{(selectedGuide.price * durationDays).toLocaleString()}</span>
                    </div>
                  )}
                  <div className="flex justify-between text-slate-900 font-extrabold text-sm border-t border-slate-200/50 pt-2.5">
                    <span className="flex items-center gap-1">
                      Total Price
                    </span>
                    <span className="text-slate-900">
                      ₹{(
                        (bookingItem.price * guestsCount * (bookingItem.type === 'Hotel Room' ? durationDays : 1)) +
                        (selectedGuide ? selectedGuide.price * durationDays : 0)
                      ).toLocaleString()}
                    </span>
                  </div>
                </div>
              </div>

            </div>

            {/* Modal Actions */}
            <div className="p-6 border-t border-slate-200/50 bg-slate-100 flex items-center justify-between gap-3">
              <button
                type="button"
                onClick={() => setBookingItem(null)}
                className="px-4 py-2.5 rounded-xl border border-slate-200/70 hover:bg-slate-100 text-slate-700 hover:text-slate-900 font-bold text-xs transition-all w-1/2 text-center"
              >
                Cancel
              </button>
              <button
                type="button"
                onClick={handleConfirmBooking}
                className="bg-gradient-to-r from-[#ef233c] to-[#d90429] hover:from-[#d90429] hover:to-[#ef233c] text-white px-5 py-2.5 rounded-xl font-bold text-xs shadow-lg shadow-red-500/10 transition-all w-1/2 text-center flex items-center justify-center gap-1.5"
              >
                <Check className="h-4 w-4 stroke-[3]" />
                Confirm Booking
              </button>
            </div>

          </div>
        </div>
      )}

    </div>
  );
}
