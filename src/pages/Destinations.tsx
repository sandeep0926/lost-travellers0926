import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import PropertyCard from "@/components/PropertyCard";
import DestinationCard from "@/components/DestinationCard";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Search, MapPin, Home, Star, Shield, Clock, CheckCircle2 } from "lucide-react";
import { useState, useEffect } from "react";
import { updateSEO } from "@/utils/seo";

const Destinations = () => {
  const [searchQuery, setSearchQuery] = useState("");

  useEffect(() => {
    updateSEO(
      "Villa Destinations in India | Lost Traveller Villas",
      "Explore premium luxury villas across India. Discover beachfront villas in Goa, heritage villas in Rajasthan, backwater villas in Kerala, mountain retreats in Himachal Pradesh, and more. Book your perfect villa getaway today.",
      "villa destinations India, Goa villas, Rajasthan villas, Kerala villas, Himachal Pradesh villas, Maharashtra villas, Uttarakhand villas, luxury villa destinations"
    );
  }, []);

  const indianDestinations = [
    {
      image: "https://images.unsplash.com/photo-1559827260-dc66d52bef19?q=80&w=2070",
      title: "Goa",
      subtitle: "Things to do in Goa, India",
      properties: 45
    },
    {
      image: "https://images.unsplash.com/photo-1530841377377-3ff06c0ca713?q=80&w=2070",
      title: "Rajasthan",
      subtitle: "Things to do in Rajasthan, India",
      properties: 38
    },
    {
      image: "https://images.unsplash.com/photo-1499856871958-5b9627545d1a?q=80&w=2020",
      title: "Kerala",
      subtitle: "Things to do in Kerala, India",
      properties: 52
    },
    {
      image: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?q=80&w=2070",
      title: "Himachal Pradesh",
      subtitle: "Things to do in Himachal Pradesh, India",
      properties: 42
    },
    {
      image: "https://images.unsplash.com/photo-1571896349842-33c89424de2d?q=80&w=2080",
      title: "Maharashtra",
      subtitle: "Things to do in Maharashtra, India",
      properties: 35
    },
    {
      image: "https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?q=80&w=2070",
      title: "Uttarakhand",
      subtitle: "Things to do in Uttarakhand, India",
      properties: 28
    }
  ];

  const featuredVillas = [
    {
      image: "https://images.unsplash.com/photo-1602343168117-bb8ffe3e2e9f?q=80&w=2070",
      title: "Luxury Beachfront Villa in North Goa",
      location: "North Goa, Goa",
      price: "₹15,000",
      rating: 4.9,
      reviews: 127,
      guests: 8,
      bedrooms: 4,
      featured: true
    },
    {
      image: "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?q=80&w=2070",
      title: "Heritage Villa in Udaipur",
      location: "Udaipur, Rajasthan",
      price: "₹18,000",
      rating: 4.8,
      reviews: 94,
      guests: 6,
      bedrooms: 3,
      featured: true
    },
    {
      image: "https://images.unsplash.com/photo-1571896349842-33c89424de2d?q=80&w=2080",
      title: "Backwater Villa in Alleppey",
      location: "Alleppey, Kerala",
      price: "₹12,000",
      rating: 5.0,
      reviews: 156,
      guests: 10,
      bedrooms: 5,
      featured: true
    },
    {
      image: "https://images.unsplash.com/photo-1580587771525-78b9dba3b914?q=80&w=2074",
      title: "Mountain Villa in Manali",
      location: "Manali, Himachal Pradesh",
      price: "₹14,000",
      rating: 4.7,
      reviews: 82,
      guests: 6,
      bedrooms: 3,
      featured: true
    },
    {
      image: "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?q=80&w=2075",
      title: "Luxury Villa in Alibaug",
      location: "Alibaug, Maharashtra",
      price: "₹16,000",
      rating: 4.9,
      reviews: 143,
      guests: 8,
      bedrooms: 4,
      featured: true
    },
    {
      image: "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?q=80&w=2053",
      title: "Hill Station Villa in Mussoorie",
      location: "Mussoorie, Uttarakhand",
      price: "₹13,000",
      rating: 4.8,
      reviews: 118,
      guests: 6,
      bedrooms: 3,
      featured: true
    },
    {
      image: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?q=80&w=2070",
      title: "Beach Villa in South Goa",
      location: "South Goa, Goa",
      price: "₹14,500",
      rating: 4.9,
      reviews: 201,
      guests: 10,
      bedrooms: 5,
      featured: true
    },
    {
      image: "https://images.unsplash.com/photo-1600566753086-00f18fb6b3ea?q=80&w=2070",
      title: "Royal Villa in Jaipur",
      location: "Jaipur, Rajasthan",
      price: "₹20,000",
      rating: 4.7,
      reviews: 89,
      guests: 8,
      bedrooms: 4,
      featured: true
    },
    {
      image: "https://images.unsplash.com/photo-1600585154526-990dced4db0d?q=80&w=2087",
      title: "Spice Plantation Villa in Munnar",
      location: "Munnar, Kerala",
      price: "₹11,500",
      rating: 4.8,
      reviews: 167,
      guests: 8,
      bedrooms: 4,
      featured: true
    },
    {
      image: "https://images.unsplash.com/photo-1600607687644-c7171b42498b?q=80&w=2070",
      title: "Luxury Villa in Shimla",
      location: "Shimla, Himachal Pradesh",
      price: "₹15,500",
      rating: 5.0,
      reviews: 134,
      guests: 6,
      bedrooms: 3,
      featured: true
    },
    {
      image: "https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?q=80&w=2070",
      title: "Beachside Villa in Varkala",
      location: "Varkala, Kerala",
      price: "₹10,000",
      rating: 4.9,
      reviews: 95,
      guests: 4,
      bedrooms: 2,
      featured: true
    },
    {
      image: "https://images.unsplash.com/photo-1600585154363-67eb9e2e2099?q=80&w=2070",
      title: "Heritage Haveli in Jodhpur",
      location: "Jodhpur, Rajasthan",
      price: "₹17,500",
      rating: 4.8,
      reviews: 112,
      guests: 10,
      bedrooms: 5,
      featured: true
    }
  ];

  return (
    <>
      {/* Structured Data for Destinations */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "ItemList",
            "name": "Villa Destinations in India",
            "description": "Premium luxury villa destinations across India",
            "itemListElement": indianDestinations.map((destination, index) => ({
              "@type": "ListItem",
              "position": index + 1,
              "item": {
                "@type": "TouristDestination",
                "name": destination.title,
                "description": `Explore luxury villas in ${destination.title}, India`,
                "address": {
                  "@type": "PostalAddress",
                  "addressLocality": destination.title,
                  "addressCountry": "IN"
                }
              }
            }))
          })
        }}
      />
      
      <div className="min-h-screen bg-background">
        <Navbar />
      
      {/* Hero Section */}
      <section className="pt-32 pb-20 bg-gradient-to-b from-background to-secondary/30 overflow-hidden">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Left Side - Text Content */}
            <div className="relative z-10">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mb-6 leading-tight">
                Simplify Villa Booking for Your Customers, in India
              </h1>
              <p className="text-xl text-muted-foreground mb-8 leading-relaxed max-w-2xl">
                Save time, reduce errors, and delight your clients with seamless villa bookings across India. Experience the best of luxury living in our curated collection of premium properties.
              </p>
              
              {/* Search Bar */}
              <div className="relative mb-8">
                <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 h-5 w-5 text-muted-foreground" />
                <Input
                  type="text"
                  placeholder="Search by city, state, or villa name"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-full pl-12 pr-4 py-6 rounded-xl border-2 border-border bg-background text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent text-base"
                />
              </div>
              
              {/* Bullet Points */}
              <div className="space-y-4">
                <div className="flex items-center gap-3">
                  <div className="w-6 h-6 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                    <CheckCircle2 className="h-5 w-5 text-primary" />
                  </div>
                  <span className="text-muted-foreground text-lg">200+ premium villas across India</span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-6 h-6 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                    <CheckCircle2 className="h-5 w-5 text-primary" />
                  </div>
                  <span className="text-muted-foreground text-lg">Real-time availability & instant confirmations</span>
                </div>
              </div>
            </div>

            {/* Right Side - Image Cards with Decorative Elements */}
            <div className="relative hidden lg:block h-[600px]">
              {/* Decorative Star Icon - Top Right */}
              <div className="absolute -top-4 right-0 z-30">
                <Star className="h-10 w-10 text-orange-400 fill-orange-200 animate-pulse" />
              </div>

              {/* Decorative Hollow Star */}
              <div className="absolute top-8 right-12 z-30">
                <Star className="h-6 w-6 text-primary/40 fill-none" />
              </div>

              {/* Decorative Curve Line - Connecting the cards */}
              <svg 
                className="absolute top-1/3 left-1/4 w-3/4 h-2/3 z-10" 
                viewBox="0 0 400 300"
                style={{ pointerEvents: 'none' }}
              >
                <path
                  d="M 50 100 Q 200 50 350 100"
                  stroke="#22c55e"
                  strokeWidth="4"
                  fill="none"
                  opacity="0.4"
                />
              </svg>

              {/* Image Cards - Overlapping Layout */}
              <div className="relative h-full">
                {/* Top Card - Goa Villa */}
                <div className="absolute top-0 right-8 w-56 h-48 rounded-2xl overflow-hidden shadow-2xl transform hover:scale-105 hover:z-20 transition-all duration-300 z-10">
                  <img
                    src="https://images.unsplash.com/photo-1602343168117-bb8ffe3e2e9f?q=80&w=2070"
                    alt="Goa Beach Villa"
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent" />
                  <div className="absolute bottom-3 left-3 text-white">
                    <p className="text-sm font-semibold">Goa</p>
                    <p className="text-xs opacity-90">Beachfront Villa</p>
                  </div>
                </div>

                {/* Middle Card - Rajasthan Villa */}
                <div className="absolute top-32 left-0 w-60 h-56 rounded-2xl overflow-hidden shadow-2xl transform hover:scale-105 hover:z-20 transition-all duration-300 z-5">
                  <img
                    src="https://images.unsplash.com/photo-1512917774080-9991f1c4c750?q=80&w=2070"
                    alt="Rajasthan Heritage Villa"
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent" />
                  <div className="absolute bottom-3 left-3 text-white">
                    <p className="text-sm font-semibold">Rajasthan</p>
                    <p className="text-xs opacity-90">Heritage Villa</p>
                  </div>
                </div>

                {/* Bottom Card - Kerala Villa */}
                <div className="absolute bottom-0 right-0 w-64 h-48 rounded-2xl overflow-hidden shadow-2xl transform hover:scale-105 hover:z-20 transition-all duration-300 z-0">
                  <img
                    src="https://images.unsplash.com/photo-1571896349842-33c89424de2d?q=80&w=2080"
                    alt="Kerala Backwater Villa"
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent" />
                  <div className="absolute bottom-3 left-3 text-white">
                    <p className="text-sm font-semibold">Kerala</p>
                    <p className="text-xs opacity-90">Backwater Villa</p>
                  </div>
                </div>
              </div>

              {/* Decorative Arrow - Bottom Right */}
              <div className="absolute -bottom-6 -right-6 z-30 text-primary/30">
                <svg 
                  width="50" 
                  height="50" 
                  viewBox="0 0 24 24" 
                  fill="none" 
                  stroke="currentColor" 
                  strokeWidth="3"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M12 19V5M5 12l7-7 7 7" />
                </svg>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Explore Top Destinations Section */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Explore India's Top Villa Destinations
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Discover premium villas in the most sought-after destinations across India
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {indianDestinations.map((destination, index) => (
              <DestinationCard key={index} {...destination} />
            ))}
          </div>
        </div>
      </section>

      {/* Featured Villas Section */}
      <section className="py-20 bg-secondary/50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Find Curated Villas, Unique Stays, and Best Deals
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Browse our handpicked selection of premium villas across India, each offering unique experiences and luxury amenities
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {featuredVillas.map((villa, index) => (
              <PropertyCard key={index} {...villa} />
            ))}
          </div>
          <div className="text-center mt-12">
            <Button size="lg" className="px-8">
              View All Villas
            </Button>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center p-8 bg-secondary rounded-2xl">
              <div className="w-16 h-16 mx-auto mb-4 bg-primary/10 rounded-full flex items-center justify-center">
                <Clock className="h-8 w-8 text-primary" />
              </div>
              <h3 className="text-xl font-semibold text-foreground mb-3">24x7 Support</h3>
              <p className="text-muted-foreground">Round-the-clock assistance for guests and property owners</p>
            </div>
            <div className="text-center p-8 bg-secondary rounded-2xl">
              <div className="w-16 h-16 mx-auto mb-4 bg-primary/10 rounded-full flex items-center justify-center">
                <Clock className="h-8 w-8 text-primary" />
              </div>
              <h3 className="text-xl font-semibold text-foreground mb-3">Flexible Booking</h3>
              <p className="text-muted-foreground">Reschedule or cancel with ease, free cancellation available</p>
            </div>
            <div className="text-center p-8 bg-secondary rounded-2xl">
              <div className="w-16 h-16 mx-auto mb-4 bg-primary/10 rounded-full flex items-center justify-center">
                <Shield className="h-8 w-8 text-primary" />
              </div>
              <h3 className="text-xl font-semibold text-foreground mb-3">Secure Payment</h3>
              <p className="text-muted-foreground">Advanced encryption for safe and secure transactions</p>
            </div>
          </div>
        </div>
      </section>

      <Footer />
      </div>
    </>
  );
};

export default Destinations;


