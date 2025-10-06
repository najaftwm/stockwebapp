import React, { useState } from "react";

export default function LoginPage() {
  const [passwordVisible, setPasswordVisible] = useState(false);
  const togglePassword = () => setPasswordVisible(!passwordVisible);

  return (
    <div className="flex min-h-screen bg-[#0d0d0d] flex-col md:flex-row">
      {/* LEFT PANEL */}
      <div className="flex-1 p-12 md:p-16">
        <h1 className="text-[#FACC15] text-3xl font-bold">TRADESTOCKO</h1>
        <h2 className="text-white text-2xl mt-6 font-bold">
          Trade With Zero Brokerage & 500X Margin
        </h2>
        <p className="text-[#b0b0b0] mb-8">Indian Stocks (F&O), Indian Commodities</p>

        {/* FEATURES */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          {/* Feature Card */}
          {[
            { text: "ZERO BROKERAGE", icon: "M7 12l3 3 6-6" },
            { text: "24/7 Deposit and Withdrawal", icon: "M12 3v18m0 0l-6-6m6 6l6-6" },
            { text: "Upto 500x MARGIN", icon: "M4 20V4m0 16h16M8 14l3-3 4 4 5-5" },
            { text: "Indian Stocks & Commodities", icon: "M3 12h18M12 3a15 15 0 010 18M12 3a15 15 0 000 18" },
          ].map((feature, i) => (
            <div
              key={i}
              className="bg-[#1a1a1a] rounded-xl text-center p-6 flex flex-col items-center justify-center transition-transform duration-300 hover:-translate-y-1 hover:border-2 hover:border-[#FACC15] hover:shadow-[0_0_15px_#f4c508]"
            >
              <div className="mb-3">
                <svg
                  width="55"
                  height="55"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="white"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d={feature.icon} />
                  {feature.text === "ZERO BROKERAGE" && (
                    <circle cx="12" cy="12" r="10" stroke="white" strokeWidth="2" />
                  )}
                  {feature.text === "Indian Stocks & Commodities" && (
                    <circle cx="12" cy="12" r="9" stroke="white" strokeWidth="2" />
                  )}
                </svg>
              </div>
              <p className="text-white font-medium text-base">{feature.text}</p>
            </div>
          ))}
        </div>

        {/* GET IN TOUCH SECTION */}
        <div className="mt-12">
          <h3 className="text-[#FACC15] text-2xl sm:text-2xl mb-6">Get in touch</h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {/* Email Card */}
            <div className="bg-[#1a1a1a] rounded-xl p-4 flex items-center gap-4 cursor-pointer transition-transform duration-300 hover:-translate-y-1 hover:border-2 hover:border-[#FACC15] hover:shadow-[0_0_15px_#f4c508]">
              <div className="w-14 h-14 bg-[#FACC15] rounded-full flex items-center justify-center transition-transform duration-300 hover:scale-110 hover:shadow-[0_0_12px_#f4c508]">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="white"
                  strokeWidth="2"
                >
                  <rect x="3" y="5" width="18" height="14" rx="2" ry="2" />
                  <polyline points="3,7 12,13 21,7" />
                </svg>
              </div>
              <div>
                <p className="text-white font-semibold text-base">Email us</p>
                <p className="text-[#b0b0b0] text-sm">info@markettrade.live</p>
              </div>
            </div>

            {/* WhatsApp Card */}
            <div className="bg-[#1a1a1a] rounded-xl p-4 flex items-center gap-4 cursor-pointer transition-transform duration-300 hover:-translate-y-1 hover:border-2 hover:border-[#FACC15] hover:shadow-[0_0_15px_#f4c508]">
              <div className="w-14 h-14 bg-[#FACC15] rounded-full flex items-center justify-center transition-transform duration-300 hover:scale-110 hover:shadow-[0_0_12px_#f4c508]">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="white"
                  strokeWidth="2"
                >
                  <path
                    d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 
      19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.63A2 2 0 0 1 
      4.11 2h3a2 2 0 0 1 2 1.72c.12.83.37 1.64.72 2.4a2 2 0 0 1-.45 
      2.18l-1.27 1.27a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.18-.45 
      11.36 11.36 0 0 0 2.4.72A2 2 0 0 1 22 16.92z"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </div>
              <div>
                <p className="text-white font-semibold text-base">WhatsApp us</p>
                <p className="text-[#b0b0b0] text-sm">+91 99424 89355</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* RIGHT PANEL */}
      <div className="flex-1 bg-[#0d0d0d] flex flex-col items-center justify-center p-12 md:p-16 border-l border-[#222] mt-0 md:mt-0">
        <div className="text-center mb-8">
          <h2 className="text-[#FACC15] text-2xl font-medium text-center mb-4">
            Create Account
          </h2>
        </div>

        <form className="w-full max-w-2xl flex flex-col gap-4" onSubmit={(e) => e.preventDefault()}>
          {/* Username */}
          <label className="text-sm text-white">Username</label>
          <input
            type="text"
            placeholder="Enter your username"
            className="bg-transparent border-2 border-[#FACC15] rounded-md p-3 text-white text-sm w-full"
          />

          {/* Email */}
          <label className="text-sm text-white">Email</label>
          <input
            type="email"
            placeholder="Enter your email"
            className="bg-transparent border-2 border-[#FACC15] rounded-md p-3 text-white text-sm w-full"
          />

          {/* Phone + OTP */}
          <label className="text-sm text-white">Phone Number</label>
          <div className="flex gap-2 mb-4">
            <span className="text-sm text-white flex items-center">🇮🇳 +91</span>
            <input
              type="tel"
              placeholder="Enter phone number"
              maxLength="10"
              pattern="\d*"
              className="bg-transparent border-2 border-[#FACC15] rounded-md p-3 text-white text-sm flex-1"
            />
            <button
              type="button"
              className="cursor-pointer bg-[#FACC15] text-black font-semibold px-4 py-2 rounded-md hover:bg-yellow-400 transform transition hover:scale-105 active:scale-95"
            >
              Generate OTP
            </button>
          </div>

          <div className="flex gap-2 mb-4">
            <input
              type="text"
              placeholder="Enter OTP"
              maxLength="6"
              className="bg-transparent border-2 border-[#FACC15] rounded-md p-3 text-white text-sm flex-1"
            />
            <button
              type="button"
              className="cursor-pointer bg-[#25d366] text-black font-semibold px-4 py-2 rounded-md hover:bg-green-600 transform transition hover:scale-105 active:scale-95"
            >
              Verify
            </button>
          </div>

          {/* Preferred Language */}
          <label className="text-sm text-white">Preferred Language</label>
          <select className="bg-transparent border-2 border-[#FACC15] rounded-md p-3 text-white text-sm w-full">
            <option className="text-black">Select Language</option>
            <option className="text-black">English</option>
            <option className="text-black">Hindi</option>
            <option className="text-black">Tamil</option>
            <option className="text-black">Marathi</option>
            <option className="text-black">Telugu</option>
          </select>

          {/* WhatsApp Number */}
          <label className="text-sm text-white">WhatsApp Number</label>
          <input
            type="tel"
            placeholder="Enter WhatsApp number"
            maxLength="10"
            pattern="\d*"
            className="bg-transparent border-2 border-[#FACC15] rounded-md p-3 text-white text-sm w-full"
          />

          {/* Password */}
          <label className="text-sm text-white">Password</label>
          <div className="relative">
            <input
              type={passwordVisible ? "text" : "password"}
              placeholder="Password"
              className="bg-transparent border-2 border-[#FACC15] rounded-md p-3 text-white text-sm w-full"
            />
            <span
              className="absolute right-3 top-1/2 -translate-y-1/2 cursor-pointer"
              onClick={togglePassword}
              role="button"
              tabIndex="0"
            >
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
                <path
                  d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8S1 12 1 12z"
                  stroke="orange"
                  strokeWidth="2"
                />
                <circle cx="12" cy="12" r="3" stroke="orange" strokeWidth="2" />
              </svg>
            </span>
          </div>

          {/* Confirm Password */}
          <label className="text-sm text-white">Confirm Password</label>
          <div className="relative">
            <input
              type={passwordVisible ? "text" : "password"}
              placeholder="Confirm Password"
              className="bg-transparent border-2 border-[#FACC15] rounded-md p-3 text-white text-sm w-full"
            />
            <span
              className="absolute right-3 top-1/2 -translate-y-1/2 cursor-pointer"
              onClick={togglePassword}
              role="button"
              tabIndex="0"
            >
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
                <path
                  d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8S1 12 1 12z"
                  stroke="orange"
                  strokeWidth="2"
                />
                <circle cx="12" cy="12" r="3" stroke="orange" strokeWidth="2" />
              </svg>
            </span>
          </div>

          <button className="cursor-pointer bg-[#FACC15] text-black font-bold py-3 rounded-md mt-2 hover:bg-yellow-400 transition">
            Sign Up
          </button>
        </form>
      </div>
    </div>
  );
}