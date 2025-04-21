import Link from 'next/link';
import Image from 'next/image';
import { 
  Phone, 
  Mail, 
  MapPin, 
  Linkedin, 
  Twitter, 
  Facebook, 
  Instagram 
} from 'lucide-react';

// Define types
interface SocialLink {
  platform: string;
  url: string;
  icon?: React.ReactNode;
}

interface FooterLink {
  id: string;
  label: string;
  path: string;
}

interface FooterColumn {
  title: string;
  links: FooterLink[];
}

interface FooterProps {
  columns?: FooterColumn[];
  address?: string;
  phone?: string;
  email?: string;
  socialLinks?: SocialLink[];
  copyrightText?: string;
}

// Map of social icons
const socialIcons: Record<string, React.ReactNode> = {
  linkedin: <Linkedin className="h-5 w-5" />,
  twitter: <Twitter className="h-5 w-5" />,
  facebook: <Facebook className="h-5 w-5" />,
  instagram: <Instagram className="h-5 w-5" />,
};

// Default footer data - replace with dynamic data from your CMS
const defaultColumns: FooterColumn[] = [
  {
    title: "Products",
    links: [
      { id: "p1", label: "Product Category 1", path: "/products/category-1" },
      { id: "p2", label: "Product Category 2", path: "/products/category-2" },
      { id: "p3", label: "Product Category 3", path: "/products/category-3" },
      { id: "p4", label: "Featured Products", path: "/products/featured" },
    ]
  },
  {
    title: "Company",
    links: [
      { id: "c1", label: "About Us", path: "/about" },
      { id: "c2", label: "Our Team", path: "/about/team" },
      { id: "c3", label: "Careers", path: "/careers" },
      { id: "c4", label: "Contact Us", path: "/contact" },
    ]
  },
  {
    title: "Resources",
    links: [
      { id: "r1", label: "Blog", path: "/blog" },
      { id: "r2", label: "Case Studies", path: "/case-studies" },
      { id: "r3", label: "Guides", path: "/resources/guides" },
      { id: "r4", label: "FAQ", path: "/faq" },
    ]
  }
];

const defaultSocialLinks: SocialLink[] = [
  { platform: "linkedin", url: "https://linkedin.com/company/riklabel" },
  { platform: "twitter", url: "https://twitter.com/riklabel" },
  { platform: "facebook", url: "https://facebook.com/riklabel" },
  { platform: "instagram", url: "https://instagram.com/riklabel" },
];

export default function Footer({
  columns = defaultColumns,
  address = "123 Business St, Innovation City, 10001",
  phone = "+1 (555) 123-4567",
  email = "info@riklabel.com",
  socialLinks = defaultSocialLinks,
  copyrightText = `© ${new Date().getFullYear()} Riklabel. All rights reserved.`
}: FooterProps) {
  return (
    <footer className="bg-blue-900 text-white">
      {/* Main Footer */}
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8">
          {/* Company Info */}
          <div className="lg:col-span-2">
            <Link href="/" className="inline-block mb-6">
              <span className="text-xl font-bold text-white">RIKLABEL</span>
              {/* Replace with actual logo */}
              {/* <Image 
                src="/images/logo-white.svg" 
                alt="Riklabel Logo" 
                width={150} 
                height={40} 
                className="h-10 w-auto" 
              /> */}
            </Link>
            
            <p className="text-gray-300 mb-6 max-w-md">
              Providing innovative B2B solutions to help your business thrive in today's competitive landscape.
            </p>
            
            <div className="space-y-3">
              {address && (
                <div className="flex items-start">
                  <MapPin className="h-5 w-5 text-orange-500 mr-3 mt-0.5 flex-shrink-0" />
                  <span className="text-gray-300">{address}</span>
                </div>
              )}
              
              {phone && (
                <div className="flex items-center">
                  <Phone className="h-5 w-5 text-orange-500 mr-3 flex-shrink-0" />
                  <a 
                    href={`tel:${phone.replace(/\s/g, '')}`} 
                    className="text-gray-300 hover:text-white transition-colors"
                  >
                    {phone}
                  </a>
                </div>
              )}
              
              {email && (
                <div className="flex items-center">
                  <Mail className="h-5 w-5 text-orange-500 mr-3 flex-shrink-0" />
                  <a 
                    href={`mailto:${email}`} 
                    className="text-gray-300 hover:text-white transition-colors"
                  >
                    {email}
                  </a>
                </div>
              )}
            </div>
            
            {/* Social Links */}
            {socialLinks && socialLinks.length > 0 && (
              <div className="mt-6">
                <div className="flex space-x-4">
                  {socialLinks.map((social, index) => (
                    <a
                      key={index}
                      href={social.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-gray-300 hover:text-orange-500 transition-colors"
                      aria-label={`Follow on ${social.platform}`}
                    >
                      {social.icon || socialIcons[social.platform] || null}
                    </a>
                  ))}
                </div>
              </div>
            )}
          </div>
          
          {/* Footer Columns */}
          {columns.map((column, index) => (
            <div key={index}>
              <h3 className="text-lg font-semibold mb-4">{column.title}</h3>
              <ul className="space-y-2">
                {column.links.map((link) => (
                  <li key={link.id}>
                    <Link 
                      href={link.path} 
                      className="text-gray-300 hover:text-white transition-colors inline-block py-1"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
      
      {/* Newsletter Section */}
      <div className="border-t border-blue-800">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <div className="flex flex-col md:flex-row md:items-center justify-between">
            <div className="mb-6 md:mb-0 md:mr-8">
              <h3 className="text-lg font-semibold mb-2">Subscribe to Our Newsletter</h3>
              <p className="text-gray-300 max-w-md">
                Stay updated with our latest products, industry insights, and company news.
              </p>
            </div>
            
            <div className="w-full md:w-auto">
              <form className="flex flex-col sm:flex-row gap-3">
                <input
                  type="email"
                  placeholder="Your email address"
                  className="px-4 py-3 rounded-md focus:ring-orange-500 focus:border-orange-500 text-gray-900 w-full sm:w-auto min-w-[250px]"
                  required
                />
                <button
                  type="submit"
                  className="px-6 py-3 bg-orange-500 hover:bg-orange-600 text-white font-medium rounded-md transition-colors whitespace-nowrap"
                >
                  Subscribe
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
      
      {/* Bottom Footer */}
      <div className="border-t border-blue-800 bg-blue-950">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="text-gray-400 text-sm mb-4 md:mb-0">
              {copyrightText}
            </div>
            
            <div className="flex flex-wrap justify-center gap-x-8 gap-y-2">
              <Link href="/privacy-policy" className="text-gray-400 hover:text-white text-sm">
                Privacy Policy
              </Link>
              <Link href="/terms-of-service" className="text-gray-400 hover:text-white text-sm">
                Terms of Service
              </Link>
              <Link href="/cookie-policy" className="text-gray-400 hover:text-white text-sm">
                Cookie Policy
              </Link>
              <Link href="/sitemap" className="text-gray-400 hover:text-white text-sm">
                Sitemap
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}