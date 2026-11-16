import { motion } from "framer-motion";
import { Feather, ShieldCheck, Heart, Recycle } from "lucide-react";

import Reveal from "./Reveal";
import SectionHead from "./SectionHead";

const items = [
  {
    icon: Feather,
    title: "Ultra Soft",
    text: "Cotton-like top layer that feels gentle and cloud-soft all day long.",
    color: "from-pink-400 to-rose-500",
    shadow: "shadow-pink-300/40",
  },
  {
    icon: ShieldCheck,
    title: "Leak Proof",
    text: "Advanced 5-layer absorption with side guards for 12-hour protection.",
    color: "from-purple-400 to-violet-500",
    shadow: "shadow-purple-300/40",
  },
  {
    icon: Heart,
    title: "Skin Friendly",
    text: "Dermatologically tested, rash-free and free from harsh chemicals.",
    color: "from-rose-400 to-pink-500",
    shadow: "shadow-rose-300/40",
  },
  {
    icon: Recycle,
    title: "Eco Conscious",
    text: "Biodegradable options for a cleaner planet and a better tomorrow.",
    color: "from-green-400 to-emerald-500",
    shadow: "shadow-green-300/40",
  },
];

export default function WhyChooseUs() {
  return (
    <section id="why" className="relative overflow-hidden py-20 sm:py-24">
      <div className="mx-auto w-[92%] max-w-[1200px]">
        <SectionHead
          eyebrow="Why Choose Us"
          title="Care that you can"
          highlight="feel"
          sub="Designed by women, for women – every detail is made for your comfort."
        />

        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {items.map(({ icon: Icon, title, text, color, shadow }, i) => (
            <Reveal key={title} delay={i * 0.1}>
              <motion.article
                whileHover={{
                  y: -10,
                  scale: 1.02,
                }}
                transition={{
                  type: "spring",
                  stiffness: 250,
                  damping: 18,
                }}
                className="group relative h-full overflow-hidden rounded-3xl border border-pink-100 bg-white p-7 text-center shadow-xl shadow-pink-200/40 transition-all duration-300 hover:border-pink-200"
              >
                {/* Background Decoration */}
                <div className="absolute -right-10 -top-10 h-32 w-32 rounded-full bg-pink-100 opacity-0 blur-2xl transition-all duration-500 group-hover:opacity-100" />

                <div className="absolute -bottom-10 -left-10 h-28 w-28 rounded-full bg-purple-100 opacity-0 blur-2xl transition-all duration-500 group-hover:opacity-100" />

                {/* Icon */}
                <motion.div
                  whileHover={{
                    rotate: 8,
                    scale: 1.12,
                  }}
                  transition={{ type: "spring", stiffness: 300 }}
                  className={`relative mx-auto mb-6 flex h-[72px] w-[72px] items-center justify-center rounded-[22px] bg-gradient-to-br ${color} ${shadow} shadow-xl`}
                >
                  <Icon
                    size={32}
                    strokeWidth={2.2}
                    className="block shrink-0 text-white"
                    aria-hidden="true"
                  />
                </motion.div>

                {/* Content */}
                <h3 className="relative mb-3 text-xl font-bold text-plum">
                  {title}
                </h3>

                <p className="relative text-sm leading-7 text-gray-600">
                  {text}
                </p>

                {/* Bottom Decoration */}
                <div className="mx-auto mt-5 h-1 w-10 rounded-full bg-gradient-to-r from-pink-400 to-purple-400 transition-all duration-300 group-hover:w-20" />
              </motion.article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
