import React, { useState } from 'react';
import Navbar from './components/Navbar';
import HomeSection from './components/HomeSection';
import TrendingSection from './components/TrendingSection';
import PlannerModal from './components/PlannerModal';
import SearchResults from './components/SearchResults';
import DestinationDetail from './components/DestinationDetail';
import { DESTINATIONS } from './data/mockData';
import { Plane, Train, Hotel, Star, MapPin, Sparkles, AlertCircle } from 'lucide-react';

export default function App() {
  const [activeTab, setActiveTab] = useState('explore'); // explore, trending, bookings, results, detail
  const [theme, setTheme] = useState('light'); // default to 'light' (white background) as requested
  const [plannerOpen, setPlannerOpen] = useState(false);
  const [searchParams, setSearchParams] = useState(null);
  const [selectedDestinationId, setSelectedDestinationId] = useState(null);
  
  // Active booked tickets database state
  const [myBookings, setMyBookings] = useState([
    {
      id: 'b_init_1',
      type: 'Hotel Room',
      name: 'Taj Exotica Resort & Spa',
      location: 'Goa',
      price: 18000,
      date: 'June 10 - June 15, 2026',
      status: 'Confirmed',
      code: 'TM-HTL-98402'
    },
    {
      id: 'b_init_2',
      type: 'Flight',
      name: 'IndiGo (6E-2134)',
      location: 'Goa',
      price: 4200,
      date: 'June 10, 2026',
      status: 'Confirmed',
      code: 'TM-FLT-21043'
    }
  ]);

  const handleSelectDestination = (destId) => {
    setSelectedDestinationId(destId);
    setActiveTab('detail');
  };

  const handleSearchApply = (params) => {
    setSearchParams(params);
    setActiveTab('results');
  };

  const addBooking = (type, name, price, location) => {
    const newBook = {
      id: `b_${Date.now()}`,
      type,
      name,
      location,
      price,
      date: 'June 15, 2026', // dynamic placeholder date
      status: 'Confirmed',
      code: `TM-${type.slice(0, 3).toUpperCase()}-${Math.floor(10000 + Math.random() * 90000)}`
    };
    setMyBookings([newBook, ...myBookings]);
  };

  const activeDestination = DESTINATIONS.find(d => d.id === selectedDestinationId);

  return (
    <div className={`min-h-screen flex flex-col font-sans transition-colors duration-300 ${theme === 'dark' ? 'bg-slate-900 text-slate-100' : 'bg-slate-50 text-slate-900'}`}>
      
      {/* Premium Gradient Glow Rings */}
      <div className="absolute top-[-10%] left-[-10%] w-[50vw] h-[50vw] rounded-full bg-red-200/30 blur-[120px] pointer-events-none"></div>
      <div className="absolute top-[20%] right-[-10%] w-[40vw] h-[40vw] rounded-full bg-amber-200/20 blur-[120px] pointer-events-none"></div>

      <Navbar 
        activeTab={activeTab === 'results' || activeTab === 'detail' ? 'explore' : activeTab} 
        setActiveTab={(tab) => {
          setActiveTab(tab);
          setSelectedDestinationId(null);
        }}
        onPlanTripClick={() => setPlannerOpen(true)}
        theme={theme}
        toggleTheme={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
      />

      <main className="flex-1 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 w-full relative z-10">
        
        {/* EXPLORE PAGE */}
        {activeTab === 'explore' && (
          <HomeSection 
            onPlanTripClick={() => setPlannerOpen(true)}
            onSelectDestination={handleSelectDestination}
          />
        )}

        {/* TRENDING PAGE */}
        {activeTab === 'trending' && (
          <TrendingSection onSelectDestination={handleSelectDestination} />
        )}

        {/* BOOKINGS MANAGEMENT DASHBOARD */}
        {activeTab === 'bookings' && (
          <div className="max-w-4xl mx-auto space-y-6 text-left">
            <div>
              <h2 className="font-display font-extrabold text-2xl flex items-center gap-2">
                <Sparkles className="h-5 w-5 text-red-400" />
                My Bookings Dashboard
              </h2>
              <p className="text-xs text-slate-400 mt-1">
                View your upcoming travel details, tickets, and partner hotel vouchers.
              </p>
            </div>

            {myBookings.length === 0 ? (
              <div className="glass-card p-12 rounded-3xl text-center border border-slate-200/40 space-y-4">
                <AlertCircle className="h-12 w-12 text-slate-500 mx-auto" />
                <h3 className="font-display font-bold text-lg text-slate-900">No Active Bookings</h3>
                <p className="text-sm text-slate-600 max-w-md mx-auto">
                  You haven't purchased any transport tickets or reserved any hotel rooms yet. Search destinations or use our AI trip planner to start.
                </p>
                <button
                  onClick={() => setActiveTab('explore')}
                  className="bg-gradient-to-r from-[#ef233c] to-[#d90429] text-white px-5 py-2.5 rounded-xl font-bold text-xs shadow-md border border-white/10 hover:opacity-90"
                >
                  Explore Destinations
                </button>
              </div>
            ) : (
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {myBookings.map((b) => (
                  <div key={b.id} className="glass-card p-5 rounded-2xl border border-white/10 flex flex-col justify-between space-y-4">
                    <div className="flex justify-between items-start">
                      <div className="flex gap-3">
                        <div className={`p-3 rounded-xl ${
                          b.type === 'Flight' ? 'bg-[#fee2e2] text-[#991b1b] border border-[#fecaca]' :
                          b.type === 'Train' ? 'bg-[#ffe4e6] text-[#9f1239] border border-[#fecdd3]' : 'bg-slate-100 text-slate-900 border border-slate-200'
                        }`}>
                          {b.type === 'Flight' ? <Plane className="h-5 w-5" /> :
                           b.type === 'Train' ? <Train className="h-5 w-5" /> : <Hotel className="h-5 w-5" />}
                        </div>
                        <div>
                          <span className="text-[10px] uppercase font-bold text-slate-500 tracking-wider">{b.type} Ticket</span>
                          <h4 className="font-bold text-slate-900 text-sm mt-0.5">{b.name}</h4>
                          <span className="text-[10px] text-[#b91c1c] mt-1 inline-flex items-center gap-1 font-semibold">
                            <MapPin className="h-3 w-3" /> {b.location}
                          </span>
                        </div>
                      </div>
                      <span className="text-[10px] font-bold bg-[#fee2e2] text-[#991b1b] border border-[#fecaca] px-2 py-0.5 rounded-md">
                        {b.status}
                      </span>
                    </div>

                    <div className="pt-3 border-t border-white/5 flex justify-between items-center text-xs">
                      <div>
                        <span className="text-[9px] text-slate-500 block uppercase">Booking Reference</span>
                        <span className="font-bold text-slate-300">{b.code}</span>
                      </div>
                      <div className="text-right">
                        <span className="text-[9px] text-slate-500 block uppercase">Travel Date</span>
                        <span className="font-bold text-slate-300">{b.date}</span>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>
        )}

        {/* AI SEARCH RESULTS */}
        {activeTab === 'results' && searchParams && (
          <SearchResults 
            searchParams={searchParams}
            onSelectDestination={handleSelectDestination}
            onBack={() => setActiveTab('explore')}
          />
        )}

        {/* DETAILED DESTINATION VIEW */}
        {activeTab === 'detail' && activeDestination && (
          <DestinationDetail 
            destination={activeDestination}
            onBack={() => {
              setActiveTab(searchParams ? 'results' : 'explore');
            }}
            onBookTicket={(type, name, price) => {
              addBooking(type, name, price, activeDestination.name);
            }}
          />
        )}

      </main>

      {/* Floating Advanced Filter Modal */}
      <PlannerModal 
        isOpen={plannerOpen}
        onClose={() => setPlannerOpen(false)}
        onSearch={handleSearchApply}
      />
    </div>
  );
}
