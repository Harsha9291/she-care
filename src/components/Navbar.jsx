import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, ChevronDown, ArrowRight, Leaf } from "lucide-react";
import { Link, useLocation } from "react-router-dom";

import logo from "../assets/PadKINGO Herbal Care Logo.png";

const navItems = [
  {
    label: "Home",
    href: "/",
  },
  {
    label: "Products",
    href: "/products",
    children: [
      { name: "All Products", href: "/products#all-products" },
      { name: "Regular Pads", href: "/products#regular-pads" },
      { name: "XL Sanitary Pads", href: "/products#xl-pads" },
      { name: "Overnight Pads", href: "/products#overnight-pads" },
      { name: "Heavy Flow Pads", href: "/products#heavy-flow-pads" },
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
  {
    label: "Why PadKINGO",
    href: "/why-padkingo",
  },
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

  const location = useLocation();

  const closeMenus = () => {
    setMobileOpen(false);
    setActiveDropdown(null);
  };

  const isActive = (href) => {
    return location.pathname === href;
  };

  // Handle route and section navigation
  useEffect(() => {
    if (location.hash) {
      const sectionId = decodeURIComponent(location.hash.substring(1));

      const timer = setTimeout(() => {
        document.getElementById(sectionId)?.scrollIntoView({
          behavior: "smooth",
          block: "start",
        });
      }, 300);

      return () => clearTimeout(timer);
    }

    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  }, [location.pathname, location.hash]);

  const handleNavigation = () => {
    closeMenus();
  };

  return (
    <header className="sticky top-0 z-[100] w-full border-b border-green-100 bg-white/95 shadow-sm backdrop-blur-xl">
      {/* MAIN NAVBAR */}
      <div className="mx-auto flex min-h-[68px] w-full max-w-[1500px] items-center justify-between gap-3 px-4 sm:px-6 lg:px-8">
        {/* LOGO */}
        <Link
          to="/"
          onClick={handleNavigation}
          className="flex shrink-0 items-center"
        >
          <img
            src={logo}
            alt="PadKINGO Herbal Care"
            className="h-[42px] w-auto max-w-[145px] object-contain"
          />
        </Link>

        {/* DESKTOP NAVIGATION */}
        <nav className="hidden flex-1 items-center justify-end gap-0 lg:flex">
          {navItems.map((item, index) => (
            <div
              key={item.label}
              className="relative"
              onMouseEnter={() =>
                item.children && setActiveDropdown(item.label)
              }
              onMouseLeave={() => setActiveDropdown(null)}
            >
              {/* NAV LINK */}
              <Link
                to={item.href}
                onClick={handleNavigation}
                className={`flex items-center justify-center gap-1.5 whitespace-nowrap rounded-full px-3 py-2 text-[13px] font-semibold transition-all duration-200 xl:px-4 xl:text-sm ${
                  isActive(item.href)
                    ? "bg-[#287D32] text-white shadow-sm"
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

              {/* DESKTOP DROPDOWN */}
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
                      {/* DROPDOWN HEADER */}
                      <div className="flex items-center gap-2 border-b border-green-100 px-3 py-2.5">
                        <div className="flex h-8 w-8 items-center justify-center rounded-full bg-green-50">
                          <Leaf size={17} className="text-green-700" />
                        </div>

                        <span className="text-xs font-bold text-green-900">
                          {item.label}
                        </span>
                      </div>

                      {/* DROPDOWN ITEMS */}
                      <div className="max-h-[65vh] overflow-y-auto py-1">
                        {item.children.map((child) => (
                          <Link
                            key={child.name}
                            to={child.href}
                            onClick={handleNavigation}
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

        {/* MOBILE MENU BUTTON */}
        <button
          type="button"
          onClick={() => setMobileOpen((prev) => !prev)}
          aria-label="Toggle navigation"
          aria-expanded={mobileOpen}
          className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg border border-green-100 bg-green-50 text-green-900 transition hover:bg-green-100 lg:hidden"
        >
          {mobileOpen ? <X size={21} /> : <Menu size={21} />}
        </button>
      </div>

      {/* MOBILE NAVIGATION */}
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
                  {/* MOBILE MAIN LINK */}
                  <div className="flex items-center justify-between border-b border-green-50 py-2.5">
                    <Link
                      to={item.href}
                      onClick={handleNavigation}
                      className={`text-[13px] font-semibold ${
                        isActive(item.href)
                          ? "text-green-700"
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

                  {/* MOBILE DROPDOWN */}
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
                            onClick={handleNavigation}
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
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
