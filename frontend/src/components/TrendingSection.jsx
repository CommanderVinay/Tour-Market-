import React, { useMemo, useState, useEffect, useRef } from 'react';
import {
  Sparkles,
  MapPin,
  Compass,
  Flame,
  Star,
  ChevronDown,
  Check,
  Heart,
  Bookmark,
  ShoppingBag,
  ChevronLeft,
  ChevronRight,
  Search,
  Hash
} from 'lucide-react';
import { DESTINATIONS } from '../data/mockData';

const categoriesList = ['All', 'Adventure', 'Spiritual', 'Romantic', 'Wildlife', 'Beach', 'Cultural'];

export default function TrendingSection({ onSelectDestination }) {
  const [searchQuery, setSearchQuery] = useState('');
  const [activeLocations, setActiveLocations] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [locationDropdownOpen, setLocationDropdownOpen] = useState(false);
  const [activeMedia, setActiveMedia] = useState({});
  const [likedDestinations, setLikedDestinations] = useState([]);
  const [savedDestinations, setSavedDestinations] = useState([]);
  const [isHeaderCompressed, setIsHeaderCompressed] = useState(false);
  const stickyHeaderRef = useRef(null);
  const dropdownRef = useRef(null);

  // Handle scroll to compress header and close dropdown
  useEffect(() => {
    let lastScrollY = window.scrollY;

    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      
      // Compress header if scrolled down more than 50px
      setIsHeaderCompressed(currentScrollY > 50);
      
      // Close dropdown when user starts scrolling down
      if (currentScrollY > lastScrollY && locationDropdownOpen) {
        setLocationDropdownOpen(false);
      }
      
      lastScrollY = currentScrollY;
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, [locationDropdownOpen]);

  // Handle click outside dropdown to close it
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setLocationDropdownOpen(false);
      }
    };

    if (locationDropdownOpen) {
      document.addEventListener('mousedown', handleClickOutside);
      return () => document.removeEventListener('mousedown', handleClickOutside);
    }
  }, [locationDropdownOpen]);

  const locationOptions = useMemo(
    () => Array.from(new Set(DESTINATIONS.map(d => d.location))).sort(),
    []
  );

  const searchPool = useMemo(
    () => Array.from(new Set(DESTINATIONS.flatMap(d => [d.name, d.location, d.category]))),
    []
  );

  const searchTerm = searchQuery.trim().toLowerCase();
  const suggestions = searchTerm
    ? searchPool.filter(item => item.toLowerCase().includes(searchTerm)).slice(0, 6)
    : [];

  const filteredDestinations = DESTINATIONS.filter(dest => {
    const locationMatch = activeLocations.length === 0 || activeLocations.includes(dest.location);
    const categoryMatch = selectedCategory === 'All' || dest.category === selectedCategory;
    const textMatch = !searchTerm || [dest.name, dest.location, dest.category, dest.shortSummary]
      .some(value => value.toLowerCase().includes(searchTerm));
    return locationMatch && categoryMatch && textMatch;
  });

  const handleToggleLocation = (location) => {
    setActiveLocations(prev =>
      prev.includes(location)
        ? prev.filter(item => item !== location)
        : [...prev, location]
    );
  };

  const handleMediaChange = (id, direction) => {
    setActiveMedia(prev => {
      const currentIndex = prev[id] ?? 0;
      const imageCount = DESTINATIONS.find(dest => dest.id === id)?.images?.length || 1;
      const nextIndex = direction === 'next'
        ? (currentIndex + 1) % imageCount
        : (currentIndex - 1 + imageCount) % imageCount;
      return { ...prev, [id]: nextIndex };
    });
  };

  const handleLike = (id) => {
    setLikedDestinations(prev =>
      prev.includes(id) ? prev.filter(item => item !== id) : [...prev, id]
    );
  };

  const handleSave = (id) => {
    setSavedDestinations(prev =>
      prev.includes(id) ? prev.filter(item => item !== id) : [...prev, id]
    );
  };

  const activeLocationLabel = activeLocations.length === 0 ? 'Anywhere' : `${activeLocations.length} selected`;

  return (
    <div className="flex justify-center">
      <div className="w-full max-w-4xl space-y-8 pb-24 text-left">

        <div className="glass-card rounded-[36px] border border-white/30 shadow-2xl shadow-red-500/10 backdrop-blur-xl p-8">
          <div className="space-y-4">
            <div className="inline-flex items-center gap-2 rounded-full bg-red-50/70 px-3 py-1 text-[11px] uppercase tracking-[0.24em] font-semibold text-[#b91c1c] border border-red-200/80">
              <Sparkles className="h-4 w-4" /> Trending Feed
            </div>
            <div>
              <h2 className="font-display text-3xl sm:text-4xl font-extrabold tracking-tight text-slate-950">
                Explore today’s hottest travel stories.
              </h2>
              <p className="mt-2 text-sm text-slate-500 max-w-2xl">
                Search popular experiences, filter by destination mood, and jump straight into the feed with Instagram-inspired post cards.
              </p>
            </div>
          </div>
        </div>

        <div className="sticky top-24 z-40 transition-all duration-300" ref={stickyHeaderRef}>
          <div className={`glass-card rounded-[36px] border border-white/30 shadow-2xl shadow-red-500/10 backdrop-blur-xl transition-all duration-300 ${
            isHeaderCompressed ? 'py-3 px-4' : 'p-5'
          }`}>
            <div className={`flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between transition-all duration-300 ${
              isHeaderCompressed ? 'sm:gap-2' : ''
            }`}>
              <div className="flex-1">
                <div className="relative">
                  <Search className="absolute left-4 top-1/2 -translate-y-1/2 h-4 w-4 text-slate-400" />
                  <input
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    placeholder="Search locations, cities, categories..."
                    className={`glass-input w-full rounded-3xl pl-11 pr-4 text-sm placeholder:text-slate-400 transition-all duration-300 ${
                      isHeaderCompressed ? 'py-2.5' : 'py-3.5'
                    }`}
                  />
                  {suggestions.length > 0 && (
                    <div className="glass-card absolute left-0 right-0 top-full mt-2 overflow-hidden rounded-3xl border border-white/25 shadow-xl shadow-slate-900/5">
                      {suggestions.map((item) => (
                        <button
                          key={item}
                          type="button"
                          onClick={() => {
                            setSearchQuery(item);
                            setLocationDropdownOpen(false);
                          }}
                          className="w-full text-left px-4 py-3 text-sm text-slate-700 hover:bg-slate-100/80 transition"
                        >
                          {item}
                        </button>
                      ))}
                    </div>
                  )}
                </div>
              </div>

              <div className={`flex flex-col gap-3 transition-all duration-300 ${
                isHeaderCompressed ? 'sm:w-auto sm:gap-1' : 'sm:w-[340px]'
              }`} ref={dropdownRef}>
                <button
                  type="button"
                  onClick={() => setLocationDropdownOpen(prev => !prev)}
                  className={`inline-flex items-center justify-between gap-2 w-full rounded-3xl border border-white/40 bg-white/80 px-4 text-sm font-semibold text-slate-700 shadow-sm shadow-slate-900/5 transition hover:border-[#ef233c]/50 ${
                    isHeaderCompressed ? 'py-2' : 'py-3'
                  }`}
                >
                  <MapPin className="h-4 w-4 text-[#ef233c]" />
                  {!isHeaderCompressed && <span>{activeLocationLabel}</span>}
                  {isHeaderCompressed && <span className="hidden sm:inline">{activeLocationLabel}</span>}
                  <ChevronDown className={`h-4 w-4 text-slate-400 transition-transform duration-300 ${locationDropdownOpen ? 'rotate-180' : ''}`} />
                </button>

                {!isHeaderCompressed && (
                  <div className="flex flex-wrap gap-2">
                    {categoriesList.map((category) => {
                      const isActive = selectedCategory === category;
                      return (
                        <button
                          key={category}
                          type="button"
                          onClick={() => setSelectedCategory(category)}
                          className={`rounded-full px-4 py-2 text-sm font-semibold transition ${isActive ? 'bg-[#ef233c] text-white shadow-lg shadow-red-500/10' : 'bg-white/80 text-slate-700 border border-white/80 hover:bg-red-50'}`}
                        >
                          {category}
                        </button>
                      );
                    })}
                  </div>
                )}
              </div>
            </div>
          </div>

          {locationDropdownOpen && (
            <div className="glass-card mt-3 rounded-3xl border border-white/25 p-4 shadow-xl shadow-slate-900/5 animate-in fade-in slide-in-from-top-2 duration-200">
              <div className="flex items-center justify-between gap-3 mb-3">
                <div>
                  <p className="text-sm font-semibold text-slate-900">Filter Locations</p>
                  <p className="text-xs text-slate-500">Pick one or more regions to narrow down the feed.</p>
                </div>
                <button
                  type="button"
                  onClick={() => setActiveLocations([])}
                  className="text-xs font-semibold text-[#ef233c] hover:text-[#c1121f]"
                >
                  Clear all
                </button>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {locationOptions.map((location) => (
                  <button
                    key={location}
                    type="button"
                    onClick={() => handleToggleLocation(location)}
                    className={`text-left rounded-3xl px-4 py-3 border transition ${activeLocations.includes(location)
                      ? 'border-[#ef233c] bg-[#fee2e2] text-[#991b1b] shadow-sm'
                      : 'border-white/50 bg-white/80 text-slate-700 hover:border-slate-300 hover:bg-slate-100'}`}
                  >
                    <span className="block text-sm font-semibold">{location}</span>
                  </button>
                ))}
              </div>
            </div>
          )}
        </div>

        <div className="space-y-6">
          {filteredDestinations.map((dest) => {
            const mediaIndex = activeMedia[dest.id] ?? 0;
            const isLiked = likedDestinations.includes(dest.id);
            const isSaved = savedDestinations.includes(dest.id);
            const hashtags = ['#' + dest.category, `#${dest.location.split(',')[0].replace(/\s+/g, '')}`, '#TopPick'];

            return (
              <article key={dest.id} className="glass-card overflow-hidden rounded-[36px] border border-white/25 shadow-2xl shadow-red-500/8 transition-transform duration-300 hover:-translate-y-1">
                <header className="flex items-center justify-between gap-4 p-5">
                  <div className="flex items-center gap-3">
                    <div className="h-12 w-12 rounded-full overflow-hidden border-2 border-[#ef233c]/30 shadow-sm shadow-red-500/10">
                      <img src={dest.images?.[0] ?? dest.image} alt={dest.name} className="h-full w-full object-cover" />
                    </div>
                    <div>
                      <p className="text-sm font-semibold text-slate-950">{dest.name}</p>
                      <p className="text-xs text-slate-500">{dest.location}</p>
                    </div>
                  </div>
                  <span className="text-[10px] uppercase tracking-[0.28em] font-bold text-slate-400">{dest.category}</span>
                </header>

                <div className="relative overflow-hidden bg-slate-900/5">
                  <div className="relative aspect-[4/5] overflow-hidden bg-slate-200">
                    <img
                      src={dest.images?.[mediaIndex] ?? dest.image}
                      alt={`${dest.name} slide ${mediaIndex + 1}`}
                      className="h-full w-full object-cover transition-all duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-slate-950/40 via-transparent to-transparent" />
                    <div className="absolute left-4 top-4 rounded-full bg-white/85 p-2 shadow-lg shadow-slate-900/10">
                      <span className="text-[11px] font-semibold uppercase tracking-[0.24em] text-slate-900">{mediaIndex + 1}/{dest.images?.length ?? 1}</span>
                    </div>
                    <button
                      type="button"
                      onClick={() => handleMediaChange(dest.id, 'prev')}
                      className="absolute left-4 top-1/2 -translate-y-1/2 rounded-full bg-white/90 p-2 shadow-lg shadow-slate-900/10 hover:bg-white"
                    >
                      <ChevronLeft className="h-5 w-5 text-slate-900" />
                    </button>
                    <button
                      type="button"
                      onClick={() => handleMediaChange(dest.id, 'next')}
                      className="absolute right-4 top-1/2 -translate-y-1/2 rounded-full bg-white/90 p-2 shadow-lg shadow-slate-900/10 hover:bg-white"
                    >
                      <ChevronRight className="h-5 w-5 text-slate-900" />
                    </button>
                  </div>
                </div>

                <div className="p-5 space-y-6">
                  <div className="flex items-center justify-between gap-3">
                    <div className="flex items-center gap-3">
                      <button
                        type="button"
                        onClick={() => handleLike(dest.id)}
                        className={`rounded-3xl p-3 transition ${isLiked ? 'bg-[#fde6e8] text-[#b91c1c]' : 'bg-white/80 text-slate-600 hover:bg-slate-100'}`}
                      >
                        <Heart className={`h-5 w-5 ${isLiked ? 'fill-[#ef233c] stroke-[#ef233c]' : 'stroke-slate-500'}`} />
                      </button>
                      <button
                        type="button"
                        onClick={() => handleSave(dest.id)}
                        className={`rounded-3xl p-3 transition ${isSaved ? 'bg-[#fde6e8] text-[#b91c1c]' : 'bg-white/80 text-slate-600 hover:bg-slate-100'}`}
                      >
                        <Bookmark className={`h-5 w-5 ${isSaved ? 'fill-[#ef233c] stroke-[#ef233c]' : 'stroke-slate-500'}`} />
                      </button>
                    </div>
                    <button
                      type="button"
                      onClick={() => onSelectDestination(dest.id)}
                      className="inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-[#ef233c] to-[#d90429] px-4 py-3 text-sm font-semibold text-white shadow-xl shadow-red-500/15 transition hover:-translate-y-0.5"
                    >
                      <ShoppingBag className="h-4 w-4" />
                      Book Trip
                    </button>
                  </div>

                  <div className="space-y-3">
                    <p className="text-sm leading-6 text-slate-600">
                      {dest.shortSummary} Discover the best experiences, local secrets, and premium stays handpicked for your next escape.
                    </p>
                    <div className="flex flex-wrap gap-2">
                      {hashtags.map((tag) => (
                        <button
                          key={tag}
                          type="button"
                          onClick={() => {
                            if (tag === '#TopPick') return;
                            if (tag === `#${dest.location.split(',')[0].replace(/\s+/g, '')}`) {
                              setActiveLocations([dest.location]);
                              setSelectedCategory('All');
                              return;
                            }
                            setSelectedCategory(tag.replace('#', ''));
                          }}
                          className="inline-flex items-center gap-1 rounded-full border border-white/60 bg-white/80 px-3 py-2 text-[11px] font-semibold uppercase tracking-[0.18em] text-slate-600 transition hover:border-[#ef233c] hover:text-[#b91c1c]"
                        >
                          <Hash className="h-3.5 w-3.5 text-[#ef233c]" />
                          {tag}
                        </button>
                      ))}
                    </div>
                  </div>

                  <div className="grid grid-cols-3 gap-3 text-[11px] text-slate-500">
                    <div className="rounded-3xl bg-white/70 border border-white/60 px-3 py-3 text-center">
                      <span className="block font-semibold text-slate-900">{dest.rating}</span>
                      <span>Rating</span>
                    </div>
                    <div className="rounded-3xl bg-white/70 border border-white/60 px-3 py-3 text-center">
                      <span className="block font-semibold text-slate-900">{dest.reviewCount}</span>
                      <span>Reviews</span>
                    </div>
                    <div className="rounded-3xl bg-white/70 border border-white/60 px-3 py-3 text-center">
                      <span className="block font-semibold text-slate-900">{dest.budgetEstimate.toLocaleString()}</span>
                      <span>Budget</span>
                    </div>
                  </div>
                </div>
              </article>
            );
          })}

          {filteredDestinations.length === 0 && (
            <div className="glass-card rounded-[36px] border border-white/15 p-12 text-center">
              <Sparkles className="mx-auto mb-4 h-10 w-10 text-[#ef233c]" />
              <h3 className="font-display text-2xl font-bold text-slate-950">No posts found</h3>
              <p className="mt-3 text-sm text-slate-500">
                Update your search or filter choices to see a matching trending experience.
              </p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
