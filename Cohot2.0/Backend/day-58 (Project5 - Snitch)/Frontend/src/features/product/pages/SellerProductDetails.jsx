import { useEffect, useMemo, useRef, useState } from "react";
import { useNavigate, useParams } from "react-router";
import {
  ArrowLeft,
  Check,
  ImagePlus,
  Minus,
  Package,
  Plus,
  Save,
  Trash2,
  X,
} from "lucide-react";
import { useProduct } from "../hooks/useProduct.js";

const MAX_IMAGES = 7;
const STORAGE_KEY = "snitch-seller-product-variants";

const emptyAttribute = () => ({
  id: `${Date.now()}-${Math.random()}`,
  name: "",
  value: "",
});

const emptyDraft = () => ({
  attributes: [emptyAttribute()],
  price: "",
  currency: "INR",
  stock: "0",
  images: [],
});

const readImage = (file) =>
  new Promise((resolve, reject) => {
    const reader = new FileReader();
    reader.onload = () => resolve({ url: reader.result, name: file.name });
    reader.onerror = () => reject(new Error(`Could not read ${file.name}`));
    reader.readAsDataURL(file);
  });

const SellerProductDetails = () => {
  const { productId } = useParams();
  const navigate = useNavigate();
  const { handleGetProductDetails, handleAddProductVariant } = useProduct();
  const fileInputRef = useRef(null);
  const [productDetails, setProductDetails] = useState(null);
  const [variants, setVariants] = useState([]);
  const [draft, setDraft] = useState(emptyDraft);
  const [editingId, setEditingId] = useState(null);
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(true);
  const [saved, setSaved] = useState(false);

  useEffect(() => {
    let active = true;

    const fetchProductDetails = async () => {
      try {
        const data = await handleGetProductDetails(productId);
        const product = data?.data || data;
        if (active) {
          setProductDetails(product);
          try {
            const stored = JSON.parse(
              localStorage.getItem(`${STORAGE_KEY}:${productId}`) || "null",
            );
            setVariants(stored || product?.variants || []);
          } catch (storageError) {
            console.error("Could not restore product variants:", storageError);
            setVariants(product?.variants || []);
          }
        }
      } catch (fetchError) {
        console.error("Error fetching product details:", fetchError);
        if (active) navigate("/error");
      } finally {
        if (active) setLoading(false);
      }
    };

    fetchProductDetails();
    return () => {
      active = false;
    };
  }, [handleGetProductDetails, navigate, productId]);

  useEffect(() => {
    if (!productDetails || !productId) return;
    try {
      localStorage.setItem(`${STORAGE_KEY}:${productId}`, JSON.stringify(variants));
    } catch (storageError) {
      console.error("Could not save product variants locally:", storageError);
      setError("Local storage is full. Remove some variant images and try again.");
    }
  }, [productDetails, productId, variants]);

  const productImage = productDetails?.images?.[0]?.url;
  const totalStock = useMemo(
    () => variants.reduce((total, variant) => total + Number(variant.stock || 0), 0),
    [variants],
  );

  const updateDraft = (field, value) => {
    setDraft((current) => ({ ...current, [field]: value }));
    setError("");
  };

  const updateAttribute = (id, field, value) => {
    setDraft((current) => ({
      ...current,
      attributes: current.attributes.map((attribute) =>
        attribute.id === id ? { ...attribute, [field]: value } : attribute,
      ),
    }));
    setError("");
  };

  const addAttribute = () => {
    setDraft((current) => ({
      ...current,
      attributes: [...current.attributes, emptyAttribute()],
    }));
  };

  const removeAttribute = (id) => {
    setDraft((current) => ({
      ...current,
      attributes:
        current.attributes.length === 1
          ? current.attributes
          : current.attributes.filter((attribute) => attribute.id !== id),
    }));
  };

  const handleFiles = async (event) => {
    const files = Array.from(event.target.files || []);
    event.target.value = "";
    if (!files.length) return;

    const available = MAX_IMAGES - draft.images.length;
    if (files.length > available) {
      setError(`A variant can contain up to ${MAX_IMAGES} images.`);
    }

    try {
      const images = await Promise.all(
        files
          .slice(0, available)
          .filter((file) => file.type.startsWith("image/"))
          .map(readImage),
      );
      setDraft((current) => ({ ...current, images: [...current.images, ...images] }));
    } catch (imageError) {
      console.error("Could not add variant image:", imageError);
      setError("One of the selected images could not be read.");
    }
  };

  const removeImage = (index) => {
    setDraft((current) => ({
      ...current,
      images: current.images.filter((_, imageIndex) => imageIndex !== index),
    }));
  };

  const resetEditor = () => {
    setDraft(emptyDraft());
    setEditingId(null);
    setError("");
  };

  const saveVariant = async (event) => {
    event.preventDefault();
    const attributes = draft.attributes.reduce((result, attribute) => {
      const name = attribute.name.trim();
      const value = attribute.value.trim();
      if (name && value) result[name] = value;
      return result;
    }, {});

    if (!Object.keys(attributes).length) {
      setError("Add at least one attribute with a name and value.");
      return;
    }
    if (draft.price !== "" && Number(draft.price) < 0) {
      setError("Price cannot be negative.");
      return;
    }

    const variant = {
      _id: editingId || `${Date.now()}-${Math.random().toString(36).slice(2)}`,
      images: draft.images,
      stock: Math.max(0, Number(draft.stock) || 0),
      attributes,
      ...(draft.price !== ""
        ? { price: { amount: Number(draft.price), currency: draft.currency } }
        : {}),
    };

    await handleAddProductVariant(productId, variant);

    setVariants((current) =>
      editingId
        ? current.map((item) => (item._id === editingId ? variant : item))
        : [...current, variant],
    );
    setSaved(true);
    window.setTimeout(() => setSaved(false), 1800);
    resetEditor();
  };

  const editVariant = (variant) => {
    setEditingId(variant._id);
    setDraft({
      attributes: Object.entries(variant.attributes || {}).map(([name, value]) => ({
        id: `${Date.now()}-${name}`,
        name,
        value,
      })),
      price: variant.price?.amount ?? "",
      currency: variant.price?.currency || "INR",
      stock: variant.stock ?? 0,
      images: variant.images || [],
    });
    setError("");
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const updateStock = (id, change) => {
    setVariants((current) =>
      current.map((variant) =>
        variant._id === id
          ? { ...variant, stock: Math.max(0, Number(variant.stock || 0) + change) }
          : variant,
      ),
    );
  };

  const deleteVariant = (id) => {
    setVariants((current) => current.filter((variant) => variant._id !== id));
    if (editingId === id) resetEditor();
  };

  if (loading) {
    return <div className="min-h-screen bg-[#fbf9f6] p-10 text-sm text-[#7A6E63]">Loading product...</div>;
  }

  return (
    <div className="min-h-screen bg-[#fbf9f6] text-[#1b1c1a] selection:bg-[#C9A96E]/30">
      <header className="border-b border-[#e4e2df] bg-[#fbf9f6]/90 backdrop-blur-md">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-6 lg:px-16">
          <button onClick={() => navigate(-1)} className="flex items-center gap-3 text-xs uppercase tracking-[0.2em] text-[#7A6E63] transition hover:text-[#C9A96E]">
            <ArrowLeft size={16} /> Back to vault
          </button>
          <span className="text-xs font-medium uppercase tracking-[0.35em] text-[#C9A96E]">Snitch.</span>
        </div>
      </header>

      <main className="mx-auto max-w-7xl px-6 py-10 lg:px-16 lg:py-16">
        <section className="mb-12 flex flex-col gap-8 md:flex-row md:items-end md:justify-between">
          <div className="flex gap-5">
            <div className="h-24 w-20 shrink-0 overflow-hidden bg-[#f0eeea]">
              {productImage && <img src={productImage} alt="" className="h-full w-full object-cover" />}
            </div>
            <div>
              <p className="mb-3 text-[10px] uppercase tracking-[0.25em] text-[#C9A96E]">Product variants</p>
              <h1 className="max-w-2xl text-4xl font-light leading-tight lg:text-5xl" style={{ fontFamily: "'Cormorant Garamond', serif" }}>
                {productDetails?.title || "Untitled product"}
              </h1>
              <p className="mt-3 max-w-xl text-sm leading-relaxed text-[#7A6E63]">{productDetails?.description}</p>
            </div>
          </div>
          <div className="flex gap-8 border-l border-[#e4e2df] pl-6">
            <div><p className="text-2xl font-light">{variants.length}</p><p className="mt-1 text-[10px] uppercase tracking-[0.18em] text-[#7A6E63]">Variants</p></div>
            <div><p className="text-2xl font-light">{totalStock}</p><p className="mt-1 text-[10px] uppercase tracking-[0.18em] text-[#7A6E63]">Units in stock</p></div>
          </div>
        </section>

        <div className="grid gap-12 lg:grid-cols-[minmax(0,1fr)_minmax(0,1.15fr)]">
          <form onSubmit={saveVariant} className="h-fit border border-[#e4e2df] bg-white p-6 sm:p-8">
            <div className="mb-8 flex items-center justify-between border-b border-[#e4e2df] pb-5">
              <div><p className="text-[10px] uppercase tracking-[0.2em] text-[#C9A96E]">{editingId ? "Edit variant" : "New variant"}</p><h2 className="mt-2 text-2xl font-light" style={{ fontFamily: "'Cormorant Garamond', serif" }}>{editingId ? "Update details" : "Create a variant"}</h2></div>
              {editingId && <button type="button" onClick={resetEditor} className="text-[#7A6E63] hover:text-[#1b1c1a]" aria-label="Cancel editing"><X size={18} /></button>}
            </div>

            <div className="space-y-7">
              <div>
                <div className="mb-3 flex items-center justify-between"><label className="text-[10px] uppercase tracking-[0.18em] text-[#7A6E63]">Attributes <span className="text-[#C9A96E]">*</span></label><span className="text-[11px] text-[#a49a90]">e.g. Color, Size</span></div>
                <div className="space-y-3">
                  {draft.attributes.map((attribute) => (
                    <div key={attribute.id} className="flex gap-2">
                      <input value={attribute.name} onChange={(event) => updateAttribute(attribute.id, "name", event.target.value)} placeholder="Name" className="min-w-0 flex-1 border border-[#e4e2df] px-3 py-3 text-sm outline-none transition focus:border-[#C9A96E]" />
                      <input value={attribute.value} onChange={(event) => updateAttribute(attribute.id, "value", event.target.value)} placeholder="Value" className="min-w-0 flex-1 border border-[#e4e2df] px-3 py-3 text-sm outline-none transition focus:border-[#C9A96E]" />
                      <button type="button" onClick={() => removeAttribute(attribute.id)} className="px-2 text-[#a49a90] hover:text-[#1b1c1a]" aria-label="Remove attribute"><Minus size={16} /></button>
                    </div>
                  ))}
                </div>
                <button type="button" onClick={addAttribute} className="mt-3 flex items-center gap-2 text-[10px] uppercase tracking-[0.18em] text-[#7A6E63] hover:text-[#C9A96E]"><Plus size={14} /> Add attribute</button>
              </div>

              <div className="grid grid-cols-2 gap-4">
                <label className="text-[10px] uppercase tracking-[0.18em] text-[#7A6E63]">Price <span className="text-[#a49a90]">(optional)</span><input type="number" min="0" value={draft.price} onChange={(event) => updateDraft("price", event.target.value)} placeholder="0.00" className="mt-3 w-full border border-[#e4e2df] px-3 py-3 text-sm outline-none focus:border-[#C9A96E]" /></label>
                <label className="text-[10px] uppercase tracking-[0.18em] text-[#7A6E63]">Currency<select value={draft.currency} onChange={(event) => updateDraft("currency", event.target.value)} className="mt-3 w-full border border-[#e4e2df] bg-white px-3 py-3 text-sm outline-none focus:border-[#C9A96E]"><option>INR</option><option>USD</option><option>EUR</option><option>GBP</option><option>JPY</option></select></label>
              </div>

              <label className="block text-[10px] uppercase tracking-[0.18em] text-[#7A6E63]">Opening stock<input type="number" min="0" value={draft.stock} onChange={(event) => updateDraft("stock", event.target.value)} className="mt-3 w-full border border-[#e4e2df] px-3 py-3 text-sm outline-none focus:border-[#C9A96E]" /></label>

              <div>
                <div className="mb-3 flex items-center justify-between"><label className="text-[10px] uppercase tracking-[0.18em] text-[#7A6E63]">Images <span className="text-[#a49a90]">(optional)</span></label><span className="text-[11px] text-[#a49a90]">{draft.images.length}/{MAX_IMAGES}</span></div>
                <div className="grid grid-cols-4 gap-2">
                  {draft.images.map((image, index) => <div key={`${image.url}-${index}`} className="group relative aspect-square overflow-hidden bg-[#f0eeea]"><img src={image.url} alt={image.name || `Variant ${index + 1}`} className="h-full w-full object-cover" /><button type="button" onClick={() => removeImage(index)} className="absolute right-1 top-1 hidden rounded-full bg-white/90 p-1 group-hover:block" aria-label="Remove image"><X size={12} /></button></div>)}
                  {draft.images.length < MAX_IMAGES && <button type="button" onClick={() => fileInputRef.current?.click()} className="flex aspect-square flex-col items-center justify-center gap-2 border border-dashed border-[#cfc9c2] text-[#a49a90] transition hover:border-[#C9A96E] hover:text-[#C9A96E]"><ImagePlus size={18} /><span className="text-[9px] uppercase tracking-wider">Add</span></button>}
                </div>
                <input ref={fileInputRef} type="file" accept="image/*" multiple onChange={handleFiles} className="hidden" />
              </div>
            </div>

            {error && <p className="mt-6 border border-[#d9b4a8] bg-[#fff8f5] px-4 py-3 text-xs text-[#9c4c38]">{error}</p>}
            <button type="submit" className="mt-8 flex w-full items-center justify-center gap-2 bg-[#1b1c1a] px-5 py-4 text-[10px] uppercase tracking-[0.22em] text-white transition hover:bg-[#C9A96E] hover:text-[#1b1c1a]"><Save size={15} /> {editingId ? "Update variant" : "Save variant"}</button>
            {saved && <p className="mt-3 flex items-center justify-center gap-2 text-xs text-[#708264]"><Check size={14} /> Saved locally</p>}
          </form>

          <section>
            <div className="mb-6 flex items-end justify-between border-b border-[#e4e2df] pb-5"><div><p className="text-[10px] uppercase tracking-[0.2em] text-[#C9A96E]">Inventory</p><h2 className="mt-2 text-3xl font-light" style={{ fontFamily: "'Cormorant Garamond', serif" }}>Your variants</h2></div><Package size={20} className="text-[#C9A96E]" /></div>
            {variants.length ? <div className="space-y-4">{variants.map((variant) => <article key={variant._id} className="border border-[#e4e2df] bg-white p-5 sm:p-6"><div className="flex gap-4"><div className="flex shrink-0 gap-2">{variant.images?.slice(0, 2).map((image, index) => <img key={`${image.url}-${index}`} src={image.url} alt="" className="h-16 w-14 object-cover bg-[#f0eeea]" />)}{!variant.images?.length && <div className="flex h-16 w-14 items-center justify-center bg-[#f0eeea] text-[#a49a90]"><ImagePlus size={16} /></div>}</div><div className="min-w-0 flex-1"><div className="flex flex-wrap gap-2">{Object.entries(variant.attributes || {}).map(([name, value]) => <span key={name} className="bg-[#f5f3f0] px-2.5 py-1 text-[10px] uppercase tracking-wider text-[#7A6E63]">{name}: <strong className="font-medium text-[#1b1c1a]">{value}</strong></span>)}</div><div className="mt-3 flex flex-wrap items-center gap-x-5 gap-y-2 text-xs text-[#7A6E63]"><span>{variant.price ? `${variant.price.currency} ${Number(variant.price.amount).toLocaleString()}` : "Price not set"}</span><span className="text-[#e4e2df]">|</span><span className={variant.stock === 0 ? "text-[#9c4c38]" : ""}>{variant.stock} in stock</span></div></div><div className="flex items-start gap-1"><button type="button" onClick={() => editVariant(variant)} className="p-2 text-[#7A6E63] hover:text-[#C9A96E]">Edit</button><button type="button" onClick={() => deleteVariant(variant._id)} className="p-2 text-[#a49a90] hover:text-[#9c4c38]" aria-label="Delete variant"><Trash2 size={16} /></button></div></div><div className="mt-5 flex items-center justify-between border-t border-[#f0eeea] pt-4"><span className="text-[10px] uppercase tracking-[0.18em] text-[#a49a90]">Quick stock adjustment</span><div className="flex items-center gap-3"><button type="button" onClick={() => updateStock(variant._id, -1)} className="flex h-7 w-7 items-center justify-center border border-[#e4e2df] text-[#7A6E63] hover:border-[#C9A96E]" aria-label="Decrease stock"><Minus size={13} /></button><span className="min-w-8 text-center text-sm">{variant.stock}</span><button type="button" onClick={() => updateStock(variant._id, 1)} className="flex h-7 w-7 items-center justify-center border border-[#e4e2df] text-[#7A6E63] hover:border-[#C9A96E]" aria-label="Increase stock"><Plus size={13} /></button></div></div></article>)}</div> : <div className="border border-dashed border-[#cfc9c2] px-6 py-20 text-center"><p className="text-xl font-light" style={{ fontFamily: "'Cormorant Garamond', serif" }}>No variants yet</p><p className="mx-auto mt-3 max-w-xs text-sm leading-relaxed text-[#7A6E63]">Add a color, size, or any other attribute to begin managing this product.</p></div>}
          </section>
        </div>
      </main>
    </div>
  );
};

export default SellerProductDetails;
