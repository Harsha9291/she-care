
import { motion } from "framer-motion";
import {
  Leaf,
  Heart,
  ShieldCheck,
  Sparkles,
  Flower2,
  HandHeart,
  ArrowRight,
} from "lucide-react";

const benefits = [
  {
    title: "Nature-Inspired Care",
    description:
      "A nature-inspired approach to everyday menstrual and personal care.",
    icon: Leaf,
    color: "#579343",
    bg: "#EAF4E3",
  },
  {
    title: "Comfort First",
    description:
      "We focus on comfort and helping you find products suited to your needs.",
    icon: Heart,
    color: "#D66D83",
    bg: "#FCECEF",
  },
  {
    title: "Quality Conscious",
    description:
      "We believe in clear product information and informed personal care choices.",
    icon: ShieldCheck,
    color: "#6686C8",
    bg: "#ECF1FC",
  },
  {
    title: "Everyday Freshness",
    description:
      "Simple care choices to help you feel fresh and comfortable throughout your day.",
    icon: Sparkles,
    color: "#369B9A",
    bg: "#E5F5F3",
  },
  {
    title: "Care for Every Woman",
    description:
      "Every woman deserves awareness, understanding, and access to period care information.",
    icon: Flower2,
    color: "#A27AC3",
    bg: "#F3ECF9",
  },
  {
    title: "Care With Purpose",
    description:
      "Encouraging open conversations and positive habits around menstrual health.",
    icon: HandHeart,
    color: "#D69A42",
    bg: "#FFF4E2",
  },
];

export default function WhyPadKINGOO() {
  return (
    <section
      id="benefits"
      className="relative overflow-hidden bg-[#F7FAF3] px-5 py-16 sm:px-8 lg:px-12"
    >
      {/* BACKGROUND DECORATION */}
      <div className="pointer-events-none absolute -left-32 top-20 h-72 w-72 rounded-full bg-green-100/50 blur-3xl" />

      <div className="pointer-events-none absolute -right-32 bottom-10 h-72 w-72 rounded-full bg-lime-100/50 blur-3xl" />

      <div className="relative mx-auto max-w-7xl">

        {/* HEADING */}
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mx-auto mb-12 max-w-3xl text-center"
        >
          <span className="inline-flex items-center gap-2 rounded-full border border-green-200 bg-white px-4 py-2 text-xs font-bold uppercase tracking-[1.5px] text-[#43843A] shadow-sm">
            <Leaf size={16} strokeWidth={2} />
            The PadKingoo Difference
          </span>

          <h2 className="mt-5 text-3xl font-extrabold leading-tight text-[#173D25] sm:text-4xl lg:text-5xl">
            Why Choose
            <span className="text-[#69A849]"> PadKingoo?</span>
          </h2>

          <p className="mx-auto mt-4 max-w-2xl text-sm leading-7 text-gray-600 sm:text-base">
            Period care is more than just a product. It is about
            comfort, awareness, confidence and everyday care.
          </p>
        </motion.div>

        {/* BENEFIT CARDS */}
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {benefits.map((benefit, index) => {
            const Icon = benefit.icon;

            return (
              <motion.article
                key={benefit.title}
                initial={{ opacity: 0, y: 25 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.15 }}
                transition={{
                  duration: 0.45,
                  delay: index * 0.08,
                }}
                className="group relative overflow-hidden rounded-3xl border border-[#E4EEDF] bg-white p-7 shadow-sm transition-all duration-300 hover:-translate-y-2 hover:border-[#C7DEB9] hover:shadow-xl"
              >
                {/* ICON */}
                <div
                  className="flex h-[68px] w-[68px] items-center justify-center rounded-2xl transition-all duration-300 group-hover:scale-110"
                  style={{ backgroundColor: benefit.bg }}
                >
                  <Icon
                    size={34}
                    strokeWidth={1.8}
                    color={benefit.color}
                    className="shrink-0"
                  />
                </div>

                {/* CONTENT */}
                <h3 className="mt-6 text-lg font-extrabold text-[#173D25]">
                  {benefit.title}
                </h3>

                <p className="mt-3 text-sm leading-7 text-gray-500">
                  {benefit.description}
                </p>

                {/* BOTTOM LINE */}
                <div
                  className="mt-6 h-1 w-10 rounded-full transition-all duration-300 group-hover:w-20"
                  style={{ backgroundColor: benefit.color }}
                />

                {/* DECORATION */}
                <div
                  className="pointer-events-none absolute -bottom-12 -right-12 h-32 w-32 rounded-full opacity-0 blur-2xl transition-opacity duration-300 group-hover:opacity-20"
                  style={{ backgroundColor: benefit.color }}
                />
              </motion.article>
            );
          })}
        </div>

        {/* BOTTOM BANNER */}
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="relative mt-14 overflow-hidden rounded-[30px] bg-[#103B23] px-6 py-12 text-center sm:px-12"
        >
          <div className="pointer-events-none absolute -right-12 -top-16 h-56 w-56 rounded-full bg-green-400/10 blur-2xl" />

          <div className="pointer-events-none absolute -bottom-20 -left-12 h-56 w-56 rounded-full bg-lime-300/10 blur-2xl" />

          <div className="relative">
            <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-2xl border border-white/10 bg-white/10">
              <Leaf
                size={36}
                color="#B8E98A"
                strokeWidth={1.7}
              />
            </div>

            <h3 className="mt-6 text-2xl font-extrabold text-white sm:text-3xl">
              Your Care, Our Priority
            </h3>

            <p className="mx-auto mt-4 max-w-xl text-sm leading-7 text-green-100/75 sm:text-base">
              Feel confident, stay informed, and make personal care
              choices that work for you. PadKingoo is here to support
              your everyday care journey.
            </p>

            <a
              href="/products"
              className="mt-7 inline-flex items-center gap-2 rounded-full bg-[#B8E98A] px-7 py-3.5 text-sm font-bold text-[#173D25] transition hover:bg-white"
            >
              Explore Our Products
              <ArrowRight size={17} />
            </a>
          </div>
        </motion.div>

      </div>
    </section>
  );
}
