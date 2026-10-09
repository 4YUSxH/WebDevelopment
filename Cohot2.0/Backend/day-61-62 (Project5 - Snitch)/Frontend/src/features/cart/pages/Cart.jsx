import { useEffect, useMemo, useState } from "react";
import { useSelector } from "react-redux";
import { Link, useNavigate } from "react-router";
import { ArrowLeft, Minus, Plus, ShoppingBag, Trash2 } from "lucide-react";
import { useCart } from "../hook/useCart.js";

const Cart = () => {
  const { handleGetItems, handleIncrementCartItem, handleDecrementCartItem } =
    useCart();
  const navigate = useNavigate();
  const [loading, setLoading] = useState(true);
  const [removedItems, setRemovedItems] = useState([]);

  useEffect(() => {
    const fetchCartItems = async () => {
      try {
        const data = await handleGetItems();
        console.log(data)
      } catch (error) {
        console.error("Failed to fetch cart items:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchCartItems();
  }, [handleGetItems]);

  const cartItems = useSelector((state) => state.cart.items || []);
  const currency = useSelector((state) => state.cart.currency);
  const totalPrice = useSelector((state) => state.cart.totalPrice);

  const visibleCartItems = cartItems.filter(
    (item) => !removedItems.includes(item._id),
  );

  const totalItems = useMemo(
    () =>
      visibleCartItems.reduce(
        (total, item) => total + item.quantity,
        0,
      ),
    [visibleCartItems],
  );

  const formatPrice = (amount, priceCurrency = currency || "INR") =>
    `${priceCurrency} ${amount.toLocaleString("en-IN")}`;

  return (
    <>
      <link
        href="https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@0,300;0,400;0,500;1,300;1,400&family=Inter:wght@300;400;500;600&display=swap"
        rel="stylesheet"
      />

      <main
        className="min-h-screen"
        style={{
          backgroundColor: "#fbf9f6",
          fontFamily: "'Inter', sans-serif",
        }}
      >
        <div className="mx-auto max-w-7xl px-6 py-8 sm:px-10 lg:px-16 xl:px-24">
          <header
            className="flex items-center justify-between border-b pb-6"
            style={{ borderColor: "#e4e2df" }}
          >
            <Link
              to="/"
              className="flex items-center gap-2 text-[10px] uppercase tracking-[0.2em] transition-colors hover:text-[#C9A96E]"
              style={{ color: "#7A6E63" }}
            >
              <ArrowLeft size={14} strokeWidth={1.5} />
              Continue shopping
            </Link>
            <span
              className="text-[10px] uppercase tracking-[0.35em]"
              style={{ color: "#C9A96E" }}
            >
              Snitch.
            </span>
          </header>

          <div className="pb-24 pt-16">
            <div className="mb-12">
              <span
                className="text-[10px] uppercase tracking-[0.24em]"
                style={{ color: "#C9A96E" }}
              >
                Your selection
              </span>
              <h1
                className="mt-4 text-5xl font-light leading-none sm:text-6xl"
                style={{
                  color: "#1b1c1a",
                  fontFamily: "'Cormorant Garamond', serif",
                }}
              >
                Your Cart
              </h1>
            </div>

            {loading ? (
              <div
                className="py-24 text-center text-[10px] uppercase tracking-[0.3em]"
                style={{ color: "#7A6E63" }}
              >
                Loading your selection...
              </div>
            ) : visibleCartItems.length === 0 ? (
              <div
                className="flex flex-col items-center border-y py-24 text-center"
                style={{ borderColor: "#e4e2df" }}
              >
                <ShoppingBag
                  size={28}
                  strokeWidth={1}
                  style={{ color: "#C9A96E" }}
                />
                <h2
                  className="mt-6 text-3xl"
                  style={{
                    color: "#1b1c1a",
                    fontFamily: "'Cormorant Garamond', serif",
                  }}
                >
                  Your cart is waiting.
                </h2>
                <p
                  className="mt-3 max-w-sm text-sm leading-relaxed"
                  style={{ color: "#7A6E63" }}
                >
                  Explore the archive and find something made for your everyday.
                </p>
                <button
                  onClick={() => navigate("/")}
                  className="mt-8 border px-8 py-4 text-[10px] uppercase tracking-[0.22em] transition-colors hover:bg-[#1b1c1a] hover:text-white"
                  style={{ borderColor: "#1b1c1a", color: "#1b1c1a" }}
                >
                  Explore the collection
                </button>
              </div>
            ) : (
              <div className="grid gap-16 lg:grid-cols-[minmax(0,1fr)_360px] lg:gap-24">
                <section>
                  <div
                    className="mb-5 flex items-center justify-between border-b pb-4"
                    style={{ borderColor: "#e4e2df" }}
                  >
                    <span
                      className="text-[10px] uppercase tracking-[0.2em]"
                      style={{ color: "#7A6E63" }}
                    >
                      {totalItems} {totalItems === 1 ? "item" : "items"}
                    </span>
                    <span
                      className="text-[10px] uppercase tracking-[0.2em]"
                      style={{ color: "#7A6E63" }}
                    >
                      Price
                    </span>
                  </div>

                  <div className="divide-y" style={{ borderColor: "#e4e2df" }}>
                    {visibleCartItems.map((item) => {
                      const quantity = item.quantity;
                      const selectedVariant = item.product?.variants;
                      const variantAttributes = Object.entries(
                        selectedVariant?.attributes || {},
                      );
                      const image =
                        selectedVariant?.images?.[0]?.url ||
                        item.product?.images?.[0]?.url;
                      const lineTotal = item.price.amount * quantity;

                      return (
                        <article
                          key={item._id}
                          className="flex gap-5 py-6 sm:gap-8"
                        >
                          <button
                            onClick={() =>
                              navigate(`/product/${item.product._id}`)
                            }
                            className="h-36 w-28 shrink-0 overflow-hidden sm:h-44 sm:w-36"
                            style={{ backgroundColor: "#f5f3f0" }}
                            aria-label={`View ${item.product.title}`}
                          >
                            <img
                              src={image}
                              alt={item.product.title}
                              className="h-full w-full object-cover transition-transform duration-500 hover:scale-105"
                            />
                          </button>

                          <div className="flex min-w-0 flex-1 flex-col justify-between">
                            <div className="flex items-start justify-between gap-4">
                              <div>
                                <h2
                                  className="text-xl leading-snug sm:text-2xl"
                                  style={{
                                    color: "#1b1c1a",
                                    fontFamily: "'Cormorant Garamond', serif",
                                  }}
                                >
                                  {item.product.title}
                                </h2>
                                <p
                                  className="mt-2 text-[10px] uppercase tracking-[0.16em]"
                                  style={{ color: "#7A6E63" }}
                                >
                                  {selectedVariant
                                    ? variantAttributes
                                        .map(
                                          ([name, value]) =>
                                            `${name}: ${value}`,
                                        )
                                        .join(" · ")
                                    : "Original piece"}
                                </p>
                              </div>
                              <span
                                className="whitespace-nowrap text-[11px] font-medium"
                                style={{ color: "#1b1c1a" }}
                              >
                                {formatPrice(lineTotal, item.price.currency)}
                              </span>
                            </div>

                            <div className="mt-6 flex items-center justify-between">
                              <div
                                className="flex items-center border"
                                style={{ borderColor: "#d8d4ce" }}
                              >
                                <button
                                  onClick={() =>
                                    handleDecrementCartItem({
                                      productId: item.product._id,
                                      variantId: selectedVariant._id,
                                    })
                                  }
                                  className="p-2 text-[#C9A96E]"
                                  aria-label="Decrease quantity"
                                >
                                  <Minus size={13} strokeWidth={1.5} />
                                </button>
                                <span
                                  className="w-8 text-center text-xs"
                                  style={{ color: "#1b1c1a" }}
                                >
                                  {quantity}
                                </span>
                                <button
                                  onClick={() =>
                                    handleIncrementCartItem({
                                      productId: item.product._id,
                                      variantId: selectedVariant._id,
                                    })
                                  }
                                  className="p-2 text-[#C9A96E]"
                                  aria-label="Increase quantity"
                                >
                                  <Plus size={13} strokeWidth={1.5} />
                                </button>
                              </div>
                              <button
                                onClick={() =>
                                  setRemovedItems((current) => [
                                    ...current,
                                    item._id,
                                  ])
                                }
                                className="flex items-center gap-2 text-[10px] uppercase tracking-[0.16em] transition-colors hover:text-[#C9A96E]"
                                style={{ color: "#7A6E63" }}
                              >
                                <Trash2 size={13} strokeWidth={1.5} />
                                Remove
                              </button>
                            </div>
                          </div>
                        </article>
                      );
                    })}
                  </div>
                </section>

                <aside
                  className="h-fit border-t pt-6 lg:sticky lg:top-8"
                  style={{ borderColor: "#1b1c1a" }}
                >
                  <h2
                    className="text-3xl"
                    style={{
                      color: "#1b1c1a",
                      fontFamily: "'Cormorant Garamond', serif",
                    }}
                  >
                    Order summary
                  </h2>
                  <div
                    className="mt-8 space-y-4 text-xs"
                    style={{ color: "#7A6E63" }}
                  >
                    <div className="flex justify-between">
                      <span>Subtotal</span>
                      <span style={{ color: "#1b1c1a" }}>
                        {formatPrice(totalPrice, currency)}
                      </span>
                    </div>
                    <div className="flex justify-between">
                      <span>Shipping</span>
                      <span style={{ color: "#1b1c1a" }}>Complimentary</span>
                    </div>
                  </div>
                  <div
                    className="mt-6 flex justify-between border-t pt-5 text-[11px] uppercase tracking-[0.16em]"
                    style={{ borderColor: "#e4e2df", color: "#1b1c1a" }}
                  >
                    <span>Total</span>
                    <span>{formatPrice(totalPrice, currency)}</span>
                  </div>
                  <button className="mt-8 w-full bg-[#1b1c1a] px-6 py-5 text-[10px] uppercase tracking-[0.25em] text-white transition-colors hover:bg-[#C9A96E]">
                    Proceed to checkout
                  </button>
                  <p
                    className="mt-4 text-center text-[10px] leading-relaxed"
                    style={{ color: "#7A6E63" }}
                  >
                    Secure checkout · Easy returns
                  </p>
                </aside>
              </div>
            )}
          </div>
        </div>

        <footer
          className="border-t py-10 text-center"
          style={{ borderColor: "#e4e2df" }}
        >
          <span
            className="text-[10px] uppercase tracking-[0.35em]"
            style={{ color: "#C9A96E" }}
          >
            Snitch. © {new Date().getFullYear()}
          </span>
        </footer>
      </main>
    </>
  );
};

export default Cart;
