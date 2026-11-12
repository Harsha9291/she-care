import { motion } from "framer-motion";
import { ArrowRight, Leaf } from "lucide-react";

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
      "Designed for everyday period care and your regular flow days.",
    image: regularPads,
    tag: "Daily Care",
  },
  {
    id: "xl-pads",
    number: "02",
    name: "XL Sanitary Pads",
    subtitle: "Extra Coverage",
    description:
      "Explore an extra-length option for added coverage and comfort.",
    image: xlPads,
    tag: "Extra Coverage",
  },
  {
    id: "overnight-pads",
    number: "03",
    name: "Overnight Pads",
    subtitle: "Night-time Care",
    description:
      "Discover options designed for comfortable night-time period care.",
    image: overnightPads,
    tag: "Night Care",
  },
  {
    id: "heavy-flow-pads",
    number: "04",
    name: "Heavy Flow Pads",
    subtitle: "For Heavy Flow Days",
    description:
      "Explore pad options intended for days when your menstrual flow is heavier.",
    image: heavyFlowPads,
    tag: "Heavy Flow",
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
            PadKINGO Products
          </span>

          <h2 className="mt-4 text-3xl font-extrabold text-[#173D25] sm:text-4xl">
            Find Your Everyday
            <span className="text-[#68A844]"> Comfort</span>
          </h2>

          <p className="mt-4 text-sm leading-7 text-gray-600 sm:text-base">
            Explore our sanitary pad categories and find an option that suits
            your period care needs.
          </p>
        </div>

        {/* ALL PRODUCTS BANNER */}
        <div
          id="all-products"
          className="mb-10 scroll-mt-24 rounded-3xl bg-[#103B23] px-6 py-8 text-white sm:flex sm:items-center sm:justify-between sm:px-9"
        >
          <div>
            <p className="text-xs font-bold uppercase tracking-wider text-[#B8E98A]">
              Explore Our Range
            </p>

            <h3 className="mt-2 text-2xl font-extrabold">All Products</h3>

            <p className="mt-2 max-w-xl text-sm leading-6 text-green-100/70">
              Explore different sanitary pad options for your everyday period
              care.
            </p>
          </div>

          <a
            href="#regular-pads"
            className="mt-5 inline-flex items-center gap-2 rounded-full bg-[#B8E98A] px-5 py-3 text-sm font-bold text-[#173D25] transition hover:bg-white sm:mt-0"
          >
            Explore Categories
            <ArrowRight size={16} />
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
              className="scroll-mt-24 overflow-hidden rounded-3xl border border-[#E3EBDD] bg-white shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-xl"
            >
              {/* PRODUCT IMAGE */}
              <div className="flex h-[250px] items-center justify-center overflow-hidden bg-[#F7FAF3] p-3 sm:h-[280px]">
                <img
                  src={product.image}
                  alt={product.name}
                  loading="lazy"
                  className="h-full w-full rounded-2xl object-contain transition-transform duration-500 hover:scale-105"
                />
              </div>

              {/* PRODUCT DETAILS */}
              <div className="p-6 sm:p-7">
                <div className="flex items-center justify-between gap-3">
                  <span className="text-xs font-bold text-[#78A65C]">
                    {product.number} / {product.subtitle}
                  </span>

                  <span className="rounded-full bg-[#F0F6EB] px-3 py-1.5 text-[11px] font-bold text-[#568746]">
                    {product.tag}
                  </span>
                </div>

                <h3 className="mt-3 text-xl font-extrabold text-[#173D25]">
                  {product.name}
                </h3>

                <p className="mt-3 text-sm leading-7 text-gray-500">
                  {product.description}
                </p>

                <div className="mt-5 border-t border-gray-100 pt-5">
                  <a
                    href="#contact"
                    className="inline-flex items-center gap-2 text-sm font-bold text-[#47823A] transition-all hover:gap-3"
                  >
                    Know More
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
