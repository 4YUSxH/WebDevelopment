import React, { useState } from "react";
import { Link, useNavigate } from "react-router";
import {
  Eye,
  EyeOff,
  Mail,
  Lock,
  User,
  Phone,
  ChevronDown,
  Store,
} from "lucide-react";
import { useAuth } from "../hook/useAuth.js";

const COUNTRY_CODES = [
  { code: "+91", flag: "🇮🇳", name: "India" },
  { code: "+1", flag: "🇺🇸", name: "USA" },
  { code: "+44", flag: "🇬🇧", name: "UK" },
  { code: "+971", flag: "🇦🇪", name: "UAE" },
  { code: "+65", flag: "🇸🇬", name: "Singapore" },
];

const Register = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [showCountryDropdown, setShowCountryDropdown] = useState(false);
  const [selectedCountry, setSelectedCountry] = useState(COUNTRY_CODES[0]);
  const [isSeller, setIsSeller] = useState(false);
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    contactNumber: "",
    password: "",
    confirmPassword: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const { handleRegister } = useAuth();

  const navigate = useNavigate()

  const handleSubmit = async (e) => {
    e.preventDefault();
    const { email, contactNumber, confirmPassword, fullName } = formData;

    await handleRegister({
      email,
      contact: contactNumber,
      password: confirmPassword,
      fullname: fullName,
      isSeller,
    });

    navigate("/")

    console.log("Register successful");
  };

  const handleGoogleRegister = () => {
    // TODO: trigger Google OAuth flow
    console.log("Google register triggered");
  };

  return (
    <div className="min-h-screen bg-[#0A0A0A] flex flex-col">
      {/* Top bar */}
      <header className="flex items-center justify-between px-10 py-5 border-b border-[#1A1A1A]">
        <span className="text-[#F5C518] font-bold text-xl tracking-[0.25em] uppercase select-none">
          Snitch
        </span>
        <a
          href="#"
          className="text-[#6B6B6B] text-xs tracking-widest uppercase hover:text-[#F5C518] transition-colors duration-200"
        >
          Authentication Help
        </a>
      </header>

      {/* Main content */}
      <main className="flex-1 flex items-center justify-center px-4 py-12">
        <div className="w-full max-w-md">
          {/* Auth card */}
          <div className="bg-[#141414] border border-[#262626] rounded-xl p-10 shadow-2xl">
            {/* Card header */}
            <div className="text-center mb-8">
              <h1 className="text-white text-2xl font-semibold tracking-tight mb-1.5">
                Create Account
              </h1>
              <p className="text-[#6B6B6B] text-sm leading-relaxed">
                Join the inner circle for curated drops &amp; exclusive
                collections
              </p>
            </div>

            {/* Google Button */}
            <button
              id="google-register-btn"
              type="button"
              onClick={handleGoogleRegister}
              className="w-full flex items-center justify-center gap-3 bg-white hover:bg-gray-100 text-[#1F1F1F] font-medium text-sm py-3 px-4 rounded-md transition-colors duration-200 shadow-sm mb-6"
            >
              <svg
                width="18"
                height="18"
                viewBox="0 0 18 18"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M17.64 9.2c0-.637-.057-1.251-.164-1.84H9v3.481h4.844c-.209 1.125-.843 2.078-1.796 2.716v2.258h2.908c1.702-1.567 2.684-3.874 2.684-6.615z"
                  fill="#4285F4"
                />
                <path
                  d="M9 18c2.43 0 4.467-.806 5.956-2.18l-2.908-2.259c-.806.54-1.837.86-3.048.86-2.344 0-4.328-1.584-5.036-3.711H.957v2.332A8.997 8.997 0 0 0 9 18z"
                  fill="#34A853"
                />
                <path
                  d="M3.964 10.71A5.41 5.41 0 0 1 3.682 9c0-.593.102-1.17.282-1.71V4.958H.957A8.996 8.996 0 0 0 0 9c0 1.452.348 2.827.957 4.042l3.007-2.332z"
                  fill="#FBBC05"
                />
                <path
                  d="M9 3.58c1.321 0 2.508.454 3.44 1.345l2.582-2.58C13.463.891 11.426 0 9 0A8.997 8.997 0 0 0 .957 4.958L3.964 7.29C4.672 5.163 6.656 3.58 9 3.58z"
                  fill="#EA4335"
                />
              </svg>
              Continue with Google
            </button>

            {/* Divider */}
            <div className="flex items-center gap-4 mb-6">
              <div className="flex-1 h-px bg-[#262626]" />
              <span className="text-[#555555] text-xs tracking-wider uppercase">
                or
              </span>
              <div className="flex-1 h-px bg-[#262626]" />
            </div>

            {/* Form */}
            <form onSubmit={handleSubmit} className="space-y-5">
              {/* Full Name */}
              <div>
                <label
                  htmlFor="reg-fullname"
                  className="block text-[#8E8E8E] text-xs font-medium tracking-wider uppercase mb-1.5"
                >
                  Full Name
                </label>
                <div className="relative">
                  <User
                    size={15}
                    className="absolute left-3.5 top-1/2 -translate-y-1/2 text-[#555555]"
                  />
                  <input
                    id="reg-fullname"
                    type="text"
                    name="fullName"
                    value={formData.fullName}
                    onChange={handleChange}
                    placeholder="e.g. Alexander Vance"
                    required
                    className="w-full bg-[#1C1C1C] border border-[#2B2B2B] text-[#EDEDED] placeholder-[#555555] text-sm rounded-md pl-9 pr-4 py-3 outline-none focus:border-[#F5C518] transition-colors duration-200"
                  />
                </div>
              </div>

              {/* Email */}
              <div>
                <label
                  htmlFor="reg-email"
                  className="block text-[#8E8E8E] text-xs font-medium tracking-wider uppercase mb-1.5"
                >
                  Email Address
                </label>
                <div className="relative">
                  <Mail
                    size={15}
                    className="absolute left-3.5 top-1/2 -translate-y-1/2 text-[#555555]"
                  />
                  <input
                    id="reg-email"
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="name@domain.com"
                    required
                    className="w-full bg-[#1C1C1C] border border-[#2B2B2B] text-[#EDEDED] placeholder-[#555555] text-sm rounded-md pl-9 pr-4 py-3 outline-none focus:border-[#F5C518] transition-colors duration-200"
                  />
                </div>
              </div>

              {/* Contact Number with country flag picker */}
              <div>
                <label
                  htmlFor="reg-phone"
                  className="block text-[#8E8E8E] text-xs font-medium tracking-wider uppercase mb-1.5"
                >
                  Contact Number
                </label>
                <div className="flex bg-[#1C1C1C] border border-[#2B2B2B] rounded-md overflow-visible focus-within:border-[#F5C518] transition-colors duration-200 relative">
                  {/* Country code selector */}
                  <div className="relative">
                    <button
                      type="button"
                      id="country-code-btn"
                      onClick={() =>
                        setShowCountryDropdown(!showCountryDropdown)
                      }
                      className="flex items-center gap-1.5 px-3 py-3 text-sm text-[#EDEDED] hover:bg-[#262626] transition-colors duration-150 rounded-l-md h-full whitespace-nowrap"
                    >
                      <span>{selectedCountry.flag}</span>
                      <span className="text-[#8E8E8E]">
                        {selectedCountry.code}
                      </span>
                      <ChevronDown
                        size={12}
                        className={`text-[#555555] transition-transform duration-200 ${showCountryDropdown ? "rotate-180" : ""}`}
                      />
                    </button>

                    {/* Dropdown */}
                    {showCountryDropdown && (
                      <div className="absolute top-full left-0 mt-1 w-44 bg-[#1E1E1E] border border-[#2B2B2B] rounded-md overflow-hidden z-20 shadow-xl">
                        {COUNTRY_CODES.map((country) => (
                          <button
                            key={country.code}
                            type="button"
                            onClick={() => {
                              setSelectedCountry(country);
                              setShowCountryDropdown(false);
                            }}
                            className={`w-full flex items-center gap-2.5 px-3 py-2.5 text-sm text-left transition-colors duration-150 ${
                              selectedCountry.code === country.code
                                ? "bg-[#F5C518]/10 text-[#F5C518]"
                                : "text-[#EDEDED] hover:bg-[#262626]"
                            }`}
                          >
                            <span>{country.flag}</span>
                            <span className="text-[#8E8E8E] text-xs">
                              {country.code}
                            </span>
                            <span>{country.name}</span>
                          </button>
                        ))}
                      </div>
                    )}
                  </div>

                  {/* Divider */}
                  <div className="w-px bg-[#2B2B2B] self-stretch" />

                  {/* Phone input */}
                  <div className="relative flex-1 flex items-center">
                    <Phone
                      size={14}
                      className="absolute left-3 text-[#555555]"
                    />
                    <input
                      id="reg-phone"
                      type="tel"
                      name="contactNumber"
                      value={formData.contactNumber}
                      onChange={handleChange}
                      placeholder="98765 43210"
                      required
                      className="w-full bg-transparent text-[#EDEDED] placeholder-[#555555] text-sm pl-8 pr-4 py-3 outline-none"
                    />
                  </div>
                </div>
              </div>

              {/* Password */}
              <div>
                <label
                  htmlFor="reg-password"
                  className="block text-[#8E8E8E] text-xs font-medium tracking-wider uppercase mb-1.5"
                >
                  Password
                </label>
                <div className="relative">
                  <Lock
                    size={15}
                    className="absolute left-3.5 top-1/2 -translate-y-1/2 text-[#555555]"
                  />
                  <input
                    id="reg-password"
                    type={showPassword ? "text" : "password"}
                    name="password"
                    value={formData.password}
                    onChange={handleChange}
                    placeholder="••••••••••••"
                    required
                    className="w-full bg-[#1C1C1C] border border-[#2B2B2B] text-[#EDEDED] placeholder-[#555555] text-sm rounded-md pl-9 pr-10 py-3 outline-none focus:border-[#F5C518] transition-colors duration-200"
                  />
                  <button
                    type="button"
                    onClick={() => setShowPassword(!showPassword)}
                    className="absolute right-3.5 top-1/2 -translate-y-1/2 text-[#555555] hover:text-[#8E8E8E] transition-colors duration-200"
                    aria-label="Toggle password visibility"
                  >
                    {showPassword ? <EyeOff size={15} /> : <Eye size={15} />}
                  </button>
                </div>
              </div>

              {/* Confirm Password */}
              <div>
                <label
                  htmlFor="reg-confirm-password"
                  className="block text-[#8E8E8E] text-xs font-medium tracking-wider uppercase mb-1.5"
                >
                  Confirm Password
                </label>
                <div className="relative">
                  <Lock
                    size={15}
                    className="absolute left-3.5 top-1/2 -translate-y-1/2 text-[#555555]"
                  />
                  <input
                    id="reg-confirm-password"
                    type={showConfirmPassword ? "text" : "password"}
                    name="confirmPassword"
                    value={formData.confirmPassword}
                    onChange={handleChange}
                    placeholder="••••••••••••"
                    required
                    className="w-full bg-[#1C1C1C] border border-[#2B2B2B] text-[#EDEDED] placeholder-[#555555] text-sm rounded-md pl-9 pr-10 py-3 outline-none focus:border-[#F5C518] transition-colors duration-200"
                  />
                  <button
                    type="button"
                    onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                    className="absolute right-3.5 top-1/2 -translate-y-1/2 text-[#555555] hover:text-[#8E8E8E] transition-colors duration-200"
                    aria-label="Toggle confirm password visibility"
                  >
                    {showConfirmPassword ? (
                      <EyeOff size={15} />
                    ) : (
                      <Eye size={15} />
                    )}
                  </button>
                </div>
              </div>

              {/* isSeller checkbox */}
              <div>
                <label
                  htmlFor="is-seller"
                  className="flex items-start gap-3.5 p-4 rounded-md border cursor-pointer transition-all duration-200 group
                    ${isSeller ? 'border-[#F5C518]/40 bg-[#F5C518]/5' : 'border-[#262626] hover:border-[#3D3D3D] bg-[#1A1A1A]'}"
                  style={{
                    borderColor: isSeller ? "rgba(245,197,24,0.4)" : "#262626",
                    backgroundColor: isSeller
                      ? "rgba(245,197,24,0.04)"
                      : "#1A1A1A",
                  }}
                >
                  {/* Custom checkbox */}
                  <div className="relative mt-0.5 flex-shrink-0">
                    <input
                      id="is-seller"
                      type="checkbox"
                      checked={isSeller}
                      onChange={(e) => setIsSeller(e.target.checked)}
                      className="sr-only"
                    />
                    <div
                      className={`w-4.5 h-4.5 rounded-[3px] border-2 transition-all duration-200 flex items-center justify-center ${
                        isSeller
                          ? "bg-[#F5C518] border-[#F5C518]"
                          : "bg-transparent border-[#3D3D3D]"
                      }`}
                      style={{ width: "18px", height: "18px" }}
                      onClick={() => setIsSeller(!isSeller)}
                    >
                      {isSeller && (
                        <svg
                          width="10"
                          height="8"
                          viewBox="0 0 10 8"
                          fill="none"
                        >
                          <path
                            d="M1 4L3.8 7L9 1"
                            stroke="#0A0A0A"
                            strokeWidth="1.7"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          />
                        </svg>
                      )}
                    </div>
                  </div>

                  {/* Text content */}
                  <div className="flex-1 min-w-0">
                    <div className="flex items-center gap-2">
                      <Store
                        size={14}
                        className={
                          isSeller ? "text-[#F5C518]" : "text-[#555555]"
                        }
                      />
                      <span
                        className={`text-sm font-medium ${isSeller ? "text-white" : "text-[#EDEDED]"}`}
                      >
                        Register as a Seller
                      </span>
                      {isSeller && (
                        <span className="text-[10px] font-semibold tracking-widest uppercase text-[#0A0A0A] bg-[#F5C518] px-1.5 py-0.5 rounded-sm">
                          Partner
                        </span>
                      )}
                    </div>
                    <p className="text-xs text-[#555555] mt-0.5 leading-relaxed">
                      Access seller dashboard and manage listings
                    </p>
                  </div>
                </label>
              </div>

              {/* Submit button */}
              <button
                id="register-submit-btn"
                type="submit"
                className="w-full bg-[#F5C518] hover:bg-[#E0B210] text-[#0A0A0A] font-semibold text-sm py-3.5 rounded-md transition-colors duration-200 tracking-wide mt-2"
              >
                Create Account
              </button>
            </form>

            {/* Bottom link */}
            <p className="text-center text-[#555555] text-sm mt-7">
              Already have an account?{" "}
              <Link
                to="/login"
                className="text-[#F5C518] font-medium hover:underline transition-all duration-200"
              >
                Sign In
              </Link>
            </p>
          </div>
        </div>
      </main>

      {/* Footer */}
      <footer className="flex flex-wrap items-center justify-between gap-4 px-10 py-5 border-t border-[#1A1A1A]">
        <span className="text-[#3D3D3D] text-xs tracking-widest uppercase">
          © 2025 Snitch. All Rights Reserved.
        </span>
        <div className="flex items-center gap-6">
          {["Privacy Policy", "Terms of Service", "Customer Care"].map(
            (item) => (
              <a
                key={item}
                href="#"
                className="text-[#3D3D3D] text-xs tracking-widest uppercase hover:text-[#6B6B6B] transition-colors duration-200"
              >
                {item}
              </a>
            ),
          )}
        </div>
      </footer>
    </div>
  );
};

export default Register;
