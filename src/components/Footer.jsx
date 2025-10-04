import { Smartphone, Mail, Phone, MapPin, Facebook, Twitter, Instagram, Linkedin } from "lucide-react";

export default function Footer() {
  // Replace with your actual Play Store link
  const playStoreLink = "https://play.google.com/store/apps/details?id=your.app.id";

  return (
    <footer className="bg-black text-white border-t border-gray-800">
      
      {/* Download App Section */}
      <div className="bg-gradient-to-br from-gray-900 to-black py-16">
        <div className="container mx-auto px-6">
          <div className="flex flex-col md:flex-row items-center justify-between gap-8 max-w-5xl mx-auto">
            
            {/* Left Content */}
            <div className="flex-1 text-center md:text-left space-y-4">
              <div className="flex items-center justify-center md:justify-start gap-3">
                <Smartphone className="w-12 h-12 text-yellow-400" />
                <h2 className="text-3xl md:text-4xl font-extrabold">
                  Download Our App
                </h2>
              </div>
              
              <p className="text-gray-400 text-lg max-w-md">
                Start trading on the go! Download the TNS Trading App and enjoy zero brokerage, instant withdrawals, and 24/7 support.
              </p>

              {/* Play Store Button */}
              <a
                href={playStoreLink}
                target="_blank"
                rel="noopener noreferrer"
                className="group inline-flex items-center gap-3 bg-black hover:bg-gray-900 border-2 border-gray-700 hover:border-yellow-400 px-6 py-3 rounded-xl transition-all duration-300 hover:scale-105 hover:shadow-[0_0_30px_rgba(250,204,21,0.3)]"
              >
                <svg className="w-10 h-10 text-yellow-400 group-hover:scale-110 transition-transform duration-300" viewBox="0 0 512 512" fill="currentColor">
                  <path d="M325.3 234.3L104.6 13l280.8 161.2-60.1 60.1zM47 0C34 6.8 25.3 19.2 25.3 35.3v441.3c0 16.1 8.7 28.5 21.7 35.3l256.6-256L47 0zm425.2 225.6l-58.9-34.1-65.7 64.5 65.7 64.5 60.1-34.1c18-14.3 18-46.5-1.2-60.8zM104.6 499l280.8-161.2-60.1-60.1L104.6 499z"/>
                </svg>
                <div className="text-left">
                  <p className="text-xs text-gray-400">GET IT ON</p>
                  <p className="text-lg font-bold group-hover:text-yellow-400 transition-colors duration-300">Google Play</p>
                </div>
              </a>
            </div>

            {/* Right QR Code */}
            <div className="flex-shrink-0">
              <div className="relative group">
                <div className="absolute inset-0 bg-yellow-400 rounded-2xl blur-xl opacity-20 group-hover:opacity-40 transition-opacity duration-300"></div>
                <div className="relative bg-white p-6 rounded-2xl transform group-hover:scale-105 transition-transform duration-300">
                  <img
                    src="./qr.png"
                    alt="Download QR Code"
                    className="w-40 h-40"
                  />
                  <p className="text-black text-sm font-semibold text-center mt-3">Scan to Download</p>
                </div>
              </div>
            </div>

          </div>
        </div>
      </div>

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
            <div className="space-y-4">
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
            </div>

          </div>

          {/* Social Media Links */}
          <div className="border-t border-gray-800 pt-8">
            <div className="flex flex-col md:flex-row justify-between items-center gap-4">
              
              {/* Social Icons */}
              <div className="flex gap-4">
                <a href="#" className="group w-10 h-10 bg-gray-800 hover:bg-yellow-400 rounded-full flex items-center justify-center transition-all duration-300 hover:scale-110">
                  <Facebook className="w-5 h-5 text-gray-400 group-hover:text-black transition-colors duration-300" />
                </a>
                <a href="#" className="group w-10 h-10 bg-gray-800 hover:bg-yellow-400 rounded-full flex items-center justify-center transition-all duration-300 hover:scale-110">
                  <Twitter className="w-5 h-5 text-gray-400 group-hover:text-black transition-colors duration-300" />
                </a>
                <a href="#" className="group w-10 h-10 bg-gray-800 hover:bg-yellow-400 rounded-full flex items-center justify-center transition-all duration-300 hover:scale-110">
                  <Instagram className="w-5 h-5 text-gray-400 group-hover:text-black transition-colors duration-300" />
                </a>
                <a href="#" className="group w-10 h-10 bg-gray-800 hover:bg-yellow-400 rounded-full flex items-center justify-center transition-all duration-300 hover:scale-110">
                  <Linkedin className="w-5 h-5 text-gray-400 group-hover:text-black transition-colors duration-300" />
                </a>
              </div>

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