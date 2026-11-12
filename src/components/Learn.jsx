
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  BookOpen,
  Heart,
  Leaf,
  ShieldCheck,
  Droplets,
  CalendarDays,
  ChevronDown,
  Sparkles,
  Flower2,
} from "lucide-react";

const educationCards = [
  {
    icon: Droplets,
    title: "Understanding Your Period",
    description:
      "Learn what happens during your menstrual cycle and understand the different phases of your period.",
  },
  {
    icon: CalendarDays,
    title: "Track Your Cycle",
    description:
      "Understand your cycle patterns and keep track of your monthly period dates.",
  },
  {
    icon: Heart,
    title: "Period Health & Wellness",
    description:
      "Explore simple self-care habits that can help you feel comfortable during your period.",
  },
];

const careTips = [
  {
    number: "01",
    title: "Change Your Pad Regularly",
    description:
      "Change your sanitary pad every few hours, or sooner when needed, depending on your flow.",
  },
  {
    number: "02",
    title: "Maintain Personal Hygiene",
    description:
      "Keep your intimate area clean and dry. Wash gently with water and avoid harsh products.",
  },
  {
    number: "03",
    title: "Stay Hydrated",
    description:
      "Drink enough water throughout the day and maintain a balanced diet.",
  },
  {
    number: "04",
    title: "Choose Comfortable Clothing",
    description:
      "Wear breathable and comfortable clothing to help you feel fresh.",
  },
];

const faqData = [
  {
    question: "What is menstruation?",
    answer:
      "Menstruation, commonly called a period, is a natural process in which the uterus sheds its lining through the vagina.",
  },
  {
    question: "How often should I change my sanitary pad?",
    answer:
      "Generally, change your pad every 4–6 hours, or sooner if it becomes full or uncomfortable. Follow the product instructions and your flow.",
  },
  {
    question: "Is it normal to have irregular periods?",
    answer:
      "Some variation in cycle length can be normal. However, if irregularity continues or concerns you, consult a healthcare professional.",
  },
  {
    question: "How can I stay comfortable during periods?",
    answer:
      "Stay hydrated, get enough rest, maintain personal hygiene, and choose a sanitary product that feels comfortable for you.",
  },
  {
    question: "Can I exercise during my period?",
    answer:
      "Yes. Gentle activities such as walking, stretching, or yoga may help you feel better. Listen to your body and rest when needed.",
  },
];

export default function Learn() {
  const [activeFaq, setActiveFaq] = useState(0);

  return (
    <section id="learn" className="overflow-hidden bg-[#F7FAF3]">

      {/* SECTION INTRO */}
      <div className="px-5 pb-10 pt-16 text-center sm:pt-20">
        <span className="inline-flex items-center gap-2 rounded-full bg-[#E7F3DF] px-4 py-2 text-xs font-bold uppercase tracking-wider text-[#347A38]">
          <BookOpen size={15} />
          Learn With PadKINGO
        </span>

        <h2 className="mx-auto mt-5 max-w-3xl text-3xl font-extrabold leading-tight text-[#173D25] sm:text-4xl lg:text-5xl">
          Knowledge for a
          <span className="text-[#68A844]"> Healthier You</span>
        </h2>

        <p className="mx-auto mt-4 max-w-2xl text-sm leading-7 text-gray-600 sm:text-base">
          Understand your body, learn healthy period habits, and feel more
          confident with the right knowledge and care.
        </p>
      </div>

      {/* 1. PERIOD EDUCATION */}
      <div
        id="period-education"
        className="scroll-mt-24 px-5 py-12 sm:px-8 lg:px-12"
      >
        <div className="mx-auto max-w-7xl">

          <div className="mb-8 flex items-center gap-3">
            <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-[#E5F1DC] text-[#4C913D]">
              <BookOpen size={23} />
            </div>

            <div>
              <p className="text-xs font-bold uppercase tracking-wider text-[#73A84E]">
                Section 01
              </p>
              <h3 className="text-2xl font-extrabold text-[#173D25]">
                Period Education
              </h3>
            </div>
          </div>

          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {educationCards.map((item, index) => {
              const Icon = item.icon;

              return (
                <motion.div
                  key={item.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="rounded-2xl border border-[#E5EDDF] bg-white p-6 transition hover:-translate-y-1 hover:shadow-lg"
                >
                  <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-xl bg-[#EEF6E8] text-[#559441]">
                    <Icon size={23} />
                  </div>

                  <h4 className="text-lg font-bold text-[#173D25]">
                    {item.title}
                  </h4>

                  <p className="mt-3 text-sm leading-7 text-gray-500">
                    {item.description}
                  </p>
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>

      {/* 2. PERIOD CARE GUIDE */}
      <div
        id="period-care-guide"
        className="scroll-mt-24 bg-white px-5 py-14 sm:px-8 lg:px-12"
      >
        <div className="mx-auto grid max-w-7xl items-center gap-10 lg:grid-cols-2">

          <div>
            <span className="text-xs font-bold uppercase tracking-wider text-[#73A84E]">
              Section 02
            </span>

            <h3 className="mt-3 text-3xl font-extrabold leading-tight text-[#173D25] sm:text-4xl">
              Your Everyday
              <span className="text-[#68A844]"> Period Care Guide</span>
            </h3>

            <p className="mt-4 text-sm leading-7 text-gray-600">
              Taking care of yourself during periods doesn't have to be
              complicated. Small daily habits can make a difference.
            </p>

            <div className="mt-7 space-y-5">
              {careTips.map((tip) => (
                <div key={tip.number} className="flex gap-4">
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-[#EAF4E2] text-sm font-extrabold text-[#548D3E]">
                    {tip.number}
                  </div>

                  <div>
                    <h4 className="font-bold text-[#173D25]">
                      {tip.title}
                    </h4>
                    <p className="mt-1 text-sm leading-6 text-gray-500">
                      {tip.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="relative overflow-hidden rounded-3xl bg-[#EAF4E2] p-8 sm:p-10">
            <div className="absolute -right-10 -top-10 h-40 w-40 rounded-full bg-[#D5E9C7]" />

            <div className="relative">
              <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-white text-[#5B9B43] shadow-sm">
                <Flower2 size={28} />
              </div>

              <h4 className="mt-7 text-2xl font-extrabold text-[#173D25]">
                Make Self-Care a Priority
              </h4>

              <p className="mt-3 text-sm leading-7 text-[#527052]">
                Every body is different. Understand your needs, choose
                comfortable products, and give yourself the care you deserve.
              </p>

              <div className="mt-7 flex items-center gap-2 text-sm font-bold text-[#47823A]">
                <Heart size={17} />
                Your comfort matters.
              </div>
            </div>
          </div>

        </div>
      </div>

      {/* 3. FAQ */}
      <div
        id="faq"
        className="scroll-mt-24 px-5 py-14 sm:px-8 lg:px-12"
      >
        <div className="mx-auto max-w-4xl">

          <div className="mb-8 text-center">
            <span className="text-xs font-bold uppercase tracking-wider text-[#73A84E]">
              Section 03
            </span>

            <h3 className="mt-3 text-3xl font-extrabold text-[#173D25]">
              Frequently Asked Questions
            </h3>

            <p className="mt-3 text-sm text-gray-500">
              Find answers to common questions about period care.
            </p>
          </div>

          <div className="space-y-3">
            {faqData.map((faq, index) => {
              const isOpen = activeFaq === index;

              return (
                <div
                  key={faq.question}
                  className="overflow-hidden rounded-2xl border border-[#E3EBDD] bg-white"
                >
                  <button
                    type="button"
                    onClick={() =>
                      setActiveFaq(isOpen ? null : index)
                    }
                    className="flex w-full items-center justify-between gap-4 px-5 py-5 text-left"
                  >
                    <span className="text-sm font-bold text-[#173D25] sm:text-base">
                      {faq.question}
                    </span>

                    <ChevronDown
                      size={19}
                      className={`shrink-0 text-[#5A9844] transition-transform ${
                        isOpen ? "rotate-180" : ""
                      }`}
                    />
                  </button>

                  <AnimatePresence initial={false}>
                    {isOpen && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.25 }}
                        className="overflow-hidden"
                      >
                        <p className="border-t border-[#EEF2E9] px-5 py-4 text-sm leading-7 text-gray-500">
                          {faq.answer}
                        </p>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              );
            })}
          </div>

        </div>
      </div>

      {/* 4. OUR STORY */}
      {/* <div
        id="our-story"
        className="scroll-mt-24 bg-[#103B23] px-5 py-14 text-white sm:px-8 lg:px-12"
      >
        <div className="mx-auto grid max-w-7xl items-center gap-9 lg:grid-cols-2">

          <div>
            <span className="text-xs font-bold uppercase tracking-wider text-[#B8E98A]">
              Section 04
            </span>

            <h3 className="mt-3 text-3xl font-extrabold leading-tight sm:text-4xl">
              Our Story, Our Promise
            </h3>

            <p className="mt-5 text-sm leading-7 text-green-100/75">
              PadKINGO is built around a simple idea: period care should
              feel comfortable, accessible, and easy to understand.
              We believe every woman deserves to make informed choices
              about her personal care.
            </p>

            <p className="mt-4 text-sm leading-7 text-green-100/75">
              Our focus is on bringing nature-inspired care together
              with everyday comfort, while encouraging open conversations
              about menstrual health.
            </p>
          </div>

          <div className="grid grid-cols-2 gap-4">

            <div className="rounded-2xl border border-white/10 bg-white/10 p-6">
              <Leaf size={27} className="text-[#B8E98A]" />
              <h4 className="mt-4 font-bold">Nature Inspired</h4>
              <p className="mt-2 text-xs leading-6 text-green-100/65">
                Inspired by nature and everyday care.
              </p>
            </div>

            <div className="rounded-2xl border border-white/10 bg-white/10 p-6">
              <Heart size={27} className="text-[#B8E98A]" />
              <h4 className="mt-4 font-bold">Care for Her</h4>
              <p className="mt-2 text-xs leading-6 text-green-100/65">
                Keeping comfort and care at the heart of our purpose.
              </p>
            </div>

            <div className="col-span-2 rounded-2xl border border-white/10 bg-white/10 p-6">
              <ShieldCheck size={27} className="text-[#B8E98A]" />
              <h4 className="mt-3 font-bold">Our Commitment</h4>
              <p className="mt-2 text-xs leading-6 text-green-100/65">
                Encouraging awareness, confidence, and informed
                personal care choices.
              </p>
            </div>

          </div>
        </div>
      </div> */}

    </section>
  );
}
