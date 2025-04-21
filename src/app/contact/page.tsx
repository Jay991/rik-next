import { Metadata } from 'next';
import { Mail, Phone, MapPin } from 'lucide-react';
import ContactForm from './ContactForm';

export const metadata: Metadata = {
  title: 'Contact Us | Riklabel',
  description: 'Get in touch with our team to discuss how our B2B solutions can help your business.',
  openGraph: {
    title: 'Contact Us | Riklabel',
    description: 'Get in touch with our team to discuss how our B2B solutions can help your business.',
  },
};

export default function ContactPage() {
  return (
    <>
      {/* Contact Hero Section */}
      <section className="bg-blue-900 text-white py-16 md:py-24">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-serif font-bold mb-6">
              Get in Touch
            </h1>
            <p className="text-lg md:text-xl text-gray-200 mb-8">
              Our team is ready to answer your questions and discuss how our solutions can help your business succeed.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Info & Form Section */}
      <section className="py-16 md:py-24 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            {/* Contact Information */}
            <div>
              <h2 className="text-3xl font-serif font-bold mb-8">Contact Information</h2>
              
              <div className="space-y-8">
                {/* Address */}
                <div className="flex items-start">
                  <div className="bg-blue-100 p-3 rounded-full mr-4">
                    <MapPin className="h-6 w-6 text-blue-900" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold mb-2">Our Office</h3>
                    <address className="not-italic text-gray-600">
                      123 Business St, Innovation City<br />
                      State, 10001<br />
                      United States
                    </address>
                  </div>
                </div>
                
                {/* Phone */}
                <div className="flex items-start">
                  <div className="bg-blue-100 p-3 rounded-full mr-4">
                    <Phone className="h-6 w-6 text-blue-900" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold mb-2">Phone</h3>
                    <p className="text-gray-600">
                      <a href="tel:+15551234567" className="hover:text-blue-900 transition-colors">
                        +1 (555) 123-4567
                      </a>
                    </p>
                    <p className="text-gray-500 text-sm mt-1">
                      Monday to Friday, 9am to 6pm EST
                    </p>
                  </div>
                </div>
                
                {/* Email */}
                <div className="flex items-start">
                  <div className="bg-blue-100 p-3 rounded-full mr-4">
                    <Mail className="h-6 w-6 text-blue-900" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold mb-2">Email</h3>
                    <p className="text-gray-600">
                      <a href="mailto:info@riklabel.com" className="hover:text-blue-900 transition-colors">
                        info@riklabel.com
                      </a>
                    </p>
                    <p className="text-gray-500 text-sm mt-1">
                      We'll respond as soon as possible
                    </p>
                  </div>
                </div>
              </div>
              
              {/* Map or Additional Info */}
              <div className="mt-12 bg-gray-100 rounded-lg p-6">
                <h3 className="text-xl font-bold mb-4">Business Hours</h3>
                <ul className="space-y-2 text-gray-600">
                  <li className="flex justify-between">
                    <span>Monday - Friday:</span>
                    <span>9:00 AM - 6:00 PM</span>
                  </li>
                  <li className="flex justify-between">
                    <span>Saturday:</span>
                    <span>10:00 AM - 2:00 PM</span>
                  </li>
                  <li className="flex justify-between">
                    <span>Sunday:</span>
                    <span>Closed</span>
                  </li>
                </ul>
              </div>
            </div>
            
            {/* Contact Form */}
            <div>
              <h2 className="text-3xl font-serif font-bold mb-8">Send Us a Message</h2>
              
              <ContactForm />
            </div>
          </div>
        </div>
      </section>
      
      {/* FAQ Section */}
      <section className="py-16 md:py-24 bg-gray-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-serif font-bold mb-4">
                Frequently Asked Questions
              </h2>
              <div className="h-1 w-24 bg-orange-500 mx-auto mb-6"></div>
              <p className="text-lg text-gray-600">
                Find quick answers to common questions about our products and services.
              </p>
            </div>
            
            <div className="space-y-6">
              <div className="bg-white rounded-lg shadow-md p-6">
                <h3 className="text-xl font-bold mb-3">How quickly can you respond to my inquiry?</h3>
                <p className="text-gray-600">
                  We typically respond to all inquiries within 24 business hours. For urgent matters, 
                  please call our office directly.
                </p>
              </div>
              
              <div className="bg-white rounded-lg shadow-md p-6">
                <h3 className="text-xl font-bold mb-3">Do you offer product demonstrations?</h3>
                <p className="text-gray-600">
                  Yes, we offer comprehensive product demonstrations tailored to your specific business needs. 
                  Please complete our contact form and indicate your interest in a demo.
                </p>
              </div>
              
              <div className="bg-white rounded-lg shadow-md p-6">
                <h3 className="text-xl font-bold mb-3">What information should I provide when requesting a quote?</h3>
                <p className="text-gray-600">
                  To provide an accurate quote, it helps if you can share details about your business size, 
                  specific requirements, timeline, and any particular products you're interested in.
                </p>
              </div>
              
              <div className="bg-white rounded-lg shadow-md p-6">
                <h3 className="text-xl font-bold mb-3">Do you offer support after purchase?</h3>
                <p className="text-gray-600">
                  Absolutely. All our products include dedicated support, and we offer various 
                  levels of ongoing maintenance and support packages to meet your needs.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}