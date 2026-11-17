
import { motion } from "framer-motion";
import {
  ArrowRight,
  Leaf,
  ShieldCheck,
  Sparkles,
  Wind,
  Recycle,
  Heart,
} from "lucide-react";

import heroDisplay from "../assets/PadKINGO Herbal Comfort Display.png";
import Women from "../assets/women.png";

import neemCare from "../assets/neem-care.png";
import lavenderFresh from "../assets/lavender-fresh.png";
import roseSoft from "../assets/rose-soft.png";
import turmericShield from "../assets/turmeric-shield.png";
import aloeVera from "../assets/aloe-vera-soothing.png";
import mintCool from "../assets/mint-cool.png";
import HerbalFlavours from "./HerbalFlavours";

const features = [
  { icon: Leaf, title: "Herbal", sub: "Care" },
  { icon: ShieldCheck, title: "Leak-Proof", sub: "Protection" },
  { icon: Sparkles, title: "Ultra Soft", sub: "Comfort" },
  { icon: Wind, title: "Breathable", sub: "& Fresh" },
  { icon: Recycle, title: "Eco-Friendly", sub: "& Safe" },
];

const flavours = [
  {
    name: "Neem Care",
    image: neemCare,
    color: "bg-[#DDF3D5]",
    href: "/flavours#neem-care",
  },
  {
    name: "Lavender Fresh",
    image: lavenderFresh,
    color: "bg-[#EDE0FF]",
    href: "/flavours#lavender-fresh",
  },
  {
    name: "Rose Soft",
    image: roseSoft,
    color: "bg-[#FFE1E8]",
    href: "/flavours#rose-soft",
  },
  {
    name: "Turmeric Shield",
    image: turmericShield,
    color: "bg-[#FFF0C5]",
    href: "/flavours#turmeric-shield",
  },
  {
    name: "Aloe Vera Soothing",
    image: aloeVera,
    color: "bg-[#DDF3D5]",
    href: "/flavours#aloe-vera-soothing",
  },
  {
    name: "Mint Cool",
    image: mintCool,
    color: "bg-[#D8F3EB]",
    href: "/flavours#mint-cool",
  },
];

export default function Hero() {
  return (
    <section
      id="home"
      className="relative isolate overflow-hidden bg-gradient-to-br from-[#F5FBEF] via-[#E7F6E2] to-[#C6E8C2]"
    >
      {/* BACKGROUND DECORATIONS */}
      <div className="pointer-events-none absolute -left-32 top-0 h-[400px] w-[400px] rounded-full bg-green-300/30 blur-[100px]" />

      <div className="pointer-events-none absolute right-0 top-0 h-[450px] w-[450px] rounded-full bg-lime-300/30 blur-[110px]" />

      <div className="pointer-events-none absolute right-[20%] top-10 h-64 w-64 rounded-full bg-white/30 blur-[80px]" />

      {/* DECORATIVE LEAVES */}
      <div className="pointer-events-none absolute right-[8%] top-0 hidden rotate-[-25deg] text-green-600/30 lg:block">
        <Leaf size={95} fill="currentColor" />
      </div>

      <div className="pointer-events-none absolute left-[45%] top-5 hidden rotate-45 text-green-600/20 lg:block">
        <Leaf size={55} fill="currentColor" />
      </div>

      {/* MAIN HERO CONTENT */}
      <div className="relative mx-auto grid min-h-[520px] max-w-[1500px] grid-cols-1 items-center gap-5 px-5 pb-8 pt-10 sm:px-8 lg:grid-cols-[0.85fr_1.1fr_1.2fr] lg:gap-2 lg:px-8 lg:pb-0 lg:pt-0">

        {/* LEFT WOMAN IMAGE */}
        <motion.div
          initial={{ opacity: 0, x: -60 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.9 }}
          className="relative order-2 mx-auto flex h-[360px] w-full max-w-[390px] items-end justify-center lg:order-1 lg:-ml-20 lg:h-[540px] lg:w-[135%] lg:max-w-none lg:translate-x-[-25px]"
        >
          {/* SOFT BACKGROUND GLOW */}
          <div className="absolute bottom-0 left-[5%] h-[80%] w-[90%] rounded-t-full bg-gradient-to-t from-[#B9E7A9]/50 to-[#F5FBEF]/20 blur-2xl" />

          {/* WOMAN IMAGE WITH BOTTOM FADE */}
          <motion.img
            src={Women}
            alt="Woman enjoying natural comfort"
            animate={{ y: [0, -5, 0] }}
            transition={{
              duration: 5,
              repeat: Infinity,
              ease: "easeInOut",
            }}
            style={{
              WebkitMaskImage:
                "linear-gradient(to bottom, black 0%, black 68%, rgba(0,0,0,0.85) 78%, transparent 100%)",
              maskImage:
                "linear-gradient(to bottom, black 0%, black 68%, rgba(0,0,0,0.85) 78%, transparent 100%)",
            }}
            className="relative z-10 h-full w-full object-contain object-bottom drop-shadow-[0_15px_20px_rgba(30,90,40,0.10)]"
          />
        </motion.div>

        {/* CENTER CONTENT */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="relative z-20 order-1 mx-auto w-full max-w-[520px] lg:order-2 lg:py-8"
        >
          {/* TOP BADGE */}
          <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-green-100 bg-white/85 px-4 py-2 text-[10px] font-bold text-green-900 shadow-md sm:text-xs">
            <Leaf size={15} className="fill-green-600 text-green-700" />
            Herbal Protection
            <span className="text-green-500">•</span>
            All-Day Freshness
          </div>

          {/* HEADING */}
          <h1 className="text-[38px] font-black leading-[1.05] tracking-tight text-[#123C22] sm:text-5xl lg:text-[42px] xl:text-[50px]">
            Periods, Naturally
            <br />
            <span className="bg-gradient-to-r from-green-900 via-green-700 to-lime-700 bg-clip-text italic text-transparent">
              Comfortable
            </span>
            <span className="ml-2 text-green-700">♡</span>
          </h1>

          {/* DESCRIPTION */}
          <p className="mt-4 max-w-[420px] text-xs leading-6 text-[#34543A] sm:text-sm">
            PadKINGO – India's Herbal Sanitary Pads with Nature's Care, Modern
            Protection and Lasting Freshness.
          </p>

          {/* BUTTONS */}
          <div className="mt-5 flex flex-wrap items-center gap-3">
            <motion.a
              href="/products"
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.96 }}
              className="flex items-center gap-2 rounded-full bg-gradient-to-r from-green-800 to-green-600 px-5 py-2.5 text-xs font-bold text-white shadow-lg shadow-green-300/50"
            >
            <span className="text-white"> Shop Now</span> 
              <ArrowRight color="white" size={15} />
            </motion.a>

            <motion.a
              href="/flavours"
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.96 }}
              className="flex items-center gap-2 rounded-full border border-white bg-white/90 px-4 py-2.5 text-xs font-bold text-green-950 shadow-md"
            >
              <span className="flex h-5 w-5 items-center justify-center rounded-full bg-green-700 text-white">
                <ArrowRight size={12} />
              </span>
              Explore Flavours
            </motion.a>
          </div>

          {/* FEATURES */}
          <div className="mt-7 grid grid-cols-5 gap-2 sm:gap-3">
            {features.map(({ icon: Icon, title, sub }, index) => (
              <motion.div
                key={title}
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4 + index * 0.1 }}
                whileHover={{ y: -5 }}
                className="flex flex-col items-center text-center"
              >
                <div className="mb-2 flex h-9 w-9 items-center justify-center rounded-full border border-white bg-white/90 text-green-700 shadow-md sm:h-11 sm:w-11">
                  <Icon size={19} />
                </div>

                <p className="text-[8px] font-extrabold leading-tight text-green-950 sm:text-[10px]">
                  {title}
                  <br />
                  {sub}
                </p>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* RIGHT PRODUCT IMAGE */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9, x: 35 }}
          animate={{ opacity: 1, scale: 1, x: 0 }}
          transition={{ duration: 1 }}
          className="relative order-3 mx-auto flex min-h-[300px] w-full max-w-[570px] items-center justify-center lg:min-h-[490px]"
        >
          <div className="absolute left-1/2 top-1/2 h-[250px] w-[250px] -translate-x-1/2 -translate-y-1/2 rounded-full border-[18px] border-white/30 bg-green-200/20 sm:h-[350px] sm:w-[350px] lg:h-[390px] lg:w-[390px]" />

          <div className="absolute bottom-[10%] left-[10%] h-10 w-[80%] rounded-[50%] bg-green-900/15 blur-xl" />

          <motion.img
            src={heroDisplay}
            alt="PadKINGO Herbal Sanitary Pads"
            animate={{ y: [0, -10, 0] }}
            transition={{
              duration: 5,
              repeat: Infinity,
              ease: "easeInOut",
            }}
            className="relative z-10 mx-auto max-h-[440px] w-full object-contain drop-shadow-[0_25px_25px_rgba(25,90,35,0.2)]"
          />

          {/* FLOATING HERBAL BADGE */}
          <motion.div
            animate={{ y: [0, -8, 0] }}
            transition={{ duration: 4, repeat: Infinity }}
            className="absolute right-[2%] top-[12%] z-20 hidden items-center gap-2 rounded-xl border border-white bg-white/90 px-3 py-2 shadow-lg sm:flex"
          >
            <div className="flex h-8 w-8 items-center justify-center rounded-full bg-green-100 text-green-700">
              <Leaf size={17} />
            </div>

            <div>
              <p className="text-[10px] font-extrabold text-green-900">
                Herbal Care
              </p>
              <p className="text-[9px] text-green-700">
                Nature Inspired
              </p>
            </div>
          </motion.div>

          {/* FLOATING HEART */}
          <motion.div
            animate={{ scale: [1, 1.12, 1] }}
            transition={{ duration: 2.5, repeat: Infinity }}
            className="absolute bottom-[20%] right-[5%] z-20 flex h-10 w-10 items-center justify-center rounded-full border border-white bg-white/90 text-green-700 shadow-lg"
          >
            <Heart size={19} />
          </motion.div>
        </motion.div>
      </div>

      {/* HERBAL FLAVOURS STRIP */}
              <HerbalFlavours />

      {/* BOTTOM CURVE */}
      <div className="pointer-events-none absolute -bottom-12 left-[-5%] h-24 w-[110%] rounded-[50%] bg-[#F7FBF2]" />
    </section>
  );
}
