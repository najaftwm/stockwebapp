import React, { useState } from "react";
import '../LoginPage.css'

export default function LoginPage() {
  const [passwordVisible, setPasswordVisible] = useState(false);
  const [isSignup, setIsSignup] = useState(false);
  const togglePassword = () => setPasswordVisible(!passwordVisible);

  return (
    <div className="login-container">
      {/* LEFT PANEL */}
      <div className="left-panel">
        <h1 className="brand">TRADESTOCKO</h1>
        <h2 className="headline">Trade With Zero Brokerage & 500X Margin</h2>
        <p className="subtext">Indian Stocks (F&O), Indian Commodities</p>

        <div className="features">
          <div className="feature-card">
            <div className="icon">
              <svg width="40" height="40" viewBox="0 0 24 24" fill="none">
                <circle cx="12" cy="12" r="10" stroke="white" strokeWidth="2" />
                <path
                  d="M7 12l3 3 6-6"
                  stroke="white"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </div>
            <p>ZERO BROKERAGE</p>
          </div>

          <div className="feature-card">
            <div className="icon">
              <svg width="40" height="40" viewBox="0 0 24 24" fill="none">
                <path
                  d="M12 3v18m0 0l-6-6m6 6l6-6"
                  stroke="white"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </div>
            <p>24/7 Deposit and Withdrawal</p>
          </div>

          <div className="feature-card">
            <div className="icon">
              <svg width="40" height="40" viewBox="0 0 24 24" fill="none">
                <path
                  d="M4 20V4m0 16h16M8 14l3-3 4 4 5-5"
                  stroke="white"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </div>
            <p>Upto 500x MARGIN</p>
          </div>

          <div className="feature-card">
            <div className="icon">
              <svg width="40" height="40" viewBox="0 0 24 24" fill="none">
                <circle cx="12" cy="12" r="9" stroke="white" strokeWidth="2" />
                <path
                  d="M3 12h18M12 3a15 15 0 010 18M12 3a15 15 0 000 18"
                  stroke="white"
                  strokeWidth="2"
                />
              </svg>
            </div>
            <p>Indian Stocks & Commodities</p>
          </div>
        </div>

        {/* GET IN TOUCH SECTION */}
        <div className="contact-section">
          <h3>Get in touch</h3>
          <div className="contact-buttons">
            <div className="contact-card">
              <div className="contact-icon email-icon">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="white"
                  strokeWidth="2"
                >
                  <rect
                    x="3"
                    y="5"
                    width="18"
                    height="14"
                    rx="2"
                    ry="2"
                    stroke="white"
                    strokeWidth="2"
                  />
                  <polyline
                    points="3,7 12,13 21,7"
                    stroke="white"
                    strokeWidth="2"
                    fill="none"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </div>
              <div className="contact-info">
                <p className="title">Email us</p>
                <p className="detail">info@markettrade.live</p>
              </div>
            </div>

            <div className="contact-card">
              <div className="contact-icon phone-icon">
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
              <div className="contact-info">
                <p className="title">WhatsApp us</p>
                <p className="detail">+91 99424 89355</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* RIGHT PANEL */}
      <div className="right-panel">
        <div className="logo">
          {!isSignup ? (
            <img src='logoform.jpg' alt="Tradestocko Logo" className="logo-img" />
          ) : (
            <h2 className="create-title">Create Account</h2>
          )}
        </div>

        <form className="login-form" onSubmit={(e) => e.preventDefault()}>
          {isSignup && (
            <>
              <label>Username</label>
              <input type="text" placeholder="Enter your username" />

              <label>Email</label>
              <input type="email" placeholder="Enter your email" />

              <label>Phone Number</label>
              <div className="phone-field">
                <span className="flag">🇮🇳 +91</span>
                <input type="tel" placeholder="Enter phone number" />
              </div>

              <label>Preferred Language</label>
              <select>
                <option>Select Language</option>
                <option>English</option>
                <option>Hindi</option>
                <option>Tamil</option>
                <option>Marathi</option>
                <option>Telugu</option>
              </select>

              <label>WhatsApp Number</label>
              <input type="tel" placeholder="Enter WhatsApp number" />
            </>
          )}

          {!isSignup && (
            <>
              <label>Email / Username</label>
              <input type="text" placeholder="Enter your email or username" />
            </>
          )}

          <label>Password</label>
          <div className="password-field">
            <input
              type={passwordVisible ? "text" : "password"}
              placeholder="Password"
            />
            <span
              className="toggle-password"
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

          {isSignup && (
            <>
              <label>Confirm Password</label>
              <div className="password-field">
                <input
                  type={passwordVisible ? "text" : "password"}
                  placeholder="Confirm Password"
                />
              </div>
            </>
          )}

          <button type="submit" className="login-btn">
            {isSignup ? "Sign Up" : "Login"}
          </button>
        </form>

        <p className="create-account">
          {isSignup ? (
            <>
              Already have an account?{" "}
              <span onClick={() => setIsSignup(false)}>Login</span>
            </>
          ) : (
            <>
              Don’t have an account?{" "}
              <span onClick={() => setIsSignup(true)}>Create Account</span>
            </>
          )}
        </p>

        <img src='/whatsapp_button.jpg' alt="WhatsApp" className="whatsapp-btn" />
      </div>
    </div>
  );
}
