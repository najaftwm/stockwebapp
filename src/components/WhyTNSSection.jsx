import { CheckCircle } from "lucide-react";

export default function WhyTNSSection() {
  const features = [
    {
      title: "500x Leverage",
      description: "You can start share trading with low margin and get 500 leverage for day trading"
    },
    {
      title: "Lowest Brokerage",
      description: "We are providing lowest brokerage in the industry"
    },
    {
      title: "Instant Withdrawal",
      description: "You will get the instant withdrawal"
    },
    {
      title: "Easily Manageable Account",
      description: "We provide a hassle-free trading app which is easy to use"
    },
    {
      title: "24x7 Call Support",
      description: "We are available 24x7 for support during trading or any transaction"
    },
    {
      title: "Tax Free Trading",
      description: "Your trades are tax free with us and no ICTI charges apply"
    }
  ];

  return (
    <section className="bg-black text-white py-20">
      <div className="container mx-auto px-6">
        
        {/* Decorative Top Line */}
        <div className="flex items-center justify-center mb-8">
          <div className="h-1 w-20 bg-gradient-to-r from-transparent via-yellow-400 to-transparent"></div>
          <div className="h-1 w-2 bg-yellow-400 mx-2 rounded-full"></div>
          <div className="h-1 w-20 bg-gradient-to-r from-transparent via-yellow-400 to-transparent"></div>
        </div>

        {/* Title */}
        <div className="text-center mb-6">
          <h2 className="text-4xl md:text-5xl font-extrabold">
            Why TNS Trading App ?
          </h2>
        </div>

        {/* Subtitle */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <p className="text-gray-400 text-lg leading-relaxed">
            Empowering all traders, TNS Trading App offers a comprehensive platform with professional tools, real-time data, and powerful analytics, all in a user-friendly interface.
          </p>
        </div>

        {/* Center Image */}
        <div className="flex justify-center mb-16">
          <div className="w-full max-w-sm h-70 bg-gradient-to-r from-gray-800 to-gray-700 rounded-lg overflow-hidden shadow-2xl">
            <img
              src="./chart.jpg"
              alt="Trading Chart"
              className="w-full h-full object-cover opacity-80"
            />
          </div>
        </div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {features.map((feature, index) => (
            <div
              key={index}
              className="group relative border border-transparent hover:border-yellow-400 rounded-xl p-6 transition-all duration-300 hover:scale-105 hover:shadow-[0_0_30px_rgba(250,204,21,0.3)] cursor-pointer"
            >
              {/* Invisible Card Background */}
              <div className="absolute inset-0 bg-gray-900 opacity-0 group-hover:opacity-100 rounded-xl transition-opacity duration-300"></div>
              
              {/* Content */}
              <div className="relative z-10 flex flex-col items-center text-center space-y-4">
                
                {/* Circle Icon */}
                <div className="relative w-16 h-16 flex items-center justify-center">
                  {/* Outer Ring - Fills on Hover */}
                  <div className="absolute inset-0 rounded-full border-4 border-yellow-400 group-hover:bg-yellow-400 transition-all duration-300"></div>
                  
                  {/* Inner Check Icon */}
                  <CheckCircle className="w-8 h-8 text-yellow-400 group-hover:text-black transition-colors duration-300 relative z-10" />
                </div>

                {/* Title */}
                <h3 className="text-xl font-bold text-white group-hover:text-yellow-400 transition-colors duration-300">
                  {feature.title}
                </h3>

                {/* Description */}
                <p className="text-gray-400 text-sm leading-relaxed group-hover:text-gray-200 transition-colors duration-300">
                  {feature.description}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Decorative Bottom Line */}
        <div className="flex items-center justify-center mt-16">
          <div className="h-1 w-20 bg-gradient-to-r from-transparent via-yellow-400 to-transparent"></div>
          <div className="h-1 w-2 bg-yellow-400 mx-2 rounded-full"></div>
          <div className="h-1 w-20 bg-gradient-to-r from-transparent via-yellow-400 to-transparent"></div>
        </div>
      </div>
    </section>
  );
}