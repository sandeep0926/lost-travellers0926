import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import PropertyCard from "@/components/PropertyCard";
import DestinationCard from "@/components/DestinationCard";
import CategoryFilter from "@/components/CategoryFilter";
import PartnerSection from "@/components/PartnerSection";
import StatCard from "@/components/StatCard";
import TestimonialCard from "@/components/TestimonialCard";
import WhyChooseUs from "@/components/WhyChooseUs";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { Sparkles, TrendingUp, Clock, Waves, Gift, CheckCircle2, Bed, Home, Users, Star, Award } from "lucide-react";

const Index = () => {
  const featuredProperties = [
    {
      image: "https://images.unsplash.com/photo-1602343168117-bb8ffe3e2e9f?q=80&w=2070",
      title: "Luxury Beachfront Villa",
      location: "North Goa, India",
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
      title: "Backwater Villa",
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
      title: "Mountain Villa Retreat",
      location: "Manali, Himachal Pradesh",
      price: "₹14,000",
      rating: 4.7,
      reviews: 82,
      guests: 6,
      bedrooms: 3,
      featured: true
    }
  ];

  const weekendVillas = [
    {
      image: "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?q=80&w=2075",
      title: "Luxury Villa in Alibaug",
      location: "Alibaug, Maharashtra",
      price: "₹16,000",
      rating: 4.9,
      reviews: 143,
      guests: 8,
      bedrooms: 4
    },
    {
      image: "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?q=80&w=2053",
      title: "Beach Villa in South Goa",
      location: "South Goa, Goa",
      price: "₹14,500",
      rating: 4.8,
      reviews: 118,
      guests: 6,
      bedrooms: 3
    },
    {
      image: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?q=80&w=2070",
      title: "Hill Station Villa",
      location: "Mussoorie, Uttarakhand",
      price: "₹13,000",
      rating: 4.9,
      reviews: 201,
      guests: 10,
      bedrooms: 5
    },
    {
      image: "https://images.unsplash.com/photo-1600566753086-00f18fb6b3ea?q=80&w=2070",
      title: "Royal Villa in Jaipur",
      location: "Jaipur, Rajasthan",
      price: "₹20,000",
      rating: 4.7,
      reviews: 89,
      guests: 8,
      bedrooms: 4
    }
  ];

  const inspirationVillas = [
    {
      image: "https://images.unsplash.com/photo-1600585154526-990dced4db0d?q=80&w=2087",
      title: "Spice Plantation Villa",
      location: "Munnar, Kerala",
      price: "₹11,500",
      rating: 4.8,
      reviews: 167,
      guests: 8,
      bedrooms: 4
    },
    {
      image: "https://images.unsplash.com/photo-1600607687644-c7171b42498b?q=80&w=2070",
      title: "Luxury Villa in Shimla",
      location: "Shimla, Himachal Pradesh",
      price: "₹15,500",
      rating: 5.0,
      reviews: 134,
      guests: 6,
      bedrooms: 3
    },
    {
      image: "https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?q=80&w=2070",
      title: "Beachside Villa",
      location: "Varkala, Kerala",
      price: "₹10,000",
      rating: 4.9,
      reviews: 95,
      guests: 4,
      bedrooms: 2
    },
    {
      image: "https://images.unsplash.com/photo-1600585154363-67eb9e2e2099?q=80&w=2070",
      title: "Heritage Haveli",
      location: "Jodhpur, Rajasthan",
      price: "₹17,500",
      rating: 4.8,
      reviews: 112,
      guests: 10,
      bedrooms: 5
    }
  ];

  const destinations = [
    {
      image: "https://images.unsplash.com/photo-1559827260-dc66d52bef19?q=80&w=2070",
      title: "Goa, India",
      properties: 45
    },
    {
      image: "https://images.unsplash.com/photo-1530841377377-3ff06c0ca713?q=80&w=2070",
      title: "Rajasthan, India",
      properties: 38
    },
    {
      image: "https://images.unsplash.com/photo-1499856871958-5b9627545d1a?q=80&w=2020",
      title: "Kerala, India",
      properties: 52
    },
    {
      image: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?q=80&w=2070",
      title: "Himachal Pradesh, India",
      properties: 42
    }
  ];

  const standardFeatures = [
    { icon: Waves, title: "Private Pool" },
    { icon: Users, title: "Chef Services" },
    { icon: Gift, title: "Dedicated Villa Attendant" },
    { icon: Sparkles, title: "Games & Recreation" },
    { icon: CheckCircle2, title: "Quality Assurance" },
    { icon: Award, title: "Custom Events" },
    { icon: Bed, title: "Standard Amenities" },
    { icon: Users, title: "Caretaker Service" }
  ];

  const testimonials = [
    {
      name: "Sarah Johnson",
      image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=200",
      rating: 5,
      text: "Absolutely stunning villa in Goa! The attention to detail and the level of service exceeded all our expectations. We'll definitely be back!",
      location: "Mumbai, Maharashtra"
    },
    {
      name: "Michael Chen",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=200",
      rating: 5,
      text: "The booking process was seamless, and the heritage villa in Rajasthan was even better than the photos. A truly luxurious experience from start to finish.",
      location: "Delhi, NCR"
    },
    {
      name: "Emma Rodriguez",
      image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?q=80&w=200",
      rating: 5,
      text: "Lost Traveller Villas made our anniversary trip magical. The backwater villa in Kerala was breathtaking, and the concierge service was outstanding.",
      location: "Bangalore, Karnataka"
    }
  ];

  return (
    <>
      {/* Structured Data for Properties */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "ItemList",
            "itemListElement": featuredProperties.map((property, index) => ({
              "@type": "ListItem",
              "position": index + 1,
              "item": {
                "@type": "Accommodation",
                "name": property.title,
                "description": `Luxury ${property.title} located in ${property.location}`,
                "address": {
                  "@type": "PostalAddress",
                  "addressLocality": property.location.split(",")[0],
                  "addressRegion": property.location.split(",")[1]?.trim() || "India",
                  "addressCountry": "IN"
                },
                "priceRange": property.price,
                "numberOfRooms": property.bedrooms,
                "occupancy": {
                  "@type": "QuantitativeValue",
                  "maxValue": property.guests
                },
                "aggregateRating": {
                  "@type": "AggregateRating",
                  "ratingValue": property.rating,
                  "reviewCount": property.reviews
                }
              }
            }))
          })
        }}
      />
      
      <div className="min-h-screen">
        <Navbar />
        <Hero />

        {/* Destinations Section with Category Filter */}
        <section className="py-20 bg-background" aria-label="Villa Destinations">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <CategoryFilter />
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {destinations.map((destination, index) => (
              <DestinationCard key={index} {...destination} />
            ))}
          </div>
        </div>
      </section>

      {/* Standard Features Section - Ultra Modern Design */}
      <section className="py-24 bg-white relative overflow-hidden" aria-label="Villa Features and Amenities">
        {/* Background Decorative Elements */}
        <div className="absolute top-0 left-0 w-full h-full pointer-events-none">
          <div className="absolute top-20 left-10 w-72 h-72 bg-[#1F3D72]/5 rounded-full blur-3xl" />
          <div className="absolute bottom-20 right-10 w-96 h-96 bg-[#1F3D72]/5 rounded-full blur-3xl" />
        </div>

        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center mb-20">
            <div className="inline-flex items-center gap-2 bg-[#1F3D72]/10 px-4 py-2 rounded-full mb-6">
              <Sparkles className="h-4 w-4 text-[#1F3D72]" />
              <span className="text-sm font-semibold text-[#1F3D72]">Premium Amenities</span>
            </div>
            <h1 className="mb-6 text-[#1F3D72] text-4xl md:text-5xl lg:text-6xl font-bold leading-tight">
              Standard Features
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              Enjoy the best of luxury living in our private villas, with premium amenities designed for your comfort and convenience.
            </p>
          </div>
          
          <div className="grid lg:grid-cols-2 gap-20 items-center">
            {/* Left Side - Features Grid with Modern Cards */}
            <div className="grid grid-cols-2 gap-5">
              {standardFeatures.map((feature, index) => {
                const Icon = feature.icon;
                return (
                  <div
                    key={index}
                    className="group relative p-6 bg-gradient-to-br from-white to-gray-50 rounded-3xl border border-gray-200/50 hover:border-[#1F3D72]/30 hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 overflow-hidden"
                  >
                    {/* Gradient Background on Hover */}
                    <div className="absolute inset-0 bg-gradient-to-br from-[#1F3D72]/5 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-3xl" />
                    
                    {/* Icon Container with Modern Design */}
                    <div className="relative mb-5">
                      <div className="w-16 h-16 bg-gradient-to-br from-[#1F3D72] to-[#1F3D72]/80 rounded-2xl flex items-center justify-center shadow-lg group-hover:shadow-xl group-hover:scale-110 transition-all duration-500">
                        <Icon className="h-8 w-8 text-white" />
                      </div>
                      {/* Decorative Ring */}
                      <div className="absolute -inset-1 bg-gradient-to-br from-[#1F3D72]/20 to-transparent rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 blur-sm" />
                    </div>
                    
                    <h3 className="relative text-lg font-bold text-[#1F3D72] leading-tight group-hover:text-[#1F3D72] transition-colors duration-300">
                      {feature.title}
                    </h3>
                    
                    {/* Animated Border on Hover */}
                    <div className="absolute inset-0 rounded-3xl border-2 border-[#1F3D72]/0 group-hover:border-[#1F3D72]/20 transition-all duration-500 pointer-events-none" />
                    
                    {/* Corner Accent */}
                    <div className="absolute top-0 right-0 w-20 h-20 bg-gradient-to-br from-[#1F3D72]/10 to-transparent rounded-bl-3xl rounded-tr-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                  </div>
                );
              })}
            </div>

            {/* Right Side - Modern Image Display */}
            <div className="relative">
              <div className="relative rounded-[2.5rem] overflow-hidden shadow-2xl group">
                <div className="aspect-[4/5] relative">
                  <img
                    src="https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?q=80&w=2070"
                    alt="Luxury villa poolside"
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent" />
                  
                  {/* Modern Floating Badge */}
                  <div className="absolute bottom-8 left-8 right-8">
                    <div className="bg-white/95 backdrop-blur-xl rounded-3xl p-6 shadow-2xl border border-white/20">
                      <div className="flex items-center gap-5">
                        <div className="w-16 h-16 bg-gradient-to-br from-[#1F3D72] to-[#1F3D72]/80 rounded-2xl flex items-center justify-center shadow-lg">
                          <Award className="h-8 w-8 text-white" />
                        </div>
                        <div className="flex-1">
                          <h4 className="font-bold text-[#1F3D72] mb-2 text-lg">Premium Experience</h4>
                          <p className="text-sm text-gray-600 leading-relaxed">Every villa is carefully curated for excellence and unmatched luxury</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              
              {/* Modern Decorative Elements */}
              <div className="absolute -top-8 -right-8 w-32 h-32 bg-gradient-to-br from-[#1F3D72]/10 to-transparent rounded-full blur-2xl z-0" />
              <div className="absolute -bottom-8 -left-8 w-40 h-40 bg-gradient-to-br from-[#1F3D72]/10 to-transparent rounded-full blur-2xl z-0" />
              
              {/* Floating Decorative Circles */}
              <div className="absolute top-1/4 -left-4 w-3 h-3 bg-[#1F3D72] rounded-full opacity-60 animate-pulse" />
              <div className="absolute bottom-1/4 -right-4 w-2 h-2 bg-[#1F3D72] rounded-full opacity-40 animate-pulse delay-300" />
            </div>
          </div>
        </div>
      </section>

      {/* Featured Properties Section */}
      <section className="py-20" aria-label="Featured Luxury Villas">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between mb-12">
            <div>
              <div className="inline-flex items-center gap-2 bg-accent/10 px-4 py-2 rounded-full mb-4">
                <Award className="h-5 w-5 text-accent" />
                <span className="text-sm font-semibold text-accent">Featured</span>
              </div>
              <h2 className="text-foreground">Best Sellers Villas</h2>
              <p className="text-lg text-muted-foreground mt-2">Discover our most popular luxury properties</p>
            </div>
            <Button variant="outline" size="lg" className="hidden md:flex">
              View All
            </Button>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {featuredProperties.map((property, index) => (
              <PropertyCard key={index} {...property} />
            ))}
          </div>
          <div className="text-center mt-8 md:hidden">
            <Button variant="outline" size="lg">View All</Button>
          </div>
        </div>
      </section>

      {/* Available This Weekend Section */}
      <section className="py-20 bg-secondary" aria-label="Weekend Villa Availability">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <div className="inline-flex items-center gap-2 bg-primary-lighter px-4 py-2 rounded-full mb-4">
              <Clock className="h-5 w-5 text-primary" />
              <span className="text-sm font-semibold text-primary">Limited Availability</span>
            </div>
            <h2 className="mb-4 text-foreground">Available Villas This Weekend</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Book now for an unforgettable last-minute getaway
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {weekendVillas.map((property, index) => (
              <PropertyCard key={index} {...property} />
            ))}
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-primary" aria-label="Company Statistics">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            <StatCard icon={Home} value="50+" label="Luxury Villas" />
            <StatCard icon={Users} value="1000+" label="Happy Guests" />
            <StatCard icon={Star} value="28+" label="Destinations" />
            <StatCard icon={Award} value="15+" label="Years Experience" />
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <WhyChooseUs />

      {/* Partner as Homeowner Section */}
      <PartnerSection />

      {/* Get Inspiration Section */}
      <section className="py-20 bg-secondary" aria-label="Travel Inspiration">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <div className="inline-flex items-center gap-2 bg-accent/10 px-4 py-2 rounded-full mb-4">
              <TrendingUp className="h-5 w-5 text-accent" />
              <span className="text-sm font-semibold text-accent">Explore</span>
            </div>
            <h2 className="mb-4 text-foreground">Get Inspiration for Your Next Trip</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Explore unique destinations and find your perfect escape
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {inspirationVillas.map((property, index) => (
              <PropertyCard key={index} {...property} />
            ))}
          </div>
        </div>
      </section>

      {/* Client Diaries Section */}
      <section className="py-20" aria-label="Customer Testimonials">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="mb-4 text-foreground">Client Diaries</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Hear from our satisfied guests about their unforgettable experiences
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <TestimonialCard key={index} {...testimonial} />
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-white text-[#1F3D72]" aria-label="Call to Action">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="mb-6 text-[#1F3D72]">Ready to Experience Luxury?</h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto text-[#1F3D72]/80">
            Start planning your dream vacation today. Browse our exclusive collection of luxury villas.
          </p>
          <Link to="/destinations">
            <Button size="lg" className="bg-[#1F3D72] hover:bg-[#1F3D72]/90 text-white px-12 h-14 text-lg font-medium">
              Explore Villas
            </Button>
          </Link>
        </div>
      </section>

      <Footer />
      </div>
    </>
  );
};

export default Index;
