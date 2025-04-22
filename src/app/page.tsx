import Link from 'next/link';
import Image from 'next/image';
import { ArrowRight } from 'lucide-react';

export default function Home() {
  return (
    <>
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-blue-900 to-blue-800 text-white pt-16 pb-20 md:pt-20 md:pb-28">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="max-w-2xl">
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight mb-6">
                Innovative B2B Solutions for Your Business
              </h1>
              <p className="text-lg sm:text-xl text-gray-200 mb-8">
                Transforming businesses with cutting-edge products and services designed for today's competitive landscape.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link 
                  href="/products" 
                  className="px-6 py-3 bg-orange-500 hover:bg-orange-600 text-white font-medium rounded-md transition-colors inline-flex items-center justify-center"
                >
                  Explore Products
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
                <Link 
                  href="/contact" 
                  className="px-6 py-3 bg-white hover:bg-gray-100 text-blue-900 font-medium rounded-md transition-colors inline-flex items-center justify-center"
                >
                  Get in Touch
                </Link>
              </div>
            </div>
            <div className="hidden lg:block">
              {/* Placeholder for hero image */}
              <div className="bg-blue-700 rounded-lg h-96 w-full flex items-center justify-center">
                <span className="text-white text-lg">Hero Image Placeholder</span>
                {/* Uncomment when you have an actual image */}
                {/* <Image 
                  src="/images/hero-image.jpg" 
                  alt="Riklabel B2B Solutions" 
                  width={600} 
                  height={500}
                  className="rounded-lg object-cover"
                  priority
                /> */}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Products Section */}
      <section className="py-16 md:py-24 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Our Featured Products
            </h2>
            <div className="h-1 w-24 bg-orange-500 mx-auto mb-6"></div>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Discover our range of innovative products designed to solve your business challenges and drive growth.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Product Card 1 */}
            <div className="bg-white rounded-lg shadow-lg overflow-hidden transition-transform hover:translate-y-[-8px]">
              <div className="h-48 bg-gray-200 flex items-center justify-center">
                <span className="text-gray-500">Product Image</span>
                {/* <Image 
                  src="/images/product-1.jpg" 
                  alt="Product 1" 
                  width={400} 
                  height={300}
                  className="w-full h-full object-cover"
                /> */}
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold mb-2">Product Category 1</h3>
                <p className="text-gray-600 mb-4">
                  Advanced solutions for enterprise customers with comprehensive support and customization options.
                </p>
                <Link 
                  href="/products/category-1" 
                  className="text-blue-900 hover:text-blue-700 font-medium inline-flex items-center"
                >
                  Learn More
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </div>
            </div>

            {/* Product Card 2 */}
            <div className="bg-white rounded-lg shadow-lg overflow-hidden transition-transform hover:translate-y-[-8px]">
              <div className="h-48 bg-gray-200 flex items-center justify-center">
                <span className="text-gray-500">Product Image</span>
                {/* <Image 
                  src="/images/product-2.jpg" 
                  alt="Product 2" 
                  width={400} 
                  height={300}
                  className="w-full h-full object-cover"
                /> */}
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold mb-2">Product Category 2</h3>
                <p className="text-gray-600 mb-4">
                  Streamlined solutions that enhance efficiency and reduce operational costs for growing businesses.
                </p>
                <Link 
                  href="/products/category-2" 
                  className="text-blue-900 hover:text-blue-700 font-medium inline-flex items-center"
                >
                  Learn More
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </div>
            </div>

            {/* Product Card 3 */}
            <div className="bg-white rounded-lg shadow-lg overflow-hidden transition-transform hover:translate-y-[-8px]">
              <div className="h-48 bg-gray-200 flex items-center justify-center">
                <span className="text-gray-500">Product Image</span>
                {/* <Image 
                  src="/images/product-3.jpg" 
                  alt="Product 3" 
                  width={400} 
                  height={300}
                  className="w-full h-full object-cover"
                /> */}
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold mb-2">Product Category 3</h3>
                <p className="text-gray-600 mb-4">
                  Innovative solutions designed to address the unique challenges faced by modern businesses.
                </p>
                <Link 
                  href="/products/category-3" 
                  className="text-blue-900 hover:text-blue-700 font-medium inline-flex items-center"
                >
                  Learn More
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </div>
            </div>
          </div>

          <div className="text-center mt-12">
            <Link 
              href="/products" 
              className="px-6 py-3 bg-blue-900 hover:bg-blue-800 text-white font-medium rounded-md transition-colors inline-flex items-center"
            >
              View All Products
              <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
          </div>
        </div>
      </section>

      {/* Client Showcase Section */}
      <section className="py-16 md:py-24 bg-gray-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Trusted by Industry Leaders
            </h2>
            <div className="h-1 w-24 bg-orange-500 mx-auto mb-6"></div>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              We work with major companies across the Middle East, providing innovative solutions that drive success.
            </p>
          </div>

          {/* Client Logos Grid */}
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8 mb-16">
            {/* Client 1: DHL */}
            <div className="bg-white rounded-lg shadow-md p-6 flex items-center justify-center transition-transform hover:translate-y-[-4px]">
              <div className="text-center">
                <div className="h-16 flex items-center justify-center mb-4">
                  {/* Placeholder for logo - replace with actual logo */}
                  <div className="bg-gray-100 rounded-md w-full h-full flex items-center justify-center">
                    <span className="text-gray-700 font-bold text-xl">DHL</span>
                  </div>
                </div>
                <p className="text-gray-600 text-sm">Logistics & Shipping</p>
              </div>
            </div>

            {/* Client 2: Aramex */}
            <div className="bg-white rounded-lg shadow-md p-6 flex items-center justify-center transition-transform hover:translate-y-[-4px]">
              <div className="text-center">
                <div className="h-16 flex items-center justify-center mb-4">
                  {/* Placeholder for logo - replace with actual logo */}
                  <div className="bg-gray-100 rounded-md w-full h-full flex items-center justify-center">
                    <span className="text-gray-700 font-bold text-xl">Aramex</span>
                  </div>
                </div>
                <p className="text-gray-600 text-sm">Logistics & Shipping</p>
              </div>
            </div>

            {/* Client 3: Azadea */}
            <div className="bg-white rounded-lg shadow-md p-6 flex items-center justify-center transition-transform hover:translate-y-[-4px]">
              <div className="text-center">
                <div className="h-16 flex items-center justify-center mb-4">
                  {/* Placeholder for logo - replace with actual logo */}
                  <div className="bg-gray-100 rounded-md w-full h-full flex items-center justify-center">
                    <span className="text-gray-700 font-bold text-xl">Azadea</span>
                  </div>
                </div>
                <p className="text-gray-600 text-sm">Retail</p>
              </div>
            </div>

            {/* Client 4: Zaatar w Zeit */}
            <div className="bg-white rounded-lg shadow-md p-6 flex items-center justify-center transition-transform hover:translate-y-[-4px]">
              <div className="text-center">
                <div className="h-16 flex items-center justify-center mb-4">
                  {/* Placeholder for logo - replace with actual logo */}
                  <div className="bg-gray-100 rounded-md w-full h-full flex items-center justify-center">
                    <span className="text-gray-700 font-bold text-xl">Zaatar w Zeit</span>
                  </div>
                </div>
                <p className="text-gray-600 text-sm">Food & Beverage</p>
              </div>
            </div>

            {/* Client 5: Spinneys */}
            <div className="bg-white rounded-lg shadow-md p-6 flex items-center justify-center transition-transform hover:translate-y-[-4px]">
              <div className="text-center">
                <div className="h-16 flex items-center justify-center mb-4">
                  {/* Placeholder for logo - replace with actual logo */}
                  <div className="bg-gray-100 rounded-md w-full h-full flex items-center justify-center">
                    <span className="text-gray-700 font-bold text-xl">Spinneys</span>
                  </div>
                </div>
                <p className="text-gray-600 text-sm">Retail & Grocery</p>
              </div>
            </div>

            {/* Client 6: Toters */}
            <div className="bg-white rounded-lg shadow-md p-6 flex items-center justify-center transition-transform hover:translate-y-[-4px]">
              <div className="text-center">
                <div className="h-16 flex items-center justify-center mb-4">
                  {/* Placeholder for logo - replace with actual logo */}
                  <div className="bg-gray-100 rounded-md w-full h-full flex items-center justify-center">
                    <span className="text-gray-700 font-bold text-xl">Toters</span>
                  </div>
                </div>
                <p className="text-gray-600 text-sm">Delivery Services</p>
              </div>
            </div>

            {/* Client 7: AUBMC */}
            <div className="bg-white rounded-lg shadow-md p-6 flex items-center justify-center transition-transform hover:translate-y-[-4px]">
              <div className="text-center">
                <div className="h-16 flex items-center justify-center mb-4">
                  {/* Placeholder for logo - replace with actual logo */}
                  <div className="bg-gray-100 rounded-md w-full h-full flex items-center justify-center">
                    <span className="text-gray-700 font-bold text-xl">AUBMC</span>
                  </div>
                </div>
                <p className="text-gray-600 text-sm">Healthcare</p>
              </div>
            </div>

            {/* Client 8: More Clients */}
            <div className="bg-white rounded-lg shadow-md p-6 flex items-center justify-center transition-transform hover:translate-y-[-4px]">
              <div className="text-center">
                <div className="h-16 flex items-center justify-center mb-4">
                  {/* Placeholder for logo - replace with actual logo */}
                  <div className="bg-gradient-to-r from-blue-900 to-blue-800 rounded-md w-full h-full flex items-center justify-center">
                    <span className="text-white font-bold">+ More</span>
                  </div>
                </div>
                <p className="text-gray-600 text-sm">View Our Case Studies</p>
              </div>
            </div>
          </div>

          {/* Industry Section */}
          <div className="max-w-4xl mx-auto">
            <h3 className="text-2xl font-bold text-center mb-8">
              Serving Multiple Industries
            </h3>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              <div className="bg-white rounded-lg p-4 text-center shadow-sm">
                <span className="font-medium text-blue-900">Logistics</span>
              </div>
              <div className="bg-white rounded-lg p-4 text-center shadow-sm">
                <span className="font-medium text-blue-900">Retail</span>
              </div>
              <div className="bg-white rounded-lg p-4 text-center shadow-sm">
                <span className="font-medium text-blue-900">Healthcare</span>
              </div>
              <div className="bg-white rounded-lg p-4 text-center shadow-sm">
                <span className="font-medium text-blue-900">Food & Beverage</span>
              </div>
              <div className="bg-white rounded-lg p-4 text-center shadow-sm">
                <span className="font-medium text-blue-900">Manufacturing</span>
              </div>
              <div className="bg-white rounded-lg p-4 text-center shadow-sm">
                <span className="font-medium text-blue-900">Education</span>
              </div>
              <div className="bg-white rounded-lg p-4 text-center shadow-sm">
                <span className="font-medium text-blue-900">Financial Services</span>
              </div>
              <div className="bg-white rounded-lg p-4 text-center shadow-sm">
                <span className="font-medium text-blue-900">Hospitality</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 md:py-20 bg-gray-100">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-gradient-to-r from-blue-800 to-blue-900 rounded-xl p-8 md:p-12 lg:p-16 text-white shadow-lg">
            <div className="max-w-3xl mx-auto text-center">
              <h2 className="text-3xl md:text-4xl font-bold mb-6">
                Ready to Elevate Your Business?
              </h2>
              <p className="text-lg md:text-xl text-gray-200 mb-8">
                Contact our team today to discuss how our products can help transform your operations and drive business growth.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link 
                  href="/contact" 
                  className="px-8 py-4 bg-orange-500 hover:bg-orange-600 text-white font-medium rounded-md transition-colors inline-flex items-center justify-center"
                >
                  Contact Us Today
                </Link>
                <Link 
                  href="/products" 
                  className="px-8 py-4 bg-white hover:bg-gray-100 text-blue-900 font-medium rounded-md transition-colors inline-flex items-center justify-center"
                >
                  Explore Products
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}