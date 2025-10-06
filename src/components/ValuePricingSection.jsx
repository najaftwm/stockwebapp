import { CheckCircle } from "lucide-react";

export default function ValuePricingSection() {
  const features = [
    "Zero Brokerage Fees",
    "500x Leverage",
    "24/7 Call Support",
    "30-Min Instant Withdrawal",
    "0% Tax & Commission",
    "80x Holdings Margin",
    "Hassle-Free Trading"
  ];

  return (
    <section className="bg-black text-white py-20">
      <div className="container mx-auto px-6">
        
        {/* Top Section - Image and Features */}
        <div className="flex flex-col md:flex-row items-center justify-center gap-12 mb-20">
          
          {/* Left - App Image */}
          <div className="flex-shrink-0">
            <div className="relative w-64 h-150 bg-gradient-to-br from-blue-900 via-purple-900 to-blue-800 rounded-2xl overflow-hidden shadow-2xl transform hover:scale-105 transition-transform duration-300">
              <img
                src="./whytouse.png"
                alt="TradeStocko App"
                className="w-full h-full object-cover"
              />
            </div>
          </div>

          {/* Right - Features List */}
          <div className="flex-1 max-w-md">
            <h2 className="text-3xl md:text-4xl font-extrabold mb-8">
              <span className="text-yellow-400">How Our TNS Trading App</span>
              <br />
              <span className="text-white">Provides Value !</span>
            </h2>

            <div className="space-y-4">
              {features.map((feature, index) => (
                <div
                  key={index}
                  className="group flex items-center space-x-4 p-3 rounded-lg hover:bg-gray-900 transition-all duration-300 cursor-pointer"
                >
                  <div className="relative">
                    {/* Animated Line on Hover */}
                    <div className="absolute -left-2 top-0 bottom-0 w-1 bg-yellow-400 scale-y-0 group-hover:scale-y-100 transition-transform duration-300 origin-top rounded-full"></div>
                    
                    <CheckCircle className="w-6 h-6 text-green-500 group-hover:text-yellow-400 group-hover:scale-110 transition-all duration-300" />
                  </div>
                  <span className="text-gray-300 group-hover:text-white group-hover:translate-x-2 group-hover:font-semibold transition-all duration-300">
                    {feature}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Decorative Divider */}
        <div className="flex items-center justify-center my-12">
          <div className="h-px w-full bg-gradient-to-r from-transparent via-gray-700 to-transparent"></div>
        </div>

        {/* Bottom Section - Pricing Comparison */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          
          {/* Ordinary Platform Card */}
          <div className="group relative border border-gray-800 hover:border-yellow-400 rounded-2xl p-8 transition-all duration-300 hover:scale-105 hover:shadow-[0_0_40px_rgba(250,204,21,0.2)] cursor-pointer overflow-hidden">
            
            {/* Background Effect */}
            <div className="absolute inset-0 bg-gradient-to-br from-gray-900 to-gray-800 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-2xl"></div>
            
            {/* Animated Corner Lines */}
            <div className="absolute top-0 left-0 w-12 h-12 border-t-2 border-l-2 border-yellow-400 scale-0 group-hover:scale-100 transition-transform duration-300 rounded-tl-2xl"></div>
            <div className="absolute bottom-0 right-0 w-12 h-12 border-b-2 border-r-2 border-yellow-400 scale-0 group-hover:scale-100 transition-transform duration-300 rounded-br-2xl"></div>
            
            {/* Content */}
            <div className="relative z-10 text-center space-y-4">
              <h3 className="text-2xl font-bold text-gray-400 group-hover:text-white transition-colors duration-300">
                Ordinary Platform
              </h3>
              
              <div className="space-y-2">
                <p className="text-sm text-gray-500 group-hover:text-gray-300 transition-colors duration-300">
                  Profit  <span className="block min-h-[1.75rem]"><span className="text-yellow-400 font-bold text-xl group-hover:scale-110 inline-block transition-transform duration-300">Rs 20,000/-</span></span>
                </p>
                <p className="text-sm text-gray-500 group-hover:text-gray-300 transition-colors duration-300">
                  Brokerage, taxes, etc. <span className="text-red-500 font-bold text-lg group-hover:scale-110 inline-block transition-transform duration-300">Rs 8,000/-</span>
                </p>
                <div className="h-px w-full bg-gray-700 group-hover:bg-yellow-400 transition-colors duration-300 my-2"></div>
                <p className="text-sm text-gray-500 group-hover:text-gray-300 transition-colors duration-300">
                  Net Profit (take home) <span className="inline-block ml-2 text-yellow-400 font-bold text-xl group-hover:scale-110 inline-block transition-transform duration-300">Rs 12,000/-</span>
                </p>
              </div>
            </div>
          </div>

          {/* TNS Trading App Card */}
          <div className="group relative border-2 border-yellow-400 hover:border-yellow-300 rounded-2xl p-8 transition-all duration-300 hover:scale-105 hover:shadow-[0_0_50px_rgba(250,204,21,0.4)] cursor-pointer overflow-hidden">
            
            {/* Premium Background Effect */}
            <div className="absolute inset-0 bg-gradient-to-br from-yellow-900/20 to-yellow-800/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-2xl"></div>
            
            {/* Animated Corner Lines */}
            <div className="absolute top-0 left-0 w-16 h-16 border-t-4 border-l-4 border-yellow-300 scale-75 group-hover:scale-100 transition-transform duration-300 rounded-tl-2xl"></div>
            <div className="absolute bottom-0 right-0 w-16 h-16 border-b-4 border-r-4 border-yellow-300 scale-75 group-hover:scale-100 transition-transform duration-300 rounded-br-2xl"></div>
            
            {/* Glowing Dot */}
            <div className="absolute top-1/2 right-0 transform translate-x-1/2 -translate-y-1/2">
              <div className="w-4 h-4 bg-yellow-400 rounded-full animate-pulse"></div>
              <div className="absolute inset-0 w-4 h-4 bg-yellow-400 rounded-full blur-md opacity-50"></div>
            </div>
            
            {/* Content */}
            <div className="relative z-10 text-center space-y-4">
              <h3 className="text-2xl font-bold text-yellow-400 group-hover:text-yellow-300 transition-colors duration-300">
                TNS Trading App
              </h3>
              
              <div className="space-y-2">
                <p className="text-sm text-gray-400 group-hover:text-gray-200 transition-colors duration-300">
                  Profit  <span className="block min-h-[1.75rem]"><span className="inline-block ml-4 text-yellow-400 font-bold text-2xl group-hover:scale-125 inline-block transition-transform duration-300">Rs 40,000/-</span></span>
                </p>
                <p className="text-sm text-gray-400 group-hover:text-gray-200 transition-colors duration-300">
                  Brokerage, taxes, etc. <span className="text-green-500 font-bold text-lg group-hover:scale-110 inline-block transition-transform duration-300">Rs 0/-</span>
                </p>
                <div className="h-px w-full bg-yellow-400 group-hover:bg-yellow-300 group-hover:shadow-[0_0_10px_rgba(250,204,21,0.5)] transition-all duration-300 my-2"></div>
                <p className="text-sm text-gray-400 group-hover:text-gray-200 transition-colors duration-300">
                  Net Profit (take home) <span className="inline-block ml-3 text-yellow-400 font-bold text-2xl group-hover:scale-125 inline-block transition-transform duration-300">Rs 40,000/-</span>
                </p>
              </div>
            </div>
          </div>

        </div>

        {/* Decorative Divider */}
        <div className="flex items-center justify-center my-16">
          <div className="h-px w-full bg-gradient-to-r from-transparent via-gray-700 to-transparent"></div>
        </div>

        {/* Services Section */}
        <div className="mt-20">
          <h2 className="text-4xl md:text-5xl font-extrabold text-center mb-12">
            TNS Trading App Services
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            
            {/* NSE Card */}
            <div className="group relative border border-gray-700 hover:border-yellow-400 rounded-2xl p-8 transition-all duration-300 hover:-translate-y-4 hover:shadow-[0_20px_50px_rgba(250,204,21,0.3)] cursor-pointer">
              
              {/* Background Effect */}
              <div className="absolute inset-0 bg-gradient-to-br from-gray-900 to-gray-800 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-2xl"></div>
              
              {/* Content */}
              <div className="relative z-10 text-center space-y-6">
                {/* Icon */}
                <div className="flex justify-center">
                  <svg className="w-20 h-20 text-yellow-400 group-hover:scale-110 transition-transform duration-300" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M3 13h2v-2H3v2zm0 4h2v-2H3v2zm0-8h2V7H3v2zm4 4h14v-2H7v2zm0 4h14v-2H7v2zM7 7v2h14V7H7z"/>
                  </svg>
                </div>
                
                {/* Title */}
                <h3 className="text-3xl font-bold text-yellow-400 group-hover:text-yellow-300 transition-colors duration-300">
                  NSE
                </h3>
                
                {/* Description */}
                <p className="text-gray-400 group-hover:text-gray-200 transition-colors duration-300">
                  A leading hub for equities and derivatives trading.
                </p>
              </div>
            </div>

            {/* MCX Card */}
            <div className="group relative border border-gray-700 hover:border-yellow-400 rounded-2xl p-8 transition-all duration-300 hover:-translate-y-4 hover:shadow-[0_20px_50px_rgba(250,204,21,0.3)] cursor-pointer">
              
              {/* Background Effect */}
              <div className="absolute inset-0 bg-gradient-to-br from-gray-900 to-gray-800 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-2xl"></div>
              
              {/* Content */}
              <div className="relative z-10 text-center space-y-6">
                {/* Icon */}
                <div className="flex justify-center">
                  <svg className="w-20 h-20 text-yellow-400 group-hover:scale-110 transition-transform duration-300" fill="currentColor" viewBox="0 0 24 24">
                    <circle cx="12" cy="12" r="3"/>
                    <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8z"/>
                    <path d="M12 6c-3.31 0-6 2.69-6 6h2c0-2.21 1.79-4 4-4s4 1.79 4 4-1.79 4-4 4v2c3.31 0 6-2.69 6-6s-2.69-6-6-6z"/>
                  </svg>
                </div>
                
                {/* Title */}
                <h3 className="text-3xl font-bold text-yellow-400 group-hover:text-yellow-300 transition-colors duration-300">
                  MCX
                </h3>
                
                {/* Description */}
                <p className="text-gray-400 group-hover:text-gray-200 transition-colors duration-300">
                  Expertise in metals and agricultural commodity derivatives trading.
                </p>
              </div>
            </div>

            {/* OPT Card */}
            <div className="group relative border border-gray-700 hover:border-yellow-400 rounded-2xl p-8 transition-all duration-300 hover:-translate-y-4 hover:shadow-[0_20px_50px_rgba(250,204,21,0.3)] cursor-pointer">
              
              {/* Background Effect */}
              <div className="absolute inset-0 bg-gradient-to-br from-gray-900 to-gray-800 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-2xl"></div>
              
              {/* Content */}
              <div className="relative z-10 text-center space-y-6">
                {/* Icon */}
                <div className="flex justify-center">
                  <svg className="w-20 h-20 text-yellow-400 group-hover:scale-110 transition-transform duration-300" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"/>
                  </svg>
                </div>
                
                {/* Title */}
                <h3 className="text-3xl font-bold text-yellow-400 group-hover:text-yellow-300 transition-colors duration-300">
                  OPT
                </h3>
                
                {/* Description */}
                <p className="text-gray-400 group-hover:text-gray-200 transition-colors duration-300">
                  Leading in agricultural commodity trading within India.
                </p>
              </div>
            </div>

          </div>
        </div>

      </div>
    </section>
  );
}