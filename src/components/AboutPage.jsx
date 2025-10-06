import { Phone } from "lucide-react";

export default function AboutPage() {
  return (
    <section id="about" className="bg-black text-white min-h-screen flex flex-col justify-center py-16">
      <div className="container mx-auto px-6">
        
        {/* Hero Image */}
        <div className="flex justify-center mb-12">
          <div className="w-full max-w-md h-32 bg-gradient-to-r from-gray-800 to-gray-700 rounded-lg overflow-hidden">
            <img
              src="./chart.jpg"
              alt="Trading Chart"
              className="w-full h-full object-cover opacity-80"
            />
          </div>
        </div>

        {/* Title */}
        <div className="text-center mb-8">
          <h1 className="text-4xl md:text-5xl font-extrabold">
            About <span className="text-yellow-400">tradestocko App</span>
          </h1>
        </div>

        {/* Description */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <p className="text-gray-300 text-lg leading-relaxed">
            Welcome to the <span className="text-yellow-400 font-semibold">Best TNS Trading Platform in India</span>, where we empower investors to easily customize their portfolios. Our platform provides easy access to a wide range of markets, including stocks, cryptocurrencies, commodities and indices.
          </p>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
          
          {/* Stat 1 */}
          <div className="border border-gray-700 rounded-lg p-8 text-center transform transition-transform duration-300 hover:scale-105 hover:border-yellow-400">
            <h2 className="text-5xl font-bold mb-3">5,000</h2>
            <p className="text-yellow-400 font-semibold text-lg">Trusted Traders</p>
          </div>

          {/* Stat 2 */}
          <div className="border border-gray-700 rounded-lg p-8 text-center transform transition-transform duration-300 hover:scale-105 hover:border-yellow-400">
            <h2 className="text-5xl font-bold mb-3">10cr.</h2>
            <p className="text-yellow-400 font-semibold text-lg">Brokerage Saved</p>
          </div>

          {/* Stat 3 */}
          <div className="border border-gray-700 rounded-lg p-8 text-center transform transition-transform duration-300 hover:scale-105 hover:border-yellow-400">
            <h2 className="text-5xl font-bold mb-3">10</h2>
            <p className="text-yellow-400 font-semibold text-lg">Years of Legacy</p>
          </div>

          {/* Stat 4 */}
          <div className="border border-gray-700 rounded-lg p-8 text-center transform transition-transform duration-300 hover:scale-105 hover:border-yellow-400">
            <h2 className="text-5xl font-bold mb-3">24/7</h2>
            <p className="text-yellow-400 font-semibold text-lg">Instant Support</p>
          </div>

        </div>
      </div>

      {/* Floating Call Button */}
      <div className="fixed bottom-8 left-8 z-50">
        <button className="bg-green-500 hover:bg-green-600 text-white rounded-full p-4 shadow-lg transform transition-transform duration-300 hover:scale-110">
         
        </button>
      </div>
    </section>
  );
}