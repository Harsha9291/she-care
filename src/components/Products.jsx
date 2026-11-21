import { motion } from "framer-motion";
import { ArrowRight, Clock, Leaf } from "lucide-react";

import regularPads from "../assets/regular-pads.png";
import xlPads from "../assets/xl-pads.png";
import overnightPads from "../assets/overnight-pads.png";
import heavyFlowPads from "../assets/heavy-flow-pads.png";

const productCategories = [
  {
    id: "regular-pads",
    number: "01",
    name: "Regular Sanitary Pads",
    subtitle: "Everyday Comfort",
    description:
      "Designed for everyday period care and your regular flow days with balanced comfort and breathability.",
    image: regularPads,
    tag: "Daily Care",
    status: "Coming Soon",
    eta: "Launching Soon",
  },
  {
    id: "xl-pads",
    number: "02",
    name: "XL Sanitary Pads",
    subtitle: "Extra Coverage",
    description:
      "Crafted with extended length for added coverage, confidence, and all-day ease during active routines.",
    image: xlPads,
    tag: "Extra Coverage",
    status: "Coming Soon",
    eta: "Launching Soon",
  },
  {
    id: "overnight-pads",
    number: "03",
    name: "Overnight Pads",
    subtitle: "Night-time Care",
    description:
      "Built for uninterrupted night-time comfort with wider back coverage so you can rest worry-free.",
    image: overnightPads,
    tag: "Night Care",
    status: "Coming Soon",
    eta: "Launching Soon",
  },
  {
    id: "heavy-flow-pads",
    number: "04",
    name: "Heavy Flow Pads",
    subtitle: "For Heavy Flow Days",
    description:
      "Engineered for high-absorption protection on heavier flow days with a soft, skin-friendly top layer.",
    image: heavyFlowPads,
    tag: "Heavy Flow",
    status: "Coming Soon",
    eta: "Launching Soon",
  },
];

export default function Products() {
  return (
    <section
      id="products"
      className="scroll-mt-20 bg-[#F7FAF3] px-5 py-16 sm:px-8 lg:px-12"
    >
      <div className="mx-auto max-w-7xl">
        {/* HEADING */}
        <div className="mx-auto mb-12 max-w-2xl text-center">
          <span className="inline-flex items-center gap-2 rounded-full bg-[#E7F3DF] px-4 py-2 text-xs font-bold uppercase tracking-wider text-[#347A38]">
            <Leaf size={15} />
            PadKingoo Products
          </span>

          <h2 className="mt-4 text-3xl font-extrabold text-[#173D25] sm:text-4xl">
            Find Your Everyday
            <span className="text-[#68A844]"> Comfort</span>
          </h2>

          <p className="mt-4 text-sm leading-7 text-gray-600 sm:text-base">
            Our upcoming sanitary pad range is currently in preparation. Preview
            the categories below — all variants are{" "}
            <span className="font-semibold text-[#173D25]">Coming Soon</span>.
          </p>
        </div>

        {/* ALL PRODUCTS BANNER */}
        <div
          id="all-products"
          className="mb-10 scroll-mt-24 rounded-3xl bg-[#103B23] px-6 py-8 text-white sm:flex sm:items-center sm:justify-between sm:px-9"
        >
          <div>
            <div className="inline-flex items-center gap-2 rounded-full bg-white/10 px-3 py-1 text-xs font-bold uppercase tracking-wider text-[#B8E98A]">
              <Clock size={13} />
              Coming Soon
            </div>

            <h3 className="mt-3 text-2xl font-extrabold">
              All Products — Coming Soon
            </h3>

            <p className="mt-2 max-w-xl text-sm leading-6 text-green-100/75">
              We are putting the finishing touches on our everyday, XL,
              overnight, and heavy-flow pads. Stay tuned for launch updates.
            </p>
          </div>

          <a
            href="#regular-pads"
            className="mt-5 inline-flex shrink-0 items-center gap-2 rounded-full bg-[#B8E98A] px-5 py-3 text-sm font-bold text-[#173D25] transition hover:bg-white sm:mt-0"
          >
            <span className="text-black">Preview Range</span>
            <ArrowRight color="black" size={16} />
          </a>
        </div>

        {/* PRODUCT CARDS */}
        <div className="grid gap-7 sm:grid-cols-2">
          {productCategories.map((product, index) => (
            <motion.article
              key={product.id}
              id={product.id}
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.15 }}
              transition={{
                duration: 0.45,
                delay: index * 0.08,
              }}
              className="group scroll-mt-24 overflow-hidden rounded-3xl border border-[#E3EBDD] bg-white shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-xl"
            >
              {/* STRONGER BLUR PRODUCT IMAGE + COMING SOON OVERLAY */}
              <div className="relative flex h-[250px] items-center justify-center overflow-hidden bg-[#EEF4E8] p-3 sm:h-[280px]">
                <img
                  src={product.image}
                  alt={`${product.name} - Coming Soon`}
                  loading="lazy"
                  className="h-full w-full scale-105 rounded-2xl object-contain blur-[3px] brightness-90 saturate-75 transition-all duration-500 group-hover:blur-[2px]"
                />

                {/* Frosted overlay + Coming Soon badge */}222
                <div className="pointer-events-none absolute inset-0 flex flex-col items-center justify-center bg-[#103B23]/20 px-4 text-center backdrop-blur-[2px]">
                  <span className="inline-flex items-center gap-1.5 rounded-full border border-white/40 bg-[#173D25]/90 px-4 py-1.5 text-xs font-extrabold uppercase tracking-widest text-[#B8E98A] shadow-md">
                    <Clock size={13} />
                    {product.status}
                  </span>
                  {/* <span className="mt-2 rounded-full bg-white/95 px-3 py-0.5 text-[11px] font-semibold text-[#173D25] shadow-sm">
                    {product.eta}
                  </span> */}
                </div>
              </div>

              {/* PRODUCT DETAILS */}
              <div className="p-6 sm:p-7">
                <div className="flex items-center justify-between gap-3">
                  <span className="text-xs font-bold text-[#78A65C]">
                    {product.number} / {product.subtitle}
                  </span>

                  <div className="flex items-center gap-2">
                    <span className="rounded-full bg-[#FFF6E5] px-3 py-1 text-[11px] font-bold text-[#9A5B13]">
                      {product.status}
                    </span>
                    <span className="rounded-full bg-[#F0F6EB] px-3 py-1 text-[11px] font-bold text-[#568746]">
                      {product.tag}
                    </span>
                  </div>
                </div>

                <h3 className="mt-3 text-xl font-extrabold text-[#173D25]">
                  {product.name}
                </h3>

                <p className="mt-3 text-sm leading-7 text-gray-500">
                  {product.description}
                </p>

                <div className="mt-5 flex items-center justify-between border-t border-gray-100 pt-5">
                  <span className="inline-flex items-center gap-1.5 text-xs font-semibold text-gray-400">
                    <Clock size={14} />
                    Available at launch
                  </span>

                  <a
                    href="#contact"
                    className="inline-flex items-center gap-2 text-sm font-bold text-[#47823A] transition-all hover:gap-3"
                  >
                    Notify Me
                    <ArrowRight size={16} />
                  </a>
                </div>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
