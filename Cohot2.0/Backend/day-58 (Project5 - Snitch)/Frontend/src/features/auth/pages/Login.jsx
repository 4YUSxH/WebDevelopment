import React, { useState } from "react";
import { Link, useNavigate } from "react-router";
import { Eye, EyeOff, Mail, Lock } from "lucide-react";
import { useAuth } from "../hook/useAuth";
import GoogleButton from "../components/GoogleButton.jsx";

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
    
    const user = await handleLogin({email, password});
    console.log(user)

    if(user.role === "buyer"){
      navigate("/")
    } else if(user.role === "seller"){
      navigate("/seller/dashboard")
    }


    console.log("Login successful");
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

            {/* Divider */}
            <div className="flex items-center gap-4 mt-6">
              <div className="flex-1 h-px bg-[#262626]" />
              <span className="text-[#555555] text-xs tracking-wider uppercase whitespace-nowrap">
                Or
              </span>
              <div className="flex-1 h-px bg-[#262626]" />
            </div>

            {/* Google Button */}
            <div className="mt-6">
              <GoogleButton />
            </div>

            {/* Bottom link */}
            <p className="text-center text-[#555555] text-sm mt-6">
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
