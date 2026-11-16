
import { motion } from "framer-motion";
import { ArrowRight, Leaf, Sparkles } from "lucide-react";

import neemCare from "../assets/neem-care.png";
import lavenderFresh from "../assets/lavender-fresh.png";
import roseSoft from "../assets/rose-soft.png";
import turmericShield from "../assets/turmeric-shield.png";
import aloeVera from "../assets/aloe-vera-soothing.png";
import mintCool from "../assets/mint-cool.png";

const flavours = [
  {
    id: "neem-care",
    name: "Neem Care",
    subtitle: "Nature Inspired Care",
    description:
      "Discover the Neem Care collection, inspired by the natural goodness of neem.",
    image: neemCare,
    bg: "bg-[#EAF5E5]",
    number: "01",
  },
  {
    id: "lavender-fresh",
    name: "Lavender Fresh",
    subtitle: "A Touch of Freshness",
    description:
      "Explore the Lavender Fresh collection with its refreshing floral inspiration.",
    image: lavenderFresh,
    bg: "bg-[#F1EAFE]",
    number: "02",
  },
  {
    id: "rose-soft",
    name: "Rose Soft",
    subtitle: "Softness Inspired by Roses",
    description:
      "Discover Rose Soft, a collection inspired by the timeless beauty of roses.",
    image: roseSoft,
    bg: "bg-[#FCEBED]",
    number: "03",
  },
  // {
  //   id: "turmeric-shield",
  //   name: "Turmeric Shield",
  //   subtitle: "Inspired by Turmeric",
  //   description:
  //     "Explore a turmeric-inspired collection rooted in familiar botanical traditions.",
  //   image: turmericShield,
  //   bg: "bg-[#FFF4DC]",
  //   number: "04",
  // },
  {
    id: "aloe-vera-soothing",
    name: "Aloe Vera Soothing",
    subtitle: "Aloe Inspired Comfort",
    description:
      "Discover the Aloe Vera collection with a fresh, botanical-inspired theme.",
    image: aloeVera,
    bg: "bg-[#E3F5EE]",
    number: "05",
  },
  {
    id: "mint-cool",
    name: "Mint Cool",
    subtitle: "A Fresh Mint Inspired Feel",
    description:
      "Explore Mint Cool, a collection inspired by the refreshing character of mint.",
    image: mintCool,
    bg: "bg-[#E4F5F5]",
    number: "06",
  },
];

export default function FlavoursPage() {
  return (
    <main className="min-h-screen overflow-hidden bg-[#F8FBF5]">

      {/* HERO SECTION */}
      <section className="relative overflow-hidden bg-[#173D25] px-5 py-20 sm:px-8 lg:py-24">
        <div className="pointer-events-none absolute -left-20 -top-20 h-72 w-72 rounded-full bg-green-400/10 blur-3xl" />
        <div className="pointer-events-none absolute -bottom-24 -right-10 h-72 w-72 rounded-full bg-lime-300/10 blur-3xl" />

        <div className="relative mx-auto max-w-5xl text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <span className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-5 py-2 text-xs font-bold uppercase tracking-[2px] text-[#C8F0A9]">
              <Leaf size={15} />
              PadKINGOO Herbal Collection
            </span>

            <h1 className="mt-7 text-4xl font-extrabold leading-tight text-white sm:text-5xl lg:text-6xl">
              Discover Our
              <span className="block text-[#B8E98A]">
                Herbal Flavours
              </span>
            </h1>

            <p className="mx-auto mt-6 max-w-2xl text-sm leading-8 text-green-100/80 sm:text-base">
              Explore the PadKINGOO  collection inspired by nature,
              familiar botanical ingredients and refreshing floral themes.
            </p>

            <a
              href="#all-flavours"
              className="mt-8 inline-flex items-center gap-2 rounded-full bg-[#B8E98A] px-7 py-3.5 text-sm font-bold text-[#173D25] transition hover:bg-white"
            >
              Explore Collection
              <ArrowRight size={18} />
            </a>
          </motion.div>
        </div>
      </section>

      {/* FLAVOURS INTRO */}
      <section
        id="all-flavours"
        className="scroll-mt-24 px-5 pb-8 pt-16 sm:px-8 lg:px-12"
      >
        <div className="mx-auto max-w-7xl">
          <div className="mx-auto mb-12 max-w-2xl text-center">
            <span className="inline-flex items-center gap-2 rounded-full bg-[#E6F2DE] px-4 py-2 text-xs font-extrabold uppercase tracking-wider text-[#43843A]">
              <Sparkles size={15} />
              Explore The Range
            </span>

            <h2 className="mt-5 text-3xl font-extrabold text-[#173D25] sm:text-4xl">
              Find Your Favourite
              <span className="text-[#68A849]"> Flavour</span>
            </h2>

            <p className="mt-4 text-sm leading-7 text-gray-600 sm:text-base">
              Take a closer look at our six nature-inspired collections.
            </p>
          </div>

          {/* IMAGE CARDS */}
          <div className="grid gap-7 sm:grid-cols-2 lg:grid-cols-3">
            {flavours.map((flavour, index) => (
              <motion.article
                key={flavour.id}
                id={flavour.id}
                initial={{ opacity: 0, y: 25 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.15 }}
                transition={{
                  duration: 0.5,
                  delay: index * 0.07,
                }}
                className="group scroll-mt-28 overflow-hidden rounded-3xl border border-[#E5EDDF] bg-white shadow-sm transition-all duration-300 hover:-translate-y-2 hover:shadow-xl"
              >
                {/* IMAGE */}
                <div
                  className={`relative flex h-[280px] items-center justify-center overflow-hidden p-5 ${flavour.bg}`}
                >
                  <span className="absolute left-5 top-5 z-10 rounded-full bg-white/90 px-3 py-1.5 text-[10px] font-extrabold uppercase tracking-wider text-[#43843A] shadow-sm">
                    PadKINGO
                  </span>

                  <span className="absolute right-5 top-4 text-4xl font-black text-black/10">
                    {flavour.number}
                  </span>

                  <img
                    src={flavour.image}
                    alt={flavour.name}
                    loading="lazy"
                    className="h-full w-full object-contain transition-transform duration-500 group-hover:scale-110"
                  />
                </div>

                {/* CONTENT */}
                <div className="p-6">
                  <p className="text-xs font-bold uppercase tracking-[1.5px] text-[#68A849]">
                    {flavour.subtitle}
                  </p>

                  <h3 className="mt-2 text-xl font-extrabold text-[#173D25]">
                    {flavour.name}
                  </h3>

                  <p className="mt-3 min-h-[72px] text-sm leading-7 text-gray-500">
                    {flavour.description}
                  </p>

                  <div className="mt-5 border-t border-gray-100 pt-5">
                    <a
                      href="/products"
                      className="inline-flex items-center gap-2 text-sm font-bold text-[#43843A] transition-all hover:gap-3"
                    >
                      Explore Products
                      <ArrowRight size={17} />
                    </a>
                  </div>
                </div>
              </motion.article>
            ))}
          </div>
        </div>
      </section>

      {/* BOTTOM BANNER */}
      <section className="px-5 py-16 sm:px-8 lg:px-12">
        <div className="relative mx-auto max-w-7xl overflow-hidden rounded-3xl bg-[#173D25] px-6 py-12 text-center sm:px-12">
          <div className="pointer-events-none absolute -right-16 -top-20 h-64 w-64 rounded-full bg-green-400/10" />

          <div className="relative">
            <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-full bg-white/10 text-[#B8E98A]">
              <HeartIcon />
            </div>

            <h2 className="mt-5 text-2xl font-extrabold text-white sm:text-3xl">
              Nature Inspired. PadKINGOO Care.
            </h2>

            <p className="mx-auto mt-3 max-w-xl text-sm leading-7 text-green-100/75">
              Explore the PadKINGOO collection and discover
              our range of herbal-inspired flavours.
            </p>

            <a
              href="/products"
              className="mt-7 inline-flex items-center gap-2 rounded-full bg-[#B8E98A] px-7 py-3.5 text-sm font-bold text-[#173D25] transition hover:bg-white"
            >
              View Products
              <ArrowRight size={17} />
            </a>
          </div>
        </div>
      </section>

    </main>
  );
}

function HeartIcon() {
  return <Leaf size={26} />;
}
