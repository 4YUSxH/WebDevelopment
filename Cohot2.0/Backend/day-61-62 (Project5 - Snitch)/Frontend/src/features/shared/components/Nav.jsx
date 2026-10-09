import React from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router";

const Nav = () => {
  const user = useSelector((state) => state.auth.user);
  const cartItems = useSelector((state) => state.cart?.items);

  return (
    <nav
      className="sticky top-0 z-30 border-b backdrop-blur-xl"
      style={{
        borderColor: "rgba(228, 226, 223, 0.8)",
        backgroundColor: "rgba(251, 249, 246, 0.88)",
      }}
    >
      <div className="mx-auto flex h-[76px] w-full max-w-7xl items-center justify-between px-5 sm:px-8 lg:px-16 xl:px-24">
        <Link
          to="/"
          className="group flex items-center gap-3 transition-opacity hover:opacity-75"
          aria-label="Snitch home"
        >
          <span
            className="flex h-7 w-7 items-center justify-center rounded-full text-[11px] font-medium"
            style={{
              backgroundColor: "#C9A96E",
              color: "#fbf9f6",
              fontFamily: "'Cormorant Garamond', serif",
            }}
          >
            S
          </span>
          <span
            className="text-base font-medium uppercase tracking-[0.32em]"
            style={{ fontFamily: "'Cormorant Garamond', serif", color: "#1b1c1a" }}
          >
            Snitch.
          </span>
        </Link>

        <span
          className="hidden text-[9px] font-medium uppercase tracking-[0.3em] md:block"
          style={{ color: "#a09283" }}
        >
          Curated essentials
        </span>

        <div
          className="flex items-center gap-2 text-[10px] font-medium uppercase tracking-[0.16em] sm:gap-5"
          style={{ color: "#7A6E63" }}
        >
          {user ? (
            <>
              <span
                className="hidden max-w-[140px] truncate rounded-full border px-3 py-2 normal-case tracking-normal sm:block"
                style={{
                  borderColor: "#e4e2df",
                  color: "#1b1c1a",
                  backgroundColor: "rgba(255, 255, 255, 0.45)",
                }}
                title={user.fullname}
              >
                {user.fullname}
              </span>
            {user.role === "seller" && (
              <Link
                to="/seller/dashboard"
                className="hidden transition-colors hover:text-[#C9A96E] lg:block"
              >
                Seller Dashboard
              </Link>
            )}
            <Link
              to="/cart"
              className="relative flex h-10 w-10 items-center justify-center rounded-full border transition-all hover:-translate-y-0.5 hover:border-[#C9A96E] hover:bg-white"
              style={{ color: "#1b1c1a" }}
              aria-label="Shopping cart"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="20"
                height="20"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M6 2 3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4z" />
                <line x1="3" y1="6" x2="21" y2="6" />
                <path d="M16 10a4 4 0 0 1-8 0" />
              </svg>
              {cartItems?.length > 0 && (
                <span
                  className="absolute -top-2 -right-2 flex items-center justify-center rounded-full text-white"
                  style={{
                    backgroundColor: "#C9A96E",
                    width: "16px",
                    height: "16px",
                    fontSize: "9px",
                    fontFamily: "'Inter', sans-serif",
                    fontWeight: 600,
                    letterSpacing: 0,
                  }}
                >
                  {cartItems.length > 9 ? "9+" : cartItems.length}
                </span>
              )}
            </Link>
            </>
          ) : (
            <>
            <Link
              to="/login"
              className="hidden transition-colors hover:text-[#C9A96E] sm:block"
            >
              Sign In
            </Link>
            <Link
              to="/register"
              className="rounded-full border px-4 py-2.5 transition-all hover:-translate-y-0.5 hover:border-[#C9A96E] hover:bg-white"
              style={{ borderColor: "#1b1c1a", color: "#1b1c1a" }}
            >
              Sign Up
            </Link>
            </>
          )}
        </div>
      </div>
    </nav>
  );
};

export default Nav;
