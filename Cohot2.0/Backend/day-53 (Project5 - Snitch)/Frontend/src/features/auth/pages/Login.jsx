import React, { useState } from "react";
import { Link, useNavigate } from "react-router";
import { Eye, EyeOff, Mail, Lock } from "lucide-react";
import { useAuth } from "../hook/useAuth";

const Login = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [rememberMe, setRememberMe] = useState(false);
  const [formData, setFormData] = useState({ email: "", password: "" });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const { handleLogin } = useAuth();

  const navigate = useNavigate()

  const handleSubmit = async (e) => {
    e.preventDefault();

    const {email, password} = formData;
    
    await handleLogin({email, password});

    navigate("/")

    console.log("Login successful");
  };

  const handleGoogleLogin = () => {
    // TODO: trigger Google OAuth flow
    console.log("Google login triggered");
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
      <main className="flex-1 flex items-center justify-center px-4 py-14">
        <div className="w-full max-w-md">
          {/* Auth card */}
          <div className="bg-[#141414] border border-[#262626] rounded-xl p-10 shadow-2xl">
            {/* Card header */}
            <div className="text-center mb-8">
              <h1 className="text-white text-2xl font-semibold tracking-tight mb-1.5">
                Welcome Back
              </h1>
              <p className="text-[#6B6B6B] text-sm leading-relaxed">
                Sign in to access your curated wardrobe
              </p>
            </div>

            {/* Google Button */}
            <button
              id="google-login-btn"
              type="button"
              onClick={handleGoogleLogin}
              className="w-full flex items-center justify-center gap-3 bg-white hover:bg-gray-100 text-[#1F1F1F] font-medium text-sm py-3 px-4 rounded-md transition-colors duration-200 shadow-sm mb-6"
            >
              {/* Google SVG icon */}
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
              {/* Email field */}
              <div>
                <label
                  htmlFor="login-email"
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
                    id="login-email"
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

              {/* Password field */}
              <div>
                <label
                  htmlFor="login-password"
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
                    id="login-password"
                    type={showPassword ? "text" : "password"}
                    name="password"
                    value={formData.password}
                    onChange={handleChange}
                    placeholder="••••••••"
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

              {/* Remember me + Forgot password row */}
              <div className="flex items-center justify-between pt-1">
                <label
                  htmlFor="remember-me"
                  className="flex items-center gap-2.5 cursor-pointer group"
                >
                  <div className="relative">
                    <input
                      id="remember-me"
                      type="checkbox"
                      checked={rememberMe}
                      onChange={(e) => setRememberMe(e.target.checked)}
                      className="sr-only"
                    />
                    <div
                      className={`w-4 h-4 rounded-[3px] border transition-all duration-200 flex items-center justify-center ${
                        rememberMe
                          ? "bg-[#F5C518] border-[#F5C518]"
                          : "bg-transparent border-[#3D3D3D] group-hover:border-[#555555]"
                      }`}
                      onClick={() => setRememberMe(!rememberMe)}
                    >
                      {rememberMe && (
                        <svg width="9" height="7" viewBox="0 0 9 7" fill="none">
                          <path
                            d="M1 3.5L3.5 6L8 1"
                            stroke="#0A0A0A"
                            strokeWidth="1.5"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          />
                        </svg>
                      )}
                    </div>
                  </div>
                  <span className="text-[#8E8E8E] text-xs select-none">
                    Remember me
                  </span>
                </label>
                <a
                  href="#"
                  className="text-[#F5C518] text-xs hover:underline transition-all duration-200"
                >
                  Forgot Password?
                </a>
              </div>

              {/* Submit button */}
              <button
                id="login-submit-btn"
                type="submit"
                className="w-full bg-[#F5C518] hover:bg-[#E0B210] text-[#0A0A0A] font-semibold text-sm py-3.5 rounded-md transition-colors duration-200 tracking-wide mt-2"
              >
                Sign In
              </button>
            </form>

            {/* Bottom link */}
            <p className="text-center text-[#555555] text-sm mt-7">
              Don't have an account?{" "}
              <Link
                to="/register"
                className="text-[#F5C518] font-medium hover:underline transition-all duration-200"
              >
                Register
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

export default Login;
