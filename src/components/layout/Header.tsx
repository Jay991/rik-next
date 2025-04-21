'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { usePathname } from 'next/navigation';
import { Phone, Menu, X, ChevronDown } from 'lucide-react';

// Define menu item type
type MenuItem = {
  id: string;
  label: string;
  path: string;
  children?: MenuItem[];
};

// Sample menu items - replace with actual data from your CMS
const sampleMenuItems: MenuItem[] = [
  { id: '1', label: 'Home', path: '/' },
  { 
    id: '2', 
    label: 'Products', 
    path: '/products',
    children: [
      { id: '2-1', label: 'Product Category 1', path: '/products/category-1' },
      { id: '2-2', label: 'Product Category 2', path: '/products/category-2' },
      { id: '2-3', label: 'Product Category 3', path: '/products/category-3' },
    ]
  },
  { id: '3', label: 'About', path: '/about' },
  { id: '4', label: 'Blog', path: '/blog' },
  { id: '5', label: 'Contact', path: '/contact' },
];

interface HeaderProps {
  menuItems?: MenuItem[];
  phone?: string;
}

export default function Header({ 
  menuItems = sampleMenuItems,
  phone = '+1 (555) 123-4567'
}: HeaderProps) {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [openSubmenu, setOpenSubmenu] = useState<string | null>(null);
  const pathname = usePathname();

  // Handle scroll effect
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Toggle submenu on mobile
  const toggleSubmenu = (id: string) => {
    setOpenSubmenu(openSubmenu === id ? null : id);
  };

  return (
    <header 
      className={`w-full fixed top-0 z-50 transition-all duration-300 ${
        scrolled ? 'bg-white shadow-md py-2' : 'bg-white/95 py-4'
      }`}
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <div className="flex-shrink-0">
            <Link href="/" className="flex items-center">
              <span className="text-xl font-bold text-blue-900">RIKLABEL</span>
              {/* Replace with actual logo */}
              {/* <Image 
                src="/images/logo.svg" 
                alt="Riklabel Logo" 
                width={150} 
                height={40} 
                className="h-10 w-auto" 
              /> */}
            </Link>
          </div>
          
          {/* Desktop Menu - hidden on mobile */}
          <nav className="hidden md:flex items-center space-x-8">
            {menuItems.map((item) => (
              <div key={item.id} className="relative group">
                {item.children ? (
                  /* Menu with dropdown */
                  <>
                    <button 
                      className={`flex items-center px-1 py-2 text-gray-700 hover:text-blue-900 focus:outline-none group ${
                        pathname.startsWith(item.path) ? 'text-blue-900 font-medium' : ''
                      }`}
                    >
                      {item.label}
                      <ChevronDown className="ml-1 h-4 w-4" />
                    </button>
                    
                    {/* Dropdown menu */}
                    <div className="absolute left-0 mt-2 w-48 bg-white rounded-md shadow-lg py-1 z-10 hidden group-hover:block">
                      {item.children.map((child) => (
                        <Link
                          key={child.id}
                          href={child.path}
                          className={`block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 ${
                            pathname === child.path ? 'bg-gray-100 text-blue-900' : ''
                          }`}
                        >
                          {child.label}
                        </Link>
                      ))}
                    </div>
                  </>
                ) : (
                  /* Regular menu item */
                  <Link
                    href={item.path}
                    className={`px-1 py-2 text-gray-700 hover:text-blue-900 transition-colors ${
                      pathname === item.path ? 'text-blue-900 font-medium' : ''
                    }`}
                  >
                    {item.label}
                  </Link>
                )}
              </div>
            ))}
          </nav>
          
          {/* Call button - visible on all devices */}
          <div className="hidden sm:flex items-center">
            <a 
              href={`tel:${phone.replace(/\s/g, '')}`}
              className="flex items-center bg-orange-500 hover:bg-orange-600 text-white px-4 py-2 rounded-md transition-colors"
            >
              <Phone className="h-4 w-4 mr-2" />
              <span className="hidden md:inline">Call Us</span>
              <span className="md:ml-1">{phone}</span>
            </a>
          </div>
          
          {/* Mobile call button - only visible on smallest screens */}
          <div className="sm:hidden flex items-center mr-2">
            <a 
              href={`tel:${phone.replace(/\s/g, '')}`}
              className="flex items-center justify-center bg-orange-500 text-white p-2 rounded-full"
              aria-label="Call us"
            >
              <Phone className="h-5 w-5" />
            </a>
          </div>
          
          {/* Mobile menu button */}
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="inline-flex items-center justify-center p-2 rounded-md text-gray-700 hover:text-blue-900 focus:outline-none"
              aria-expanded={isOpen}
            >
              <span className="sr-only">{isOpen ? 'Close menu' : 'Open menu'}</span>
              {isOpen ? (
                <X className="block h-6 w-6" aria-hidden="true" />
              ) : (
                <Menu className="block h-6 w-6" aria-hidden="true" />
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden absolute top-full left-0 right-0 bg-white shadow-lg max-h-[80vh] overflow-y-auto">
          <nav className="px-4 pt-2 pb-4 space-y-1">
            {menuItems.map((item) => (
              <div key={item.id} className="py-2">
                {item.children ? (
                  /* Mobile dropdown menu */
                  <div>
                    <button
                      onClick={() => toggleSubmenu(item.id)}
                      className={`flex items-center justify-between w-full text-left px-3 py-2 text-base font-medium ${
                        pathname.startsWith(item.path) ? 'text-blue-900' : 'text-gray-700'
                      }`}
                    >
                      {item.label}
                      <ChevronDown 
                        className={`h-5 w-5 transition-transform ${
                          openSubmenu === item.id ? 'rotate-180' : ''
                        }`} 
                      />
                    </button>
                    
                    {/* Dropdown content */}
                    {openSubmenu === item.id && (
                      <div className="mt-2 pl-4 space-y-2">
                        {item.children.map((child) => (
                          <Link
                            key={child.id}
                            href={child.path}
                            className={`block px-3 py-2 text-sm rounded-md hover:bg-gray-100 ${
                              pathname === child.path ? 'bg-gray-100 text-blue-900' : 'text-gray-600'
                            }`}
                            onClick={() => setIsOpen(false)}
                          >
                            {child.label}
                          </Link>
                        ))}
                      </div>
                    )}
                  </div>
                ) : (
                  /* Regular mobile menu item */
                  <Link
                    href={item.path}
                    className={`block px-3 py-2 text-base font-medium rounded-md hover:bg-gray-100 ${
                      pathname === item.path ? 'bg-gray-100 text-blue-900' : 'text-gray-700'
                    }`}
                    onClick={() => setIsOpen(false)}
                  >
                    {item.label}
                  </Link>
                )}
              </div>
            ))}
            
            {/* Mobile version of call button (expanded) */}
            <div className="pt-4 mt-2 border-t border-gray-200">
              <a 
                href={`tel:${phone.replace(/\s/g, '')}`}
                className="flex items-center justify-center bg-orange-500 hover:bg-orange-600 text-white px-4 py-3 rounded-md"
                onClick={() => setIsOpen(false)}
              >
                <Phone className="h-5 w-5 mr-2" />
                <span>Call Us: {phone}</span>
              </a>
            </div>
          </nav>
        </div>
      )}
    </header>
  );
}