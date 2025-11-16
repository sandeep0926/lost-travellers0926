import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";
import { useState } from "react";
import { Link } from "react-router-dom";
import logo from "@/assets/logo.png";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 border-b border-border/20" style={{ backgroundColor: '#1F3D72' }}>
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <div className="flex-shrink-0">
            <Link to="/">
              <img src={logo} alt="Lost Traveller Villas" className="h-12 w-auto" />
            </Link>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <Link to="/" className="text-white hover:text-white/80 transition-colors font-medium">
              Home
            </Link>
            <Link to="/destinations" className="text-white hover:text-white/80 transition-colors font-medium">
              Destinations
            </Link>
            <div className="relative group">
              <button className="text-white hover:text-white/80 transition-colors font-medium flex items-center gap-1">
                Villas For Rentals
                <svg className="w-4 h-4 transition-transform group-hover:rotate-180" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </button>
              <div className="absolute top-full left-0 mt-3 w-64 bg-white rounded-xl shadow-2xl border border-gray-100 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 z-50 overflow-hidden">
                <div className="p-5">
                  <div className="mb-4 pb-3 border-b border-gray-100">
                    <h3 className="text-[#1F3D72] text-xs font-bold uppercase tracking-wider mb-1">Destinations in India</h3>
                    <p className="text-xs text-gray-500">Explore luxury villas across India</p>
                  </div>
                  <div className="space-y-1">
                    <a href="#" className="block px-3 py-2.5 text-sm text-gray-700 hover:text-[#1F3D72] hover:bg-[#1F3D72]/5 rounded-lg transition-all duration-200 font-medium">
                      Luxury Villa in Goa
                    </a>
                    <a href="#" className="block px-3 py-2.5 text-sm text-gray-700 hover:text-[#1F3D72] hover:bg-[#1F3D72]/5 rounded-lg transition-all duration-200 font-medium">
                      Luxury Villa in Maharashtra
                    </a>
                    <a href="#" className="block px-3 py-2.5 text-sm text-gray-700 hover:text-[#1F3D72] hover:bg-[#1F3D72]/5 rounded-lg transition-all duration-200 font-medium">
                      Luxury Villa in Rajasthan
                    </a>
                    <a href="#" className="block px-3 py-2.5 text-sm text-gray-700 hover:text-[#1F3D72] hover:bg-[#1F3D72]/5 rounded-lg transition-all duration-200 font-medium">
                      Luxury Villa in Kerala
                    </a>
                    <a href="#" className="block px-3 py-2.5 text-sm text-gray-700 hover:text-[#1F3D72] hover:bg-[#1F3D72]/5 rounded-lg transition-all duration-200 font-medium">
                      Luxury Villa in Himachal Pradesh
                    </a>
                    <a href="#" className="block px-3 py-2.5 text-sm text-gray-700 hover:text-[#1F3D72] hover:bg-[#1F3D72]/5 rounded-lg transition-all duration-200 font-medium">
                      Luxury Villa in Uttarakhand
                    </a>
                  </div>
                </div>
              </div>
            </div>
            <div className="relative group">
              <button className="text-white hover:text-white/80 transition-colors font-medium flex items-center gap-1">
                Services
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </button>
              <div className="absolute top-full left-0 mt-2 w-56 bg-white rounded-lg shadow-xl opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 z-50">
                <div className="p-4">
                  <a href="#" className="block py-2 text-sm text-muted-foreground hover:text-primary transition-colors">About Us</a>
                  <a href="#" className="block py-2 text-sm text-muted-foreground hover:text-primary transition-colors">Villas For Sale</a>
                  <a href="#" className="block py-2 text-sm text-muted-foreground hover:text-primary transition-colors">List Your Villas</a>
                  <a href="#" className="block py-2 text-sm text-muted-foreground hover:text-primary transition-colors">Our Service</a>
                  <a href="#" className="block py-2 text-sm text-muted-foreground hover:text-primary transition-colors">Destinations</a>
                  <a href="#" className="block py-2 text-sm text-muted-foreground hover:text-primary transition-colors">Blogs</a>
                </div>
              </div>
            </div>
            <a href="#" className="text-white hover:text-white/80 transition-colors font-medium">
              Contact
            </a>
          </div>

          {/* CTA Buttons */}
          <div className="hidden md:flex items-center space-x-4">
            <Button variant="ghost" className="font-medium text-white hover:text-white hover:bg-white/10">
              Sign In
            </Button>
            <Button className="font-medium bg-white text-[#1F3D72] hover:bg-white/90">
              List Property
            </Button>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <Button
              variant="ghost"
              size="icon"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              aria-label="Toggle menu"
              className="text-white hover:text-white hover:bg-white/10"
            >
              {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </Button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      {isMenuOpen && (
        <div className="md:hidden border-t border-white/20" style={{ backgroundColor: '#1F3D72' }}>
          <div className="px-4 pt-2 pb-6 space-y-3">
            <Link to="/" className="block py-2 text-white hover:text-white/80 transition-colors font-medium" onClick={() => setIsMenuOpen(false)}>
              Home
            </Link>
            <Link to="/destinations" className="block py-2 text-white hover:text-white/80 transition-colors font-medium" onClick={() => setIsMenuOpen(false)}>
              Destinations
            </Link>
            <a href="#" className="block py-2 text-white hover:text-white/80 transition-colors font-medium">
              Services
            </a>
            <a href="#" className="block py-2 text-white hover:text-white/80 transition-colors font-medium">
              About Us
            </a>
            <a href="#" className="block py-2 text-white hover:text-white/80 transition-colors font-medium">
              Contact
            </a>
            <div className="pt-4 space-y-2">
              <Button variant="ghost" className="w-full font-medium text-white hover:text-white hover:bg-white/10">
                Sign In
              </Button>
              <Button className="w-full font-medium bg-white text-[#1F3D72] hover:bg-white/90">
                List Property
              </Button>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
