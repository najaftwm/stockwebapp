import { MessageCircle, FileText, Edit, DollarSign, TrendingUp } from "lucide-react";
import LoginForm from "../pages/LoginPage"; // Adjust the import path based on your project structure

export default function ContactSection() {
  const whatsappNumber = "917208320766";
  const whatsappMessage = "Hi, I want to open an account with TNS Trading App";

  const handleWhatsAppClick = () => {
    const url = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(whatsappMessage)}`;
    window.open(url, "_blank");
  };

 

  return (
    <section id="contact" className="bg-black text-white py-12 sm:py-20">
      <div className="container mx-auto px-4 sm:px-6">
     

        {/* Form Section */}
        <div className="mb-12 sm:mb-20  mx-auto">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-center mb-8 sm:mb-12">
            Sign Up Now
          </h2>
          <div className="bg-gray-900 p-6 sm:p-8 rounded-lg shadow-lg">
            <LoginForm /> {/* Imported form from LoginPage.jsx */}
          </div>
        </div>

      </div>
    </section>
  );
}