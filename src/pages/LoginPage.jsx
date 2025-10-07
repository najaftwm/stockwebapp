import React, { useState } from "react";
import axios from "axios";

export default function LoginPage() {
  const [passwordVisible, setPasswordVisible] = useState(false);
  const [phone, setPhone] = useState("");
  const [otp, setOtp] = useState("");
  const [verificationId, setVerificationId] = useState(null);
  const [otpSent, setOtpSent] = useState(false);
  const [otpVerified, setOtpVerified] = useState(false);
  const [loading, setLoading] = useState(false);

  const togglePassword = () => setPasswordVisible(!passwordVisible);

  // 🔐 Auth Info (keep safe in production!)
  const AUTH_TOKEN = "eyJhbGciOiJIUzUxMiJ9.eyJzdWIiOiJDLTc2OTU0MUI3QjY3QzQ5MSIsImlhdCI6MTc1OTcyNDI0NywiZXhwIjoxOTE3NDA0MjQ3fQ.PuwWxKPkSqhjFXSKPQmXX7kU40BPCXQLqM6PLWNP_p-iq6PdYSEJn--uOyB4vdY2Dr89NrtuMcU-WsI5ih5NoA";
  const CUSTOMER_ID = "C-769541B7B67C491";

  // 📲 Send OTP
  const handleSendOtp = async () => {
    if (phone.length !== 10) {
      alert("Please enter a valid 10-digit phone number.");
      return;
    }

    setLoading(true);
    try {
      const response = await axios.post(
        "https://cpaas.messagecentral.com/verification/v3/send",
        null,
        {
          params: {
            countryCode: "91",
            flowType: "SMS",
            mobileNumber: phone,
            customerId: CUSTOMER_ID,
          },
          headers: {
            authToken: AUTH_TOKEN,
          },
        }
      );

      const id = response.data?.data?.verificationId;
      if (id) {
        setVerificationId(id);
        setOtpSent(true);
        alert("OTP sent successfully!");
      } else {
        alert("Failed to send OTP.");
      }
    } catch (error) {
      console.error("Send OTP error:", error);
      alert("Error sending OTP.");
    } finally {
      setLoading(false);
    }
  };

  // ✅ Verify OTP
  const handleVerifyOtp = async () => {
    if (!verificationId || otp.length < 4) {
      alert("Please enter a valid OTP.");
      return;
    }

    setLoading(true);
    try {
      const response = await axios.get(
        "https://cpaas.messagecentral.com/verification/v3/validateOtp",
        {
          params: {
            countryCode: "91",
            mobileNumber: phone,
            verificationId,
            customerId: CUSTOMER_ID,
            code: otp,
          },
          headers: {
            authToken: AUTH_TOKEN,
          },
        }
      );

      const status = response.data?.data?.verificationStatus;
      if (status === "VERIFICATION_COMPLETED") {
        setOtpVerified(true);
        alert("OTP verified successfully!");
      } else {
        alert("OTP verification failed.");
      }
    } catch (error) {
      console.error("Verify OTP error:", error);
      alert("Error verifying OTP.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="flex min-h-screen bg-[#0d0d0d] flex-col md:flex-row">
      {/* LEFT PANEL */}
      <div className="flex-1 p-12 md:p-16">
        <h1 className="text-[#FACC15] text-3xl font-bold">TRADESTOCKO</h1>
        <h2 className="text-white text-2xl mt-6 font-bold">
          Trade With Zero Brokerage & 500X Margin
        </h2>
        <p className="text-[#b0b0b0] mb-8">Indian Stocks (F&O), Indian Commodities</p>
        {/* ... Feature Cards and Get in Touch ... */}
      </div>

      {/* RIGHT PANEL */}
      <div className="flex-1 bg-[#0d0d0d] flex flex-col items-center justify-center p-12 md:p-16 border-l border-[#222] mt-0 md:mt-0">
        <div className="text-center mb-8">
          <h2 className="text-[#FACC15] text-2xl font-medium text-center mb-4">
            Create Account
          </h2>
        </div>

        <form className="w-full max-w-2xl flex flex-col gap-4" onSubmit={(e) => e.preventDefault()}>
          <label className="text-sm text-white">Username</label>
          <input type="text" placeholder="Enter your username"
            className="bg-transparent border-2 border-[#FACC15] rounded-md p-3 text-white text-sm w-full" />

          <label className="text-sm text-white">Email</label>
          <input type="email" placeholder="Enter your email"
            className="bg-transparent border-2 border-[#FACC15] rounded-md p-3 text-white text-sm w-full" />

          {/* PHONE + OTP */}
          <label className="text-sm text-white">Phone Number</label>
          <div className="flex gap-2 mb-2">
            <span className="text-sm text-white flex items-center">🇮🇳 +91</span>
            <input
              type="tel"
              maxLength="10"
              pattern="\d*"
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
              placeholder="Enter phone number"
              className="bg-transparent border-2 border-[#FACC15] rounded-md p-3 text-white text-sm flex-1"
            />
            <button
              type="button"
              onClick={handleSendOtp}
              disabled={loading}
              className="cursor-pointer bg-[#FACC15] text-black font-semibold px-4 py-2 rounded-md hover:bg-yellow-400 transform transition hover:scale-105 active:scale-95"
            >
              {loading ? "Sending..." : "Generate OTP"}
            </button>
          </div>

          {/* OTP Input */}
          <div className="flex gap-2 mb-4">
            <input
              type="text"
              placeholder="Enter OTP"
              maxLength="6"
              value={otp}
              onChange={(e) => setOtp(e.target.value)}
              className="bg-transparent border-2 border-[#FACC15] rounded-md p-3 text-white text-sm flex-1"
            />
            <button
              type="button"
              onClick={handleVerifyOtp}
              disabled={!otpSent || loading}
              className="cursor-pointer bg-[#25d366] text-black font-semibold px-4 py-2 rounded-md hover:bg-green-600 transform transition hover:scale-105 active:scale-95"
            >
              {loading ? "Verifying..." : "Verify"}
            </button>
          </div>

          {otpVerified && (
            <p className="text-green-400 text-sm font-semibold mt-2">
              ✅ OTP Verified! You can now sign up.
            </p>
          )}

          {/* Language */}
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
            >
              👁
            </span>
          </div>

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
            >
              👁
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
