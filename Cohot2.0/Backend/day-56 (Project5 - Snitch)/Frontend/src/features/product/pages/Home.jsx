import { useEffect } from "react";
import { useSelector } from "react-redux";
import { useProduct } from "../hooks/useProduct.js";

const Home = () => {
  const {handleGetAllProducts} = useProduct()

  useEffect(() => {
    handleGetAllProducts()
  }, [])

  const products = useSelector(state => state.product.allProducts)

  console.log(products)

  return (
    <>
      {/* Google Fonts */}
      <link
        href="https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@0,300;0,400;0,500;1,300;1,400&family=Inter:wght@300;400;500;600&display=swap"
        rel="stylesheet"
      />

      <div
        className="min-h-screen selection:bg-[#C9A96E]/30"
        style={{
          backgroundColor: "#fbf9f6",
          fontFamily: "'Inter', sans-serif",
        }}
      >
        <div className="max-w-7xl mx-auto px-8 lg:px-16 xl:px-24">
          {/* Hero / Header */}
          <div className="pt-20 pb-20 text-center flex flex-col items-center">
            <span
              className="text-[10px] uppercase tracking-[0.24em] font-medium mb-6"
              style={{ color: "#C9A96E" }}
            >
              The Collection
            </span>

            <h1
              className="text-5xl lg:text-7xl font-light leading-tight mb-6"
              style={{
                fontFamily: "'Cormorant Garamond', serif",
                color: "#1b1c1a",
              }}
            >
              Curated Archive
            </h1>

            <p
              className="max-w-xl mx-auto text-sm leading-relaxed"
              style={{ color: "#7A6E63" }}
            >
              Discover our latest curation of premium minimalist pieces,
              meticulously designed for effortless elegance and enduring
              quality.
            </p>
          </div>

          {/* Product Grid */}
          {products.length > 0 ? (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-x-8 gap-y-16 pb-32">
              {products.map((product) => (
                <div
                  key={product._id}
                  className="group cursor-pointer flex flex-col"
                >
                  {/* Image Container */}
                  <div
                    className="aspect-4/5 overflow-hidden mb-6"
                    style={{ backgroundColor: "#f5f3f0" }}
                  >
                    <img
                      src={product.images[0].url}
                      alt={product.title}
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                    />
                  </div>

                  {/* Product Details */}
                  <div className="flex flex-col gap-2">
                    <h3
                      className="text-xl leading-snug transition-colors duration-300 group-hover:text-[#C9A96E]"
                      style={{
                        fontFamily: "'Cormorant Garamond', serif",
                        color: "#1b1c1a",
                      }}
                    >
                      {product.title}
                    </h3>

                    <p
                      className="text-[12px] line-clamp-2 leading-relaxed"
                      style={{ color: "#7A6E63" }}
                    >
                      {product.description}
                    </p>

                    <div className="mt-2">
                      <span
                        className="text-[10px] uppercase tracking-[0.2em] font-medium"
                        style={{ color: "#1b1c1a" }}
                      >
                        {product.price.currency}{" "}
                        {product.price.amount.toLocaleString()}
                      </span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          ) : (
            /* Empty State */
            <div className="py-24 text-center flex flex-col items-center">
              <h2
                className="text-2xl mb-4"
                style={{
                  fontFamily: "'Cormorant Garamond', serif",
                  color: "#1b1c1a",
                }}
              >
                No pieces available.
              </h2>

              <p
                className="max-w-md mx-auto text-sm leading-relaxed"
                style={{ color: "#7A6E63" }}
              >
                We are currently preparing our next collection. Please check
                back later.
              </p>
            </div>
          )}
        </div>

        {/* Footer */}
        <footer
          className="border-t py-12 text-center"
          style={{ borderColor: "#e4e2df" }}
        >
          <span
            className="text-[10px] uppercase tracking-[0.35em]"
            style={{
              fontFamily: "'Cormorant Garamond', serif",
              color: "#C9A96E",
            }}
          >
            Snitch. © {new Date().getFullYear()}
          </span>
        </footer>
      </div>
    </>
  );
};

export default Home;
