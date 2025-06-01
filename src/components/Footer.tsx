
import React from 'react';
import { Film, Youtube, Facebook, Twitter, Instagram, Mail, Phone, MapPin } from 'lucide-react';
import { Link } from 'react-router-dom';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const footerSections = [
    {
      title: 'Categories',
      links: [
        { name: 'Action Movies', href: '/?category=Movies&genre=Action' },
        { name: 'Comedy Shows', href: '/?category=TV Shows&genre=Comedy' },
        { name: 'Drama Series', href: '/?category=TV Shows&genre=Drama' },
        { name: 'Horror Films', href: '/?category=Movies&genre=Horror' },
        { name: 'Sci-Fi Movies', href: '/?category=Movies&genre=Sci-Fi' },
        { name: 'Documentaries', href: '/?category=Movies&genre=Documentary' }
      ]
    },
    {
      title: 'Features',
      links: [
        { name: 'HD Quality', href: '#' },
        { name: 'Fast Streaming', href: '#' },
        { name: 'Mobile App', href: '#' },
        { name: 'Offline Download', href: '#' },
        { name: 'Multiple Languages', href: '#' },
        { name: 'Subtitles', href: '#' }
      ]
    },
    {
      title: 'Support',
      links: [
        { name: 'Help Center', href: '#' },
        { name: 'Contact Us', href: '/contact' },
        { name: 'Report Issue', href: '/contact' },
        { name: 'Privacy Policy', href: '/privacy' },
        { name: 'Terms of Service', href: '/terms' },
        { name: 'FAQ', href: '#' }
      ]
    }
  ];

  const socialLinks = [
    { icon: Youtube, href: 'https://youtube.com', name: 'YouTube' },
    { icon: Facebook, href: 'https://facebook.com', name: 'Facebook' },
    { icon: Twitter, href: 'https://twitter.com', name: 'Twitter' },
    { icon: Instagram, href: 'https://instagram.com', name: 'Instagram' }
  ];

  return (
    <footer className="bg-black text-white py-12">
      <div className="container mx-auto px-4">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-8">
          {/* Brand Section */}
          <div className="lg:col-span-1">
            <Link to="/" className="flex items-center space-x-2 mb-4">
              <Film className="h-8 w-8 text-red-600" />
              <span className="text-2xl font-bold bg-gradient-to-r from-red-600 to-orange-500 bg-clip-text text-transparent">
                MoviesFlix
              </span>
            </Link>
            <p className="text-gray-400 mb-6 max-w-sm">
              Your ultimate destination for streaming the latest movies and TV shows in HD quality. 
              Watch anywhere, anytime with our premium streaming service.
            </p>
            
            {/* Contact Info */}
            <div className="space-y-2 text-sm text-gray-400">
              <div className="flex items-center space-x-2">
                <Mail className="h-4 w-4" />
                <span>support@moviesflix.com</span>
              </div>
              <div className="flex items-center space-x-2">
                <Phone className="h-4 w-4" />
                <span>+1 (555) 123-4567</span>
              </div>
              <div className="flex items-center space-x-2">
                <MapPin className="h-4 w-4" />
                <span>Hollywood, CA 90028</span>
              </div>
            </div>
          </div>

          {/* Footer Links */}
          {footerSections.map((section, index) => (
            <div key={index}>
              <h3 className="text-lg font-semibold mb-4 text-red-500">{section.title}</h3>
              <ul className="space-y-2">
                {section.links.map((link, linkIndex) => (
                  <li key={linkIndex}>
                    {link.href.startsWith('/') ? (
                      <Link 
                        to={link.href}
                        className="text-gray-400 hover:text-white transition-colors duration-200 text-sm"
                      >
                        {link.name}
                      </Link>
                    ) : (
                      <a 
                        href={link.href}
                        className="text-gray-400 hover:text-white transition-colors duration-200 text-sm"
                      >
                        {link.name}
                      </a>
                    )}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Social Media & Newsletter */}
        <div className="border-t border-gray-800 pt-8 mb-8">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            {/* Social Media Links */}
            <div className="flex items-center space-x-4">
              <span className="text-gray-400 mr-2">Follow us:</span>
              {socialLinks.map((social, index) => (
                <a
                  key={index}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-400 hover:text-red-500 transition-colors duration-200 p-2 hover:bg-gray-800 rounded-full"
                  aria-label={social.name}
                >
                  <social.icon className="h-5 w-5" />
                </a>
              ))}
            </div>

            {/* Newsletter Signup */}
            <div className="flex items-center space-x-2">
              <input
                type="email"
                placeholder="Subscribe to newsletter"
                className="px-4 py-2 bg-gray-800 border border-gray-700 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-red-500 transition-colors"
              />
              <button className="px-6 py-2 bg-red-600 hover:bg-red-700 text-white rounded-lg transition-colors duration-200">
                Subscribe
              </button>
            </div>
          </div>
        </div>

        {/* Bottom Footer */}
        <div className="border-t border-gray-800 pt-6">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0 text-sm text-gray-400">
            <div className="flex flex-wrap items-center space-x-6">
              <span>&copy; {currentYear} MoviesFlix. All rights reserved.</span>
              <Link to="/privacy" className="hover:text-white transition-colors">Privacy Policy</Link>
              <Link to="/terms" className="hover:text-white transition-colors">Terms of Service</Link>
              <a href="#" className="hover:text-white transition-colors">Cookie Policy</a>
            </div>
            <div className="text-center md:text-right space-y-1">
              <p>Made with ❤️ for movie lovers worldwide</p>
              <p className="text-xs">
                Powered by{' '}
                <a 
                  href="https://www.neevotech.com/" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-red-500 hover:text-red-400 transition-colors"
                >
                  Neevotech
                </a>
              </p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
