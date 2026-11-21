import { useState, useEffect } from "react";
import {
  Mail,
  Phone,
  User,
  LogOut,
  ArrowLeft,
  Heart,
  Edit2,
  Save,
  X,
  ShieldCheck,
  Sparkles,
  CheckCircle2,
  Gift,
  RefreshCw,
  Leaf,
} from "lucide-react";
import LogoImg from "../assets/PadKINGO Herbal Care Logo.png";
import { putRequest, noTokenPostRequest, getRequest } from "../Helpers/index";
import Cookies from "js-cookie";

const LEFT_VISUAL_URL =
  "https://encrypted-tbn1.gstatic.com/licensed-image?q=tbn:ANd9GcToJU3LpmgMrQ8KTYDC2uS7j3pPRVwB2ZzgqqyRE1lMK1iouYBICp2Z0OsF5iELGnGm_TNV774Oeq4Fe_g";

export default function Login() {
  const [step, setStep] = useState("home"); // home, login, login-otp, signup, otp, profile
  const [loading, setLoading] = useState(false);
  const [savingProfile, setSavingProfile] = useState(false);
  const [user, setUser] = useState(null);
  const [isEditingProfile, setIsEditingProfile] = useState(false);

  const [formData, setFormData] = useState({
    email: "",
    otp: "",
    name: "",
    phone: "",
  });

  const [editData, setEditData] = useState({
    name: "",
    phone: "",
  });

  const [feedback, setFeedback] = useState({ type: "", text: "" });

  // No need for API_URL - helpers handle it automatically
  const clearFeedback = () => setFeedback({ type: "", text: "" });

  useEffect(() => {
    const token = Cookies.get("padkingoo_token");
    if (token) {
      fetchProfile();
    }
  }, []);

  const getInitials = (name = "") => {
    const parts = name.trim().split(/\s+/).filter(Boolean);
    if (!parts.length) return "PK";
    if (parts.length === 1) return parts[0].slice(0, 2).toUpperCase();
    return `${parts[0][0]}${parts[parts.length - 1][0]}`.toUpperCase();
  };

  const fetchProfile = async () => {
    try {
      const response = await getRequest("auth/profile");

      if (response?.status === 200) {
        const data = response.data;
        setUser(data.user);
        setEditData({
          name: data.user?.name || "",
          phone: data.user?.phone || "",
        });
        setStep("profile");
      } else {
        Cookies.remove("padkingoo_token");
        setStep("home");
      }
    } catch (error) {
      console.error("Profile fetch error:", error);
      Cookies.remove("padkingoo_token");
      setStep("home");
    }
  };

  const sendOtpRequest = async (email, nextStep) => {
    setLoading(true);
    clearFeedback();
    try {
      const response = await noTokenPostRequest({
        url: "auth/send-otp",
        cred: { email: email.trim() },
      });

      if (response?.status === 200) {
        setFeedback({ type: "success", text: `OTP sent to ${email.trim()}` });
        setStep(nextStep);
      } else {
        setFeedback({
          type: "error",
          text:
            response?.data?.message || "Could not send OTP. Please try again.",
        });
      }
    } catch (error) {
      console.error("Send OTP error:", error);
      setFeedback({
        type: "error",
        text:
          error?.response?.data?.message || "Network error while sending OTP.",
      });
    } finally {
      setLoading(false);
    }
  };

  const handleLogin = async (e) => {
    e.preventDefault();
    if (!formData.email.trim()) {
      setFeedback({ type: "error", text: "Please enter your email address." });
      return;
    }
    await sendOtpRequest(formData.email, "login-otp");
  };

  const handleLoginOTP = async (e) => {
    e.preventDefault();
    if (formData.otp.trim().length < 4) {
      setFeedback({ type: "error", text: "Please enter a valid OTP." });
      return;
    }

    setLoading(true);
    clearFeedback();
    try {
      const response = await noTokenPostRequest({
        url: "auth/verify-otp",
        cred: {
          email: formData.email.trim(),
          otp: formData.otp.trim(),
        },
      });

      if (response?.status === 200) {
        const data = response.data;
        Cookies.set("padkingoo_token", data.token);
        setUser(data.user);
        setEditData({
          name: data.user?.name || "",
          phone: data.user?.phone || "",
        });
        clearFeedback();
        setStep("profile");
      } else {
        setFeedback({
          type: "error",
          text: response?.data?.message || "Invalid or expired OTP.",
        });
      }
    } catch (error) {
      console.error("Verify login OTP error:", error);
      setFeedback({
        type: "error",
        text: error?.response?.data?.message || "Error verifying OTP.",
      });
    } finally {
      setLoading(false);
    }
  };

  const handleSendOTP = async (e) => {
    e.preventDefault();
    if (
      !formData.name.trim() ||
      !formData.email.trim() ||
      !formData.phone.trim()
    ) {
      setFeedback({
        type: "error",
        text: "Please fill in your name, email, and phone number.",
      });
      return;
    }
    await sendOtpRequest(formData.email, "otp");
  };

  const handleVerifyOTP = async (e) => {
    e.preventDefault();
    if (formData.otp.trim().length < 4) {
      setFeedback({
        type: "error",
        text: "Please enter the OTP sent to your email.",
      });
      return;
    }

    setLoading(true);
    clearFeedback();
    try {
      const response = await noTokenPostRequest({
        url: "auth/verify-otp",
        cred: {
          email: formData.email.trim(),
          otp: formData.otp.trim(),
          name: formData.name.trim(),
          phone: formData.phone.trim(),
        },
      });

      if (response?.status === 200) {
        const data = response.data;
        Cookies.set("padkingoo_token", data.token);
        setUser(data.user);
        setEditData({
          name: data.user?.name || "",
          phone: data.user?.phone || "",
        });
        clearFeedback();
        setStep("profile");
      } else {
        setFeedback({
          type: "error",
          text: response?.data?.message || "Account verification failed.",
        });
      }
    } catch (error) {
      console.error("Verify signup OTP error:", error);
      setFeedback({
        type: "error",
        text: error?.response?.data?.message || "Error creating account.",
      });
    } finally {
      setLoading(false);
    }
  };

  const handleSaveProfile = async (e) => {
    e.preventDefault();
    if (!editData.name.trim()) {
      setFeedback({ type: "error", text: "Name cannot be empty." });
      return;
    }

    setSavingProfile(true);
    clearFeedback();
    try {
      const response = await putRequest({
        url: "auth/profile",
        cred: {
          name: editData.name.trim(),
          phone: editData.phone.trim(),
        },
      });

      if (response?.status === 200) {
        const updatedUser = response.data.user || {
          ...user,
          name: editData.name.trim(),
          phone: editData.phone.trim(),
        };
        setUser(updatedUser);
        setIsEditingProfile(false);
        setFeedback({ type: "success", text: "Profile updated successfully." });
      } else {
        setFeedback({
          type: "error",
          text: response?.data?.message || "Could not update profile.",
        });
      }
    } catch (error) {
      console.error("Profile update error:", error);
      setFeedback({
        type: "error",
        text:
          error?.response?.data?.message ||
          "Network error while saving changes.",
      });
    } finally {
      setSavingProfile(false);
    }
  };

  const handleLogout = () => {
    Cookies.remove("padkingoo_token");
    setUser(null);
    setIsEditingProfile(false);
    clearFeedback();
    setStep("home");
    setFormData({ email: "", otp: "", name: "", phone: "" });
  };

  const renderFeedbackBanner = () => {
    if (!feedback.text) return null;
    const isSuccess = feedback.type === "success";
    return (
      <div
        role="status"
        className={`flex items-center gap-2.5 rounded-xl border px-4 py-3 text-xs font-semibold ${
          isSuccess
            ? "border-emerald-200 bg-emerald-50 text-emerald-800"
            : "border-rose-200 bg-rose-50 text-rose-700"
        }`}
      >
        {isSuccess ? (
          <CheckCircle2 size={16} className="shrink-0 text-emerald-600" />
        ) : (
          <X size={16} className="shrink-0 text-rose-600" />
        )}
        <span>{feedback.text}</span>
      </div>
    );
  };

  return (
    <div className="min-h-screen bg-[#f5faf3] p-4 sm:p-6 lg:p-8 text-slate-800">
      <div className="mx-auto grid max-w-6xl grid-cols-1 overflow-hidden rounded-[2rem] border border-emerald-900/10 bg-white shadow-2xl shadow-emerald-950/10 lg:min-h-[680px] lg:grid-cols-12">
        {/* Left Wide Image + About PadKINGOO */}
        <aside className="relative flex flex-col justify-between overflow-hidden bg-emerald-950 p-6 sm:p-8 lg:col-span-7 lg:p-10 text-white">
          <img
            src={LEFT_VISUAL_URL}
            alt="Natural cotton and botanical wellness care"
            className="absolute inset-0 h-full w-full object-cover object-center opacity-55 transition duration-700"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-emerald-950 via-emerald-950/65 to-emerald-900/35" />

          {/* Top Brand Badge */}
          <div className="relative z-10 flex items-center justify-between gap-4">
            {/* Top Brand Logo */}
            <div className="relative z-10 flex items-center justify-start">
              <img
                src={LogoImg}
                alt="PadKINGO Herbal Care Logo"
                className="h-16 w-auto object-contain object-left"
              />
            </div>

            <span className="hidden sm:inline-flex items-center gap-1.5 rounded-full border border-emerald-300/30 bg-emerald-400/15 px-3 py-1 text-xs font-semibold text-emerald-100 backdrop-blur-sm">
              <Leaf size={13} />
              Gentle &amp; Mindful Care
            </span>
          </div>

          {/* Bottom About Story & Pillars */}
          <div className="relative z-10 mt-10 lg:mt-auto space-y-6">
            <div>
              <p className="text-xs font-bold uppercase tracking-[0.2em] text-emerald-300">
                About PadKingoo
              </p>
              <h2 className="mt-2 text-2xl sm:text-3xl lg:text-4xl font-extrabold leading-tight tracking-tight">
                Natural Comfort, Every Day
              </h2>
              <p className="mt-3 max-w-xl text-sm leading-relaxed text-emerald-50/90">
                PadKingoo brings you premium herbal sanitary pads crafted with
                natural ingredients. Soft, breathable, and designed for comfort
                during every moment of your cycle.
              </p>
            </div>

            <div className="grid grid-cols-1 gap-3 sm:grid-cols-3">
              <div className="rounded-2xl border border-white/15 bg-white/10 p-4 backdrop-blur-md">
                <p className="text-xs font-bold text-emerald-200">
                  🌿 100% Natural
                </p>
                <p className="mt-1 text-xs text-white/85">
                  Herbal ingredients like neem, aloe vera, and turmeric.
                </p>
              </div>
              <div className="rounded-2xl border border-white/15 bg-white/10 p-4 backdrop-blur-md">
                <p className="text-xs font-bold text-emerald-200">
                  ✨ Ultra Soft
                </p>
                <p className="mt-1 text-xs text-white/85">
                  Premium cotton top layer for maximum comfort.
                </p>
              </div>
              <div className="rounded-2xl border border-white/15 bg-white/10 p-4 backdrop-blur-md">
                <p className="text-xs font-bold text-emerald-200">
                  💚 Women-Led
                </p>
                <p className="mt-1 text-xs text-white/85">
                  Created by women, for women's wellness.
                </p>
              </div>
            </div>
          </div>
        </aside>

        {/* Right Profile & Auth Panel */}
        <main className="flex items-center justify-center bg-[radial-gradient(circle_at_top,_#f2fbf0_0%,_#ffffff_70%)] p-6 sm:p-8 lg:col-span-5 lg:p-10">
          <div className="w-full max-w-md">
            {/* Home Screen */}
            {step === "home" && (
              <div>
                <h1 className="mt-3 text-2xl font-extrabold text-emerald-950">
                  Welcome to PadKingoo
                </h1>
                <p className="mt-1.5 text-sm text-slate-500">
                  Sign in with a one-time email code or create your account in
                  seconds.
                </p>

                <div className="mt-6 space-y-3">
                  <button
                    type="button"
                    onClick={() => {
                      clearFeedback();
                      setStep("signup");
                    }}
                    className="flex w-full items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-emerald-600 to-teal-600 px-5 py-3.5 text-sm font-bold text-white shadow-md shadow-emerald-600/25 transition hover:from-emerald-700 hover:to-teal-700 active:scale-[0.99]"
                  >
                    <Sparkles size={17} />
                    Create New Account
                  </button>

                  <button
                    type="button"
                    onClick={() => {
                      clearFeedback();
                      setStep("login");
                    }}
                    className="flex w-full items-center justify-center gap-2 rounded-xl border border-emerald-200 bg-emerald-50/70 px-5 py-3.5 text-sm font-bold text-emerald-900 transition hover:border-emerald-300 hover:bg-emerald-100/70 active:scale-[0.99]"
                  >
                    <Mail size={17} className="text-emerald-700" />
                    Login with Email OTP
                  </button>
                </div>

                <div className="mt-7 space-y-2.5 border-t border-slate-100 pt-5 text-xs text-slate-600">
                  {/* <div className="flex items-center gap-2.5">
                    <ShieldCheck
                      size={16}
                      className="shrink-0 text-emerald-600"
                    />
                    <span>
                      <strong className="font-semibold text-slate-800">
                        Passwordless &amp; Secure
                      </strong>{" "}
                      — Verified via one-time email OTP
                    </span>
                  </div> */}
                  <div className="flex items-center gap-2.5">
                    <Heart size={16} className="shrink-0 text-emerald-600" />
                    <span>
                      <strong className="font-semibold text-slate-800">
                        Thoughtfully Crafted
                      </strong>{" "}
                      — Designed for comfort and everyday wellness
                    </span>
                  </div>
                </div>
              </div>
            )}

            {/* Login Screen */}
            {step === "login" && (
              <div>
                <button
                  type="button"
                  onClick={() => {
                    clearFeedback();
                    setStep("home");
                  }}
                  className="inline-flex items-center gap-1.5 text-xs font-bold text-emerald-700 transition hover:text-emerald-900"
                >
                  <ArrowLeft size={16} />
                  Back to welcome
                </button>

                <div className="mt-4">
                  <h2 className="text-2xl font-extrabold text-emerald-950">
                    Welcome back
                  </h2>
                  <p className="mt-1 text-xs text-slate-500">
                    Enter your registered email to receive a 6-digit
                    verification code.
                  </p>
                </div>

                <form onSubmit={handleLogin} className="mt-6 space-y-4">
                  <div>
                    <label className="mb-1.5 block text-xs font-bold uppercase tracking-wider text-slate-600">
                      Email Address
                    </label>
                    <div className="relative">
                      <Mail
                        size={17}
                        className="pointer-events-none absolute left-3.5 top-1/2 -translate-y-1/2 text-emerald-600"
                      />
                      <input
                        type="email"
                        required
                        value={formData.email}
                        onChange={(e) =>
                          setFormData({ ...formData, email: e.target.value })
                        }
                        placeholder="you@example.com"
                        className="w-full rounded-xl border border-slate-200 bg-slate-50/70 py-3 pl-10 pr-4 text-sm font-medium text-slate-900 outline-none transition focus:border-emerald-500 focus:bg-white focus:ring-4 focus:ring-emerald-500/10"
                      />
                    </div>
                  </div>

                  {renderFeedbackBanner()}

                  <button
                    type="submit"
                    disabled={loading}
                    className="w-full rounded-xl bg-gradient-to-r from-emerald-600 to-teal-600 px-5 py-3.5 text-sm font-bold text-white shadow-md shadow-emerald-600/20 transition hover:from-emerald-700 hover:to-teal-700 disabled:cursor-not-allowed disabled:opacity-60"
                  >
                    {loading ? "Sending OTP..." : "Send Login OTP"}
                  </button>
                </form>

                <p className="mt-6 border-t border-slate-100 pt-4 text-center text-xs text-slate-500">
                  New to PadKingoo?{" "}
                  <button
                    type="button"
                    onClick={() => {
                      clearFeedback();
                      setStep("signup");
                    }}
                    className="font-bold text-emerald-700 hover:underline"
                  >
                    Create an account
                  </button>
                </p>
              </div>
            )}

            {/* Login OTP Verification */}
            {step === "login-otp" && (
              <div>
                <button
                  type="button"
                  onClick={() => {
                    clearFeedback();
                    setFormData({ ...formData, otp: "" });
                    setStep("login");
                  }}
                  className="inline-flex items-center gap-1.5 text-xs font-bold text-emerald-700 transition hover:text-emerald-900"
                >
                  <ArrowLeft size={16} />
                  Change email
                </button>

                <div className="mt-4">
                  <h2 className="text-2xl font-extrabold text-emerald-950">
                    Verify your email
                  </h2>
                  <p className="mt-1 text-xs text-slate-500">
                    Code sent to{" "}
                    <span className="font-semibold text-emerald-800">
                      {formData.email}
                    </span>
                  </p>
                </div>

                <form onSubmit={handleLoginOTP} className="mt-6 space-y-4">
                  <div>
                    <label className="mb-1.5 block text-center text-xs font-bold uppercase tracking-wider text-slate-600">
                      6-Digit OTP
                    </label>
                    <input
                      type="text"
                      inputMode="numeric"
                      maxLength={6}
                      required
                      value={formData.otp}
                      onChange={(e) =>
                        setFormData({
                          ...formData,
                          otp: e.target.value.replace(/\D/g, ""),
                        })
                      }
                      placeholder="••••••"
                      className="w-full rounded-xl border border-slate-200 bg-slate-50/70 px-4 py-3.5 text-center text-2xl font-extrabold tracking-[0.45em] text-emerald-950 outline-none transition focus:border-emerald-500 focus:bg-white focus:ring-4 focus:ring-emerald-500/10"
                    />
                  </div>

                  {renderFeedbackBanner()}

                  <button
                    type="submit"
                    disabled={loading}
                    className="w-full rounded-xl bg-gradient-to-r from-emerald-600 to-teal-600 px-5 py-3.5 text-sm font-bold text-white shadow-md shadow-emerald-600/20 transition hover:from-emerald-700 hover:to-teal-700 disabled:cursor-not-allowed disabled:opacity-60"
                  >
                    {loading ? "Verifying..." : "Verify & Login"}
                  </button>

                  <button
                    type="button"
                    disabled={loading}
                    onClick={() => sendOtpRequest(formData.email, "login-otp")}
                    className="flex w-full items-center justify-center gap-1.5 py-1 text-xs font-semibold text-emerald-700 hover:text-emerald-900 disabled:opacity-50"
                  >
                    <RefreshCw size={13} />
                    Resend OTP
                  </button>
                </form>
              </div>
            )}

            {/* Signup Form */}
            {step === "signup" && (
              <div>
                <button
                  type="button"
                  onClick={() => {
                    clearFeedback();
                    setStep("home");
                  }}
                  className="inline-flex items-center gap-1.5 text-xs font-bold text-emerald-700 transition hover:text-emerald-900"
                >
                  <ArrowLeft size={16} />
                  Back to welcome
                </button>

                <div className="mt-4">
                  <h2 className="text-2xl font-extrabold text-emerald-950">
                    Create account
                  </h2>
                  <p className="mt-1 text-xs text-slate-500">
                    Enter your details to get started with PadKingoo.
                  </p>
                </div>

                <form onSubmit={handleSendOTP} className="mt-6 space-y-4">
                  <div>
                    <label className="mb-1.5 block text-xs font-bold uppercase tracking-wider text-slate-600">
                      Full Name
                    </label>
                    <div className="relative">
                      <User
                        size={17}
                        className="pointer-events-none absolute left-3.5 top-1/2 -translate-y-1/2 text-emerald-600"
                      />
                      <input
                        type="text"
                        required
                        value={formData.name}
                        onChange={(e) =>
                          setFormData({ ...formData, name: e.target.value })
                        }
                        placeholder="Your full name"
                        className="w-full rounded-xl border border-slate-200 bg-slate-50/70 py-3 pl-10 pr-4 text-sm font-medium text-slate-900 outline-none transition focus:border-emerald-500 focus:bg-white focus:ring-4 focus:ring-emerald-500/10"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="mb-1.5 block text-xs font-bold uppercase tracking-wider text-slate-600">
                      Email Address
                    </label>
                    <div className="relative">
                      <Mail
                        size={17}
                        className="pointer-events-none absolute left-3.5 top-1/2 -translate-y-1/2 text-emerald-600"
                      />
                      <input
                        type="email"
                        required
                        value={formData.email}
                        onChange={(e) =>
                          setFormData({ ...formData, email: e.target.value })
                        }
                        placeholder="you@example.com"
                        className="w-full rounded-xl border border-slate-200 bg-slate-50/70 py-3 pl-10 pr-4 text-sm font-medium text-slate-900 outline-none transition focus:border-emerald-500 focus:bg-white focus:ring-4 focus:ring-emerald-500/10"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="mb-1.5 block text-xs font-bold uppercase tracking-wider text-slate-600">
                      Phone Number
                    </label>
                    <div className="relative">
                      <Phone
                        size={17}
                        className="pointer-events-none absolute left-3.5 top-1/2 -translate-y-1/2 text-emerald-600"
                      />
                      <input
                        type="tel"
                        required
                        value={formData.phone}
                        onChange={(e) =>
                          setFormData({ ...formData, phone: e.target.value })
                        }
                        placeholder="+91 98765 43210"
                        className="w-full rounded-xl border border-slate-200 bg-slate-50/70 py-3 pl-10 pr-4 text-sm font-medium text-slate-900 outline-none transition focus:border-emerald-500 focus:bg-white focus:ring-4 focus:ring-emerald-500/10"
                      />
                    </div>
                  </div>

                  {renderFeedbackBanner()}

                  <button
                    type="submit"
                    disabled={loading}
                    className="w-full rounded-xl bg-gradient-to-r from-emerald-600 to-teal-600 px-5 py-3.5 text-sm font-bold text-white shadow-md shadow-emerald-600/20 transition hover:from-emerald-700 hover:to-teal-700 disabled:cursor-not-allowed disabled:opacity-60"
                  >
                    {loading ? "Sending OTP..." : "Continue & Send OTP"}
                  </button>
                </form>

                <p className="mt-6 border-t border-slate-100 pt-4 text-center text-xs text-slate-500">
                  Already have an account?{" "}
                  <button
                    type="button"
                    onClick={() => {
                      clearFeedback();
                      setStep("login");
                    }}
                    className="font-bold text-emerald-700 hover:underline"
                  >
                    Login here
                  </button>
                </p>
              </div>
            )}

            {/* Signup OTP Verification */}
            {step === "otp" && (
              <div>
                <button
                  type="button"
                  onClick={() => {
                    clearFeedback();
                    setFormData({ ...formData, otp: "" });
                    setStep("signup");
                  }}
                  className="inline-flex items-center gap-1.5 text-xs font-bold text-emerald-700 transition hover:text-emerald-900"
                >
                  <ArrowLeft size={16} />
                  Back to details
                </button>

                <div className="mt-4">
                  <h2 className="text-2xl font-extrabold text-emerald-950">
                    Verify your email
                  </h2>
                  <p className="mt-1 text-xs text-slate-500">
                    Enter the 6-digit code sent to{" "}
                    <span className="font-semibold text-emerald-800">
                      {formData.email}
                    </span>
                  </p>
                </div>

                <form onSubmit={handleVerifyOTP} className="mt-6 space-y-4">
                  <div>
                    <label className="mb-1.5 block text-center text-xs font-bold uppercase tracking-wider text-slate-600">
                      6-Digit OTP
                    </label>
                    <input
                      type="text"
                      inputMode="numeric"
                      maxLength={6}
                      required
                      value={formData.otp}
                      onChange={(e) =>
                        setFormData({
                          ...formData,
                          otp: e.target.value.replace(/\D/g, ""),
                        })
                      }
                      placeholder="••••••"
                      className="w-full rounded-xl border border-slate-200 bg-slate-50/70 px-4 py-3.5 text-center text-2xl font-extrabold tracking-[0.45em] text-emerald-950 outline-none transition focus:border-emerald-500 focus:bg-white focus:ring-4 focus:ring-emerald-500/10"
                    />
                  </div>

                  {renderFeedbackBanner()}

                  <button
                    type="submit"
                    disabled={loading}
                    className="w-full rounded-xl bg-gradient-to-r from-emerald-600 to-teal-600 px-5 py-3.5 text-sm font-bold text-white shadow-md shadow-emerald-600/20 transition hover:from-emerald-700 hover:to-teal-700 disabled:cursor-not-allowed disabled:opacity-60"
                  >
                    {loading
                      ? "Creating Account..."
                      : "Verify & Create Account"}
                  </button>

                  <button
                    type="button"
                    disabled={loading}
                    onClick={() => sendOtpRequest(formData.email, "otp")}
                    className="flex w-full items-center justify-center gap-1.5 py-1 text-xs font-semibold text-emerald-700 hover:text-emerald-900 disabled:opacity-50"
                  >
                    <RefreshCw size={13} />
                    Resend OTP
                  </button>
                </form>
              </div>
            )}

            {/* Profile View */}
            {step === "profile" && user && (
              <div>
                <div className="flex items-center justify-between">
                  <div>
                    <h2 className="text-xl font-extrabold text-emerald-950">
                      My Profile
                    </h2>
                    <p className="text-xs text-slate-500">
                      Manage your account details
                    </p>
                  </div>
                  <button
                    type="button"
                    onClick={() => {
                      clearFeedback();
                      setEditData({
                        name: user.name || "",
                        phone: user.phone || "",
                      });
                      setIsEditingProfile((prev) => !prev);
                    }}
                    aria-label={
                      isEditingProfile ? "Cancel editing" : "Edit profile"
                    }
                    className={`inline-flex items-center gap-1.5 rounded-xl px-3 py-2 text-xs font-bold transition ${
                      isEditingProfile
                        ? "bg-slate-100 text-slate-700 hover:bg-slate-200"
                        : "bg-emerald-50 text-emerald-800 hover:bg-emerald-100"
                    }`}
                  >
                    {isEditingProfile ? (
                      <>
                        <X size={15} />
                        Cancel
                      </>
                    ) : (
                      <>
                        <Edit2 size={15} />
                        Edit
                      </>
                    )}
                  </button>
                </div>

                <div className="mt-6 flex flex-col items-center text-center">
                  <div className="flex h-20 w-20 items-center justify-center rounded-2xl bg-gradient-to-br from-emerald-600 to-teal-700 text-2xl font-extrabold text-white shadow-lg shadow-emerald-700/20">
                    {getInitials(user.name)}
                  </div>
                  <h3 className="mt-3.5 text-xl font-extrabold text-emerald-950">
                    {user.name}
                  </h3>
                  <span className="mt-1 inline-flex items-center gap-1 rounded-full bg-emerald-100/80 px-3 py-0.5 text-[11px] font-bold text-emerald-800">
                    <CheckCircle2 size={12} />
                    Verified Member
                  </span>
                </div>

                {feedback.text && (
                  <div className="mt-4">{renderFeedbackBanner()}</div>
                )}

                {isEditingProfile ? (
                  <form
                    onSubmit={handleSaveProfile}
                    className="mt-6 space-y-4 border-t border-slate-100 pt-5"
                  >
                    <div>
                      <label className="mb-1.5 block text-xs font-bold uppercase tracking-wider text-slate-600">
                        Full Name
                      </label>
                      <input
                        type="text"
                        required
                        value={editData.name}
                        onChange={(e) =>
                          setEditData({ ...editData, name: e.target.value })
                        }
                        className="w-full rounded-xl border border-slate-200 bg-slate-50/70 px-3.5 py-2.5 text-sm font-medium text-slate-900 outline-none transition focus:border-emerald-500 focus:bg-white focus:ring-4 focus:ring-emerald-500/10"
                      />
                    </div>

                    <div>
                      <label className="mb-1.5 block text-xs font-bold uppercase tracking-wider text-slate-600">
                        Phone Number
                      </label>
                      <input
                        type="tel"
                        value={editData.phone}
                        onChange={(e) =>
                          setEditData({ ...editData, phone: e.target.value })
                        }
                        className="w-full rounded-xl border border-slate-200 bg-slate-50/70 px-3.5 py-2.5 text-sm font-medium text-slate-900 outline-none transition focus:border-emerald-500 focus:bg-white focus:ring-4 focus:ring-emerald-500/10"
                      />
                    </div>

                    <button
                      type="submit"
                      disabled={savingProfile}
                      className="flex w-full items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-emerald-600 to-teal-600 px-5 py-3 text-sm font-bold text-white shadow-md shadow-emerald-600/20 transition hover:from-emerald-700 hover:to-teal-700 disabled:opacity-60"
                    >
                      <Save size={16} />
                      {savingProfile ? "Saving..." : "Save Changes"}
                    </button>
                  </form>
                ) : (
                  <div className="mt-6 space-y-3 border-y border-slate-100 py-5">
                    <div className="flex items-center gap-3.5 rounded-2xl bg-slate-50/80 p-3.5">
                      <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-emerald-100 text-emerald-700">
                        <Mail size={18} />
                      </div>
                      <div className="min-w-0 flex-1">
                        <p className="text-[11px] font-bold uppercase tracking-wider text-slate-400">
                          Email Address
                        </p>
                        <p className="truncate text-sm font-semibold text-slate-800">
                          {user.email}
                        </p>
                      </div>
                    </div>

                    {user.phone && (
                      <div className="flex items-center gap-3.5 rounded-2xl bg-slate-50/80 p-3.5">
                        <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-teal-100 text-teal-700">
                          <Phone size={18} />
                        </div>
                        <div className="min-w-0 flex-1">
                          <p className="text-[11px] font-bold uppercase tracking-wider text-slate-400">
                            Phone Number
                          </p>
                          <p className="text-sm font-semibold text-slate-800">
                            {user.phone}
                          </p>
                        </div>
                      </div>
                    )}
                  </div>
                )}

                <div className="mt-5 grid grid-cols-2 gap-3">
                  <div className="rounded-2xl border border-emerald-100 bg-emerald-50/60 p-3.5 text-center">
                    <CheckCircle2
                      size={20}
                      className="mx-auto text-emerald-600"
                    />
                    <p className="mt-1.5 text-xs font-bold text-emerald-950">
                      Email Verified
                    </p>
                  </div>
                  <div className="rounded-2xl border border-teal-100 bg-teal-50/60 p-3.5 text-center">
                    <Gift size={20} className="mx-auto text-teal-700" />
                    <p className="mt-1.5 text-xs font-bold text-teal-950">
                      Member Perks
                    </p>
                  </div>
                </div>

                <button
                  type="button"
                  onClick={handleLogout}
                  className="mt-6 flex w-full items-center justify-center gap-2 rounded-xl border border-rose-200 bg-rose-50/70 px-5 py-3 text-sm font-bold text-rose-700 transition hover:bg-rose-100"
                >
                  <LogOut size={17} />
                  Logout
                </button>
              </div>
            )}
          </div>
        </main>
      </div>
    </div>
  );
}
