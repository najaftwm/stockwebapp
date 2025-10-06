import React, { useState } from "react";
import axios from "axios";

export default function LoginPage() {
  const [phone, setPhone] = useState("");
  const [otp, setOtp] = useState("");
  const [otpSent, setOtpSent] = useState(false);
  const [verified, setVerified] = useState(false);

  const sendOtp = async () => {
    try {
      const res = await axios.post("http://localhost:5000/send-otp", { phone });
      if (res.data.success) {
        setOtpSent(true);
        alert("OTP sent successfully!");
      }
    } catch (err) {
      alert("Error sending OTP: " + err.message);
    }
  };

  const verifyOtp = async () => {
    try {
      const res = await axios.post("http://localhost:5000/verify-otp", { phone, otp });
      if (res.data.success) {
        setVerified(true);
        alert("OTP verified successfully!");
      } else {
        alert("Invalid OTP, try again.");
      }
    } catch (err) {
      alert("Error verifying OTP: " + err.message);
    }
  };

  return (
    <div className="flex flex-col items-center p-6">
      <input
        type="tel"
        placeholder="Enter phone number"
        value={phone}
        onChange={(e) => setPhone(e.target.value)}
        className="border p-2 rounded-md"
      />
      <button
        onClick={sendOtp}
        className="bg-yellow-400 px-4 py-2 mt-2 rounded-md"
      >
        Generate OTP
      </button>

      {otpSent && (
        <>
          <input
            type="text"
            placeholder="Enter OTP"
            value={otp}
            onChange={(e) => setOtp(e.target.value)}
            className="border p-2 mt-4 rounded-md"
          />
          <button
            onClick={verifyOtp}
            className="bg-green-500 px-4 py-2 mt-2 rounded-md"
          >
            Verify OTP
          </button>
        </>
      )}

      {verified && <p className="text-green-400 mt-4">Phone verified ✅</p>}
    </div>
  );
}
