import { motion } from "framer-motion";
import { ArrowRight, ShoppingBag } from "lucide-react";
import Reveal from "./Reveal";
import SectionHead from "./SectionHead";

const PadSVG = ({ accent = "#cfe0ff" }) => (
  <svg viewBox="0 0 200 90" width="170">
    <defs>
      <linearGradient id="pg" x1="0" x2="1">
        <stop offset="0" stopColor="#fff" />
        <stop offset="1" stopColor="#f3e8f6" />
      </linearGradient>
    </defs>
    <path d="M10 45c0-22 22-30 40-30h100c18 0 40 8 40 30s-22 30-40 30H50C32 75 10 67 10 45z" fill="url(#pg)" stroke="#ead7f0" strokeWidth="2" />
    <ellipse cx="100" cy="45" rx="55" ry="14" fill={accent} opacity=".7" />
  </svg>
);

const LinerSVG = () => (
  <svg viewBox="0 0 200 90" width="170">
    <path d="M20 45c0-12 14-18 30-18h100c16 0 30 6 30 18s-14 18-30 18H50C34 63 20 57 20 45z" fill="#fff" stroke="#ead7f0" strokeWidth="2" />
    <ellipse cx="100" cy="45" rx="50" ry="6" fill="#f3e8f6" />
  </svg>
);

const PantsSVG = () => (
  <svg viewBox="0 0 200 120" width="150">
    <path d="M20 25h160c0 40-25 60-50 78-10 7-20 7-30 0C75 85 20 65 20 25z" fill="#f48fb1" />
    <path d="M20 25h160v14H20z" fill="#ec6a98" />
    <ellipse cx="100" cy="75" rx="16" ry="30" fill="#fff" opacity=".35" />
  </svg>
);

const EcoSVG = () => (
  <div className="relative">
    <PadSVG accent="#d3efdc" />
    <span className="absolute -top-2 right-0 text-4xl">🍃</span>
  </div>
);

const products = [
  { name: "Sanitary Pads", desc: "Everyday comfort & protection", price: "₹149", art: <PadSVG />, tag: "Bestseller" },
  { name: "Panty Liners", desc: "Light, fresh & all-day comfort", price: "₹99", art: <LinerSVG />, tag: "Daily" },
  { name: "Period Pants", desc: "Leak-proof, flexible & worry-free", price: "₹399", art: <PantsSVG />, tag: "New" },
  { name: "Eco-Friendly Pads", desc: "Sustainable care for a cleaner planet", price: "₹199", art: <EcoSVG />, tag: "Eco" },
];

export default function Products() {
  return (
    <section id="products" className="py-22">
      <div className="mx-auto w-[92%] max-w-300">
        <SectionHead
          eyebrow="Our Products"
          title="Find your"
          highlight="perfect fit"
          sub="Everything you need for comfortable, confident days of the month."
        />
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {products.map((p, i) => (
            <Reveal key={p.name} delay={i * 0.1}>
              <motion.article
                whileHover={{ y: -10, rotateX: 5, rotateY: -5 }}
                style={{ transformPerspective: 900 }}
                className="relative h-full rounded-3xl border border-pink-100 bg-white p-6 pt-10 text-center shadow-xl shadow-pink-200/40"
              >
                <span className="absolute left-4 top-4 rounded-full bg-pink-200 px-3 py-1 text-[11px] font-semibold text-brand">
                  {p.tag}
                </span>
                <motion.div
                  whileHover={{ scale: 1.08, rotate: -3 }}
                  className="mb-3.5 grid h-32.5 place-items-center rounded-[20px] bg-linear-to-br from-blush to-blush2"
                >
                  {p.art}
                </motion.div>
                <h3 className="mb-2 text-xl font-semibold text-plum">{p.name}</h3>
                <p className="text-sm">{p.desc}</p>
                <div className="mt-4 flex items-center justify-between">
                  <b className="text-xl text-plum">{p.price}</b>
                  <motion.button
                    whileHover={{ x: 4, scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                    aria-label={`Add ${p.name}`}
                    className="grid h-10 w-10 place-items-center rounded-full bg-linear-to-br from-brand to-brand2 text-white shadow-lg shadow-brand/30"
                  >
                    <ShoppingBag size={17} />
                  </motion.button>
                </div>
              </motion.article>
            </Reveal>
          ))}
        </div>
        <Reveal className="mt-10 text-center">
          <a href="#survey" className="inline-flex items-center gap-2 font-semibold text-brand hover:gap-3 transition-all">
            Not sure what suits you? Take our quick survey <ArrowRight size={18} />
          </a>
        </Reveal>
      </div>
    </section>
  );
}