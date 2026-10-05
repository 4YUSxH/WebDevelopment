import React, { useEffect, useMemo, useState } from "react";
import { useProduct } from "../hooks/useProduct";
import { useParams, useNavigate, Link } from "react-router";
import {
  ArrowLeft,
  Heart,
  Share2,
  ShieldCheck,
  Truck,
  RotateCcw,
  ChevronLeft,
  ChevronRight,
  ChevronUp,
  ChevronDown,
  Check,
  ShoppingBag,
  Zap,
} from "lucide-react";

const ProductDetails = () => {
  const { productId } = useParams();
  const navigate = useNavigate();

  const { handleGetProductDetails } = useProduct();

  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(true);

  const [selectedImageIndex, setSelectedImageIndex] = useState(0);
  const [isWishlisted, setIsWishlisted] = useState(false);
  const [addedToCart, setAddedToCart] = useState(false);
  const [boughtNow, setBoughtNow] = useState(false);
  const [copied, setCopied] = useState(false);
  const [selectedAttributes, setSelectedAttributes] = useState({});

  useEffect(() => {
    const fetchProductDetail = async () => {
      try {
        setLoading(true);

        const data = await handleGetProductDetails(productId);

        setProduct(data);
        setSelectedAttributes({});
        setSelectedImageIndex(0);
      } catch (error) {
        console.error("Failed to fetch product:", error);
        setProduct(null);
      } finally {
        setLoading(false);
      }
    };

    if (productId) {
      fetchProductDetail();
    }
  }, [handleGetProductDetails, productId]);

  const variants = useMemo(() => product?.variants || [], [product?.variants]);
  const attributeNames = useMemo(() => {
    const names = new Set();
    variants.forEach((variant) => {
      Object.keys(variant.attributes || {}).forEach((name) => names.add(name));
    });
    return [...names];
  }, [variants]);

  const attributeOptions = useMemo(() => {
    return attributeNames.reduce((options, name) => {
      const compatibleVariants = variants.filter((variant) =>
        Object.entries(selectedAttributes).every(
          ([selectedName, selectedValue]) =>
            selectedName === name ||
            !selectedValue ||
            variant.attributes?.[selectedName] === selectedValue,
        ),
      );
      options[name] = [
        ...new Set(
          compatibleVariants
            .map((variant) => variant.attributes?.[name])
            .filter(Boolean),
        ),
      ];
      return options;
    }, {});
  }, [attributeNames, selectedAttributes, variants]);

  const selectedVariant = useMemo(() => {
    if (!variants.length || !Object.keys(selectedAttributes).length) return null;

    const exactVariant = variants.find((variant) =>
      attributeNames.every(
        (name) => variant.attributes?.[name] === selectedAttributes[name],
      ),
    );

    if (exactVariant) return exactVariant;

    return (
      variants.find((variant) =>
        Object.entries(selectedAttributes).every(
          ([name, value]) => variant.attributes?.[name] === value,
        ),
      ) || variants[0]
    );
  }, [attributeNames, selectedAttributes, variants]);

  const variantImages = (selectedVariant?.images || []).filter(
    (image) => image?.url,
  );
  const images =
    variantImages.length > 0 ? variantImages : product?.images || [];
  const price = selectedVariant?.price || product?.price;
  const availableStock = selectedVariant?.stock ?? null;

  const handleAttributeSelect = (name, value) => {
    setSelectedAttributes((current) => ({ ...current, [name]: value }));
    setSelectedImageIndex(0);
  };

  const handleOriginalProductSelect = () => {
    setSelectedAttributes({});
    setSelectedImageIndex(0);
  };

  const handlePrevImage = () => {
    setSelectedImageIndex((prev) =>
      prev === 0 ? images.length - 1 : prev - 1,
    );
  };

  const handleNextImage = () => {
    setSelectedImageIndex((prev) =>
      prev === images.length - 1 ? 0 : prev + 1,
    );
  };

  const handleShare = async () => {
    if (navigator.clipboard) {
      await navigator.clipboard.writeText(window.location.href);
      setCopied(true);

      setTimeout(() => {
        setCopied(false);
      }, 2000);
    }
  };

  const handleAddToCart = () => {
    setAddedToCart(true);

    setTimeout(() => {
      setAddedToCart(false);
    }, 2500);
  };

  const handleBuyNow = () => {
    setBoughtNow(true);

    setTimeout(() => {
      setBoughtNow(false);
    }, 2500);
  };

  if (loading) {
    return (
      <div
        className="min-h-screen flex items-center justify-center"
        style={{
          backgroundColor: "#fbf9f6",
          fontFamily: "'Inter', sans-serif",
        }}
      >
        <div className="text-[10px] uppercase tracking-[0.3em] text-[#7A6E63]">
          Loading...
        </div>
      </div>
    );
  }

  if (!product) {
    return (
      <div
        className="min-h-screen flex flex-col items-center justify-center gap-4"
        style={{
          backgroundColor: "#fbf9f6",
          fontFamily: "'Inter', sans-serif",
        }}
      >
        <h2
          className="text-2xl"
          style={{
            fontFamily: "'Cormorant Garamond', serif",
            color: "#1b1c1a",
          }}
        >
          Product not found
        </h2>

        <button
          onClick={() => navigate("/")}
          className="text-[10px] uppercase tracking-[0.2em] text-[#C9A96E]"
        >
          Back to Archive
        </button>
      </div>
    );
  }

  return (
    <>
      <link
        href="https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@0,300;0,400;0,500;1,300;1,400&family=Inter:wght@300;400;500;600&display=swap"
        rel="stylesheet"
      />

      <div
        className="min-h-screen text-[#1b1c1a] flex flex-col justify-between selection:bg-[#C9A96E]/30"
        style={{
          backgroundColor: "#fbf9f6",
          fontFamily: "'Inter', sans-serif",
        }}
      >
        <div>
          {/* Header */}
          <header className="sticky top-0 z-40 bg-[#fbf9f6]/90 backdrop-blur-md border-b border-[#e4e2df]">
            <div className="max-w-6xl mx-auto px-4 sm:px-6 h-14 flex items-center justify-between">
              <button
                onClick={() => navigate(-1)}
                className="flex items-center gap-2 text-xs uppercase tracking-[0.2em] font-medium text-[#7A6E63] hover:text-[#C9A96E] transition-colors"
              >
                <ArrowLeft size={16} />
                <span>Back</span>
              </button>

              <button
                onClick={() => navigate("/")}
                className="text-sm uppercase tracking-[0.35em] font-medium text-[#C9A96E]"
                style={{
                  fontFamily: "'Cormorant Garamond', serif",
                }}
              >
                Snitch.
              </button>

              <div className="flex items-center gap-3 sm:gap-4">
                <button
                  onClick={handleShare}
                  className="p-2 text-[#7A6E63] hover:text-[#1b1c1a] transition-colors relative"
                >
                  <Share2 size={16} />

                  {copied && (
                    <span className="absolute -bottom-8 right-0 bg-[#1b1c1a] text-[#fbf9f6] text-[10px] uppercase tracking-widest px-2 py-1 rounded whitespace-nowrap">
                      Copied
                    </span>
                  )}
                </button>

                <button
                  onClick={() => setIsWishlisted(!isWishlisted)}
                  className={`p-2 transition-colors ${
                    isWishlisted
                      ? "text-[#C9A96E]"
                      : "text-[#7A6E63] hover:text-[#1b1c1a]"
                  }`}
                >
                  <Heart size={16} fill={isWishlisted ? "#C9A96E" : "none"} />
                </button>
              </div>
            </div>
          </header>

          {/* Breadcrumb */}
          <div className="max-w-6xl mx-auto px-4 sm:px-6 pt-4 pb-2">
            <nav className="flex items-center gap-2 text-[10px] uppercase tracking-[0.2em] text-[#7A6E63]">
              <Link to="/" className="hover:text-[#1b1c1a]">
                Archive
              </Link>

              <span>/</span>

              <span className="text-[#C9A96E]">Product Details</span>
            </nav>
          </div>

          {/* Product */}
          <main className="max-w-6xl mx-auto px-4 sm:px-6 py-8">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-10 items-center">
              {/* Images */}
              <div className="lg:col-span-6 flex flex-col-reverse md:flex-row gap-3 lg:gap-4 items-center justify-center">
                {images.length > 1 && (
                  <div className="flex md:flex-col items-center gap-1.5 w-full md:w-16 overflow-x-auto md:overflow-y-auto max-h-105 py-1">
                    <button
                      onClick={handlePrevImage}
                      className="p-1 border border-[#e4e2df] hover:border-[#C9A96E] text-[#1b1c1a] hover:text-[#C9A96E] rounded-full shrink-0"
                    >
                      <ChevronUp size={14} className="hidden md:block" />
                      <ChevronLeft size={14} className="block md:hidden" />
                    </button>

                    <div className="flex md:flex-col gap-2 overflow-auto w-full">
                      {images.map((image, index) => (
                        <button
                          key={image._id || index}
                          onClick={() => setSelectedImageIndex(index)}
                          className={`aspect-4/5 w-12 md:w-full overflow-hidden shrink-0 border ${
                            selectedImageIndex === index
                              ? "border-[#C9A96E] ring-1 ring-[#C9A96E]/50 opacity-100"
                              : "border-transparent opacity-50 hover:opacity-100"
                          }`}
                        >
                          <img
                            src={image.url}
                            alt={`${product.title} view ${index + 1}`}
                            className="w-full h-full object-cover"
                          />
                        </button>
                      ))}
                    </div>

                    <button
                      onClick={handleNextImage}
                      className="p-2 border border-[#e4e2df] hover:border-[#C9A96E] text-[#1b1c1a] hover:text-[#C9A96E] rounded-full shrink-0"
                    >
                      <ChevronDown size={14} className="hidden md:block" />
                      <ChevronRight size={14} className="block md:hidden" />
                    </button>
                  </div>
                )}

                {/* Main Image */}
                <div className="aspect-2/3 w-full max-w-130 overflow-hidden relative group rounded-sm border border-[#e4e2df]/60 bg-white">
                  <img
                    src={images[selectedImageIndex]?.url}
                    alt={product.title}
                    className="w-full h-full object-contain transition-transform duration-700"
                  />

                  {images.length > 1 && (
                    <>
                      <button
                        onClick={handlePrevImage}
                        className="absolute left-2 top-1/2 -translate-y-1/2 p-2 rounded-full bg-[#fbf9f6]/80 hover:bg-[#1b1c1a] text-[#1b1c1a] hover:text-[#fbf9f6]"
                      >
                        <ChevronLeft size={18} />
                      </button>

                      <button
                        onClick={handleNextImage}
                        className="absolute right-2 top-1/2 -translate-y-1/2 p-2 rounded-full bg-[#fbf9f6]/80 hover:bg-[#1b1c1a] text-[#1b1c1a] hover:text-[#fbf9f6]"
                      >
                        <ChevronRight size={18} />
                      </button>

                      <div className="absolute bottom-3 right-3 px-2 py-0.5 bg-[#1b1c1a]/70 text-[9px] text-white tracking-widest font-mono rounded">
                        {selectedImageIndex + 1} / {images.length}
                      </div>
                    </>
                  )}
                </div>
              </div>

              {/* Product Details */}
              <div className="lg:col-span-6 flex flex-col justify-center">
                <h1
                  className="text-2xl sm:text-3xl lg:text-4xl font-light leading-snug mb-3"
                  style={{
                    fontFamily: "'Cormorant Garamond', serif",
                  }}
                >
                  {product.title}
                </h1>

                <div className="w-10 h-px mb-4 bg-[#C9A96E]" />

                <div className="mb-4 flex items-baseline gap-2.5">
                  <span className="text-lg sm:text-xl font-medium tracking-wider">
                    {price?.currency}{" "}
                    {Number(price?.amount || 0).toLocaleString()}
                  </span>

                  <span className="text-[10px] uppercase tracking-[0.15em] text-[#7A6E63]">
                    Tax Included
                  </span>
                </div>

                <p className="text-xs leading-relaxed text-[#7A6E63] font-light mb-6">
                  {product.description}
                </p>

                {attributeNames.length > 0 && (
                  <div className="mb-6 space-y-5 border-y border-[#e4e2df] py-5">
                    <div className="flex items-center justify-between gap-3">
                      <button
                        type="button"
                        onClick={handleOriginalProductSelect}
                        className={`inline-flex items-center gap-2 rounded-full border px-3.5 py-2 text-[10px] font-medium uppercase tracking-[0.14em] transition-colors ${
                          !selectedVariant
                            ? "border-[#1b1c1a] bg-[#1b1c1a] text-white"
                            : "border-[#C9A96E] bg-[#fffdf9] text-[#1b1c1a] hover:bg-[#f5f3f0]"
                        }`}
                        aria-pressed={!selectedVariant}
                      >
                        <span
                          className={`flex h-4 w-4 items-center justify-center rounded-full border ${
                            !selectedVariant
                              ? "border-[#C9A96E] bg-[#C9A96E] text-[#1b1c1a]"
                              : "border-[#cfc9c2] text-transparent"
                          }`}
                        >
                          <Check size={12} strokeWidth={3} />
                        </span>
                        Original product
                      </button>
                      <span className="text-[9px] uppercase tracking-[0.16em] text-[#7A6E63]">
                        Choose a variant
                      </span>
                    </div>

                    <div className="flex items-center gap-3">
                      <span className="h-px flex-1 bg-[#e4e2df]" />
                      <span className="h-px flex-1 bg-[#e4e2df]" />
                    </div>

                    {attributeNames.map((name) => (
                      <div key={name}>
                        <div className="mb-2 flex items-center justify-between">
                          <span className="text-[10px] uppercase tracking-[0.2em] text-[#7A6E63]">
                            {name}
                          </span>
                          <span className="text-[11px] text-[#1b1c1a]">
                            {selectedAttributes[name] || "Select"}
                          </span>
                        </div>

                        <div className="flex flex-wrap gap-2">
                          {attributeOptions[name]?.map((value) => {
                            const selected = selectedAttributes[name] === value;
                            return (
                              <button
                                key={value}
                                type="button"
                                onClick={() => handleAttributeSelect(name, value)}
                                className={`border px-3 py-2 text-[10px] uppercase tracking-[0.15em] transition-colors ${
                                  selected
                                    ? "border-[#1b1c1a] bg-[#1b1c1a] text-white"
                                    : "border-[#e4e2df] text-[#7A6E63] hover:border-[#C9A96E] hover:text-[#1b1c1a]"
                                }`}
                              >
                                {value}
                              </button>
                            );
                          })}
                        </div>
                      </div>
                    ))}
                  </div>
                )}

                {selectedVariant && (
                  <div className="mb-6 flex items-center justify-between text-[10px] uppercase tracking-[0.16em]">
                    <span className="text-[#7A6E63]">
                      {availableStock > 0 ? `${availableStock} available` : "Out of stock"}
                    </span>
                    {selectedVariant.price || selectedVariant.images?.length > 0 ? (
                      <span className="text-[#C9A96E]">Variant selected</span>
                    ) : (
                      <span className="text-[#a49a90]">Showing product details</span>
                    )}
                  </div>
                )}

                {/* Actions */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-6">
                  <button
                    onClick={handleBuyNow}
                    disabled={availableStock === 0}
                    className="w-full py-3.5 px-5 text-xs uppercase tracking-[0.25em] font-medium flex items-center justify-center gap-2"
                    style={{
                      backgroundColor: boughtNow ? "#C9A96E" : "#1b1c1a",
                      color: boughtNow ? "#1b1c1a" : "#fbf9f6",
                    }}
                  >
                    {boughtNow ? (
                      <>
                        <Check size={15} />
                        <span>Processing...</span>
                      </>
                    ) : (
                      <>
                        <Zap size={15} />
                        <span>Buy Now</span>
                      </>
                    )}
                  </button>

                  <button
                    onClick={handleAddToCart}
                    disabled={availableStock === 0}
                    className="w-full py-3.5 px-5 text-xs uppercase tracking-[0.25em] font-medium flex items-center justify-center gap-2 border border-[#1b1c1a]"
                    style={{
                      backgroundColor: addedToCart ? "#1b1c1a" : "transparent",
                      color: addedToCart ? "#fbf9f6" : "#1b1c1a",
                    }}
                  >
                    {addedToCart ? (
                      <>
                        <Check size={15} />
                        <span>Added</span>
                      </>
                    ) : (
                      <>
                        <ShoppingBag size={15} />
                        <span>Add to Cart</span>
                      </>
                    )}
                  </button>
                </div>

                {/* Guarantees */}
                <div className="grid grid-cols-3 gap-2 py-4 border-t border-[#e4e2df] text-center">
                  <div className="flex flex-col items-center gap-1">
                    <Truck size={16} className="text-[#C9A96E]" />
                    <span className="text-[9px] uppercase tracking-wider text-[#7A6E63]">
                      Express Shipping
                    </span>
                  </div>

                  <div className="flex flex-col items-center gap-1">
                    <ShieldCheck size={16} className="text-[#C9A96E]" />
                    <span className="text-[9px] uppercase tracking-wider text-[#7A6E63]">
                      Authentic Guaranteed
                    </span>
                  </div>

                  <div className="flex flex-col items-center gap-1">
                    <RotateCcw size={16} className="text-[#C9A96E]" />
                    <span className="text-[9px] uppercase tracking-wider text-[#7A6E63]">
                      Seamless Returns
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </main>
        </div>

        {/* Footer */}
        <footer className="border-t py-6 text-center border-[#e4e2df]">
          <span
            className="text-[10px] uppercase tracking-[0.35em] text-[#C9A96E]"
            style={{
              fontFamily: "'Cormorant Garamond', serif",
            }}
          >
            Snitch. © {new Date().getFullYear()}
          </span>
        </footer>
      </div>
    </>
  );
};

export default ProductDetails;
