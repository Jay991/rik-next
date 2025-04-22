"use client";

import { useState, useEffect, useCallback } from 'react';
import Image from 'next/image';
import { ChevronLeft, ChevronRight } from 'lucide-react';

// Define types for supplier data
interface Supplier {
  id: number;
  name: string;
  logo: string;
  description: string;
}

// Real supplier data with actual logo paths
const supplierData: Supplier[] = [
  { 
    id: 1, 
    name: 'SATO', 
    logo: '/images/riklabel_partner_sato.png', 
    description: 'Leading provider of auto-ID solutions'
  },
  { 
    id: 2, 
    name: 'PDC Big', 
    logo: '/images/riklabel_partner_pdcbig.png', 
    description: 'Identification and tracking solutions'
  },
  { 
    id: 3, 
    name: 'PDC Healthcare', 
    logo: '/images/riklabel_partner_pdchc.png', 
    description: 'Healthcare identification solutions'
  },
  { 
    id: 4, 
    name: 'UPM', 
    logo: '/images/upm.svg', 
    description: 'Sustainable packaging and labeling'
  }
];

interface SupplierSliderProps {
  suppliers?: Supplier[];
}

const SupplierSlider: React.FC<SupplierSliderProps> = ({ suppliers = supplierData }) => {
  const [currentIndex, setCurrentIndex] = useState<number>(0);
  const [windowWidth, setWindowWidth] = useState<number>(0);
  
  // Update window width on mount and resize
  useEffect(() => {
    const handleResize = () => {
      setWindowWidth(window.innerWidth);
    };
    
    // Set initial size
    handleResize();
    
    // Add event listener
    window.addEventListener('resize', handleResize);
    
    // Clean up
    return () => window.removeEventListener('resize', handleResize);
  }, []);
  
  // Determine items to show based on screen size
  const getItemsToShow = useCallback((): number => {
    if (windowWidth >= 1024) return 3; // lg screens
    if (windowWidth >= 768) return 2;  // md screens
    return 1; // small screens
  }, [windowWidth]);
  
  const itemsToShow = getItemsToShow();
  
  // Logic for handling next/previous slides
  const nextSlide = useCallback(() => {
    setCurrentIndex((prevIndex) => {
      const maxIndex = suppliers.length - itemsToShow;
      return prevIndex >= maxIndex ? 0 : prevIndex + 1;
    });
  }, [suppliers.length, itemsToShow]);

  const prevSlide = useCallback(() => {
    setCurrentIndex((prevIndex) => {
      const maxIndex = suppliers.length - itemsToShow;
      return prevIndex === 0 ? maxIndex : prevIndex - 1;
    });
  }, [suppliers.length, itemsToShow]);

  // Auto-play functionality with pause on hover
  useEffect(() => {
    const sliderContainer = document.getElementById('supplier-slider-container');
    let interval: NodeJS.Timeout | undefined;
    
    const startAutoPlay = () => {
      interval = setInterval(() => {
        nextSlide();
      }, 5000);
    };
    
    const stopAutoPlay = () => {
      if (interval) clearInterval(interval);
    };
    
    startAutoPlay();
    
    if (sliderContainer) {
      sliderContainer.addEventListener('mouseenter', stopAutoPlay);
      sliderContainer.addEventListener('mouseleave', startAutoPlay);
      
      return () => {
        stopAutoPlay();
        sliderContainer.removeEventListener('mouseenter', stopAutoPlay);
        sliderContainer.removeEventListener('mouseleave', startAutoPlay);
      };
    }
    
    return () => stopAutoPlay();
  }, [nextSlide]);

  // Get the percentage width for each item based on items to show
  const getItemWidth = (): number => {
    return 100 / itemsToShow;
  };

  return (
    <section className="py-16 md:py-24 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-heading font-bold mb-4 text-blue-900">
            Our Trusted Suppliers
          </h2>
          <div className="h-1 w-24 bg-orange-500 mx-auto mb-6"></div>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            We partner with industry-leading suppliers to ensure the highest quality products and services.
          </p>
        </div>
        
        <div id="supplier-slider-container" className="relative w-full overflow-hidden py-8">
          {/* Carousel container */}
          <div 
            className="flex transition-transform duration-500 ease-in-out"
            style={{ transform: `translateX(-${currentIndex * getItemWidth()}%)` }}
          >
            {suppliers.map((supplier) => (
              <div 
                key={supplier.id} 
                className="flex-shrink-0 px-4"
                style={{ width: `${getItemWidth()}%` }}
              >
                <div className="bg-white rounded-lg shadow-md p-6 flex flex-col items-center h-full border border-gray-100 hover:shadow-lg transition-shadow">
                  <div className="h-24 w-full flex items-center justify-center mb-4">
                    <Image
                      src={supplier.logo}
                      alt={supplier.name}
                      width={120}
                      height={80}
                      className="object-contain"
                    />
                  </div>
                  <h3 className="text-lg font-heading font-bold text-blue-900 mb-2">{supplier.name}</h3>
                  <p className="text-gray-600 text-sm text-center">{supplier.description}</p>
                </div>
              </div>
            ))}
          </div>
          
          {/* Navigation arrows */}
          <button 
            onClick={prevSlide}
            className="absolute left-2 top-1/2 transform -translate-y-1/2 bg-white hover:bg-gray-100 p-2 rounded-full shadow-md z-10 border border-gray-200 transition-colors"
            aria-label="Previous suppliers"
          >
            <ChevronLeft className="h-5 w-5 text-blue-900" />
          </button>
          
          <button 
            onClick={nextSlide}
            className="absolute right-2 top-1/2 transform -translate-y-1/2 bg-white hover:bg-gray-100 p-2 rounded-full shadow-md z-10 border border-gray-200 transition-colors"
            aria-label="Next suppliers"
          >
            <ChevronRight className="h-5 w-5 text-blue-900" />
          </button>
          
          {/* Indicator dots */}
          <div className="flex justify-center mt-8 space-x-2">
            {Array.from({ length: Math.ceil(suppliers.length / itemsToShow) }).map((_, i) => (
              <button
                key={i}
                onClick={() => setCurrentIndex(i * itemsToShow)}
                className={`h-2 w-8 rounded-full transition-colors ${
                  currentIndex >= i * itemsToShow && 
                  currentIndex < (i + 1) * itemsToShow
                    ? 'bg-blue-900'
                    : 'bg-gray-300'
                }`}
                aria-label={`Go to slide ${i + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default SupplierSlider;