import React, { useState } from "react";
import axios from "axios";
import { toast } from "react-toastify";

const LoginPage = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    state: "",
  });
  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [showOTPModal, setShowOTPModal] = useState(false);
  const [otp, setOtp] = useState("");
  const [verificationId, setVerificationId] = useState("");
  const [otpError, setOtpError] = useState("");
  const [submitError, setSubmitError] = useState("");
  const [successMessage, setSuccessMessage] = useState("");
  const [otpSentMessage, setOtpSentMessage] = useState(""); // New state for OTP sent message

  const AUTH_TOKEN =
    "eyJhbGciOiJIUzUxMiJ9.eyJzdWIiOiJDLTc2OTU0MUI3QjY3QzQ5MSIsImlhdCI6MTc1OTcyNDI0NywiZXhwIjoxOTE3NDA0MjQ3fQ.PuwWxKPkSqhjFXSKPQmXX7kU40BPCXQLqM6PLWNP_p-iq6PdYSEJn--uOyB4vdY2Dr89NrtuMcU-WsI5ih5NoA";
  const CUSTOMER_ID = "C-769541B7B67C491";

  const phoneRegex = /^\d{10}$/;

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    if (errors[name]) {
      setErrors((prev) => ({ ...prev, [name]: "" }));
    }
    if (successMessage) {
      setSuccessMessage("");
    }
    if (otpSentMessage) {
      setOtpSentMessage(""); // Clear OTP sent message on input change
    }
  };

  const validateForm = () => {
    const newErrors = {};
    if (!formData.name.trim()) newErrors.name = "Name is required";
    if (!formData.email || !/\S+@\S+\.\S+/.test(formData.email))
      newErrors.email = "Valid email is required";
    if (!formData.phone || !phoneRegex.test(formData.phone))
      newErrors.phone = "Valid 10-digit Indian phone number is required";
    if (!formData.state.trim()) newErrors.state = "State is required";

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const sendOTP = async (phoneNumber) => {
    try {
      const url = "https://cpaas.messagecentral.com/verification/v3/send";
      const params = {
        countryCode: "91",
        flowType: "SMS",
        mobileNumber: phoneNumber,
        customerId: CUSTOMER_ID,
      };
      const response = await axios.post(url, null, {
        params,
        headers: {
          authToken: AUTH_TOKEN,
        },
      });

      const resp = response.data;
      const id = resp.data?.verificationId;

      if (id) {
        setVerificationId(id);
        setShowOTPModal(true);
        setSubmitError("");
        setOtpSentMessage("OTP sent to your phone number!"); // Set OTP sent message
        toast.success("OTP sent successfully");
      } else {
        setSubmitError("Failed to send OTP");
        toast.error("Failed to send OTP");
      }
    } catch (error) {
      setSubmitError("Failed to send OTP");
      toast.error("Failed to send OTP");
    }
  };

  const validateOTP = async (phoneNumber, verificationId, code) => {
    try {
      const response = await axios.get(
        "https://cpaas.messagecentral.com/verification/v3/validateOtp",
        {
          params: {
            countryCode: "91",
            mobileNumber: phoneNumber,
            verificationId: verificationId,
            customerId: CUSTOMER_ID,
            code: code,
          },
          headers: {
            authToken: AUTH_TOKEN,
          },
        }
      );

      const status = response.data?.data?.verificationStatus;

      if (
        response.data.responseCode === 200 &&
        status === "VERIFICATION_COMPLETED"
      ) {
        toast.success("OTP verified successfully!");
        // Send lead data
        await axios.post(
          "https://tnscrm.twmresearchalert.com/gateway/leadReg.php",
          {
            name: formData.name,
            phone: phoneNumber,
            email: formData.email,
            state: formData.state,
          }
        );
        toast.success("Lead submitted successfully!");
        setSuccessMessage("Successfully registered");
        setShowOTPModal(false);
        setOtp("");
        setOtpError("");
        setOtpSentMessage(""); // Clear OTP sent message
      } else {
        setOtpError("Invalid OTP. Please try again.");
        toast.error("OTP verification failed");
      }
    } catch (error) {
      setOtpError("Failed to validate OTP. Please try again.");
      toast.error("OTP validation error");
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!validateForm()) return;
    setIsSubmitting(true);
    await sendOTP(formData.phone);
    setIsSubmitting(false);
  };

  const handleOTPSubmit = (e) => {
    e.preventDefault();
    if (otp.length < 4) {
      setOtpError("OTP must be 4 digits");
      return;
    }
    setOtpError("");
    validateOTP(formData.phone, verificationId, otp);
  };

  return (
    <div  className="flex min-h-screen bg-[#0d0d0d] flex-col md:flex-row">
      {/* LEFT INFO PANEL */}
      <div className="flex-1 p-12 md:p-16">
        <h1 className="text-[#FACC15] text-3xl font-bold">TRADESTOCKO</h1>
        <h2 className="text-white text-2xl mt-6 font-bold">
          Trade With Zero Brokerage & 500X Margin
        </h2>
        <p className="text-[#b0b0b0] mb-8">
          Indian Stocks (F&O), Indian Commodities
        </p>

        {/* FEATURES */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
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
      </div>

      {/* FORM PANEL */}
      <div className="flex-1 bg-[#0d0d0d] flex flex-col items-center justify-center p-12 md:p-16 border-l border-[#222]">
        <div className="text-center mb-8 w-full max-w-md">
          <h2 className="text-[#FACC15] text-2xl font-medium mb-4">
            Create Account
          </h2>

          {submitError && (
            <p className="text-red-500 text-sm mb-4">{submitError}</p>
          )}

          {otpSentMessage && !successMessage && (
            <p className="text-green-400 text-sm mb-4">{otpSentMessage}</p>
          )}

          {successMessage ? (
            <p className="text-green-400 text-center text-xl font-semibold">
              {successMessage}
            </p>
          ) : (
            <>
              <form onSubmit={handleSubmit} className="flex flex-col gap-5 text-white">
                {/* Name */}
                <label className="text-sm">Name</label>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleInputChange}
                  disabled={isSubmitting}
                  placeholder="Enter your full name"
                  className={`bg-transparent border-2 rounded-md p-3 text-white text-sm w-full border-[#FACC15] focus:outline-none focus:ring-2 focus:ring-[#FACC15] ${
                    errors.name ? "border-red-500" : ""
                  }`}
                />
                {errors.name && (
                  <p className="text-red-500 text-xs -mt-3 mb-2">{errors.name}</p>
                )}

                {/* Email */}
                <label className="text-sm">Email</label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  disabled={isSubmitting}
                  placeholder="Enter your email"
                  className={`bg-transparent border-2 rounded-md p-3 text-white text-sm w-full border-[#FACC15] focus:outline-none focus:ring-2 focus:ring-[#FACC15] ${
                    errors.email ? "border-red-500" : ""
                  }`}
                />
                {errors.email && (
                  <p className="text-red-500 text-xs -mt-3 mb-2">{errors.email}</p>
                )}

                {/* Phone */}
                <label className="text-sm">Phone Number</label>
                <div className="flex gap-2 items-center">
                  <span className="text-white text-sm">🇮🇳 +91</span>
                  <input
                    type="tel"
                    name="phone"
                    maxLength="10"
                    pattern="\d*"
                    value={formData.phone}
                    onChange={handleInputChange}
                    disabled={isSubmitting}
                    placeholder="Enter 10-digit phone number"
                    className={`bg-transparent border-2 rounded-md p-3 text-white text-sm flex-1 border-[#FACC15] focus:outline-none focus:ring-2 focus:ring-[#FACC15] ${
                      errors.phone ? "border-red-500" : ""
                    }`}
                  />
                </div>
                {errors.phone && (
                  <p className="text-red-500 text-xs -mt-3 mb-2">{errors.phone}</p>
                )}

                {/* State */}
                <label className="text-sm">State</label>
                <input
                  type="text"
                  name="state"
                  value={formData.state}
                  onChange={handleInputChange}
                  disabled={isSubmitting}
                  placeholder="Enter your state"
                  className={`bg-transparent border-2 rounded-md p-3 text-white text-sm w-full border-[#FACC15] focus:outline-none focus:ring-2 focus:ring-[#FACC15] ${
                    errors.state ? "border-red-500" : ""
                  }`}
                />
                {errors.state && (
                  <p className="text-red-500 text-xs -mt-3 mb-2">{errors.state}</p>
                )}

                {/* Submit Button */}
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="bg-[#FACC15] text-black font-bold py-3 rounded-md hover:bg-yellow-400 transition disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  {isSubmitting ? "Sending OTP..." : "Send OTP"}
                </button>
              </form>

              {/* OTP Modal */}
              {showOTPModal && (
                <div className="mt-8 bg-[#111] p-6 rounded-md w-full max-w-sm mx-auto shadow-lg">
                  <h3 className="text-[#FACC15] font-semibold mb-3 text-center">
                    Enter OTP
                  </h3>
                  <form onSubmit={handleOTPSubmit} className="flex flex-col gap-4">
                    <input
                      type="text"
                      maxLength="6"
                      value={otp}
                      onChange={(e) => setOtp(e.target.value)}
                      placeholder="Enter the OTP"
                      className={`bg-transparent border-2 rounded-md p-3 text-white text-sm w-full border-[#FACC15] focus:outline-none focus:ring-2 focus:ring-[#FACC15] ${
                        otpError ? "border-red-500" : ""
                      }`}
                    />
                    {otpError && (
                      <p className="text-red-500 text-xs -mt-3">{otpError}</p>
                    )}

                    <button
                      type="submit"
                      className="bg-[#25d366] text-black font-semibold py-2 rounded-md hover:bg-green-600 transition"
                    >
                      Verify OTP
                    </button>
                    <button
                      type="button"
                      onClick={() => setShowOTPModal(false)}
                      className="mt-2 text-sm text-[#FACC15] underline hover:text-yellow-400"
                    >
                      Cancel
                    </button>
                  </form>
                </div>
              )}
            </>
          )}
        </div>
      </div>
    </div>
  );
};

export default LoginPage;