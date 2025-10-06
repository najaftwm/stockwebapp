import { CheckCircle, Clock, Phone, IndianRupee } from "lucide-react";

export default function HomePage() {
  return (
    <section id="home" className="bg-black text-white min-h-screen flex flex-col">
      
      {/* Hero Section */}
      <div className="flex-1 flex items-center">
        <div className="container mx-auto px-6 py-20">
          <div className="flex flex-col lg:flex-row items-center justify-between gap-12">
            
            {/* Left Content */}
            <div className="flex-1 space-y-6 max-w-2xl">
              {/* Badge */}
              <div className="inline-block">
                <h4 className="text-yellow-400 font-bold text-xl uppercase tracking-wider">
                  BEST TRADING APP
                </h4>
              </div>

              <p className="text-gray-500 text-lg font-semibold">
                NSE | MCX | OPT
              </p>

              {/* Main Heading */}
              <div className="space-y-2">
                <h1 className="text-4xl md:text-5xl font-bold text-gray-400 leading-tight">
                  Enjoy Maximum
                  <br />
                  Profits with
                </h1>

                <h2 className="text-4xl md:text-5xl font-extrabold text-white leading-tight">
                  ZERO BROKERAGE
                </h2>
              </div>

              {/* Subheading */}
              <p className="text-yellow-400 font-bold text-xl">
                Get Free Account for TNS Trading App!
              </p>

              {/* Description */}
              <p className="text-gray-400 text-lg leading-relaxed max-w-xl">
                Is money-making your passion? Our platform makes trading easy and fun. Trade anytime, anywhere.
              </p>
            </div>

            {/* Right QR Code */}
            <div className="flex-shrink-0">
              <div className="relative group">
                {/* Glowing background effect */}
                <div className="absolute inset-0 bg-white rounded-3xl blur-2xl opacity-10 group-hover:opacity-20 transition-opacity duration-300"></div>
                
                {/* QR Code Container */}
                <div className="relative bg-white rounded-5xl shadow-2xl transform group-hover:scale-105 transition-transform duration-300">
                  <img
                    src="./tradestoco.ico"
                    alt="QR Code"
                    className="w-72 h-72 md:w-80 md:h-80"
                  />
                </div>
              </div>
            </div>

          </div>
        </div>
      </div>

      {/* Features Section */}
      <div className="bg-black py-16 border-t border-gray-900">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-12 max-w-6xl mx-auto">

            {/* Feature 1 - Zero Brokerage */}
            <div className="group flex flex-col items-center text-center space-y-4 transform transition-all duration-300 hover:scale-110 cursor-pointer">
              <div className="relative">
                {/* Glow effect */}
                <div className="absolute inset-0 bg-yellow-400 rounded-full blur-xl opacity-0 group-hover:opacity-30 transition-opacity duration-300"></div>
                
                {/* Icon Circle */}
                <div className="relative w-20 h-20 bg-black border-4 border-yellow-400 rounded-full flex items-center justify-center group-hover:bg-yellow-400 transition-all duration-300">
                  <CheckCircle className="w-10 h-10 text-yellow-400 group-hover:text-black transition-colors duration-300" />
                </div>
              </div>
              
              <div>
                <p className="text-gray-500 text-lg font-medium group-hover:text-white transition-colors duration-300">
                  Zero
                </p>
                <p className="text-gray-400 text-base group-hover:text-gray-200 transition-colors duration-300">
                  Brokerage
                </p>
              </div>
            </div>

            {/* Feature 2 - 24/7 Deposit & Withdrawal */}
            <div className="group flex flex-col items-center text-center space-y-4 transform transition-all duration-300 hover:scale-110 cursor-pointer">
              <div className="relative">
                {/* Glow effect */}
                <div className="absolute inset-0 bg-yellow-400 rounded-full blur-xl opacity-0 group-hover:opacity-30 transition-opacity duration-300"></div>
                
                {/* Icon Circle */}
                <div className="relative w-20 h-20 bg-black border-4 border-yellow-400 rounded-full flex items-center justify-center group-hover:bg-yellow-400 transition-all duration-300">
                  <Clock className="w-10 h-10 text-yellow-400 group-hover:text-black transition-colors duration-300" />
                </div>
              </div>
              
              <div>
                <p className="text-gray-500 text-lg font-medium group-hover:text-white transition-colors duration-300">
                  24/7 Deposit
                </p>
                <p className="text-gray-400 text-base group-hover:text-gray-200 transition-colors duration-300">
                  & Withdrawal
                </p>
              </div>
            </div>

            {/* Feature 3 - Up to 500x Margin */}
            <div className="group flex flex-col items-center text-center space-y-4 transform transition-all duration-300 hover:scale-110 cursor-pointer">
              <div className="relative">
                {/* Glow effect */}
                <div className="absolute inset-0 bg-yellow-400 rounded-full blur-xl opacity-0 group-hover:opacity-30 transition-opacity duration-300"></div>
                
                {/* Icon Circle */}
                <div className="relative w-20 h-20 bg-black border-4 border-yellow-400 rounded-full flex items-center justify-center group-hover:bg-yellow-400 transition-all duration-300">
                  <IndianRupee className="w-10 h-10 text-yellow-400 group-hover:text-black transition-colors duration-300" />
                </div>
              </div>
              
              <div>
                <p className="text-gray-500 text-lg font-medium group-hover:text-white transition-colors duration-300">
                  Upto 500x
                </p>
                <p className="text-gray-400 text-base group-hover:text-gray-200 transition-colors duration-300">
                  Margin
                </p>
              </div>
            </div>

            {/* Feature 4 - 24/7 Call Support */}
            <div className="group flex flex-col items-center text-center space-y-4 transform transition-all duration-300 hover:scale-110 cursor-pointer">
              <div className="relative">
                {/* Glow effect */}
                <div className="absolute inset-0 bg-yellow-400 rounded-full blur-xl opacity-0 group-hover:opacity-30 transition-opacity duration-300"></div>
                
                {/* Icon Circle */}
                <div className="relative w-20 h-20 bg-black border-4 border-yellow-400 rounded-full flex items-center justify-center group-hover:bg-yellow-400 transition-all duration-300">
                  <Phone className="w-10 h-10 text-yellow-400 group-hover:text-black transition-colors duration-300" />
                </div>
              </div>
              
              <div>
                <p className="text-gray-500 text-lg font-medium group-hover:text-white transition-colors duration-300">
                  24/7 Call
                </p>
                <p className="text-gray-400 text-base group-hover:text-gray-200 transition-colors duration-300">
                  Support
                </p>
              </div>
            </div>

          </div>
        </div>
      </div>

    </section>
  );
}