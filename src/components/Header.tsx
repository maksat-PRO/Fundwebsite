import { useState } from 'react';
import { motion } from 'motion/react';
import { Menu, X } from 'lucide-react';

interface HeaderProps {
  onNavigateHome?: () => void;
  showNavigation?: boolean;
}

export function Header({ onNavigateHome, showNavigation = true }: HeaderProps) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navItems = [
    { label: 'Home', href: '#home' },
    { label: 'Focus Areas', href: '#focus' },
    { label: 'Portfolio', href: '#portfolio' },
    { label: 'About', href: '#about' },
    { label: 'Contact', href: '#contact' },
  ];

  const handleLogoClick = () => {
    if (onNavigateHome) {
      onNavigateHome();
    }
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50">
      <div className="ios-glass border-b border-black/[0.08]">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="flex justify-between items-center h-14">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
              className="flex items-center cursor-pointer"
              onClick={handleLogoClick}
            >
              <div className="w-8 h-8 rounded-full bg-gradient-to-br from-blue-500 to-purple-600 mr-3" />
              <span className="text-[17px] tracking-tight text-[#1d1d1f]">
                SportsTech Ventures
              </span>
            </motion.div>

            {/* Desktop Navigation */}
            {showNavigation && (
              <nav className="hidden md:flex items-center space-x-8">
                {navItems.map((item, index) => (
                  <motion.a
                    key={item.href}
                    href={item.href}
                    className="text-[15px] text-[#1d1d1f]/80 hover:text-[#1d1d1f] transition-colors duration-200"
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ 
                      duration: 0.4, 
                      delay: index * 0.05,
                      ease: [0.16, 1, 0.3, 1]
                    }}
                  >
                    {item.label}
                  </motion.a>
                ))}
                <motion.a
                  href="#contact"
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ 
                    duration: 0.4, 
                    delay: navItems.length * 0.05,
                    ease: [0.16, 1, 0.3, 1]
                  }}
                  className="px-4 py-1.5 bg-[#007aff] text-white rounded-full text-[15px] hover:bg-[#0051d5] transition-all duration-200 active:scale-95"
                >
                  Get in Touch
                </motion.a>
              </nav>
            )}

            {/* Mobile Menu Button */}
            {showNavigation && (
              <button
                className="md:hidden p-2 -mr-2 rounded-lg hover:bg-black/5 active:bg-black/10 transition-colors"
                onClick={() => setIsMenuOpen(!isMenuOpen)}
              >
                {isMenuOpen ? <X size={20} /> : <Menu size={20} />}
              </button>
            )}
          </div>

          {/* Mobile Navigation */}
          {showNavigation && isMenuOpen && (
            <motion.nav
              className="md:hidden pb-4 border-t border-black/[0.08] mt-0.5"
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
            >
              <div className="pt-4 space-y-1">
                {navItems.map((item) => (
                  <a
                    key={item.href}
                    href={item.href}
                    className="block py-2.5 px-3 text-[15px] text-[#1d1d1f]/80 hover:text-[#1d1d1f] hover:bg-black/5 rounded-lg transition-all duration-200"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    {item.label}
                  </a>
                ))}
                <a
                  href="#contact"
                  className="block mt-3 px-4 py-2.5 bg-[#007aff] text-white rounded-full text-[15px] text-center hover:bg-[#0051d5] transition-all duration-200 active:scale-95"
                >
                  Get in Touch
                </a>
              </div>
            </motion.nav>
          )}
        </div>
      </div>
    </header>
  );
}
