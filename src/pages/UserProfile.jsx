import { useState, useEffect } from "react";
import {
  Mail,
  Phone,
  User,
  LogOut,
  ArrowLeft,
  Edit2,
  Save,
  X,
  CheckCircle2,
  Gift,
} from "lucide-react";
import LogoImg from "../assets/PadKINGO Herbal Care Logo.png";
import { putRequest, getRequest } from "../Helpers/index";
import Cookies from "js-cookie";
import { useNavigate } from "react-router-dom";

const LEFT_VISUAL_URL =
  "https://encrypted-tbn1.gstatic.com/licensed-image?q=tbn:ANd9GcToJU3LpmgMrQ8KTYDC2uS7j3pPRVwB2ZzgqqyRE1lMK1iouYBICp2Z0OsF5iELGnGm_TNV774Oeq4Fe_g";

export default function UserProfile() {
  const navigate = useNavigate();
  const [loading, setLoading] = useState(true);
  const [savingProfile, setSavingProfile] = useState(false);
  const [user, setUser] = useState(null);
  const [isEditingProfile, setIsEditingProfile] = useState(false);
  const [feedback, setFeedback] = useState({ type: "", text: "" });

  const [editData, setEditData] = useState({
    name: "",
    phone: "",
  });

  const clearFeedback = () => setFeedback({ type: "", text: "" });

  useEffect(() => {
    fetchProfile();
  }, []);

  const getInitials = (name = "") => {
    const parts = name.trim().split(/\s+/).filter(Boolean);
    if (!parts.length) return "PK";
    if (parts.length === 1) return parts[0].slice(0, 2).toUpperCase();
    return `${parts[0][0]}${parts[parts.length - 1][0]}`.toUpperCase();
  };

  const fetchProfile = async () => {
    try {
      setLoading(true);
      const response = await getRequest("auth/profile");

      if (response?.status === 200) {
        const data = response.data;
        setUser(data.user);
        setEditData({
          name: data.user?.name || "",
          phone: data.user?.phone || "",
        });
        setFeedback({ type: "success", text: "Profile loaded successfully" });
      } else {
        Cookies.remove("padkingoo_token");
        navigate("/login");
      }
    } catch (error) {
      console.error("Profile fetch error:", error);
      Cookies.remove("padkingoo_token");
      navigate("/login");
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
    navigate("/login");
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

  if (loading) {
    return (
      <div className="min-h-screen bg-[#f5faf3] flex items-center justify-center">
        <div className="text-center">
          <div className="inline-flex h-12 w-12 animate-spin rounded-full border-4 border-emerald-600 border-r-transparent"></div>
          <p className="mt-4 text-emerald-800 font-semibold">
            Loading profile...
          </p>
        </div>
      </div>
    );
  }

  if (!user) {
    return (
      <div className="min-h-screen bg-[#f5faf3] flex items-center justify-center">
        <div className="text-center">
          <p className="text-rose-700 font-semibold">Please login first</p>
          <button
            onClick={() => navigate("/login")}
            className="mt-4 px-6 py-2 bg-emerald-600 text-white rounded-xl font-bold hover:bg-emerald-700"
          >
            Go to Login
          </button>
        </div>
      </div>
    );
  }

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
              💚 Women-Led Care
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

        {/* Right Profile Panel */}
        <main className="flex items-center justify-center bg-[radial-gradient(circle_at_top,_#f2fbf0_0%,_#ffffff_70%)] p-6 sm:p-8 lg:col-span-5 lg:p-10">
          <div className="w-full max-w-md">
            {/* Back Button */}
            <button
              type="button"
              onClick={() => navigate("/")}
              className="inline-flex items-center gap-1.5 text-xs font-bold text-emerald-700 transition hover:text-emerald-900 mb-4"
            >
              <ArrowLeft size={16} />
              Back to Home
            </button>

            {/* Profile Header */}
            <div className="flex items-center justify-between mb-6">
              <div>
                <h1 className="text-2xl font-extrabold text-emerald-950">
                  My Profile
                </h1>
                <p className="mt-1 text-xs text-slate-500">
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

            {/* Feedback Banner */}
            {feedback.text && (
              <div className="mb-6">{renderFeedbackBanner()}</div>
            )}

            {/* Profile Avatar */}
            <div className="flex flex-col items-center text-center mb-8">
              <div className="flex h-24 w-24 items-center justify-center rounded-2xl bg-gradient-to-br from-emerald-600 to-teal-700 text-3xl font-extrabold text-white shadow-lg shadow-emerald-700/20">
                {getInitials(user.name)}
              </div>
              <h2 className="mt-4 text-2xl font-extrabold text-emerald-950">
                {user.name}
              </h2>
              <span className="mt-2 inline-flex items-center gap-1 rounded-full bg-emerald-100/80 px-3 py-1 text-xs font-bold text-emerald-800">
                <CheckCircle2 size={14} />
                Verified Member
              </span>
            </div>

            {/* Edit Form or View Profile */}
            {isEditingProfile ? (
              <form
                onSubmit={handleSaveProfile}
                className="space-y-4 border-t border-slate-100 pt-6"
              >
                <div>
                  <label className="mb-2 block text-xs font-bold uppercase tracking-wider text-slate-600">
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
                      value={editData.name}
                      onChange={(e) =>
                        setEditData({ ...editData, name: e.target.value })
                      }
                      className="w-full rounded-xl border border-slate-200 bg-slate-50/70 py-3 pl-10 pr-4 text-sm font-medium text-slate-900 outline-none transition focus:border-emerald-500 focus:bg-white focus:ring-4 focus:ring-emerald-500/10"
                    />
                  </div>
                </div>

                <div>
                  <label className="mb-2 block text-xs font-bold uppercase tracking-wider text-slate-600">
                    Phone Number
                  </label>
                  <div className="relative">
                    <Phone
                      size={17}
                      className="pointer-events-none absolute left-3.5 top-1/2 -translate-y-1/2 text-emerald-600"
                    />
                    <input
                      type="tel"
                      value={editData.phone}
                      onChange={(e) =>
                        setEditData({ ...editData, phone: e.target.value })
                      }
                      className="w-full rounded-xl border border-slate-200 bg-slate-50/70 py-3 pl-10 pr-4 text-sm font-medium text-slate-900 outline-none transition focus:border-emerald-500 focus:bg-white focus:ring-4 focus:ring-emerald-500/10"
                    />
                  </div>
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
              <>
                {/* Profile Details */}
                <div className="space-y-3 border-y border-slate-100 py-6">
                  <div className="flex items-center gap-3.5 rounded-2xl bg-slate-50/80 p-3.5">
                    <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-emerald-100 text-emerald-700">
                      <Mail size={20} />
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
                      <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-teal-100 text-teal-700">
                        <Phone size={20} />
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

                {/* Status Badges */}
                <div className="mt-8 grid grid-cols-2 gap-3">
                  <div className="rounded-2xl border border-emerald-100 bg-emerald-50/60 p-4 text-center">
                    <CheckCircle2
                      size={24}
                      className="mx-auto text-emerald-600"
                    />
                    <p className="mt-2 text-xs font-bold text-emerald-950">
                      Email Verified
                    </p>
                  </div>
                  <div className="rounded-2xl border border-teal-100 bg-teal-50/60 p-4 text-center">
                    <Gift size={24} className="mx-auto text-teal-700" />
                    <p className="mt-2 text-xs font-bold text-teal-950">
                      Member Perks
                    </p>
                  </div>
                </div>
              </>
            )}

            {/* Logout Button */}
            <button
              type="button"
              onClick={handleLogout}
              className="mt-8 flex w-full items-center justify-center gap-2 rounded-xl border border-rose-200 bg-rose-50/70 px-5 py-3 text-sm font-bold text-rose-700 transition hover:bg-rose-100"
            >
              <LogOut size={17} />
              Logout
            </button>
          </div>
        </main>
      </div>
    </div>
  );
}
