import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import {
  Trash2,
  Plus,
  Minus,
  ShoppingCart,
  ArrowLeft,
  Heart,
  Check,
} from "lucide-react";

export default function Cart() {
  const navigate = useNavigate();
  const [cartItems, setCartItems] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Products cart data
    setCartItems([
      {
        id: 1,
        name: "Regular Pads - Neem Care",
        price: 299,
        quantity: 1,
        image: "https://encrypted-tbn1.gstatic.com/licensed-image?q=tbn:ANd9GcToJU3LpmgMrQ8KTYDC2uS7j3pPRVwB2ZzgqqyRE1lMK1iouYBICp2Z0OsF5iELGnGm_TNV774Oeq4Fe_g",
        flavor: "Neem Care",
        type: "Regular",
        description: "100% natural herbal pads with neem extract"
      },
      {
        id: 2,
        name: "Heavy Flow Pads - Lavender Fresh",
        price: 399,
        quantity: 2,
        image: "https://encrypted-tbn1.gstatic.com/licensed-image?q=tbn:ANd9GcToJU3LpmgMrQ8KTYDC2uS7j3pPRVwB2ZzgqqyRE1lMK1iouYBICp2Z0OsF5iELGnGm_TNV774Oeq4Fe_g",
        flavor: "Lavender Fresh",
        type: "Heavy Flow",
        description: "Super absorbent with lavender freshness"
      },
      {
        id: 3,
        name: "XL Pads - Rose Soft",
        price: 349,
        quantity: 1,
        image: "https://encrypted-tbn1.gstatic.com/licensed-image?q=tbn:ANd9GcToJU3LpmgMrQ8KTYDC2uS7j3pPRVwB2ZzgqqyRE1lMK1iouYBICp2Z0OsF5iELGnGm_TNV774Oeq4Fe_g",
        flavor: "Rose Soft",
        type: "XL",
        description: "Extra large pads with rose extract"
      },
    ]);
    setLoading(false);
  }, []);

  const updateQuantity = (id, newQuantity) => {
    if (newQuantity < 1) {
      removeItem(id);
      return;
    }
    setCartItems(
      cartItems.map((item) =>
        item.id === id ? { ...item, quantity: newQuantity } : item
      )
    );
  };

  const removeItem = (id) => {
    setCartItems(cartItems.filter((item) => item.id !== id));
  };

  const subtotal = cartItems.reduce(
    (total, item) => total + item.price * item.quantity,
    0
  );
  const tax = Math.round(subtotal * 0.18);
  const total = subtotal + tax;

  if (loading) {
    return (
      <div className="min-h-screen bg-[#f5faf3] flex items-center justify-center">
        <div className="text-center">
          <div className="inline-flex h-12 w-12 animate-spin rounded-full border-4 border-emerald-600 border-r-transparent"></div>
          <p className="mt-4 text-emerald-800 font-semibold">Loading cart...</p>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-[#f5faf3] py-8 px-4 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-6xl">
        {/* Header */}
        <div className="mb-8 flex items-center gap-4">
          <button
            onClick={() => navigate("/")}
            className="inline-flex items-center gap-2 rounded-lg bg-white px-4 py-2.5 text-sm font-bold text-emerald-700 hover:bg-emerald-50 transition border border-emerald-200 shadow-sm"
          >
            <ArrowLeft size={18} />
            Back to Home
          </button>
          <h1 className="text-3xl font-extrabold text-emerald-950">
            Shopping Cart
          </h1>
        </div>

        {cartItems.length === 0 ? (
          <div className="rounded-2xl border border-emerald-100 bg-white p-12 text-center shadow-sm">
            <ShoppingCart
              size={48}
              className="mx-auto text-emerald-200 mb-4"
            />
            <h2 className="text-xl font-bold text-emerald-950 mb-2">
              Your cart is empty
            </h2>
            <p className="text-slate-600 mb-6">
              Add some PadKingoo products to get started!
            </p>
            <button
              onClick={() => navigate("/products")}
              className="inline-flex items-center gap-2 rounded-xl bg-gradient-to-r from-emerald-600 to-teal-600 px-6 py-3 text-sm font-bold text-white hover:from-emerald-700 hover:to-teal-700 transition shadow-md"
            >
              Continue Shopping
            </button>
          </div>
        ) : (
          <div className="grid grid-cols-1 gap-8 lg:grid-cols-3">
            {/* Cart Items */}
            <div className="lg:col-span-2 space-y-4">
              {cartItems.map((item) => (
                <div
                  key={item.id}
                  className="rounded-2xl border border-emerald-100 bg-white p-4 shadow-sm hover:shadow-md transition"
                >
                  <div className="flex gap-4">
                    {/* Product Image */}
                    <div className="h-32 w-32 shrink-0 rounded-2xl bg-emerald-50 border border-emerald-100 overflow-hidden shadow-sm">
                      <img
                        src={item.image}
                        alt={item.name}
                        className="h-full w-full object-cover"
                      />
                    </div>

                    {/* Product Details */}
                    <div className="flex-1">
                      <h3 className="font-bold text-lg text-emerald-950">
                        {item.name}
                      </h3>
                      <p className="text-sm text-slate-600 mt-1">
                        {item.description}
                      </p>
                      <div className="mt-2 flex gap-2 text-xs">
                        <span className="inline-flex items-center gap-1 rounded-full bg-emerald-100 px-3 py-1 font-semibold text-emerald-700">
                          {item.type}
                        </span>
                        <span className="inline-flex items-center gap-1 rounded-full bg-teal-100 px-3 py-1 font-semibold text-teal-700">
                          {item.flavor}
                        </span>
                      </div>

                      {/* Quantity Controls */}
                      <div className="mt-4 flex items-center gap-3">
                        <button
                          onClick={() =>
                            updateQuantity(item.id, item.quantity - 1)
                          }
                          className="flex h-9 w-9 items-center justify-center rounded-lg bg-emerald-100 text-emerald-700 hover:bg-emerald-200 transition font-bold"
                        >
                          <Minus size={18} />
                        </button>
                        <span className="w-8 text-center font-bold text-emerald-950 text-lg">
                          {item.quantity}
                        </span>
                        <button
                          onClick={() =>
                            updateQuantity(item.id, item.quantity + 1)
                          }
                          className="flex h-9 w-9 items-center justify-center rounded-lg bg-emerald-100 text-emerald-700 hover:bg-emerald-200 transition font-bold"
                        >
                          <Plus size={18} />
                        </button>
                      </div>
                    </div>

                    {/* Price & Remove */}
                    <div className="flex flex-col items-end justify-between gap-4">
                      <button
                        onClick={() => removeItem(item.id)}
                        className="flex h-10 w-10 items-center justify-center rounded-lg bg-rose-100 text-rose-700 hover:bg-rose-200 transition shadow-sm"
                      >
                        <Trash2 size={18} />
                      </button>
                      <div className="text-right">
                        <p className="text-sm text-slate-500">
                          ₹{item.price} × {item.quantity}
                        </p>
                        <p className="text-xl font-extrabold text-emerald-600">
                          ₹{item.price * item.quantity}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Order Summary */}
            <div className="h-fit rounded-2xl border border-emerald-100 bg-white p-6 shadow-sm sticky top-24">
              <h2 className="mb-4 text-lg font-bold text-emerald-950">
                Order Summary
              </h2>

              <div className="space-y-3 border-b border-emerald-100 pb-4">
                <div className="flex justify-between text-sm">
                  <span className="text-slate-600">Subtotal</span>
                  <span className="font-semibold text-emerald-950">
                    ₹{subtotal}
                  </span>
                </div>
                <div className="flex justify-between text-sm">
                  <span className="text-slate-600">Tax (18%)</span>
                  <span className="font-semibold text-emerald-950">₹{tax}</span>
                </div>
                <div className="flex justify-between text-sm">
                  <span className="text-slate-600">Shipping</span>
                  <span className="font-semibold text-emerald-950">FREE</span>
                </div>
              </div>

              <div className="mt-4 flex justify-between">
                <span className="font-bold text-emerald-950">Total</span>
                <span className="text-2xl font-extrabold text-emerald-600">
                  ₹{total}
                </span>
              </div>

              <button className="mt-6 w-full rounded-xl bg-gradient-to-r from-emerald-600 to-teal-600 px-6 py-3.5 font-bold text-white hover:from-emerald-700 hover:to-teal-700 transition shadow-md flex items-center justify-center gap-2">
                <Check size={18} />
                Proceed to Checkout
              </button>

              <button
                onClick={() => navigate("/products")}
                className="mt-3 w-full rounded-xl border-2 border-emerald-200 px-6 py-3 font-bold text-emerald-700 hover:bg-emerald-50 transition"
              >
                Continue Shopping
              </button>

              <div className="mt-6 space-y-2 rounded-xl bg-emerald-50 p-4 border border-emerald-100">
                <div className="flex gap-2">
                  <Heart size={16} className="shrink-0 text-emerald-700" />
                  <p className="text-xs text-emerald-800">
                    <strong>Free shipping</strong> on orders above ₹500
                  </p>
                </div>
                <div className="flex gap-2">
                  <Check size={16} className="shrink-0 text-emerald-700" />
                  <p className="text-xs text-emerald-800">
                    <strong>100% Natural</strong> herbal pads
                  </p>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
