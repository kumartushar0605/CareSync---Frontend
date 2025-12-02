import Link from 'next/link';
import { Phone, Mail, Clock, Heart } from 'lucide-react';

const Footer = () => {
  return (
    <>
      {/* Contact Section */}
      <div className="py-20 bg-gray-900 text-center">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Get In Touch
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Ready to experience better healthcare? Contact us today
          </p>

          {/* Contact Icons */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-10 mt-16 place-items-center">

            {/* Call */}
            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full flex items-center justify-center text-white mx-auto mb-4">
                <Phone className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-bold text-white mb-2">Call Us</h3>
              <p className="text-gray-300">+91 6207850955</p>
            </div>

            {/* Email */}
            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full flex items-center justify-center text-white mx-auto mb-4">
                <Mail className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-bold text-white mb-2">Email Us</h3>
              <p className="text-gray-300">info@CareSync.com</p>
            </div>

            {/* Hours */}
            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full flex items-center justify-center text-white mx-auto mb-4">
                <Clock className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-bold text-white mb-2">Hours</h3>
              <p className="text-gray-300">24/7 Emergency Care</p>
            </div>

          </div>
        </div>
      </div>

      {/* Footer Main */}
      <footer className="bg-black text-white py-16 text-center">
        <div className="max-w-7xl mx-auto px-6">

          <div className="grid grid-cols-1 md:grid-cols-3 gap-12 place-items-center">

            {/* Logo & Desc */}
            <div className="max-w-xs text-center">
              <div className="flex items-center justify-center mb-4">
                <div className="h-10 w-10 bg-gradient-to-r from-blue-600 to-purple-600 rounded-xl flex items-center justify-center mr-3">
                  <Heart className="w-5 h-5 text-white" />
                </div>
                <span className="font-bold text-xl">CareSync</span>
              </div>
              <p className="text-gray-400 leading-relaxed">
                Providing exceptional healthcare services with cutting-edge
                technology and compassionate care.
              </p>
            </div>

            {/* Quick Links */}
            <div className="text-center">
              <h4 className="text-lg font-bold mb-4">Quick Links</h4>
              <ul className="space-y-2">
                {[
                  { name: "About Us", href: "/about" },
                  { name: "Contact", href: "/contact" },
                ].map((link) => (
                  <li key={link.name}>
                    <Link
                      href={link.href}
                      className="text-gray-400 hover:text-white transition"
                    >
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Contact Info */}
            <div className="text-center">
              <h4 className="text-lg font-bold mb-4">Contact Info</h4>
              <div className="space-y-2 text-gray-400">
                <p>ITER ROAD</p>
                <p>Medical City, MC 12345</p>
                <p>+91 6207850955</p>
                <p>info@CareSync.com</p>
              </div>
            </div>

          </div>

          {/* Bottom Line */}
          <div className="border-t border-gray-800 pt-8 mt-12">
            <p className="text-gray-400">
              © 2025 CareSync. All rights reserved. Built with modern technology for better healthcare.
            </p>
          </div>

        </div>
      </footer>
    </>
  );
};

export default Footer;
