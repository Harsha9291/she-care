import { motion } from "framer-motion";
import {
  ArrowRight,
  Leaf,
  ShieldCheck,
  Sparkles,
  Wind,
  Recycle,
  Play,
} from "lucide-react";

import heroDisplay from "../assets/PadKINGO Herbal Comfort Display.png";

const features = [
  { icon: Leaf, title: "Herbal", sub: "Care" },
  { icon: ShieldCheck, title: "Leak-Proof", sub: "Protection" },
  { icon: Sparkles, title: "Ultra Soft", sub: "Comfort" },
  { icon: Wind, title: "Breathable", sub: "& Fresh" },
  { icon: Recycle, title: "Eco-Friendly", sub: "& Safe" },
];

export default function Hero() {
  return (
    <section
      id="home"
      className="relative isolate overflow-hidden bg-gradient-to-br from-[#F5FBEF] via-[#E6F5E2] to-[#CBE8C7]"
    >
      <div className="absolute -left-40 top-0 h-[450px] w-[450px] rounded-full bg-green-300/30 blur-[100px]" />
      <div className="absolute -right-20 top-10 h-[450px] w-[450px] rounded-full bg-green-300/40 blur-[110px]" />

      <div className="relative mx-auto grid max-w-[1500px] items-center gap-5 px-5 py-10 sm:px-8 lg:min-h-[570px] lg:grid-cols-2 lg:px-10">
        {/* Left Content */}
        <motion.div
          initial={{ opacity: 0, x: -45 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="relative z-10 mx-auto w-full max-w-[580px]"
        >
          <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-white bg-white/80 px-5 py-2.5 text-xs font-bold text-green-900 shadow-lg sm:text-sm">
            <Leaf size={17} className="fill-green-600 text-green-700" />
            Herbal Protection <span className="text-green-500">•</span>
            All-Day Freshness
          </div>

          <h1 className="text-[42px] font-black leading-[1.12] tracking-tight text-[#123C22] sm:text-5xl md:text-6xl">
            Periods,
            <br />
            <span className="bg-gradient-to-r from-green-900 via-green-700 to-lime-700 bg-clip-text italic text-transparent">
              Naturally
              <br /> Comfortable
            </span>
            <span className="ml-2 text-green-700">♡</span>
          </h1>

          <p className="mt-6 max-w-[470px] text-sm leading-7 text-[#34543A] sm:text-base">
            PadKINGO – India's Herbal Sanitary Pads with Nature's Care, Modern
            Protection and Lasting Freshness.
          </p>

          <div className="mt-7 flex flex-wrap items-center gap-4">
            {/* <motion.a
              href="#products"
              whileHover={{ scale: 1.05, y: -3 }}
              whileTap={{ scale: 0.96 }}
              className="flex items-center gap-3 rounded-full bg-gradient-to-r from-green-800 to-green-600 px-7 py-3.5 text-sm font-bold text-white shadow-xl shadow-green-300/60"
            >
              Shop Now <ArrowRight size={17} />
            </motion.a> */}

            <motion.a
              href="#flavours"
              whileHover={{ scale: 1.05, y: -3 }}
              className="flex items-center gap-3 rounded-full border border-white bg-white/85 px-6 py-3.5 text-sm font-bold text-green-950 shadow-lg"
            >
              <span className="flex h-6 w-6 items-center justify-center rounded-full bg-green-700 text-white">
                <Play size={12} fill="currentColor" />
              </span>
              Explore Flavours
            </motion.a>
          </div>

          <div className="mt-10 grid grid-cols-5 gap-2 sm:gap-4">
            {features.map(({ icon: Icon, title, sub }, index) => (
              <motion.div
                key={title}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4 + index * 0.1 }}
                whileHover={{ y: -7 }}
                className="flex flex-col items-center text-center"
              >
                <div className="mb-2 flex h-12 w-12 items-center justify-center rounded-full border border-white bg-white/90 text-green-700 shadow-lg sm:h-14 sm:w-14">
                  <Icon size={24} />
                </div>
                <p className="text-[10px] font-extrabold leading-tight text-green-950 sm:text-xs">
                  {title}
                  <br />
                  {sub}
                </p>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Right Product Image */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9, x: 35 }}
          animate={{ opacity: 1, scale: 1, x: 0 }}
          transition={{ duration: 1 }}
          className="relative mx-auto flex min-h-[330px] w-full max-w-[700px] items-center justify-center lg:min-h-[530px]"
        >
          <div className="absolute h-[330px] w-[330px] rounded-full border-[25px] border-white/30 bg-green-200/20 sm:h-[440px] sm:w-[440px]" />

          <motion.img
            src={heroDisplay}
            alt="PadKINGO Herbal Sanitary Pads"
            animate={{ y: [0, -12, 0] }}
            transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
            className="relative z-10 mx-auto max-h-[530px] w-full object-contain drop-shadow-[0_25px_25px_rgba(25,90,35,0.2)]"
          />

          <motion.div
            animate={{ y: [0, -10, 0] }}
            transition={{ duration: 4, repeat: Infinity }}
            className="absolute right-0 top-[12%] z-20 hidden items-center gap-2 rounded-2xl border border-white bg-white/90 p-3 shadow-xl sm:flex"
          >
            <div className="rounded-full bg-green-100 p-2 text-green-700">
              <Leaf size={21} />
            </div>
            <div>
              <p className="text-xs font-extrabold text-green-900">Neem Care</p>
              <p className="text-[10px] text-green-700">Nature-inspired care</p>
            </div>
          </motion.div>
        </motion.div>
      </div>

      <div className="absolute -bottom-12 left-[-5%] h-24 w-[110%] rounded-[50%] bg-[#F7FBF2]" />
    </section>
  );
}
