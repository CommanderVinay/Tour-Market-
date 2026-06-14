import React, { useState } from 'react';
import { Compass, Flame, BookOpen, Bell, Menu, X, Sparkles, Sun, Moon } from 'lucide-react';
import { CURRENT_USER } from '../data/mockData';

export default function Navbar({ activeTab, setActiveTab, onPlanTripClick, theme, toggleTheme }) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navItems = [
    { id: 'explore', label: 'Explore', icon: Compass },
    { id: 'trending', label: 'Trending', icon: Flame },
    { id: 'bookings', label: 'Bookings', icon: BookOpen }
  ];

  return (
    <nav className="sticky top-0 z-50 glass-nav">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo / Brand Name */}
          <div className="flex items-center gap-2 cursor-pointer" onClick={() => setActiveTab('explore')}>
            <div className="h-10 w-10 rounded-xl bg-gradient-to-tr from-red-600 to-rose-400 flex items-center justify-center shadow-lg shadow-red-500/20">
              <Compass className="h-6 w-6 text-slate-900 stroke-[2]" />
            </div>
            <div>
              <span className="font-display font-bold text-xl tracking-tight bg-gradient-to-r from-white via-red-100 to-rose-300 bg-clip-text text-transparent">
                Tour Market
              </span>
              <div className="text-[10px] font-sans text-red-400 tracking-wider uppercase font-semibold leading-none">
                AI Travel Hub
              </div>
            </div>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-1">
            {navItems.map((item) => {
              const Icon = item.icon;
              const isActive = activeTab === item.id;
              return (
                <button
                  key={item.id}
                  onClick={() => setActiveTab(item.id)}
                  className={`flex items-center gap-2 px-4 py-2 rounded-xl text-sm font-medium transition-all duration-200 ${
                    isActive
                      ? 'bg-gradient-to-r from-red-500/10 to-rose-500/10 text-red-600 border border-red-200'
                      : 'text-slate-600 hover:text-slate-900 hover:bg-slate-100/70 border border-transparent'
                  }`}
                >
                  <Icon className={`h-4 w-4 ${isActive ? 'text-red-400' : 'text-slate-400'}`} />
                  {item.label}
                </button>
              );
            })}
          </div>

          {/* Actions */}
          <div className="hidden md:flex items-center gap-4">
            {/* Theme Toggle Button */}
            <button 
              onClick={toggleTheme}
              className="p-2 text-slate-600 hover:text-slate-900 hover:bg-slate-100/70 rounded-xl transition-all relative border border-slate-200/40"
              title={theme === 'dark' ? 'Switch to Light Mode' : 'Switch to Dark Mode'}
            >
              {theme === 'dark' ? <Sun className="h-5 w-5 text-yellow-400 fill-yellow-400/20" /> : <Moon className="h-5 w-5 text-slate-700 fill-slate-700/20" />}
            </button>

            {/* CTA Button */}
            <button
              onClick={onPlanTripClick}
              className="flex items-center gap-2 bg-gradient-to-r from-red-500 to-rose-500 hover:from-red-600 hover:to-rose-600 text-slate-950 px-4 py-2 rounded-xl text-sm font-bold shadow-lg shadow-red-500/20 transition-all duration-300 hover:scale-105"
            >
              <Sparkles className="h-4 w-4 fill-slate-950" />
              Plan My Trip
            </button>

            {/* Notification Bell */}
            <button className="p-2 text-slate-400 hover:text-slate-200 hover:bg-white/5 rounded-xl transition-all relative">
              <Bell className="h-5 w-5" />
              <span className="absolute top-1.5 right-1.5 h-2 w-2 bg-[#ef233c] rounded-full ring-2 ring-slate-900"></span>
            </button>

            {/* User Profile */}
            <div className="flex items-center gap-2 border-l border-white/10 pl-4">
              <img
                src={CURRENT_USER.avatar}
                alt={CURRENT_USER.name}
                className="h-8 w-8 rounded-xl object-cover ring-2 ring-red-500/30"
              />
              <div className="text-left">
                <div className="text-xs font-semibold text-slate-200">{CURRENT_USER.name}</div>
                <div className="text-[10px] text-slate-400">{CURRENT_USER.handle}</div>
              </div>
            </div>
          </div>

          {/* Mobile menu toggle */}
          <div className="flex items-center md:hidden gap-3">
            <button 
              onClick={toggleTheme}
              className="p-1.5 text-slate-600 hover:text-slate-900 hover:bg-slate-100/70 rounded-lg border border-slate-200/40"
            >
              {theme === 'dark' ? <Sun className="h-4 w-4 text-yellow-400" /> : <Moon className="h-4 w-4 text-slate-700" />}
            </button>
            <button
              onClick={onPlanTripClick}
              className="flex items-center gap-1.5 bg-gradient-to-r from-red-500 to-rose-500 text-slate-950 px-3 py-1.5 rounded-lg text-xs font-bold transition-all"
            >
              <Sparkles className="h-3.5 w-3.5 fill-slate-950" />
              Plan
            </button>
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 text-slate-600 hover:text-slate-900 hover:bg-slate-100/70 rounded-lg transition-all"
            >
              {mobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="md:hidden glass-card border-t border-white/5 px-4 pt-2 pb-4 space-y-2">
          {navItems.map((item) => {
            const Icon = item.icon;
            const isActive = activeTab === item.id;
            return (
              <button
                key={item.id}
                onClick={() => {
                  setActiveTab(item.id);
                  setMobileMenuOpen(false);
                }}
                className={`flex items-center gap-3 w-full px-4 py-3 rounded-xl text-base font-medium transition-all ${
                  isActive
                    ? 'bg-gradient-to-r from-red-500/10 to-rose-500/10 text-red-300 border border-red-500/20'
                    : 'text-slate-400 hover:text-slate-200 hover:bg-white/5 border border-transparent'
                }`}
              >
                <Icon className="h-5 w-5" />
                {item.label}
              </button>
            );
          })}
          <div className="pt-4 border-t border-white/5 flex items-center justify-between">
            <div className="flex items-center gap-3">
              <img
                src={CURRENT_USER.avatar}
                alt={CURRENT_USER.name}
                className="h-10 w-10 rounded-xl object-cover"
              />
              <div>
                <div className="text-sm font-semibold text-slate-200">{CURRENT_USER.name}</div>
                <div className="text-xs text-slate-400">{CURRENT_USER.handle}</div>
              </div>
            </div>
            <button className="p-2 text-slate-400 hover:text-slate-200 relative">
              <Bell className="h-6 w-6" />
              <span className="absolute top-1 right-1 h-2 w-2 bg-orange-500 rounded-full"></span>
            </button>
          </div>
        </div>
      )}
    </nav>
  );
}
