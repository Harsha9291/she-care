
import { useEffect, useState } from "react";
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
} from "lucide-react";
import { Link, useLocation } from "react-router-dom";

import logo from "../assets/PadKINGO Herbal Care Logo.png";

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
  { label: "Why PadKINGO", href: "/why-padkingoo" },
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
  const [mobileOpen, setMobileOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState(null);
  const [cartCount] = useState(0);

  const location = useLocation();

  const closeMenus = () => {
    setMobileOpen(false);
    setActiveDropdown(null);
  };

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
        <Link to="/" onClick={closeMenus} className="flex shrink-0 items-center">
          <img
            src={logo}
            alt="PadKINGO Herbal Care for Her"
            className="h-[46px] w-auto max-w-[170px] object-contain sm:h-[52px] sm:max-w-[200px]"
          />
        </Link>

        {/* DESKTOP NAV */}
        <nav className="hidden flex-1 items-center justify-center gap-1 lg:flex">
          {navItems.map((item, index) => (
            <div
              key={item.label}
              className="relative"
              onMouseEnter={() => item.children && setActiveDropdown(item.label)}
              onMouseLeave={() => setActiveDropdown(null)}
            >
              <Link
                to={item.href}
                onClick={closeMenus}
                className={`flex items-center gap-1.5 whitespace-nowrap rounded-full px-4 py-2 text-sm font-semibold transition-all duration-200 xl:px-5 ${isActive(item.href)
                    ? "bg-[#1F6B2B] !text-white shadow-md"
                    : "text-[#183D25] hover:bg-[#EAF5E7] hover:text-[#237A35]"
                  }`}
              >
                {item.label}

                {item.children && (
                  <ChevronDown
                    size={15}
                    className={`shrink-0 transition-transform duration-200 ${activeDropdown === item.label ? "rotate-180" : ""
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
                    className={`absolute top-full z-[110] w-[260px] max-w-[calc(100vw-24px)] pt-2 ${index === navItems.length - 1 ? "right-0" : "left-0"
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
          <button type="button" aria-label="Search" className={iconBtn}>
            <Search size={21} />
          </button>

          <Link
            to="/account"
            aria-label="Account"
            className={`${iconBtn} hidden sm:flex`}
          >
            <User size={21} />
          </Link>

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
                      className={`rounded-full px-3 py-2 text-sm font-semibold transition-all ${isActive(item.href)
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
                          className={`transition-transform ${activeDropdown === item.label ? "rotate-180" : ""
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
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
