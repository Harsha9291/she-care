
import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import {
  Leaf,
  ArrowLeft,
  ArrowRight,
  Check,
  Star,
  Send,
} from "lucide-react";

const questions = [
  {
    id: "priorities",
    title: "What matters most to you?",
    subtitle: "Choose what you look for in a sanitary pad.",
    type: "multiple",
    options: [
      "Ultra Soft Comfort",
      "Leak Protection",
      "Herbal Ingredients",
      "Breathable Material",
      "Affordable Price",
      "Eco-Friendly",
    ],
  },
  {
    id: "flavour",
    title: "Which flavour would you prefer?",
    subtitle: "Choose your favourite herbal variant.",
    type: "single",
    options: [
      "Neem Care",
      "Lavender Fresh",
      "Rose Soft",
      "Turmeric Shield",
      "Aloe Vera",
      "Mint Cool",
      "Unscented",
    ],
  },
  {
    id: "variant",
    title: "Which pad size do you prefer?",
    subtitle: "Choose the product that suits your needs.",
    type: "single",
    options: [
      "Regular",
      "XL / Extra Long",
      "Overnight",
      "Heavy Flow",
      "All Variants",
    ],
  },
  {
    id: "price",
    title: "What price range suits you?",
    subtitle: "Help us understand your budget.",
    type: "single",
    options: [
      "Under ₹50",
      "₹50 – ₹100",
      "₹100 – ₹150",
      "₹150 – ₹200",
      "Above ₹200",
    ],
  },
  {
    id: "packaging",
    title: "Which packaging style do you like?",
    subtitle: "Help us choose our packaging design.",
    type: "single",
    options: [
      "Minimal & Elegant",
      "Natural & Herbal",
      "Premium & Luxury",
      "Simple & Eco-Friendly",
    ],
  },
  {
    id: "rating",
    title: "How do you like PadKINGOO?",
    subtitle: "Rate our brand and product concept.",
    type: "rating",
  },
  {
    id: "suggestion",
    title: "Any suggestions for us?",
    subtitle: "Tell us what you would like to improve.",
    type: "textarea",
  },
  {
    id: "contact",
    title: "Connect With Us",
    subtitle: "Share your details so we can stay in touch.",
    type: "contact",
  },
];

export default function Survey() {
  const [step, setStep] = useState(0);
  const [answers, setAnswers] = useState({});
  const [submitted, setSubmitted] = useState(false);

  const question = questions[step];
  const answer = answers[question.id];
  const progress = ((step + 1) / questions.length) * 100;

  const selectAnswer = (value) => {
    setAnswers((prev) => ({
      ...prev,
      [question.id]: value,
    }));
  };

  const toggleAnswer = (value) => {
    const current = answer || [];

    selectAnswer(
      current.includes(value)
        ? current.filter((item) => item !== value)
        : [...current, value]
    );
  };

  const isValid = () => {
    if (question.type === "multiple") return answer?.length > 0;
    if (question.type === "textarea") return true;
    if (question.type === "contact") {
      return (
        answer?.name?.trim() &&
        answer?.email?.trim() &&
        /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(answer.email)
      );
    }
    return Boolean(answer);
  };

  const handleNext = () => {
    if (!isValid()) return;

    if (step < questions.length - 1) {
      setStep((prev) => prev + 1);
    } else {
      console.log("PadKINGOO Survey Responses:", answers);
      
      // Yahan par backend API call kar sakte ho
      // Example:
      // await fetch('/api/survey', {
      //   method: 'POST',
      //   headers: { 'Content-Type': 'application/json' },
      //   body: JSON.stringify(answers)
      // });
      
      setSubmitted(true);
    }
  };

  const resetSurvey = () => {
    setStep(0);
    setAnswers({});
    setSubmitted(false);
  };

  return (
    <section
      id="survey"
      className="bg-[#F5FAF0] px-5 py-16 sm:py-20"
    >
      <div className="mx-auto max-w-[760px]">

        {/* Heading */}
        <div className="mb-10 text-center">
          <div className="mb-4 inline-flex items-center gap-2 text-xs font-bold tracking-widest text-green-700">
            <Leaf size={17} />
            YOUR VOICE MATTERS
          </div>

          <h2 className="text-3xl font-extrabold text-green-950 sm:text-4xl">
            Help Us Make Period Care
            <span className="mt-1 block text-green-700">
              Better for Everyone.
            </span>
          </h2>

          <p className="mx-auto mt-4 max-w-lg text-sm leading-6 text-green-900/60">
            Your feedback helps us understand your needs and
            create better products for everyday comfort.
          </p>
        </div>

        {submitted ? (
          <div className="py-12 text-center">
            <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-green-100 text-green-700">
              <Check size={32} />
            </div>

            <h3 className="mt-5 text-2xl font-bold text-green-950">
              Thank You!
            </h3>

            <p className="mt-3 text-sm text-green-800/60">
              Your feedback means a lot to PadKINGOO.
            </p>

            <button
              onClick={resetSurvey}
              className="mt-6 rounded-full bg-green-800 px-7 py-3 text-sm font-bold text-white"
            >
              Start Again
            </button>
          </div>
        ) : (
          <div>

            {/* Progress */}
            <div className="mb-8 flex items-center justify-between">
              <span className="text-xs font-bold text-green-800">
                QUESTION {step + 1} / {questions.length}
              </span>

              <span className="text-xs font-semibold text-green-700">
                {Math.round(progress)}% Completed
              </span>
            </div>

            <div className="mb-10 h-1.5 overflow-hidden rounded-full bg-green-100">
              <motion.div
                animate={{ width: `${progress}%` }}
                transition={{ duration: 0.4 }}
                className="h-full rounded-full bg-green-700"
              />
            </div>

            {/* Question */}
            <AnimatePresence mode="wait">
              <motion.div
                key={question.id}
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                transition={{ duration: 0.25 }}
              >
                <h3 className="text-2xl font-bold text-green-950 sm:text-3xl">
                  {question.title}
                </h3>

                <p className="mt-2 text-sm text-gray-500">
                  {question.subtitle}
                </p>

                {/* Options */}
                {(question.type === "single" ||
                  question.type === "multiple") && (
                  <div className="mt-8 space-y-3">
                    {question.options.map((option) => {
                      const active =
                        question.type === "multiple"
                          ? (answer || []).includes(option)
                          : answer === option;

                      return (
                        <button
                          key={option}
                          type="button"
                          onClick={() =>
                            question.type === "multiple"
                              ? toggleAnswer(option)
                              : selectAnswer(option)
                          }
                          className={`flex w-full items-center justify-between rounded-xl border px-5 py-4 text-left text-sm font-semibold transition ${
                            active
                              ? "border-green-600 bg-green-50 text-green-900"
                              : "border-green-100 bg-white text-gray-700 hover:border-green-300"
                          }`}
                        >
                          {option}

                          <span
                            className={`flex h-5 w-5 items-center justify-center rounded-full border ${
                              active
                                ? "border-green-700 bg-green-700 text-white"
                                : "border-gray-300"
                            }`}
                          >
                            {active && <Check size={13} />}
                          </span>
                        </button>
                      );
                    })}
                  </div>
                )}

                {/* Rating */}
                {question.type === "rating" && (
                  <div className="mt-10 flex items-center justify-center gap-4">
                    {[1, 2, 3, 4, 5].map((n) => (
                      <button
                        key={n}
                        type="button"
                        onClick={() => selectAnswer(n)}
                      >
                        <Star
                          size={35}
                          className={
                            n <= (answer || 0)
                              ? "fill-yellow-400 text-yellow-400"
                              : "text-gray-300"
                          }
                        />
                      </button>
                    ))}
                  </div>
                )}

                {/* Suggestion */}
                {question.type === "textarea" && (
                  <textarea
                    value={answer || ""}
                    onChange={(e) => selectAnswer(e.target.value)}
                    rows={5}
                    maxLength={500}
                    placeholder="Write your suggestions here..."
                    className="mt-8 w-full resize-none rounded-xl border border-green-100 bg-white p-5 text-sm outline-none focus:border-green-600"
                  />
                )}

                {/* Contact Form */}
                {question.type === "contact" && (
                  <div className="mt-8 space-y-4">
                    <input
                      type="text"
                      placeholder="Your Name"
                      value={answer?.name || ""}
                      onChange={(e) =>
                        selectAnswer({
                          ...answer,
                          name: e.target.value,
                        })
                      }
                      className="w-full rounded-xl border border-green-100 bg-white px-5 py-3.5 text-sm outline-none focus:border-green-600"
                    />

                    <input
                      type="number"
                      placeholder="Phone Number (10 digits) - Optional"
                      value={answer?.phone || ""}
                      onChange={(e) =>
                        selectAnswer({
                          ...answer,
                          phone: e.target.value,
                        })
                      }
                      min="0"
                      max="9999999999"
                      className="w-full rounded-xl border border-green-100 bg-white px-5 py-3.5 text-sm outline-none focus:border-green-600"
                    />

                    <input
                      type="email"
                      placeholder="Email Address"
                      value={answer?.email || ""}
                      onChange={(e) =>
                        selectAnswer({
                          ...answer,
                          email: e.target.value,
                        })
                      }
                      className="w-full rounded-xl border border-green-100 bg-white px-5 py-3.5 text-sm outline-none focus:border-green-600"
                    />
                  </div>
                )}
              </motion.div>
            </AnimatePresence>

            {/* Navigation */}
            <div className="mt-10 flex items-center justify-between border-t border-green-100 pt-6">
              <button
                type="button"
                onClick={() => setStep((prev) => prev - 1)}
                disabled={step === 0}
                className="flex items-center gap-2 text-sm font-semibold text-green-800 disabled:opacity-30"
              >
                <ArrowLeft size={17} />
                Back
              </button>

              <button
                type="button"
                onClick={handleNext}
                disabled={!isValid()}
                className="flex items-center gap-2 rounded-full bg-green-800 px-7 py-3.5 text-sm font-bold text-white transition hover:bg-green-700 disabled:opacity-40"
              >
                {step === questions.length - 1
                  ? "Submit Feedback"
                  : "Continue"}

                {step === questions.length - 1 ? (
                  <Send size={16} />
                ) : (
                  <ArrowRight size={16} />
                )}
              </button>
            </div>

            <p className="mt-6 text-center text-xs text-green-800/50">
              Thank you for helping us make period care better.
            </p>
          </div>
        )}
      </div>
    </section>
  );
}
