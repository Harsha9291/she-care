import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Flower2, Menu, X, ShoppingBag, ArrowRight } from "lucide-react";

const links = [
  { label: "Home", href: "#home" },
  { label: "Products", href: "#products" },
  { label: "Learn", href: "#faq" },
  { label: "Our Story", href: "#why" },
  { label: "Survey", href: "#survey" },
  { label: "Contact", href: "#contact" },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [active, setActive] = useState("Home");

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <motion.header
      initial={{ y: -80, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6 }}
      className={`sticky top-0 z-50 py-3.5 transition-all duration-300 ${
        scrolled ? "bg-white/80 backdrop-blur-xl shadow-lg shadow-pink-200/40" : ""
      }`}
    >
      <div className="mx-auto flex w-[92%] max-w-300 items-center justify-between gap-5">
        <a href="#home" className="flex items-center gap-2.5 text-brand">
          <motion.span whileHover={{ rotate: 90 }} transition={{ type: "spring" }}>
            <Flower2 size={34} />
          </motion.span>
          <span className="flex flex-col leading-none">
            <b className="text-2xl text-plum">SheCare</b>
            <small className="text-[9.5px] text-[#5b4a66]">Period Care for Every Woman</small>
          </span>
        </a>

        <nav className="hidden gap-1 lg:flex">
          {links.map((l) => (
            <a
              key={l.label}
              href={l.href}
              onClick={() => setActive(l.label)}
              className={`relative rounded-full px-4 py-2 text-[15px] font-medium transition ${
                active === l.label ? "text-brand" : "text-plum hover:text-brand"
              }`}
            >
              {active === l.label && (
                <motion.span
                  layoutId="nav-pill"
                  className="absolute inset-0 -z-10 rounded-full bg-pink-200"
                  transition={{ type: "spring", stiffness: 380, damping: 30 }}
                />
              )}
              {l.label}
            </a>
          ))}
        </nav>

        <div className="flex items-center gap-3.5">
          {/* <button className="relative text-plum" aria-label="Cart">
            <ShoppingBag size={20} />
            <span className="absolute -right-2.5 -top-2 grid h-4.5 w-4.5 place-items-center rounded-full bg-brand text-[10px] text-white">
              0
            </span>
          </button> */}
          {/* <motion.a
            whileHover={{ y: -3, scale: 1.04 }}
            whileTap={{ scale: 0.96 }}
            href="#products"
            className="shine hidden items-center gap-2 rounded-full bg-linear-to-br from-brand to-brand2 px-6 py-3 text-[15px] font-semibold text-white shadow-lg shadow-brand/40 lg:inline-flex"
          >
            Shop Now <ArrowRight size={16} />
          </motion.a> */}
          <button className="text-plum lg:hidden" onClick={() => setOpen(!open)} aria-label="Menu">
            {open ? <X size={26} /> : <Menu size={26} />}
          </button>
        </div>
      </div>

      <AnimatePresence>
        {open && (
          <motion.nav
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="overflow-hidden bg-white shadow-xl lg:hidden"
          >
            <div className="flex flex-col gap-1 px-[4%] py-4">
              {links.map((l) => (
                <a
                  key={l.label}
                  href={l.href}
                  onClick={() => {
                    setActive(l.label);
                    setOpen(false);
                  }}
                  className="rounded-xl px-4 py-3 font-medium text-plum hover:bg-pink-100"
                >
                  {l.label}
                </a>
              ))}
              {/* <a
                href="#products"
                onClick={() => setOpen(false)}
                className="mt-2 rounded-full bg-linear-to-br from-brand to-brand2 py-3 text-center font-semibold text-white"
              >
                Shop Now
              </a> */}
            </div>
          </motion.nav>
        )}
      </AnimatePresence>
    </motion.header>
  );
}