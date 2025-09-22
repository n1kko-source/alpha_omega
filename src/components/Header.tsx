import { Menu, X, } from 'lucide-react';
import { useState } from 'react';
import bible from '../images/cristiandad.png';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="bg-black/60 backdrop-blur-sm shadow-2xl border-b border-purple-900/30 fixed w-full top-0 z-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-4">
          <div className="flex items-center space-x-3">
            {/* Logo */}
            <div className="flex items-center justify-center">
              <img
                src={bible}
                alt="bible"
                className="h-12 w-12 object-contain"
              />
            </div>
            <div>
              <h1 className="text-2xl font-bold bg-gradient-to-r from-purple-400 to-fuchsia-400 bg-clip-text text-transparent">
                Alpha & Omega
              </h1>
              <p className="text-sm text-white">A Dark Short Film Experience</p>
            </div>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <a href="#home" className="text-purple-400 hover:text-fuchsia-300 transition-colors font-medium">
              Home
            </a>
            <a href="#trailer" className="text-purple-400 hover:text-fuchsia-300 transition-colors font-medium">
              Trailer
            </a>
            <a href="#gallery" className="text-purple-400 hover:text-fuchsia-300 transition-colors font-medium">
              Gallery
            </a>
            <a href="#about" className="text-purple-400 hover:text-fuchsia-300 transition-colors font-medium">
              About
            </a>
            <a href="#contact" className="text-purple-400 hover:text-fuchsia-300 transition-colors font-medium">
              Contact
            </a>
          </nav>

          {/* Mobile menu button */}
          <button
            className="md:hidden p-2 rounded-lg text-purple-300 hover:bg-purple-900/50"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden border-t border-purple-900/30 py-4">
            <nav className="flex flex-col space-y-4">
              <a href="#home" className="text-purple-300 hover:text-fuchsia-300 transition-colors font-medium">
                Home
              </a>
              <a href="#trailer" className="text-purple-300 hover:text-fuchsia-300 transition-colors font-medium">
                Trailer
              </a>
              <a href="#gallery" className="text-purple-300 hover:text-fuchsia-300 transition-colors font-medium">
                Gallery
              </a>
              <a href="#about" className="text-purple-300 hover:text-fuchsia-300 transition-colors font-medium">
                About
              </a>
              <a href="#contact" className="text-purple-300 hover:text-fuchsia-300 transition-colors font-medium">
                Contact
              </a>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;