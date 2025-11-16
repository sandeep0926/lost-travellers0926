import { Button } from "@/components/ui/button";
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs";
import { Input } from "@/components/ui/input";
import { Search, MapPin, Calendar, ChevronLeft, ChevronRight, Users, Globe } from "lucide-react";
import { useState } from "react";

const Hero = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [searchType, setSearchType] = useState<"domestic" | "international">("domestic");
  
  const villaImages = [
    "https://images.unsplash.com/photo-1613490493576-7fde63acd811?q=80&w=2071",
    "https://images.unsplash.com/photo-1602343168117-bb8ffe3e2e9f?q=80&w=2070",
    "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?q=80&w=2070",
    "https://images.unsplash.com/photo-1571896349842-33c89424de2d?q=80&w=2080",
  ];

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % villaImages.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + villaImages.length) % villaImages.length);
  };

  return (
    <>
      <section className="relative h-[90vh] flex items-center overflow-hidden">
        {/* Villa Carousel Background */}
        <div className="absolute inset-0 z-0">
          {villaImages.map((image, index) => (
            <div
              key={index}
              className={`absolute inset-0 transition-opacity duration-700 ${
                index === currentSlide ? "opacity-100" : "opacity-0"
              }`}
            >
              <div className="absolute inset-0 bg-gradient-to-b from-black/30 via-black/20 to-black/60 z-10" />
              <img
                src={image}
                alt={`Luxury villa ${index + 1}`}
                className="w-full h-full object-cover"
              />
            </div>
          ))}
        </div>

        {/* Carousel Navigation */}
        <button
          onClick={prevSlide}
          className="absolute left-4 md:left-8 top-1/2 -translate-y-1/2 z-30 bg-white/20 hover:bg-white/30 backdrop-blur-sm p-3 rounded-full transition-all"
          aria-label="Previous slide"
        >
          <ChevronLeft className="h-6 w-6 text-white" />
        </button>
        <button
          onClick={nextSlide}
          className="absolute right-4 md:right-8 top-1/2 -translate-y-1/2 z-30 bg-white/20 hover:bg-white/30 backdrop-blur-sm p-3 rounded-full transition-all"
          aria-label="Next slide"
        >
          <ChevronRight className="h-6 w-6 text-white" />
        </button>

        {/* Content */}
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-20 w-full">
          <div className="max-w-7xl mx-auto">
            {/* Hero Text - Top Left */}
            <div className="text-left max-w-2xl animate-fade-in">
              <h1 className="text-white mb-4 leading-tight text-4xl md:text-5xl lg:text-6xl font-bold">
                Discover Your Perfect<br />
                <span className="text-white">Villa Getaway</span>
              </h1>
              <p className="text-lg md:text-xl text-white/90 leading-relaxed">
                Experience luxury living in our handpicked collection of premium villas across India. Your dream vacation starts here.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Search Box - Outside hero with overlap */}
      <div className="relative z-30 -mt-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-6xl mx-auto">
            <div className="bg-white rounded-3xl shadow-2xl border border-gray-200/50 overflow-hidden backdrop-blur-sm">
              <Tabs defaultValue="homes" className="w-full">
                <TabsList className="bg-white border-b border-gray-200 w-full p-0 h-auto rounded-none flex">
                  <TabsTrigger 
                    value="homes" 
                    className="flex-1 rounded-none border-b-2 border-transparent data-[state=active]:border-[#1F3D72] data-[state=active]:bg-transparent data-[state=active]:shadow-none data-[state=active]:text-[#1F3D72] font-bold px-6 py-4 text-gray-500 text-base transition-all"
                  >
                    Homes
                  </TabsTrigger>
                  <TabsTrigger 
                    value="experiences" 
                    className="flex-1 rounded-none border-b-2 border-transparent data-[state=active]:border-[#1F3D72] data-[state=active]:bg-transparent data-[state=active]:shadow-none data-[state=active]:text-[#1F3D72] font-bold px-6 py-4 text-gray-500 text-base transition-all"
                  >
                    Experiences
                  </TabsTrigger>
                  <TabsTrigger 
                    value="services" 
                    className="flex-1 rounded-none border-b-2 border-transparent data-[state=active]:border-[#1F3D72] data-[state=active]:bg-transparent data-[state=active]:shadow-none data-[state=active]:text-[#1F3D72] font-bold px-6 py-4 text-gray-500 text-base transition-all"
                  >
                    Services
                  </TabsTrigger>
                </TabsList>
                
                <TabsContent value="homes" className="mt-0 p-6 space-y-5">
                  {/* Domestic and International Sections */}
                  <div className="flex gap-3 border-b border-gray-100 pb-4">
                    <button 
                      onClick={() => setSearchType("domestic")}
                      className={`px-5 py-2.5 text-sm font-bold rounded-lg transition-all ${
                        searchType === "domestic"
                          ? "text-[#1F3D72] bg-[#1F3D72]/10 border-2 border-[#1F3D72]/20"
                          : "text-gray-600 bg-gray-50 border-2 border-transparent hover:bg-gray-100"
                      }`}
                    >
                      Domestic
                    </button>
                    <button 
                      onClick={() => setSearchType("international")}
                      className={`px-5 py-2.5 text-sm font-bold rounded-lg transition-all ${
                        searchType === "international"
                          ? "text-[#1F3D72] bg-[#1F3D72]/10 border-2 border-[#1F3D72]/20"
                          : "text-gray-600 bg-gray-50 border-2 border-transparent hover:bg-gray-100"
                      }`}
                    >
                      International
                    </button>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-5 gap-4">
                    <div className="md:col-span-2">
                      <label className="block text-sm font-bold text-[#1F3D72] mb-2">Location</label>
                      <div className="relative">
                        <MapPin className="absolute left-4 top-1/2 -translate-y-1/2 h-4 w-4 text-gray-400 z-10" />
                        <Input 
                          placeholder="Where to?" 
                          className="pl-11 h-12 border-2 border-gray-200 bg-white rounded-xl text-sm font-medium focus:border-[#1F3D72] focus:ring-2 focus:ring-[#1F3D72]/20 transition-all"
                        />
                      </div>
                    </div>
                    <div>
                      <label className="block text-sm font-bold text-[#1F3D72] mb-2">Check In</label>
                      <div className="relative">
                        <Calendar className="absolute left-4 top-1/2 -translate-y-1/2 h-4 w-4 text-gray-400 z-10 pointer-events-none" />
                        <Input 
                          type="date"
                          placeholder="dd/mm/yyyy" 
                          className="pl-11 h-12 border-2 border-gray-200 bg-white rounded-xl text-sm font-medium focus:border-[#1F3D72] focus:ring-2 focus:ring-[#1F3D72]/20 transition-all"
                        />
                      </div>
                    </div>
                    <div>
                      <label className="block text-sm font-bold text-[#1F3D72] mb-2">Check Out</label>
                      <div className="relative">
                        <Calendar className="absolute left-4 top-1/2 -translate-y-1/2 h-4 w-4 text-gray-400 z-10 pointer-events-none" />
                        <Input 
                          type="date"
                          placeholder="dd/mm/yyyy" 
                          className="pl-11 h-12 border-2 border-gray-200 bg-white rounded-xl text-sm font-medium focus:border-[#1F3D72] focus:ring-2 focus:ring-[#1F3D72]/20 transition-all"
                        />
                      </div>
                    </div>
                    <div>
                      <label className="block text-sm font-bold text-[#1F3D72] mb-2">Guests</label>
                      <div className="relative mb-2">
                        <Users className="absolute left-4 top-1/2 -translate-y-1/2 h-4 w-4 text-gray-400 z-10" />
                        <Input 
                          placeholder="1 Guest" 
                          className="pl-11 h-12 border-2 border-gray-200 bg-white rounded-xl text-sm font-medium focus:border-[#1F3D72] focus:ring-2 focus:ring-[#1F3D72]/20 transition-all"
                        />
                      </div>
                      <Button size="lg" className="w-full h-12 px-8 text-sm font-bold bg-[#1F3D72] hover:bg-[#1F3D72]/90 text-white rounded-xl shadow-lg hover:shadow-xl transition-all">
                        <Search className="mr-2 h-5 w-5" />
                        Search
                      </Button>
                    </div>
                  </div>

                  {/* Popular Destinations Quick Links */}
                  {searchType === "domestic" && (
                    <div className="pt-4 border-t border-gray-100">
                      <p className="text-xs text-gray-500 mb-3 font-semibold uppercase tracking-wide">Popular in India:</p>
                      <div className="flex flex-wrap gap-2">
                        {["Goa", "Rajasthan", "Kerala", "Himachal Pradesh", "Maharashtra", "Uttarakhand"].map((dest) => (
                          <button
                            key={dest}
                            className="px-4 py-2 text-xs font-semibold text-gray-700 bg-gray-50 hover:bg-[#1F3D72]/10 hover:text-[#1F3D72] rounded-full border border-gray-200 hover:border-[#1F3D72]/30 transition-all"
                          >
                            {dest}
                          </button>
                        ))}
                      </div>
                    </div>
                  )}
                  
                  {searchType === "international" && (
                    <div className="pt-4 border-t border-gray-100">
                      <p className="text-xs text-gray-500 mb-3 font-semibold uppercase tracking-wide">Popular International:</p>
                      <div className="flex flex-wrap gap-2">
                        {["Thailand", "Dubai", "Bali", "Maldives", "Singapore", "Malaysia"].map((dest) => (
                          <button
                            key={dest}
                            className="px-4 py-2 text-xs font-semibold text-gray-700 bg-gray-50 hover:bg-[#1F3D72]/10 hover:text-[#1F3D72] rounded-full border border-gray-200 hover:border-[#1F3D72]/30 transition-all"
                          >
                            {dest}
                          </button>
                        ))}
                      </div>
                    </div>
                  )}
                </TabsContent>

                <TabsContent value="experiences" className="mt-0 p-6">
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                    <div className="md:col-span-2">
                      <label className="block text-sm font-bold text-[#1F3D72] mb-2">Location</label>
                      <div className="relative">
                        <MapPin className="absolute left-4 top-1/2 -translate-y-1/2 h-4 w-4 text-gray-400 z-10" />
                        <Input 
                          placeholder="Choose destination" 
                          className="pl-11 h-12 border-2 border-gray-200 bg-white rounded-xl text-sm font-medium focus:border-[#1F3D72] focus:ring-2 focus:ring-[#1F3D72]/20 transition-all"
                        />
                      </div>
                    </div>
                    <div>
                      <label className="block text-sm font-bold text-[#1F3D72] mb-2">Date</label>
                      <div className="relative">
                        <Calendar className="absolute left-4 top-1/2 -translate-y-1/2 h-4 w-4 text-gray-400 z-10 pointer-events-none" />
                        <Input 
                          type="date"
                          placeholder="dd/mm/yyyy" 
                          className="pl-11 h-12 border-2 border-gray-200 bg-white rounded-xl text-sm font-medium focus:border-[#1F3D72] focus:ring-2 focus:ring-[#1F3D72]/20 transition-all"
                        />
                      </div>
                      <Button size="lg" className="mt-2 md:mt-3 w-full h-12 px-8 text-sm font-bold bg-[#1F3D72] hover:bg-[#1F3D72]/90 text-white rounded-xl shadow-lg hover:shadow-xl transition-all">
                        <Search className="mr-2 h-5 w-5" />
                        Find
                      </Button>
                    </div>
                  </div>
                </TabsContent>

                <TabsContent value="services" className="mt-0 p-6">
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                    <div className="md:col-span-2">
                      <label className="block text-sm font-bold text-[#1F3D72] mb-2">Service Type</label>
                      <Input 
                        placeholder="What service are you looking for?" 
                        className="h-12 border-2 border-gray-200 bg-white rounded-xl text-sm font-medium focus:border-[#1F3D72] focus:ring-2 focus:ring-[#1F3D72]/20 transition-all"
                      />
                    </div>
                    <div className="flex flex-col justify-end">
                      <Button size="lg" className="w-full h-12 px-8 text-sm font-bold bg-[#1F3D72] hover:bg-[#1F3D72]/90 text-white rounded-xl shadow-lg hover:shadow-xl transition-all">
                        <Search className="mr-2 h-5 w-5" />
                        Browse
                      </Button>
                    </div>
                  </div>
                </TabsContent>
              </Tabs>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Hero;
