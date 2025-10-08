import React, { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import axios from "axios";
import { toast } from "react-toastify";

export default function OtpVerification() {
  const location = useLocation();
  const navigate = useNavigate();

  const phone = location.state?.phone || "";
  const [otp, setOtp] = useState("");
  const [verificationId, setVerificationId] = useState(null);
  const [loading, setLoading] = useState(false);
  const [verified, setVerified] = useState(false);

  const AUTH_TOKEN =
    "eyJhbGciOiJIUzUxMiJ9.eyJzdWIiOiJDLTc2OTU0MUI3QjY3QzQ5MSIsImlhdCI6MTc1OTcyNDI0NywiZXhwIjoxOTE3NDA0MjQ3fQ.PuwWxKPkSqhjFXSKPQmXX7kU40BPCXQLqM6PLWNP_p-iq6PdYSEJn--uOyB4vdY2Dr89NrtuMcU-WsI5ih5NoA";
  const CUSTOMER_ID = "C-769541B7B67C491";

  // Send OTP when component mounts
  useEffect(() => {
    if (!phone) {
      toast.error("Phone number missing. Redirecting...");
      navigate("/");
    } else {
      sendOtp();
    }
  }, []);

  const sendOtp = async () => {
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
        toast.success("OTP sent successfully!");
      } else {
        toast.error("Failed to send OTP.");
      }
    } catch (error) {
      toast.error("Error sending OTP.");
      console.error("Send OTP error:", error);
    } finally {
      setLoading(false);
    }
  };

  const verifyOtp = async () => {
    if (!verificationId || otp.length < 4) {
      toast.error("Please enter a valid OTP.");
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
        toast.success("OTP verified! Account created.");
        setVerified(true);
      } else {
        toast.error("OTP verification failed.");
      }
    } catch (error) {
      toast.error("Error verifying OTP.");
      console.error("Verify OTP error:", error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-[#0d0d0d] p-6">
      <div className="bg-[#1c1c1c] p-8 rounded-md shadow-md w-full max-w-md border border-[#333]">
        <h2 className="text-[#FACC15] text-2xl font-semibold mb-4 text-center">
          Verify OTP
        </h2>
        <p className="text-white mb-4 text-sm text-center">
          OTP sent to +91 {phone}
        </p>

        <input
          type="text"
          maxLength="6"
          value={otp}
          onChange={(e) => setOtp(e.target.value)}
          placeholder="Enter OTP"
          className="w-full p-3 rounded-md border border-[#FACC15] bg-transparent text-white mb-4"
        />

        <button
          onClick={verifyOtp}
          disabled={loading}
          className="w-full bg-[#25d366] text-black font-bold py-3 rounded-md hover:bg-green-600 transition"
        >
          {loading ? "Verifying..." : "Verify OTP"}
        </button>

        <button
          onClick={sendOtp}
          disabled={loading}
          className="w-full mt-3 bg-[#FACC15] text-black font-semibold py-2 rounded-md hover:bg-yellow-400 transition"
        >
          {loading ? "Resending..." : "Resend OTP"}
        </button>

        {verified && (
          <p className="text-green-400 text-center mt-4 font-medium text-sm">
            ✅ OTP Verified Successfully!
          </p>
        )}
      </div>
    </div>
  );
}
