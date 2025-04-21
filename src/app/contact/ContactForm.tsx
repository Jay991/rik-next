'use client';

import { useState, FormEvent } from 'react';

export default function ContactForm() {
  // Form state
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    company: '',
    message: '',
    productInterest: '',
    howDidYouHear: '',
  });
  
  // Form status
  const [formStatus, setFormStatus] = useState<{
    submitted: boolean;
    submitting: boolean;
    success: boolean;
    error: string | null;
  }>({
    submitted: false,
    submitting: false,
    success: false,
    error: null,
  });

  // Handle input changes
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  // Handle form submission
  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    
    setFormStatus({
      submitted: false,
      submitting: true,
      success: false,
      error: null,
    });

    try {
      // In production, this would be an API call to your backend or a form service
      // For demonstration, we'll simulate a successful submission after a delay
      await new Promise(resolve => setTimeout(resolve, 1500));
      
      // Simulate a successful form submission
      setFormStatus({
        submitted: true,
        submitting: false,
        success: true,
        error: null,
      });
      
      // Reset form after successful submission
      setFormData({
        firstName: '',
        lastName: '',
        email: '',
        phone: '',
        company: '',
        message: '',
        productInterest: '',
        howDidYouHear: '',
      });
    } catch (error) {
      setFormStatus({
        submitted: true,
        submitting: false,
        success: false,
        error: 'There was an error submitting your form. Please try again.',
      });
    }
  };

  return (
    <div className="bg-white rounded-lg shadow-md p-8">
      {formStatus.success ? (
        <div className="text-center py-8">
          <div className="inline-flex items-center justify-center bg-green-100 rounded-full p-3 mb-6">
            <svg 
              className="h-8 w-8 text-green-600" 
              xmlns="http://www.w3.org/2000/svg" 
              viewBox="0 0 24 24" 
              fill="none" 
              stroke="currentColor" 
              strokeWidth="2" 
              strokeLinecap="round" 
              strokeLinejoin="round"
            >
              <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path>
              <polyline points="22 4 12 14.01 9 11.01"></polyline>
            </svg>
          </div>
          <h3 className="text-2xl font-bold text-gray-900 mb-2">Thank You!</h3>
          <p className="text-gray-600 mb-6">
            Your message has been sent successfully. Our team will get back to you as soon as possible.
          </p>
          <button
            className="px-6 py-3 bg-blue-900 text-white font-medium rounded-md hover:bg-blue-800 transition-colors"
            onClick={() => setFormStatus(prev => ({ ...prev, success: false }))}
          >
            Send Another Message
          </button>
        </div>
      ) : (
        <form onSubmit={handleSubmit} className="space-y-6">
          {/* Name Fields - Two Column Layout */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <label htmlFor="firstName" className="block text-sm font-medium text-gray-700 mb-1">
                First Name *
              </label>
              <input
                type="text"
                id="firstName"
                name="firstName"
                value={formData.firstName}
                onChange={handleChange}
                required
                className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500"
              />
            </div>
            <div>
              <label htmlFor="lastName" className="block text-sm font-medium text-gray-700 mb-1">
                Last Name *
              </label>
              <input
                type="text"
                id="lastName"
                name="lastName"
                value={formData.lastName}
                onChange={handleChange}
                required
                className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500"
              />
            </div>
          </div>

          {/* Email and Phone */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                Email Address *
              </label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
                className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500"
              />
            </div>
            <div>
              <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-1">
                Phone Number
              </label>
              <input
                type="tel"
                id="phone"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500"
              />
            </div>
          </div>

          {/* Company Name */}
          <div>
            <label htmlFor="company" className="block text-sm font-medium text-gray-700 mb-1">
              Company Name *
            </label>
            <input
              type="text"
              id="company"
              name="company"
              value={formData.company}
              onChange={handleChange}
              required
              className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500"
            />
          </div>

          {/* Product Interest */}
          <div>
            <label htmlFor="productInterest" className="block text-sm font-medium text-gray-700 mb-1">
              Product Interest
            </label>
            <select
              id="productInterest"
              name="productInterest"
              value={formData.productInterest}
              onChange={handleChange}
              className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500"
            >
              <option value="">Select an option</option>
              <option value="Product Category 1">Product Category 1</option>
              <option value="Product Category 2">Product Category 2</option>
              <option value="Product Category 3">Product Category 3</option>
              <option value="Other">Other</option>
            </select>
          </div>
          
          {/* How Did You Hear About Us */}
          <div>
            <label htmlFor="howDidYouHear" className="block text-sm font-medium text-gray-700 mb-1">
              How did you hear about us?
            </label>
            <select
              id="howDidYouHear"
              name="howDidYouHear"
              value={formData.howDidYouHear}
              onChange={handleChange}
              className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500"
            >
              <option value="">Select an option</option>
              <option value="Search Engine">Search Engine</option>
              <option value="Social Media">Social Media</option>
              <option value="Referral">Referral</option>
              <option value="Trade Show">Trade Show</option>
              <option value="Other">Other</option>
            </select>
          </div>

          {/* Message */}
          <div>
            <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">
              Message *
            </label>
            <textarea
              id="message"
              name="message"
              value={formData.message}
              onChange={handleChange}
              required
              rows={5}
              className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500"
            ></textarea>
          </div>

          {/* Error Message */}
          {formStatus.error && (
            <div className="text-red-500 text-sm p-3 bg-red-50 rounded-md">
              {formStatus.error}
            </div>
          )}

          {/* Submit Button */}
          <div>
            <button
              type="submit"
              disabled={formStatus.submitting}
              className={`w-full px-6 py-3 text-white font-medium rounded-md transition-colors ${
                formStatus.submitting
                  ? 'bg-blue-400 cursor-not-allowed'
                  : 'bg-orange-500 hover:bg-orange-600'
              }`}
            >
              {formStatus.submitting ? 'Sending...' : 'Send Message'}
            </button>
          </div>
          
          <p className="text-xs text-gray-500 italic">
            * Required fields
          </p>
        </form>
      )}
    </div>
  );
}