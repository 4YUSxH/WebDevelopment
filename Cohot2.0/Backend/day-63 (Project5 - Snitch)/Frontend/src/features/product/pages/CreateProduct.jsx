import React, { useState, useRef } from "react";
import { Link, useNavigate } from "react-router";
import {
  ArrowLeft,
  HelpCircle,
  ChevronRight,
  CheckCircle2,
  CloudUpload,
  Star,
  Trash2,
  ShieldCheck,
  ArrowRight,
  DollarSign,
  Tag,
  Layers,
  AlertCircle,
} from "lucide-react";
import { useProduct } from "../hooks/useProduct.js";

const MAX_IMAGES = 7;

const CURRENCIES = [
  { code: "INR", symbol: "₹", label: "INR (₹)" },
  { code: "USD", symbol: "$", label: "USD ($)" },
  { code: "EUR", symbol: "€", label: "EUR (€)" },
  { code: "GBP", symbol: "£", label: "GBP (£)" },
];

const CreateProduct = () => {
  const navigate = useNavigate();

  // Form State according to requested data fields
  const [formData, setFormData] = useState({
    title: "",
    description: "",
    priceAmount: "",
    priceCurrency: "INR",
  });

  // Images state (files/previews) - capped at MAX_IMAGES (7)
  const [images, setImages] = useState([]);
  const [dragActive, setDragActive] = useState(false);
  const [imageError, setImageError] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);

  const fileInputRef = useRef(null);

  // Input change handler
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  // Image Upload Handlers enforcing MAX_IMAGES limit
  const handleFiles = (files) => {
    setImageError("");
    const fileList = Array.from(files);

    if (images.length >= MAX_IMAGES) {
      setImageError(`Maximum limit of ${MAX_IMAGES} photos reached.`);
      return;
    }

    const availableSlots = MAX_IMAGES - images.length;
    if (fileList.length > availableSlots) {
      setImageError(
        `Only ${MAX_IMAGES} photos are allowed in total. Excess photos were skipped.`,
      );
    }

    const selectedFiles = fileList.slice(0, availableSlots);
    const newImages = selectedFiles.map((file) => ({
      id: Math.random().toString(36).substring(2, 9),
      file,
      previewUrl: URL.createObjectURL(file),
      name: file.name,
    }));

    setImages((prev) => [...prev, ...newImages]);
  };

  const handleDrag = (e) => {
    e.preventDefault();
    e.stopPropagation();
    if (images.length >= MAX_IMAGES) return;
    if (e.type === "dragenter" || e.type === "dragover") {
      setDragActive(true);
    } else if (e.type === "dragleave") {
      setDragActive(false);
    }
  };

  const handleDrop = (e) => {
    e.preventDefault();
    e.stopPropagation();
    setDragActive(false);
    if (images.length >= MAX_IMAGES) {
      setImageError(`Maximum limit of ${MAX_IMAGES} photos reached.`);
      return;
    }
    if (e.dataTransfer.files && e.dataTransfer.files[0]) {
      handleFiles(e.dataTransfer.files);
    }
  };

  const removeImage = (id) => {
    setImageError("");
    setImages((prev) => prev.filter((img) => img.id !== id));
  };

  const setPrimaryImage = (index) => {
    if (index === 0) return;
    setImages((prev) => {
      const updated = [...prev];
      const [selected] = updated.splice(index, 1);
      return [selected, ...updated];
    });
  };

  const { handleCreateProduct } = useProduct();

  const handleSubmit = async (e) => {
    e.preventDefault();

    setIsSubmitting(true);

    try {
      const payload = new FormData();

      payload.append("title", formData.title);
      payload.append("description", formData.description);
      payload.append("priceAmount", Number(formData.priceAmount));
      payload.append("priceCurrency", formData.priceCurrency);

      images.forEach((img) => {
        payload.append("images", img.file);
      });

      await handleCreateProduct(payload);

      navigate("/");
    } catch (error) {
      console.error("Failed to create product:", error);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="min-h-screen bg-[#0A0A0A] text-[#EDEDED] flex flex-col font-sans antialiased selection:bg-[#F5C518]/30">
      {/* Top Header Bar */}
      <header className="sticky top-0 z-50 bg-[#0e0e0e]/90 backdrop-blur-md border-b border-[#262626]">
        <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
          <div className="flex items-center gap-4">
            <span className="text-[#F5C518] font-bold text-xl tracking-[0.25em] uppercase select-none">
              Snitch
            </span>
            <div className="hidden sm:block h-4 w-px bg-[#262626]" />
            <span className="hidden sm:inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded border border-[#262626] text-[10px] font-semibold tracking-widest uppercase text-[#8E8E8E]">
              <span className="w-1.5 h-1.5 rounded-full bg-[#F5C518] inline-block" />
              Admin / Catalog
            </span>
          </div>

          <div className="flex items-center gap-6">
            <Link
              to="/products"
              className="flex items-center gap-2 text-xs tracking-wider uppercase text-[#8E8E8E] hover:text-[#F5C518] transition-colors duration-200"
            >
              <ArrowLeft size={15} />
              <span>Back to Products</span>
            </Link>
            <div className="h-4 w-px bg-[#262626]" />
            <button
              type="button"
              aria-label="Help"
              className="w-8 h-8 rounded-lg border border-[#262626] flex items-center justify-center text-[#8E8E8E] hover:text-[#F5C518] hover:border-[#F5C518] transition-colors duration-200"
            >
              <HelpCircle size={16} />
            </button>
          </div>
        </div>
      </header>

      {/* Main Container with Ample Breathing Space */}
      <main className="flex-1 w-full max-w-4xl mx-auto px-6 py-12 md:py-16">
        {/* Breadcrumb & Header Title */}
        <div className="mb-10">
          <nav className="flex items-center gap-2 text-xs text-[#6B6B6B] uppercase tracking-widest mb-3">
            <span className="hover:text-[#EDEDED] cursor-pointer transition-colors">
              Catalog
            </span>
            <ChevronRight size={12} />
            <span className="hover:text-[#EDEDED] cursor-pointer transition-colors">
              Products
            </span>
            <ChevronRight size={12} />
            <span className="text-[#F5C518] font-semibold">New Entry</span>
          </nav>

          <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4">
            <div>
              <h1 className="text-3xl sm:text-4xl font-semibold tracking-tight text-white">
                ADD NEW PRODUCT
              </h1>
              <p className="text-sm text-[#8E8E8E] mt-2 leading-relaxed">
                Curate luxury architectural streetwear for the Snitch catalog.
              </p>
            </div>
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-md bg-[#141414] border border-[#262626] text-[#8E8E8E] text-xs tracking-wider uppercase">
              <CheckCircle2 size={14} className="text-[#F5C518]" />
              <span>Autosave Ready</span>
            </div>
          </div>
        </div>

        {/* Minimal & Seamless Form Card */}
        <form
          onSubmit={handleSubmit}
          className="bg-[#141414] border border-[#262626] rounded-xl p-8 sm:p-12 shadow-2xl space-y-10"
        >
          {/* Section 1: Basic Information */}
          <div className="space-y-6">
            <div className="flex items-center gap-2 pb-3 border-b border-[#262626]">
              <Tag size={16} className="text-[#F5C518]" />
              <h2 className="text-xs font-semibold tracking-[0.2em] uppercase text-[#8E8E8E]">
                General Information
              </h2>
            </div>

            {/* Product Title Field */}
            <div>
              <label
                htmlFor="product-title"
                className="block text-[#8E8E8E] text-xs font-medium tracking-widest uppercase mb-2"
              >
                Product Title <span className="text-[#F5C518]">*</span>
              </label>
              <input
                id="product-title"
                type="text"
                name="title"
                value={formData.title}
                onChange={handleChange}
                placeholder="e.g. Oversized Structured Wool Trench Coat"
                required
                className="w-full bg-[#1C1C1C] border border-[#2B2B2B] text-[#EDEDED] placeholder-[#555555] text-sm rounded-md px-4 py-3.5 outline-none focus:border-[#F5C518] transition-colors duration-200"
              />
            </div>

            {/* Description Field */}
            <div>
              <label
                htmlFor="product-description"
                className="block text-[#8E8E8E] text-xs font-medium tracking-widest uppercase mb-2"
              >
                Description & Editorial Notes{" "}
                <span className="text-[#F5C518]">*</span>
              </label>
              <textarea
                id="product-description"
                name="description"
                value={formData.description}
                onChange={handleChange}
                rows={4}
                placeholder="Detail the garment composition, cut silhouette, drop season notes, and styling recommendations..."
                required
                className="w-full bg-[#1C1C1C] border border-[#2B2B2B] text-[#EDEDED] placeholder-[#555555] text-sm rounded-md p-4 outline-none focus:border-[#F5C518] transition-colors duration-200 resize-y"
              />
              <div className="flex justify-between items-center mt-2 text-xs text-[#555555]">
                <span>Markdown supported</span>
                <span>{formData.description.length} / 1200</span>
              </div>
            </div>
          </div>

          {/* Section 2: Valuation & Pricing */}
          <div className="space-y-6">
            <div className="flex items-center gap-2 pb-3 border-b border-[#262626]">
              <DollarSign size={16} className="text-[#F5C518]" />
              <h2 className="text-xs font-semibold tracking-[0.2em] uppercase text-[#8E8E8E]">
                Pricing & Currency
              </h2>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-5">
              {/* Price Currency Field */}
              <div>
                <label
                  htmlFor="priceCurrency"
                  className="block text-[#8E8E8E] text-xs font-medium tracking-widest uppercase mb-2"
                >
                  Currency <span className="text-[#F5C518]">*</span>
                </label>
                <select
                  id="priceCurrency"
                  name="priceCurrency"
                  value={formData.priceCurrency}
                  onChange={handleChange}
                  className="w-full bg-[#1C1C1C] border border-[#2B2B2B] text-[#F5C518] text-sm font-semibold rounded-md px-4 py-3.5 outline-none focus:border-[#F5C518] transition-colors duration-200 cursor-pointer"
                >
                  {CURRENCIES.map((curr) => (
                    <option
                      key={curr.code}
                      value={curr.code}
                      className="bg-[#141414] text-[#EDEDED]"
                    >
                      {curr.label}
                    </option>
                  ))}
                </select>
              </div>

              {/* Price Amount Field */}
              <div className="sm:col-span-2">
                <label
                  htmlFor="priceAmount"
                  className="block text-[#8E8E8E] text-xs font-medium tracking-widest uppercase mb-2"
                >
                  Price Amount <span className="text-[#F5C518]">*</span>
                </label>
                <div className="relative">
                  <span className="absolute left-4 top-1/2 -translate-y-1/2 text-[#F5C518] text-sm font-semibold select-none">
                    {CURRENCIES.find((c) => c.code === formData.priceCurrency)
                      ?.symbol || "₹"}
                  </span>
                  <input
                    id="priceAmount"
                    type="number"
                    name="priceAmount"
                    value={formData.priceAmount}
                    onChange={handleChange}
                    placeholder="0.00"
                    step="0.01"
                    min="0"
                    required
                    className="w-full bg-[#1C1C1C] border border-[#2B2B2B] text-[#EDEDED] placeholder-[#555555] text-sm rounded-md pl-10 pr-4 py-3.5 outline-none focus:border-[#F5C518] transition-colors duration-200"
                  />
                </div>
              </div>
            </div>
          </div>

          {/* Section 3: Media Upload (Max 7 Photos) */}
          <div className="space-y-6">
            <div className="flex items-center justify-between pb-3 border-b border-[#262626]">
              <div className="flex items-center gap-2">
                <Layers size={16} className="text-[#F5C518]" />
                <h2 className="text-xs font-semibold tracking-[0.2em] uppercase text-[#8E8E8E]">
                  Product Media (Max 7 Photos)
                </h2>
              </div>
              <span className="text-xs font-mono text-[#F5C518]">
                {images.length} / {MAX_IMAGES} Uploaded
              </span>
            </div>

            {/* Error / Warning Alert */}
            {imageError && (
              <div className="flex items-center gap-2 px-4 py-3 rounded-md bg-red-500/10 border border-red-500/30 text-red-400 text-xs">
                <AlertCircle size={15} className="shrink-0" />
                <span>{imageError}</span>
              </div>
            )}

            {/* Drag & Drop Upload Zone */}
            <div
              onDragEnter={handleDrag}
              onDragLeave={handleDrag}
              onDragOver={handleDrag}
              onDrop={handleDrop}
              onClick={() => {
                if (images.length < MAX_IMAGES) {
                  fileInputRef.current?.click();
                }
              }}
              className={`group border-2 border-dashed rounded-xl p-8 sm:p-10 flex flex-col items-center justify-center text-center transition-all duration-200 ${
                images.length >= MAX_IMAGES
                  ? "border-[#262626] bg-[#141414] cursor-not-allowed opacity-60"
                  : dragActive
                    ? "border-[#F5C518] bg-[#F5C518]/5 cursor-pointer"
                    : "border-[#2B2B2B] hover:border-[#F5C518]/60 bg-[#1C1C1C]/40 hover:bg-[#1C1C1C] cursor-pointer"
              }`}
            >
              <input
                ref={fileInputRef}
                type="file"
                accept="image/*"
                multiple
                disabled={images.length >= MAX_IMAGES}
                onChange={(e) => e.target.files && handleFiles(e.target.files)}
                className="hidden"
              />
              <div className="w-12 h-12 rounded-full bg-[#262626] flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-200">
                <CloudUpload size={22} className="text-[#F5C518]" />
              </div>
              {images.length >= MAX_IMAGES ? (
                <p className="text-sm font-medium text-[#8E8E8E]">
                  Maximum photo limit reached ({MAX_IMAGES}/{MAX_IMAGES}).
                  Remove a photo to upload a new one.
                </p>
              ) : (
                <>
                  <p className="text-sm font-medium text-white mb-1">
                    Drag & drop product images or{" "}
                    <span className="text-[#F5C518] underline underline-offset-4 decoration-[#F5C518]/40 group-hover:decoration-[#F5C518]">
                      browse files
                    </span>
                  </p>
                  <p className="text-xs text-[#6B6B6B] max-w-sm">
                    Upload up to{" "}
                    <strong className="text-[#EDEDED]">7 photos max</strong>.
                    High-res JPG, PNG or WEBP (Minimum 2000x2000px clarity).
                  </p>
                </>
              )}
            </div>

            {/* Uploaded Images Grid Matrix */}
            {images.length > 0 && (
              <div>
                <span className="block text-xs font-medium tracking-wider uppercase text-[#8E8E8E] mb-3">
                  Gallery Grid ({images.length}/{MAX_IMAGES})
                </span>
                <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
                  {images.map((img, idx) => (
                    <div
                      key={img.id}
                      className="relative group rounded-lg overflow-hidden border border-[#2B2B2B] bg-[#1C1C1C] aspect-[4/5]"
                    >
                      <img
                        src={img.previewUrl}
                        alt={img.name || `Product image ${idx + 1}`}
                        className="w-full h-full object-cover"
                      />
                      {/* Hover Overlay */}
                      <div className="absolute inset-0 bg-[#0A0A0A]/70 opacity-0 group-hover:opacity-100 transition-opacity duration-200 flex items-center justify-center gap-3">
                        <button
                          type="button"
                          onClick={() => setPrimaryImage(idx)}
                          title="Set as primary thumbnail"
                          className="p-2 rounded-md bg-[#141414] text-[#F5C518] hover:bg-[#262626] transition-colors"
                        >
                          <Star
                            size={14}
                            className={idx === 0 ? "fill-[#F5C518]" : ""}
                          />
                        </button>
                        <button
                          type="button"
                          onClick={() => removeImage(img.id)}
                          title="Remove image"
                          className="p-2 rounded-md bg-[#141414] text-red-400 hover:bg-[#262626] transition-colors"
                        >
                          <Trash2 size={14} />
                        </button>
                      </div>

                      {/* Primary Badge */}
                      {idx === 0 && (
                        <span className="absolute top-2 left-2 px-2 py-0.5 rounded bg-[#0A0A0A]/90 text-[10px] font-semibold tracking-wider text-[#F5C518] uppercase">
                          Primary
                        </span>
                      )}
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>

          {/* Form Actions */}
          <div className="pt-8 border-t border-[#262626] flex flex-col-reverse sm:flex-row items-center justify-between gap-4">
            <button
              type="button"
              onClick={() => navigate("/products")}
              className="w-full sm:w-auto px-6 py-3.5 rounded-md border border-[#2B2B2B] text-[#8E8E8E] hover:text-white hover:border-[#3D3D3D] text-xs tracking-widest uppercase transition-colors duration-200"
            >
              Cancel
            </button>

            <button
              id="create-product-submit"
              type="submit"
              disabled={isSubmitting}
              className="w-full sm:w-auto sm:min-w-[220px] bg-[#F5C518] hover:bg-[#E0B210] text-[#0A0A0A] font-semibold text-xs tracking-widest uppercase py-4 px-8 rounded-md transition-colors duration-200 flex items-center justify-center gap-2 shadow-lg shadow-[#F5C518]/10 cursor-pointer disabled:opacity-50"
            >
              <span>{isSubmitting ? "Creating..." : "Publish Product"}</span>
              <ArrowRight size={16} />
            </button>
          </div>
        </form>

        {/* Security / System Footer Note */}
        <div className="mt-8 flex flex-col sm:flex-row items-center justify-between text-[#555555] text-xs gap-2 px-2">
          <div className="flex items-center gap-2">
            <ShieldCheck size={14} className="text-[#F5C518]" />
            <span>Encrypted SKU & catalog submission protocol</span>
          </div>
          <span>Snitch Commerce Engine v4.12</span>
        </div>
      </main>

      {/* Footer */}
      <footer className="flex flex-wrap items-center justify-between gap-4 px-10 py-6 border-t border-[#1A1A1A] mt-16">
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

export default CreateProduct;
