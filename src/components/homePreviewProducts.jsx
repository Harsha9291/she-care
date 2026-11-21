import { motion } from "framer-motion";
import { ArrowRight, Clock, Leaf, Sparkles } from "lucide-react";

import regularPads from "../assets/regular-pads.png";
import xlPads from "../assets/xl-pads.png";
import overnightPads from "../assets/overnight-pads.png";
import heavyFlowPads from "../assets/heavy-flow-pads.png";

const homePreviewProducts = [
  {
    id: "regular-pads",
    code: "01",
    name: "Regular Pads",
    tag: "Everyday Comfort",
    desc: "Balanced daily care & soft breathability.",
    image: regularPads,
    accent: "from-[#EAF7E4] to-[#D4ECC9]",
  },
  {
    id: "xl-pads",
    code: "02",
    name: "XL Pads",
    tag: "Extra Coverage",
    desc: "Extended length for active day-time confidence.",
    image: xlPads,
    accent: "from-[#E4F4E9] to-[#CBE8D4]",
  },
  {
    id: "overnight-pads",
    code: "03",
    name: "Overnight Pads",
    tag: "Night-Time Care",
    desc: "Wider back protection for peaceful sleep.",
    image: overnightPads,
    accent: "from-[#E8F5E2] to-[#CEE8C4]",
  },
  {
    id: "heavy-flow-pads",
    code: "04",
    name: "Heavy Flow Pads",
    tag: "High Absorption",
    desc: "Gentle herbal top layer for heavier days.",
    image: heavyFlowPads,
    accent: "from-[#EEF7E6] to-[#D6EECA]",
  },
];

export default function HomeProductsPreview() {
  return (
    <section
      id="home-products"
      className="relative overflow-hidden bg-gradient-to-b from-[#F7FBF2] via-[#EEF7EA] to-[#E6F4E0] px-5 py-16 sm:px-8 lg:px-12"
    >
      {/* SOFT AMBIENT GLOWS (MATCHING HERO) */}
      <div className="pointer-events-none absolute -left-24 top-10 h-72 w-72 rounded-full bg-green-300/25 blur-[95px]" />
      <div className="pointer-events-none absolute -right-24 bottom-10 h-80 w-80 rounded-full bg-lime-300/25 blur-[105px]" />

      <div className="relative mx-auto max-w-7xl">
        {/* TOP HEADER */}
        <div className="flex flex-col items-start justify-between gap-6 md:flex-row md:items-end">
          <div className="max-w-xl">
            <div className="inline-flex items-center gap-2 rounded-full border border-green-200/80 bg-white/85 px-4 py-1.5 text-xs font-bold text-[#173D25] shadow-sm backdrop-blur-sm">
              <Leaf size={14} className="fill-green-600 text-green-700" />
              Upcoming PadKingoo Range
              <span className="text-green-600">•</span>
              <span className="inline-flex items-center gap-1 text-[#47823A]">
                <Clock size={12} /> Coming Soon
              </span>
            </div>

            <h2 className="mt-4 text-3xl font-black tracking-tight text-[#123C22] sm:text-4xl">
              Crafted for{" "}
              <span className="bg-gradient-to-r from-green-800 via-green-700 to-lime-700 bg-clip-text italic text-transparent">
                Natural Ease
              </span>
            </h2>

            <p className="mt-2.5 text-sm leading-6 text-[#34543A]">
              Preview our four upcoming variants right on the home page. Blurred
              sneak-peek while final herbal quality &amp; comfort checks wrap
              up.
            </p>
          </div>

          {/* <motion.a
            href="/products"
            whileHover={{ scale: 1.03, y: -1 }}
            whileTap={{ scale: 0.97 }}
            className="inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-[#123C22] to-[#2E7D32] px-5 py-3 text-xs font-bold text-white shadow-md shadow-green-900/15 transition"
          >
            <span className="text-white">View Full Product Preview</span>
            <ArrowRight size={15} color="#FFFFFF" />
          </motion.a> */}
        </div>

        {/* 4-CARD BLURRED COLLAB GRID */}
        <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {homePreviewProducts.map((item, idx) => (
            <motion.a
              key={item.id}
              href={`/products#${item.id}`}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.45, delay: idx * 0.07 }}
              className="group relative flex flex-col justify-between overflow-hidden rounded-3xl border border-white/80 bg-white/75 p-3.5 shadow-sm backdrop-blur-md transition-all duration-300 hover:-translate-y-1.5 hover:border-green-300/70 hover:bg-white/95 hover:shadow-xl"
            >
              {/* BLURRED IMAGE BOX */}
              <div
                className={`relative flex h-48 items-center justify-center overflow-hidden rounded-2xl bg-gradient-to-br ${item.accent} p-3`}
              >
                <img
                  src={item.image}
                  alt={`${item.name} preview`}
                  loading="lazy"
                  className="h-full w-full scale-105 object-contain blur-[4px] brightness-95 saturate-75 transition-all duration-500 group-hover:scale-110 group-hover:blur-[2px]"
                />

                {/* FROSTED COMING SOON PILL */}
                <div className="absolute inset-0 flex flex-col items-center justify-center bg-[#123C22]/15 backdrop-blur-[1.5px]">
                  <span className="inline-flex items-center gap-1.5 rounded-full border border-white/60 bg-[#123C22]/85 px-3.5 py-1 text-[10px] font-extrabold uppercase tracking-wider text-[#D9F99D] shadow">
                    <Sparkles size={11} />
                    Coming Soon
                  </span>
                </div>
              </div>

              {/* CARD TEXT */}
              <div className="px-1.5 pb-1 pt-4">
                <div className="flex items-center justify-between gap-2">
                  <span className="text-[11px] font-bold text-[#47823A]">
                    {item.tag}
                  </span>
                  <span className="rounded-full bg-[#E8F5E3] px-2.5 py-0.5 text-[10px] font-bold text-[#173D25]">
                    Sneak Peek
                  </span>
                </div>

                <h3 className="mt-1.5 text-base font-extrabold text-[#123C22]">
                  {item.name}
                </h3>

                <p className="mt-1 line-clamp-2 text-xs leading-5 text-[#46634C]">
                  {item.desc}
                </p>
              </div>
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  );
}
