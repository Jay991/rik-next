import Link from 'next/link';
import Image from 'next/image';
import { Metadata } from 'next';
import { ArrowRight } from 'lucide-react';

// This would come from your WordPress GraphQL API in production
const mockProducts = [
  {
    id: '1',
    title: 'Product Category 1',
    slug: 'category-1',
    excerpt: 'Advanced solutions for enterprise customers with comprehensive support and customization options.',
    thumbnail: '/images/product-1.jpg',
    featuredImage: {
      sourceUrl: '/images/product-1.jpg',
      altText: 'Product Category 1'
    }
  },
  {
    id: '2',
    title: 'Product Category 2',
    slug: 'category-2',
    excerpt: 'Streamlined solutions that enhance efficiency and reduce operational costs for growing businesses.',
    thumbnail: '/images/product-2.jpg',
    featuredImage: {
      sourceUrl: '/images/product-2.jpg',
      altText: 'Product Category 2'
    }
  },
  {
    id: '3',
    title: 'Product Category 3',
    slug: 'category-3',
    excerpt: 'Innovative solutions designed to address the unique challenges faced by modern businesses.',
    thumbnail: '/images/product-3.jpg',
    featuredImage: {
      sourceUrl: '/images/product-3.jpg',
      altText: 'Product Category 3'
    }
  },
  {
    id: '4',
    title: 'Product Category 4',
    slug: 'category-4',
    excerpt: 'Scalable solutions ideal for businesses looking to expand their operations and reach new markets.',
    thumbnail: '/images/product-4.jpg',
    featuredImage: {
      sourceUrl: '/images/product-4.jpg',
      altText: 'Product Category 4'
    }
  },
  {
    id: '5',
    title: 'Product Category 5',
    slug: 'category-5',
    excerpt: 'Cost-effective solutions that provide essential functionality without unnecessary complexity.',
    thumbnail: '/images/product-5.jpg',
    featuredImage: {
      sourceUrl: '/images/product-5.jpg',
      altText: 'Product Category 5'
    }
  },
  {
    id: '6',
    title: 'Product Category 6',
    slug: 'category-6',
    excerpt: 'Specialized solutions designed to address industry-specific challenges and requirements.',
    thumbnail: '/images/product-6.jpg',
    featuredImage: {
      sourceUrl: '/images/product-6.jpg',
      altText: 'Product Category 6'
    }
  }
];

// In a real application, you would fetch this data from WordPress
// Example of how you'd fetch with getStaticProps if this wasn't an App Router page:
/*
export async function getStaticProps() {
  const apolloClient = initializeApollo();
  
  const { data } = await apolloClient.query({
    query: GET_ALL_PRODUCTS,
  });
  
  return {
    props: {
      products: data.products.nodes,
    },
    revalidate: 60, // Revalidate the data every 60 seconds
  };
}
*/

export const metadata: Metadata = {
  title: 'Products | Riklabel',
  description: 'Explore our comprehensive range of B2B products designed to help your business succeed.',
  openGraph: {
    title: 'Products | Riklabel',
    description: 'Explore our comprehensive range of B2B products designed to help your business succeed.',
  },
};

export default function ProductsPage() {
  return (
    <>
      {/* Products Hero Section */}
      <section className="bg-blue-900 text-white py-16 md:py-24">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-serif font-bold mb-6">
              Our Products
            </h1>
            <p className="text-lg md:text-xl text-gray-200 mb-8">
              Discover our comprehensive range of B2B solutions designed to help your business succeed in today's competitive landscape.
            </p>
          </div>
        </div>
      </section>

      {/* Products Filter - Static for now, would be dynamic with WordPress categories */}
      <section className="bg-white border-b border-gray-200">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap items-center justify-center py-4 space-x-0 space-y-2 sm:space-x-4 sm:space-y-0">
            <button className="px-4 py-2 text-blue-900 bg-blue-100 rounded-md font-medium">
              All Products
            </button>
            <button className="px-4 py-2 text-gray-700 hover:bg-gray-100 rounded-md">
              Category 1
            </button>
            <button className="px-4 py-2 text-gray-700 hover:bg-gray-100 rounded-md">
              Category 2
            </button>
            <button className="px-4 py-2 text-gray-700 hover:bg-gray-100 rounded-md">
              Category 3
            </button>
            <button className="px-4 py-2 text-gray-700 hover:bg-gray-100 rounded-md">
              Featured
            </button>
          </div>
        </div>
      </section>

      {/* Products Grid */}
      <section className="bg-gray-50 py-12 md:py-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {mockProducts.map((product) => (
              <div 
                key={product.id} 
                className="bg-white rounded-lg shadow-md overflow-hidden transition-transform hover:translate-y-[-4px] hover:shadow-lg"
              >
                {/* Product Image */}
                <div className="h-48 bg-gray-200 flex items-center justify-center">
                  <span className="text-gray-500">Product Image</span>
                  {/* In production, you would use the actual image from WordPress */}
                  {/* <Image 
                    src={product.featuredImage.sourceUrl} 
                    alt={product.featuredImage.altText} 
                    width={400} 
                    height={300}
                    className="w-full h-full object-cover"
                  /> */}
                </div>
                
                {/* Product Content */}
                <div className="p-6">
                  <h3 className="text-xl font-bold mb-2">{product.title}</h3>
                  <p className="text-gray-600 mb-4">{product.excerpt}</p>
                  <Link 
                    href={`/products/${product.slug}`} 
                    className="text-blue-900 hover:text-blue-700 font-medium inline-flex items-center"
                  >
                    Learn More
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-white py-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-serif font-bold mb-6">
              Can't Find What You're Looking For?
            </h2>
            <p className="text-lg text-gray-600 mb-8">
              Our team is ready to help you find the perfect solution for your business needs.
              Contact us today for a personalized consultation.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link 
                href="/contact" 
                className="px-6 py-3 bg-orange-500 hover:bg-orange-600 text-white font-medium rounded-md transition-colors inline-flex items-center justify-center"
              >
                Contact Our Team
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
              <Link 
                href="/about" 
                className="px-6 py-3 bg-gray-200 hover:bg-gray-300 text-gray-800 font-medium rounded-md transition-colors inline-flex items-center justify-center"
              >
                Learn About Us
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* SEO Content Section */}
      <section className="bg-gray-50 py-12 border-t border-gray-200">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-2xl font-serif font-bold mb-6">
              Leading B2B Product Solutions
            </h2>
            <div className="prose max-w-none text-gray-600">
              <p>
                At Riklabel, we provide innovative B2B product solutions designed to meet the evolving needs of modern businesses. 
                Our comprehensive product range offers cutting-edge technology combined with industry expertise to help your 
                organization thrive in today's competitive marketplace.
              </p>
              <p>
                Whether you're looking for enterprise-grade systems, specialized industry solutions, or cost-effective alternatives 
                to legacy products, our catalog has options to suit businesses of all sizes and sectors. Our team of product specialists 
                is dedicated to helping you find the perfect fit for your specific requirements.
              </p>
              <p>
                Each of our products is backed by our commitment to quality, performance, and ongoing support. As your business 
                partner, we're invested in your long-term success, providing not just products but complete solutions that 
                drive real business outcomes.
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}