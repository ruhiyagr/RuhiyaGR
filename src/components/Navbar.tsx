import { useState, useEffect } from 'react';
import { Button } from './ui/button';
import { Menu, X } from 'lucide-react';
import profileImage from 'figma:asset/1a396357bc5256fd56b92676fbd04df280f11f09.png';

const navLinks = [
  { name: 'About', href: '#about' },
  { name: 'Experience', href: '#experience' },
  { name: 'AI Training', href: '#ai-training' },
  { name: 'Robotics & STEM', href: '#robotics-stem' },
  { name: '3D Printing', href: '#three-d-printing' },
  { name: 'Expertise', href: '#expertise' },
  { name: 'Philosophy', href: '#philosophy' },
  { name: 'Mission', href: '#mission' },
  { name: 'Blog', href: '#blog' },
  { name: 'Contact', href: '#contact' }
];

export function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
      setIsMobileMenuOpen(false);
    }
  };

  return (
    <>
      <nav 
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          isScrolled 
            ? 'bg-white/95 backdrop-blur-lg shadow-lg border-b-4 border-indigo-200' 
            : 'bg-white/80 backdrop-blur-sm'
        }`}
      >
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between h-20">
            {/* Logo with Photo and Name */}
            <div 
              className="flex items-center gap-3 cursor-pointer hover:opacity-80 transition-opacity"
              onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
            >
              <div className="relative w-12 h-12 rounded-full overflow-hidden border-4 border-indigo-400 shadow-lg hover:scale-110 transition-transform">
                <img
                  src={profileImage}
                  alt="Ruhiya G R"
                  className="w-full h-full object-cover"
                />
              </div>
              <div>
                <h1 className="text-xl font-bold text-slate-900">Ruhiya G R</h1>
                <p className="text-xs text-slate-600">Coding & Robotics Educator</p>
              </div>
            </div>

            {/* Desktop Navigation */}
            <div className="hidden lg:flex items-center gap-1">
              {navLinks.map((link) => (
                <button
                  key={link.name}
                  onClick={() => scrollToSection(link.href)}
                  className="px-4 py-2 text-sm text-slate-700 hover:text-indigo-700 hover:bg-indigo-50 rounded-lg transition-all hover:scale-105"
                >
                  {link.name}
                </button>
              ))}
            </div>

            {/* CTA Button - Desktop */}
            <div className="hidden lg:block">
              <Button
                className="bg-gradient-to-r from-indigo-600 to-violet-600 hover:from-indigo-700 hover:to-violet-700 text-white shadow-lg hover:shadow-xl hover:scale-105 transition-all"
                onClick={() => scrollToSection('#contact')}
              >
                Get In Touch
              </Button>
            </div>

            {/* Mobile Menu Button */}
            <button
              className="lg:hidden p-2 text-slate-700 hover:bg-indigo-50 rounded-lg transition-colors"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            >
              {isMobileMenuOpen ? (
                <X className="w-6 h-6" />
              ) : (
                <Menu className="w-6 h-6" />
              )}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="lg:hidden bg-white border-t-4 border-indigo-200 shadow-xl">
            <div className="container mx-auto px-4 py-4">
              <div className="flex flex-col gap-2">
                {navLinks.map((link) => (
                  <button
                    key={link.name}
                    onClick={() => scrollToSection(link.href)}
                    className="px-4 py-3 text-left text-slate-700 hover:text-indigo-700 hover:bg-indigo-50 rounded-lg transition-all"
                  >
                    {link.name}
                  </button>
                ))}
                <Button
                  className="mt-2 bg-gradient-to-r from-indigo-600 to-violet-600 hover:from-indigo-700 hover:to-violet-700 text-white shadow-lg"
                  onClick={() => scrollToSection('#contact')}
                >
                  Get In Touch
                </Button>
              </div>
            </div>
          </div>
        )}
      </nav>
      
      {/* Spacer to prevent content from going under fixed navbar */}
      <div className="h-20"></div>
    </>
  );
}