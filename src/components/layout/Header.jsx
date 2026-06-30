import React, { useState, useEffect } from "react";
import Container from "../ui/Container";
import logoImg from "../../assets/images/Logo/rajkamal-tours-travels-logo.svg";
import packagesDataFull from "../../data/packages.json";

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isServicesOpen, setIsServicesOpen] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isMobileServicesOpen, setIsMobileServicesOpen] = useState(false);
  
  const [searchTerm, setSearchTerm] = useState("");
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [isSearchExpanded, setIsSearchExpanded] = useState(false);
  const [isMobileSearchOpen, setIsMobileSearchOpen] = useState(false);
  const searchResults = packagesDataFull.filter(pkg => {
    if (!searchTerm) return true;
    const term = searchTerm.toLowerCase();
    return (
      (pkg.title && pkg.title.toLowerCase().includes(term)) ||
      (pkg.destination && pkg.destination.toLowerCase().includes(term)) ||
      (pkg.category && pkg.category.toLowerCase().includes(term)) ||
      (pkg.description && pkg.description.toLowerCase().includes(term)) ||
      (pkg.desc && pkg.desc.toLowerCase().includes(term)) ||
      (pkg.duration && pkg.duration.toLowerCase().includes(term))
    );
  });

  // Handle scroll event to change header background
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Prevent background scrolling when mobile menu is open
  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [isMobileMenuOpen]);

  return (
    <header
      className={`fixed top-0 left-0 right-0 w-full z-50 transition-all duration-300 ${
        isScrolled || isMobileMenuOpen
          ? "bg-white shadow-md py-3"
          : "bg-transparent py-5"
      }`}>
      <Container className="max-w-[1400px]">
        <div className="flex items-center justify-between gap-3 relative z-50 bg-transparent">
          {/* Logo */}
          <a href="/" className="flex-shrink-0 cursor-pointer block">
            <img
              src={logoImg}
              alt="Rajkamal Tours & Travels"
              className="h-10 md:h-12 w-auto object-contain"
            />
          </a>

          {/* Center Navigation & Right Actions Grouped */}
          <div className="hidden min-[1200px]:flex items-center gap-2">
            {/* Center Navigation Pill */}
            <nav className="flex items-center bg-[#F2F2F2] border border-[#00000033] rounded-xl px-2 py-1.5  relative">
              <a
                href="#"
                className="px-4 py-2 text-sm font-medium text-text-muted hover:text-primary transition-colors">
                Home
              </a>
              <a
                href="#about"
                className="px-4 py-2 text-sm font-medium text-text-muted hover:text-primary transition-colors">
                About us
              </a>
              <a
                href="#destinations"
                className="px-4 py-2 text-sm font-medium text-text-muted hover:text-primary transition-colors">
                Destinations
              </a>
              <a
                href="#packages"
                className="px-4 py-2 text-sm font-medium text-text-muted hover:text-primary transition-colors">
                Tour packages
              </a>

              {/* Services Dropdown Trigger */}
              <div
                className="relative"
                onMouseEnter={() => setIsServicesOpen(true)}
                onMouseLeave={() => setIsServicesOpen(false)}>
                <button
                  className={`flex items-center px-4 py-2 text-sm font-medium transition-colors ${
                    isServicesOpen
                      ? "bg-white  rounded-xl text-text-main"
                      : "text-text-muted hover:text-primary"
                  }`}>
                  Services
                  <svg
                    className={`w-3.5 h-3.5 ml-1 transition-transform duration-200 ${isServicesOpen ? "rotate-180" : ""}`}
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24">
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M19 9l-7 7-7-7"
                    />
                  </svg>
                </button>

                {/* Dropdown Menu */}
                {isServicesOpen && (
                  <div className="absolute top-full left-1/2 -translate-x-1/2 pt-[12px] w-48 z-50">
                    <div className="bg-[#F2F2F2] border border-[#00000033] rounded-xl shadow-lg py-2 overflow-hidden items-center flex flex-col">
                      <a
                        href="#"
                        className="px-5 py-3 text-sm font-medium text-text-muted  hover:text-primary transition-colors border-b border-[#00000033]">
                        Fixed departures
                      </a>{" "}
                      <a
                        href="#"
                        className="px-5 py-3 text-sm font-medium text-text-muted  hover:text-primary transition-colors border-b border-[#00000033]">
                        Flight booking
                      </a>
                      <a
                        href="#"
                        className="px-5 py-3 text-sm font-medium text-text-muted  hover:text-primary transition-colors border-b border-[#00000033]">
                        Cruise booking
                      </a>
                      <a
                        href="#"
                        className="px-5 py-3 text-sm font-medium text-text-muted  hover:text-primary transition-colors border-b border-[#00000033]">
                        Visa support
                      </a>
                      <a
                        href="#"
                        className="px-5 py-3 text-sm font-medium text-text-muted  hover:text-primary transition-colors border-b border-[#00000033]">
                        Travel insurance
                      </a>
                      <a
                        href="#"
                        className="px-5 py-3 text-sm font-medium text-text-muted  hover:text-primary transition-colors">
                        passport application
                      </a>
                    </div>
                  </div>
                )}
              </div>

              <a
                href="#blog"
                className="px-4 py-2 text-sm font-medium text-text-muted hover:text-primary transition-colors">
                Blog
              </a>
              <a
                href="#contact"
                className="px-4 py-2 text-sm font-medium text-text-muted hover:text-primary transition-colors">
                Contact us
              </a>
            </nav>

            {/* Right Actions */}
            <div className="flex items-center gap-2">
              {/* Search Block */}
              <div className="relative flex items-center h-[48px]">
                <div className={`flex items-center bg-white border border-[#00000033] rounded-[14px] transition-all duration-300 ease-in-out overflow-hidden h-full ${isSearchExpanded ? 'w-[250px] px-4' : 'w-[48px] p-1 border-none'}`}>
                  {isSearchExpanded ? (
                    <>
                      <svg className="w-5 h-5 text-gray-500 mr-2 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                      </svg>
                      <input 
                        type="text" 
                        autoFocus
                        placeholder="Search packages..." 
                        className="w-full bg-transparent outline-none text-sm text-text-main placeholder-gray-500"
                        value={searchTerm}
                        onChange={(e) => setSearchTerm(e.target.value)}
                        onFocus={() => setIsSearchOpen(true)}
                        onBlur={() => {
                          setTimeout(() => {
                            setIsSearchOpen(false);
                            if (!searchTerm) {
                              setIsSearchExpanded(false);
                            }
                          }, 200);
                        }}
                      />
                    </>
                  ) : (
                    <button 
                      onClick={() => {
                        setIsSearchExpanded(true);
                        setIsSearchOpen(true);
                      }}
                      className="flex items-center justify-center w-full h-full bg-[#e5e7eb] hover:bg-[#d1d5db] rounded-[10px] text-text-main transition-colors cursor-pointer"
                    >
                      <svg
                        className="w-6 h-6"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg">
                        <path
                          d="M11.5 21C16.7467 21 21 16.7467 21 11.5C21 6.25329 16.7467 2 11.5 2C6.25329 2 2 6.25329 2 11.5C2 16.7467 6.25329 21 11.5 21Z"
                          stroke="#171717"
                          strokeWidth="1.5"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                        <path
                          d="M22 22L20 20"
                          stroke="#171717"
                          strokeWidth="1.5"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                      </svg>
                    </button>
                  )}
                </div>
                {/* Search Dropdown */}
                {isSearchOpen && (
                  <div data-lenis-prevent className="absolute top-full mt-2 right-0 w-[320px] bg-white border border-gray-200 rounded-xl shadow-lg max-h-[400px] overflow-y-auto z-50">
                    {searchResults.length > 0 ? (
                      searchResults.map(pkg => (
                        <div 
                          key={pkg.id} 
                          className="p-3 border-b border-gray-100 hover:bg-gray-50 cursor-pointer flex items-center gap-3"
                          onClick={() => {
                            const el = document.getElementById(`package-${pkg.id}`);
                            if (el) el.scrollIntoView({ behavior: 'smooth' });
                            setSearchTerm('');
                            setIsSearchOpen(false);
                          }}
                        >
                          <img src={pkg.image} alt={pkg.title} className="w-12 h-12 object-cover rounded-lg flex-shrink-0" />
                          <div className="flex-1 min-w-0">
                            <p className="text-sm font-medium text-text-main line-clamp-1">{pkg.title}</p>
                            <p className="text-xs text-text-muted">{pkg.duration}</p>
                          </div>
                        </div>
                      ))
                    ) : (
                      <div className="p-4 text-sm text-gray-500 text-center">No packages found</div>
                    )}
                  </div>
                )}
              </div>

              {/* CTA Button */}
              <a 
                href="https://wa.me/919274584480?text=Hello%20Rajkamal%20Tours%2C%20I%20would%20like%20to%20plan%20my%20holiday."
                target="_blank"
                rel="noopener noreferrer"
                className="bg-primary hover:bg-primary-hover text-white text-md !font-medium px-5 py-3 rounded-[14px] transition-colors cursor-pointer "
              >
                Plan my holiday
              </a>
            </div>
          </div>

          {/* Mobile Right Actions */}
          <div className="flex items-center gap-2 min-[1200px]:hidden relative z-50">
            {/* Mobile Search Icon */}
            <button
              className="p-2 text-text-main focus:outline-none cursor-pointer"
              onClick={() => setIsMobileSearchOpen(true)}>
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
              </svg>
            </button>
            {/* Mobile Menu Button (Hamburger/Close) */}
            <button
              className="p-2 text-text-main focus:outline-none cursor-pointer"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}>
              {isMobileMenuOpen ? (
                <svg
                  className="w-7 h-7"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24">
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              ) : (
                <svg
                  className="w-7 h-7"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24">
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                </svg>
              )}
            </button>
          </div>
        </div>
      </Container>

      {/* Mobile Menu Overlay */}
      <div data-lenis-prevent className={`min-[1200px]:hidden absolute top-full left-0 w-full bg-white shadow-xl border-t border-gray-100 flex flex-col overflow-y-auto transition-all duration-300 ease-in-out origin-top ${isMobileMenuOpen ? "max-h-[calc(100vh-70px)] opacity-100" : "max-h-0 opacity-0 pointer-events-none border-t-0"}`}>
        <nav className="flex flex-col p-4">
          <a
            href="#"
            onClick={() => setIsMobileMenuOpen(false)}
            className="px-4 py-3 text-base font-medium text-text-main hover:bg-gray-50 hover:text-primary rounded-xl transition-colors">
            Home
          </a>
          <a
            href="#about"
            onClick={() => setIsMobileMenuOpen(false)}
            className="px-4 py-3 text-base font-medium text-text-main hover:bg-gray-50 hover:text-primary rounded-xl transition-colors">
            About us
          </a>
          <a
            href="#destinations"
            onClick={() => setIsMobileMenuOpen(false)}
            className="px-4 py-3 text-base font-medium text-text-main hover:bg-gray-50 hover:text-primary rounded-xl transition-colors">
            Destinations
          </a>
          <a
            href="#packages"
            onClick={() => setIsMobileMenuOpen(false)}
            className="px-4 py-3 text-base font-medium text-text-main hover:bg-gray-50 hover:text-primary rounded-xl transition-colors">
            Tour packages
          </a>

          {/* Mobile Services Accordion */}
          <div className="flex flex-col">
            <button
              onClick={() => setIsMobileServicesOpen(!isMobileServicesOpen)}
              className="flex items-center justify-between px-4 py-3 text-base font-medium text-text-main hover:bg-gray-50 rounded-xl transition-colors">
              Services
              <svg
                className={`w-4 h-4 transition-transform duration-200 ${isMobileServicesOpen ? "rotate-180" : ""}`}
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24">
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M19 9l-7 7-7-7"
                />
              </svg>
            </button>

            {isMobileServicesOpen && (
              <div className="flex flex-col ml-4 pl-4 border-l-2 border-gray-100 mt-1 gap-1">
                <a
                  href="#"
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="px-4 py-2 text-sm font-medium text-text-muted hover:text-primary transition-colors">
                  Fixed departures
                </a>
                <a
                  href="#"
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="px-4 py-2 text-sm font-medium text-text-muted hover:text-primary transition-colors">
                  Flight booking
                </a>
                <a
                  href="#"
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="px-4 py-2 text-sm font-medium text-text-muted hover:text-primary transition-colors">
                  Cruise booking
                </a>
                <a
                  href="#"
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="px-4 py-2 text-sm font-medium text-text-muted hover:text-primary transition-colors">
                  Visa support
                </a>
                <a
                  href="#"
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="px-4 py-2 text-sm font-medium text-text-muted hover:text-primary transition-colors">
                  Travel insurance
                </a>
                <a
                  href="#"
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="px-4 py-2 text-sm font-medium text-text-muted hover:text-primary transition-colors">
                  Passport application
                </a>
              </div>
            )}
          </div>

          <a
            href="#blog"
            onClick={() => setIsMobileMenuOpen(false)}
            className="px-4 py-3 text-base font-medium text-text-main hover:bg-gray-50 hover:text-primary rounded-xl transition-colors">
            Blog
          </a>
          <a
            href="#contact"
            onClick={() => setIsMobileMenuOpen(false)}
            className="px-4 py-3 text-base font-medium text-text-main hover:bg-gray-50 hover:text-primary rounded-xl transition-colors">
            Contact us
          </a>
        </nav>

        {/* Mobile Actions */}
        <div className="flex flex-col p-4 border-t border-gray-100 gap-4 mt-auto pb-8">
          <a 
            href="https://wa.me/919274584480?text=Hello%20Rajkamal%20Tours%2C%20I%20would%20like%20to%20plan%20my%20holiday."
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-center bg-primary hover:bg-primary-hover text-white font-semibold px-6 py-3.5 rounded-xl transition-colors w-full max-w-2xs cursor-pointer"
          >
            Plan my holiday
          </a>
        </div>
      </div>

      {/* Mobile Full Screen Search Overlay */}
      {isMobileSearchOpen && (
        <div className="fixed inset-0 bg-white z-[100] flex flex-col min-[1200px]:hidden">
          {/* Header of search overlay */}
          <div className="flex items-center justify-between p-4 border-b border-gray-100 mt-2">
            <div className="flex-1 flex items-center bg-[#F2F2F2] rounded-xl px-4 py-3">
              <svg className="w-5 h-5 text-gray-500 mr-2 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
              </svg>
              <input 
                type="text" 
                autoFocus
                placeholder="Search packages..." 
                className="w-full bg-transparent outline-none text-base text-text-main placeholder-gray-500"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
              />
            </div>
            <button 
              onClick={() => {
                setIsMobileSearchOpen(false);
                setSearchTerm("");
              }}
              className="ml-3 p-2 text-text-main cursor-pointer hover:bg-gray-100 rounded-full transition-colors"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </div>
          {/* Search Results */}
          <div data-lenis-prevent className="flex-1 overflow-y-auto p-4">
            {searchResults.length > 0 ? (
              searchResults.map(pkg => (
                <div 
                  key={pkg.id} 
                  className="p-3 mb-3 border border-gray-100 rounded-xl hover:bg-gray-50 cursor-pointer flex items-center gap-4 shadow-sm"
                  onClick={() => {
                    const el = document.getElementById(`package-${pkg.id}`);
                    if (el) el.scrollIntoView({ behavior: 'smooth' });
                    setSearchTerm('');
                    setIsMobileSearchOpen(false);
                  }}
                >
                  <img src={pkg.image} alt={pkg.title} className="w-16 h-16 object-cover rounded-lg flex-shrink-0" />
                  <div className="flex-grow min-w-0">
                    <p className="text-base font-medium text-text-main line-clamp-2">{pkg.title}</p>
                    <p className="text-sm text-text-muted mt-1">{pkg.duration}</p>
                  </div>
                </div>
              ))
            ) : (
              <div className="p-4 text-base text-gray-500 text-center mt-10">No packages found</div>
            )}
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;
