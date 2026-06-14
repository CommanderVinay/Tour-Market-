// Mock Data Store for Tour Market Travel Social Marketplace

export const CURRENT_USER = {
  id: 'current_user',
  name: 'Aarav Sharma',
  avatar: 'https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?w=150&auto=format&fit=crop&q=80',
  handle: '@aarav_travels',
  followers: 432,
  following: 189
};

export const DESTINATIONS = [
  {
    id: 'goa',
    name: 'Goa Beaches',
    category: 'Beach',
    location: 'Goa, India',
    shortSummary: 'Sun, sand, and beautiful Portuguese heritage sites.',
    fullSummary: 'Goa is a state in western India with coastlines stretching along the Arabian Sea. Its long history as a Portuguese colony prior to 1961 is evident in its preserved 17th-century churches and the area’s tropical spice plantations. Goa is also known for its beaches, ranging from popular stretches at Baga and Palolem to those in laid-back fishing villages such as Agonda.',
    image: 'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?w=800&auto=format&fit=crop&q=80',
    images: [
      'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?w=800&auto=format&fit=crop&q=80',
      'https://images.unsplash.com/photo-1544735716-392fe2489ffa?w=800&auto=format&fit=crop&q=80',
      'https://images.unsplash.com/photo-1519046904884-53103b34b206?w=800&auto=format&fit=crop&q=80'
    ],
    videoUrl: 'https://assets.mixkit.co/videos/preview/mixkit-waves-breaking-on-a-sandy-beach-from-above-44390-large.mp4',
    budgetEstimate: 18000,
    distance: 450, // from current location (say, Mumbai)
    rating: 4.7,
    reviewCount: 3820,
    bestSeason: 'November to February',
    weather: {
      temp: '31°C',
      condition: 'Sunny & Warm',
      humidity: '65%'
    },
    safetyScore: 9.2,
    attractions: ['Calangute Beach', 'Basilica of Bom Jesus', 'Fort Aguada', 'Dudhsagar Falls', 'Anjuna Flea Market'],
    foodRecommendations: [
      { name: 'Fish Curry Rice', type: 'Local Delicacy', description: 'Traditional Goan fish curry with spiced coconut gravy.' },
      { name: 'Bebinca', type: 'Dessert', description: 'Multi-layered rich Indo-Portuguese sweet pudding.' },
      { name: 'Prawn Balchão', type: 'Spicy Side', description: 'Fiery, pickle-like prawn dish with vinegar and chilies.' }
    ],
    reviews: [
      { id: 1, user: 'Neha Gupta', avatar: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=100&auto=format&fit=crop&q=80', text: 'Loved the beaches in South Goa! So peaceful and clean.', rating: 5, date: 'May 12, 2026' },
      { id: 2, user: 'Rohan Mehta', avatar: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=100&auto=format&fit=crop&q=80', text: 'North Goa is amazing for parties. Visited Baga and Anjuna. Must try the local shacks!', rating: 4, date: 'April 28, 2026' }
    ],
    coordinates: { lat: 15.2993, lng: 74.1240 }
  },
  {
    id: 'manali',
    name: 'Manali Valley',
    category: 'Adventure',
    location: 'Himachal Pradesh, India',
    shortSummary: 'Snow-capped peaks, lush valleys, and adventure sports.',
    fullSummary: 'Manali is a high-altitude Himalayan resort town in India’s northern Himachal Pradesh state. It has a reputation as a backpacking center and adventure destination. Set on the Beas River, it’s a gateway for skiing in the Solang Valley and trekking in Parvati Valley. It’s also a jumping-off point for paragliding, rafting and mountaineering in the Pir Panjal mountains.',
    image: 'https://images.unsplash.com/photo-1605649487212-47bdab064df7?w=800&auto=format&fit=crop&q=80',
    images: [
      'https://images.unsplash.com/photo-1605649487212-47bdab064df7?w=800&auto=format&fit=crop&q=80',
      'https://images.unsplash.com/photo-1542856391-010fb87dcfed?w=800&auto=format&fit=crop&q=80',
      'https://images.unsplash.com/photo-1605538032432-a9f0c8d9baac?w=800&auto=format&fit=crop&q=80'
    ],
    videoUrl: 'https://assets.mixkit.co/videos/preview/mixkit-waterfall-in-forest-2213-large.mp4',
    budgetEstimate: 22000,
    distance: 1400,
    rating: 4.8,
    reviewCount: 4120,
    bestSeason: 'October to June',
    weather: {
      temp: '14°C',
      condition: 'Chilly & Cloudy',
      humidity: '45%'
    },
    safetyScore: 8.8,
    attractions: ['Solang Valley Paragliding', 'Hadimba Temple', 'Rohtang Pass Snow View', 'Jogini Waterfall Trek', 'Old Manali Cafe Street'],
    foodRecommendations: [
      { name: 'Siddu', type: 'Local Delicacy', description: 'Steamed wheat bun stuffed with opium seeds, nuts, and spices.' },
      { name: 'Trout Fish', type: 'Seafood', description: 'Fresh pan-fried river trout spiced with local herbs.' },
      { name: 'Tupka', type: 'Noodles', description: 'Warm, filling Tibetan noodle soup perfect for cold nights.' }
    ],
    reviews: [
      { id: 1, user: 'Amit Sen', avatar: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=100&auto=format&fit=crop&q=80', text: 'Paragliding in Solang Valley was breathtaking. Solang is a must visit.', rating: 5, date: 'May 20, 2026' },
      { id: 2, user: 'Kriti Verma', avatar: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=100&auto=format&fit=crop&q=80', text: 'Stunning mountain views. Loved chilling in Old Manali cafes. Hadimba temple is very peaceful.', rating: 5, date: 'May 04, 2026' }
    ],
    coordinates: { lat: 32.2396, lng: 77.1887 }
  },
  {
    id: 'rishikesh',
    name: 'Rishikesh Rapids',
    category: 'Adventure',
    location: 'Uttarakhand, India',
    shortSummary: 'The white water rafting hub and Himalayan hiking trails.',
    fullSummary: 'Rishikesh is a city in India’s northern state of Uttarakhand, in the Himalayan foothills beside the Ganges River. The river is considered holy, and the city is renowned as a center for white water rafting, bungee jumping, and trekking. Temples and ashrams line the eastern bank around Swarg Ashram, a traffic-free, alcohol-free and vegetarian enclave.',
    image: 'https://images.unsplash.com/photo-1598977123418-45f04b61b49e?w=800&auto=format&fit=crop&q=80',
    images: [
      'https://images.unsplash.com/photo-1598977123418-45f04b61b49e?w=800&auto=format&fit=crop&q=80',
      'https://images.unsplash.com/photo-1614082242765-7c98ca0f3df3?w=800&auto=format&fit=crop&q=80',
      'https://images.unsplash.com/photo-1561361513-2d000a50f0db?w=800&auto=format&fit=crop&q=80'
    ],
    videoUrl: 'https://assets.mixkit.co/videos/preview/mixkit-rafting-team-rowing-fast-in-a-wild-river-42289-large.mp4',
    budgetEstimate: 12000,
    distance: 1250,
    rating: 4.6,
    reviewCount: 2950,
    bestSeason: 'September to November & March to May',
    weather: {
      temp: '26°C',
      condition: 'Pleasant',
      humidity: '50%'
    },
    safetyScore: 9.5,
    attractions: ['Laxman Jhula Suspension Bridge', 'Triveni Ghat Ganga Aarti', 'Shivpuri Rafting Site', 'Beatles Ashram', 'Neer Garh Waterfall'],
    foodRecommendations: [
      { name: 'Aloo Puri', type: 'Local Breakfast', description: 'Crispy deep fried wheat breads served with spicy potato curry.' },
      { name: 'Ginger Lemon Honey Tea', type: 'Drink', description: 'Refreshing health tonic served across local yoga ashrams.' },
      { name: 'Ayurvedic Thali', type: 'Healthy Dining', description: 'Platter of organic, spiced lentils and grains.' }
    ],
    reviews: [
      { id: 1, user: 'Devendra K.', avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&auto=format&fit=crop&q=80', text: 'River rafting in Ganges is an absolute thrill! Visited Beatles Ashram too, super nostalgic.', rating: 5, date: 'April 15, 2026' }
    ],
    coordinates: { lat: 30.0869, lng: 78.2676 }
  },
  {
    id: 'kerala',
    name: 'Kerala Backwaters',
    category: 'Romantic',
    location: 'Kerala, India',
    shortSummary: 'Serene houseboats moving through palm-fringed lagoons.',
    fullSummary: 'Kerala Backwaters are a network of brackish lagoons and canals lying parallel to the Arabian Sea coast of Kerala state in southern India. Kerala Backwaters include five large lakes linked by canals, both manmade and natural, fed by 38 rivers, and virtually extending half the length of Kerala state.',
    image: 'https://images.unsplash.com/photo-1593693397690-362cb9666fc2?w=800&auto=format&fit=crop&q=80',
    images: [
      'https://images.unsplash.com/photo-1593693397690-362cb9666fc2?w=800&auto=format&fit=crop&q=80',
      'https://images.unsplash.com/photo-1589308078059-be1415eab4c3?w=800&auto=format&fit=crop&q=80',
      'https://images.unsplash.com/photo-1602216056096-3b40cc0c9944?w=800&auto=format&fit=crop&q=80'
    ],
    videoUrl: 'https://assets.mixkit.co/videos/preview/mixkit-boats-on-a-river-in-a-sunny-day-42296-large.mp4',
    budgetEstimate: 28000,
    distance: 1100,
    rating: 4.9,
    reviewCount: 3500,
    bestSeason: 'September to March',
    weather: {
      temp: '29°C',
      condition: 'Tropical & Humid',
      humidity: '78%'
    },
    safetyScore: 9.4,
    attractions: ['Alappuzha Houseboats', 'Kumarakom Bird Sanctuary', 'Vembanad Lake Sunset', 'Marari Beach Walks', 'Pathiramanal Island'],
    foodRecommendations: [
      { name: 'Karimeen Pollichathu', type: 'Signature Dish', description: 'Pearl spot fish marinated in spicy paste and baked in banana leaves.' },
      { name: 'Appam with Stew', type: 'Breakfast', description: 'Soft-centered lacy rice pancakes served with creamy coconut milk vegetable/meat stew.' },
      { name: 'Banana Fritters (Pazham Pori)', type: 'Snack', description: 'Ripe plantains dipped in flour batter and deep fried.' }
    ],
    reviews: [
      { id: 1, user: 'Sonia Matthew', avatar: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=100&auto=format&fit=crop&q=80', text: 'Staying on the houseboat in Alleppey was a dream come true. Stunning sunset and great local food.', rating: 5, date: 'March 18, 2026' }
    ],
    coordinates: { lat: 9.4981, lng: 76.3388 }
  },
  {
    id: 'udaipur',
    name: 'Udaipur Palaces',
    category: 'Cultural',
    location: 'Rajasthan, India',
    shortSummary: 'The City of Lakes and grand royal heritage residences.',
    fullSummary: 'Udaipur, formerly the capital of the Mewar Kingdom, is a city in the western state of Rajasthan, India. Founded by Maharana Udai Singh II in 1559, it’s set around a series of artificial lakes and is known for its lavish royal residences. City Palace, overlooking Lake Pichola, is a monumental complex of 11 palaces, courtyards and gardens.',
    image: 'https://images.unsplash.com/photo-1599661046289-e31897846e41?w=800&auto=format&fit=crop&q=80',
    images: [
      'https://images.unsplash.com/photo-1599661046289-e31897846e41?w=800&auto=format&fit=crop&q=80',
      'https://images.unsplash.com/photo-1615836245337-f5b9b2303f10?w=800&auto=format&fit=crop&q=80',
      'https://images.unsplash.com/photo-1603262110263-fb0112e7cc33?w=800&auto=format&fit=crop&q=80'
    ],
    videoUrl: 'https://assets.mixkit.co/videos/preview/mixkit-architectural-details-of-a-temple-in-india-42410-large.mp4',
    budgetEstimate: 35000,
    distance: 650,
    rating: 4.8,
    reviewCount: 2200,
    bestSeason: 'September to March',
    weather: {
      temp: '28°C',
      condition: 'Sunny',
      humidity: '35%'
    },
    safetyScore: 9.0,
    attractions: ['Lake Pichola Boat Cruise', 'City Palace Udaipur', 'Jag Mandir Palace Resort', 'Sajjangarh Monsoon Palace', 'Fateh Sagar Lake'],
    foodRecommendations: [
      { name: 'Dal Baati Churma', type: 'Royal Feast', description: 'Lentils served with baked wheat flour balls dipped in pure ghee and sweet ground wheat.' },
      { name: 'Laal Maas', type: 'Spicy Delicacy', description: 'Fiery mutton curry cooked with Mathania red chilies.' },
      { name: 'Kachori', type: 'Snack', description: 'Deep fried flaky pastry filled with spiced lentils or onions.' }
    ],
    reviews: [
      { id: 1, user: 'Vikram Singh', avatar: 'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=100&auto=format&fit=crop&q=80', text: 'Royal hospitality at its best. Lake Pichola views are out of this world.', rating: 5, date: 'May 01, 2026' }
    ],
    coordinates: { lat: 24.5854, lng: 73.7125 }
  },
  {
    id: 'kedarnath',
    name: 'Kedarnath Temple',
    category: 'Spiritual',
    location: 'Uttarakhand, India',
    shortSummary: 'Holy pilgrimage site nestled high in the snow peaks.',
    fullSummary: 'Kedarnath Temple is a Hindu temple dedicated to Shiva. Located on the Garhwal Himalayan range near the Mandakini river in Kedarnath, Uttarakhand, India, the temple is open to the general public only between the months of April and November due to extreme winter weather conditions.',
    image: 'https://images.unsplash.com/photo-1626014903708-25d259c6b8c8?w=800&auto=format&fit=crop&q=80',
    images: [
      'https://images.unsplash.com/photo-1626014903708-25d259c6b8c8?w=800&auto=format&fit=crop&q=80',
      'https://images.unsplash.com/photo-1626014904098-b80c5545a19f?w=800&auto=format&fit=crop&q=80'
    ],
    videoUrl: 'https://assets.mixkit.co/videos/preview/mixkit-view-of-himalayan-mountains-under-clear-sky-42287-large.mp4',
    budgetEstimate: 15000,
    distance: 1350,
    rating: 4.9,
    reviewCount: 5400,
    bestSeason: 'May to June & September to October',
    weather: {
      temp: '6°C',
      condition: 'Very Cold & Snowy',
      humidity: '40%'
    },
    safetyScore: 8.5,
    attractions: ['Kedarnath Lord Shiva Temple', 'Bhairav Temple Viewpoint', 'Vasuki Tal Alpine Lake', 'Chorabari Tal Lake', 'Shankaracharya Samadhi'],
    foodRecommendations: [
      { name: 'Garhwal Ka Fannah', type: 'Local Delicacy', description: 'Rich black gram dal dish, staple of Uttarakhand hills.' },
      { name: 'Singori', type: 'Sweet', description: 'Milk cake wrapped in Maalu leaves, offering a unique herbal scent.' }
    ],
    reviews: [
      { id: 1, user: 'Rahul Joshi', avatar: 'https://images.unsplash.com/photo-1522075469751-3a6694fb2f61?w=100&auto=format&fit=crop&q=80', text: 'An intense trek but completely worth the spiritual vibes. Pure bliss.', rating: 5, date: 'May 10, 2026' }
    ],
    coordinates: { lat: 30.7352, lng: 79.0669 }
  },
  {
    id: 'kaziranga',
    name: 'Kaziranga Safari',
    category: 'Wildlife',
    location: 'Assam, India',
    shortSummary: 'Home of the great Indian one-horned rhinoceros.',
    fullSummary: 'Kaziranga National Park is a protected area in the northeast Indian state of Assam. Spread across the floodplains of the Brahmaputra River, its forests, wetlands and grasslands are home to tigers, elephants and the world’s largest population of Indian one-horned rhinoceroses. Ganges River dolphins swim in the park’s waters.',
    image: 'https://images.unsplash.com/photo-1629814233767-4e7839354ab9?w=800&auto=format&fit=crop&q=80',
    images: [
      'https://images.unsplash.com/photo-1629814233767-4e7839354ab9?w=800&auto=format&fit=crop&q=80',
      'https://images.unsplash.com/photo-1588615419864-dd5e58c0cfdf?w=800&auto=format&fit=crop&q=80'
    ],
    videoUrl: 'https://assets.mixkit.co/videos/preview/mixkit-waterfall-in-forest-2213-large.mp4',
    budgetEstimate: 16500,
    distance: 2100,
    rating: 4.8,
    reviewCount: 1950,
    bestSeason: 'November to April',
    weather: {
      temp: '22°C',
      condition: 'Mist & Warm Sunshine',
      humidity: '60%'
    },
    safetyScore: 9.1,
    attractions: ['Elephant Safari Point', 'Jeep Safari Range', 'Orchid Biodiversity Park', 'Brahmaputra Dolphin Watch', 'Kakochang Waterfall'],
    foodRecommendations: [
      { name: 'Masor Tenga', type: 'Assamese Curry', description: 'Light and sour river fish curry made with tomatoes and lemon.' },
      { name: 'Pitha', type: 'Traditional Sweet', description: 'Rice cakes filled with grated coconut, sesame, and jaggery.' }
    ],
    reviews: [
      { id: 1, user: 'Arup Saikia', avatar: 'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=100&auto=format&fit=crop&q=80', text: 'Spotted 5 rhinos on our morning safari! An absolute conservation marvel.', rating: 5, date: 'January 14, 2026' }
    ],
    coordinates: { lat: 26.5775, lng: 93.1711 }
  }
];

export const TRAVEL_REELS = [
  {
    id: 'reel_1',
    user: {
      name: 'Rohan Mehta',
      avatar: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=100&auto=format&fit=crop&q=80',
      handle: '@rohan_rides'
    },
    title: 'Biking through Rohtang Pass 🏍️❄️',
    videoUrl: 'https://assets.mixkit.co/videos/preview/mixkit-riding-a-motorcycle-on-a-mountain-road-42295-large.mp4',
    likes: '14.2k',
    comments: '430'
  },
  {
    id: 'reel_2',
    user: {
      name: 'Aditi Rao',
      avatar: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=100&auto=format&fit=crop&q=80',
      handle: '@aditi_explores'
    },
    title: 'Divine Ganga Aarti in Rishikesh 🙏✨',
    videoUrl: 'https://assets.mixkit.co/videos/preview/mixkit-architectural-details-of-a-temple-in-india-42410-large.mp4',
    likes: '28.5k',
    comments: '890'
  },
  {
    id: 'reel_3',
    user: {
      name: 'Kabir Kapoor',
      avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&auto=format&fit=crop&q=80',
      handle: '@kabir_nomad'
    },
    title: 'Surfing the Baga beach waves 🏄‍♂️🏖️',
    videoUrl: 'https://assets.mixkit.co/videos/preview/mixkit-waves-breaking-on-a-sandy-beach-from-above-44390-large.mp4',
    likes: '9.8k',
    comments: '185'
  }
];

export const HOTELS_DATABASE = {
  goa: [
    {
      id: 'h_goa_1',
      name: 'Taj Exotica Resort & Spa',
      image: 'https://images.unsplash.com/photo-1566073771259-6a8506099945?w=500&auto=format&fit=crop&q=80',
      rating: 4.9,
      price: 18000,
      nearbyAttractions: 'Benaulim Beach (200m), Colva Beach (3km)',
      badges: ['5-Star Luxury', 'Beach Front', 'Family Friendly', 'Kids Club']
    },
    {
      id: 'h_goa_2',
      name: 'Caravela Beach Resort',
      image: 'https://images.unsplash.com/photo-1520250497591-112f2f40a3f4?w=500&auto=format&fit=crop&q=80',
      rating: 4.6,
      price: 9500,
      nearbyAttractions: 'Varca Beach (100m)',
      badges: ['Golf Course', 'Infinity Pool', 'Family Approved', 'Free Wifi']
    },
    {
      id: 'h_goa_3',
      name: 'Baga Beach Hosteller',
      image: 'https://images.unsplash.com/photo-1555854877-bab0e564b8d5?w=500&auto=format&fit=crop&q=80',
      rating: 4.2,
      price: 1200,
      nearbyAttractions: 'Baga Beach (50m), Tito\'s Lane (400m)',
      badges: ['Budget Friendly', 'Backpacker Hub', 'Solo Traveler Fav']
    }
  ],
  manali: [
    {
      id: 'h_manali_1',
      name: 'The Solang Heritage Resort',
      image: 'https://images.unsplash.com/photo-1584132967334-10e028bd69f7?w=500&auto=format&fit=crop&q=80',
      rating: 4.7,
      price: 7200,
      nearbyAttractions: 'Solang Valley Adventure Arena (300m)',
      badges: ['Mountain Views', 'Fireplace Room', 'Family Friendly', 'Skiing Depot']
    },
    {
      id: 'h_manali_2',
      name: 'Span Resort & Spa',
      image: 'https://images.unsplash.com/photo-1540555700478-4be289fbecef?w=500&auto=format&fit=crop&q=80',
      rating: 4.9,
      price: 14500,
      nearbyAttractions: 'Beas River Bank (100m)',
      badges: ['Riverside', 'Luxury Cabins', 'Spa & Wellness', 'Heated Pool']
    }
  ],
  rishikesh: [
    {
      id: 'h_rishi_1',
      name: 'Aloha On The Ganges',
      image: 'https://images.unsplash.com/photo-1566073771259-6a8506099945?w=500&auto=format&fit=crop&q=80',
      rating: 4.7,
      price: 8500,
      nearbyAttractions: 'Laxman Jhula (800m), Ganges bank (100m)',
      badges: ['Ganges Facing', 'Yoga Center', 'Pure Veg Restaurant', 'Family Friendly']
    },
    {
      id: 'h_rishi_2',
      name: 'Zostel Rishikesh (Tapovan)',
      image: 'https://images.unsplash.com/photo-1555854877-bab0e564b8d5?w=500&auto=format&fit=crop&q=80',
      rating: 4.4,
      price: 1500,
      nearbyAttractions: 'Tapovan Cafe Lane (200m)',
      badges: ['Co-Working Area', 'Budget Friendly', 'Social Cafe', 'Solo Friendly']
    }
  ],
  kerala: [
    {
      id: 'h_kerala_1',
      name: 'Kumarakom Lake Resort',
      image: 'https://images.unsplash.com/photo-1584132967334-10e028bd69f7?w=500&auto=format&fit=crop&q=80',
      rating: 4.9,
      price: 22000,
      nearbyAttractions: 'Vembanad Lake (frontage)',
      badges: ['Heritage Villas', 'Private Pool', 'Luxury Ayurveda', 'Family Friendly']
    },
    {
      id: 'h_kerala_2',
      name: 'Zuri Kumarakom Resort',
      image: 'https://images.unsplash.com/photo-1566073771259-6a8506099945?w=500&auto=format&fit=crop&q=80',
      rating: 4.7,
      price: 13000,
      nearbyAttractions: 'Bird Sanctuary (2km)',
      badges: ['Lake Front', 'Infinity Pool', 'Spa Wellness', 'Family Approved']
    }
  ],
  udaipur: [
    {
      id: 'h_udai_1',
      name: 'The Leela Palace Udaipur',
      image: 'https://images.unsplash.com/photo-1540555700478-4be289fbecef?w=500&auto=format&fit=crop&q=80',
      rating: 4.9,
      price: 32000,
      nearbyAttractions: 'Lake Pichola (Overlooking), City Palace (1km)',
      badges: ['Ultra Luxury', 'Lake Island', 'Boat Shuttle', 'Royal Hospitality']
    },
    {
      id: 'h_udai_2',
      name: 'Lake Pichola Hotel',
      image: 'https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?w=500&auto=format&fit=crop&q=80',
      rating: 4.5,
      price: 6800,
      nearbyAttractions: 'Ambrai Ghat (150m)',
      badges: ['Heritage Look', 'Rooftop Dine', 'Lake View Pool']
    }
  ],
  kedarnath: [
    {
      id: 'h_kedar_1',
      name: 'GMVN Kedarnath Tourist Bungalow',
      image: 'https://images.unsplash.com/photo-1555854877-bab0e564b8d5?w=500&auto=format&fit=crop&q=80',
      rating: 4.1,
      price: 2500,
      nearbyAttractions: 'Kedarnath Temple (400m)',
      badges: ['Closest to Temple', 'Basic Comforts', 'Veg Meals Included', 'Heated Water']
    }
  ],
  kaziranga: [
    {
      id: 'h_kazi_1',
      name: 'Wild Grass Resort Kaziranga',
      image: 'https://images.unsplash.com/photo-1566073771259-6a8506099945?w=500&auto=format&fit=crop&q=80',
      rating: 4.6,
      price: 4500,
      nearbyAttractions: 'Kohora Safari Range (1.2km)',
      badges: ['Forest View', 'Safari Bookings', 'Traditional Food']
    },
    {
      id: 'h_kazi_2',
      name: 'Kaziranga Lodge',
      image: 'https://images.unsplash.com/photo-1520250497591-112f2f40a3f4?w=500&auto=format&fit=crop&q=80',
      rating: 4.3,
      price: 2800,
      nearbyAttractions: 'Orchid Park (2km)',
      badges: ['Budget Friendly', 'Eco Lodge', 'Clean Rooms']
    }
  ]
};

export const TRANSPORT_DATABASE = {
  goa: {
    flight: [
      { carrier: 'IndiGo', code: '6E-2134', duration: '1h 15m', price: 4200, time: '08:15 AM - 09:30 AM', availability: '9 Seats left', confirmationChance: 'High (95%)' },
      { carrier: 'Air India', code: 'AI-845', duration: '1h 20m', price: 4800, time: '12:30 PM - 01:50 PM', availability: '14 Seats left', confirmationChance: 'Confirmed' }
    ],
    train: [
      { name: 'Tejas Express', code: '22119', duration: '8h 30m', price: 1550, time: '05:50 AM - 02:20 PM', availability: 'WL 12', confirmationChance: '78% Confirmation' },
      { name: 'Mandovi Express', code: '10103', duration: '10h 15m', price: 650, time: '07:10 AM - 05:25 PM', availability: 'Available 85', confirmationChance: 'Guaranteed' }
    ],
    bus: [
      { operator: 'Paulo Travels', type: 'AC Multi-Axle Sleeper', duration: '12h 00m', price: 1200, time: '08:00 PM - 08:00 AM', availability: '12 Seats left', confirmationChance: 'Instant Book' },
      { operator: 'Atmaram Travels', type: 'Non-AC Sleeper', duration: '13h 15m', price: 800, time: '07:30 PM - 08:45 AM', availability: '24 Seats left', confirmationChance: 'Instant Book' }
    ],
    cab: [
      { operator: 'MakeMyTrip Outstation Cabs', type: 'Sedan (Dzire or equivalent)', duration: '10h', price: 8500, availability: 'Instant Dispatch', confirmationChance: '100% Confirmation' },
      { operator: 'Ola Outstation SUV', type: 'SUV (Ertiga or Innova)', duration: '10h', price: 12500, availability: 'Instant Dispatch', confirmationChance: '100% Confirmation' }
    ],
    selfDrive: [
      { operator: 'Zoomcar', type: 'Hyundai i20 (Manual)', pricePerDay: 2200, availability: 'Available at Airport Depot', securityDeposit: '₹2000' },
      { operator: 'Revv', type: 'Mahindra Thar (4x4 Automatic)', pricePerDay: 4800, availability: 'Deliver to Hotel', securityDeposit: '₹5000' }
    ]
  },
  manali: {
    flight: [
      { carrier: 'Alliance Air (Delhi to Bhuntar)', code: '9I-805', duration: '1h 20m', price: 8200, time: '06:30 AM - 07:50 AM', availability: '4 Seats left', confirmationChance: 'High (90%)' }
    ],
    train: [
      { name: 'Shatabdi Express (Delhi to Chandigarh)', code: '12011', duration: '3h 30m', price: 980, time: '07:40 AM - 11:10 AM', availability: 'Available 142', confirmationChance: 'Guaranteed' }
    ],
    bus: [
      { operator: 'HPTDC Official Volvo', type: 'AC Volvo Semi-Sleeper', duration: '14h 00m', price: 1600, time: '06:00 PM - 08:00 AM', availability: '18 Seats left', confirmationChance: 'Instant Book' },
      { operator: 'Zingbus Luxury', type: 'AC Multi-Axle Sleeper', duration: '13h 30m', price: 1450, time: '07:30 PM - 09:00 AM', availability: '10 Seats left', confirmationChance: 'Instant Book' }
    ],
    cab: [
      { operator: 'Chandigarh-Manali Union Cabs', type: 'SUV (Innova)', duration: '7h (from Chandigarh)', price: 6500, availability: 'Instant Dispatch', confirmationChance: 'Confirmed' }
    ],
    selfDrive: [
      { operator: 'Zoomcar Chandigarh', type: 'Maruti Brezza', pricePerDay: 2800, availability: 'Chandigarh Station Pickup', securityDeposit: '₹2000' }
    ]
  },
  rishikesh: {
    flight: [
      { carrier: 'IndiGo (to Dehradun Jolly Grant)', code: '6E-445', duration: '1h 00m', price: 3400, time: '10:00 AM - 11:00 AM', availability: '20 Seats left', confirmationChance: 'Confirmed' }
    ],
    train: [
      { name: 'Jan Shatabdi (Delhi to Haridwar)', code: '12055', duration: '4h 45m', price: 650, time: '03:20 PM - 08:05 PM', availability: 'Available 54', confirmationChance: 'Guaranteed' }
    ],
    bus: [
      { operator: 'UTC Volvo', type: 'AC Semi-Sleeper', duration: '6h 00m', price: 750, time: '11:00 PM - 05:00 AM', availability: '32 Seats left', confirmationChance: 'Instant Book' }
    ],
    cab: [
      { operator: 'Dehradun Cab Services', type: 'Sedan', duration: '1h 15m (from Dehradun Airport)', price: 1800, availability: 'Instant Dispatch', confirmationChance: 'Confirmed' }
    ],
    selfDrive: [
      { operator: 'Royal Brothers Bikes', type: 'Royal Enfield Classic 350', pricePerDay: 1200, availability: 'Tapovan Depot', securityDeposit: '₹1000' }
    ]
  },
  kaziranga: {
    flight: [
      { carrier: 'IndiGo (to Jorhat Airport)', code: '6E-512', duration: '1h 45m', price: 5400, time: '11:00 AM - 12:45 PM', availability: '6 Seats left', confirmationChance: 'High' }
    ],
    train: [
      { name: 'Rajdhani Express (to Guwahati)', code: '12424', duration: '24h 00m', price: 3400, time: '02:00 PM - 02:00 PM', availability: 'Available 15', confirmationChance: 'Confirmed' }
    ],
    bus: [
      { operator: 'Network Travels', type: 'AC Seater/Sleeper', duration: '5h 00m', price: 650, time: '08:00 AM - 01:00 PM', availability: '14 Seats left', confirmationChance: 'Instant' }
    ],
    cab: [
      { operator: 'Guwahati Safari Cabs', type: 'SUV (Bolero/Innova)', duration: '4.5h', price: 5500, availability: 'Instant Dispatch', confirmationChance: 'Confirmed' }
    ],
    selfDrive: [
      { operator: 'Assam SelfDrive', type: 'Mahindra Scorpio (4x4)', pricePerDay: 3500, availability: 'Guwahati Depot', securityDeposit: '₹3000' }
    ]
  }
};

export const TOUR_GUIDES = {
  goa: [
    {
      id: 'g_goa_1',
      name: 'Rohan Fernandes',
      rating: 4.9,
      reviewCount: 142,
      price: 2500,
      languages: ['English', 'Hindi', 'Portuguese'],
      image: 'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=150&auto=format&fit=crop&q=80',
      description: 'Goan native specializing in Latin Quarter heritage walks and secret beach trails.'
    },
    {
      id: 'g_goa_2',
      name: 'Kriti Naik',
      rating: 4.8,
      reviewCount: 98,
      price: 2200,
      languages: ['English', 'Hindi', 'Konkani'],
      image: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=150&auto=format&fit=crop&q=80',
      description: 'UNESCO heritage site specialist. Enthusiastic and family-friendly storyteller.'
    }
  ],
  manali: [
    {
      id: 'g_manali_1',
      name: 'Tenzing Sherpa',
      rating: 4.9,
      reviewCount: 220,
      price: 3000,
      languages: ['English', 'Hindi', 'Tibetan'],
      image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&auto=format&fit=crop&q=80',
      description: 'High-altitude trek leader with 10+ years experience in Beas Kund and Solang Valley.'
    },
    {
      id: 'g_manali_2',
      name: 'Amit Thakur',
      rating: 4.7,
      reviewCount: 84,
      price: 2000,
      languages: ['English', 'Hindi'],
      image: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=150&auto=format&fit=crop&q=80',
      description: 'Local specialist for Old Manali culture, local cafe trials, and apple orchard treks.'
    }
  ],
  rishikesh: [
    {
      id: 'g_rishi_1',
      name: 'Swami Dhyan',
      rating: 4.9,
      reviewCount: 310,
      price: 2800,
      languages: ['English', 'Hindi', 'Sanskrit'],
      image: 'https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?w=150&auto=format&fit=crop&q=80',
      description: 'Yoga teacher and spiritual history guide for ashrams and Triveni Ganga Aarti.'
    },
    {
      id: 'g_rishi_2',
      name: 'Vikram Negi',
      rating: 4.8,
      reviewCount: 156,
      price: 2500,
      languages: ['English', 'Hindi'],
      image: 'https://images.unsplash.com/photo-1522075469751-3a6694fb2f61?w=150&auto=format&fit=crop&q=80',
      description: 'Certified white water rafting captain and river canyoning specialist.'
    }
  ],
  kerala: [
    {
      id: 'g_kerala_1',
      name: 'Unni Pillai',
      rating: 4.9,
      reviewCount: 188,
      price: 2400,
      languages: ['English', 'Malayalam', 'Tamil'],
      image: 'https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?w=150&auto=format&fit=crop&q=80',
      description: 'Backwater ecologist, expert in bird watching, canal history, and organic village farming.'
    }
  ],
  udaipur: [
    {
      id: 'g_udai_1',
      name: 'Ranveer Singh',
      rating: 4.9,
      reviewCount: 260,
      price: 3200,
      languages: ['English', 'Hindi', 'German'],
      image: 'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=150&auto=format&fit=crop&q=80',
      description: 'Official Mewar royal historian and City Palace guide. Speaks fluent German.'
    }
  ],
  kedarnath: [
    {
      id: 'g_kedar_1',
      name: 'Harish Rawat',
      rating: 4.8,
      reviewCount: 402,
      price: 2500,
      languages: ['English', 'Hindi'],
      image: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=150&auto=format&fit=crop&q=80',
      description: 'Experienced pilgrim escort and mountain responder. Has walked the route 100+ times.'
    }
  ],
  kaziranga: [
    {
      id: 'g_kazi_1',
      name: 'Bipul Baruah',
      rating: 4.9,
      reviewCount: 175,
      price: 2800,
      languages: ['English', 'Hindi', 'Assamese'],
      image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&auto=format&fit=crop&q=80',
      description: 'Wildlife tracker and ornithologist with 15+ years experience in safari ranges.'
    }
  ]
};

export const getTransportData = (destId) => {
  return TRANSPORT_DATABASE[destId] || TRANSPORT_DATABASE['goa'];
};

export const getHotelsData = (destId) => {
  return HOTELS_DATABASE[destId] || HOTELS_DATABASE['goa'];
};

export const getTourGuidesData = (destId) => {
  return TOUR_GUIDES[destId] || TOUR_GUIDES['goa'];
};
