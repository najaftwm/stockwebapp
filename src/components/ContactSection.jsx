import { MessageCircle, FileText, Edit, DollarSign, TrendingUp } from "lucide-react";

export default function ContactSection() {
  
  const whatsappNumber = "917208320766";
  const whatsappMessage = "Hi, I want to open an account with TNS Trading App";

  const handleWhatsAppClick = () => {
    const url = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(whatsappMessage)}`;
    window.open(url, '_blank');
  };

  const steps = [
    {
      number: "Step 1",
      icon: <FileText className="w-12 h-12" />,
      title: "Register with TNS",
      description: "Sign up for an account on the TNS trading platform."
    },
    {
      number: "Step 2",
      icon: <Edit className="w-12 h-12" />,
      title: "Minimal Documents Needed",
      description: "Submit the required documents to verify your identity"
    },
    {
      number: "Step 3",
      icon: <DollarSign className="w-12 h-12" />,
      title: "Deposit Funds",
      description: "Add money to your trading account"
    },
    {
      number: "Step 4",
      icon: <TrendingUp className="w-12 h-12" />,
      title: "Start Trading",
      description: "Begin executing trades on the platform"
    }
  ];

  return (
    <section id="contact" className="bg-black text-white py-20">
      <div className="container mx-auto px-6">
        
        {/* Support Section */}
        <div className="text-center mb-20">
          <h2 className="text-4xl md:text-5xl font-extrabold mb-6">
            SUPPORT WHENEVER YOU NEED IT
          </h2>
          
          <p className="text-gray-400 text-lg max-w-3xl mx-auto mb-8">
            Our 24×7 customer support ensures you're never alone,
            <br />
            and your deposits and withdrawals are always smooth and efficient.
          </p>

          {/* WhatsApp Button */}
          <button
            onClick={handleWhatsAppClick}
            className="group relative inline-flex items-center gap-3 bg-yellow-400 hover:bg-yellow-500 text-black font-bold text-lg px-8 py-4 rounded-full transition-all duration-300 hover:scale-110 hover:shadow-[0_0_30px_rgba(250,204,21,0.5)]"
          >
            <MessageCircle className="w-6 h-6 group-hover:rotate-12 transition-transform duration-300" />
            <span>Whatsapp Now</span>
            
            {/* Animated Ring */}
            <span className="absolute inset-0 rounded-full border-2 border-yellow-400 animate-ping opacity-75"></span>
          </button>
        </div>

        {/* Decorative Divider */}
        <div className="flex items-center justify-center my-16">
          <div className="h-px w-full bg-gradient-to-r from-transparent via-gray-700 to-transparent"></div>
        </div>

        {/* Steps Section */}
        <div className="mt-20">
          <h2 className="text-3xl md:text-4xl font-extrabold text-center mb-16">
            Open Account in Just 1 Minute and Start Trading
          </h2>

          {/* Steps Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-7xl mx-auto">
            {steps.map((step, index) => (
              <div
                key={index}
                className="group relative flex flex-col items-center text-center"
              >
                {/* Circle with Icon */}
                <div className="relative mb-6">
                  {/* Step Badge */}
                  <div className="absolute -top-3 -right-3 bg-green-500 text-white text-xs font-bold px-3 py-1 rounded-full z-10 group-hover:scale-110 transition-transform duration-300">
                    {step.number}
                  </div>

                  {/* Main Circle */}
                  <div className="relative w-32 h-32 bg-gray-800 rounded-full flex items-center justify-center border-4 border-gray-700 group-hover:border-yellow-400 group-hover:bg-gray-900 transition-all duration-300 group-hover:scale-110 group-hover:shadow-[0_0_30px_rgba(250,204,21,0.3)]">
                    <div className="text-white group-hover:text-yellow-400 transition-colors duration-300">
                      {step.icon}
                    </div>
                  </div>

                  {/* Connecting Line (except for last item) */}
                  {index < steps.length - 1 && (
                    <div className="hidden lg:block absolute top-1/2 left-full w-full h-1 bg-gradient-to-r from-gray-700 to-transparent transform -translate-y-1/2 group-hover:from-yellow-400 transition-colors duration-300"></div>
                  )}
                </div>

                {/* Title */}
                <h3 className="text-xl font-bold mb-3 group-hover:text-yellow-400 transition-colors duration-300">
                  {step.title}
                </h3>

                {/* Description */}
                <p className="text-gray-400 text-sm group-hover:text-gray-200 transition-colors duration-300">
                  {step.description}
                </p>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}