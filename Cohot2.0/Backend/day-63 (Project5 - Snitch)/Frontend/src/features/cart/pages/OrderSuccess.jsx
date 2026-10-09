import { Check, ShoppingBag } from "lucide-react";
import { Link, useLocation } from "react-router";

const OrderSuccess = () => {
  const location = useLocation();
  const queryParams = new URLSearchParams(location.search);
  const orderId = queryParams.get("orderId");

  return (
    <>
      <link
        href="https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@0,300;0,400;0,500;1,300;1,400&family=Inter:wght@300;400;500;600&display=swap"
        rel="stylesheet"
      />

      <main
        className="flex min-h-[calc(100vh-76px)] items-center justify-center px-6 py-16 sm:px-10"
        style={{
          backgroundColor: "#fbf9f6",
          fontFamily: "'Inter', sans-serif",
        }}
      >
        <section className="w-full max-w-xl text-center">
          <div
            className="mx-auto mb-8 flex h-20 w-20 items-center justify-center rounded-full"
            style={{ backgroundColor: "#e9f1e8", color: "#587052" }}
            aria-hidden="true"
          >
            <Check size={38} strokeWidth={1.5} />
          </div>

          <p
            className="mb-4 text-[10px] font-medium uppercase tracking-[0.3em]"
            style={{ color: "#C9A96E" }}
          >
            Order confirmed
          </p>
          <h1
            className="mb-5 text-5xl font-light leading-tight sm:text-6xl"
            style={{ fontFamily: "'Cormorant Garamond', serif", color: "#1b1c1a" }}
          >
            Thank you for your order.
          </h1>
          <p className="mx-auto max-w-md text-sm leading-7" style={{ color: "#7A6E63" }}>
            Your payment was successful. We&apos;ll send you an update as soon as
            your order is on its way.
          </p>

          <div
            className="mx-auto my-10 max-w-sm border-y px-5 py-5"
            style={{ borderColor: "#e4e2df" }}
          >
            <p
              className="mb-2 text-[9px] font-medium uppercase tracking-[0.24em]"
              style={{ color: "#a09283" }}
            >
              Order reference
            </p>
            <p className="break-all text-sm" style={{ color: "#1b1c1a" }}>
              {orderId || "Your order has been placed"}
            </p>
          </div>

          <div className="flex flex-col items-center justify-center gap-4 sm:flex-row">
            <Link
              to="/"
              className="inline-flex min-w-44 items-center justify-center gap-2 rounded-full px-6 py-3 text-[10px] font-medium uppercase tracking-[0.18em] transition-opacity hover:opacity-80"
              style={{ backgroundColor: "#1b1c1a", color: "#fbf9f6" }}
            >
              Continue shopping
              <ShoppingBag size={15} strokeWidth={1.5} />
            </Link>
            <Link
              to="/cart"
              className="inline-flex min-w-44 items-center justify-center rounded-full border px-6 py-3 text-[10px] font-medium uppercase tracking-[0.18em] transition-colors hover:border-[#C9A96E]"
              style={{ borderColor: "#d8d3cc", color: "#7A6E63" }}
            >
              View cart
            </Link>
          </div>
        </section>
      </main>
    </>
  );
};

export default OrderSuccess;
