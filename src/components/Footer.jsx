import { Smartphone, Mail, Phone, MapPin, Facebook, Twitter, Instagram, Linkedin } from "lucide-react";

export default function Footer() {
  // Replace with your actual Play Store link
  const playStoreLink = "https://play.google.com/store/apps/details?id=your.app.id";

  return (
    <footer className="bg-black text-white border-t border-gray-800">
      
      

      {/* Main Footer Content */}
      <div className="bg-black py-12">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-8">
            
            {/* Company Info */}
            <div className="space-y-4">
              <img 
                src="./logo.png" 
                alt="TNS Trading Logo" 
                className="h-12 w-auto mb-4"
              />
              <p className="text-gray-400 text-sm leading-relaxed">
                TNS Trading App - Your trusted partner for zero brokerage trading. Trade NSE, MCX, and OPT with confidence.
              </p>
            </div>

            {/* Quick Links */}
            <div className="space-y-4">
              <h3 className="text-xl font-bold text-yellow-400 mb-4">Quick Links</h3>
              <ul className="space-y-2">
                <li><a href="#home" className="text-gray-400 hover:text-yellow-400 transition-colors duration-300">Home</a></li>
                <li><a href="#about" className="text-gray-400 hover:text-yellow-400 transition-colors duration-300">About Us</a></li>
                <li><a href="#features" className="text-gray-400 hover:text-yellow-400 transition-colors duration-300">Features</a></li>
                <li><a href="#contact" className="text-gray-400 hover:text-yellow-400 transition-colors duration-300">Contact</a></li>
              </ul>
            </div>

            {/* Services */}
            <div className="space-y-4">
              <h3 className="text-xl font-bold text-yellow-400 mb-4">Services</h3>
              <ul className="space-y-2">
                <li className="text-gray-400">NSE Trading</li>
                <li className="text-gray-400">MCX Trading</li>
                <li className="text-gray-400">Options Trading</li>
                <li className="text-gray-400">Zero Brokerage</li>
              </ul>
            </div>

            {/* Contact Info */}
            {/* <div className="space-y-4">
              <h3 className="text-xl font-bold text-yellow-400 mb-4">Contact Us</h3>
              <ul className="space-y-3">
                <li className="flex items-start gap-3 text-gray-400 hover:text-yellow-400 transition-colors duration-300">
                  <Phone className="w-5 h-5 mt-1 flex-shrink-0" />
                  <span>+91 7208320766</span>
                </li>
                <li className="flex items-start gap-3 text-gray-400 hover:text-yellow-400 transition-colors duration-300">
                  <Mail className="w-5 h-5 mt-1 flex-shrink-0" />
                  <span>support@tnstrading.com</span>
                </li>
                <li className="flex items-start gap-3 text-gray-400">
                  <MapPin className="w-5 h-5 mt-1 flex-shrink-0" />
                  <span>Mumbai, Maharashtra, India</span>
                </li>
              </ul>
            </div> */}

          </div>

          {/* Social Media Links */}
          <div className="text-center border-t border-gray-800 pt-8">
            <div className="flex flex-col md:flex-row justify-center items-center gap-4">
              
              {/* Social Icons */}
              

              {/* Copyright */}
              <p className="text-gray-500 text-sm">
                © 2025 TNS Trading App. All rights reserved.
              </p>

            </div>
          </div>

        </div>
      </div>

    </footer>
  );
}