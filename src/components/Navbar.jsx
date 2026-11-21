import { useEffect, useState, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Menu,
  X,
  ChevronDown,
  ArrowRight,
  Leaf,
  Search,
  User,
  ShoppingCart,
  TrendingUp,
  Package,
  BookOpen,
  Zap,
  Clock,
} from "lucide-react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import Cookies from "js-cookie";

import logo from "../assets/PadKINGO Herbal Care Logo.png";

// Search data structure
const searchData = [
  // Products
  { id: 1, title: "All Products", category: "Products", href: "/products", icon: Package },
  { id: 2, title: "Regular Pads", category: "Products", href: "/products#regular-pads", icon: Package },
  { id: 3, title: "XL Pads", category: "Products", href: "/products#xl-pads", icon: Package },
  { id: 4, title: "Overnight Pads", category: "Products", href: "/products#overnight-pads", icon: Package },
  { id: 5, title: "Heavy Flow Pads", category: "Products", href: "/products#heavy-flow-pads", icon: Package },
  
  // Flavours
  { id: 6, title: "Neem Care", category: "Flavours", href: "/flavours#neem-care", icon: Leaf },
  { id: 7, title: "Lavender Fresh", category: "Flavours", href: "/flavours#lavender-fresh", icon: Leaf },
  { id: 8, title: "Rose Soft", category: "Flavours", href: "/flavours#rose-soft", icon: Leaf },
  { id: 9, title: "Turmeric Shield", category: "Flavours", href: "/flavours#turmeric-shield", icon: Leaf },
  { id: 10, title: "Aloe Vera Soothing", category: "Flavours", href: "/flavours#aloe-vera-soothing", icon: Leaf },
  { id: 11, title: "Mint Cool", category: "Flavours", href: "/flavours#mint-cool", icon: Leaf },
  
  // Pages
  { id: 12, title: "Why PadKingoo", category: "Pages", href: "/why-padkingoo", icon: TrendingUp },
  { id: 13, title: "Period Education", category: "Learn", href: "/learn#period-education", icon: BookOpen },
  { id: 14, title: "Period Care Guide", category: "Learn", href: "/learn#period-care-guide", icon: BookOpen },
  { id: 15, title: "FAQs", category: "Learn", href: "/learn#faq", icon: BookOpen },
  { id: 16, title: "Our Story", category: "Learn", href: "/learn#our-story", icon: Zap },
];

const navItems = [
  { label: "Home", href: "/" },
  {
    label: "Products",
    href: "/products",
    children: [
      { name: "All Products", href: "/products#all-products" },
      { name: "Sanitary Pads", href: "/products#regular-pads" },
      { name: "Menstrual Cups", href: "/products#xl-pads" },
      { name: "Panty Liners", href: "/products#overnight-pads" },
      { name: "Period Underwear", href: "/products#heavy-flow-pads" },
      { name: "Tampons", href: "/products#heavy-flow-pads" },
    ],
  },
  {
    label: "Our Flavours",
    href: "/flavours",
    children: [
      { name: "All Flavours", href: "/flavours#all-flavours" },
      { name: "Neem Care", href: "/flavours#neem-care" },
      { name: "Lavender Fresh", href: "/flavours#lavender-fresh" },
      { name: "Rose Soft", href: "/flavours#rose-soft" },
      { name: "Turmeric Shield", href: "/flavours#turmeric-shield" },
      { name: "Aloe Vera Soothing", href: "/flavours#aloe-vera-soothing" },
      { name: "Mint Cool", href: "/flavours#mint-cool" },
    ],
  },
  { label: "Why PadKingoo", href: "/why-padkingoo" },
  {
    label: "Learn",
    href: "/learn",
    children: [
      { name: "Period Education", href: "/learn#period-education" },
      { name: "Period Care Guide", href: "/learn#period-care-guide" },
      { name: "Frequently Asked Questions", href: "/learn#faq" },
      { name: "Our Story", href: "/learn#our-story" },
    ],
  },
];

export default function Navbar() {
  const navigate = useNavigate();
  const [mobileOpen, setMobileOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState(null);
  const [cartCount] = useState(0);
  const [searchOpen, setSearchOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");
  const [searchResults, setSearchResults] = useState([]);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const searchInputRef = useRef(null);

  const location = useLocation();

  useEffect(() => {
    // Check if user is logged in
    const token = Cookies.get("padkingoo_token");
    setIsLoggedIn(!!token);
  }, [location]);

  const closeMenus = () => {
    setMobileOpen(false);
    setActiveDropdown(null);
  };

  // Search handler
  const handleSearch = (query) => {
    setSearchQuery(query);
    if (query.trim() === "") {
      setSearchResults([]);
      return;
    }

    const filtered = searchData.filter((item) =>
      item.title.toLowerCase().includes(query.toLowerCase()) ||
      item.category.toLowerCase().includes(query.toLowerCase())
    );
    setSearchResults(filtered);
  };

  const handleSearchResultClick = (href) => {
    setSearchOpen(false);
    setSearchQuery("");
    setSearchResults([]);
  };

  // Focus search input when opened
  useEffect(() => {
    if (searchOpen && searchInputRef.current) {
      searchInputRef.current.focus();
    }
  }, [searchOpen]);

  // ACTIVE MENU CHECK
  const isActive = (href) => {
    return location.pathname === href;
  };

  useEffect(() => {
    if (location.hash) {
      const sectionId = decodeURIComponent(location.hash.substring(1));

      const timer = setTimeout(() => {
        document
          .getElementById(sectionId)
          ?.scrollIntoView({ behavior: "smooth", block: "start" });
      }, 300);

      return () => clearTimeout(timer);
    }

    window.scrollTo({ top: 0, behavior: "smooth" });
  }, [location.pathname, location.hash]);

  const iconBtn =
    "relative flex h-10 w-10 items-center justify-center rounded-full text-[#183D25] transition hover:bg-[#EAF5E7] hover:text-[#237A35]";

  const CartBadge = () => (
    <span className="absolute -right-0.5 -top-0.5 flex h-[18px] min-w-[18px] items-center justify-center rounded-full bg-green-600 px-1 text-[10px] font-bold text-white">
      {cartCount}
    </span>
  );

  return (
    <header className="sticky top-0 z-[100] w-full border-b border-green-100/70 bg-white/85 shadow-sm backdrop-blur-xl">
      <div className="mx-auto flex min-h-[72px] w-full max-w-[1500px] items-center justify-between gap-3 px-4 sm:px-6 lg:px-8">
        {/* LOGO */}
        <Link
          to="/"
          onClick={closeMenus}
          className="flex shrink-0 items-center"
        >
          <img
            src={logo}
            alt="PadKingoo Herbal Care for Her"
            className="h-[46px] w-auto max-w-[170px] object-contain sm:h-[52px] sm:max-w-[200px]"
          />
        </Link>

        {/* DESKTOP NAV */}
        <nav className="hidden flex-1 items-center justify-center gap-1 lg:flex">
          {navItems.map((item, index) => (
            <div
              key={item.label}
              className="relative"
              onMouseEnter={() =>
                item.children && setActiveDropdown(item.label)
              }
              onMouseLeave={() => setActiveDropdown(null)}
            >
              <Link
                to={item.href}
                onClick={closeMenus}
                className={`flex items-center gap-1.5 whitespace-nowrap rounded-full px-4 py-2 text-sm font-semibold transition-all duration-200 xl:px-5 ${
                  isActive(item.href)
                    ? "bg-[#1F6B2B] !text-white shadow-md"
                    : "text-[#183D25] hover:bg-[#EAF5E7] hover:text-[#237A35]"
                }`}
              >
                {item.label}

                {item.children && (
                  <ChevronDown
                    size={15}
                    className={`shrink-0 transition-transform duration-200 ${
                      activeDropdown === item.label ? "rotate-180" : ""
                    }`}
                  />
                )}
              </Link>

              <AnimatePresence>
                {item.children && activeDropdown === item.label && (
                  <motion.div
                    initial={{ opacity: 0, y: 8 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: 8 }}
                    transition={{ duration: 0.18 }}
                    className={`absolute top-full z-[110] w-[260px] max-w-[calc(100vw-24px)] pt-2 ${
                      index === navItems.length - 1 ? "right-0" : "left-0"
                    }`}
                  >
                    <div className="overflow-hidden rounded-2xl border border-green-100 bg-white p-2 shadow-[0_15px_45px_rgba(24,61,37,0.16)]">
                      <div className="flex items-center gap-2 border-b border-green-100 px-3 py-2.5">
                        <div className="flex h-8 w-8 items-center justify-center rounded-full bg-green-50">
                          <Leaf size={17} className="text-green-700" />
                        </div>

                        <span className="text-xs font-bold text-green-900">
                          {item.label}
                        </span>
                      </div>

                      <div className="max-h-[65vh] overflow-y-auto py-1">
                        {item.children.map((child) => (
                          <Link
                            key={child.name}
                            to={child.href}
                            onClick={closeMenus}
                            className="group flex items-center justify-between gap-2 rounded-lg px-3 py-2.5 text-xs font-medium text-[#38543D] transition hover:bg-[#EFF8E9] hover:text-green-800"
                          >
                            <span>{child.name}</span>

                            <ArrowRight
                              size={13}
                              className="shrink-0 opacity-0 transition-all group-hover:translate-x-1 group-hover:opacity-100"
                            />
                          </Link>
                        ))}
                      </div>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          ))}
        </nav>

        {/* RIGHT ACTIONS */}
        <div className="flex items-center gap-1 sm:gap-2">
          <button 
            type="button" 
            aria-label="Search" 
            onClick={() => setSearchOpen(true)}
            className={iconBtn}
          >
            <Search size={21} />
          </button>

          <button
            type="button"
            onClick={() => {
              closeMenus();
              navigate(isLoggedIn ? "/profile" : "/login");
            }}
            aria-label="Account"
            className={`${iconBtn} hidden sm:flex`}
          >
            <User size={21} />
          </button>

          <Link to="/cart" aria-label="Cart" className={iconBtn}>
            <ShoppingCart size={21} />
            <CartBadge />
          </Link>

          <Link
            to="/products"
            onClick={closeMenus}
            className="ml-2 hidden items-center gap-2 rounded-full bg-gradient-to-r from-green-900 to-green-700 px-6 py-2.5 text-sm font-bold text-white shadow-lg shadow-green-300/50 transition hover:scale-105 lg:flex"
          >
            <span className="text-white"> Shop Now</span>
            <ArrowRight color="white" size={15} />
          </Link>

          <button
            type="button"
            onClick={() => setMobileOpen((p) => !p)}
            aria-label="Toggle navigation"
            aria-expanded={mobileOpen}
            className="ml-1 flex h-10 w-10 shrink-0 items-center justify-center rounded-lg border border-green-100 bg-green-50 text-green-900 transition hover:bg-green-100 lg:hidden"
          >
            {mobileOpen ? <X size={21} /> : <Menu size={21} />}
          </button>
        </div>
      </div>

      {/* MOBILE NAV */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.25 }}
            className="overflow-hidden border-t border-green-100 bg-white lg:hidden"
          >
            <div className="max-h-[75vh] space-y-1 overflow-y-auto px-5 py-3">
              {navItems.map((item) => (
                <div key={item.label}>
                  <div className="flex items-center justify-between border-b border-green-50 py-2.5">
                    <Link
                      to={item.href}
                      onClick={closeMenus}
                      className={`rounded-full px-3 py-2 text-sm font-semibold transition-all ${
                        isActive(item.href)
                          ? "bg-[#1F6B2B] !text-white"
                          : "text-[#183D25]"
                      }`}
                    >
                      {item.label}
                    </Link>

                    {item.children && (
                      <button
                        type="button"
                        onClick={() =>
                          setActiveDropdown((prev) =>
                            prev === item.label ? null : item.label,
                          )
                        }
                        aria-label={`Toggle ${item.label}`}
                        aria-expanded={activeDropdown === item.label}
                        className="rounded-lg p-2 text-green-800 hover:bg-green-50"
                      >
                        <ChevronDown
                          size={17}
                          className={`transition-transform ${
                            activeDropdown === item.label ? "rotate-180" : ""
                          }`}
                        />
                      </button>
                    )}
                  </div>

                  <AnimatePresence>
                    {item.children && activeDropdown === item.label && (
                      <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: "auto" }}
                        exit={{ opacity: 0, height: 0 }}
                        className="overflow-hidden pl-4"
                      >
                        {item.children.map((child) => (
                          <Link
                            key={child.name}
                            to={child.href}
                            onClick={closeMenus}
                            className="flex items-center justify-between border-b border-green-50 py-2.5 pr-2 text-xs font-medium text-green-800 transition hover:text-green-600"
                          >
                            {child.name}
                            <ArrowRight size={13} />
                          </Link>
                        ))}
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              ))}

              <Link
                to="/products"
                onClick={closeMenus}
                className="mt-3 flex items-center justify-center gap-2 rounded-full bg-gradient-to-r from-green-900 to-green-700 px-6 py-3 text-sm font-bold text-white shadow-lg"
              >
                <span className="text-white"> Shop Now</span>
                <ArrowRight color="white" size={15} />
              </Link>

              <Link
                to={isLoggedIn ? "/profile" : "/login"}
                onClick={closeMenus}
                className="mt-2 flex items-center justify-center gap-2 rounded-full border-2 border-green-900 px-6 py-3 text-sm font-bold text-green-900 shadow-lg transition hover:bg-green-50"
              >
                <User size={18} />
                <span>{isLoggedIn ? "My Profile" : "Login"}</span>
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* SEARCH MODAL */}
      <AnimatePresence>
        {searchOpen && (
          <>
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setSearchOpen(false)}
              className="fixed inset-0 z-[140] bg-black/30 backdrop-blur-sm"
            />

            {/* Search Modal */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: -10 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: -10 }}
              transition={{ duration: 0.2 }}
              className="fixed left-1/2 top-20 z-[150] w-[90%] -translate-x-1/2 sm:w-[500px]"
            >
              <div className="overflow-hidden rounded-2xl border border-green-100 bg-white shadow-2xl">
                {/* Search Input */}
                <div className="border-b border-green-50 p-4">
                  <div className="flex items-center gap-3 rounded-xl bg-green-50 px-4 py-3">
                    <Search size={18} className="shrink-0 text-green-700" />
                    <input
                      ref={searchInputRef}
                      type="text"
                      placeholder="Search products, flavours, pages..."
                      value={searchQuery}
                      onChange={(e) => handleSearch(e.target.value)}
                      className="w-full bg-transparent text-sm outline-none placeholder:text-green-600/50"
                    />
                    {searchQuery && (
                      <button
                        type="button"
                        onClick={() => handleSearch("")}
                        className="shrink-0 text-green-700 hover:text-green-900"
                      >
                        <X size={18} />
                      </button>
                    )}
                  </div>
                </div>

                {/* Search Results */}
                <div className="max-h-[60vh] overflow-y-auto">
                  {searchResults.length > 0 ? (
                    <div className="p-2">
                      {/* Group results by category */}
                      {Array.from(new Set(searchResults.map((r) => r.category))).map(
                        (category) => (
                          <div key={category} className="mb-4 last:mb-0">
                            <div className="px-3 py-2">
                              <span className="text-xs font-bold uppercase text-green-700">
                                {category}
                              </span>
                            </div>

                            {searchResults
                              .filter((r) => r.category === category)
                              .map((result) => {
                                const IconComponent = result.icon;
                                return (
                                  <Link
                                    key={result.id}
                                    to={result.href}
                                    onClick={() => handleSearchResultClick(result.href)}
                                    className="group flex items-center gap-3 rounded-lg px-3 py-2.5 transition hover:bg-green-50"
                                  >
                                    <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-green-100 text-green-700 group-hover:bg-green-200">
                                      <IconComponent size={16} />
                                    </div>

                                    <div className="flex-1">
                                      <p className="text-sm font-semibold text-green-950">
                                        {result.title}
                                      </p>
                                    </div>

                                    <ArrowRight
                                      size={14}
                                      className="shrink-0 opacity-0 transition group-hover:translate-x-1 group-hover:opacity-100"
                                    />
                                  </Link>
                                );
                              })}
                          </div>
                        ),
                      )}
                    </div>
                  ) : searchQuery ? (
                    <div className="flex flex-col items-center justify-center py-12 text-center">
                      <Search size={32} className="mb-3 text-green-200" />
                      <p className="text-sm font-medium text-green-900">
                        No results found for "{searchQuery}"
                      </p>
                      <p className="mt-1 text-xs text-green-700/60">
                        Try searching for products or flavours
                      </p>
                    </div>
                  ) : (
                    <div className="flex flex-col items-center justify-center py-12 text-center">
                      <TrendingUp size={32} className="mb-3 text-green-200" />
                      <p className="text-sm font-medium text-green-900">
                        Popular searches
                      </p>
                      <div className="mt-4 flex flex-wrap justify-center gap-2">
                        {["Neem Care", "Regular Pads", "Lavender Fresh", "Heavy Flow"].map(
                          (tag) => (
                            <button
                              key={tag}
                              type="button"
                              onClick={() => handleSearch(tag)}
                              className="rounded-full bg-green-100 px-3 py-1.5 text-xs font-semibold text-green-800 transition hover:bg-green-200"
                            >
                              {tag}
                            </button>
                          ),
                        )}
                      </div>
                    </div>
                  )}
                </div>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </header>
  );
}
