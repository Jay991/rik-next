import Link from 'next/link';
import Image from 'next/image';
import { Metadata } from 'next';
import { ArrowRight, Check, ChevronRight } from 'lucide-react';
import { notFound } from 'next/navigation';

// This would come from your WordPress GraphQL API in production
const mockProducts = [
  {
    id: '1',
    title: 'Product Category 1',
    slug: 'category-1',
    content: `<p>Advanced solutions for enterprise customers with comprehensive support and customization options. Our Product Category 1 offerings are designed to address the complex needs of large organizations.</p>
    <p>With a focus on scalability, security, and integration capabilities, these solutions provide the robust foundation that enterprise businesses need to thrive in today's competitive landscape.</p>`,
    excerpt: 'Advanced solutions for enterprise customers with comprehensive support and customization options.',
    featuredImage: {
      sourceUrl: '/images/product-1.jpg',
      altText: 'Product Category 1'
    },
    features: [
      {
        title: 'Enterprise-Grade Security',
        description: 'Robust security features that meet the highest industry standards and compliance requirements.'
      },
      {
        title: 'Seamless Integration',
        description: 'Connect with your existing systems and third-party solutions through our comprehensive API.'
      },
      {
        title: 'Customization Options',
        description: 'Tailor the solution to your specific business needs with extensive customization capabilities.'
      },
      {
        title: '24/7 Premium Support',
        description: 'Access to our dedicated enterprise support team around the clock for immediate assistance.'
      }
    ],
    benefits: [
      'Increased operational efficiency',
      'Reduced IT maintenance costs',
      'Enhanced data security and compliance',
      'Improved business intelligence capabilities',
      'Scalable infrastructure that grows with your business'
    ],
    faqs: [
      {
        question: 'How long does implementation typically take?',
        answer: 'Implementation timelines vary based on the complexity of your requirements, but typically range from 4-12 weeks with our guided enterprise onboarding process.'
      },
      {
        question: 'What kind of support is included?',
        answer: 'All enterprise solutions include 24/7 premium support with dedicated account managers and technical specialists to ensure your success.'
      },
      {
        question: 'Can your solutions integrate with our existing systems?',
        answer: 'Yes, our products are built with integration in mind and support connectivity with most major enterprise systems through our comprehensive API and integration frameworks.'
      }
    ],
    relatedProducts: ['2', '4', '5']
  },
  {
    id: '2',
    title: 'Product Category 2',
    slug: 'category-2',
    content: `<p>Streamlined solutions that enhance efficiency and reduce operational costs for growing businesses. Our Product Category 2 offerings provide the perfect balance of functionality and affordability.</p>
    <p>These solutions are specifically designed for mid-sized organizations looking to optimize their operations without the complexity and cost of enterprise-level systems.</p>`,
    excerpt: 'Streamlined solutions that enhance efficiency and reduce operational costs for growing businesses.',
    featuredImage: {
      sourceUrl: '/images/product-2.jpg',
      altText: 'Product Category 2'
    },
    features: [
      {
        title: 'Intuitive User Interface',
        description: 'Easy-to-use interface that requires minimal training and facilitates quick adoption.'
      },
      {
        title: 'Cost-Effective Scaling',
        description: 'Grow your solution as your business expands without prohibitive costs or complexity.'
      },
      {
        title: 'Automated Workflows',
        description: 'Streamline operations with intelligent automation of routine tasks and processes.'
      },
      {
        title: 'Comprehensive Reporting',
        description: 'Gain insights into your operations with detailed analytics and customizable reports.'
      }
    ],
    benefits: [
      'Reduced operational costs',
      'Improved team productivity',
      'Enhanced workflow efficiency',
      'Better decision-making through data insights',
      'Quick implementation and ROI'
    ],
    faqs: [
      {
        question: 'How quickly can we implement this solution?',
        answer: 'Most mid-sized businesses can be fully operational within 2-4 weeks, with our streamlined implementation process.'
      },
      {
        question: 'Do you offer training for our team?',
        answer: 'Yes, all packages include comprehensive training options including live sessions, video tutorials, and detailed documentation.'
      },
      {
        question: 'What kind of support do you provide?',
        answer: 'We offer standard business hours support with all packages, with options to upgrade to extended hours or 24/7 support.'
      }
    ],
    relatedProducts: ['1', '3', '6']
  },
  // More mock products would be defined here
];

// This would be a server component in production that fetches data from WordPress
export async function generateMetadata({ params }: { params: { slug: string } }): Promise<Metadata> {
  // In production, you would fetch this from WordPress
  const product = mockProducts.find(p => p.slug === params.slug);
  
  if (!product) {
    return {
      title: 'Product Not Found | Riklabel',
    };
  }
  
  return {
    title: `${product.title} | Riklabel Products`,
    description: product.excerpt,
    openGraph: {
      title: `${product.title} | Riklabel Products`,
      description: product.excerpt,
      images: [
        {
          url: product.featuredImage.sourceUrl,
          alt: product.featuredImage.altText,
        },
      ],
    },
  };
}

export default function ProductPage({ params }: { params: { slug: string } }) {
  // Find the product based on the slug - in production this would be a data fetch
  const product = mockProducts.find(p => p.slug === params.slug);
  
  // If product not found, return 404 page
  if (!product) {
    notFound();
  }
  
  // Get related products
  const relatedProducts = product.relatedProducts 
    ? mockProducts.filter(p => product.relatedProducts.includes(p.id)).slice(0, 3)
    : [];
  
  return (
    <>
      {/* Product Hero Section */}
      <section className="bg-white py-12 md:py-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col lg:flex-row gap-12">
            {/* Breadcrumbs */}
            <div className="w-full mb-6">
              <nav className="flex" aria-label="Breadcrumb">
                <ol className="inline-flex items-center space-x-1 md:space-x-3">
                  <li className="inline-flex items-center">
                    <Link href="/" className="text-gray-600 hover:text-blue-900">
                      Home
                    </Link>
                  </li>
                  <li>
                    <div className="flex items-center">
                      <ChevronRight className="h-4 w-4 text-gray-400" />
                      <Link href="/products" className="ml-1 text-gray-600 hover:text-blue-900">
                        Products
                      </Link>
                    </div>
                  </li>
                  <li aria-current="page">
                    <div className="flex items-center">
                      <ChevronRight className="h-4 w-4 text-gray-400" />
                      <span className="ml-1 text-gray-800 font-medium">
                        {product.title}
                      </span>
                    </div>
                  </li>
                </ol>
              </nav>
            </div>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
            {/* Product Image */}
            <div className="bg-gray-100 rounded-lg overflow-hidden">
              <div className="h-80 md:h-96 bg-gray-200 flex items-center justify-center">
                <span className="text-gray-500">Product Image</span>
                {/* In production, you would use the actual image from WordPress */}
                {/* <Image 
                  src={product.featuredImage.sourceUrl} 
                  alt={product.featuredImage.altText} 
                  width={800} 
                  height={600}
                  className="w-full h-full object-cover"
                /> */}
              </div>
            </div>
            
            {/* Product Info */}
            <div>
              <h1 className="text-3xl md:text-4xl font-serif font-bold mb-4">
                {product.title}
              </h1>
              <div className="text-lg text-gray-600 mb-8" 
                dangerouslySetInnerHTML={{ __html: product.content }} 
              />
              
              <div className="space-y-6">
                <Link 
                  href="/contact" 
                  className="w-full sm:w-auto px-6 py-3 bg-orange-500 hover:bg-orange-600 text-white font-medium rounded-md transition-colors inline-flex items-center justify-center"
                >
                  Request Information
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* Features Section */}
      {product.features && product.features.length > 0 && (
        <section className="bg-gray-50 py-16 md:py-24">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-3xl mx-auto text-center mb-12">
              <h2 className="text-3xl font-serif font-bold mb-4">
                Key Features
              </h2>
              <div className="h-1 w-24 bg-orange-500 mx-auto"></div>
            </div>
            
            <div className="grid md:grid-cols-2 gap-8">
              {product.features.map((feature, index) => (
                <div key={index} className="bg-white p-6 rounded-lg shadow-md">
                  <h3 className="text-xl font-bold mb-3">{feature.title}</h3>
                  <p className="text-gray-600">{feature.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}
      
      {/* Benefits Section */}
      {product.benefits && product.benefits.length > 0 && (
        <section className="bg-blue-900 py-16 md:py-24 text-white">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-3xl mx-auto text-center mb-12">
              <h2 className="text-3xl font-serif font-bold mb-4">
                Benefits
              </h2>
              <div className="h-1 w-24 bg-orange-500 mx-auto"></div>
            </div>
            
            <div className="max-w-3xl mx-auto">
              <ul className="space-y-4">
                {product.benefits.map((benefit, index) => (
                  <li key={index} className="flex items-start">
                    <Check className="h-6 w-6 text-orange-500 mr-3 flex-shrink-0 mt-0.5" />
                    <span className="text-lg">{benefit}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </section>
      )}
      
      {/* FAQ Section */}
      {product.faqs && product.faqs.length > 0 && (
        <section className="bg-white py-16 md:py-24">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-3xl mx-auto text-center mb-12">
              <h2 className="text-3xl font-serif font-bold mb-4">
                Frequently Asked Questions
              </h2>
              <div className="h-1 w-24 bg-orange-500 mx-auto"></div>
            </div>
            
            <div className="max-w-3xl mx-auto">
              <div className="space-y-6">
                {product.faqs.map((faq, index) => (
                  <div key={index} className="border-b border-gray-200 pb-6">
                    <h3 className="text-xl font-bold mb-3">{faq.question}</h3>
                    <p className="text-gray-600">{faq.answer}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>
      )}
      
      {/* Related Products Section */}
      {relatedProducts.length > 0 && (
        <section className="bg-gray-50 py-16 md:py-24">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-3xl mx-auto text-center mb-12">
              <h2 className="text-3xl font-serif font-bold mb-4">
                Related Products
              </h2>
              <div className="h-1 w-24 bg-orange-500 mx-auto"></div>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {relatedProducts.map((relatedProduct) => (
                <div 
                  key={relatedProduct.id} 
                  className="bg-white rounded-lg shadow-md overflow-hidden transition-transform hover:translate-y-[-4px] hover:shadow-lg"
                >
                  {/* Product Image */}
                  <div className="h-48 bg-gray-200 flex items-center justify-center">
                    <span className="text-gray-500">Product Image</span>
                    {/* In production, you would use the actual image from WordPress */}
                    {/* <Image 
                      src={relatedProduct.featuredImage.sourceUrl} 
                      alt={relatedProduct.featuredImage.altText} 
                      width={400} 
                      height={300}
                      className="w-full h-full object-cover"
                    /> */}
                  </div>
                  
                  {/* Product Content */}
                  <div className="p-6">
                    <h3 className="text-xl font-bold mb-2">{relatedProduct.title}</h3>
                    <p className="text-gray-600 mb-4">{relatedProduct.excerpt}</p>
                    <Link 
                      href={`/products/${relatedProduct.slug}`} 
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
      )}
      
      {/* CTA Section */}
      <section className="bg-white py-16 border-t border-gray-200">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-serif font-bold mb-6">
              Ready to Get Started?
            </h2>
            <p className="text-lg text-gray-600 mb-8">
              Contact our team today to discuss how {product.title} can help transform your business.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link 
                href="/contact" 
                className="px-6 py-3 bg-blue-900 hover:bg-blue-800 text-white font-medium rounded-md transition-colors inline-flex items-center justify-center"
              >
                Request a Demo
              </Link>
              <Link 
                href="/contact" 
                className="px-6 py-3 bg-orange-500 hover:bg-orange-600 text-white font-medium rounded-md transition-colors inline-flex items-center justify-center"
              >
                Contact Us
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}